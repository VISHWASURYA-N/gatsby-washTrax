import React, { useState } from "react"
import InputForm from "../Component/form"
import { Card,  Container } from "react-bootstrap"
import logo from "../assets/logo_1.png"
import background from "../assets/img-17.jpg"
import { Form } from "antd"
import { navigate } from "gatsby-link"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"

let form_data = [
  {
    label: "USER ID",
    name: "username",
    type: "text",
    className:"ant-form-item-required",
    placeholder: "enter user username",
    rules: [
      {
        required: true,
        message: "Please input your username",
      },
    ],
  },
  {
    label: "PASSWORD",
    name: "password",
    type: "password",
    placeholder: "enter user password",
    className:"ant-form-item-required",
    rules: [
      {
        required: true,
        message: "Please input your password",
      },
    ],
  },
  {
    btnName: "SIGN IN",
    type: "submit",
    className: "primary",
  },
]
export default function SignIn() {
 
  const [error, setError] = useState(false)

  const onFinish = values => {
    console.log("Success:", values)
    if (values.password.length >= 6) {
      navigate('/home')
      setError(false)
    } else {
      setError(true)
    }
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }
  const initialCredential = {
		username: '',
		password: ''
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
       <div  style={{ maxWidth: "374px" }}>
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
              <Link to="/signup">
                <p style={{ textAlign: "center" }}>
                  do you want create new account ?
                </p>
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

