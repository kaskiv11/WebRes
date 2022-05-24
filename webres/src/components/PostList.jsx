import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Posts not found!
            </h1>
        )
    }

    return (
        <div className='row d-flex flex-wrap'>
            {/* <h1 style={{textAlign: 'center'}}>
                {title}
            </h1> */}

            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} />
            )}
        </div>
    );
};

export default PostList;
