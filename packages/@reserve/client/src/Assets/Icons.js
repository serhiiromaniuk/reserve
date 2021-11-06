import { Button } from '@mui/material'
import * as React from 'react'

export class MainPageIllustration extends React.Component {
    render() {
        return (
            <div style={{    
                backgroundImage: 'url(/images/illustration.svg)',
                backgroundSize: '880px auto',
                position: 'absolute',
                width: '880px',
                height: '896px', 
                ...this.props.style
            }}>
            </div>
        )
    }
}

export class SearchIcon extends React.Component {
    render() {
        return (
            <div style={{
                margin: '10px',
                ...this.props.style
            }}>
                <Button style={{
                    borderRadius: '15px',
                    color: '#000000',
                    minWidth: '28px',
                    padding: '0px',
                    '-webkit-tap-highlight-color': 'black'
                }}>
                    <img src='/images/search_button.svg' width='28px' position='center' alt='search-icon'/>

                </Button>
            </div>
        )
    }
}
