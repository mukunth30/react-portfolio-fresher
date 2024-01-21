import "./ForemStyle.css"
import React from 'react'

export const Form = () => {
  return (
    <div className="form">
        <form> 
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subjecte</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder="type your message here"/>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
  )
}
export default Form;