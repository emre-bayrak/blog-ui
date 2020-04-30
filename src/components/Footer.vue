<template>
  <a-layout-footer>
    <h2>This website has been created with VueJS ({{moment().format('YYYY')}})</h2>
  </a-layout-footer>
</template>

<style>
.ant-layout-footer {
  line-height: 1.5;
  background: #001529;
}
h2 {
  color: #FFF;
}
</style>