import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from './Home/Home'
import { Login } from './Login/Login'

export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* <Route  /> */}
        </Routes>
    </div>
  )
}
