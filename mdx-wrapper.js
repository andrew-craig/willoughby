import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"

const shortcodes = { Location }

export default function MDXWrapper({ children }) {
  return (
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}