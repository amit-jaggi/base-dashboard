import React from 'react'
import Notification from '../assets/notification-bell.png'
import User from '../assets/user.png';
import HeaderTitle from '../utils/HeaderTitle';

const Headers = () => {
	return (
		<div
			style={{
				width: '90%',
				margin: '49px auto 0 auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<HeaderTitle title={`Upload CSV`} />
			<ProfileNotification />
		</div>
	)
}

const ProfileNotification = () => {
	return <div
		style={{
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<img src={Notification} alt="notification" style={{ width: '18px', height: '23px', margin: '4px 0 3px 0' }} />
		<img src={User} alt="user" style={{ width: '30px', height: '30px', marginLeft: '27.61px' }} />
	</div>
}

export default Headers
