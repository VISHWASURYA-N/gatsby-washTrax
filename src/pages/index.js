import React, { useState } from "react"
import InputForm from "../Component/form"
import { Card } from "antd"
import logo from "../assets/logo_1.png"
import background from "../assets/img-17.jpg"
import "./layout.css"
import "./index.css"
import { Form } from "antd"
import { navigate } from "gatsby-link"
import { Link } from "gatsby"

let form_data = [
  {
    label: "USER ID",
    name: "username",
    type: "text",
    className: "form-control",
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
    className: "form-control",
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
    if (values.username.length > 5 && values.password.length > 6) {
      navigate('/home')
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
      </div>
    </div>
  )
}

// import React, { useState } from 'react';
// import { Link } from 'gatsby';
// import '../Component/sidenav.css';
// import {MenuFoldOutlined} from '@ant-design/icons';

// import {
//   DashboardOutlined,
//   DotChartOutlined,
//   GitlabOutlined,
//   FileTextOutlined,
//   MergeCellsOutlined,
//   DeliveredProcedureOutlined,
//   TeamOutlined,
//   FundOutlined,
//   QuestionCircleOutlined,
//   CloseCircleOutlined
// } from "@ant-design/icons"

 



// function Navbar() {
//   const sidenav=[
//     {name:"DASHBOARD", icon:<DashboardOutlined />,className:"nav-text" ,path: '/dashbord',},
//     {name:"MY YARD", icon:<DotChartOutlined />,className:"nav-text" ,path: '/myyard'},
//     {name:"ATTENSION NEEDED", icon:<GitlabOutlined />,className:"nav-text" ,path: '/attension'},
//     {name: "ON YARD REPORT", icon:<FileTextOutlined />,className:"nav-text" ,path: '/onyardreport'},
//     {name: "PO MASTER", icon:<MergeCellsOutlined />,className:"nav-text" ,path: '/pomaster'},
//     {name:"SERVICE MASTER", icon:<FileTextOutlined />,className:"nav-text" ,path: '/servicemaster'},
//     {name:"CUSTOMER", icon:< DeliveredProcedureOutlined/> ,className:"nav-text" ,path: '/customer'},
//     {name:"YARD USER", icon:<TeamOutlined /> ,className:"nav-text",path: '/yarduser'},
//     {name:"YARD LOCATION", icon:<FundOutlined /> ,className:"nav-text",path: '/yardlocation'},
//     {name:"HELP", icon:<QuestionCircleOutlined /> ,className:"nav-text",path: '/help'},
//   ]
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
     
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//              <MenuFoldOutlined  onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//               <CloseCircleOutlined />
//             </Link>
//             </li>
            
//             {sidenav.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.name}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
      
//     </>
//   );
// }

// export default Navbar;
