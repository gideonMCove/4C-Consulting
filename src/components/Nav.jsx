import React from 'react'
import { Link } from 'react-router-dom'



export default function Nav () {
    return (
        <div className ="Nav">
            <Link className="pageTitle" to="/">4C Consulting</Link>
            <div className='navGroup'>
                <Link className="About" to ="/About">About</Link>
                <Link className="Contact" to ="/Contact">Contact</Link>
                <Link className="Services" to ="/Services">Services</Link>
               
            </div>
        </div>
    )
}
