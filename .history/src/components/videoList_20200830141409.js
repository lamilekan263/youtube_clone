import React from 'react';


const VideoList = ({ videoCard }) =>{
    return(
        <React.Fragment>
            <div className="ui card">      
                <img src={videoCard.snippet.thumbnails.high} alt={videoCard.snippet.title}/>
                <div className="content">
                    <h1></h1>
                </div>
               
            </div>
        </React.Fragment>
    )
}


export default VideoList