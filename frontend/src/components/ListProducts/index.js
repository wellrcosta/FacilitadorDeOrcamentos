import React from 'react';

import AddItem from '../AddItem';

import './styles.css';

export default function ListProducts(props) {
	const unformattedData = props.data;
	let data;

	function count() {
		console.log('Contador');
	}

	data = unformattedData.map((item) => (
		<tr key={item.id}>
			<th>{item.codProduto}</th>
			<th>{item.transcricao}</th>
			<th>
				<AddItem
					count={count}
					theme='light'
					addFunction={props.addFunction}
					codProduto={item.codProduto}
				/>
			</th>
		</tr>
	));

	return (
		<div className='Main'>
			<div className='TitleMain'></div>
			<div className='DisplayData'>
				<table>
					<tbody>
						<tr className='TableTitle'>
							<th style={{ width: '70px' }}>Cód</th>
							<th style={{ width: '400px' }}>Nome</th>
							<th style={{ width: '70px' }}>Ação</th>
						</tr>
						{data}
					</tbody>
				</table>
			</div>
		</div>
	);
}
