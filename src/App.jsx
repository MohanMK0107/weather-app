import React,{useState,useEffect} from "react"
import axios from "axios"

function App() {
  const [data,setdata] = useState({})
  const [location,setlocation] = useState('')
  
  const url = `http://api.weatherapi.com/v1/current.json?key=b485dd2e5a8e4735964133420250205&q=${location}`

  const searchLocation = (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
      setdata(response.data)
      console.log(response.data)
      })
    }
 
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setlocation(event.target.value)} 
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.location?(data.location.name):null}</p>
          </div>
          <div className="temp">
          <h1>{data.current?(data.current.temp_c):null}°C</h1>
          </div>
          <div className="description">
            <p>{data.current? (data.current.condition.text):null}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          <p>{data.current?(data.current.feelslike_c):null}°C</p>
          <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.current?(data.current.humidity):null}%</p>
            <p >Humidity</p>
          </div>
          <div className="wind">
            <p>{data.current?(data.current.gust_kph):null}kph</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
