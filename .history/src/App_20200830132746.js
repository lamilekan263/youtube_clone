import React, { Component } from 'react';


import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
// import VideoDetails from './components/videodetails'
class App extends Component {
  this.state ={
    videos: []
  }
  render(){
    // const { selectedVideo } = this.state
    return (
      <div className="ui container">

                <SearchBar onFormSubmit = {this.handleSearchSubmit} />

      </div>
    );
  }
 
}

export default App;
