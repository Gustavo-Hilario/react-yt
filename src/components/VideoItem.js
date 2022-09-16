import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            onClick={() => {
                onVideoSelect(video);
            }}
            className="video-item d-flex align-items-top shadow py-3 px-2 rounded-4"
        >
            <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <h5 className="h5 text-break">{video.snippet.title}</h5>
        </div>
    );
};

export default VideoItem;
