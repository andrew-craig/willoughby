import React, { useState } from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import SimpleLightbox from './lightbox';

export default function UnbalancedImageGrid({ content, queryData, flexBasisArray}) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
 
  const lightboxImages = content.map(photo => ({
    src: getSrc(queryData.fullsize.nodes.filter(fullphoto => fullphoto.name === photo.name)[0]),
    alt: photo.description,
    caption: photo.description
  }));
 
  function showLightbox(index, e) {
    setCurrentIndex(index);
    setOpen(true);
  }

  return (
      <div className='image-container'>
        {content.map((photo, index) => (
          <div key={photo.name} className='grid-image' style={{flexBasis:flexBasisArray[index]}} onClick={(e) => showLightbox(index, e)}>
            <GatsbyImage image={queryData.cropped.nodes.filter(fullphoto => fullphoto.name === photo.name)[0].childImageSharp.gatsbyImageData} alt={photo.description} />
          </div>
        ))}
        <SimpleLightbox
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={lightboxImages}
        />
      </div>
  )
}

