<template>
  <div class="ul-warp">
    <ul v-loading="loading">
      <li v-for="(item, index) in list" :key="index">
        {{ item.title }}
      </li>
    </ul>
    <el-button type="primary" @click="refresh">刷新</el-button>
  </div>
</template>

<script lang="ts">
  import Vue, {ComponentOptions} from 'vue'
  import Component from 'vue-class-component'
  import { fetchData } from './../common/ajax'

  @Component
  export default class List extends Vue {
    msg: string = '列表加载中...'
    loading: boolean = true
    list: object[] = []
    
    created() {
      this.refresh();
    }
    async refresh() {
      this.loading = true;
      try {
        let data: any = await fetchData();
        console.log(data);
        this.loading = false;
        this.msg = '';
        if (data && data.data && data.data.data && data.data.data.length > 0) {
          this.list = data.data.data;
        }
      } catch (e) {
        this.loading = false;
        console.error(e);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ul-warp {
  ul {
    min-height: 100px;
  }
}
</style>
