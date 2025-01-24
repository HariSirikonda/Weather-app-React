import React, { useEffect, useRef, useState } from 'react'
import Clear_icon from '../assets/clear.png';
import Cloud_icon from '../assets/cloud.png';
import Drizzle_icon from '../assets/drizzle.png';
import Humidity_icon from '../assets/humidity.png';
import Rain_icon from '../assets/rain.png';
import Search_icon from '../assets/search.png';
import Snow_icon from '../assets/snow.png';
import Wind_icon from '../assets/wind.png';
import './Weather.css';

function Weather() {

    const [weatherData, setWeatherData] = useState({
        humidity: null,
        temperature: null,
        location: "Loading...",
        windSpeed: null,
        icon: Clear_icon
    });

    const inputRef = useRef();
    const allIcons = {
        "01d": Clear_icon,
        "01n": Clear_icon,
        "02d": Cloud_icon,
        "02n": Cloud_icon,
        "03d": Cloud_icon,
        "03n": Cloud_icon,
        "04d": Drizzle_icon,
        "04n": Drizzle_icon,
        "09d": Rain_icon,
        "09n": Rain_icon,
        "10d": Rain_icon,
        "10n": Rain_icon,
        "13d": Snow_icon,
        "13n": Snow_icon
    }

    const search = async (city) => {
        if (city === "") {
            alert("Enter a valid City Name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
            const responce = await fetch(url);
            const data = await responce.json();
            console.log(data);
            if (!responce.ok) {
                alert(data.message);
                return;
            }
            const icon = allIcons[data.weather[0].icon] || Clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                windSpeed: data.wind.speed,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        search("London");
    }, [])

    return (
        <div className='weather-container shadow m-3 p-3 rounded'>
            {/* Search input area */}
            <div className='d-flex justify-content-center align-items-center'>
                <input className='search-input form-control m-2 rounded-pill shadow-none' ref={inputRef} placeholder='Enter city name' type='text'></input>
                <button className='search-button btn btn-light m-2 rounded-pill shadow-none' onClick={() => search(inputRef.current.value)}><b>Search</b></button>
            </div>
            {weatherData ? <>

                {/* Temperature area */}
                <div className='container text-center'>
                    <img src={weatherData.icon} alt='show me' />
                    <h3>{weatherData.temperature}&deg; Celsius</h3>
                    <h1 className='text-light'>{weatherData.location}</h1>
                </div>
                {/* Humidity and Wind speed area */}
                <div className='container-fluid d-flex align-items-center justify-content-center m-2 p-2'>
                    <div className='container mt-3 text-center'>
                        <div className='containerfluid d-flex align-items-center justify-content-center'>
                            <div>
                                <img src={Humidity_icon} alt='show me' />
                            </div>
                            <div className='mx-2'>
                                <h1>{weatherData.humidity}%</h1>
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
                                <img src={Wind_icon} alt='show me' />
                            </div>
                            <div className='mx-2'>
                                <h1>{weatherData.windSpeed} km/h</h1>
                            </div>
                        </div>
                        <div className='container'>
                            <h4>Wind Speed</h4>
                        </div>
                    </div>
                </div>
            </> : <></>}
        </div>
    )
}

export default Weather
