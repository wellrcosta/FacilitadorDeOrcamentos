import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Colors from '../../colors';
import LogoSKA from '../../assets/img/LogoSKA.png';

import './main.css';

import CategoryButton from '../../components/CategoryButton';
import ListProduct from '../../components/ListProducts';
import ListAddedProducts from '../../components/ListAddedProducts';

export default function MainPage() {
	const [theme, setTheme] = useState('');
	const [listProducts, setListProducts] = useState([]);
	const [selectedProducts, setSelectedProducts] = useState([]);

	function handleSelectProduct() {
		const value = localStorage.getItem('@SelectProduct');
		console.log(value);
		let auxList = [];
		let auxSelected = selectedProducts;
		listProducts.map(function (item) {
			if (item.codProduto !== parseInt(value)) auxList.push(item);
			else auxSelected.push(item);
			return 0;
		});
		setSelectedProducts(auxSelected);
		setListProducts(auxList);
		localStorage.setItem('@SelectProduct', '');
	}

	function handleDeselectProduct() {
		const value = localStorage.getItem('@DeselectProduct');
		let auxList = listProducts;
		let auxSelected = [];
		selectedProducts.map(function (item) {
			if (item.codProduto !== parseInt(value)) auxSelected.push(item);
			else auxList.push(item);
			return 0;
		});
		setSelectedProducts(auxSelected);
		setListProducts(auxList);
		localStorage.setItem('@DeselectProduct', '');
	}

	async function ThemeSet() {
		localStorage.getItem('themeMode')
			? setTheme(localStorage.getItem('themeMode'))
			: setTheme('light');
	}

	function handleData() {
		//const data = await api.get('produto');
		let data = [
			{
				id: 1,
				codProduto: 3321,
				grupo: 'Grupo',
				item: 'Item',
				transcricao: 'Teste Transcrição 1',
				valor: 10.0,
				servicos: [],
			},
			{
				id: 2,
				codProduto: 3320,
				grupo: 'Grupo 2',
				item: 'Item',
				transcricao: 'Teste 2',
				valor: 10.0,
				servicos: [
					{
						codServico: 1,
						nomeServico: 'Serviço 2',
						cargaHoraria: 30,
						qtn: 1,
						valor: 10.0,
						ProdutoId: 2,
					},
					{
						codServico: 2,
						nomeServico: 'Serviço 1',
						cargaHoraria: 30,
						qtn: 1,
						valor: 10.0,
						ProdutoId: 2,
					},
				],
			},
		];
		setListProducts(data);
	}

	useEffect(() => {
		if (theme === '') ThemeSet();
		if (listProducts.length === 0) handleData();
	}, [theme, listProducts]);

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
						<ListProduct data={listProducts} function={handleSelectProduct} />
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
							function={handleDeselectProduct}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
