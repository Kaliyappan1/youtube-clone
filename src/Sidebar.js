import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'

import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function Sidebar() {
  return (
    <div className='sidebar'>

       <SidebarRow Selected Icon={HomeIcon} title="Home"/>
       <SidebarRow Icon={YouTubeIcon} title="Shorts"/>
       <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
    </div>
  )
}

export default Sidebar