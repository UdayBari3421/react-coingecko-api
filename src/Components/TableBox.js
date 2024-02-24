import React from "react";

const TableBox = ({ data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <tr>
      <td>
        <span>
          <img src={data.image} alt="" />
          <h3>{data.name}</h3>
        </span>
      </td>
      <td>
        <p>{data.symbol}</p>
      </td>
      <td>
        <p>{formatter.format(data.current_price)}</p>
      </td>
      <td>
        <p>{formatter.format(data.market_cap)}</p>
      </td>
      <td>
        <p
          style={{
            color: data.price_change_percentage_24h < 0 ? "red" : "green",
          }}
        >
          {parseFloat(parseFloat(data.price_change_percentage_24h).toFixed(2))}%
        </p>
      </td>
      <td>
        <p>Mkt Cap : {formatter.format(data.market_cap)}</p>
      </td>
    </tr>
  );
};

export default TableBox;
