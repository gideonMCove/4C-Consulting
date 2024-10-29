import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'


export default function Header (){
    return (
        <div className="Header">
           <img src ="pics/Header Image - preheater at night.JPG" alt="Mitchell Plant Preheater at Night"  ></img>
        </div>
    )
}