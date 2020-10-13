import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext.js';

const ProtectedRoute = props => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route {...props} />;
  if (login === false) return <Navigate to="/login" />;
  return null;
};

export default ProtectedRoute;
