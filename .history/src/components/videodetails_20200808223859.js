import React ,{ Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = ({ video }) =>{
    if(!video){
        return <div>Loading..,</div>
    }
    const videoSrc = ''
    return(
        <Fragment>
            <Paper elevation={6} style ={{ height : '70%'}}>
                <iframe  frameBorder ='0' height ='100%' width = '100%' title = 'video Player' src ={video}   />
            </Paper>
            <Paper elevation={6} style ={{ padding : '15px'}}>

            </Paper>
        </Fragment>
    )
}


export default VideoDetails