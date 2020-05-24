<template>
	<div class="MainPage">
		<div class="Header">
			<img
				:src="require('../../assets/LogoSKA.png')"
				alt="Logo SKA"
				class="ImgHeader"
			/>
			<span class="TitleHeader">Auxílio de orçamentos</span>
		</div>
		<div class="DataShow">
			<div class="Groups">
				<CategoryButton
					text="Programação"
					v-on:click.native="setGroup('Programação')"
				/>
				<CategoryButton
					text="Orçamentos"
					v-on:click.native="setGroup('Orçamentos')"
				/>
				<CategoryButton
					text="Inventário"
					v-on:click.native="setGroup('Inventário')"
				/>
				<CategoryButton text="Gestão" v-on:click.native="setGroup('Gestão')" />
			</div>
			<div class="ListItens" style="margin-bottom: 40px">
				<ListProducts
					v-if="getGroup === 'Programação'"
					product:produtosProgramacao
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./MainPage.ts" />
<style lang="scss" src="./MainPage.scss" />
