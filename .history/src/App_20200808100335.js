import React, { Component } from 'react';


import { Grid } from '@material-ui/core'
import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
import VideoDetails from './components/videodetails'
class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  handleSearchSubmit = async(searchTerm) =>{
    const response = await youtube.get('search', {})
  }
  render(){
    return (
      <div className="App">
        <Grid justify= "center" container spacing={16}>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <SearchBar onsearchSubmit = {this.handleSearchSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetails />
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
