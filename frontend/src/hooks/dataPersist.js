import React, { useState } from 'react';

const [listProducts, setListProducts] = useState([]);
const [selectedProducts, setSelectedProducts] = useState([]);

export function handleAddProduct() {
	const value = localStorage.getItem('itemForAdd');
	let auxList = [];
	let auxSelected = this.selectedProducts;
	this.listProducts.map(function (item) {
		if (item.codProd !== value) auxList.push(item);
		else auxSelected.push(item);
		return 0;
	});
	this.setSelectedProducts(auxSelected);
	this.setListProducts(auxList);
}

export function handleRemoveProduct() {
	const value = localStorage.getItem('itemForRemove');
	let auxList = listProducts;
	let auxSelected = [];
	selectedProducts.map(function (item) {
		if (item.codProd !== value) auxSelected.push(item);
		else auxList.push(item);
		return 0;
	});
	setSelectedProducts(auxSelected);
	setListProducts(auxList);
}
