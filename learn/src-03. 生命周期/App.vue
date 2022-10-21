<template>
    <!--
        生命周期：
        1. vue3的生命周期改变了vue2中挂载流程的 beforeDestroy和destroyed 函数，改变为 beforeUnmount 和 unmounted.
        2. 在vue3中可以用配置项的形式编写生命周期函数，但也可以是用组合函数的形式在setup中编写生命周期函数。但是所有生命周期函数都需要改名
        3. 具体的变化如下
            beforeCreate ==>  setup()
            created ==> setup()
            beforeMount ==> onBeforeMount
            mounted ==> onMounted
            beforeUpdate ==> onBeforeUpdate
            updated ==> onUpdated
            beforeUnmount ==> onBeforeUnmount
            unmounted ==> onUnmounted
        4. 基本流程与vue2一致没有改变,只是减去了对是否包含el配置项的检查
    -->
    <div>
        <h2>app组件</h2><br/>
        <button @click="isShowStudent">显示、隐藏student组件</button>
        <Student v-if="isShow"></Student>
    </div>
</template>

<script>
import {ref} from 'vue';
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: {
        Student
    },
    
    setup(props, context) {
        let isShow = ref(true)
        let isShowStudent = function () {
            isShow.value = !isShow.value
        }
        return {
            isShow,isShowStudent,
        }
    }
}
</script>

<style>
</style>