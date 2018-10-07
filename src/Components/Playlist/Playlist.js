import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'New Playlist' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
//event handler to update playlist name with user's input
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
//event handler to save playlist tracks & update name
  handleSave(event) {
    this.props.onSave(this.props.playlistTracks, this.state.name);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          onChange={this.handleNameChange}
          value={this.state.name} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true} />
        <a
          onClick={this.handleSave}
          className="Playlist-save">SAVE TO SPOTIFY</a>
        <p>OR</p>
        <a
          onClick={this.props.onReset}
          className="Playlist-save">RESET PLAYLIST</a>
      </div>
    );
  }
}

export default Playlist;
