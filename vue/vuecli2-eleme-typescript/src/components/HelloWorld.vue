<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" disabled>主要按钮</el-button>
  </div>
</template>

<script lang="ts">
  import Vue, {ComponentOptions} from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class Hello extends Vue {
    msg: string = '现在是使用typescript'    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  h1 {
    color: red;
  }
}
</style>
