import React, { Component } from 'react';


import { Grid } from '@material-ui/core'
import youtube from './api/youtube'


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
                {/* Search Bar */}
              </Grid>
              <Grid item xs={4}>
                {/* Search Bar */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
 
}

export default App;
