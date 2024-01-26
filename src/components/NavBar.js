import logo from '../assets/logo.png';
import { Menu } from '../utils/Menu';

const NavBar = () => {
	return (
		<div
			style={{
				backgroundColor: '#fff',
				width: '218px',
				minHeight: '100%',
			}}
		>
			<LogoComponent />
			<MenuComponent menu={Menu} />
		</div >
	)
}

const LogoComponent = () => {
	return (
		<div
			style={{
				// border: '1px solid black',
				width: '111px',
				height: '42px',
				margin: '50px auto 0 auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<img src={logo} alt="Logo" />
			<p
				style={{
					fontFamily: 'Nunito',
					fontWeight: '600',
					fontSize: '24px',
					cursor: 'default',
				}}
			>Base</p>
		</div>
	)
}

const MenuComponent = ({ menu }) => {
	return (
		<div
			style={{
				// border: '1px solid black',
				width: '154px',
				height: '424.99px',
				marginTop: '50px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			{
				menu.map((el, index) => index === 1
					? (
						<div
							key={index}
							style={{
								display: 'flex',
								alignItems: 'center',
								cursor: 'pointer'
							}}
						>
							<div
								style={{
									width: '53px',
									height: '48px',
									background: 'linear-gradient(to right, rgba(172, 169, 255, 1), rgba(172, 169, 255, 0))',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
									marginRight: '16px',
								}}
							>
								<img
									src={el.icon}
									alt={`${el.title}`}
									style={{
										width: el.size.width,
										height: el.size.height,
									}}
								/>
							</div>
							<p
								style={{
									fontFamily: 'Nunito',
									fontWeight: '600',
									fontSize: '16px',
									color: '#999CA0',
								}}
							>{el.title}</p>
						</div>
					)
					: (
						<div
							key={index}
							style={{
								// border: '1px solid red',
								display: 'flex',
								alignItems: 'center',
							}}
							>
							<div
								style={{
									// border: '1px solid black',
									width: '53px',
									display: 'flex',
									justifyContent: 'flex-end',
									marginRight: '16px',
								}}
							>
								<img
									src={el.icon}
									alt={`${el.title}`}
									style={{
										width: el.size.width,
										height: el.size.height,
									}}
								/>
							</div>
							<p
								style={{
									fontFamily: 'Nunito',
									fontWeight: '600',
									fontSize: '16px',
									color: '#999CA0',
								}}
							>{el.title}</p>
						</div>
					)
				)
			}
		</div >
	)
}

export default NavBar;
