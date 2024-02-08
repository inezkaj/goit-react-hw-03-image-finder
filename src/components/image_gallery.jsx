import { Component } from 'react';
import ImageGalleryItem from './image_gallery_item.jsx';
import PropTypes from 'prop-types';
import css from './gallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => onClick(image.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};
