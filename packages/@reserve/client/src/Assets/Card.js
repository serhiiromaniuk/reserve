import * as React from 'react'

export class Card extends React.Component {
    render() {
        return (
            <div style={{
                margin: '10px',
                ...this.props.style
            }}>
                Card
            </div>
        )
    }
}
