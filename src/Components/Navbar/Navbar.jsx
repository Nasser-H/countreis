import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { CountriesContext } from '../../context/CountryContext'

export default function Navbar() {
    let { getCountry } = useContext(CountriesContext);
    const formik = useFormik({
        initialValues: {
            country: ''
        }, onSubmit: getCountry
    });
    return <>
        <div className='py-5 bg-blue-400 fixed w-full'>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
                <label htmlFor="country" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        value={formik.values.country} onBlur={formik.handleBlur} onChange={formik.handleChange}
                        type="search" id="country" name='country' className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for the country..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>


    </>
}
