import React, { useState } from "react"
import InputForm from "../../Component/form"
import { Card,  Container } from "react-bootstrap"
import logo from "../../assets/logo_1.png"
import background from "../../assets/img-17.jpg"
import "../index.css"
// import "../Login.css"
// import "../layout.css"
import { Form } from "antd"
import { navigate } from "gatsby-link"
import { Link } from "gatsby"
let form_data = [
  {
    label: "USER ID",
    name: "username",
    type: "text",
    className: "form-control",
    placeholder: "enter ur  user_id",
    rules: [
      {
        required: true,
        message: "Please input your user_id",
      },
    ],
  },
  {
    label: "PASSWORD",
    name: "password",
    type: "password",
    placeholder: "enter confirm password",
    className: "form-control",
    rules: [
      {
        required: true,
        message: "Please input your password",
      },
    ],
  },

  {
    label: "CONFIRM PASSWORD",
    name: "confirm_password",
    type: "password",
    placeholder: "enter user password",
    className: "form-control",
    rules: [
      {
        required: true,
        message: "Please input your password",
      },
    ],
  },
  {
    btnName: "Sign up",
    type: "submit",
    className: "primary",
  },
]

export default function SigUp() {
  const [error, setError] = useState(false)

  const onFinish = values => {
    console.log("Success:", values)
    
    if (
      values.password.length >= 6 &&
      values.password === values.confirm_password
    ) {
      navigate("/home")
      setError(false)
    } else {
      setError(true)
    }
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "cover",
    height: "100vh",
  }

  return (
    <div className="auth-container ">
      <div style={backgroundStyle}>
      <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
       <div  style={{ maxWidth: "400px" }}>
          <Card className="p-4" style={{borderRadius:"10PX"}}>
           <div className="login_logo">
              <img src={logo} alt="logo" width="180px" height="90px" />
            </div>
            <Form
              layout="vertical"
              name="login-form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {form_data.map((data, index) => (
                <InputForm key={index.toString()} {...data} />
              ))}
              {error && (
                <p style={{ color: "red", padding: "2px" }}>
                password should be minimum 6
                  characters long
                </p>
              )}
                <Link to="/">
                <p style={{ textAlign: "center" }}>
               Already have an account ? click here to Sign in</p>
              </Link>

              <p style={{ textAlign: "center" }}>
                In case of any issues, please contact
                <a href="mailto:info@washtrax.com"> info@washtrax.com</a>
              </p>
            </Form>
          </Card>
          </div>
          </Container>
        </div>
      </div>
    
  
  )
}
