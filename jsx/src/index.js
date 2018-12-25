import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    postTime="Today at 2:00AM" 
                    content="Hello World!"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <h3>Plain Text</h3>
                <div>A card contains only text.</div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jack" 
                    postTime="Yesterday at 3:00PM" 
                    content="Good afternoon"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Calvin" 
                    postTime="Today at 6:35PM" 
                    content="It's sunny today"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    postTime="Yesterday midnight" 
                    content="I'm sleepy!"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));