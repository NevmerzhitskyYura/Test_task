import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">TestTask</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>to
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Group</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;