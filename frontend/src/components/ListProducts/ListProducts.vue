<template>
  <div class="Main">
    <div class="TitleMain">{{title}}</div>
    <div class="DisplayData">
      <b-table 
      :data="produtosListados"
      default-sort="codProduto"
      hoverable
    >
      <template slot-scope="props">
        <b-table-column field="codProduto" label="Cód" sortable>
            {{ props.row.codProduto }}
        </b-table-column>
        <b-table-column field="transcricao" label="Nome" sortable>
            {{ props.row.transcricao }}
        </b-table-column>
        <b-table-column field="team" label="Ação">
            <PlusSquareIcon
              class="PlusSquareMain"
              @click="selectProduct(props.row.codProduto)"
            />
        </b-table-column>
      </template>
    </b-table>
    </div>
  </div>
</template>

<script lang="ts" src="./ListProducts.ts" />
<style lang="scss" src="./ListProducts.scss" />
