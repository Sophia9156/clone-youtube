import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/Video_list';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyDTh329OXzTc530aCNRWczrAuir0NqDk64", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <h1><VideoList videos={videos}/></h1>
  );
}

export default App;
