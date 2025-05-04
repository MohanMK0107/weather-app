import React,{useState,useEffect} from "react"
import axios from "axios"

function App() {
  const [data,setdata] = useState({})
  const [location,setlocation] = useState('')

  const url = `http://api.weatherapi.com/v1//current.json?key=b485dd2e5a8e4735964133420250205&q=${location}`

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
            <p>{data.location.name}</p>
          </div>
          <div className="temp">
          <h1>{data.current.temp_c}°C</h1>
          </div>
          <div className="description">
            <p>{data.current.condition.text}</p>
          </div>
        </div>
        <div className="bottom">
          <div class1Name="feels">
          <p>{data.current.feelslike_c}°C</p>
          <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.current.humidity}%</p>
            <p >Humidity</p>
          </div>
          <div className="wind">
            <p>{data.current.gust_kph}kph</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
