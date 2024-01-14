import React from 'react'
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import './layout.css'

export default function Layout({ props, children }) {
  return (
      <main>
        {children}
      </main>
  )
}