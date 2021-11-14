import { Button } from '@mui/material'
import * as React from 'react'

export function MainPageIllustration(props) {
    return (
        <div style={{    
            backgroundImage: 'url(/images/illustration.svg)',
            backgroundSize: '880px auto',
            position: 'absolute',
            width: '880px',
            height: '896px', 
            ...props.style
        }}>
        </div>
    )
}

export function SearchIcon(props) {
    return (
        <div style={{
            margin: '10px',
            ...props.style
        }}>
            <Button style={{
                borderRadius: '15px',
                color: 'white',
                minWidth: '28px',
                padding: '0px'
            }}>
                <img src='/images/search_button.svg' width='28px' position='center' alt='search-icon'/>
            </Button>
        </div>
    )
}

export function StarIcon(props) {
    const style = {
        width: '28px',
        height: '28px',
        color: 'black',
        ...props.style
    }

    return (
        <div>
            {/* <Button style={style}> */}
                <img src='/images/star_small_dark.svg' style={style} position='center' alt='search-icon'/>
            {/* </Button> */}
        </div>
    )
}
