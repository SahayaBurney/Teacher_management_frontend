import { useState } from "react"
import './App.css'
function Login(){
    const [name,setName]=useState("")
    const [pss,setPss]=useState("")
    const login=()=>{
        if(name==="admin" && pss==="123"){
            window.location.href = `/homepage`
        }
        else{
            document.getElementById("check").style.color='red'
            setName("")
            setPss("")
        }
    }
    const send=()=>{
        window.location.href = `/seepassword`   
    }
    return(
        <>
        <div className="login">
            <input type='text' value={name} placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} required/>
            <br />
            <input type='password'value={pss} placeholder='Enter Password' onChange={(e)=>{setPss(e.target.value)}} required/>
            <br />
            <button onClick={login}>Go on</button>
            <button onClick={send}>Dont know password</button>
            <p id="check">Check correctly</p>
        </div>
        </>
    )
}
export default Login