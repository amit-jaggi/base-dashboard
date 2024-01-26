import React from 'react';
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';

const SignUp = ({ formData, handleChange, handleSubmit, signIn }) => {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
			}}
		>
			<LeftBox />
			<RightBox
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				signIn={signIn}
			/>

		</div>
	)
}

export default SignUp
