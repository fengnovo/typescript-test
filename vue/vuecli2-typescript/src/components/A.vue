<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h3>今年是: {{yearNumber}} 年</h3>
  </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator"
  // const s = Symbol(baz)
  interface Person {

  }
  @Component
  export class MyComponent extends Vue {  
    @Emit()
    addToCount(n: number){ 
      this.msg += n 
    }  
    @Emit(reset)
    resetCount(){ 
      this.msg = 0 
    }  
    @Inject() 
    foo: string  
    @Inject(bar) 
    bar: string  
    @Inject(s) 
    baz: string  
    @Model(change) 
    checked: boolean  
    @Prop()
    propA: number  
    @Prop()  
    propB: string  
    @Prop([String, Boolean])  
    propC: string | boolean  
    @Provide() 
    foo = foo  
    @Provide(bar) 
    baz = bar  
    @Watch(child)  
    onChildChanged(val: string, oldVal: string) {

    }  
    @Watch(person, { immediate: true, deep: true })  
    onPersonChanged(val: Person, oldVal: Person) {

    }
  }

</script>