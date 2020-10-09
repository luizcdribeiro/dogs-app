import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm.js';
import LoginCreate from './LoginCreate.js';
import LoginPasswordLost from './LoginPasswordLost.js';
import LoginPasswordReset from './LoginPasswordReset.js';
import { UserContext } from '../../UserContext.js';

import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
