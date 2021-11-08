import React, { FormEvent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export interface InputTextProps {
	value: string,
	onBlur: (e: FormEvent) => void,
	name: string,
	label: string,
}

export const InputText = ({ value, onBlur, name, label }: InputTextProps) => (
	<StyledInputText>
		<Input
			type="text"
			required
			defaultValue={value}
			onBlur={onBlur}
			name={name}
			key={name}
		/>
		<Label htmlFor={name}>{label}</Label>
	</StyledInputText>
	
)

InputText.propTypes = {
	value: PropTypes.string,
	onBlur: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}



const StyledInputText = styled.div`
	position: relative;
	font-size: 1.0rem;
`

const Input = styled.input`
	width: 100%;
	font-family: sans-serif;
	height: 20px;
	padding: 0.5rem 0 0.5rem 0.5rem;
	margin-bottom: 1rem;
	margin-top: 1rem;
	font-size: .75rem;
	background: transparent;
	color: #ffffff;
	border: none;
	border-bottom: 2px solid #ffffff;
	box-shadow: none;
	&:focus {
		outline: none;
	}
	&:focus {
		outline: none;
	}
	&:focus + label,
	&:valid + label {
		top: -0.05rem;
		transform: scale(0.8);
		left: 0;
	}
`

const Label = styled.label`
	position: absolute;
	top: .5rem;
	left: 0.2rem;
	transition: all 0.2s ease-in-out;
	pointer-events: none;
	opacity: 0.5;
`
