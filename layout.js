import React from 'react'
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import './layout.scss'

export default function Layout({ mode, children }) {
  return (
      <div className={`tl-container ${ mode }`}>
        <main>
          {children}
        </main>
      </div>

  )
}