import React from 'react';
import HeaderTitle from '../utils/HeaderTitle';
import DropDownMenu from '../utils/DropDownMenu';
import TagsContainer from '../utils/TagsContainer';

const DisplayData = ({ data, setData }) => {
	return (
		<div
			style={{
				width: '1000px',
				margin: '0 auto',
			}}
		>
			<HeaderTitle title={`Uploads`} />
			<div
				style={{
					border: '1px solid #F5F5F5',
					width: '100%',
					borderRadius: '8px',
					backgroundColor: '#F5F5F5',
					margin: '46px 0 199px 0',
				}}
			>
				<DataTable data={data} setData={setData} />
			</div>
		</div>
	)
}

const DataTable = ({ data, setData }) => {
	return (
		<>
			<div className='tableHead'>
				<span>Sl No.</span>
				<span>Links</span>
				<span>Prefix</span>
				<span>Add Tags</span>
				<span>Selected Tags</span>
			</div>

			{
				data.length !== 0 && data.map(({ id, links, prefix, selectTags, selectedTags }, index) => (
					<div key={index} className='tableData'>
						<span>{id < 10 ? '0' + id : id}</span>
						<span>
							<a href={`https://${links}/`} target={"_blank"} rel="noopener noreferrer">{links}</a>
						</span>
						<span>{prefix}</span>
						<span>
							<DropDownMenu
								id={id}
								selectTags={selectTags}
								data={data}
								setData={setData}
							/>
						</span>
						<span
							style={{
								// border: '1px solid red',
								width: '260px',
								display: 'flex',
								flexWrap: 'wrap',
								padding: '8px 0',
							}}
						>
							<TagsContainer
								id={id}
								selectedTags={selectedTags}
								data={data}
								setData={setData}
							/>
						</span>
					</div>
				))
			}

		</>
	)
}

export default DisplayData;