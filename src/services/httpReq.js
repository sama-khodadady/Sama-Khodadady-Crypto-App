import api from "configs/api";

const getCoinList = async (page, currency) =>
  await api.get(`coins/markets?vs_currency=${currency}&page=${page}`);

const searchCoin = async (query, signal) =>
  await api.get(`search?query=${query}`, { signal });

const marketChart = async (id) =>
  api.get(`coins/${id}/market_chart/?vs_currency=usd&days=7`);

export { getCoinList, searchCoin, marketChart };
