import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import CreateBlog from './CreateBlog';
import ViewBlogs from './ViewBlogs';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="create" element={<CreateBlog />} />
          <Route path="view" element={<ViewBlogs />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;