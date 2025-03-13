import initialState from "constants/coinState";

const coinsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_COINS":
      return { ...state, isLoading: false, coins: payload };

    case "SET_CURRENCY":
      return { ...state, currency: payload };

    case "SET_CHART":
      return { ...state, chart: payload };

    case "NEXT_PAGE":
      return { ...state, page: initialState.page++ };

    case "PREVIOUS_PAGE":
      return { ...state, page: initialState.page-- };

    case "SET_ISLOADING":
      return { ...state, isLoading: payload };
  }
};

export default coinsReducer;
