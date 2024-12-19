import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [localData, setLocalData] = useState({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email
  });

  const validate = () => {
    const errors = {};
    if (!localData.firstName) errors.firstName = 'First name is required';
    if (!localData.lastName) errors.lastName = 'Last name is required';
    if (!localData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(localData.email)) errors.email = 'Email is invalid';
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
      <h2>Step 1: Personal Information</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={localData.firstName}
            onChange={(e) => setLocalData({ ...localData, firstName: e.target.value })}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={localData.lastName}
            onChange={(e) => setLocalData({ ...localData, lastName: e.target.value })}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={localData.email}
            onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </form>

      <div>
        <Link to="/step-2">
          <button onClick={handleNext}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
