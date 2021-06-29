import React, { useContext } from "react";

import AppContext from "../Context/app";

const PaymentButton = () => {
  const { activeCardType } = useContext(AppContext);

  return (
    <button type="submit" className="payment-button">
      {activeCardType[0].toUpperCase() + activeCardType.substring(1)} miles
    </button>
  );
};

export default PaymentButton;
