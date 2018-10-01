import React, { Component, Fragment } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Modal from './Modal';
import EditBookForm from '../containers/EditBookForm';

class Book extends Component {
  showModal(name) {
    this.refs[name].modalTarget.style.display = 'block'
  }

  render() {
    const { id, title, category, author, complete } = this.props;

    return (
      <Fragment>
        <div className="book">
          <div className="left">
            <div className="info">
              <h4 className="category">{category}</h4>
              <h3 className="title">{title}</h3>
              <span className="author">{author}</span>
            </div>
            <div className="controls">
              <span>Comments</span>
              <span onClick={() => this.showModal('delete')}>Remove</span>
              <span onClick={() => this.showModal('edit')}>Edit</span>
            </div>
          </div>
          <div className="right">
            <CircularProgressbar
              percentage={complete}
              className="spinner"
              styles={{ path: { stroke: '#0097f9' } }}
            />
            <div className="percent">
              <h1>{complete} %</h1>
              <span>Completed</span>
            </div>
          </div>
        </div>

        <Modal ref="edit" header="Edit Book">
          <EditBookForm />
        </Modal>

        <Modal ref="delete" header="Delete Book">
          Delete Test
        </Modal>
      </Fragment>
    );
  }
}

export default Book;