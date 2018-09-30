import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import { Provider } from 'react-redux';

export default class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  closeModal() {
    this.modalTarget.style.display = 'none';
  }

  _render() {
    const { header, children } = this.props;

    ReactDOM.render(
      <Provider store={store}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{header}</h2>
            <span 
              className="modal-close" 
              onClick={this.closeModal.bind(this)}
            >&times;</span>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </Provider>, this.modalTarget
    );
  }

  render() {
    return <noscript/>;
  }
}