import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import FilteredDisplay from './components/FilteredDisplay'
import axios from 'axios'

const App = () => {
  //State handlers
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchVal, setSearchVal] = useState('')

  //Fetch data from database
  const getHook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        },)
  }

  useEffect(getHook, [])
  console.log("There are ", persons.length, " people")

  //Event handlers
  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleSearchChange = (event) =>{
    console.log("SearchVal: ", event.target.value)
    setSearchVal(event.target.value)
  }
  
  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    
    const nameTest = nameArray.find(name => name === newName)
    console.log("Test: ", nameTest)
    if(!nameTest){
      setPersons(persons.concat(personObject))
      console.log(persons)
      setNewName('')
      setNewNumber('')
      console.log("Button Clicked: ", event.target)
    } else {
      alert(`${newName} is already added to phonebook`);
      setNewName('')
      setNewNumber('')
    }
      
  }

  //Creating additional arrays
  const peopleToShow = persons.filter(persons => persons.name.toLowerCase().includes(searchVal.toLowerCase()))
  const nameArray = persons.map(persons => persons.name)
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleSearchChange={handleSearchChange}/>

      <h2>Add a new contact</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      
      <h2>Numbers</h2>

      <FilteredDisplay peopleToShow={peopleToShow}/>

    </div>
  )
}

export default App