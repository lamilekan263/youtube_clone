import React from 'react';


const VideoList = ({ videoCard }) =>{
    return(
        <React.Fragment>
            <div className="ui card">      
                <img src={videoCard.snippet.thumbnails.high} alt={videoCard.snippet}/>
                <div className="content">
                    
                </div>
               
            </div>
        </React.Fragment>
    )
}


export default VideoList