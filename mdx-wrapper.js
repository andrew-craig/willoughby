import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"
import lbImage from "./lbImage"

const shortcodes = { Location }

// components={shortcodes}

// add to the components something like
// const lbImg = props => <h1 style={{ color: `tomato` }} {...props} />

//const components = {
//  img: lbImg,
//}

export default function MDXWrapper({ children }) {

  return (
      <MDXProvider components={{div: lbImage}}>{children}</MDXProvider>
  )
}