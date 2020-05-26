import { Component, Vue, Watch } from 'vue-property-decorator';
import Product from '@/models/products';
import { Action, Getter } from 'vuex-class';
import { XSquareIcon } from 'vue-feather-icons';

@Component({
	components: {
		XSquareIcon,
	},
})
export default class ListSelecteds extends Vue {
	@Getter('getSelecteds')
	public getSelecteds!: Array<Product>;

	@Action('deselectProduct')
	public deselectProduct!: (codProduto: number) => void;

	get produtosSelecionados(): Array<Product> {
		console.log(this.getSelecteds);
		return this.getSelecteds;
	}
	set produtosSelecionados(newArray: Array<Product>) {
		this.produtosSelecionados = newArray;
	}
	get title() {
		return 'Selecionados';
	}
}
