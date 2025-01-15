import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import Main from './components/Main'
import Nav from './components/Nav'


export default function App () {


  return (
    <div className="App">
      
      <Header />
      <Nav /> 
      <Main />
      <Footer />
    </div>

  )
}