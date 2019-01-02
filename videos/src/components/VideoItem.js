import React from 'react';

import '../css/videoItem.css';

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <div onClick={() => onSelectVideo(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;