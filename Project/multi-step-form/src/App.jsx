import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Review from './Review';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: ''
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <Router>
      <div className="app">
        <h1>Multi-Step Form</h1>
        <Switch>
          <Route path="/step-1">
            <PersonalInfo formData={formData} updateFormData={updateFormData} />
          </Route>
          <Route path="/step-2">
            <AddressInfo formData={formData} updateFormData={updateFormData} />
          </Route>
          <Route path="/step-3">
            <Review formData={formData} />
          </Route>
          <Route path="/" exact>
            <Link to="/step-1">
              <button>Start Form</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
