// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Dashboard</h2>
//       <ul>
//         <li><Link to="/dashboard/create">Create Blog</Link></li>
//         <li><Link to="/dashboard/view">View Blogs</Link></li>
//         <li><Link to="/dashboard/logout">Logout</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// import { Link } from 'react-router-dom';
// import './dashboard.css'; // Import the stylesheet

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">Dashboard</h2>
//       <ul className="sidebar-menu">
//         <li className="sidebar-item">
//           <Link to="/dashboard/create" className="sidebar-link">Create Blog</Link>
//         </li>
//         <li className="sidebar-item">
//           <Link to="/dashboard/view" className="sidebar-link">View Blogs</Link>
//         </li>
//         <li className="sidebar-item">
//           <Link to="/dashboard/logout" className="sidebar-link">Logout</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import { Link } from 'react-router-dom';
import './dashboard.css'; // Import the external CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/dashboard/create" className="sidebar-link">Create Blog</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/dashboard/view" className="sidebar-link">View Blogs</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/dashboard/logout" className="sidebar-link">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
