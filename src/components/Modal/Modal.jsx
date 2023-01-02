import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyESC);
  }

  handleKeyESC = (e) => {
    if (e.code === 'Escape') {
      this.props.onImageClick('');
    }
  };
  handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onImageClick('');
    }
  };
  render() {
    return (
      <div className={css.backdrop} onClick={this.handleBackdrop}>
        <div className={css.modal}>
          <img
            className={css.largeImage}
            src={this.props.largeImgUrl}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onImageClick: PropTypes.func,
  largeImg: PropTypes.string,
};