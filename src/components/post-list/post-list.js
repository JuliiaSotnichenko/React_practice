import React from 'react';

import PistlistItem from '../post-list-item';


const PostList = () => {
    return (
        <div>
            <ul className="app-list list-group">
                <PistlistItem label="Goin to learn React" important/>
                <PistlistItem  label="That is so good "/>
                <PistlistItem  label="I need a break"/>
            </ul>
        </div>
    )
}



export default PostList;