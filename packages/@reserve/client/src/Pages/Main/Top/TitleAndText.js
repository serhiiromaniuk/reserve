import * as React from 'react'

const defaults = {
    position: 'absolute',
    fontFamily: 'Montserrat',
    left: '124px',
    width: '560px',
    height: '63px',
    fontStyle: 'normal',
    color: '#000000',
    // textShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)'
}
const titleStyle = {
    ...defaults,
    top: '193px',
    fontWeight: 'bold',
    fontSize: '50px',
    lineHeight: '67px',
}

const textStyle = {
    ...defaults,
    top: '310px',
    fontWeight: '300',
    fontSize: '24px',
    lineHeight: '34px',
}

export default function TitleAndText() {
    return (
        <div>
            <p style={titleStyle}>
                Search and reserve
            </p>

            <p style={textStyle}>
                Looking for a great place for hang out?
                <br/>
                Let’s find out the special one for you!
            </p>
        </div>
    )
}
