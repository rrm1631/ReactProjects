import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';
function Home() {

    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            <BlogList blogs={data}></BlogList>
            {isLoading && <div> Loading.. </div> }
            {error && <div>{ error }</div>}
        </div>
    )
}

export default Home