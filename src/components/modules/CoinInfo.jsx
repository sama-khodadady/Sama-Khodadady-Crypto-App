import { useCoins } from "context/CoinsContext";
import styles from "../modules/CoinInfo.module.css";

function CoinInfo({ coinDetails }) {
  const [state] = useCoins();
  const { currency } = state;

  const {
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
    ath,
    ath_change_percentage: ath_change,
    ath_date,
    atl,
    atl_change_percentage: atl_change,
    atl_date,
    last_updated,
    circulating_supply,
    high_24h,
    low_24h,
    market_cap,
    market_cap_change_percentage_24h: market_change,
    market_cap_rank,
    total_supply,
  } = coinDetails;

  return (
    <div className={styles.info}>
      <span>
        <h3>Name :</h3>
        <p>{name}</p>
      </span>
      <span>
        <h3>Price :</h3>
        <p>
          {currency === "eur" ? "€" : currency === "jpy" ? "¥" : "$"}
          {current_price?.toLocaleString()}
        </p>
      </span>
      <span>
        <h3>24h :</h3>
        <p className={price_change > 0 ? styles.success : styles.error}>
          {price_change?.toFixed(2)}%
        </p>
      </span>
      <span>
        <h3>High 24h :</h3>
        <p className={high_24h > 0 ? styles.success : styles.error}>
          {high_24h?.toFixed(2)}%
        </p>
      </span>
      <span>
        <h3>Low 24h :</h3>
        <p className={low_24h > 0 ? styles.success : styles.error}>
          {low_24h?.toFixed(2)}%
        </p>
      </span>
      <span>
        <h3>Total Volume:</h3>
        <p>{total_volume?.toLocaleString()}</p>
      </span>
      <span>
        <h3>Ath :</h3>
        <p>{ath?.toFixed(2)}</p>
      </span>
      <span>
        <h3>Ath Change :</h3>
        <p className={ath_change > 0 ? styles.success : styles.error}>
          {ath_change?.toFixed(2)}%
        </p>
      </span>
      <span>
        <h3>Ath Date :</h3>
        <p>{new Date(ath_date).toLocaleDateString()}</p>
      </span>
      <span>
        <h3>Atl:</h3>
        <p className={atl > 0 ? styles.success : styles.error}>
          {atl?.toFixed(2)}%
        </p>
      </span>
      <span>
        <h3>Atl Change:</h3>
        <p className={atl_change > 0 ? styles.success : styles.error}>
          {atl_change?.toFixed(2)}%
        </p>
      </span>
      <span>
        <h3>Atl Date :</h3>
        <p>{new Date(atl_date).toLocaleDateString()}</p>
      </span>
      <span>
        <h3>Last update :</h3>
        <p>{new Date(last_updated).toLocaleDateString()}</p>
      </span>
      <span>
        <h3>Circulating Supply:</h3>
        <p>{circulating_supply?.toLocaleString()}</p>
      </span>
      <span>
        <h3>Market Cap:</h3>
        <p>{market_cap?.toLocaleString()}</p>
      </span>
      <span>
        <h3>Market Change:</h3>
        <p className={market_change > 0 ? styles.success : styles.error}>
          {market_change?.toFixed()}%
        </p>
      </span>
      <span>
        <h3>Market Cap Rank:</h3>
        <p>{market_cap_rank?.toLocaleString()}</p>
      </span>
      <span>
        <h3>Total Supply:</h3>
        <p>{total_supply?.toLocaleString()}</p>
      </span>
    </div>
  );
}

export default CoinInfo;
