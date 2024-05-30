import React from "react";
import "./style.css";
import { TrendingDown } from "@mui/icons-material";
import { TrendingUp } from "@mui/icons-material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="info-flex">
          <div className="symbol-flex">
            <img src={coin.image} className="coin-logo" />
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>
          {/* <button className="watchlist-btn" onClick={(e)=>setWat}>
            <StarBorderRoundedIcon style={{fontSize:"60px"}} />
          </button> */}
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUp />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip-red">
              <TrendingDown />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <div className="volume-container">
            <p className="total_volume">
              Total volume : {coin.total_volume.toLocaleString()}
            </p>
            <p className="total_volume">
              Market Cap : ${coin.market_cap.toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default Grid;
