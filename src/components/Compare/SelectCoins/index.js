import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import { Select, MenuItem } from "@mui/material";
import "./style.css";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  }

  return (
    <div className="coins-flex">
      <p>Crypto1</p>
      <Select
        sx={style}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={crypto1}
        label="Crypto 1"
        onChange={(e) => handleCoinChange(e, false)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <p>Crypto2</p>
      <Select
        sx={style}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={crypto2}
        label="Crypto 2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
