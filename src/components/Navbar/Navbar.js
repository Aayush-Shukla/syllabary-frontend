import React from 'react'
import './Navbar.css'
// import logo from '../'
const Navbar = () => {
    return (
        <div className="nav">
            <div className="navbar">
                {/* <div className="nav-logo">
                    <img src={logo} alt="logo"  width={50} height={50}/>
                </div> */}
                <div className="nav-list">
                    <ul className="nav-topList">
                        <li className="listItem">WHAT WE DO</li>
                        <li className="listItem">HOW WE DO IT</li>
                        <li className="listItem">COURSES</li>
                        <li className="listItem">PLANS</li>
                        <li className="listItem">OUR TEAM</li>
                        <li className="listItem">CONTACT</li>
                    </ul>
                </div>
                <div className="dark_mode">
                    <button>off</button>
                </div>

            </div>

        </div>
    )
}

export default Navbar