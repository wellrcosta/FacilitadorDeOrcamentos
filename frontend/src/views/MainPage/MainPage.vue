<template>
  <div class="MainPage">
    <div class="Header">
      <img :src="require('../../assets/LogoSKA.png')" alt="Logo SKA" class="ImgHeader" />
    </div>
    <!-- <div class="DataShow">
      <div class="Groups">
        <CategoryButton text="Programação" v-on:click.native="setGroup('Programação')" />
        <CategoryButton text="Orçamentos" v-on:click.native="setGroup('Orçamentos')" />
        <CategoryButton text="Inventário" v-on:click.native="setGroup('Inventário')" />
        <CategoryButton text="Gestão" v-on:click.native="setGroup('Gestão')" />
      </div>
      <div class="ListItens">
      <div class="ListedItens" style="margin-bottom: 40px">
        <ListProducts />
      </div>
      <div class="ListedItens" style="margin-top: 40px">
        <ListSelecteds />
      </div>
      <div class="ListedItens" style="margin-top: 40px">
        <ContractTime />
      </div>
      <div style="margin-top: 40px">
        <NextButton />
      </div>
      </div>
    </div> -->
    <div class="BlocksOfContent">
      <ProductBlock />
      <ProductBlock />
    </div>
  </div>
</template>

<script lang="ts" src="./MainPage.ts" />
<style lang="scss" src="./MainPage.scss" />
