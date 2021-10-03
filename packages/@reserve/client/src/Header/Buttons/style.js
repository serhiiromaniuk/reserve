import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';

    // DEMO ONLY //
// import { purple } from '@mui/material/colors';
// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   '&:hover': {
//     backgroundColor: purple[700],
//   },
// }));

export const BootstrapStack = styled(Stack)({
    position: 'absolute',
    width: '459px',
    height: '44px',
    left: '450px',
    top: '43px'
})

export const BootstrapButton = styled(Button)({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '26px',
    lineHeight: '44px',
    borderRadius: '15px',
    color: '#000000',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: '3px 3px 8px 1px rgba(0,0,0,.6)',
        backgroundColor: '#FF002E',
        color: '#FFFFFF',
        borderRadius: '15px'
    },
    '&:active': {
        boxShadow: '3px 3px 8px 1px rgba(0,0,0,.6)',
        backgroundColor: '#2C2C2C',
        borderColor: '#FFFFFF'
    }
})
