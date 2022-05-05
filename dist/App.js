import React from 'react';
import { Routes, Route, Link, Navigate, } from 'react-router-dom';
import './styles/style.css';
import CreateUserPage from './view/СreateUserPage';
import Error from './view/Error';
import UsersListPage from './view/UsersListPage';
import Home from './view/Home';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "header" },
            React.createElement(Link, { to: "/", className: "logo", alt: "logo" }),
            React.createElement("nav", { className: "main-menu" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/userslistpage" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u044E\u0437\u0435\u0440\u043E\u0432")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/createuserpage" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u044E\u0437\u0435\u0440\u0430"))))),
        React.createElement("main", { className: "main-content" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "userslistpage", element: React.createElement(UsersListPage, null) }),
                React.createElement(Route, { path: "createuserpage", element: React.createElement(CreateUserPage, null) }),
                React.createElement(Route, { path: "404", element: React.createElement(Error, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(Navigate, { replace: true, to: "/404" }) }))),
        React.createElement("footer", { className: "footer-content" }, "2022 \u00A9 dimskill")));
}
export default App;
//# sourceMappingURL=App.js.map