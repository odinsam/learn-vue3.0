<template>
    <div>
        <h2>{{title}}</h2>
        <div>点击的鼠标的坐标是:{{mpoint.x}},{{mpoint.y}}</div>
        <div>hook中回传的信息:{{param.title}}</div>
    </div>
</template>
  
<script>
/**

*/
import { ref } from 'vue';
//引入自定义hook函数
import usePoint from '../hooks/usePoint';
export default {
    name: 'Student',
    setup(props, context) {
        let title = ref('Student组件')
        let {mpoint,param } = usePoint({title:title.value});
        return {
            title,mpoint,param
        }
    }
}
</script>
  
<style>
</style>