import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem.jsx';
import PropTypes from 'prop-types';
import css from './Gallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <div className={css.galleryImages}>
        <ul className={css.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={() => onClick(image.largeImageURL)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};
