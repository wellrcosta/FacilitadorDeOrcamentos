import Service from './services';

export default class Product {
	id: number;
	grupo: string;
	codProduto: number;
	item: string;
	transcricao: string;
	valor: number;
	servicos: Array<Service>;

	constructor() {
		this.id = 0;
		this.grupo = '';
		this.codProduto = 0;
		this.item = '';
		this.transcricao = '';
		this.valor = 0;
		this.servicos = [];
	}
}
