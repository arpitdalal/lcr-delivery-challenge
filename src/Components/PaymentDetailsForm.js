import React from "react";

const PaymentDetailsForm = ({ fields, setFields }) => {
  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    if (name === "cardNumber" && val.length > 16) {
      return;
    }

    if ((name === "expDate" || name === "cvv") && val.length > 4) {
      return;
    }

    setFields({
      ...fields,
      [name]: val,
    });
  };

  return (
    <>
      <div className='form-control'>
        <label>Cardholder name</label>
        <input
          type='text'
          name='cardholderName'
          value={fields.cardholderName}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Card number</label>
        <input
          type='number'
          name='cardNumber'
          value={fields.cardNumber}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Expiration date</label>
        <input
          type='number'
          placeholder='MMYY'
          autoComplete='false'
          maxLength='4'
          size='4'
          name='expDate'
          value={fields.expDate}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>CVV</label>
        <input
          type='number'
          autoComplete='false'
          maxLength='4'
          size='4'
          name='cvv'
          value={fields.cvv}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
    </>
  );
};

export default PaymentDetailsForm;
