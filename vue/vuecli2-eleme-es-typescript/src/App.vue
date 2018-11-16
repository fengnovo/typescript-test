<template>
  <div id="app">
    <List/>
  </div>
</template>

<script lang="ts">
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  },
  created() {
    console.log(12);
      function *gen () {
        yield 1
        yield 2
        return 3
      }

      const g = gen()   // Iterator对象
      console.log(g.next()) // {value: 1, done: false}
      console.log(g.next()) // {value: 2, done: false}
      console.log(g.next()) // {value: 3, done: true}
    let site:string[] = ['runoob', 'google', 'taobao'];
 
    console.log(site.includes('runoob')); 
    if (process.env.NODE_ENV !== 'production') {
        console.log('SDFSADFSD'); 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
