import React ,{ Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = ({ video }) =>{
    if(!video) return <div>Loading..,</div>
    console.log(video.id.videoId)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <Fragment>

                <iframe  frameBorder ='0' height ='100%' width = '100%' title = 'video Player' src ={videoSrc}   />


        </Fragment>
    )
}


export default VideoDetails