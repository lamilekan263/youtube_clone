import React ,{ Fragment } from 'react';


const VideoDetails = ({ video }) =>{
    if(!video) return <div>Loading..,</div>
    console.log(video.id.videoId)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <Fragment>
<div className="ui container card">  

                <iframe  frameBorder ='0' height ='100%' width = '100%' title = 'video Player' src ={videoSrc}   />
</div>

        </Fragment>
    )
}


export default VideoDetails