import Avatar from "@mui/material/Avatar";
import React from 'react'
import CardMedia from '@mui/material/CardMedia';


function VideoCard({image, title, channel, views, timestamp, channelImage}) {

  return (
    <div className='videoCard'>
      
      <CardMedia
        sx={{width:320, height: 180 }}
        image= {image}
        title="green iguana"
      />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage}/>
      </div>
      <div className="video_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} {timestamp} </p>
      </div>
    </div>
  )
}

export default VideoCard;