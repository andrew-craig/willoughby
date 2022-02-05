import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import Location from "./location"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
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