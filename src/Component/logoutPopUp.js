import React, { useState } from "react"
import {Button } from "antd"
import { navigate } from "gatsby"
import { UserOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.css";
export const NavProfile = ({ setShow }) => {
  function signOut() {
    navigate("/")
  }

  return (
    <div
      className="card"
      style={{
        position: "absolute",
        top: "70px",
        right: "50px",
        width: "150px",
        marginTop: "5px",
      }}
    >
      <div className="card-title">
        <div
          onClick={() => {
            setShow(false)
          }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <span>{<UserOutlined style={{ fontSize: 30, paddingTop: "15px"}} />}</span>
          <span style=
          {{paddingTop:"10px" ,borderBottom:"2px solid black"}}>
            <span>BuzzWash</span>
            <p className="text-muted">Alex Brown</p>
          </span>
        </div>
      </div>
      <div className="card-block">
        <Button onClick={signOut} block type="danger">
          sign out
        </Button>
      </div>
    </div>
  )
}

export default NavProfile
