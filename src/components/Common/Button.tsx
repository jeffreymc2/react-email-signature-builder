import React, { ReactNode, MouseEvent } from 'react'
import styled from 'styled-components'

export interface ButtonProps {
	onClick: (e: MouseEvent) => void,
	children: ReactNode,
	secondary?: boolean,
}

export const Button = ({ onClick, children }: ButtonProps) => (
	<StyledButton onClick={onClick}>{children}</StyledButton>
)

export const ButtonSecondary = ({ onClick, children }: ButtonProps) => (
	<StyledButton secondary onClick={onClick}>
		{children}
	</StyledButton>
)

const StyledButton = styled.button<ButtonProps>`
	outline: none;
	border: 1px solid transparent;
	background-color: ${props => (props.secondary ? '#fff' : '#002e6b')};
	color: ${props => (props.secondary ? '#002e6b' : '#fff')};
	font-family: inherit;
	padding: 0.5rem 1rem;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: color 0.1s ease-out, border-color 0.1s ease-out,
		background-color 0.1s ease-out;
	&:hover {
		background-color: #012350;
		${props => (props.secondary ? 'color: #fff' : null)}
	}
	&:active {
		background-color: #002e6b;
	}
`
