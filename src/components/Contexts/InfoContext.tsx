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
		logo1:'https://perfectgame.s3.amazonaws.com/1_Perfect_Game_Stacked_Logo_Blue_01_a2affa3832.png',
		logo2:'https://perfectgame.s3.amazonaws.com/pg_baseball_cfe0966728.png',
		logo3:'https://perfectgame.s3.amazonaws.com/PG_Softball_2_33a241a3c0_cf1ef94b29_6ef9432bfe.png',

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
