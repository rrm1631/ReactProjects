function DynamicVariablesAndList() {
    const title = "My Blogs";
    const body = "This is my blogs";
    const comments = [
        {id : 1, text: "Comment one"},
        {id : 2, text: "Comment two"},
        {id : 3, text: "Comment three"}
    ];

    const showComments = true;

    const commentBlock = (
        <div className='comments'>
            <h3>Comments({comments.length})</h3>
            <ul>
                {comments.map((comment, index)=>{
                    return <li key={index}> {comment.text} </li>
                })}
            </ul>
        </div>
    );

    
    return (
        <div className="container">
            <h1> {title} </h1>
            <p> {body}</p>

            {showComments ? commentBlock : null}
        
        </div>
    );


}

export default DynamicVariablesAndList;
