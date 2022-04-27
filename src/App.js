import React from 'react';
import styles from './styles/style.css'

import { Routes, Route, Link, Navigate } from "react-router-dom";
import CreateUserPage from "./view/СreateUserPage";
import Error from "./view/Error";
import UsersListPage from "./view/UsersListPage";
import Home from "./view/Home";

function App() {


  return (
    <div className="App">
        <header className="header">
          <Link to="/" className="logo" alt="logo"></Link>
          <nav className="main-menu">
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/userslistpage">Список юзеров</Link></li>
              <li><Link to="/createuserpage">Создать юзера</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="userslistpage" element={<UsersListPage />} />
                <Route path="createuserpage" element={<CreateUserPage />} />
                <Route path="404" element={<Error />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
        </main>
        <footer className="footer-content">2022 © dimskill</footer>

    </div>
  );
}

export default App;
