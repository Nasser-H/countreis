import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { CountriesContext } from '../../context/CountryContext'

export default function Home() {
    let { country, err } = useContext(CountriesContext);
    return <>
        <Navbar />
        <div className='pt-28 bg-blue-300 px-8 h-screen flex justify-center items-center md:px-28'>
            {country && <div className="mt-4 text-center border-t-2 border-b-2 md:py-14 sm:py-12 py-6 w-full text-xl" id="country-card">
                <img src={country[0]?.flags?.png} alt={country[0]?.flags?.alt} className="w-28 h-20 object-cover mx-auto mb-4 rounded-lg" />
                <h2 className="text-xl font-semibold mb-2">{country[0]?.name?.common}</h2>
                <p><strong>Capital:</strong> {country[0]?.capital}</p>
                <p><strong>Population:</strong> {country[0]?.population}</p>
                <p><strong>Timezone:</strong> {country[0]?.timezones}</p>
                <p><strong>Currency:</strong> {Object.values(country[0].currencies)[0]?.name}</p>
            </div>}
            {err && <h1 className='text-4xl text-red-600 mb-20'>There is no country with this name</h1>}
        </div>
    </>
}
