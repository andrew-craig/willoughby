import React from 'react'

export default function LightboxHeader({ onClose }) {

    return (
        <div className='lightbox-header'>
            <button 
                className='lightbox-button lightbox-close'
                onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 48 48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
            </button>
        </div>
    )
}