import React, { useEffect } from 'react'
import { useState } from 'react'
import countryService from './services/countries'
import CountrySearch from './components/CountrySearch'
import CountriesToDisplay from './components/CountriesToDisplay'

function App() {
const [searchVal, setSearchVal] = useState('')
const [countryList, setCountryList] = useState([])

useEffect(() => {
  console.log("Effect for gathering country list from API")
  countryService.getAll()
    .then((initialCList) => {
      console.log("Promise Fulfilled")
      console.log("Initial Country List: ", initialCList)
      setCountryList(initialCList)
    })
}, [])

const searchChangeHandler = (e) => {
  const newSearch = e.target.value
  setSearchVal(newSearch)
  console.log("Search State: ", newSearch)
}

const quickView = (e) => {
  console.log("Event: ", e.target.value)
  setSearchVal(countriesToShow.find(i => i.ccn3 === e.target.value).name.common)

}

const countriesToShow = countryList.map(c => c).filter(i => i.name.common.toLowerCase().includes(searchVal.toLowerCase()))
console.log("CountryDisplay: ", countriesToShow)

  return (
    <div>
      <h3>Enter a country to search for:</h3>
    <CountrySearch searchChangeHandler={searchChangeHandler}/>
      <h3>Country information:</h3>

          <CountriesToDisplay 
          key={countriesToShow.cca2} 
          countriesToShow={countriesToShow} 
          quickView={quickView}/>
        
        
    </div>
  );
}

export default App;
