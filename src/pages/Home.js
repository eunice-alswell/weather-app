import React, {useState} from 'react'
import '../component/home.css'

const api = {
    key:'7448c5abb8ba99c83d55b290dc83a1cd',
    base: 'http://api.openweathermap.org/data/2.5'
}

function Home() {

    const [query,setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = (e) =>{
         
        if(query){
            fetch(`${api.base}weather?q=${query}&units=matric&APPID=${api.key}`)
            .then(res => res.json())
            .then(res => {
                setWeather(res);
                setQuery('');
                console.log(res);
            });
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
                <div className = 'searchbox'>
                    <input 
                    type = 'text'
                    className = 'search-bar'
                    onChange ={e => e.target.value}
                    value = {query}   
                    placeholder = 'search....' />
                </div>
                <div className='location-box'>
                  <div className= 'location'>Accra,Ghana</div>
                  <div className = 'date'>{dateBuilder(new Date())}</div>  
                </div>
                <div className = ' weather-box'>
                    <div className = 'temp'>
                        15
                    </div>

                </div>
            </main> 
        </div>
    )
}

export default Home
