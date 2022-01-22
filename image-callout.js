import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'

export default function ImageCallout(props) {
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
        <div className='image-callout-container'>
          {props.content.map(row => (
            <div className='image-callout'>
              <p className='image-callout-txt fw-50'>{row.text}</p>
              {row.images.map(photo => (
                <a href={props.data.fullsize.nodes.filter(fullphoto => fullphoto.name === photo.name)[0].publicURL} className='fw-25 callout-image'>
                  <GatsbyImage image={props.data.cropped.nodes.filter(croppedphoto => croppedphoto.name === photo.name)[0].childImageSharp.gatsbyImageData} aspectRatio={1} alt={photo.description} />
                </a>
              ))}
            </div>
          )
          )}
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}
