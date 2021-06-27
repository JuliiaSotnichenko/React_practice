import React from 'react';

import PistlistItem from '../post-list-item';


const PostList = () => {
    return (
        <div>
            <ul className="app-list list-group">
                <PistlistItem/>
                <PistlistItem/>
                <PistlistItem/>
            </ul>
        </div>
    )
}



export default PostList;