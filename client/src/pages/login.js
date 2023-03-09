import React, { useState } from 'react'

const Login = ()=> {
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({

       email, password
      })
    })

    const data = await response.json()

    if(data.user){
      alert('ok')
      window.location = '/dashboard'
    } else{
      alert('fail')
    }
  }

  return (
    <div><h2>Login app</h2>
   <form onSubmit={loginUser}>
    <input type="Email " value={email} onChange={(e) =>{SetEmail(e.target.value)}} placeholder="Email"/><br/>
    <input type="password" value={password} onChange={(e) =>{SetPassword(e.target.value)}} placeholder="password"/><br/>
    
    <input type="Submit"/>
   </form>
    </div>
  )
}


export default Login