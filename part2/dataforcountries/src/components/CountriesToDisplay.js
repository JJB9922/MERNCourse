import React from 'react'
import axios from 'axios'
import { useState } from 'react'



const CountriesDisplay = ({countriesToShow, quickView}) => {
    return(
        <div>{countriesToShow.name.common} <button value={countriesToShow.ccn3} onClick={quickView}> Show </button></div>
    )}

const CountryDisplay = ({countriesToShow}) => {
    const [tempState, setTempState] = useState(0)
    const [windState, setWindState] = useState(0)
    const [iconState, setIconState] = useState("")
    const weatherIcon = `https://openweathermap.org/img/wn/${iconState}@2x.png`

    const languageVals = Object.values(countriesToShow.languages).map(c=><li>{c}</li>)
    console.log("langList: ", languageVals)

    const api_key = process.env.REACT_APP_API_KEY
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${countriesToShow.capital}&appid=${api_key}&units=metric`
    axios.get(baseURL).then((response) => response.data).then((r) => {
        console.log("RMainTemp: ", r)
        setTempState(r.main.temp)
        setWindState(r.wind.speed)
        setIconState(r.weather[0].icon)
    })

    return(
    <div> 
        <h1>{countriesToShow.name.common}</h1>
        <p>Capital: {countriesToShow.capital}</p>
        <p>Area: {countriesToShow.area}</p>

        <h3> Languages: </h3>
        <ul>{languageVals}</ul>

        <img src={countriesToShow.flags.png} alt={countriesToShow.flags.alt}></img>

        <h3> Weather in {countriesToShow.capital}:</h3>
        <p>Temperature: {tempState} Celcius</p>

        <img style={{backgroundColor: 'lightgrey'}} src={weatherIcon}></img>
        {console.log(weatherIcon)}
        <p>Wind {windState}m/s</p>

        

    </div>   
    )}
    


export default function CountriesToDisplay({countriesToShow, quickView}) {
if(countriesToShow.length === 250){
return(<div></div>) 
} else {
    if(countriesToShow.length < 11 && countriesToShow.length > 1){
        return (
            <div>{countriesToShow.map(countriesToShow => <CountriesDisplay key={countriesToShow.ccn3} countriesToShow={countriesToShow} quickView={quickView}/>)}
            {console.log("D CTS: ", countriesToShow)}</div>
          )
    } else {
        if(countriesToShow.length === 1){
            return (
                <div>{countriesToShow.map(countriesToShow => <CountryDisplay key={countriesToShow.ccn3} countriesToShow={countriesToShow}/>)}</div>
              )
        } else {
            if(countriesToShow.length === 0) {
                return(<div>No Matches...</div>)
            } else {
            return(<div>Too many matches, specify another filter!</div>)}
        }
    }
  }
}
