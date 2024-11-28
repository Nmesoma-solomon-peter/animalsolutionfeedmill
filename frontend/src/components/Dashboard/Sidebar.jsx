import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/create">Create Blog</Link></li>
        <li><Link to="/dashboard/view">View Blogs</Link></li>
        <li><Link to="/dashboard/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;