import React, { Component } from 'react';


import { Grid } from '@material-ui/core'
import youtube from './api/youtube'

import Search from './components/search'
import VideoDetails from './components/VideoDetails'
class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Grid justify= "center" container spacing={16}>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                {/* Search Bar */}
              </Grid>
              <Grid item xs={8}>
                {/* videos details */}
              </Grid>
              <Grid item xs={4}>
                {/* video list*/}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
 
}

export default App;
