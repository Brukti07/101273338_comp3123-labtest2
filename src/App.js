import React, {useState} from 'react'
import axios from 'axios'


function App() {
  const[data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9cb1ffb7b1b5ecaf7c28d9d2ecfbd701`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then ((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')

    }

  }

  return (
    <div className="app">
      <div className='search'>
        <input 
        onChange={event => setLocation(event.target.value)}
        value={location}
        onKeyPress={searchLocation}
        type="text"
        placeholder='Enter Location..'/>

      </div>
      <div className="container">
        <div className="top" >
          <div className="location">
            <p>{data.name}</p>

          </div>
          <div className="weather">
            <div className="header">
                {/* <p className="city">Toronto</p>
                <p className="Desc"> Cloudy</p> */}

            </div>
            <img alt="weather" className="icon" src = "assets/icon1.png"/>

        </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>: null}

          </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p>:null}
          <p>Feels Like</p>

        </div>
        <div className='humidity'>
          {data.main ? <p className='bold'> {data.main.humidity.toFixed()}%</p>: null}
          <p> Humidity</p>

        </div>
        <div className='wind'>
          {data.main ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p>Wind Speed</p>

        </div>

      </div>
     </div>
    
    </div>
  );
}

export default App;
