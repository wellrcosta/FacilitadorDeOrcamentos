import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import ListProducts from '@/components/ListProducts/ListProducts.vue';
import ListSelecteds from '@/components/ListSelecteds/ListSelecteds.vue';
import CategoryButton from '@/components/CategoryButton/CategoryButton.vue';
import ContractTime from '@/components/ContractTime/ContractTime.vue';
import NextButton from '@/components/NextButton/NextButton.vue';
import ProductBlock from '@/components/ProductBlock/ProductBlock.vue';

@Component({
	components: { ProductBlock },
})
export default class MainPage extends Vue {
	@Action('selectProduct')
	public selectProduct?: (codProduto: number) => Promise<void>;

	@Action('deselectProduct')
	public deselectProduct?: (codProduto: number) => Promise<void>;

	@Action('setGroup')
	public setGroup?: (group: string) => void;

	@Getter('produtos')
	public produtos?: () => [];

	@Getter('getGroup')
	public getGroup?: () => string;
}
