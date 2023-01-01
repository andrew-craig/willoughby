import React from 'react'

export default function TagButton(props) {
    var buttonClass = ''

    if (props.filter.includes(props.name)) {
        buttonClass = 'tag-button tag-button-active'
    } else {
        buttonClass = 'tag-button'
    }

    return (
        <button 
            className={buttonClass}
            onClick={() => { props.handleClick(props.name) }}>
            {props.name}
        </button>
    )
}