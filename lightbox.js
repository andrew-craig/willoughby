import React from 'react';
import Lightbox from 'react-spring-lightbox';
import PropTypes from "prop-types";
import ArrowButton from './lightbox-components/arrow-button';
import LightboxFooter from './lightbox-components/footer';
import LightboxHeader from './lightbox-components/header';

export default function SimpleLightbox({ images, currentImageIndex, setCurrentIndex, isOpen, onClose}) {

  function gotoPrevious() {
    if (currentImageIndex > 0) setCurrentIndex(currentImageIndex - 1);
  }

  function gotoNext() {
    if (currentImageIndex + 1 < images.length) setCurrentIndex(currentImageIndex + 1);
  }

  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      onClose={onClose}
      /* Add your own UI */
      renderHeader={() => (<LightboxHeader onClose={onClose} />)}
      renderFooter={() => (<LightboxFooter caption={images[currentImageIndex].caption} />)}
      renderPrevButton={() => (<ArrowButton position="left" onClick={gotoPrevious} disabled={currentImageIndex === 0} />)}
      renderNextButton={() => (<ArrowButton position="right" onClick={gotoNext} disabled={currentImageIndex === images.length - 1} />)}
      // renderImageOverlay={() => (<ImageOverlayComponent >)}

      /* Add styling */
      //className="lightbox-class"
      // style={{ background: "grey" }}


      /* Use single or double click to zoom */
      // singleClickToZoom

      /* react-spring config for open/close animation */
      pageTransitionConfig={{
        from: { transform: "scale(1)", opacity: 0 },
        enter: { transform: "scale(1)", opacity: 1 },
        leave: { transform: "scale(1)", opacity: 0 },
        config: { mass: 1, tension: 320, friction: 32 }
      }}
    />
  );
};

SimpleLightbox.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      })
    ),
    currentImageIndex: PropTypes.number.isRequired,
    setCurrentIndex: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };

