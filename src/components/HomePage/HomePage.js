import React from "react";
import MasterList from "../MasterList/MasterList";
import Welcome from "../Welcome/Welcome";
import "./HomePage.css";
import Handshake from "../../assets/img/handshake.png";
import Link from "../../assets/img/link.png";
import Chat from "../../assets/img/chat (1).png";

const HomePage = () => {
    return (
        <div>
            <Welcome />
            <div className="container"></div>
            <MasterList />
            <div class="mission">
                <div class="container">
                    <div class="mission_title">
                        <h2 class="title_mission">Наша миссия</h2>
                    </div>
                    <div class="mission_wrapper">
                        <div class="handle">
                            <img class="mission_img" src={Handshake} alt="" />
                            <p>
                                Мы помогаем клиентам <br />
                                и мастерам находить <br />
                                друг друга
                            </p>
                        </div>
                        <div class="link">
                            <img class="mission_img" src={Link} alt="" />
                            <p>
                                Мы обьединяем самых <br />
                                разных мастеров по <br />
                                уходу за собой
                            </p>
                        </div>
                        <div class="chat">
                            <img class="mission_img" src={Chat} alt="" />
                            <p>
                                Мы предлагаем вам <br />
                                выбирать мастеров на <br />
                                основе отзывов и работ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
