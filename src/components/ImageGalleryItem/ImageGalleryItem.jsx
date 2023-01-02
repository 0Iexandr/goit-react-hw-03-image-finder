import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ smallImg, largeImg, onImageClick }) => {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => {
        onImageClick(largeImg);
      }}
    >
      <img src={smallImg} alt="img" className={css.image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onImageClick: PropTypes.func,
  smallImg: PropTypes.string,
  largeImg: PropTypes.string,
};