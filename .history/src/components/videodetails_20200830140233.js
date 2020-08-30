import React ,{ Fragment } from 'react';


const VideoDetails = ({ video }) =>{
    if(!video) return <div>Loading..,</div>
    console.log(video.id.videoId)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <Fragment>

<div class="ui embed" data-url= data-placeholder="/images/bear-waving.jpg">

</div>
        </Fragment>
    )
}


export default VideoDetails