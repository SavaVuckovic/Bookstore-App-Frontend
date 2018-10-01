import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    const { author, text } = this.props;

    return (
      <div className="comment">
        <h3>{author}</h3>
        <h3>{text}</h3>
      </div>
    );
  }
} 