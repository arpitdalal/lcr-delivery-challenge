import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/app";

const OrderSummary = () => {
  const [tax, setTax] = useState(0);
  const { activeCardTile } = useContext(AppContext);

  useEffect(() => {
    setTax(activeCardTile.cost * 0.13);
  }, [activeCardTile]);

  return (
    <div className='order-summary'>
      <h3>Order summary</h3>
      <div className='order-table'>
        <div className='total-miles'>
          <span>Total miles</span>
          <span>
            <strong>{activeCardTile.amount}</strong>
          </span>
        </div>
        <div className='gst-hst'>
          <span>GST/HST</span>
          <span>
            <strong>${tax}</strong>
          </span>
        </div>
      </div>
      <div className='total'>
        <span>Total Cost</span>
        <span>
          <strong>${activeCardTile.cost + tax}</strong>
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
