import { Component, Vue, Watch } from 'vue-property-decorator';
import Product from '@/models/products';
import { Action, Getter } from 'vuex-class';
import { PlusSquareIcon } from 'vue-feather-icons';

@Component({
	components: {
		PlusSquareIcon,
	},
})
export default class ListProducts extends Vue {
	@Getter('produtos')
	public produtos!: Array<Product>;

	@Action('selectProduct')
	public selectProduct!: (codProduto: number) => void;

	get produtosListados(): Array<Product> {
		return this.produtos;
	}
	set produtosListados(newArray: Array<Product>) {
		this.produtosListados = newArray;
	}

	get title() {
		return 'Produtos';
	}
}
