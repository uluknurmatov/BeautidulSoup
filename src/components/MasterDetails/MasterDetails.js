import React, { useContext, useEffect, useState } from "react";
import { masterContext } from "../../contexts/MasterContext";
import "./MasterDetails.css";
import Placeholder from "../../assets/img/placeholder.png";
import Edit from "../../assets/img/edit.png";
import { useHistory } from "react-router-dom";

const MasterDetails = (props) => {
    const { getMasterDetails, masterDetails, saveMaster } = useContext(
        masterContext
    );
    const [editStatus, setEditStatus] = useState(false);
    const [editedMaster, setEditedMaster] = useState({});

    const history = useHistory();

    const handlevalue = (e) => {
        let newMaster = {
            ...editedMaster,
            [e.target.name]: e.target.value,
        };
        setEditedMaster(newMaster);
    };

    const handleSave = () => {
        saveMaster(props.match.params.id, editedMaster);
        setEditedMaster(false);
        history.push("/");
    };

    useEffect(() => {
        getMasterDetails(props.match.params.id);
    }, []);
    // console.log(masterDetails.city);

    return (
        <div className="container">
            <div className="det_wrapper">
                {editStatus ? (
                    <div className="edit-textareas">
                        <textarea name="img" onChange={handlevalue}>
                            {masterDetails.img}
                        </textarea>
                        <textarea
                            name="number"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.number}
                        </textarea>
                        <textarea
                            name="name"
                            onChange={handlevalue}
                            src={masterDetails.name}
                        />
                        <textarea name="prof" onChange={handlevalue}>
                            {masterDetails.prof}
                        </textarea>
                        <textarea
                            name="city"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.city}
                        </textarea>
                        <textarea
                            name="street"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.street}
                        </textarea>
                        <textarea
                            name="comment"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.comment}
                        </textarea>
                        <textarea
                            name="service"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.service}
                        </textarea>
                        <textarea
                            name="price"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.price}
                        </textarea>
                        <textarea
                            name="secondService"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.secondService}
                        </textarea>
                        <textarea
                            name="secondPrice"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.secondPrice}
                        </textarea>
                        <textarea
                            name="thirtyService"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.thirtyService}
                        </textarea>
                        <textarea
                            name="thirtyPrice"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.thirtyPrice}
                        </textarea>
                        <textarea
                            name="fortyService"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.fortyService}
                        </textarea>
                        <textarea
                            name="fortyPrice"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.fortyPrice}
                        </textarea>
                        <textarea
                            name="fiftyService"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.fiftyService}
                        </textarea>
                        <textarea
                            name="fiftyPrice"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.fiftyPrice}
                        </textarea>
                        <textarea
                            name="sixtyService"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.sixtyService}
                        </textarea>
                        <textarea
                            name="sixtyPrice"
                            onChange={handlevalue}
                            className="box-desc"
                        >
                            {masterDetails.sixtyPrice}
                        </textarea>
                    </div>
                ) : (
                    <div className="det_left">
                        <img className="det_img" src={masterDetails.img} />
                        <div>
                            <button className="btn_num">
                                {masterDetails.number}
                            </button>
                        </div>

                        <div className="det_right">
                            <h2 className="det_name">{masterDetails.name}</h2>
                            <p className="det_prof">{masterDetails.prof}</p>
                            <div className="det_adress">
                                <img className="det_icon" src={Placeholder} />
                                <p className="det_city">{masterDetails.city}</p>
                                <p className="det_city">
                                    {masterDetails.street}
                                </p>
                            </div>
                            <p>{masterDetails.comment}</p>
                        </div>

                        <div className="serv_wrapper">
                            <h2 className="det_serv">Услуги:</h2>
                            <div className="det">
                                <p>{masterDetails.service}</p>
                                <p>{masterDetails.price} </p>
                            </div>
                            <div className="det">
                                <p>{masterDetails.secondService}</p>
                                <p>{masterDetails.secondPrice} </p>
                            </div>
                            <div className="det">
                                <p>{masterDetails.thirtyService}</p>
                                <p>{masterDetails.thirtyPrice} </p>
                            </div>
                            <div className="det">
                                <p>{masterDetails.fortyService}</p>
                                <p>{masterDetails.fortyPrice} </p>
                            </div>
                            <div className="det">
                                <p>{masterDetails.fiftyService} </p>
                                <p>{masterDetails.fiftyPrice} </p>
                            </div>
                            <div className="det">
                                <p>{masterDetails.sixtyService}</p>
                                <p>{masterDetails.sixtyPrice} </p>
                            </div>
                        </div>
                        <div>
                            <h2>Мои работы</h2>
                            <img
                                className="img_job"
                                src={masterDetails.oneImg}
                            />
                            <img
                                className="img_job"
                                src={masterDetails.twoImg}
                            />
                            <img
                                className="img_job"
                                src={masterDetails.threeImg}
                            />
                            <img
                                className="img_job"
                                src={masterDetails.fourImg}
                            />
                            <img
                                className="img_job"
                                src={masterDetails.fiveImg}
                            />
                        </div>
                    </div>
                )}
            </div>
            {editStatus ? (
                <button onClick={handleSave}>Сохранить</button>
            ) : (
                <div>
                    <img
                        onClick={() => setEditStatus(true)}
                        className="icon_card"
                        src={Edit}
                    />
                </div>
            )}
        </div>
    );
};

export default MasterDetails;
