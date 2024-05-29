import React from 'react'
import './SidebarRow.css'

function SidebarRow({Icon, title}) {
  return (
    <div className='sidebarRow'>
        <Icon className="sidebarRow_icon"/>
        <h3 className='sidebarRow_title'>{title}</h3>
    </div>
  )
}

export default SidebarRow