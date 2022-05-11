import * as React from 'react';
import {
  Routes, Route, Link, Navigate,
} from 'react-router-dom';
import './styles/style.css';

import CreateUserPage from './view/СreateUserPage';
import Error from './view/Error';
import UsersListPage from './view/UsersListPage';
import Home from './view/Home';
import DashBoard from './view/DashBoard';

function App() {
  return (
    <div className="App shadow-container">
      <header className="header">
        <Link to="/" className="logo" />
        <nav className="main-menu">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/userslistpage">Список юзеров</Link>
            </li>
            <li>
              <Link to="/createuserpage">Создать юзера</Link>
            </li>
            <li>
              <Link to="/dashboard">Dash</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userslistpage" element={<UsersListPage />} />
          <Route path="createuserpage" element={<CreateUserPage />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </main>
      <footer className="footer-content">2022 © dimskill</footer>
    </div>
  );
}

export default App;
