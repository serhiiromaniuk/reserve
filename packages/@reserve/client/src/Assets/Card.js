import * as React from 'react'

export class Card extends React.Component {
    styling() {
        return {            
            background: '#FFFFFF',
            border: '5px solid #000000',
            boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '15px',
            ...this.props.style
        }
    }

    render() {
        return (
            <div style={this.styling()}>
                Card
            </div>
        )
    }
}
