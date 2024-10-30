import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



export default function About () {
    return(
        <div className="About">
            <h1> 4See Consulting inc.</h1><p> was founded by owner Mr. Kevin Cove. Kevin has over 3 decades of experience working on cement projects around the world, from Vietnam to Mitchell, Indiana.</p>
            <Button variant="info"  href="/Services" size="sm">Services</Button>
        </div>
    )
}