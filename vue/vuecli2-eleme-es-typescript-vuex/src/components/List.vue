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
    import { State, Getter, Action, Mutation } from 'vuex-class';
    import Component from 'vue-class-component'
    // import { fetchData } from './../common/ajax'
    import * as Types from './../store/types';
    @Component
    export default class List extends Vue {
        @State msg: string
        @State loading: boolean
        @State list: any
        created() {
            this.$store.dispatch(Types.GET_LIST);
        }

        refresh() {
            this.$store.dispatch(Types.GET_LIST);
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
