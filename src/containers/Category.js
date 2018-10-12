import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions';
import Modal from '../components/Modal';
import DeleteCategoryForm from './DeleteCategoryForm';

class Category extends Component {
  toggleModal() {
    const modal = this.refs.delete.modalTarget;
    if (modal.style.display !== 'block') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  }

  render() {
    const { id, name } = this.props.category;
    return (
      <Fragment>
        <div className="category">
          <h4 onClick={() => this.props.setActiveCategory(this.props.category)}>{name}</h4>
          <div className="delete-icon-wrapper" onClick={this.toggleModal.bind(this)}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>

        <Modal ref="delete" header="Delete Category">
          <DeleteCategoryForm id={id} callback={this.toggleModal.bind(this)}/>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(null, { setActiveCategory })(Category);