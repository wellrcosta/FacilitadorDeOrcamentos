export default class Service {
	id: number;

	codServico: number;

	nomeServico: string;

	cargaHoraria: number;

	qnt: number;

	valor: number;

	constructor() {
	  this.id = 0;
	  this.codServico = 0;
	  this.nomeServico = '';
	  this.cargaHoraria = 0;
	  this.qnt = 0;
	  this.valor = 0;
	}
}
