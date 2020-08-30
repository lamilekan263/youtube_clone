import React, { Component } from 'react';

import VideoDetails from './components/videodetails'

import VideoList from './components/videoList'

import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
// import VideoDetails from './components/videodetails'
class App extends Component {
  state ={
    videos: [],
    selectedVideo: null
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
    this.setState({ 
      videos : response.data.items,
      selectedVideo : response.data.items[0]
    })
    console.log(this.state.videos)
  }
  onVideoSelect = (video) =>{
    this.setState({ selectedVideo : video})
  }
   render(){
    // const { selectedVideo } = this.state
    return (
      <div className="ui container">
                <SearchBar onFormSubmit = {this.handleSearchSubmit} />
      <div className="ui grid">
         <div class="eight wide column">

         </div>
         <div class="eight wide column"></div>
      </div>
                
                <VideoList onVideoSelect = {this.onVideoSelect}videos = {this.state.videos}/>
      </div>
    );
  }
 
}

export default App;
