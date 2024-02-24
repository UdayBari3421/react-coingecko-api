import axios from "axios";
import React, { useEffect, useState } from "react";
import TableBox from "./TableBox";

const FetchData = () => {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        )
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("ERR: " + error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-sub">
      {data ? (
        <table>
          <tbody>
            {data.map((coin) => {
              return <TableBox data={coin} key={coin.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <div className="load" id="load">
          <p className="loader"></p>
          <p className="loading">Loading</p>
          {!data &&
            document.getElementById("load") &&
            setTimeout(() => {
              document.getElementById("load").innerHTML =
                "Error loading data Refresh the page. or try again later.";
            }, 5000)}
        </div>
      )}
    </div>
  );
};

export default FetchData;
