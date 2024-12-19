import React from 'react';

const Review = ({ formData }) => {
  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <div>
        <h3>Personal Information</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Street Address: {formData.streetAddress}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip Code: {formData.zip}</p>
      </div>

      <div>
        <button onClick={() => alert('Form Submitted!')}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
