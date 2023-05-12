import React from 'react'



const DisplayFilteredPerson = ({peopleToShow}) => {
    return(
      <div>{peopleToShow.name} {peopleToShow.number}</div>
    )
  }

export default function FilteredDisplay({peopleToShow}) {
  return (
    <div>{peopleToShow.map(peopleToShow => <DisplayFilteredPerson key={peopleToShow.id} peopleToShow={peopleToShow}/>)}</div>
  )
}
