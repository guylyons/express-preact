import React from 'react';
import "../styles/Modal.scss";

class Modal extends React.Component {

  render() {
    return (
      <div className="modal">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Modal;
