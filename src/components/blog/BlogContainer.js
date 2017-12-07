import React, { Component } from 'react';
import BlogPost from '../blog/BlogPost'
import { Link } from 'react-router-dom'

class BlogContainer extends Component {  

  render() {    
    const { category, posts } = this.props
    
    return (
        <div>
        <div><Link to="/post/new">Add post</Link></div> 
        <div>Sort by: <a href="#" >Date</a>&nbsp;<a href="#" >Votes</a></div>
        <br />
        {category && posts.filter(x => x.category === category).map((post) => (
            <BlogPost key={post.id} post={post} />
        ))}  
        {!category && posts.map((post) => (
            <BlogPost key={post.id} post={post} />
        ))}

        </div>  
    );
  }
}

export default BlogContainer;
