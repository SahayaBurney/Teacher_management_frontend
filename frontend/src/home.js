import './App.css'
import axios from 'axios'
function Home(){
    const disp=()=>{
        axios.post('http://localhost:3500/Display',{}
        ).then((data)=>{
            if(data.data.status==='fail'){
                alert("No staffs are been added");
            }else{
                const List=data.data.status
                localStorage.setItem("List",List)
                console.log(localStorage.getItem("List"))
                window.location.href = `/homepage/display_records`    
            }
        })
    }
    const add=()=>{
        window.location.href = `/homepage/add_records`
    }
    const fil=()=>{
        window.location.href = `/homepage/filter_records`
    }
    const del=()=>{
        window.location.href = `/homepage/delete_records`
    }
    const update=()=>{
        window.location.href = `/homepage/update_records`
    }
    const search=()=>{
        window.location.href = `/homepage/search_record`
    }
    return(
        <>
        <div className="left">
            <div className='menu'>
                <ul>
                    <li onClick={disp}>Display Staffs</li>
                    <li onClick={add}>Add Teacher</li>
                    <li onClick={fil}>Filter</li>
                    <li onClick={update}>Update Record</li>
                    <li onClick={del}>Delete Staffs</li>
                    <li onClick={search} >Search Staffs</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Home;