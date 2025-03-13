import { useState } from "react";
import styles from "./Chart.module.css";
import { convertData } from "utils/helper";
import { useCoins } from "src/context/CoinsContext";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart() {
  const [type, setType] = useState("prices");
  const [state, dispatch] = useCoins();
  const { chart } = state;
  const { image, name, current_price, ath, market_cap } = chart?.coinDetails;

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={styles.container}>
      <span
        onClick={() => dispatch({ type: "SET_CHART", payload: null })}
        className={styles.cross}
      >
        x
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>${current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{market_cap?.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

//chart
const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
