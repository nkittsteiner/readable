import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    const { post } = this.props
    const date = new Date(post.timestamp).toDateString()
    return (
          <div className="blog-post">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-meta">{date} by <a href="#">{post.author}</a> votes: {post.voteScore}</p>
            <p><a href="#">Edit</a></p>

            <p>{post.body}</p>
          </div>
    );
  }
}

export default BlogPost;
