import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleBook } from '../actions';
import Modal from './Modal';
import EditBookForm from '../containers/EditBookForm';
import DeleteBookForm from '../containers/DeleteBookForm';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Book extends Component {
  showModal(name) {
    this.refs[name].modalTarget.style.display = 'block';
  }

  closeModal(name) {
    this.refs[name].modalTarget.style.display = 'none'
  }

  handleEditClick() {
    this.showModal('edit');
    this.props.getSingleBook(this.props.book.id);
  }

  render() {
    const { id, title, category_name, author, complete } = this.props.book;

    return (
      <Fragment>
        <div className="book">
          <div className="left">
            <div className="info">
              <h4 className="category">{category_name}</h4>
              <h3 className="title">{title}</h3>
              <span className="author">{author}</span>
            </div>
            <div className="controls">
              <Link className="comments-link" to={`/books/${id}`}>
                <span className="ctrlbtn">Comments</span>
              </Link>
              <span className="ctrlbtn" onClick={() => this.showModal('delete')}>Remove</span>
              <span className="ctrlbtn" onClick={this.handleEditClick.bind(this)}>Edit</span>
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
          <EditBookForm id={id} callback={() => this.closeModal('edit')}/>
        </Modal>

        <Modal ref="delete" header="Delete Book">
          <DeleteBookForm id={id} callback={() => this.closeModal('delete')}/>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(null, { getSingleBook })(Book);