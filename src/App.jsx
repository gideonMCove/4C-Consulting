import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import axios from 'axios'

export default function App () {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>

  )
}