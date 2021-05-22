import React, { useContext } from "react";
import "./MasterCard.css";
import Placeholder from "../../assets/img/placeholder.png";
import Star from "../../assets/img/star.png";
import Right from "../../assets/img/right.png";
import { Link } from "react-router-dom";
import { masterContext } from "../../contexts/MasterContext";
import Delete from "../../assets/img/trash.png";

const MasterCard = ({ item }) => {
    const { deleteMaster } = useContext(masterContext);
    return (
        <div className="card">
            <div className="content">
                <div className="top_card">
                    <div className="card_left">
                        <img className="item_img" src={item.img} />
                    </div>
                    <div className="card_right">
                        <img className="icon" src={Placeholder} />
                    </div>
                    <div className="adress">
                        <p className="city">{item.city}</p>
                        <p>{item.street}</p>
                    </div>
                    
                </div>
                <div className="prof">
                    <p className="name">{item.name}</p>
                    <div className="rating">
                        <img className="icon" src={Star} />
                    </div>
                </div>
                <div>
                    <p className="prof">{item.prof}</p>
                </div>
                <hr />
                <div className="services">
                    <div className="servis">
                        <p className="serv">{item.service}</p>
                        <p>{item.price} </p>
                    </div>
                    <div className="servis">
                        <p className="serv">{item.secondService}</p>
                        <p>{item.secondPrice} </p>
                    </div>
                </div>
                <Link to={`/details/${item.id}`}>
                    {" "}
                    <div class="prices">
                        <p class="price">Услуги и цены</p>
                        <img class="right" src={Right} alt="" />
                    </div>
                </Link>
            </div>
            <div>
                <img
                    onClick={() => deleteMaster(item.id)}
                    className="icon_card"
                    src={Delete}
                />
            </div>
        </div>
    );
};

export default MasterCard;
