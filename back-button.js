import React from 'react'
import { Link } from "gatsby"

export default function BackButton(props) {
    const divStyle = {
        height: 0,
      };

    return (
        <div style={divStyle}>
            <Link 
                className='back-button'
                to={props.to}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="84 -960 960 960" width="24"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                </div>
            </Link>
        </div>
    )
}