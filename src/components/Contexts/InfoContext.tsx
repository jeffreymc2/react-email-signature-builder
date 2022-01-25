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
		logo1:'https://res.cloudinary.com/jeffreymc/image/upload/v1643071136/Perfect%20Game/Logos/Email%20Signature/PG_Corporate_2_33a241a3c0_cf1ef94b29_6ef9432bfe_wpw9or.png',
		logo2:'https://res.cloudinary.com/jeffreymc/image/upload/v1643071226/Perfect%20Game/Logos/Email%20Signature/PG_Baseball_2_33a241a3c0_cf1ef94b29_6ef9432bfe_ldd28d.png',
		logo3:'https://res.cloudinary.com/jeffreymc/image/upload/v1643070500/Perfect%20Game/Logos/Email%20Signature/PG_Softball_2_33a241a3c0_cf1ef94b29_6ef9432bfe_t09ftg.png',

		firstName: '',
		lastName: '',
		jobTitle: '',
		department1: '',
		department2: 'Baseball',
		department3: 'Softball',
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
