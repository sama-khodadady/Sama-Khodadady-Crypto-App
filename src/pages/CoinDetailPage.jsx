import { Link, useParams } from "react-router-dom";
import Chart from "components/modules/Chart";
import { marketChart } from "services/httpReq";
import Loader from "components/modules/Loader";
import CoinInfo from "components/modules/CoinInfo";
import styles from "pages/CoinDetailPage.module.css";
import { useCoin, useCoins } from "context/CoinsContext";

function CoinDetailPage() {
  const { id } = useParams();
  const [state, dispatch] = useCoins();
  console.log(state);

  const coinDetails = useCoin(id) || {};
  const { image } = coinDetails;

  const showHandler = async () => {
    try {
      const response = await marketChart(id);
      dispatch({
        type: "SET_CHART",
        payload: { ...response?.data, coinDetails },
      });
    } catch (error) {
      dispatch({ type: "SET_CHART", payload: null });
    }
  };

  return (
    <div className={styles.coin}>
      {!coinDetails ? (
        <Loader />
      ) : (
        <div className={styles.details}>
          <div className={styles.sidebar}>
            <img src={image} alt={coinDetails.name} />
            <div>
              <button onClick={showHandler}>Show Chart</button>
              <Link to="/coins">Go Back</Link>
            </div>
          </div>
          <CoinInfo coinDetails={coinDetails} />
        </div>
      )}
      {!!state?.chart && <Chart />}
    </div>
  );
}

export default CoinDetailPage;
