import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-fxC37vBtV13NVZb4ycsyGJ1i",
  },
});

export const getCoinPrices = (coinID, days, priceType) => {
  const prices = axiosInstance.get(`${coinID}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response) => {
      console.log("prices>>>>", response.data.prices);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log("error>>>", error);
    });

  return prices;
};
