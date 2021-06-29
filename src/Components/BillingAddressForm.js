import React from "react";

const BillingAddressForm = ({ fields, setFields }) => {
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className='form-control'>
        <label>Street Address</label>
        <input
          type='text'
          name='streetAddress'
          value={fields.streetAddress}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Apt, Site, Unit Number (Optional)</label>
        <input
          type='text'
          name='aptSiteUnitNumber'
          value={fields.aptSiteUnitNumber}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-control'>
        <label>City / Town</label>
        <input
          type='text'
          name='cityTown'
          value={fields.cityTown}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Country</label>
        <select
          value={fields.country}
          name='country'
          defaultValue='default'
          onChange={(e) => handleChange(e)}
          required
        >
          <option disabled value='default'>
            Select a Country
          </option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
        </select>
      </div>
      <div className='form-control'>
        <label>State / Province</label>
        <select
          value={fields.stateProvince}
          name='stateProvince'
          defaultValue='default'
          onChange={(e) => handleChange(e)}
          required
        >
          <option disabled value='default'>
            Select a state or province
          </option>
        </select>
      </div>
      <div className='form-control'>
        <label>Zip / Postal code</label>
        <input
          type='text'
          name='zipPostalCode'
          value={fields.zipPostalCode}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Phone Number</label>
        <input
          type='tel'
          name='phoneNumber'
          value={fields.phoneNumber}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Email receipt to</label>
        <input
          type='email'
          name='email'
          value={fields.email}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
    </>
  );
};

export default BillingAddressForm;
