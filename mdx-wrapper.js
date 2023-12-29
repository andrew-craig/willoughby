import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"
import lbImage from "./lbImage"


const components = {
  Location: Location,
  img: lbImage
}

//,div: lbImage


// add to the components something like
// const lbImg = props => <h1 style={{ color: `tomato` }} {...props} />

//const components = {
//  img: lbImg,
//}

//div: lbImage, 

export default function MDXWrapper({ children }) {

  return (
      <MDXProvider components={components}>{children}</MDXProvider>
  )
}