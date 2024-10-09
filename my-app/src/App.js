import './App.css'
import React from 'react'
import { useState } from 'react'

const App = () => {

    let [isName, setName] = useState("Sunnatilloxon")
    let [events, setEvents] = useState([
      {title: "Student Ayubxon" , id:1},
      {title: "Student Hayitali" , id:2},
      {title: "Student Abdullox" , id:3},
      {title: "Student Ulug'bek" , id:4},
      {title: "Student Abdulhamid" , id:5},
      {title: "Student Yaxyoxon" , id:6},
      {title: "Student Akbarjon" , id:7},
      {title: "Student Muhammad Sodiq" , id:8},
    ])
    let deleteItem = (id)=>{
      let newItems = events.filter((item)=>{
        return item.id !== id
      })
      setEvents(newItems)
    }
    let [showContent, setContent] = useState(true)

    let changeName = ()=>{
      setName("Anvarjon")
    }
  return (
    <div className='App'>
      <div className='teachers'>
        <div className='teacher-name'>Teacher Name {isName}</div>
        <button className='change-teacher' onClick={changeName}>Another Teacher</button>
      </div>
        <div className='student-cards'>
        {showContent && <button className='controll-content' onClick={()=>{setContent(false)}}>Hide content</button>}
        {!showContent && <button className='controll-content'  onClick={()=>{setContent(true)}}>Show content</button>}
        {events.length === 0 && <h3 className='warning'>No students yet!</h3> }
        {showContent && events.map((item)=>{
          return(
            <div className='students' key={item.id}>
              <h2 className='studant-name'>{item.title}</h2>
              <button className='remove-st' onClick={()=>deleteItem(item.id)}>Delete</button>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default App
