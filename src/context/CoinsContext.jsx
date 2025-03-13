import coinsReducer from "utils/coinsReducer";
import { getCoinList } from "services/httpReq";
import initialState from "constants/coinState";
import { createContext, useContext, useEffect, useReducer } from "react";

const CoinsContext = createContext();

function CoinsProvider({ children }) {
  const [state, dispatch] = useReducer(coinsReducer, initialState);

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await getCoinList(state.page, state.currency);
      dispatch({ type: "SET_COINS", payload: data?.data });
    };
    fetchCoins();
  }, [state.page, state.currency]);

  return (
    <CoinsContext.Provider value={{ state, dispatch }}>
      {children}
    </CoinsContext.Provider>
  );
}

const useCoins = () => {
  const { state, dispatch } = useContext(CoinsContext);
  return [state, dispatch];
};

const useCoin = (id) => {
  const { state } = useContext(CoinsContext);
  const coin = state.coins.find((coin) => coin.id === id);
  return coin;
};

export default CoinsProvider;
export { useCoins, useCoin };
