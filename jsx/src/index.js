import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                postTime="Today at 2:00AM" 
                content="Hello World!"
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="Jack" 
                postTime="Yesterday at 3:00PM" 
                content="Good afternoon"
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="Calvin" 
                postTime="Today at 6:35PM" 
                content="It's sunny today"
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="Jane" 
                postTime="Yesterday midnight" 
                content="I'm sleepy!"
                avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));