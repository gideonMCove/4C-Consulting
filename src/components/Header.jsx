import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'


export default function Header (){
    return (
        <div className="Header">
           <img src ="pics/IMG_2325 - Copy.JPG" alt="Mitchell Plant Preheater at Night" width="600" height="600"></img>
        </div>
    )
}