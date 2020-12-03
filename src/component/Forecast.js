import React, { useState } from 'react';
import axios from 'axios';
import config from '../Config'
import './home.css'


const BASE = config.base
const KEY = config.key

function Forecast() {

    const [country,setCountry] = useState('')
    const [city,setCity] = useState('')
    const [weather, setWeather] = useState(null)

    const search = () =>{
         
        if(country && city){
            axios.get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
            .then((res) => {
                setCountry('');
                setCity('');
                setWeather(res.data);
                console.log(res.data);
            }).catch((error) =>{
                console.log(error)
            })
        }

    }

    const dateBuilder = (d) =>{
        let months = ['January', 'February', 'March', 'April','May','June','July','August', 'september',
        'October', 'November','December']; 
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','friday','saturday'];   
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }
    return (
        <div className = 'home'>
            <main>
                {
                    !weather?(
                        <div className= 'search-box'>
                            <input
                            type = 'text'
                            className= 'search-bar'
                            placeholder ='country'
                            value={country}
                            onChange = {(e) => setCountry(e.target.value)}
                            />
    
                        <input
                        type = 'text'
                        placeholder ='city'
                        className= 'search-bar'
                        value={city}
                        onChange = {e => setCity(e.target.value)}
                        />

                        <button className = 'btn' onClick = {search}>Search</button>
                        </div>      
                
                    ):(
                        <div>

                            <div className= 'search-box'>
                                <input
                                type = 'text'
                                className= 'search-bar'
                                placeholder ='country'
                                value={country}
                                onChange = {(e) => setCountry(e.target.value)}
                                />
    
                                <input
                                type = 'text'
                                placeholder ='city'
                                className= 'search-bar'
                                value={city}
                                onChange = {e => setCity(e.target.value)}
                                />

                                <button className = 'btn' onClick = {search}>Search</button>
                            </div>      

                            <div>
                                <div className='location-box'>
                                    <div className='location'>{`${weather.location.name},${weather.location.country}`}</div>
                                    <div className='date'>{`${dateBuilder(new Date())}, ${weather.current.observation_time}`} </div>
                                    <div className = 'description' id='des'>{weather.current.weather_descriptions}</div>
                                </div>
                                <div className='weather-box'>
                                    <div className='temp'>
                                        {weather.current.temperature}°C
                                    </div>
                                    <div>
                                       <div className='description'>{`Humidty: ${weather.current.humidity}% `}</div> 
                                       <div className='description'>{`Precipitation :${weather.current.precip}%`}</div> 
                                       <div className='description'>{`Wind speed : ${weather.current.wind_speed}Km/h`}</div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </main>        
        </div>
        
        
    )
}

export default Forecast
