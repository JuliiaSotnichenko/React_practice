import React from 'react';

const PostListItem = ({label, important = false}) => {

    let classNames = "app-list-item d-fex justify-content-between ";
    if(important) {
        classNames += ' important';
    }
    return (
        <li className={classNames}>
            <span className="app-list-item-label">
                {/* Dynamic */}
                {/* Hello */}
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;