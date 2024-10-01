import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'


export default function Nav () {
    return (
        <div className ="Nav">
            <Link className="pageTitle" to="/">4C Consulting</Link>
            <div className='navGroup'>
                <NavDropdown title="About" id="About-dropdown">
                    <NavDropdown.Item as={Link} to="/About">About</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title ="Contact" id="Contact-dropdown"></NavDropdown>
                    <NavDropdown.Item as={Link} to="/Contact">Contact</NavDropdown.Item>
            </div>
        </div>
    )
}
