import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"

const lbImage = props => <img onClick={() => console.log('Button clicked!')} {...props} />

const components = {
  Location: Location,
  img: lbImage
}

export default function MDXWrapper({ children }) {

  return (
      <MDXProvider components={components}>{children}</MDXProvider>
  )
}