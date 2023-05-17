const CountrySearch = ({searchChangeHandler}) => {
  return (
    <div>Search for a country: <input onChange={searchChangeHandler}></input></div>
  )
}

export default CountrySearch
