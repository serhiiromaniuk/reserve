import * as React from 'react'
import { SearchIcon } from '../../../Assets'

const defaults = {
    position: 'absolute',
    width: '437px',
    height: '63px',
    left: '124px',
    top: '910px',
    
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '55px',
    lineHeight: '67px',
    color: '#000000',
    // textShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)'
}

export default function Paragraph() {
    return (
        <div>
            <p style={defaults}>
                Popular places
            </p>
            <SearchIcon style={{
                position: 'absolute',
                left: '561px',
                top: '979px'
            }}/>
        </div>
    )
}
