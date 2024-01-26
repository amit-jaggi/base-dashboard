import React from 'react'
import NavBar from '../components/NavBar'
import UploadComponent from '../components/UploadContainer'

const Dashboard = () => {
	return (
		<div
			style={{
				width: '100%',
				backgroundColor: '#fafafb',
				display: 'flex'
			}}
		>
			<NavBar />
			<UploadComponent />
		</div>
	)
}

export default Dashboard
