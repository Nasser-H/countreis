import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { CountriesContext } from '../../context/CountriesContext'

export default function Home() {
    let { countries } = useContext(CountriesContext);
    return <>
        <Navbar />
        <div className='pt-28 bg-blue-300 px-8 h-screen flex justify-center items-center md:px-28'>
            <div className="mt-4 text-center border-t-2 border-b-2 md:py-14 sm:py-12 py-6 w-full text-xl" id="country-card">
                <img src="https://flagcdn.com/w320/us.png" alt="علم الدولة" className="w-28 h-20 object-cover mx-auto mb-4 rounded-lg" />
                <h2 className="text-xl font-semibold mb-2">{countries?.name?.common}</h2>
                <p><strong>Capital:</strong> Washington, D.C.</p>
                <p><strong>Population:</strong> 331,000,000</p>
                <p><strong>Timezone:</strong> UTC-05:00</p>
                <p><strong>Currency:</strong> United States Dollar</p>
            </div>
        </div>
    </>
}
