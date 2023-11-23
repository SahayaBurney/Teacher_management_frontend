import './App.css'
import Home from './home'
import { useState} from 'react'
import axios from 'axios'
function Filtering(){
    const [age,setAge]=useState("")
    const [state,setState]=useState(false)
    const [classes,setClasses]=useState("")
    const [list,setList]=useState([])
    const fil=()=>{
        axios.post('http://localhost:3500/Filter',{
            age,
            classes
        }).then((data)=>{
            if(data.data.status==='fail'){
                alert("No such records are found");
            }else{
               const d=data.data.status
               setList(JSON.parse(d))
               setState(true)
            }
        })
        setAge("")
        setClasses("")
    }
    return(
        <>
       <Home />
        <div className='right'>
            <section className='common'>
                <h1>Filter Records</h1>
                <input className='add3' type='number'placeHolder='Enter Age' onChange={(e)=>{setAge(e.target.value)}} />
                <input className='add3' type='number' placeHolder='Enter number of classes' onChange={(e)=>{setClasses(e.target.value)}}/>
                <br />
                <button id='filter'  onClick={fil}>Filter</button>
                {
                    state &&
                    <table id='filter'>
                        <thead>
                            <th>Staff Id</th>
                            <th>Name</th>
                            <th>Year of Join</th>
                            <th>Department</th>
                            <th>Age</th>
                            <th>Classes of Teaching</th>
                        </thead>
                        <tbody>
                        {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.yr}</td>
                            <td>{item.dept}</td>
                            <td>{item.age}</td>
                            <td>{item.hours}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                }
            </section>
        </div>
        </>
    )
}
export default Filtering