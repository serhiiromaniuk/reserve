import * as React from 'react'
import { SearchIcon } from './Icons'

const defaults = {
    position: 'absolute',
    width: '437px',
    height: '63px',
    left: '124px',
    
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '50px',
    lineHeight: '67px',
    color: '#000000',
    // textShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)'
}

const iconDefaults = {
    position: 'absolute',
    float: 'left',
    left: '525px'
}

export function Paragraph(props) {
    return (
        <div>
            <p style={{...defaults, ...props.style}}>
                {props.text || 'Paragraph\'s text'}
            </p>
            <SearchIcon style={{...iconDefaults, ...props.iconStyle}}/>
        </div>
    )
}
