import axios from "axios";
import { createContext, useState } from "react";

export const CountriesContext = createContext();

export default function CountriesContextProvider({children}) {

    const [country, setCountry] = useState(null);
    const [err, setErr] = useState(false);
    async function getCountry({country}){
        try {
            let { data } = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
            console.log(data);
            setCountry(data);
            setErr(false);
        } catch (error) {
            console.log(error);
            setErr(true);
            setCountry(null);
        }
    }
    return <CountriesContext.Provider value={{ getCountry, country, err }}>
        {children}
    </CountriesContext.Provider>
}
