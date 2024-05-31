import React from 'react'
import './RecomendedVideos.css'
import VideoCard from './VideoCard.js'

import Photo1 from './asets/image.png'
import Photo2 from './asets/image copy.png'
import Photo3 from './asets/image copy 2.png'
import Photo4 from './asets/image copy 3.png'
import Photo5 from './asets/image copy 4.png'
import Photo6 from './asets/image copy 5.png'
import Photo7 from './asets/image copy 6.png'
import Photo8 from './asets/image copy 7.png'


function RecommendedVideos() {
  return (
    <div className='recomendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos_Videos'>
          <VideoCard
          image={Photo1} title="sample videos for youtube clone" channel="tricky" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo2} title="sample videos for youtube clone" channel="Rahul" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo3} title="sample videos for youtube clone" channel="clever programmer" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo4} title="sample videos for youtube clone" channel="movie mania" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo5} title="sample videos for youtube clone" channel="unlimited" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo6} title="sample videos for youtube clone" channel="mass maja" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo7} title="sample videos for youtube clone" channel="goal gama" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo8} title="sample videos for youtube clone" channel="mitery grad" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo1} title="sample videos for youtube clone" channel="monkey mady" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo6} title="sample videos for youtube clone" channel="travency media" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo3} title="sample videos for youtube clone" channel="global earth" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
          <VideoCard
          image={Photo2} title="sample videos for youtube clone" channel="marky" views="10M" timestamp="1 days ago" channelImage="https://thispersondoesnotexist.com/"
          />
       
         
      </div>
      </div>
  )
}

export default RecommendedVideos;