import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ&=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  const handleSearch = (keyword) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const link = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q="+keyword+"&key=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ&=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ";
    
    fetch(link, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };  

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;