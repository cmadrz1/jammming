import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.handleAction = this.handleAction.bind(this);

  }
//method to display a plus or minus, depending on which list the track is in
  renderAction() {
    if(!this.props.isRemoval) {
      return '+';
    } else {
      return '-';
    }
  }
//method to add selected track to playlist
  addTrack() {
    this.props.onAdd(this.props.track);
  }
//method to remove selected track to playlist
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
//event handler to call the add or remove method
  handleAction(event) {
  if (this.renderAction()==='+') {
    this.addTrack();
  } else {
    this.removeTrack();
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
          <p>Song Preview:</p>
          <audio
            controls
            height="15px"
            src={this.props.track.preview}>
            <p>Your browser does not support the audio element.</p>
          </audio>
        </div>
        <a
          onClick={this.handleAction}
          className="Track-action">{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
