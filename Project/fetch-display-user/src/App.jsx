import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // State to hold users data, loading, and error states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from the API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);  // Set the user data
        setLoading(false);         // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message);  // Set error message if the request fails
        setLoading(false);         // Set loading to false in case of error
      });
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>User List</h1>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
