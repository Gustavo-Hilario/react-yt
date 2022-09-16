import axios from "axios";

const KEY = "AIzaSyDON-c-rTVAN_K_NlV6mIe4ChtaZkpR_Do";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
