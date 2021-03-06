import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    const tracks = this.props.tracks.map((track, id) =>
      <Track
        track={track}
        key={`track_${id}`}
        id={id}
        onAdd={this.props.onAdd}
        onRemove={this.props.onRemove}
        isRemoval={this.props.isRemoval} />);
    return (
      <div className="TrackList">
        {tracks}
      </div>
    );
  }
}

export default TrackList;
