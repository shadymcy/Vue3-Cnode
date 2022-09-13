<template>
<!-- 条件 ? 结果1 : 结果2 -->
  <header :style="{backgroundColor: color? color : defaultColor}">
    {{title}}
  </header>
</template>

<script>
import {reactive} from '@vue/reactivity'
export default {
    props:{
        title: String,
        color: String
    },
    setup(props, ctx){
        // console.log(ctx)
        // setup 函数的第二个参数是一个上下文对象，
        // 这个上下文对象中包含了一些有用的属性，这些属性在 Vue2.0 中需要通过 this 才能访问到，在 vue3.0 中，访问他们变成以下形式：
        // console.log(this); // undefined
        const state = reactive({
            defaultcolor : 'red'
        })
        return {
            ...state
        }
    }
}
</script>

<style scoped>
    header{
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: center;
        color: white
    }

</style>