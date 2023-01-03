import React, { useState } from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import SimpleLightbox from './lightbox';


export default function ImageCallout(props) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const listOfImages = props.content.map(row => (row.images))
  const preprocessedImages = listOfImages.flat()
  const lightboxImages = preprocessedImages.map(photo => ({
    src: getSrc(props.data.fullsize.nodes.filter(fullphoto => fullphoto.name === photo.name)[0]),
    alt: photo.description,
    caption: photo.description
  }));

  // create a map to look up the index of the lightboxImage from it's name
  const imageMap = new Map(preprocessedImages.map((obj, index) => [obj.name, index]));
  console.log(imageMap)

 
  function showLightbox(name, e) {
    setCurrentIndex(imageMap.get(name)); //imageMap.get(name)
    setOpen(true);
  }

  return (
    <div className='image-callout-container'>
      {props.content.map(row => (
        <div className='image-callout' key={row.id}>
          <p className='image-callout-txt fw-50'>{row.text}</p>
          {row.images.map(photo => (
            <div key={photo.name} className='fw-25 callout-image' onClick={(e) => showLightbox(photo.name, e)}>
              <GatsbyImage image={props.data.cropped.nodes.filter(croppedphoto => croppedphoto.name === photo.name)[0].childImageSharp.gatsbyImageData} aspectRatio={1} alt={photo.description} />
            </div>
          ))}
        </div>
      )
      )}
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
