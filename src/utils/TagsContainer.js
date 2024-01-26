import React from 'react'
import CloseIcon from '../assets/closeIcon.png';

const TagsContainer = ({ id, selectedTags, data, setData }) => {

	const handleDelete = (tag) => {
		let output = data.map(el => el.id === id
			? ({
				id: el.id,
				links: el.links,
				prefix: el.prefix,
				selectTags: [...el.selectTags, tag],
				selectedTags: el.selectedTags.filter(item => item !== tag),
			})
			: el
		)
		setData(output);
	}

	return (
		<>
			{
				selectedTags.length !== 0 && selectedTags.map(
					(el, index) => (<div
						key={index}
						style={{
							height: '30px',
							padding: '4px 4px 4px 8px',
							borderRadius: '4px',
							gap: '4px',
							background: '#605BFF',
							fontFamily: 'Figtree',
							fontSize: '12px',
							fontWeight: 600,
							letterSpacing: '0.5px',
							color: '#fff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							margin: '0 8px 8px 0',
						}}
					>
						<div>{el}</div>
						<img
							src={CloseIcon}
							alt='Close'
							style={{
								marginLeft: '4px', width: '20px', height: '20px', cursor: 'pointer'
							}}
							onClick={() => handleDelete(el)}
						/>
					</div>)
				)
			}
		</>
	)
}

export default TagsContainer;
