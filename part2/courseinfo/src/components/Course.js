import React from 'react'

const Header = ({course}) => {
  return(
  <div>
  <h2>{course.name}</h2>
  </div>
  )
}

const Part = ({part}) => {
  return(
    <div>
    <li>{part.name} {part.exercises}</li></div>
  )
}

const Sum = ({parts}) => {
    const adder = parts.reduce((a, part) => a + part.exercises, 0)
    return(<div><strong>Total of {adder} exercises</strong></div>)
  }


const Content = ({courses}) => {
  return(
    <div>
      {courses.map(course => 

          <div >
          <Header key={course.id} course={course}/>

          {course.parts.map(part => (<Part key={course.id} part={part}/>))}

          <Sum key={course.id} parts={course.parts}/>
          </div>)}
  
    </div>
  );
}

const Course = ({courses}) => {
  return (
    <>
    <Content courses={courses}/>

    </>
  )
}


export default Course 


// const Structure = () => {
//   return(
//   <div>
//     <h1>{course.name}</h1>
//     <div>{part.name} {part.exercise}</div>
//   </div>
//   )
// }

// const TesterBackup = ({courses}) => {
//   console.log("Title class") 
//   console.log({courses})
//   console.log("Map the names")
//   const cName = courses.map(course => course.name) 
//   console.log(cName)
// }





// const Part = ({ course }) => {
//   const partName = course.parts.map(part => <li key={part.id}>{part.name}</li>)
//   const partEx = course.parts.map(part => <li key={part.id}>{part.exercises}</li>)
//   return(
//     <div>
//       {console.log("In Parts: ", course.parts)}
//       {console.log("In partName: ", partName)}
//       {console.log("In partEx: ", partEx)}
//       {partName} {partEx}
//     </div>
//   )
// }

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

// const Content = ({parts}) => {
//   return(
//     <div>{parts}
//     {console.log({parts})}
//     </div>
    
//   ) 
// }
