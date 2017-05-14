import React from 'react';

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
