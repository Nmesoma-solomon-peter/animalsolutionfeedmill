import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import Blogcard from './Blogcard';
import OtherHero from './OtherHero';

function Blog() {
  // State to store the list of blogs
  const [blogs, setBlogs] = useState([]);
  
  // Hook for navigation
  const navigate = useNavigate();

  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Make an API call to fetch blog data
        const response = await axiosInstance.get('/blogs');
        setBlogs(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching blogs:', error); // Log any errors
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures this effect runs only once

  // Handle navigation to the detailed blog page when a card is clicked
  const handleCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <>
      {/* Hero section with the blog title and description */}
      <OtherHero h4="Blog" p="Explore our latest blogs and updates" />
      
      {/* Blog cards displayed in a responsive grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 container-fluid mt-5">
        {blogs.map((blog) => (
          <Blogcard
            key={blog.id} // Unique key for each blog
            imageURL={blog.imageUrl} // Blog image URL
            animal={blog.tags.join(', ')} // Blog tags formatted as a comma-separated string
            title={blog.title} // Blog title
            person={blog.username} // Blog author's username
            date={new Date(blog.createdAt).toLocaleDateString()} // Blog creation date in a readable format
            onCardClick={() => handleCardClick(blog.id)} // Pass the blog ID for navigation
          />
        ))}
      </div>
    </>
  );
}

export default Blog;
