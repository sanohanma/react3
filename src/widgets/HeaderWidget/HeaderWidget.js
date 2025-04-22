import React from 'react';
import styles from './style.module.scss';
import '../../app/index.css';
import { NavLink } from 'react-router-dom';
import Nav from '../../app/navigation/Nav';
export default function HeaderWidget() {
    return (React.createElement("header", null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: styles.head },
                React.createElement(NavLink, { to: '/', className: styles.logo },
                    React.createElement("img", { src: "/logo.png", alt: "logo" })),
                React.createElement("label", { htmlFor: "search", className: styles.searchLabel }),
                React.createElement(Nav, null),
                React.createElement("div", { className: styles.btns },
                    React.createElement("button", { className: styles.likebtn }),
                    React.createElement(NavLink, { to: '/cart', className: styles.cart }))))));
}
