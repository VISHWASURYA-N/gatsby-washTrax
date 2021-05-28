import React, { useState } from "react"
import InputForm from "../../Component/form"
import { Card } from "antd"
import logo from "../../assets/logo_1.png"
import background from "../../assets/img-17.jpg"
import "../index.css"
import "../layout.css"
import { Form} from "antd"
import { navigate } from "gatsby-link"
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
    if (values.password.length >= 6 && values.password===values.confirm_password ){
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px auto",
              height: "95%",
              flexBasis: "29%",
              borderRadius: "10px",
              }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
              className="login_logo"
            >
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
                password and confirm password should match
                </p>
              )}

              <p style={{ textAlign: "center" }}>
                In case of any issues, please contact
                <a href="mailto:info@washtrax.com"> info@washtrax.com</a>
              </p>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}
