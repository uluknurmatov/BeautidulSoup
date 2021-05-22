import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div class="header">
            <div class="container">
                <div class="navbar">
                    <div class="navbar_left">
                        <div class="logo">
                            <img src={Logo} alt="" />
                            <p>
                                <Link to="/"> BeautifilSoup</Link>
                            </p>
                        </div>
                    </div>

                    <div class="navbar_right">
                        <ul class="navbar_menu">
                            {/* <li class="navbar_item">Мастера</li> */}
                            <Link>
                                <li class="navbar_item">Статьи</li>
                            </Link>
                            <li class="navbar_item">
                                <Link to="/use">Как пользоваться</Link>
                            </li>
                            <li class="navbar_item">
                                <Link to="about">О нас</Link>
                            </li>
                            <li class="navbar_item">
                                <Link to="/add"> Добавить</Link>
                            </li>
                        </ul>
                        <button class="btn-header">Войти</button>
                        <button class="btn-header">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
