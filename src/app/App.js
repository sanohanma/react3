import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import ContactUs from '../pages/conatactUs/ContactUs';
import Blog from '../pages/blog/Blog';
import Cart from '../pages/cart/Cart';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
export default function App() {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
        React.createElement(Route, { path: '/contactsUs', element: React.createElement(ContactUs, null) }),
        React.createElement(Route, { path: '/blog', element: React.createElement(Blog, null) }),
        React.createElement(Route, { path: '/cart', element: React.createElement(Cart, null) }),
        React.createElement(Route, { path: '/catalog', element: React.createElement(CatalogPage, null) }),
        React.createElement(Route, { path: '*', element: React.createElement(NotFoundPage, null) })));
}
