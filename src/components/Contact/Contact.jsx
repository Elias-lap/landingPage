import "./Contact.scss"
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";

function Contact() {
  
  const [Email , setEmail] = useState('')
  const [number , setnumber] = useState('')
  const [Name , setName] = useState('')
    // handel submit 
const  Handelsubmit =async(e)=>{
  e.preventDefault();
  const DataUser ={
    "email" :Email ,
    "name"  : Name ,
    "phone" :number  ,
    
  }
  console.log(DataUser)
  SendData(DataUser)
  setEmail('')
  setName('')
  setnumber('')
}

  const SendData = (DataUser)=>{
    fetch("http://upskilling-egypt.com:3001/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(DataUser),
          }).then(response => {
            // Check if the response is successful (status code 200)
            if (response.ok) {
              // Response status is 200
              console.log('Data sent successfully');
            } else {
              // Response status is not 200
              console.error('Data sending failed. Status:', response.status);
            }
          }).catch(error => {
            // Handle any errors that occurred during the fetch operation
            console.error('There was a problem with the fetch operation:', error);
            throw error; // Rethrow the error for the caller to handle
          });
  }
  

  // send data user 
  
  return (
    <section className="contact">

      <h2>
        Conatct us 
      </h2>

      <div className="contact_Form">
        <form  onSubmit={Handelsubmit}>
           <input value={Name}  onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Full Name "/>
           <input value={Email}  onChange={(e)=>setEmail(e.target.value)} type="text"  placeholder="Email "/>
           <input  value={number}  onChange={(e)=>setnumber(e.target.value)} type="number"  placeholder="phone Number  "/>
           <button type="submit">Send</button>
        </form>
        <div className="contact_Form-leftSide">
      <div className="Box-Email-telefon">
          <div ><IoMdMail className="icon" /></div>
              <span> test@gmail.com</span>
      </div>
      <div className="Box-Email-telefon">
          <div ><BsFillTelephoneFill className="icon" /></div>
          <span >+7 700 000 00 00</span>
      </div>

        </div>

      </div>
      <div className="contact_footer">

      </div>
    </section>
  )
}

export default Contact
