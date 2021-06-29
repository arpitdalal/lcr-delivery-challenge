import React from "react";

import PaymentButton from "./PaymentButton";

const PaymentContainer = ({ fields, setFields }) => {
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className='payment-container'>
      <div>
        <input
          id='terms-condition'
          type='checkbox'
          value={fields.termsRead}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor='terms-condition'>
          I agree to the <a href='#'>terms & conditions</a>
        </label>
      </div>
      <PaymentButton />
    </div>
  );
};

export default PaymentContainer;
