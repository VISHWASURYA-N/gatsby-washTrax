import React,{useState} from 'react'
import logo_ from "../assets/logo_1.png"
import "bootstrap/dist/css/bootstrap.css"

import { MenuFoldOutlined,UserOutlined  } from '@ant-design/icons';
import Navbar from './sideNav';
import { Link } from 'gatsby';

export default function HeaderNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    return (
      <div>
        
   <div classNameName="container">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" style={{fontWeight:"bold",fontSize:"20px",padding:"10px"}} href="#">Buzzwash</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li>
      <Link to='#' className='menu-bars'style={{padding:"10px"}}>
             <MenuFoldOutlined  style={{color:"black"}}  onClick={showSidebar} />
    </Link>
   
      </li>
  
      <li className="nav-item">
        <a className="nav-link" href="#"><button className="btn btn-outline-secondary">EQUIPMENT DROP-OFF</button></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><button className="btn btn-outline-secondary">EQUIPMENT PICK-UP</button></a>
      </li>
     </ul>
     <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#"><span>ALEX BROWN</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><span><UserOutlined style={{ fontSize: '30px', }}/></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img src={logo_}  width="60" height="27"/></a>
      </li>
    
     </ul>
  
  </div>
  </nav>
  </div>
  <Navbar showSidebar={showSidebar} sidebar={sidebar}/>
   </div>
    )
}
