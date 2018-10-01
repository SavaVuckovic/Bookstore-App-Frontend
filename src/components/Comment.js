import React, { Component } from 'react';
import userImg from '../images/defaultuser.png';

export default class Comment extends Component {
  render() {
    const { author, text } = this.props;

    return (
      <div className="comment">
        <div className="author">
          <img src={userImg} alt="user"/>
          <span>{author}</span>
        </div>
        <p className="body">{text}</p>
        <div className="clearfix"/>
      </div>
    );
  }
} 