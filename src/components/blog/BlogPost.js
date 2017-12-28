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
    let comentForm = showForm ? <CommentForm comment={{}} post_id={post.id} edit={false} /> : ""

    return (
          <div className="blog-post">
            <h2 className="blog-post-title"><Link to={postViewUrl}>{post.title}</Link></h2>
            <div className="blog-post-meta">{date} by <div className="author">{post.author}</div> <Link to={postEditUrl}><button>Edit</button></Link> | <button onClick={e =>{e.preventDefault(); this.props.onPostDelete(post);}}>Delete</button></div>
            <p>votes: {post.voteScore} <button onClick={e => {e.preventDefault();this.props.onVote(post.id, 'upVote')}}>up vote</button> <button onClick={e => {e.preventDefault();this.props.onVote(post.id, 'downVote')}}>down vote</button> comments: {post.commentCount} </p>
            <p>{post.body}</p>
            <br />
            <CommentList comments={comments} onVoteComment={this.props.onVoteComment} onCommentDelete={this.props.onCommentDelete} />
            <br />
            {comentForm}
          </div>
    );
  }
}

export default BlogPost;
