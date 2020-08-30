import React ,{ Fragment } from 'react';


const VideoDetails = ({ video }) =>{
    if(!video) return <div>Loading..,</div>
    console.log(video.id.videoId)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <Fragment>
<div className="ui card">      
                <img src={videoCard.snippet.thumbnails.high} alt={videoCard.snippet.title}/>
                <div className="content">
                    <h1>{videoCard.snippet.title}</h1>
                </div>
               
            </div>
        </Fragment>
    )
}


export default VideoDetails