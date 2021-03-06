import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

// //TODO: define a VideoPlayerContainer component which will hook up your action
// //dispatchers with your VideoPlayer component props.

// export default VideoPlayerContainer;

const mapStateToProps = (state) => {
    return {
        video: state.currentVideo,
    };
};

export default connect(mapStateToProps, null)(VideoPlayer)
