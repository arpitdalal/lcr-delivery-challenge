import React, { useState } from "react";
import BillingAddressForm from "./BillingAddressForm";
import PaymentContainer from "./PaymentButtonContainer";
import PaymentDetailsForm from "./PaymentDetailsForm";

const PaymentForm = () => {
  const [fields, setFields] = useState({
    cardholderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    streetAddress: "",
    aptSiteUnitNumber: "",
    country: "default",
    stateProvince: "default",
    cityTown: "",
    zipPostalCode: "",
    phoneNumber: "",
    email: "",
    termsRead: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='payment-details'>
        <h3>Payment details</h3>
        <p>
          We accept all major credit cards. Please ensure that you enter your
          Order summary details exactly as they appear on your credit card
          statement. All fields are required unless is indicated.
        </p>
        <PaymentDetailsForm fields={fields} setFields={setFields} />
      </div>
      <div className='billing-details'>
        <h3>Billing address</h3>
        <BillingAddressForm fields={fields} setFields={setFields} />
      </div>
      <PaymentContainer fields={fields} setFields={setFields} />
    </form>
  );
};

export default PaymentForm;
