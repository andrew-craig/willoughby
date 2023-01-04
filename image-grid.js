import React, { useState } from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import SimpleLightbox from './lightbox';

export default function ImageGrid({ content, queryData, imagesPerRow}) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const classMap = new Map([
    [1, '100%'],
    [2, '45%'],
    [3, '28%'],
    [4, '22%'],
  ]) 

  const imgFB = classMap.get(imagesPerRow)
 
  const lightboxImages = content.map(photo => ({
    src: getSrc(queryData.fullsize.nodes.filter(fullphoto => fullphoto.name === photo.name)[0]),
    alt: photo.description,
    caption: photo.description
  }));
 
  function showLightbox(index) {
    setCurrentIndex(index);
    setOpen(true);
  }

  function handleClick(index, e) {
    showLightbox(index)
  }

  function handleKeyDown(index, e) {
    if (e.key === 'Enter') {
      showLightbox(index)
    }
  }

  return (
      <div className='image-container'>
        {content.map((photo, index) => (
          <div key={photo.name} className='grid-image' style={{flexBasis:imgFB}} onClick={(e) => handleClick(index, e)} onKeyDown={(e) => handleKeyDown(index, e)} role="presentation">
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

