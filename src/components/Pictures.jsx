import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'

export default function Pictures () {
    return (
        <div className="pictures">
            <img src ="pics/IENI5456 - Copy (2).JPG" alt ="Mitchell plant silo with rainbow in the background" width ="600px" length ="600px"></img>
            <img src ="pics/IMG_0999.JPG" alt ="Mitchell Plant preheater" width ="600px" length ="600px"></img>
            <img src ="pics/IMG_1446.JPG" alt ="Mitchell plant in construction" width ="600px" length ="600px"></img>
        </div>
    )
}