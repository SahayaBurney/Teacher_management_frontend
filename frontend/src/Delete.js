import './App.css'
import Home from './home'
import { useEffect, useState} from 'react'
import React from 'react'
import axios from 'axios'

function Delete() {
    const [id, setId] = useState("");
    const [state, setState] = useState(false);
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3500/Delete', { id });
        if (response.data.status === 'fail') {
          alert("Some issues occurred, check again");
          window.location.href = `/homepage`;
        } else {
          const datas = response.data.status;
          setState(true);
          if (datas) {
            setData(JSON.parse(datas));
          }
        }
      } catch (error) {
        console.error(error);
        console.log(error)
      }
    };
  
    const del = () => {
      fetchData();
      setId("");
    };
    useEffect(() => {
      console.log(data); 
    }, [data]);
  
    return (
      <>
        <Home />
        <div className='right'>
          <section className='common'>
            <h1>Delete Staffs</h1>
            <input className='add2' type='text' placeholder='Enter the Staff Id' onChange={(e) => { setId(e.target.value) }} value={id} />
            <button className='button' onClick={del}>Delete</button>
            {state &&
              <div className='dcontent' id='delete'>
                <h1>Deleted Content</h1>
                <ul>
                    <li>Name:{data.name}</li>
                    <li>Age:{data.age}</li>
                    <li>Year of Join:{data.yr}</li>
                    <li>Id:{data.id}</li>
                    <li>Department:{data.dept}</li>
                    <li>Number of classes handling:{data.hours}</li>
                </ul>

              </div>
            }
          </section>
        </div>
      </>
    );
  }
  
  export default Delete;
  