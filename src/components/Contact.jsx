import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'


export default function Contact () {
    return(
        <div className ="Contact">
            <p>  4See Consulting    </p>
            <p>    307 Island Drive Lane</p>
            <p>Maberly, Ontario</p>
            <p>Email: Kevin.Cove@4seeconsulting.com</p>
            <p>Phone: 484-632-9992</p>
        </div>
    )
}