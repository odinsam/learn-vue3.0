<template>
    <div>
        <h2>app组件</h2>
        <Student></Student>
    </div>
</template>

<script>
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: {
        Student
    },
    setup(props,context) {
        return {
            
        }
    }
}
</script>

<style>
</style>