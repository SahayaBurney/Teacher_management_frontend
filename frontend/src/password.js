import {useRef } from "react"
import './App.css'
import emailjs from '@emailjs/browser';
export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      document.getElementById("check").style.color='black'
      emailjs.sendForm('service_4rbqcur', 'template_4b99wk2', form.current, 'gTTIc3XvoWSeWQZko')
        .then((result) => {
            console.log("sent");
            console.log(result.text)
            window.location.href = `/`   
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className="login">
        <form ref={form} onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder="Enter the mail Id" />
        <input id="send" type="submit" value="Send" />
        <p id="check">Check your mail id</p>
      </form>
      </div>
    );
  };