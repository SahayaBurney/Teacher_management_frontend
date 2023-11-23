import './App.css';
import Home from './home';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Updating() {
  const [id, setId] = useState('');
  const [state, setState] = useState(false);
  const [list, setList] = useState([]);
  const [inital, setInitial] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [date, setDate] = useState('');
  const [hours, setHours] = useState(0);
  const [dept, setDept] = useState('');

  useEffect(() => {
    if (state) {
      setName(list.name);
      setAge(list.age);
      setDate(list.date);
      setHours(list.hours);
      setDept(list.dept);
    }
  }, [state, list]);

  const update = () => {
    axios.post('http://localhost:3500/Update', {
      id,
    }).then((response) => {
      if (response.data.status === 'fail') {
      } else {
        setState(true);
        setInitial(false);
        const responseData = response.data.status;
        setList(JSON.parse(responseData));
      }
    });
  };


  const Modify = () => {
    const List={
        name,
        age,
        date,
        hours,
        dept,
        id,
      }
      axios.post('http://localhost:3500/Updating',
          {
            List   
          }).then((data)=>{
            window.location.href = `/homepage`
          })
  };

  return (
    <>
      <Home />
      <div className='right'>
        <section className='common'>
          <h1>Update Details</h1>
          {inital && (
            <>
              <input type='text' className='add4' placeholder='Enter the staff id' onChange={(e) => { setId(e.target.value); }} />
              <button onClick={update} className='update'>Update Details</button>
            </>
          )}
          {state && (
            <>
              <input className='add' value={name} onChange={(e) => { setName(e.target.value); }} type="text" placeholder="Enter staff full name"/>
              <br  />
            <input className='add1' value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Enter staff age" />
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
            <input className='add' value={date} onChange={(e)=>{setDate(e.target.value)}} id='date' type="date"/>
            <br  />
            <input className='add' value={hours} onChange={(e)=>{setHours(e.target.value)}} type="number" placeholder="Enter number of hours of teaching" />
            <br  />
              <button id="add" onClick={Modify}>Modify data</button>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Updating;
