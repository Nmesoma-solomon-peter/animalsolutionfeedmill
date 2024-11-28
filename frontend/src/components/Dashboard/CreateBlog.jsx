// import { useState } from 'react';
// import axiosInstance from '../../axiosInstance';

// const CreateBlog = () => {
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState(null);
//   const [tags, setTags] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const blogData = {
//       title,
//       content,
//       imageUrl: image ? URL.createObjectURL(image) : '',
//       tags: tags.split(',').map(tag => tag.trim()), 
//       userId: 1,
//     };

//     try {
//       const response = await axiosInstance.post('/blogs', blogData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Blog created successfully:', response.data);
//     } catch (error) {
//       console.error('Error creating blog:', error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Tags (comma separated)"
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//         <button type="submit">Create Blog</button>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;



import { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import './dashboard.css'; // Import the external CSS file

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      imageUrl: image ? URL.createObjectURL(image) : '',
      tags: tags.split(',').map((tag) => tag.trim()),
      userId: 1,
    };

    try {
      const response = await axiosInstance.post('/blogs', blogData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Blog created successfully:', response.data);
    } catch (error) {
      console.error('Error creating blog:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="create-blog">
      <h2 className="create-blog-title">Create Blog</h2>
      <form onSubmit={handleSubmit} className="create-blog-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-textarea"
          required
        />
        <button type="submit" className="form-button">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
