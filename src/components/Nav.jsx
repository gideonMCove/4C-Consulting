import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'


export default function Nav () {
    return (
        <div className ="Nav">
            <Link className="pageTitle" to="/">4C Consulting</Link>
            <div className='navGroup'>
                <Link className="About" to ="/About">About</Link>
                <Link className="Contact" to ="/Contact">Contact</Link>
                <NavDropdown title="Services" id="Services-dropdown">
                    <NavDropdown.Item as={Link} to="/Services">About</NavDropdown.Item>
                </NavDropdown>
               
            </div>
        </div>
    )
}
