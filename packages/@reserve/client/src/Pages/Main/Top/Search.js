
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import { Input } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { SearchIcon } from './Illustrations'

function LoginC() {
	const [checked, setChecked] = useState(false)
	
	const defaults = {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: '18px'
	}
	  
	const InputFieldWrapper = {
		border: '3px solid #FF002E',
		borderRadius: '15px',
		position: 'absolute',
		width: '500px',
		height: '50px',
		left: '124px',
		top: '481px',
		...defaults
	}
	  
	const InputField = {
		position: 'absolute',
		width: '480px',
		height: '45px',
		left: '20px',
		top: '4px',
		...defaults
	}
	  
	const checBoxStyling = {
		position: 'absolute',
		color: '#2C2C2C',
		width: '50px',
		height: '50px',
		left: '124px',
		top: '570px',
		...defaults
	}
	  
	const checBoxTextStyling = {
		position: 'absolute',
		left: '175px',
		top: '567px',
		...defaults
	}

	const handleCheck = () => {
		setChecked(!checked)
	}

	return (
		<>
			<div style={InputFieldWrapper}>
				<Input
					autoFocus
					disableUnderline
					style={InputField}
					placeholder='Search...'
					endAdornment={
					<InputAdornment>
						<SearchIcon/>
					</InputAdornment>
					}
				/>
			</div>

			<Checkbox
				sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}
				style={checBoxStyling}
				checked={checked}
				onChange={handleCheck}
			/>
			<p style={checBoxTextStyling}>Near by me</p>
		</>
	)
}

export default LoginC
