import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'


export default function Contact () {
    return(
        <div className ="Contact">
            <p>4See Consulting</p><br />
            <p>307 Island Drive Lane</p><br />
            <p>Maberly, Ontario</p><br />
            <p>Email: Kevin.Cove@4seeconsulting.com</p><br />
            <p>Phone: 484-632-9992</p>
        </div>
    )
}