import React from 'react'
import { Link } from 'react-router-dom'



export default function Nav () {
    return (
        <div className ="Nav">
            {/* <Link className="pageTitle" to="/">4C Consulting</Link> */}
            <div className='navGroup'>
                <Link to= '/'>Home   </Link>
                <Link to= "/About">About   </Link>
                <Link to= "/Contact">Contact   </Link>
                <Link to= "/Services">Services   </Link>
                <Link to= "/Pictures">Pictures   </Link>
                <Link to= "/References">References   </Link>
               
            </div>
        </div>
    )
}
