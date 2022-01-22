import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'

export default function ImageGrid(props) {

  const classMap = new Map([
    [1, 'fw-100'],
    [2, 'fw-50'],
    [3, 'fw-33'],
    [4, 'fw-25'],
  ]) 

  const options = {
    settings: {
      overlayColor: 'rgba(30, 30, 30, 0.98)'
    },
    buttons: {
      backgroundColor: 'rgba(30,30,30,0.9)',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
      size: '40px'
    },
    thumbnails: {
      thumbnailsContainerPadding: '0 0 4px 0',
    }
  }

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
      <div className='image-container' >
        {props.content.map(photo => (
          <a href={props.data.fullsize.nodes.filter(fullphoto => fullphoto.name === photo.name)[0].publicURL} className={classMap.get(props.images_per_row)}>
            <GatsbyImage image={props.data.cropped.nodes.filter(fullphoto => fullphoto.name === photo.name)[0].childImageSharp.gatsbyImageData} aspectRatio={props.aspect_ratio} alt={photo.description} />
          </a>
        ))}
      </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}
