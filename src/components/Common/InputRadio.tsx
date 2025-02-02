import React from 'react'
import styled from 'styled-components'

export interface InputRadioProps {
	name: string,
	checked: string,
	onChange: any,
	label: string,
}

export const InputRadio = ({ name, checked, onChange, label }: InputRadioProps) => (
	<StyledInputRadio>
		<input
			type="radio"
			name={name}
			value={name}
			checked={checked === name}
			onChange={onChange}
			id={name}
		/>
		<label htmlFor={name}>{label}</label>
	</StyledInputRadio>
)

const StyledInputRadio = styled.div`
	display: flex;
	margin-bottom: 0.5rem;
	& > input {
		margin-right: 0.5rem;
	}
`
