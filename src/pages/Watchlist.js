import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import TabsComponet from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import { Link } from "react-router-dom";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    if (coins && allCoins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {loading || !coins ? (
          <Loader />
        ) : (
          <div style={{ minHeight: "90vh" }}>
            {myWatchlist?.length === 0 || !coins ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    color: "var(--white)",
                  }}
                >
                  No Items in the Watchlist
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link to="/dashboard">
                    <Button
                      text={"Dashboard"}
                      onClick={() => console.log("btn clicked")}
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <div style={{ height: "95vh" }}>
                <TabsComponet coins={myWatchlist} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default WatchlistPage;
