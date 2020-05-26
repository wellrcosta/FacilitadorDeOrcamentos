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

const p123 = new Product();
p123.id = 5;
p123.codProduto = 3230;
p123.grupo = 'Programação';
p123.item = 'Cut Plus';
p123.transcricao = 'Lantek Punch Plus';
p123.valor = 50000;

const prod2 = new Product();
prod2.id = 2;
prod2.codProduto = 3250;
prod2.grupo = 'Inventário';
prod2.item = 'Cut Plus';
prod2.transcricao = 'LanteASDk Cut Plus';
prod2.valor = 500500;

const prod3 = new Product();
prod3.id = 3;
prod3.codProduto = 3251;
prod3.grupo = 'Gestão';
prod3.item = 'Integra';
prod3.transcricao = 'Lantekinho';
prod3.valor = 500500;

export default new Vuex.Store({
	state: {
		//products: Array<Product>(),
		products: [produto1, prod2, prod3, p123],
		selected: Array<Product>(),
		group: 'Programação',
		totalValue: 0,
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
		addValue(state, newValue: number) {
			state.totalValue += newValue;
		},
		removeValue(state, newValue: number) {
			state.totalValue -= newValue;
		},
	},
	actions: {
		async selectProduct(context, codProduto: number) {
			let listSelectedNew = this.state.selected;
			let listProductsNew = this.state.products.filter(function(item) {
				if (item.codProduto === codProduto) {
					listSelectedNew.push(item);
					context.commit('addValue', item.valor);
				}
				return item.codProduto !== codProduto;
			});
			let Task: Promise<void>;
			Task = new Promise((resolve, reject) => {
				context.commit('setProducts', listProductsNew);
				context.commit('setSelected', listSelectedNew);
				resolve();
			});
			await Task;
		},
		async deselectProduct(context, codProduto: number) {
			let listProductsNew = this.state.products;
			let listSelectedNew = this.state.selected.filter(function(item) {
				if (item.codProduto === codProduto) {
					listProductsNew.push(item);
					context.commit('removeValue', item.valor);
				}
				return item.codProduto !== codProduto;
			});
			let Task: Promise<void>;
			Task = new Promise((resolve, reject) => {
				context.commit('setProducts', listProductsNew);
				context.commit('setSelected', listSelectedNew);
				context.state.selected;
				resolve();
			});
			await Task;
		},
		setGroup({ commit }, newGroup: string) {
			commit('setGroup', newGroup);
		},
	},
	getters: {
		produtos: (state) => {
			return state.products.filter(function(item: Product) {
				return item.grupo === state.group;
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
	strict: true,
});
