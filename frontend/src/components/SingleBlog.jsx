import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import './SingleBlog.css';

const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axiosInstance.get(`/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-blog">
            <div className="single-blog-header">
                <h1>{blog.title}</h1>
                <p className="single-blog-meta">
                    By {blog.username} | {new Date(blog.createdAt).toLocaleDateString()}
                </p>
            </div>
            <div className="single-blog-image">
                <img src={blog.imageUrl} alt={blog.title} />
            </div>
            <div className="single-blog-content">
                <p>{blog.content}</p>
            </div>
            <div className="single-blog-tags">
                <strong>Tags:</strong> {blog.tags.join(', ')}
            </div>
        </div>
    );
};

export default SingleBlog;
