import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryButton extends Vue {
	@Prop() private text!: string;
}
