import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'

const LoadingSpinner = ({loading}) => {
	// unsure why padding and margin are behaving like this... seems like they are having inverse of expected result
	const isMobile = useMediaQuery({ query : '(max-width : 450px)' })
	let override;
	
	
	// TODO: would be nice to be able to style this jawn from our scss, but think you have to use emotions in JS, look into it. 
	if (isMobile) {
		override = css`
		padding-top: -10px;	
		margin: 200px;
	`;
	} else {
		override = css`
		padding-top: -50px;	
		margin: 00px;
	`;		
	}
	
	return (
		// <span>Loading...</span>
		<ClimbingBoxLoader loading={loading} color={'#59a796'} size={20} css={override} className="loading-spinner"/>
	);
}

export default LoadingSpinner;
