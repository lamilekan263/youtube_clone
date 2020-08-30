import React, { Component } from 'react';


import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
// import VideoDetails from './components/videodetails'
class App extends Component {
  state ={
    videos: []
  }


  handleSearchSubmit = async  term  =>{
    const response = await youtube.get('/search', {
      params:{
        q: term
      }
    })

    console.log(response.data.items)
  }
  render(){
    // const { selectedVideo } = this.state
    return (
      <div className="ui container">

      <form onSubmit = { this.onFormSubmit } className='ui form'>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={ this.handleChange} placeholder="Search video" />
                    </div>
                </form>

      </div>
    );
  }
 
}

export default App;
