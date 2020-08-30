import React from 'react';


const VideoList = ({ videoCard }) =>{
    return(
        <React.Fragment>
            <div className="ui card">      
            <img src={videoCard.snippet.thumbnails.high} />
            <div className="content">
                
            </div>
            </div>
        </div>
        
    )
}


export default VideoList