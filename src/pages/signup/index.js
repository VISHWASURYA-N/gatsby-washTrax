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
    placeholder: "enter ur email id",
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
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }
  const [error, setError] = useState(false)

  const onFinish = values => {
    console.log("Success:", values)
    if (values.username.length > 5 && values.password.length > 6) {
      navigate("/")
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
              height: "90%",
              flexBasis: "25%",
              borderRadius: "20px",
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
                  username should be 5 characters and password should be 6
                  characters long
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
