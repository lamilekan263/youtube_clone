import React from 'react';
import Video from './video' 

const VideoList = ({ videos }) =>{
    return(
        videos.map(video =>{
          return  <Video key={video.} videoCard = {video}/>
        })
        
    )
}


export default VideoList