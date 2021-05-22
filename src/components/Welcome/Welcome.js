import React, { useContext, useState } from "react";
import "./Welcome.css";
import Girl from "../../assets/img/girl.png";
import { masterContext } from "../../contexts/MasterContext";
const Welcome = () => {
    return (
        <div className="header">
            <div className="container">
                <div class="header_welcome">
                    <div class="welcome_left">
                        <h1 class="header_welcome-title">
                            Онлайн поиск бьюти мастера <br />
                            или салона
                        </h1>
                        <div class="header_func">
                            <input
                                class="inp_header"
                                placeholder="Введите название услуги или салона"
                                type="text"
                            />
                            <button class="btn_header">Найти</button>
                        </div>
                    </div>
                    <div class="welcome_right">
                        <img class="img_1" src={Girl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
