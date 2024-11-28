import React from 'react';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('access_token');

  if (!token) {
    window.location.href = '/';
    return null;
  }

  return children;
};

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default ProtectedRoute;
