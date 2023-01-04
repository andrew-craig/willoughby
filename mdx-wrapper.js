import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"

const shortcodes = { Location }

// add to the components something like
// const lbImg = props => <h1 style={{ color: `tomato` }} {...props} />

//const components = {
//  img: lbImg,
//}

export default function MDXWrapper({ children }) {
  return (
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}