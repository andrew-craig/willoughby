import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "../components/location"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/400-italic.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/700-italic.css"
import './layout.css'

const shortcodes = { Location }

export default function Layout({ children }) {
  return (
    <MDXProvider components={shortcodes}>
      <main>
        {children}
      </main>
    </MDXProvider>
  )
}