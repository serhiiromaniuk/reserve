import { Card, ButtonBig, Paragraph} from '../../../Components'
import { StackStyle } from './style'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'

const BootstrapStack = styled(Stack)(
    StackStyle()
)

const BootstrapStackSecondary = styled(Stack)(
    StackStyle({
        top: '1900px'
    })
)

function SpawnStack() {
    const data = [
        {
            imgUrl: '/images/pic.svg',
            title: 'Saint Apollo',
            reviews: 1,
            price: {
                number: 100.99,
                symbol: '$'
            },
            location: {
                address: '24 Lane Pt ST',
                city: 'NY'
            },
            tags: [
                'test',
                'tags',
                'tags',
                'tags',
                'tags',
            ]
        },
        {
            imgUrl: '/images/pic.svg',
            title: 'Short',
            reviews: 12,
            price: {
                number: 0.22,
                symbol: '$'
            },
            location: {
                address: 'Chernivetska street, #12/2',
                city: 'NY'
            },
            tags: [
                'dry',
                'ocean',
                'hot',
                'salt',
                'open',
                'tags6ad',
                'here'
            ]
        },
        {
            imgUrl: '/images/search_button.svg',
            title: 'Long here PUBLIC PUB HERE',
            reviews: 12,
            price: {
                number: 1000,
                symbol: '&'
            },
            location: {
                address: '123 Lane ST Avenue',
                city: 'NY'
            },
            tags: [
                'test'
            ]
        }
    ]

    return data.map((k, i) => <Card key={`myId${i}`} data={k}/>)
}

export function MidPart() {
    return (
        <div>
            <Paragraph style={{top: '910px'}} iconStyle={{top: '973px'}} text='Popular places'/>

            <BootstrapStack direction='row' spacing={15}>
                <SpawnStack/>
            </BootstrapStack>

            <ButtonBig style={{top: '1645px', left: '685px'}} text='Search'/>
            <Paragraph style={{top: '1730px'}} iconStyle={{top: '1795px', left: '568px'}} text='Cool places here'/>

            <BootstrapStackSecondary direction='row' spacing={15}>
                <SpawnStack/>
            </BootstrapStackSecondary>
            <ButtonBig style={{top: '2465px', left: '685px'}} text='Search'/>
        </div>
    )
}
