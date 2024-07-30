import { useState } from 'react'
import {
    Route,
    Link, Outlet
  } from 'react-router-dom'
import './App.css'

function Home() {

  return (
    <>
    <h1>Welcome to the home Page</h1>
    <nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/Details'>Details</Link></li>
    </ul>
    </nav>

    <Outlet /> 
    </>
  )
}

export default Home