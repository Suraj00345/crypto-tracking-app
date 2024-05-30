import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponet from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/common/Footer";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponet coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationControlled
            page={page}
            handlePageChange={handlePageChange}
            />
          )}
          <Footer/>
          </>
        </div>
      )}
    </>
  );
}

export default DashboardPage;
