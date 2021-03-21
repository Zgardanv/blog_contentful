import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
    return (
        <div className='posts row'>
            {posts.map((article, i) => <Post article={article} key={i} />)}
        </div>
    );
}

export default Posts;