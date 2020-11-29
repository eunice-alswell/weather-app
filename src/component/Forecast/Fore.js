import React,{useState} from 'react'
import axios from 'axios'
import './style.css'
// import config from '../../Config'

// const BASE = config.base
// const KEY = config.key

const config = {

    base: 'http://api.weatherstack.com/current',
    key: 'e0d488da01803f8308a3439d596881ab'

}


function Forecast() {


    const [city,setCity] = useState('');

    const [country, setCountry] = useState('');

    const [weather,setWeather] = useState(null);

    // //const handleChange = (e) =>{
    //     setInput(e.target.value)
    // }

    const search = (e) => {
        e.preventDefault()

        if (country === '' && city === ''){
            alert('ERROR!!, please provide value country and city')
        };
        
        if (country && city){
            axios.get(`${config.base}?access_name=${config.key}&query=${country},${city}`)
            .then((res)=>{
                setCity('')
                setCountry('')
                setWeather({...res.data})
                console.log(res.data)
            }).catch((error) =>{
                console.log(error)
            })  
        };
        
    };


    return (
        <div>
            <form>

                <input type = 'text' onChange = {(e) => setCountry(e.target.value) } value = {country}/>

                <input type = 'text' onChange={(e) => setCity(e.target.value)} value = {city}/>

                <button onClick = {search}>search</button>

            </form>
            
            <div value={weather} onChange={(e) => setWeather(e.target.value)}></div>
        </div>
    )
}

export default Forecast