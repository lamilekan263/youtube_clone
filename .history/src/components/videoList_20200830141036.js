import React from 'react';


const VideoList = ({ videoCard }) =>{
    return(
        <div className="ui card">
        <a className="image" href="#">
          <img src={} />
        </a>
        <div className="content">
          <a className="header" href="#">Steve Jobes</a>
          <div className="meta">
            <a>Last Seen 2 days ago</a>
          </div>
        </div>
      </div>
    )
}


export default VideoList