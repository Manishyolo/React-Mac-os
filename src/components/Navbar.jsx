import React from 'react'
import "./Navbar.scss"
import Datetime from './Datetime'

const Navbar = () => {
  return (
    <div className='Nav'>
        <div className="left">
            <div className="apple-icon">
                <img src="/navbar-icons/apple.svg" alt=""  />
            </div>
            <div className="nav-item">
                <p>Manish</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
             <div className="nav-item">
                <p>Window</p>
            </div>
             <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="wifi-icon">
                <img src="/navbar-icons/wifi.svg" alt="" />
            </div>
            <Datetime></Datetime>
        </div>
    </div>
  )
}

export default Navbar