import React from 'react';



const video = ({ videoCard, onVideoSelect }) =>{
    return(
        <div onClick = {} className="ui card">      
                <img src={videoCard.snippet.thumbnails.medium.url} alt={videoCard.snippet.title}/>
                <div className="content">
                    <p>{videoCard.snippet.title}</p>
                </div>
               
            </div>
    )
}

export default video