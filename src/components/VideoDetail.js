import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="p-3 col-12 col-md-8">
                <h1>Loading …</h1>
            </div>
        );
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="col-12 col-lg-8">
            <div id="selectedVideo">
                <iframe
                    title="Youtube Video Player"
                    src={videoSrc}
                    width="100%"
                    height="500"
                    className="rounded-2"
                ></iframe>
            </div>
            <div className="shadow p-2 mt-2">
                <h5>{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
