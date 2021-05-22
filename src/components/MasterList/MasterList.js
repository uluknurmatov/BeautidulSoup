import React, { useContext, useEffect } from "react";
import { masterContext } from "../../contexts/MasterContext";
import MasterCard from "../MasterCard/MasterCard";
import "./MasterList.css";
const MasterList = () => {
    const { getMasters, mastersData } = useContext(masterContext);

    useEffect(() => {
        getMasters();
    }, []);

    return (
        <div className="list">
            {mastersData.map((item) => (
                <MasterCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MasterList;
