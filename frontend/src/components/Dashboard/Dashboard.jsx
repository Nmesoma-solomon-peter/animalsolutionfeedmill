import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import CreateBlog from './CreateBlog';
import ViewBlogs from './ViewBlogs';
import ProtectedRoute from '../Auth/ProtectedRoute';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <Routes>
                    <Route
                        path="create"
                        element={
                            <ProtectedRoute>
                                <CreateBlog />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="view"
                        element={
                            <ProtectedRoute>
                                <ViewBlogs />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
