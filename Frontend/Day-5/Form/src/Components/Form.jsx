import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [data,setData]=useState({email:"",password:""})
  const [error, setError] = useState('')
  const [show,setShow]=useState(false)
  
  const change =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(data.password.length < 6){
      setError("Password must be atleast 6 characters")
      return
    } else {
      setError("")
      alert(`Email: ${data.email}, Password: ${data.password}`)
    }
  }
  const button =()=>{
    setShow(!show)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {error && <p className="error">{error}</p>}
      <input type="email" placeholder='email' name='email' onChange={change} className="input-field" />
      <input type={show ? "text":"password"} placeholder='password' name='password' onChange={change} className="input-field" />
      <button type="button" onClick={button} className="button show-btn">{show ? 'hide' : 'show'}</button>
      <button type="submit" className="button submit-btn">submit</button>
    </form>
  )
}

export default Form