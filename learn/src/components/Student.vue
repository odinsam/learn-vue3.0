<template>
    <div>
        <h2>Student组件</h2>
        <button @click="btnShowDialog">showDialog</button>
        <Teleport to="body">
            <!--使用ref标识子组件-->
            <Dialog ref="showDialog"></Dialog>
        </Teleport>
    </div>
</template>
  
<script>
/**

*/
import {defineAsyncComponent, ref} from 'vue';
import Dialog from './dialog.vue';

export default {
    name: 'Student',
    components:{Dialog},
    setup(props, context) {
        let showDialog = ref(null)
        function btnShowDialog() {
            //调用子组件的方法
            showDialog.value.showDialog();
        }
        return {
            showDialog,btnShowDialog
        }
    }
}
</script>
  
<style>
</style>