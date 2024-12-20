// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../axiosInstance'; // Import the Axios instance

// const ViewBlogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axiosInstance.get('/blogs', {
//           headers: {
//             'accept': '*/*',
//             'apiKey': 'e4b81627737537202b671de8b402269461b6eaaa0b0f471df976a0472fee4466', // Include your API key if needed
//           },
//         });
//         setBlogs(response.data); // Set the fetched blogs to state
//       } catch (err) {
//         setError(err.response ? err.response.data : err.message); // Handle error
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchBlogs(); // Call the fetch function
//   }, []); // Empty dependency array means this effect runs once on mount

//   if (loading) return <div>Loading...</div>; // Show loading state
//   if (error) return <div>Error: {error}</div>; // Show error state

//   return (
//     <div>
//       <h2>View Blogs</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id}>
//             <h3>{blog.title}</h3>
//             <img src={blog.imageUrl} alt={blog.title} style={{ width: '100px', height: 'auto' }} />
//             <p>{blog.content}</p>
//             <p>Tags: {blog.tags.join(', ')}</p>
//             <p>User ID: {blog.userId}</p>
            {/* Add buttons for editing and deleting if needed */}
//           

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance'; // Import the Axios instance
import './dashboard.css'; // Import the external CSS file

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs', {
          headers: {
            accept: '*/*',
            apiKey: 'e4b81627737537202b671de8b402269461b6eaaa0b0f471df976a0472fee4466', // Include your API key if needed
          },
        });
        setBlogs(response.data); // Set the fetched blogs to state
      } catch (err) {
        setError(err.response ? err.response.data : err.message); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBlogs(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div className="loading">Loading...</div>; // Show loading state
  if (error) return <div className="error">Error: {error}</div>; // Show error state

  return (
    <div className="view-blogs">
      <h2 className="view-blogs-title">View Blogs</h2>
      <ul className="blog-list">
        {blogs.map((blog) => (
          <li key={blog.id} className="blog-item">
            <h3 className="blog-title">{blog.title}</h3>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <p className="blog-content">{blog.content}</p>
            <p className="blog-tags">Tags: {blog.tags.join(', ')}</p>
            <p className="blog-user-id">User ID: {blog.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBlogs;

