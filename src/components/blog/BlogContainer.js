import React, { Component } from 'react';
import BlogPost from '../blog/BlogPost'

class BlogContainer extends Component {  
  render() {    
    const { category, posts } = this.props
    
    let filtered = []
    if (category)
        filtered = posts.filter(x => x.category === category)
    else
        filtered = posts

    return (
        <div>
        {filtered.map((post) => (
            <BlogPost key={post.id} post={post} />
        ))}  
        </div>  
    );
  }
}

export default BlogContainer;
