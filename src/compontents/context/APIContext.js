import React, { useState } from 'react';
import axios from 'axios';

const APIContext = React.createContext();
const baseURL = "https://valorant-api.com/v1";

export const APIProvider = ({ children }) => {

    const [agents,setAgents]= useState([]);
    const [maps,setMaps]= useState([]);
    const [weapons,setWeapons]= useState([]);
    

    const fetchAgents = async (lang) =>{
        const response = await axios.get(`${baseURL}/agents?isPlayableCharacter=true&language=en-US`);
        setAgents(response.data.data);
    }


    const fetchMaps = async (lang) =>{
        const response = await axios.get(`${baseURL}/maps?language=${lang}`);
        setMaps(response.data.data);
    }

    const fetchWeapons = async (lang) =>{
        const response = await axios.get(`${baseURL}/weapons?language=${lang}`);
        setWeapons(response.data.data);
    }

    return(
        <APIContext.Provider value={{
            fetchAgents,
            fetchMaps,
            fetchWeapons,
            agents,
            maps,
            weapons
        }}>
            {children}
        </APIContext.Provider>
    );

}

export default APIContext;

