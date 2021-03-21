import React from 'react'
import Posts from './Posts'

const Home = ({ posts }) => {
    return (
        <div>
            <main className='container'>
                <Posts posts={posts} />
            </main>
        </div>
    )
}

export default Home
