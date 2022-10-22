<template>
  <div class="dvmark" v-if="isShow">
    <div class="dvdialog">
        <div style="margin-top:100px">this is a dialog</div>
        <div style="margin:50px auto" @click="btnOk"><button>确定</button></div>
    </div>
  </div>
</template>

<script>
import { ref, defineExpose } from 'vue';
export default {
    name: 'Dialog',
    setup() {   
        let isShow = ref(true);
        function btnOk() {
            isShow.value = !isShow.value;
        }
        function showDialog() {
            isShow.value = !isShow.value;
        }
        return {
            isShow,btnOk,showDialog
        }
    }

}
</script>

<style>
.dvmark{
    position: absolute;
    top:0;bottom: 0;left: 0;right: 0;
    background-color: rgba(0,0,0,0.3);
}
.dvdialog{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: aquamarine;
    width:300px;
    height: 300px;
    text-align: center;

}
</style>