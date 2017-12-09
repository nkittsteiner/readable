import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BlogPost extends Component {
  render() {
    const { post } = this.props
    const date = new Date(post.timestamp).toDateString()
    const postEditUrl = `/post/${post.id}/edit`
    return (
          <div className="blog-post">
            <h2 className="blog-post-title"><a href="#">{post.title}</a></h2>
            <p className="blog-post-meta">{date} by <a href="#">{post.author}</a> votes: {post.voteScore} comments: {post.commentCount} <Link to={postEditUrl}>Edit post</Link></p>
            <p>{post.body}</p>
          </div>
    );
  }
}

export default BlogPost;
