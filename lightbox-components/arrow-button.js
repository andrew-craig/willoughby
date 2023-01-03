import React from 'react'

export default function ArrowButton({ position, onClick, disabled }) {
    const leftSVG = <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/>
    const rightSVG = <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/>

    return (
        <button 
            className={position === 'left' ? 'lightbox-button lightbox-left-arrow':'lightbox-button lightbox-left-arrow'}
            onClick={onClick}
            style={disabled ? {display: 'none'}:{} } >
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 48 48">
                    {position === "left" ? leftSVG:rightSVG}                    
                </svg>
        </button>
    )
}