import { Component, Vue } from 'vue-property-decorator';
import ListProducts from '@/components/ListProducts/ListProducts.vue';
import CategoryButton from '@/components/CategoryButton/CategoryButton.vue';
import { mapActions, mapGetters } from 'vuex';
import { Action, Getter } from 'vuex-class';

@Component({
	components: {
		ListProducts,
		CategoryButton,
	},
})
export default class MainPage extends Vue {
	@Action('selectProduct')
	public selectProduct?: (codProduto: number) => Promise<void>;

	@Action('deselectProduct')
	public deselectProduct?: (codProduto: number) => Promise<void>;

	@Action('setGroup')
	public setGroup?: (group: string) => void;

	@Getter('produtosProgramacao')
	public produtosProgramacao?: () => [];

	@Getter('produtosOrcamento')
	public produtosOrcamento?: () => [];

	@Getter('produtosInventario')
	public produtosInventario?: () => [];

	@Getter('produtosGestao')
	public produtosGestao?: () => [];

	@Getter('getSelecteds')
	public getSelecteds?: () => [];

	@Getter('getGroup')
	public getGroup?: () => string;
}
