import React from "react";
import "./Footer.css";
import Instagram from "../../assets/img/instagram.png";
import Vk from "../../assets/img/vk.png";
import Facebook from "../../assets/img/facebook.png";

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
                <div class="footer_wrapper">
                    <div class="content_1">
                        <h3>BeautifilSoup</h3>
                        <p>Условия сотрудничества</p>
                        <p>Салонам красоты и школам</p>
                        <p>Размещение информации</p>
                    </div>
                    <div class="content_2">
                        <h3>О нашем сайте</h3>
                        <p>О проекте</p>
                        <p>Beautifilsoup@mail.ru</p>
                    </div>
                    <div class="content_3">
                        <img class="media" src={Instagram} alt="" />
                        <img class="media" src={Vk} alt="" />
                        <img class="media" src={Facebook} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
