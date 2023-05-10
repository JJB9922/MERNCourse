import { useState } from "react"

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  // <div> 
  //   <p>
  //       {props.part1} {props.exercises1}
  //     </p>
  //     <p>
  //       {props.part2} {props.exercises2}
  //     </p>
  //     <p>
  //       {props.part3} {props.exercises3}
  //     </p>
  // </div> 
  )
  
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
  
}

const Counter = () => {
  
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [{
    name: 'Fundamentals',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  }
  const [counter, setCounter] = useState(0)

  setTimeout(() => setCounter(counter+1), 1000)
  console.log('rendering... ', counter)

  return(
 
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      <div>{counter}</div>
    </div>
  )
}

export default App