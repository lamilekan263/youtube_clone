import React from 'react';
import Video from './video' 

const VideoList = ({ videos,  }) =>{
    return(
        videos.map(video =>{
          return  <Video key = {video.id.videoId} videoCard = {video}/>
        })
        
    )
}


export default VideoList