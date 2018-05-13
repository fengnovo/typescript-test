<template>
  <div>
    <el-button type="primary" @click="greet" plain>主要按钮</el-button>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Dialog, Button } from 'element-ui';

Vue.use(Dialog);
Vue.use(Button);

@Component({
    props: {
        propMessage: String
    }
})
export default class App extends Vue {
    constructor(...args) {
       super(...args);
    }
    msg = 123
    dialogVisible = false
    greet () {
        // let ds:any = this.$refs.detailSlide;
        // ds.openSlide();
        this.dialogVisible = true;
    }
}
</script>
