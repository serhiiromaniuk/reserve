import { Button } from '@mui/material'
import * as React from 'react'

export function ButtonBig(props) {
    const buttonDefaults = {
        position: 'absolute',
        background: '#FFFFFF',
        border: '5px solid #FF002E',
        boxSizing: 'border-box',
        borderRadius: '15px',         
        width: '280px',
        height: '75px',
        color: '#FFFFFF',
        ...props.style
    }

    const textDefaults = {
        position: 'absolute',
        width: '176px',
        height: '47px',

        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '50px',
        color: '#000000',
    }

    return (
        <Button style={buttonDefaults}>
            <p style={textDefaults}>{props.text || 'Text'}</p>
        </Button>
    )
}
