import React from 'react';
import {
    DashboardOutlined,
    DotChartOutlined,
    GitlabOutlined,
    FileTextOutlined,
    MergeCellsOutlined,
    DeliveredProcedureOutlined,
    TeamOutlined,
    FundOutlined,
    QuestionCircleOutlined,
  } from "@ant-design/icons"

export  const sidenav=[
    {name:"DASHBOARD", icon:<DashboardOutlined />,className:"nav-text" ,path: '/dashbord',},
    {name:"MY YARD", icon:<DotChartOutlined />,className:"nav-text" ,path: '/myyard'},
    {name:"ATTENSION NEEDED", icon:<GitlabOutlined />,className:"nav-text" ,path: '/attension'},
    {name: "ON YARD REPORT", icon:<FileTextOutlined />,className:"nav-text" ,path: '/onyardreport'},
    {name: "PO MASTER", icon:<MergeCellsOutlined />,className:"nav-text" ,path: '/pomaster'},
    {name:"SERVICE MASTER", icon:<FileTextOutlined />,className:"nav-text" ,path: '/servicemaster'},
    {name:"CUSTOMER", icon:< DeliveredProcedureOutlined/> ,className:"nav-text" ,path: '/customer'},
    {name:"YARD USER", icon:<TeamOutlined /> ,className:"nav-text",path: '/yarduser'},
    {name:"YARD LOCATION", icon:<FundOutlined /> ,className:"nav-text",path: '/yardlocation'},
    {name:"HELP", icon:<QuestionCircleOutlined /> ,className:"nav-text",path: '/help'},
]

