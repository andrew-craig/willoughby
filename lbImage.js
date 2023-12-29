import React from 'react'

export default function lbImage(props) {
    const innerHTML = props.dangerouslySetInnerHTML.__html
    // extract the title from innerHTML using regex

    // pass a click handler down to this element that takes the title a an argument
    // onClick={(e) => handleClick(index, e)} onKeyDown={(e) => handleKeyDown(index, e)}


    return (
        <div {...props} />
    )
}
