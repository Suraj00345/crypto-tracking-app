import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../coin/CoinInfo/index";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../coin/PriceType";

function CoinPage() {
  const { coinID } = useParams();
  const [isLoading, SetIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState([]);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (coinID) {
      getData();
    }
  }, [coinID]);

  async function getData() {
    const data = await getCoinData(coinID);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(coinID, days, priceType);
      if (prices.length > 0) {
        console.log("hehehe");

        settingChartData(setChartData, prices);
        SetIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    SetIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(coinID, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      SetIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    SetIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(coinID, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      SetIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
