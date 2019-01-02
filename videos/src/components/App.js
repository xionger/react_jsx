import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videos: response.data.items});
  };

  onVideoSelect = video => {
    console.log('From the App!', video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitForm = {this.onTermSubmit} />
        <VideoList onSelectVideo={this.onVideoSelect} videos = {this.state.videos} />
      </div>
    );
  }
}

export default App;
