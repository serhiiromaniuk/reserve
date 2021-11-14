import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export const BootstrapStack = styled(Stack)({
    position: 'absolute',
    width: '459px',
    height: '44px',
    left: '1251px',
    top: '23px'
})

const defaults = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '26px',
    lineHeight: '44px',
    borderRadius: '15px',
    boxShadow: 'none'
}
export const BootstrapSignUp = styled(Button)({
    ...defaults,
    backgroundColor: '#FF002E',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#2C2C2C',
        borderColor: '#FFFFFF'
    }
})

export const BootstrapLogIn = styled(Button)({
    ...defaults,
    color: '#000000',
    '&:hover': {
        backgroundColor: '#FF002E',
        color: '#FFFFFF',
        borderRadius: '15px'
    }
})
