import Paragraph from './Paragraph'
import { Card } from '../../../Assets'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'

export const BootstrapStack = styled(Stack)({
    position: 'absolute',
    width: '380px',
    height: '640px',
    left: '124px',
    top: '1080px'
})

export function MidPart() {
    const commonStyles = {
        width: '380px',
        height: '640px'
    }

    return (
        <div>
            <Paragraph/>
            <BootstrapStack direction='row' spacing={20}>
                <Card style={commonStyles}/>
                <Card style={commonStyles}/>
                <Card style={commonStyles}/>
            </BootstrapStack>
        </div>
    )
}
