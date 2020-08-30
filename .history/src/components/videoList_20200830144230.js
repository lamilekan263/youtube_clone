import React from 'react';
import Video from './video' 

const VideoList = ({ videos, onVideoSelect }) =>{
    return(
        videos.map(video =>{
          return  <Video key = {video.id.videoId} onVideoSelect = {onVide} videoCard = {video}/>
        })
        
    )
}


export default VideoList