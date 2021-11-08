import React, { useState, createContext, useContext, ReactNode, FormEvent } from 'react'
import PropTypes from 'prop-types'

interface InfoContextProps {
	data: any,
	updateInfo: any,
	updateAccentColor: any,
	updateSocialColor: any,
}

interface InfoProviderProps {
	children: ReactNode,
}

export const InfoContext = createContext<Partial<InfoContextProps>>({})

export const InfoProvider = ({ children }: InfoProviderProps) => {
	const [state, setState] = useState({
		logo:'https://perfectgame.s3.amazonaws.com/PG_Stacked2019d_2_8b00e12b06.png',
		firstName: '',
		lastName: '',
		jobTitle: '',
		department: '',
		companyName: 'Perfect Game',
		officePhone: '',
		mobilePhone: '',
		websiteUrl: 'www.perfectgame.org',
		emailAddress: '',
		address: '',
		address2: '',
		socialLinkedin: '',
		socialFacebook: '',
		socialTwitter: '',
		socialInstagram: '',
		accentColor: '#002e6d',
		socialColor: '#002e6d',
	})
	return (
		<InfoContext.Provider
			value={{
				data: state,
				updateInfo: (e: FormEvent<HTMLInputElement>) => {
					setState({
						...state,
						[e.currentTarget.name]: e.currentTarget.value,
					})
				},
				updateAccentColor: (color: string) => {
					setState({
						...state,
						accentColor: color,
					})
				},
				updateSocialColor: (color: string) => {
					setState({
						...state,
						socialColor: color,
					})
				},
			}}
		>
			{children}
		</InfoContext.Provider>
	)
}

export const useInfoValue = () => useContext(InfoContext)

InfoProvider.propTypes = {
	children: PropTypes.node,
}
