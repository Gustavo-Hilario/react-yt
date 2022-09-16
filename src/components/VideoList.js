import React from "react";

import VideoItem from "./VideoItem";
import "../VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                onVideoSelect={onVideoSelect}
                video={video}
                key={video.id.videoId}
                id={video.id.videoId}
                classname="d-flex"
            />
        );
    });

    return <div className="video-list col-12 col-lg-4">{renderedList}</div>;
};

export default VideoList;
