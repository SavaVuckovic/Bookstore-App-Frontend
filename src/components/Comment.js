import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from '../actions';
import userImg from '../images/defaultuser.png';

class Comment extends Component {
  render() {
    const { id, author, text } = this.props;

    return (
      <div className="comment">
        <div className="author">
          <img src={userImg} alt="user"/>
          <span>{author}</span>
          <span 
            className="remove"
            onClick={() => this.props.removeComment(id)}
          >Remove</span> 
        </div>
        <p className="body">{text}</p>
        <div className="clearfix"/>
      </div>
    );
  }
} 

export default connect(null, { removeComment })(Comment);