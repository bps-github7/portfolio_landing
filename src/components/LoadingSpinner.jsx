import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingSpinner = ({loading}) => {
	
	return (
		<section class="loading-spinner-parent">
			<ClimbingBoxLoader loading={loading} color={'#59a796'} size={20} className="loading-spinner body"/>
		</section>
	);
}

export default LoadingSpinner;
