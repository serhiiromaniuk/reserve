import { Button, Box, Fade } from '@mui/material'
import * as React from 'react'
import { StarIcon } from './Icons'
import { 
    BootstrapTooltip, TitleStyle,
    ReviewStyle, PriceStyle,
    LocationStyle, TagsBoxStyle,
    TagsTextStyle, ImgStyle,
    CardStyle, BoxStyle,
} from './style'

export function Card(props) {
    const {
        imgUrl,
        title,
        reviews,
        price,
        location,
        tags
    } = props.data
    
    const Title = (props) => {
        const baseTitle = props.data
        const style = props.style
        let title = props.data
        if (baseTitle.length > 7) title = baseTitle.substr(0, 7) + '...'
        return (
            <div>
                {
                    baseTitle === title ?
                        (
                            <Button style={style}>
                                {title}
                            </Button>
                        )
                    :
                        (
                            <BootstrapTooltip 
                                title={baseTitle} 
                                placement="left"
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                arrow
                            >
                                <Button style={style}>
                                    {title}
                                </Button>
                            </BootstrapTooltip>
                        )
                }
            </div>
        )
    }

    const Review = (props) => {
        const review = props.data
        const style = props.style

        var text = 'reviews'
        if (review === 1) text = 'review'
        return (
            <div>
                <Button style={style}>
                    {review + ' ' + text}
                </Button>
            </div>
        )
    }

    const Price = (props) => {
        const { number, symbol } = props.data
        const style = props.style
        return (
            <div>
                <Button style={style}>
                    {symbol + number}
                </Button>
            </div>
        )
    }

    const Location = (props) => {
        const { address, city } = props.data
        const style = props.style
        return (
            <div>
                <Button style={style}>
                    {address + ', ' + city}
                </Button>
            </div>
        )
    }

    const Tags = (props) => {
        let list = props.data
        const boxStyle = props.boxStyle
        const textStyle = props.textStyle
        if (list.length > 5) list = list.slice(0, 5)
        const Tags = [...list].map(
            (tag, ind) => (
                <Button key={`myId${ind}`} style={textStyle}>
                    {tag}
                </Button>
            )
        )
        return (
            <div>
                <Box
                    component="span"
                    m={1}
                    style={boxStyle}
                >
                    {Tags}
                </Box>
            </div>
        )
    }


    return (
        <div style={CardStyle(props.style)}>
            <BootstrapTooltip 
                followCursor={true}
                title={title} 
                placement="left"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 700 }}
                arrow
                styles={{color: 'black'}}
            >
                <Button style={ImgStyle(imgUrl)}/>
            </BootstrapTooltip>

            <Box
                component="span"
                m={1}
                style={{
                    ...BoxStyle,
                    justifyContent: 'space-around'
                }}
            >
                <Title data={title} style={TitleStyle}/>
                    <StarIcon style={{
                        // justifyContent: "center",
                        // left: "20px",
                        alignSelf: 'center'
                    }}/>
                <Review data={reviews} style={ReviewStyle}/>
            </Box>

            <Box
                component="span"
                m={1}
                style={{
                    ...BoxStyle,
                    height: 24,
                    padding: 4,
                }}
            >
                <Price data={price} style={PriceStyle}/>
            </Box>

            <Box
                component="span"
                m={1}
                style={{
                    ...BoxStyle,
                    justifyContent: 'start'
                }}
            >
                <Location data={location} style={LocationStyle}/>
            </Box>

            <Tags data={tags} boxStyle={TagsBoxStyle} textStyle={TagsTextStyle}/>
        </div>
    )
}
