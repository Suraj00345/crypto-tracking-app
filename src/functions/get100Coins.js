import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-fxC37vBtV13NVZb4ycsyGJ1i",
  },
});

export const get100Coins = () => {
  const myCoins = axiosInstance.get(`markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return myCoins;
};
