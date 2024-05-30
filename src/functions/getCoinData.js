import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-fxC37vBtV13NVZb4ycsyGJ1i",
  },
});

export const getCoinData = (coinID) => {
  const MyData = axiosInstance.get(`${coinID}`)
    .then((response) => {
      //   console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return MyData;
};
