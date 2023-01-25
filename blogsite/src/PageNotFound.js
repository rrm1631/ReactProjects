import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='not-found'>
        <h2>Error 404</h2>
        <p>Page not found!</p>
        <Link to="/">Back to homepage..</Link>
    </div>
  )
}

export default PageNotFound
