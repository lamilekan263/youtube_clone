import React, { Component } from 'react';

import VideoDetails from './components/videodetails'

import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
// import VideoDetails from './components/videodetails'
class App extends Component {
  state ={
    videos: []
    selectedViseo: null
  }


  handleSearchSubmit = async  term  =>{
    const response = await youtube.get('/search', {
      params:{
        part : 'snippet',
        maxResults : 5,
        key : 'AIzaSyDuFhEMbYxVL7N1XO5-lyJ9gapmkVMJtxw',
        q: term
      }
    })
    this.setState({ videos : response.data.items})
    console.log(this.state.videos)
  }
  render(){
    // const { selectedVideo } = this.state
    return (
      <div className="ui container">
                <SearchBar onFormSubmit = {this.handleSearchSubmit} />

                <VideoDetails  video= { this.state.videos}/>
      </div>
    );
  }
 
}

export default App;
