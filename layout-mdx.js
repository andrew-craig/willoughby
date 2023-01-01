import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"
import Layout from "./layout"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import './layout.css'

const shortcodes = { Location }

export default function mdxLayout({ children }) {
  return (
    <MDXProvider components={shortcodes}>
      <Layout>{ children }</Layout>
    </MDXProvider>
  )
}