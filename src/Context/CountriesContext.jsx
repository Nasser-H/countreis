import axios from "axios";
import { createContext, useState } from "react";

export const CountriesContext = createContext();

export default function CountriesContextProvider({children}) {

    const [countries, setCountries] = useState(null);
    async function getCountries({country}){
        let {data} = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        console.log(data);
        setCountries(data)
    }
    return <CountriesContext.Provider value={{ getCountries, countries }}>
        {children}
    </CountriesContext.Provider>
}
