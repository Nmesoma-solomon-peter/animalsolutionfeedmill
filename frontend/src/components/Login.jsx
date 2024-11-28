// import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/login', formData);
  //     setMessage(`Welcome, ${response.data.user.username}!`);
  //     // Save the token in localStorage or context
  //     localStorage.setItem('token', response.data.token);
  //   } catch (error) {
  //     setMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
  //   }
  // };

  // return (
  //   <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
  //     <h2>Login</h2>
  //     {message && <p style={{ color: 'red' }}>{message}</p>}
  //     <form onSubmit={handleSubmit}>
  //       <div style={{ marginBottom: '10px' }}>
  //         <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
  //         <input
  //           type="text"
  //           id="username"
  //           name="username"
  //           value={formData.username}
  //           onChange={handleChange}
  //           required
  //           style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
  //         />
  //       </div>
  //       <div style={{ marginBottom: '10px' }}>
  //         <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
  //         <input
  //           type="password"
  //           id="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //           required
  //           style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
  //         />
  //       </div>
  //       <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
  //         Login
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Login;
