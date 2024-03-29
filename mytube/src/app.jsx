import React, { useState, useEffect, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import styles from "./app.module.css";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  const search = useCallback(
    (query) => {
      youtube.search(query).then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
    },
    [youtube]
  );

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
