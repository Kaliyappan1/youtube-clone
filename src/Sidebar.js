import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'

import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ArticleIcon from '@mui/icons-material/Article';
import PodcastsIcon from '@mui/icons-material/Podcasts';


function Sidebar() {
  return (
    <div className='sidebar'>

       <SidebarRow selected Icon={HomeIcon} title="Home"/>
       <SidebarRow Icon={YouTubeIcon} title="Shorts"/>
       <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
       <hr/>
       <SidebarRow Icon={SwitchAccountIcon} title="Your chennal"/>
       <SidebarRow Icon={AccessTimeIcon} title="History"/>
       <SidebarRow Icon={PlaylistPlayIcon} title="Playlist"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Your videos"/>
       <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
       <SidebarRow Icon={ThumbUpIcon} title="Liked videos"/>
       <hr/>
       {/* <SidebarRow Icon={ExpandMoreIcon} title="Show more"/> */}
       <SidebarRow Icon={WhatshotIcon} title="Trending"/>
       <SidebarRow Icon={MusicNoteIcon} title="Music"/>
       <SidebarRow Icon={LiveTvIcon} title="Live"/>
       <SidebarRow Icon={ArticleIcon} title="News"/>
       <SidebarRow Icon={PodcastsIcon} title="Podcast"/>
    </div>
  )
}

export default Sidebar