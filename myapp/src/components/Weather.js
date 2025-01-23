import React from 'react'
import Clear from '../assets/clear.png';
import Humidity from '../assets/humidity.png';
import Wind from '../assets/wind.png';
import './Weather.css';

function Weather() {
    return (
        <div className='weather-container shadow m-3 p-3 rounded'>
            {/* Search input area */}
            <div className='d-flex justify-content-center align-items-center'>
                <input className='search-input form-control m-2 rounded-pill shadow-none' placeholder='Enter city name' type='text'></input>
                <button className='search-button btn btn-light m-2 rounded-pill shadow-none'><b>Search</b></button>
            </div>
            {/* Temperature area */}
            <div className='container text-center'>
                <img src={Clear} alt='show me'/>
                <h3>16&deg; Celsius</h3>
                <h1 className='text-light'>New Delhi</h1>
            </div>
            {/* Humidity and Wind speed area */}
            <div className='container-fluid d-flex align-items-center justify-content-center m-2 p-2'>
                <div className='container mt-3 text-center'>
                    <div className='containerfluid d-flex align-items-center justify-content-center'>
                        <div>
                            <img src={Humidity} alt='show me'/>
                        </div>
                        <div className='mx-2'>
                            <h1>67%</h1>
                        </div>
                    </div>
                    <div className='container'>
                        <h4>Humidity</h4>
                    </div>
                </div>
                {/* Wind speed area */}
                <div className='container mt-3 text-center'>
                    <div className='containerfluid d-flex align-items-center justify-content-center'>
                        <div>
                            <img src={Wind} alt='show me'/>
                        </div>
                        <div className='mx-2'>
                            <h1>15 km/h</h1>
                        </div>
                    </div>
                    <div className='container'>
                        <h4>Wind Speed</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
