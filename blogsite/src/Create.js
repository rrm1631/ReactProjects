import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Create() {

    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();
    
    const handleSubmit = (e)=>{
      e.preventDefault();

      const blog = {
        title, body, author
      }

      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(blog)
      }).then(()=>{
        // console.log("New Blog Added");
        history.push('/');
      });
    }

    return (
      <div className='create'>
          <h2>Add a New Blog</h2>
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Blog title:</label>
              <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} required/>

              <label htmlFor="">Blog body:</label>
              <textarea onChange={(e)=>{setBody(e.target.value)}} value={body} required/>

              <label htmlFor="">Blog author:</label>
              <select name="" id="" onChange={(e)=>{setAuthor(e.target.value)}} value={author}>
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>
                <option value="yoshi">yoshi</option>
              </select>

              <button>Add Blog</button>
          </form>
      </div>
  )
}

export default Create