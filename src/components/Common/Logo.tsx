import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface LogoProps {
	children: ReactNode
}

export const Logo = ({ children }: LogoProps) => {
	return (
		<StyledLogo>
			{children}
		</StyledLogo>
	)
}

const StyledLogo = styled.p`
	font-size: 0.875rem;
	margin-bottom: 1.5rem;
	text-align: center;
`
