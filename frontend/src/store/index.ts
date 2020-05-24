import Vue from 'vue';
import Vuex from 'vuex';

import Product from '@/models/products';

Vue.use(Vuex);

const produto1 = new Product();
produto1.id = 1;
produto1.codProduto = 3200;
produto1.grupo = 'Programação';
produto1.item = 'Cut Plus';
produto1.transcricao = 'Lantek Cut Plus';
produto1.valor = 50000;

const prod2 = new Product();
prod2.id = 2;
prod2.codProduto = 3250;
prod2.grupo = 'Programação';
prod2.item = 'Cut Plus';
prod2.transcricao = 'LanteASDk Cut Plus';
prod2.valor = 500500;

export default new Vuex.Store({
	state: {
		//products: Array<Product>(),
		productsAll: [produto1, prod2],
		products: Array<Product>(),
		selected: Array<Product>(),
		group: 'Programação',
	},
	mutations: {
		setProducts(state, data: Array<Product>) {
			state.products = data;
		},
		setSelected(state, data: Array<Product>) {
			state.selected = data;
		},
		setGroup(state, newValue: string) {
			state.group = newValue;
		},
	},
	actions: {
		async selectProduct(context, codProduto: number) {
			let listSelectedNew = this.state.selected;
			let listProductsNew = this.state.products.filter(function(item) {
				if (item.codProduto === codProduto) listSelectedNew.push(item);
				return item.codProduto !== codProduto;
			});
			let Do: Promise<void>;
			Do = new Promise((resolve, reject) => {
				context.commit('setProducts', listProductsNew);
				context.commit('setSelected', listSelectedNew);
				resolve();
			});
			await Do;
		},
		async deselectProduct(context, codProduto: number) {
			let listProductsNew = this.state.products;
			let listSelectedNew = this.state.selected.filter(function(item) {
				if (item.codProduto === codProduto) listProductsNew.push(item);
				return item.codProduto !== codProduto;
			});
			let Do: Promise<void>;
			Do = new Promise((resolve, reject) => {
				context.commit('setProducts', listProductsNew);
				context.commit('setSelected', listSelectedNew);
				resolve();
			});
			await Do;
		},
		setGroup(context, newGroup: string) {
			console.log('Clicked');
			context.commit('setGroup', newGroup);
		},
	},
	getters: {
		produtosProgramacao: (state) => {
			const produtos = state.products.filter(function(item) {
				return item.grupo === 'Programação';
			});
			return produtos;
		},
		produtosOrcamento: (state) => {
			const produtos = state.products.filter(function(item) {
				return item.grupo === 'Orçamento';
			});
			return produtos;
		},
		produtosInventario: (state) => {
			return state.products.filter(function(item) {
				return item.grupo === 'Inventário';
			});
		},
		produtosGestao: (state) => {
			return state.products.filter(function(item) {
				return item.grupo === 'Gestão';
			});
		},
		getSelecteds: (state) => {
			return state.selected;
		},
		getGroup: (state) => {
			return state.group;
		},
	},
	modules: {},
});
