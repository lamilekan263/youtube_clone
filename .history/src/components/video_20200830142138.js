import React from 'react';



const video = () =>{
    return(
        <div className="ui card">      
                <img src={videoCard.snippet.thumbnails.high} alt={videoCard.snippet.title}/>
                <div className="content">
                    <h1>{videoCard.snippet.title}</h1>
                </div>
               
            </div>
    )
}

export default video