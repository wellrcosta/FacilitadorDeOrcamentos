import { Component, Prop, Vue } from 'vue-property-decorator';
import Product from '@/models/products';

@Component
export default class CategoryButton extends Vue {
	@Prop()
	public products?: [];
}
