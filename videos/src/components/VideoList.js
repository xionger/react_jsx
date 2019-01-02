import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideo}) => {
    const renderList = videos.map((video) => {
        return <VideoItem onSelectVideo={onSelectVideo} video={video} />;
    });
    
    return (
        <div className="ui relaxed divided list">{renderList}</div>
    );
}


export default VideoList;