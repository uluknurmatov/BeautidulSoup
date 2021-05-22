import React, { useReducer } from "react";
import axios from "axios";

export const masterContext = React.createContext();

const INIT_STATE = {
    mastersData: [],
    masterDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_MASTERS":
            return { ...state, mastersData: action.payload };
        case "GET_MASTERS_DETAILS":
            return { ...state, masterDetails: action.payload };
        default:
            return state;
    }
};

const MasterContextProvider = ({ children }) => {
    function postNewMaster(master) {
        axios.post("http://localhost:8000/masters", master);
    }

    async function getMasters() {
        let { data } = await axios.get(`http://localhost:8000/masters`);
        console.log(data);
        dispatch({
            type: "GET_MASTERS",
            payload: data,
        });
    }

    async function getMasterDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/masters/${id}`);
        console.log(data);
        dispatch({
            type: "GET_MASTERS_DETAILS",
            payload: data,
        });
    }
    async function deleteMaster(id) {
        await axios.delete(`http://localhost:8000/masters/${id}`);
        getMasters();
    }
    async function saveMaster(id, newMaster) {
        console.log(newMaster);
        await axios.patch(`http://localhost:8000/masters/${id}`, newMaster);
        getMasterDetails(id);
    }

   {} const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <masterContext.Provider
            value={{
                mastersData: state.mastersData,
                masterDetails: state.masterDetails,
                postNewMaster,
                getMasters,
                getMasterDetails,
                deleteMaster,
                saveMaster,
            }}
        >
            {children}
        </masterContext.Provider>
    );
};

export default MasterContextProvider;
