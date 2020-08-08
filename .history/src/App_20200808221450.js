import React, { Component } from 'react';


import { Grid } from '@material-ui/core'
import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
import VideoDetails from './components/videodetails'
class App extends Component {
  constructor(){
    super();
    this.state = {
      video : [],
      selectedVideo : null
    }
  }
  handleSearchSubmit = async (searchTerm) =>{
    const response = await youtube.get('search', {params : {
      part : 'snippet',
      maxResults : 5,
      key : 'AIzaSyDuFhEMbYxVL7N1XO5-lyJ9gapmkVMJtxw',
      q: searchTerm
  },
  })
    this.setState({video : response})
  }
  render(){
    return (
      <div className="App">
        <Grid justify= "center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
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
