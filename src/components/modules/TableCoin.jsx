import { Link } from "react-router-dom";
import chartUp from "assets/chart-up.svg";
import chartDown from "assets/chart-down.svg";
import { marketChart } from "services/httpReq";
import { useCoins } from "src/context/CoinsContext";
import Loader from "components/modules/Loader";
import styles from "../modules/TableCoin.module.css";

function TableCoin() {
  const [state, dispatch] = useCoins();
  const { coins, isLoading, currency } = state;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                key={coin.id}
                coin={coin}
                currency={currency}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

//TableRow component used for each coin in TableCoin component
function TableRow({ coin, currency, dispatch }) {
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  } = coin;

  return (
    <tr>
      <td>
        <Link to={`/coins/${id}`} className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </Link>
      </td>
      <td>{name}</td>
      <td>
        {currency === "eur" ? "€" : currency === "jpy" ? "¥" : "$"}
        {current_price?.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change?.toFixed(2)}%
      </td>
      <td>{total_volume?.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}
