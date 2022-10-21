<template>
    <div>
        <h2>Student组件</h2><br/>
        <span>increment: {{sum}}</span><br/>
        <button @click="btnIncrement">increment</button><br/>
        
        <hr />
    </div>
</template>
  
<script>
/**

*/
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';
export default {
    name: 'Student',
    //vue2配置项的形式编写生命周期函数
    // beforeCreate() {
    //     console.log('---beforeCreate---');
    // },
    // created() {
    //     console.log('---beforeCreate---');
    // },
    // beforeMount() {
    //     console.log('---beforeMount---');
    // },
    // mounted() {
    //     console.log('---mounted---');
    // },
    // beforeUpdate() {
    //     console.log('---beforeUpdate---');
    // },
    // updated() {
    //     console.log('---updated---');
    // },
    // beforeUnmount() {
    //     console.log('---beforeUnmount---');
    // },
    // unmounted() {
    //     console.log('---unmounted---');
    // },
    setup(props, context) {
        let sum = ref(0)
        let btnIncrement = function () {
            sum.value++;
        }
        //组合api形式编写生命周期函数
        onBeforeMount(() => {
            console.log('---onBeforeMount---');
        })
        onMounted(() => {
            console.log('---onMounted---');
        })
        onBeforeUpdate(() => {
            console.log('---onBeforeUpdate---');
        })
        onUpdated(() => {
            console.log('---onUpdated---');
        })
        onBeforeUnmount(() => {
            console.log('---onBeforeUnmount---');
        })
        onUnmounted(()=>{
            console.log('---onUnmounted---');
        })
        return {
            sum,btnIncrement
        }
    }
    
}
</script>
  
<style>
</style>