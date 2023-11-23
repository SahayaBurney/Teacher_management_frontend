import './App.css';
import Home from './home';
import { useState, useEffect } from 'react';

function Display() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem('List');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    // Ensure list has items before accessing list[0]
    if (list.length > 0) {
      console.log(list[0].name);
    }
  }, [list]);
  let tot=0,avg;
  list.forEach((item)=>{
    tot+=Number(item.hours)
  })
  avg=tot/(list.length)
  return (
    <>
      <Home />
      <div className='right'>
        <section className='common'>
          <p>The total number of classes are <b>{tot}</b> and the total number of staffs are <b>{list.length}</b> and the average is <b>{avg}</b></p>
          <table id='display' border={"2px"}>
            <thead>
              <tr>
                <th>Staff Id</th>
                <th>Name</th>
                <th>Year of Join</th>
                <th>Department</th>
                <th>Age</th>
                <th>Classes of Teaching</th>
              </tr>
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
        </section>
      </div>
    </>
  );
}

export default Display;
