<template>
  <div>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <div style="height: 900px;">sfas</div>
    <p>msg: {{msg}}</p>
    <div class="box">
        <div class="bmbox">文字</div>
    </div>
    <p>computed msg: {{computedMsg}}</p>
    <HelloWorld message="swgberber" ref="detailSlide">
    </HelloWorld>
    <el-button type="primary" @click="greet" plain>主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button } from 'element-ui';
import Component from 'vue-class-component';
// import { Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(Button);

@Component({
    props: {
        propMessage: String
    },
    components: {
        HelloWorld
    }
})
export default class App extends Vue {
    constructor(...args) {
       super(...args);
    }

    // @Prop({ default: 'default value' })
    // propMessage: string

    // initial data
    msg = 123

    // use prop values for initial data
    // helloMsg = this.propMessage

    // lifecycle hook
    mounted () {
      // this.greet()
    }

    // computed
    get computedMsg () {
        return 'computed ' + this.msg
    }

    // method
    greet () {
        let ds:any = this.$refs.detailSlide;
        ds.openSlide();
    }

    // dynamic component
    // $refs!: {
    //     HelloWorld: detailSlide
    // }
}
</script>
<style scoped>
.box{ 
  width:300px;
  height:200px;
  position:relative;
  background:red;
  cursor:pointer;
 }
/* .box .bmbox{ 
  width:0; 
  height:0; 
  background:rgba(255,255,255,0.2); 
  position:absolute; 
  bottom:0px; 
  left:0px; 
  display:none;
  font:12px/30px "宋体"; color:white;
  text-align:center;
 } */
.box:hover .bmbox{
  width:300px; 
  height:200px; 
  background:rgba(255,255,255,0.2); 
  position:absolute; 
  bottom:0px; 
  left:0px; 
  display:block;
  font:12px/30px "宋体"; color:white;
  text-align:center;
 }
</style>

