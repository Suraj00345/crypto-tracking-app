import React, { useState } from "react";
import "./style.css";
import { TrendingDown, TrendingUp } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

function List({ coin, key }) {

  const [added,setAdded]=useState(hasBeenAdded(coin.id));

  const handleClick=(event)=>{
      event.preventDefault();
      if (added) {
          removeFromWatchlist(coin.id);
          setAdded(false);
      } else {
          addToWatchlist(coin.id);
          setAdded(true);
      }
  }


  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
        className="list-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Tooltip title="Coin Logo">
          <td className="td-image">
            <img src={coin.image} className="coin-logo" alt="image" />
          </td>
        </Tooltip>
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>

        <Tooltip title="Coin Price Change Last 24Hrs">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUp />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip-red td-icon">
                <TrendingDown />
              </div>
            </td>
          )}
        </Tooltip>

        <Tooltip title="Current Price">
          <td>
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>

        <Tooltip title="Total Volume">
          <td>
            <p className="total_volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="desktop-td-mkt">
            <p className="total_volume td-right-align">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="mobile-td-mkt">
            <p className="total_volume td-right-align">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="added to Watchlist">
          <IconButton
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
            className="watchlist-btn"
            onClick={(event) => handleClick(event)}
          >
            {added ? (
              <StarRateRoundedIcon
                style={{ fontSize: "50px", padding: "10px" }}
              />
            ) : (
              <StarBorderRoundedIcon
                style={{ fontSize: "50px", padding: "10px" }}
              />
            )}
          </IconButton>
          </Tooltip>
      </motion.tr>
    </Link>
  );
}

export default List;
