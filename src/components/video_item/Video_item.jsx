import React from 'react';

const VideoItem = (props) => {
  console.log(props.video)
  return(
    <h1>{props.video.snippet.title}</h1>
  )
};

export default VideoItem;