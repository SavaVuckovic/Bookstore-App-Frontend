import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleBook } from '../actions';
import Modal from '../components/Modal';
import EditBookForm from './EditBookForm';
import DeleteBookForm from './DeleteBookForm';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Book extends Component {
  toggleModal(name) {
    // show/hide edit or delete modal
    const modal = this.refs[name].modalTarget;
    if (modal.style.display !== 'block') {
      modal.style.display = 'block';
    } else { 
      modal.style.display = 'none';
    }
  }

  handleEditClick() {
    // open edit modal and get book data
    this.toggleModal('edit');
    this.props.getSingleBook(this.props.book.id);
  }

  deleteBookCallback() {
    // close delete modal and redirect to /
    this.toggleModal('delete');
    this.props.history.push('/');
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
              <span className="ctrlbtn" onClick={() => this.toggleModal('delete')}>Remove</span>
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
          <EditBookForm id={id} callback={() => this.toggleModal('edit')}/>
        </Modal>

        <Modal ref="delete" header="Delete Book">
          <DeleteBookForm id={id} callback={this.deleteBookCallback.bind(this)}/>
        </Modal>
      </Fragment>
    );
  }
}

export default withRouter(connect(null, { getSingleBook })(Book));