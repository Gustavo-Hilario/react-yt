import React from "react";
import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit("Meditations");
    }

    // async - await or promises
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    // Callback functions that goes down to the VideoItem component
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="container-fluid">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="row pt-3">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
}

export default App;
