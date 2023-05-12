import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import FilteredDisplay from './components/FilteredDisplay'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  //State handlers
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchVal, setSearchVal] = useState('')

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