import React, { useState } from "react"
import logo_ from "../assets/logo_1.png"
import "bootstrap/dist/css/bootstrap.css"
import {  UserOutlined } from "@ant-design/icons"
import Navbar from "./sideNav"
import NavProfile from "./logoutPopUp"

export default function HeaderNav() {
  const[show,setShow]=useState(false)
  function handleClick() {
    setShow(true)
  }

  return (
    <div>
      <div classNameName="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a
            className="navbar-brand"
            style={{ fontWeight: "bold", fontSize: "20px", padding: "10px" }}
            href="#"
          >
            Buzzwash
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <a className="nav-link" href="#">
                  <button className="btn btn-outline-secondary">
                    EQUIPMENT DROP-OFF
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="btn btn-outline-secondary">
                    EQUIPMENT PICK-UP
                  </button>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <span>Alex Brown</span>
                </a>
              </li>
              <li className="nav-item active" onClick={handleClick}>
                <a className="nav-link" href="#">
                  <span>
                    <UserOutlined style={{ fontSize: "30px" }} />
                   
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={logo_} width="60" height="27" />
                  {show && <NavProfile setShow={setShow}/>}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Navbar />
    </div>
  )
}
