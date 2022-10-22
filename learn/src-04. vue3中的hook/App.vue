<template>
    <div>
        <h2>app组件</h2>
        <button @click="isShowStuCpm">显示、隐藏student组件</button>
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
        let isShowStuCpm = function () {
            isShow.value = !isShow.value
        }
        return {
            isShow,isShowStuCpm
        }
    }
}
</script>

<style>
</style>