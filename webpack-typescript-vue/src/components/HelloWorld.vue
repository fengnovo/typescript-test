<template>
    <div class="boss-zt-right-slide">
        <div class="sidebar" :class="[sidebar]">
            <div class="rs-bg sidebar-right">
                <div class="list">
                    <div class="list-header">
                        <span class="title">物料库</span>
                        <el-button size="small">刷新</el-button><br/>
                        <span>没有合适的物料？去使用<a href="https://www.baidu.com" target="_blank">视频制作工具新建</a></span>
                    </div>
                    <ul class="list-body">
                        <li class="list-item" v-for="(item, index) in arr" :key="index" :class="{'selected':item.selected}" @click="select(index)">
                            <div class="list-item-desc">
                                <p>物料名称：5月连衣裙新款</p>
                                <p>物料ID：1231345</p>
                                <p>模板类型：横屏</p>
                                <p>模板风格：幻灯片</p>
                            </div>
                            <div class="list-item-img">
                                <div class="list-item-img-mask" @click="openVideo"></div>
                                <img src="http://t1.baidu.com/it/u=734544646,2536530213&fm=20"/>
                            </div>
                        </li>
                        <!-- <li class="list-item">
                            <div class="list-item-desc">
                                <p>物料名称：5月连衣裙新款</p>
                                <p>物料ID：1231345</p>
                                <p>模板类型：横屏</p>
                                <p>模板风格：幻灯片</p>
                            </div>
                            <div class="list-item-img">
                                <div class="list-item-img-mask" @click="openVideo"></div>
                                <img src="http://t1.baidu.com/it/u=734544646,2536530213&fm=20"/>
                            </div>
                        </li> -->
                    </ul>
                    <div class="list-footer">
                        <el-button size="small" @click="closeSlide">确定</el-button>
                        <el-button size="small" plain @click="closeSlide">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="div-pop" v-show="divpop" @click="closeSlide()"></div>
        <el-dialog
            title="视频预览"
            :visible.sync="centerDialogVisible"
            width="680px"
            center>
            <video
                v-if="centerDialogVisible"
                :src="'https://vd1.bdstatic.com/mda-hasv7rhrujsst1cv/mda-hasv7rhrujsst1cv.mp4?auth_key=1526216095-0-0-38626c1f69f19fce894f2da63b6dcba2&amp;bcevod_channel=searchbox_feed&amp;pd=alading'"
                style="max-width:640px; max-height: 360px;"
                x-webkit-airplay="true"
                webkit-playsinline="true" 
                poster=${imgjfsurlTemp}
                preload="null"
                autoplay
                controls="controls"></video>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button, Dialog } from 'element-ui';
import Component from 'vue-class-component';

Vue.use(Button);
Vue.use(Dialog);

@Component({
    props: {
        title: String
    }
})
export default class HelloWorld extends Vue {
    // initial data
    divpop = false
    sidebar = 'slideRight'
    centerDialogVisible = false
    arr = Array(11).fill({selected: false});

    // use prop values for initial data
    // title = 'Hello, ' + this.title

    // lifecycle hook
    mounted () {
      // this.greet()
    }

    // computed
    // get computedMsg () {
    //     return 'computed ' + this.title
    // }

    // method
    openSlide() {
        let body: HTMLElement = document.body;
        if (this.sidebar === 'slideRight') {
            this.divpop = true;
            this.sidebar = 'slideLeft';
            body.classList.add('body-hidden');
        } else {
            this.divpop = false;
            this.sidebar = 'slideRight';
            body.classList.remove('body-hidden');
        }
    }
    closeSlide() {
        this.divpop = false;
        this.sidebar = 'slideRight';
        let body: HTMLElement = document.body;
        let rsbgs: NodeList = document.getElementsByClassName('rs-bg');
        body.classList.remove('body-hidden');
        // 如果子组件slot定义了关闭时需要触发的方法changeOpenSlideFlag方法，就调用子组件的该方法
        // this.$children && this.$children[0] && this.$children[0].changeOpenSlideFlag && this.$children[0].changeOpenSlideFlag();
        this.$nextTick(()=>{
            //关闭时，滚动到顶部
            let rS = Array.from(rsbgs);
            rS.forEach((item: Node, index: number, array: Node[]): void => {
                (<any>item).scrollTop = 0;
            })
        })
    }
    openVideo() {
        this.centerDialogVisible = true;
    }
    select(i) {
        this.arr = this.arr.map((item, ii) => {
            return ii === i ? {selected: true} : {selected: false}
        })
    }
}
</script>

<style lang="scss" scoped>
.boss-zt-right-slide {
    .sidebar {
        width: 440px;
        height: 100%;
        min-width: 120px;
        display: inline-block;
        margin: 0px;
        top: 0;
        right: -900px;
        position: fixed;
        z-index: 4;
    }
    .sidebar .sidebar-right {
        width: 440px;
        display: inline-block;
        height: 100%;
        z-index: 4;
    }
    .rs-bg {
        background-color: #fff;
        overflow: auto;
        z-index: 5;
    }
    .slideLeft {
        transform: translate(-900px, 0px);
        transition-delay: 0s;
        transition-timing-function: ease;
        transition-duration: .5s;
        z-index: 5;
    }
    .slideRight {
        transform: translate(-0px, 0px);
        transition-delay: 0s;
        transition-timing-function: ease;
        transition-duration: .5s;
        z-index: 5;
    }
    .div-pop {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 4;
    }
    .list {
        padding: 10px;
        font-size: 14px;
        .list-header {
            height: 70px;
            line-height: 40px;
            padding: 0 20px;
            .title {
                font-size: 20px;
                font-weight: bold;
                margin-right: 20px;
            }
            button {
                width: 100px;
            }
        }
        .list-body{
            list-style: none;
            margin: 0;
            padding: 10px 0;
            .list-item {
                display: inline-block;
                list-style: none;
                margin: 10px 0;
                padding: 0 10px;
                width: 380px;
                border: 1px solid #ccc;
                .list-item-desc {
                    float: left;
                    width: 200px;
                }
                .list-item-img {
                    float: right;
                    cursor:pointer;
                    position:relative;
                    margin: 10px;
                    img {
                        width: 150px;
                        height: 120px;
                    }
                }
                .list-item-img:hover .list-item-img-mask{
                    width:150px; 
                    height:120px;
                    position:absolute; 
                    bottom:0px; 
                    left:0px;  
                    top: 0;
                    background:rgba(0, 0, 0, 0.6);
                    background-image: url(../assets/play.png); 
                    background-position: center;
                    background-size: 40%;
                    background-repeat: no-repeat;
                    display:block;
                }
            }
            .selected {
                border: 1px solid red;
            }
        }
        .list-footer {
            margin: 10px 0 30px 0;
            text-align: center;
            button {
                width: 150px;
                height: 40px;
            }
        }
    }
}
</style>

<style>
.body-hidden {
    overflow:hidden;
}
</style>
