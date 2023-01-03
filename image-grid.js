import React, { useState } from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import SimpleLightbox from './lightbox';

export default function ImageGrid(props) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const classMap = new Map([
    [1, 'fw-100'],
    [2, 'fw-50'],
    [3, 'fw-33'],
    [4, 'fw-25'],
  ]) 
  const imageClass = classMap.get(props.images_per_row)
  console.log(props.data.fullsiz)
 
  const lightboxImages = props.content.map(photo => ({
    src: getSrc(props.data.fullsize.nodes.filter(fullphoto => fullphoto.name === photo.name)[0]),
    alt: photo.description,
    caption: photo.description
  }));
 
  function showLightbox(index, e) {
    console.log('click received');
    setCurrentIndex(index);
    setOpen(true);
  }

  return (
      <div className='image-container'>
        {props.content.map((photo, index) => (
          <div key={photo.name} className={imageClass} onClick={(e) => showLightbox(index, e)}>
            <GatsbyImage image={props.data.cropped.nodes.filter(fullphoto => fullphoto.name === photo.name)[0].childImageSharp.gatsbyImageData} aspectRatio={props.aspect_ratio} alt={photo.description} />
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

