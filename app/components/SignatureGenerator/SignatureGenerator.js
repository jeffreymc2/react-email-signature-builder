import React from 'react'
import styled from 'styled-components'
import Controls from './Controls/Controls'
import Canvas from './Canvas/Canvas'
import TemplateOne from '../Templates/Template-1'
import TemplateTwo from '../Templates/Template-2'

export default class SignatureGenerator extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeControl: 'templates',
			template: 'template1',
			portrait: '',
			logo: '',
			firstName: '',
			lastName: '',
			jobTitle: '',
			department: '',
			companyName: '',
			officePhone: '',
			mobilePhone: '',
			websiteUrl: '',
			emailAddress: '',
			address: '',
			socialLinkedin: '',
			socialFacebook: '',
			socialTwitter: '',
			socialInstagram: '',
			copySuccess: '',
			accentColor: '#000',
		}

		this.handleTemplateChange = this.handleTemplateChange.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleControlChange = this.handleControlChange.bind(this)
		this.handleCopy = this.handleCopy.bind(this)
	}

	handleControlChange(e) {
		this.setState({
			activeControl: e.target.value
		})
	}

	handleTemplateChange(e) {
		this.setState({
			template: e.target.value
		})
	}

	handleInputChange(e) {
		const { target: { name, value } } = e
		this.setState({
			[name]: value
		})
	}

	handleCopy() {
		const signatureMarkup = document.getElementById('signatureMarkup')
		signatureMarkup.select()
		document.execCommand('copy')
		this.setState({
			copySuccess: 'Copied!'
		})
	}

	render() {
		const StyledMainContainer = styled.main`
			width: 100%;
			height: 100vh;
			background-color: #fff;
			margin: 0 auto;
			display: grid;
			grid-template-columns: minmax(200px,400px) 3fr;
			grid-template-rows: 1fr 1fr;
			grid-gap: 1vw;
			grid-template-areas:
				'form signature'
				'form copy-signature';
		`

		const { activeControl, template, copySuccess, ...templateState } = this.state

		return(
			<StyledMainContainer>
				<Controls
					activeControl={ activeControl }
					onControlChange={ this.handleControlChange }
					template={ template }
					onTemplateChange={ this.handleTemplateChange }
					onInputChange={ this.handleInputChange }
				/>
				<Canvas onCopy={ this.handleCopy } copySuccess={ copySuccess }>
					{(this.state.template === 'template1') ?
						<TemplateOne { ...templateState } /> :
						(this.state.template === 'template2') ?
						<TemplateTwo { ...templateState } /> :
						null
					}
				</Canvas>
			</StyledMainContainer>
		)
	}
}
