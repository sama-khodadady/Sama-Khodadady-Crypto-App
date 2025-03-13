import styles from "./Search.module.css";
import { useState, useEffect } from "react";
import { searchCoin } from "services/httpReq";
import Loader from "components/modules/Loader";
import { useCoins } from "src/context/CoinsContext";
import { Link } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useCoins();
  const { currency } = state;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    //to not show the previous coins data when we not search anything each time and input is empty
    setCoins([]);
    if (!text) {
      setLoading(false);
      return;
    }

    const search = async () => {
      const response = await searchCoin(text, signal);
      if (response?.data?.coins) {
        setLoading(false);
        setCoins(response?.data?.coins);
      } else {
        alert(response.status.error_message);
      }
    };
    setLoading(true);
    search();

    //cleanup function for previous requsts in search
    return () => controller.abort();
  }, [text]);

  const selectHandler = (event) =>
    dispatch({ type: "SET_CURRENCY", payload: event.target.value });

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <select value={currency} onChange={selectHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>

      {(!!coins.length || loading) && (
        <div className={styles.searchResult}>
          {loading && <Loader />}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <Link to={`/coins/${coin.id}`}>
                  <img src={coin.thumb} alt={coin.name} />
                  <p>{coin.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
