<template>
	<div className="Main">
		<div className="TitleMain"></div>
		<div className="DisplayData">
			<!-- <table>
				<tr className="TableTitle">
					<th style="width: 70px">Cód</th>
					<th style="width: 400px">Nome</th>
					<th style="width: 70px">Ação</th>
				</tr>
				<tr  track-by="codProduto">
					<td>this.products.codProduto</td>
					<td>{{transcricao}}</td>
					<td>
						<PlusSquareIcon color="$green" class="PlusSquareMain" />
					</td>
				</tr>
			</table> -->
			<span v-for="prod in products" :key="prod.index">{{prod.toString()}}</span>
		</div>
	</div>
</template>

<script src="./ListProducts.ts" />

<style lang="scss" src="./ListProducts.scss" />
