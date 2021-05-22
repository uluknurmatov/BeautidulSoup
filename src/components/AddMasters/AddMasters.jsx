import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { masterContext } from "../../contexts/MasterContext";
import "./AddMasters.css";

const AddMasters = () => {
    const [master, setMaster] = useState({
        img: "",
        city: "",
        street: "",
        name: "",
        number: "",
        prof: "",
        service: "",
        comment: "",
        price: "",
        secondService: "",
        secondPrice: "",
        thirtyService: "",
        thirtyPrice: "",
        fortyService: "",
        fortyPrice: "",
        fiftyService: "",
        fiftyPrice: "",
        sixtyService: "",
        sixtyPrice: "",
        oneImg: "",
        twoImg: "",
        threeImg: "",
        fourImg: "",
        fiveImg: "",
    });

    const { postNewMaster } = useContext(masterContext);

    const handleValues = (e) => {
        let newMaster = {
            ...master,
            [e.target.name]: e.target.value,
        };
        setMaster(newMaster);
    };

    const handleClick = () => {
        postNewMaster(master);
        setMaster({
            img: "",
            city: "",
            street: "",
            name: "",
            number: "",
            prof: "",
            service: "",
            comment: "",
            price: "",
            secondService: "",
            secondPrice: "",
            thirtyService: "",
            thirtyPrice: "",
            fortyService: "",
            fortyPrice: "",
            fiftyService: "",
            fiftyPrice: "",
            sixtyService: "",
            sixtyPrice: "",
            oneImg: "",
            twoImg: "",
            threeImg: "",
            fourImg: "",
            fiveImg: "",
        });
        if (
            master.img === "" ||
            master.city === "" ||
            master.street === "" ||
            master.name === "" ||
            master.number === "" ||
            master.prof === "" ||
            master.service === "" ||
            master.price === "" ||
            master.secondService === "" ||
            master.secondPrice === ""
        ) {
            alert("Заполните все поля");
        }
    };

    return (
        <div className="inps">
            <p>Обязательные поля:</p>
            <input
                className="inp-add"
                value={master.img}
                name="img"
                onChange={handleValues}
                type=""
                placeholder="Ваша фотография"
            />
            <input
                className="inp-add"
                value={master.city}
                name="city"
                onChange={handleValues}
                type="text"
                placeholder="Город"
            />
            <input
                className="inp-add"
                value={master.street}
                name="street"
                onChange={handleValues}
                type="text"
                placeholder="Улица"
            />
            <input
                className="inp-add"
                value={master.name}
                name="name"
                onChange={handleValues}
                type="text"
                placeholder="Ваше имя"
            />
            <input
                className="inp-add"
                value={master.number}
                name="number"
                onChange={handleValues}
                type="number"
                placeholder="Ваш номер"
            />
            <input
                className="inp-add"
                value={master.prof}
                name="prof"
                onChange={handleValues}
                type="text"
                placeholder="Профессия"
            />

            <div className="serv">
                <input
                    className="inp-add"
                    value={master.service}
                    name="service"
                    onChange={handleValues}
                    type="text"
                    placeholder="1)Тип услуги"
                />
                <input
                    className="inp-add"
                    value={master.price}
                    name="price"
                    onChange={handleValues}
                    type="number"
                    placeholder="Цена"
                />
            </div>
            <div className="serv">
                <input
                    className="inp-add"
                    value={master.secondService}
                    name="secondService"
                    onChange={handleValues}
                    type="text"
                    placeholder="2)Тип услуги"
                />
                <input
                    className="inp-add"
                    value={master.secondPrice}
                    name="secondPrice"
                    onChange={handleValues}
                    type="number"
                    placeholder="Цена"
                />
            </div>
            <p>Можете добавить:</p>
            <input
                className="inp-add"
                value={master.comment}
                name="comment"
                onChange={handleValues}
                type="text"
                placeholder="Комментарий"
            />
            <div className="serv">
                <input
                    className="inp-add"
                    value={master.thirtyService}
                    name="thirtyService"
                    onChange={handleValues}
                    type="text"
                    placeholder="3)Тип услуги"
                />
                <input
                    className="inp-add"
                    value={master.thirtyPrice}
                    name="thirtyPrice"
                    onChange={handleValues}
                    type="text"
                    placeholder="number"
                />
            </div>
            <div className="serv">
                <input
                    className="inp-add"
                    value={master.fortyService}
                    name="fortyService"
                    onChange={handleValues}
                    type="text"
                    placeholder="4)Тип услуги"
                />
                <input
                    className="inp-add"
                    value={master.fortyPrice}
                    name="fortyPrice"
                    onChange={handleValues}
                    type="number"
                    placeholder="Цена"
                />
            </div>
            <div className="serv">
                <input
                    className="inp-add"
                    value={master.fiftyService}
                    name="fiftyService"
                    onChange={handleValues}
                    type="text"
                    placeholder="5)Тип услуги"
                />
                <input
                    className="inp-add"
                    value={master.fiftyPrice}
                    name="fiftyPrice"
                    onChange={handleValues}
                    type="number"
                    placeholder="Цена"
                />
            </div>
            <div className="serv">
                <input
                    className="inp-add"
                    value={master.sixtyService}
                    name="sixtyService"
                    onChange={handleValues}
                    type="text"
                    placeholder="6)Тип услуги"
                />
                <input
                    className="inp-add"
                    value={master.sixtyPrice}
                    name="sixtyPrice"
                    onChange={handleValues}
                    type="number"
                    placeholder="Цена"
                />
            </div>
            <input
                className="inp-add"
                value={master.oneImg}
                name="oneImg"
                onChange={handleValues}
                type=""
                placeholder="Фото вашей работы"
            />
            <input
                className="inp-add"
                value={master.twoImg}
                name="twoImg"
                onChange={handleValues}
                type=""
                placeholder="Фото вашей работы"
            />
            <input
                className="inp-add"
                value={master.threeImg}
                name="threeImg"
                onChange={handleValues}
                type=""
                placeholder="Фото вашей работы"
            />
            <input
                className="inp-add"
                value={master.fourImg}
                name="fourImg"
                onChange={handleValues}
                type=""
                placeholder="Фото вашей работы"
            />
            <input
                className="inp-add"
                value={master.fiveImg}
                name="fiveImg"
                onChange={handleValues}
                type=""
                placeholder="Фото вашей работы"
            />

            <button className="btn-add" onClick={handleClick}>
                Добавить
            </button>
        </div>
    );
};

export default AddMasters;
