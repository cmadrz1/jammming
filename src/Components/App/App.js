/*jammming - a React app to search for songs by title, artist or album, with ability to add songs to a Spotify playlist*/
import React from 'react';
import './App.css';
//import child components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    /*initialize local state of App - creates an array for search results, an empty playlist, and an array for a new playlist*/
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: []
     };
//binds methods to this instance
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.search = this.search.bind(this);
    this.resetPlaylist = this.resetPlaylist.bind(this);
  }
//method to search for a song using Spotify
  search(term) {
    console.log(`Searching Spotify with ${term}`);
    return Spotify.search(term)
    .then(tracks => this.setState({ searchResults: tracks }));
  }
//method to update state of playlist and add a new track to the array
  addTrack(track) {
    if (this.state.playlistTracks.find(currentTrack => currentTrack.id === track.id)) {
      return;
    }
    let currentSearch = this.state.playlistTracks;
    currentSearch.push(track);
    this.setState({ playlistTracks: currentSearch });
  }
//method to update state of playlist and remove a track from the array
  removeTrack(track) {
    if (this.state.playlistTracks.find(currentTrack => currentTrack.id === track.id)) {
      let currentPlaylist = this.state.playlistTracks;
      let trackIndex = currentPlaylist.indexOf(track);
      currentPlaylist.splice(trackIndex, 1);
      this.setState({ playlistTracks: currentPlaylist });
    }
  }
//method to save the user playlist to their Spotify account
  savePlaylist(tracks, name) {
    console.log(`Playlist ${name} saved to Spotify`);
    const trackURIs = tracks.map(track => `${track.uri}`);
    Spotify.save(trackURIs, name);
  }
//method to reset the playlist and search results
  resetPlaylist() {
    console.log(`New playlist created, start new search!`);
    window.location ='http://ruseful-jammming.surge.sh/';
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults} />
            <Playlist
              onRemove={this.removeTrack}
              playlistTracks={this.state.playlistTracks}
              onSave={this.savePlaylist}
              onReset={this.resetPlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
