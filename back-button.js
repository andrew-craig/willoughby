import React from 'react'

export default function BackButton({ to, LinkComponent = 'a', ...props }) {
    const divStyle = {
        height: 0,
      };

    const Component = LinkComponent;

    return (
        <div style={divStyle}>
            <Component
                className='back-button'
                to={to}
                href={to}
                {...props}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="84 -960 960 960" width="24"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                </div>
            </Component>
        </div>
    )
}