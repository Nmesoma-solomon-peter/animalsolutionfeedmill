import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import Blogcard from './Blogcard';
import OtherHero from './OtherHero';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <>
      <OtherHero h4="Blog" p="Explore our latest blogs and updates" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 container-fluid mt-5">
        {blogs.map((blog) => (
          <Blogcard
            key={blog.id}
            imageURL={blog.imageUrl}
            animal={blog.tags.join(', ')}
            title={blog.title}
            person={blog.username}
            date={new Date(blog.createdAt).toLocaleDateString()}
            onCardClick={() => handleCardClick(blog.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Blog;
