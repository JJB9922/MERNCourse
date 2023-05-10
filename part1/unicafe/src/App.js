import { useState } from 'react'

const Header = ({heading}) => (<h1>{heading}</h1>)

const Button = ({handleClick, label}) => {
  return(
    <button onClick={handleClick}>{label}</button>
  )
}

const StatisticLine = ({label, counter}) =>{
  return(
    <tr>
    <td>{label}: </td>
    <td>{counter}</td>
    </tr>
    );
  }

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if(all > 0){
    return(
      <table>
        <tbody>
          <StatisticLine label={"Good"} counter={good}/>
          <StatisticLine label={"Neutral"} counter={neutral}/>
          <StatisticLine label={"Bad"} counter={bad}/>
          <StatisticLine label={"All"} counter={all}/>
          <StatisticLine label={"Average"} counter={average}/>
          <StatisticLine label={"Positive"} counter={positive}/>
        </tbody>
      </table>
      );
  } else {
    return(
      <div>No feedback given</div>
    )
  }
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive= (good/all)*100 + "%"

  return (
    <div>
        <>
        <Header heading={"Give Feedback"}/>
        <Button label={"Good"} handleClick={increaseGood} />
        <Button label={"Neutral"} handleClick={increaseNeutral}/>
        <Button label={"Bad"} handleClick={increaseBad}/>
        <Header heading={"Statistics"}/>
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
        </>
      </div>
      
    )
  } 


export default App