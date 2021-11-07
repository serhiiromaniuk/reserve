import { Button } from '@mui/material'
import * as React from 'react'
import { StarIcon } from './Icons'

export function Card(props) {
    const {
        imgUrl,
        title,
        reviews,
        price,
        location,
        tags
    } = props.data
    
    const Title = ({data}) => {
        const title = data
        const style = {
            // position: 'relative',
            // left: '9.45%',
            // right: '60.43%',
            // top: '63.59%',
            // bottom: '30.16%',
            textAlign: 'left',
            marginLeft: '8%',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '22px',
            lineHeight: '37px',

            color: '#000000',
        }

        return (
            <div>
                <p style={style}>
                    {title}
                </p>
            </div>
        )
    }

    const Review = ({data}) => {
        const review = data
        const style = {
            position: 'absolute',
            left: '60.83%',
            right: '9.65%',
            top: '63.59%',
            bottom: '30.16%',
            
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '30px',
            lineHeight: '37px',
            
            color: '#000000'
        }

        var text = 'reviews'
        if (review === 1) text = 'review'
        return (
            <div>
                <p>
                    {review + ' ' + text}
                </p>
            </div>
        )
    }

    const Price = ({data}) => {
        const { number, symbol } = data
        const style = {
            position: 'absolute',
            left: '10.04%',
            right: '54.53%',
            top: '70.94%',
            bottom: '22.5%',

            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '30px',
            lineHeight: '37px',

            color: '#000000',
        }
        return (
            <div>
                <p>
                    {symbol + number}
                </p>
            </div>
        )
    }

    const Location = ({data}) => {
        const { address, city } = data
        const style = {
            position: 'absolute',
            left: '10.04%',
            right: '8.46%',
            top: '77.5%',
            bottom: '15.62%',
            
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '34px',
            lineHeight: '41px',
            
            color: '#000000',
        }
        return (
            <div>
                <p>
                    {address + ' ' + city}
                </p>
            </div>
        )
    }

    const Tags = ({data}) => {
        const tags = [...data]
        const styledBox = {
            position: 'absolute',
            left: '6.89%',
            right: '6.89%',
            top: '87.97%',
            bottom: '5.47%',
            
            background: '#FF002E',
            borderRadius: '10px',
        }

        const styledText = {
            position: 'absolute',
            left: '11.61%',
            right: '11.61%',
            top: '87.97%',
            bottom: '5.94%',
            
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '37px',
            
            color: '#FFFFFF',
            
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
        }
        return (
            <div>
                {tags}
            </div>
        )
    }

    const imgStyle = {
        // backgroundImage: '/images/search_button.svg',
        // backgroundSize: 'auto',
        // position: 'absolute',
        backgroundSize: '320px auto',
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        width: '320px',
        height: '250px',
        margin: 'auto',
        marginTop: '5%',
        color: 'white',
    }

    const cardStyle = {
        textAlign: 'center',
        background: '#FFFFFF',
        border: '5px solid #000000',
        boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',
        width: '380px',
        height: '478px', // 0,79375
        ...props.style
    }

    return (
        <div style={cardStyle}>
            <Button style={imgStyle}>
            </Button>
            <Title data={title}/>
            <StarIcon style={{
                position: 'absolute',
                marginTop: '10px',
            }}/>
            <Review data={reviews}/>
            <Price data={price}/>
            <Location data={location}/>
            <Tags data={tags}/>
        </div>
    )
}
