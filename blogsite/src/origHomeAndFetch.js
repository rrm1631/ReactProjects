import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
function Home() {

    const [blogs, setBlogs] = useState(
        [
            // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    )

    const [loading, setLoading] = useState(true);

    const handleDelete = (id)=> {
        const newBlogs = blogs.filter((blog)=>{
            return blog.id !== id;  
        });

        setBlogs(newBlogs);
    }

    useEffect(()=>{ // will run once initial component loads or in any changes
        fetch('http://localhost:8000/blogs').then((res)=>{
            return res.json();
        }).then((data)=>{
            setBlogs(data);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        })
        
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete}></BlogList>
            {loading && <div> Loading.. </div> }
        </div>
    )
}

export default Home