<template>
<div class="BlockMain">
  <div class="BlockHeader">
    <span class="TitleBlock">Metal</span>
    <span class="SubtitleBlock">Plataform</span>
  </div>
  <div class="BlockSeparator">
    <img :src="require('../../assets/separator1.png')" alt="" />
  </div>
  <div class="GroupBlocks">
  <div class="BlockLeft">
    <img :src="require('../../assets/LogoExpert.png')" alt="" class="ImgLogo" />
    <span class="titleBlock">Expert</span>
    <div class="CheckboxProducts">
      <p class="titulo-checkbox">TIPO DE MÁQUINA</p>
      <p class="checkbox-helper"><b-checkbox>CORTE</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>PUNCIONADEIRA</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>GUILHOTINA</b-checkbox></p>
      <p class="titulo-checkbox">IMPORTADORES ADICIONAIS</p>
      <p class="checkbox-helper"><b-checkbox>DSTV</b-checkbox></p>
      <p class="titulo-checkbox">EXPORTADORES ADICIONAIS</p>
      <p class="checkbox-helper"><b-checkbox>DXF DA CHAPA</b-checkbox></p>
      <p class="titulo-checkbox">INTEGRADOR</p>
      <p class="checkbox-helper"><b-checkbox>MASTERLINK</b-checkbox></p>
      <p class="titulo-checkbox">PLUGIN CAD 3D</p>
      <p class="checkbox-helper"><b-checkbox>SOLIDWORKS</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>SOLID EDGE</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>INVENTOR</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>CATIA</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>PROE/CREO</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>SIEMENS NX</b-checkbox></p>
    </div>
  </div>
  <div class="BlockRight">
    <img :src="require('../../assets/LogoFlex.png')" alt="" class="ImgLogo" />
    <span class="titleBlock">Flex3D</span>
    <div class="CheckboxProducts">
      <p class="titulo-checkbox">TIPO DE MÁQUINA</p>
      <p class="checkbox-helper"><b-checkbox>PERFIL</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>TUBOS</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>SERRA MANUAL</b-checkbox></p>
      <p class="titulo-checkbox">IMPORTADORES ADICIONAIS</p>
      <p class="checkbox-helper"><b-checkbox>DSTV</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>SAT 3D</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>SAT ADVANCED 3D</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>CAM</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>XML TEKLA</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>IGES</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>STEP</b-checkbox></p>
      <p class="checkbox-helper"><b-checkbox>IFC</b-checkbox></p>
      <p class="titulo-checkbox">MODULOS ADICIONAIS</p>
      <p class="checkbox-helper"><b-checkbox>DIVISION PARTS (EMENDAS)</b-checkbox></p>
    </div>
  </div>
    </div>
</div>
</template>

<script lang="ts" src="./ProductBlock.ts" />
<style lang="scss" src="./ProductBlock.scss" />