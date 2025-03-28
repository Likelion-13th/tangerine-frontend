import React from 'react';
import { Link, useLocation } from "react-router-dom";
import"../styles/Header.css";

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    return(
        <div className="header-container">
            <Link to="/" className={currentPage === "/" ? "active" : ""}> LIKELION </Link>
            <div className="header-subtitle-wrapper">
                <Link to="/new" className={currentPage === "/new" ? "active" : ""}> New </Link>
                <Link to="/perfume" className={currentPage === "/perfume" ? "active" : ""}> Perfume </Link>
                <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : ""}> Diffuser </Link>
                <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}> Mypage </Link>
            </div>
        </div>
    );
};


export default Header;