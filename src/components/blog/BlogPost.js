import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CommentList from '../comment/CommentList'
import CommentForm from '../form/CommentForm'

class BlogPost extends Component {
  render() {
    const { post, comments, showForm } = this.props
    const date = new Date(post.timestamp).toDateString()
    const postEditUrl = `/post/${post.id}/edit`
    const postViewUrl = `/${post.category}/${post.id}`
    let comentForm = ""
    if(showForm)
      comentForm = <CommentForm comment={{}} post_id={post.id} edit={false} />

    return (
          <div className="blog-post">
            <h2 className="blog-post-title"><Link to={postViewUrl}>{post.title}</Link></h2>
            <p className="blog-post-meta">{date} by <div className="author">{post.author}</div> votes: {post.voteScore} comments: {post.commentCount} <Link to={postEditUrl}>Edit</Link> | <a href="#">Delete</a></p>
            <p>{post.body}</p>
            <br />
            <CommentList comments={comments} />
            <br />
            {comentForm}
          </div>
    );
  }
}

export default BlogPost;
