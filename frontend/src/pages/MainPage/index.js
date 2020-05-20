import React, { useState, useEffect } from 'react';

import Database from '../../database.json';
import api from '../../services/api';

import Colors from '../../colors';
import LogoSKA from '../../assets/img/LogoSKA.png';

import './main.css';

import CategoryButton from '../../components/CategoryButton';
import ListProduct from '../../components/ListProducts';
import ListAddedProducts from '../../components/ListAddedProducts';

export default function MainPage() {
	const [theme, setTheme] = useState('');

	async function ThemeSet() {
		localStorage.getItem('themeMode')
			? setTheme(localStorage.getItem('themeMode'))
			: setTheme('light');
	}

	async function handleData() {
		const data = await api.get('products');
		setListProducts(data);
	}

	useEffect(() => {
		if (theme === '') ThemeSet();
		if (listProducts.length !== 0) handleData();
	}, [theme]);

	return (
		<div className='MainPage'>
			<div className='Header'>
				<img src={LogoSKA} alt='Logo SKA' className='ImgHeader' />
				<span className='TitleHeader'>Auxílio de orçamentos</span>
			</div>
			<div className='DataShow'>
				<div className='Groups'>
					<CategoryButton
						id='1'
						bgColor={Colors('primary', theme)}
						txtColor={Colors('white', theme)}
						text='Programação'
					/>
					<CategoryButton
						id='2'
						bgColor={Colors('primary', theme)}
						txtColor={Colors('white', theme)}
						text='Orçamento'
					/>
					<CategoryButton
						id='3'
						bgColor={Colors('primary', theme)}
						txtColor={Colors('white', theme)}
						text='Inventário'
					/>
					<CategoryButton
						id='4'
						bgColor={Colors('primary', theme)}
						txtColor={Colors('white', theme)}
						text='Gestão'
					/>
				</div>
				<div className='GroupLists'>
					<div
						className='ListItens'
						style={{
							marginBottom: '40px',
							backgroundColor: Colors('secondary', theme),
							borderRadius: '15px',
						}}
					>
						<ListProduct data={listProducts} addFunction={handleAddProduct} />
					</div>
					<div
						className='ListItens'
						style={{
							backgroundColor: Colors('secondary', theme),
							borderRadius: '15px',
						}}
					>
						<ListAddedProducts
							data={selectedProducts}
							functionRemove={handleRemoveProduct}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
