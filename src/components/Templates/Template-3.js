import React from 'react'
import { useInfoValue } from '../Contexts/InfoContext'

export const TemplateThree = () => {
	const { data } = useInfoValue()

	return (
		<table
			cellPadding="0"
			cellSpacing="0"
			style={{
				verticalAlign: '-webkit-baseline-middle',
				fontFamily: 'sans-serif',
			}}
		>
			<tbody>
				<tr>
					<td style={{ verticalAlign: 'top' }}>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontFamily: 'sans-serif',
								color: '#002e6b'
							}}
						>
							<tbody>
								<tr>
									<td style={{ textAlign: 'center' }}>
										<img
											width="130"
											src={
												data.logo3
													? data.logo3
													: 'https://api.adorable.io/avatars/face/eyes1/nose5/mouth6/504A65'
											}
											alt="Logo"
											role="presentation"
											style={{ maxWidth: '130px', display: 'inline-block' }}
										/>
									</td>
								</tr>
								
								<tr>
									<td height="24"></td>
								</tr>
								{(data.socialFacebook ||
									data.socialInstagram ||
									data.socialLinkedin ||
									data.socialTwitter) && (
									<tr>
										<td style={{ textAlign: 'center' }}>
											<table
												cellPadding="0"
												cellSpacing="0"
												style={{
													verticalAlign: '-webkit-baseline-middle',
													fontFamily: 'sans-serif',
													display: 'inline-block',
												}}
											>
												<tbody>
													<tr style={{ textAlign: 'center' }}>
														{data.socialFacebook && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialFacebook}`}
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png"
																			alt="facebook"
																			color={data.socialColor}
																			style={{
																				backgroundColor: data.socialAnchor,
																				maxWidth: '135px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
														{data.socialTwitter && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialTwitter}`}
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png"
																			alt="twitter"
																			color={data.socialColor}
																			style={{
																				backgroundColor: data.socialAnchor,
																				maxWidth: '135px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
														{data.socialLinkedin && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialLinkedin}`}
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png"
																			alt="linkedin"
																			color={data.socialColor}
																			style={{
																				backgroundColor: data.socialAnchor,
																				maxWidth: '135px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
														{data.socialInstagram && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialInstagram}`}
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon.png"
																			alt="instagram"
																			color={data.socialColor}
																			style={{
																				backgroundColor: data.socialAnchor,
																				maxWidth: '135px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</td>
					<td width="16"></td>
					<td style={{ padding: '0px', verticalAlign: 'middle' }}>
						<h3
							color="#76777a"
							style={{ margin: '0px', fontSize: '14px', color: '#76777a', fontWeight: '700' }}
						>
							<span>{data.firstName ? data.firstName : 'First &'}</span>
							<span>&nbsp;</span>
							<span>{data.lastName ? data.lastName : 'Last Name'}</span>
						</h3>
						{data.jobTitle && (
							<p
								color="#002e6b"
								style={{
									margin: '0px',
									color: '#002e6b',
									fontSize: '14px',
								}}
							>
								<span>{data.jobTitle}</span>
							</p>
						)}
						{(data.department3 || data.companyName) && (
							<p
								color="#002e6b"
								style={{
									margin: '0px',
									fontWeight: '900',
									color: '#002e6b',
									fontSize: '14px',
								}}
							>
								<span>{data.companyName}</span>
								{data.companyName &&
									(data.department3 && <span>&nbsp;</span>)}
								<span 
								style={{
									margin: '0px',
									fontWeight: '700',
									color: '#002e6b',
									fontSize: '14px',
								}}
								
								>{data.department3}</span>
							</p>
						)}
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontFamily: 'sans-serif',
								width: '100%',
							}}
						>
							<tbody>
								<tr>
									<td height="14"></td>
								</tr>
								<tr>
									<td
										height="1"
										color={data.accentColor}
										direction="horizontal"
										style={{
											width: '100%',
											borderBottom: `1px solid ${data.accentColor}`,
											borderLeft: 'none',
											display: 'block',
											color: '#002e6b'
										}}
									></td>
								</tr>
								<tr>
									<td height="16"></td>
								</tr>
							</tbody>
						</table>
						{(data.officePhone ||
							data.mobilePhone ||
							data.emailAddress ||
							data.websiteUrl ||
							data.address) && (
							<table
								cellPadding="0"
								cellSpacing="0"
								style={{
									verticalAlign: '-webkit-baseline-middle',
									fontFamily: 'sans-serif',
									textDecoration: 'none',
									color: '#000'
								}}
							>
								<tbody>
									{(data.officePhone || data.mobilePhone) && (
										<tr height="10" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontFamily: 'sans-serif',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon.png"
																		color={data.accentColor}
																		alt="Phone icon"
																		style={{
																			width: '12px',
																			display: 'block',
																			backgroundColor: data.accentColor,
																		}}
																	/>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px', color: '#76777a' }}>
												<a
													href={`tel:${data.officePhone}`}
													color="#76777a"
													style={{
														textDecoration: 'none',
														color: '#76777a',
														fontSize: '12px',
													}}
												>
													<span>{data.officePhone}</span>
												</a>
												{data.officePhone &&
													(data.mobilePhone && <span>&nbsp;|&nbsp;</span>)}
												<a
													href={`tel:${data.mobilePhone}`}
													color="#76777a"
													style={{
														textDecoration: 'none',
														color: '#76777a',
														fontSize: '12px',
													}}
												>
													<span>{data.mobilePhone}</span>
												</a>
											</td>
										</tr>
									)}
									{data.emailAddress && (
										<tr height="10" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontFamily: 'sans-serif',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon.png"
																		color={data.accentColor}
																		alt="Email icon"
																		style={{
																			width: '12px',
																			display: 'block',
																			backgroundColor: data.accentColor,
																		}}
																	/>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px' }}>
												<a
													href={`mailto:${data.emailAddress}`}
													color="#76777a"
													style={{
														textDecoration: 'none',
														color: '#76777a',
														fontSize: '12px',
													}}
												>
													<span>{data.emailAddress}</span>
												</a>
											</td>
										</tr>
									)}
									{data.websiteUrl && (
										<tr height="10" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontSize: 'medium',
														fontFamily: 'sans-serif',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon.png"
																		color={data.accentColor}
																		alt="Website URL icon"
																		style={{
																			width: '12px',
																			display: 'block',
																			backgroundColor: data.accentColor,
																		}}
																	/>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px' }}>
												<a
													href={`https://${data.websiteUrl}`}
													color="#76777a"
													style={{
														textDecoration: 'none',
														color: '#76777a',
														fontSize: '12px',
													}}
												>
													<span>{data.websiteUrl}</span>
												</a>
											</td>
										</tr>
									)}
									{data.address && (
										<tr height="10" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontSize: 'medium',
														fontFamily: 'sans-serif',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon.png"
																		color={data.accentColor}
																		alt="Address icon"
																		style={{
																			width: '12px',
																			display: 'block',
																			backgroundColor: data.accentColor,
																		}}
																	/>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px' }}>
												<span
													color="#76777a"
													style={{ fontSize: '12px', color: '#76777a' }}
												>
													<span>{data.address}</span>
												</span>
											</td>
										</tr>
									)}
									{data.address2 && (
										<tr height="10" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontFamily: 'sans-serif',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px' }}>
												<span
													color="#76777a"
													style={{ fontSize: '12px', color: '#76777a' }}
												>
													<span>{data.address2}</span>
												</span>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						)}
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
							}}
						>
							<tbody>
								<tr>
									<td height="16"></td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
							}}
						>
							<tbody>
								<tr>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
