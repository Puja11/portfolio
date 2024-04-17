import React from "react";
import '../styles/Blog.css'
type GreetProps = {
    userId: number,
    body: string,
    title: string
}
function Blog(props : GreetProps){
    return <div className="card">
             <p className="userId">#{props.userId} {props.title}</p>
             <p>{props.body}</p>
    </div>
}

export default Blog;