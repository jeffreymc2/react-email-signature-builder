import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return(
		<StyledHeader>
			<img width="200" height="90"  alt="Logo" src="https://perfectgame.s3.amazonaws.com/1_Perfect_Game_Stacked_Logo_Blue_01_924edea548.png"></img>
			<h3>Email Signature Generator</h3>
			<p>Use the panel on the left to customize your signature, then click the button below to copy the HTML</p>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	margin-bottom: 8rem;
	text-align: center;
	font-size: 14px;
	color: #333;
	h1 {
		font-size: 35px;
		margin: 1rem 0 0;
		color: #002e6b;
	}

	h3 {
		font-size: 25px;
		margin: 1rem 0 0;
		color: #002e6b;
	}
`
