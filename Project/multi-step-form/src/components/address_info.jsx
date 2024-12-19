import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddressInfo = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [localData, setLocalData] = useState({
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zip: formData.zip
  });

  const validate = () => {
    const errors = {};
    if (!localData.streetAddress) errors.streetAddress = 'Street address is required';
    if (!localData.city) errors.city = 'City is required';
    if (!localData.state) errors.state = 'State is required';
    if (!localData.zip) errors.zip = 'Zip code is required';
    return errors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      updateFormData(localData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form>
        <div>
          <label>Street Address:</label>
          <input
            type="text"
            value={localData.streetAddress}
            onChange={(e) => setLocalData({ ...localData, streetAddress: e.target.value })}
          />
          {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            value={localData.city}
            onChange={(e) => setLocalData({ ...localData, city: e.target.value })}
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div>
          <label>State:</label>
          <input
            type="text"
            value={localData.state}
            onChange={(e) => setLocalData({ ...localData, state: e.target.value })}
          />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>

        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            value={localData.zip}
            onChange={(e) => setLocalData({ ...localData, zip: e.target.value })}
          />
          {errors.zip && <span className="error">{errors.zip}</span>}
        </div>
      </form>

      <div>
        <Link to="/step-3">
          <button onClick={handleNext}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default AddressInfo;
