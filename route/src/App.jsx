import { useState } from 'react'
import Home from './Home'
import './App.css'
import {
  Route,
  Link,
} from 'react-router-dom'
import Contact from './Contact'
import Details from './Details'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
 
        <Route path='contact' element={<Contact/>}/>
        <Route path='Details' element={<Details/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
