import './App.css'
import axios from 'axios'
import Home from './home'
import { useState } from "react"
function Add(){
  const [name,setName]=useState("")
  const [age,setAge]=useState(0)
  const [date,setDate]=useState("")
  const [hours,setHours]=useState(0)
  const [dept,setDept]=useState("")
  const id="",yr=""
  const Added=()=>{
    const List={
      name,
      age,
      date,
      hours,
      dept,
      id,
      yr
    }
    axios.post('http://localhost:3500/AddData',
        {
          List   
        }).then((data)=>{
          alert("Staff Id will be"+data.data.status);
          window.location.href = `/homepage`
        })
  }
    return(
        <>
        <Home />
        <div className='right'>
          <section className='common'>
            <h1>Add Staffs</h1>
            <input className='add' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter staff full name"/>
            <br  />
            <input className='add1'onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Enter staff age" />
            <input name='dept' className='add1' placeholder='Enter staff dept' list='dept' value={dept} onChange={(e)=>{setDept(e.target.value)}} />
            <datalist id='dept' >
              <option>IT</option>
              <option>CSE</option>
              <option>ADS</option>
              <option>ECE</option>
              <option>MECH</option>
              <option>CIVIL</option>
              <option>EEE</option>
            </datalist>
            <br  /><br  />
            <label>Enter Date of Birth</label>
            <br  />
            <input className='add' onChange={(e)=>{setDate(e.target.value)}} id='date' type="date"/>
            <br  />
            <input className='add' onChange={(e)=>{setHours(e.target.value)}} type="number" placeholder="Enter number of hours of teaching" />
            <br  />
            <button id="add" onClick={Added}>Add staff data</button>
          </section>
        </div>
        </>
    )
}
export default Add