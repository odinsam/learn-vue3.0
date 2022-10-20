<template>
    <div>
        <h2>app组件</h2>
        <p></p>
        <div>自定义方法的参数:{{cstmParam.customEventParam}}</div>
        <Student propa="propa传值" @cmpEvent="cmpEvent">
            <!--vue3中 需要使用 v-slot:插槽名 的方式定义  不能使用 slot='操作名' 的vue2形式-->
            <template v-slot:slotStu>
                <div style="background-color:aquamarine">
                    <span>插槽内容</span>   
                </div>
            </template>
        </student>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: {
        Student
    },
    setup() {
        let cstmParam = reactive({})
        function cmpEvent(param) {
            cstmParam['customEventParam'] = param['customEventParam']
        }
        return {
            cstmParam,
            cmpEvent,
        }
    }
}
</script>

<style>
</style>