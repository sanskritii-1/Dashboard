import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="not-found">
            <p className="para-content">Page Not Found</p>
            <Link to="/">Click here to go to Dashboard</Link>
        </div>
    )
}