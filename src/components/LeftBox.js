import React from 'react';
import Leftside from '../assets/leftside.png';
import Ellipse from '../assets/ellipse.png';
import Vector from '../assets/vector.png';
import Github from '..//assets/github.png';
import Twitter from '..//assets/twitter.png';
import LinkedIn from '..//assets/linkedIn.png';
import Toad from '..//assets/toad.png';

const LeftBox = () => {
	return (
		<div
			style={{
				// border: '1px solid red',
				backgroundImage: `url(${Leftside})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: '100% 100%',
				width: '50%',
				minHeight: '100vh',
				backgroundColor: 'rgb(231 231 231 / 43%)',
			}}
		>
			<Logo />
			<LogoName />
			<Social />
		</div>
	)
}

const Logo = () => {
	return (
		<div
			style={{
				width: '80.15px',
				height: '80.15px',
				position: 'relative',
				top: '54.32px',
				left: '61.03px',
			}}
		>
			<img
				src={Ellipse}
				alt='ellipse'
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: 1,
				}}
			/>
			<img
				src={Vector}
				alt='vector'
				style={{
					position: 'absolute',
					width: '108%',
					marginTop: '25px',
					marginLeft: '-4px',
					zIndex: 2,
				}}
			/>
		</div>
	)
}

const LogoName = () => {
	return (
		<div
			style={{
				marginTop: '180.37px',
				marginLeft: '196.33px',
				marginBottom: '200.63px',
				fontFamily: 'Montserrat',
				fontSize: '72px',
				fontWeight: '700',
				lineHeight: '88px',
				letterSpacing: '0em',
				textAlign: 'left',
				color: '#fff',
				cursor: 'default',
			}}
		>BASE</div>
	)
}

const Social = () => {
	const social = [
		{
			iconSrc: Github,
			alt: `${Github}`,
			width: '40px',
			height: '40px',
		},
		{
			iconSrc: Twitter,
			alt: `${Twitter}`,
			width: '42px',
			height: '42px',
		},
		{
			iconSrc: LinkedIn,
			alt: `${LinkedIn}`,
			width: '36px',
			height: '35.85px',
		},
		{
			iconSrc: Toad,
			alt: `${Toad}`,
			width: '35.55px',
			height: '39px',
		},
	];
	return (
		<div
			style={{
				// border: '1px solid white',
				width: '299px',
				height: '48px',
				position: 'relative',
				left: '144.5px',
				bottom: '67px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			{
				social.map((el, index) => <img
					key={index}
					src={el.iconSrc}
					alt={el.alt}
					width={el.width}
					height={el.height}
					style={{
						cursor: 'pointer',
					}}
				/>)
			}
		</div>
	)
}

export default LeftBox
