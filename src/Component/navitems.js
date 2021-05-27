import React from 'react'
import { Menu,} from 'antd';
export default function Navitems({icon,name}) {
    console.log(name,icon)
    return (
        
         <Menu.Item key={name} >
          {name}
        </Menu.Item>
        
    )
}
