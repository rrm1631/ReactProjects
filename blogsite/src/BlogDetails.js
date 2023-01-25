import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

function BlogDetails() {

    const {id} = useParams();
    //data: blog - means (data AS blog)
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id); 

    const history = useHistory();

    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        });
    }

    return (
        <div className='blog-details'>
            { isLoading && <div> Loading.. </div>}
            { error && <div> {error} </div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails