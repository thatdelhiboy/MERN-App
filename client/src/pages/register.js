import React, { useState } from 'react'

const Register = ()=> {
  const [name,SetName] = useState('')
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({

        name, email, password
      })
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div><h2>Login app</h2>
   <form onSubmit={registerUser}>
   <input type="text" value={name} onChange={(e) =>{SetName(e.target.value)}} placeholder="name"/> <br/>
    <input type="Email " value={email} onChange={(e) =>{SetEmail(e.target.value)}} placeholder="Email"/><br/>
    <input type="password" value={password} onChange={(e) =>{SetPassword(e.target.value)}} placeholder="password"/><br/>
    
    <input type="Submit"/>
   </form>
    </div>
  )
}


export default Register