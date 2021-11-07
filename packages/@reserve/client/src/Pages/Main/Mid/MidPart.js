import { Card, ButtonBig, Paragraph} from '../../../Components'
import { BootstrapStack } from './style'

function SpawnStack() {
    const data = [
        {
            imgUrl: '/images/pic.svg',
            title: 'Saint Apollo',
            reviews: '12',
            price: {
                number: '100',
                symbol: '$'
            },
            location: {
                address: '24 Lane Pt ST',
                city: 'NY'
            },
            tags: [
                'test',
                'tags',
                'here'
            ]
        },
        {
            imgUrl: '/images/pic.svg',
            title: 'Short',
            reviews: '12',
            price: {
                number: '100',
                symbol: '$'
            },
            location: {
                address: 'Chernivetska street, #12/2',
                city: 'NY'
            },
            tags: [
                'test',
                'tags',
                'tags',
                'tags',
                'tags',
                'here'
            ]
        },
        {
            imgUrl: '/images/search_button.svg',
            title: 'Long here PUBLIC PUB HERE',
            reviews: '12',
            price: {
                number: '1000',
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

    return data.map(i => <Card data={i}/>)
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
        </div>
    )
}
