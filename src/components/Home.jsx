import axios from "axios"
import { useState, useEffect} from "react"
import {Navigate, useNavigate, useParams } from 'react-router-dom'


export default function Home () {
    return (
        <div className="Home">
            <p> 4See Consulting</p>
            <p>A Cement Consultant Company. </p>
            <p> Founded in 2023, lead with decades of experience working on the biggest cement projects in North America.</p>

        </div>
    )
}
