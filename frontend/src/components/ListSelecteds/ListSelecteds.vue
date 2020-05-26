<template>
  <div class="Main">
    <div class="TitleMain">{{title}}</div>
    <div class="DisplayData" v-if="produtosSelecionados.length > 0">
      <b-table 
      :data="produtosSelecionados"
      default-sort="transcricao"
      hoverable
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" sortable>
            {{ props.row.id }}
        </b-table-column>
        <b-table-column field="transcricao" label="Nome" sortable>
            {{ props.row.transcricao }}
        </b-table-column>
        <b-table-column field="team" label="Ação">
            <XSquareIcon
              class="XSquare"
              @click="deselectProduct(props.row.codProduto)"
            />
        </b-table-column>
      </template>
    </b-table>
    </div>
    <div class="ElseStatement" v-else>
      Não possuem itens selecionados.
    </div>
  </div>
</template>

<script src="./ListSelecteds.ts" />
<style lang="scss" src="./ListSelecteds.scss" />
