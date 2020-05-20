import React from 'react';

import RemoveItem from '../RemoveItem';

import { Input } from '@material-ui/core';

import './styles.css';

export default function ListProducts(props) {
	const unformattedData = props.data;
	let data;

	function count() {
		console.log('Contador');
	}

	data = unformattedData.map((item) => (
		<tr key={item.id}>
			<th id='1'>
				<Input defaultValue='1' id='MaterialInput' type='number' />
			</th>
			<th id='2'>{item.transcricao}</th>
			<th id='3'>
				<RemoveItem
					count={count}
					theme='light'
					removeFunction={props.functionRemove}
					targetValue={item.codProduto}
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
							<th style={{ width: '70px' }}>Qnt</th>
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
