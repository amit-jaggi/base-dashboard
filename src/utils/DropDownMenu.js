// import React, { useState } from 'react'

const DropDownMenu = ({ id, selectTags, data, setData }) => {

	const handleSelectChange = (event) => {
		const tag = event.target.value

		let output = data.map(el => el.id === id
			? ({
				id: el.id,
				links: el.links,
				prefix: el.prefix,
				selectTags: el.selectTags.filter(item => item !== tag),
				selectedTags: [...el.selectedTags, tag],
			})
			: el
		);
		setData(output);
	};


	return (
		<div className='customSelect'>
			<select onChange={handleSelectChange}>
				{
					selectTags.length !== 0
						? (<>
							<option key={''} value={''}>Select Tag</option>
							{selectTags.map((el) => <option key={el} value={el}>{el}</option>)}
						</>)
						: (<option key={null} value=''>No Data</option>)
				}
			</select>
		</div>
	);
}

export default DropDownMenu;

