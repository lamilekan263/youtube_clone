import React ,{ Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = ({ video }) =>{
    return(
        <Fragment>
            <Paper elevation={6} style ={{ height : '70%'}}>
                <iframe  frameBorder =0/>
            </Paper>
            <Paper elevation={6} style ={{ padding : '15px'}}>

            </Paper>
        </Fragment>
    )
}


export default VideoDetails