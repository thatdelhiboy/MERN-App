import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

const App = ()=>{

    return (<div>

                <BrowserRouter>
                    <Routes>
                        <Route path='/login' exact element={<Login/>}/>
                        <Route path='/register' exact element={<Register/>}/>
                        <Route path='/dashboard' exact element={<Dashboard/>}/>
                        <Route path="*" element={<p>Path not resolved</p>} />
                    </Routes>
                </BrowserRouter>

    </div>)
}

export default App