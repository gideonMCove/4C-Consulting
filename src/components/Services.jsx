import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'



export default function Services () {
    return(
        <div className="Services">
            <ul>
                <li>Project Management Support or Review Services for:
                    <ul>
                        <li>Project Approvals</li>
                        <li>Proposals</li>
                        <li>Contracts</li>
                    </ul>
                </li>
                <li>Site visits/project audits</li>
                <li>Civil / Structural support both site and engineering</li>
                <li>Engineering Management</li>
            </ul>
        </div>
    )
}