import React from 'react'
import './WeatherApp.css';
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humudity_icon from '../Assets/humidity.png'
const WeatherApp = () => {


    let api_key = "29103965254dab79a1a31fdb9a72f19b";
    const search = async () =>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value===''){
            return 0;
        }
       
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humudity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temp=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        humudity[0].innerHTML=data.main.humidity+' %';
        wind[0].innerHTML=data.wind.speed+' km/h';
        temp[0].innerHTML=data.main.temp+'°c';
        location[0].innerHTML=data.name;


    }   
    
    
  return (
    <div className='container'>
      <div className='to-bar'>
        <input type="text" placeholder='Search' className='cityInput' />
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="clear" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Chennai</div>
      <div className="data-container">
        <div className="element">
          <img src={humudity_icon} alt="cloud" className='icon' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="cloud" className='icon' />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
