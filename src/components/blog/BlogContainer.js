import React, { Component } from 'react';
import BlogPost from '../blog/BlogPost'
import BlogForm from "../form/BlogForm";
import { Link } from 'react-router-dom'
import ErrorPage from '../ErrorPage'
import { connect } from 'react-redux'
import { 
  getPostsAsync,
  votePostAsync,
  voteCommentAsync,
  deletePostAsync,
  deleteCommentAsync,
  sortPostByDate,
  sortPostByScore } from '../../actions'
import { withRouter } from 'react-router-dom'

class BlogContainer extends Component {  

  onVote = (id, vote) => {
    this.props.doVote(id, vote)
  }

  onVoteComment = (id, vote) => {
    this.props.doCommentVote(id, vote)
  }

  onPostDelete = (post) => {
    this.props.doPostDelete(post)
  }

  onCommentDelete = (comment) => {
    this.props.doCommentDelete(comment)
  }

  onSortByDate = (e) => {
    e.preventDefault();
    this.props.sortByDate();
  }

  onSortByScore = (e) => {
    e.preventDefault();
    this.props.sortByScore()
  }

  render() {
    const { category, posts, post_id, comments } = this.props
       
    return (
        <div>
        <div><Link to="/post/new">Add post</Link></div> 
        <div>Sort by: <a href="#" onClick={(e) => this.onSortByDate(e)} >Date</a>&nbsp;<a href="#"onClick={(e) => this.onSortByScore(e)} >Votes</a></div>
        <br />
        {category && post_id && posts.filter(x => x.id === post_id).map((post) => (
            <BlogPost key={post.id} post={post} comments={comments} showForm={true} onVote={this.onVote} onVoteComment={this.onVoteComment}
             onPostDelete={this.onPostDelete} onCommentDelete={this.onCommentDelete} />
        ))}
        {category && !post_id && posts.filter(x => x.category === category).map((post) => (
            <BlogPost key={post.id} post={post} showForm={false} onVote={this.onVote} onVoteComment={this.onVoteComment} onPostDelete={this.onPostDelete}
            onCommentDelete={this.onCommentDelete} />
        ))}
        {!category && !post_id && posts.map((post) => (
            <BlogPost key={post.id} post={post} showForm={false} onVote={this.onVote} onVoteComment={this.onVoteComment} onPostDelete={this.onPostDelete}
            onCommentDelete={this.onCommentDelete} />
        ))}

        </div>  
    );
  }
}

const mapStateToProps = state => {
    return {
      comments: state.comments
    }
  }
  
const mapDispatchToProps = (dispatch) => {
  return {    
    doVote: (id, vote) => dispatch(votePostAsync(id, vote)),
    doCommentVote: (id, vote) => dispatch(voteCommentAsync(id, vote)),
    doPostDelete: (post) => dispatch(deletePostAsync(post)),
    doCommentDelete: (comment) => dispatch(deleteCommentAsync(comment)),
    sortByDate: () => dispatch(sortPostByDate()),
    sortByScore: () => dispatch(sortPostByScore())
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogContainer));
