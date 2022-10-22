import { onBeforeUnmount, onMounted, reactive } from '@vue/runtime-core';
export default function (param) {
    let mpoint = reactive({ x: 0, y: 0 });
    function savePotin(event) {
        mpoint.x = event.pageX;
        mpoint.y = event.pageY;
        param.title = param.title + '-hook';
        console.log('param', param);
        console.log('mouse click point,', event.pageX, event.pageY);
    }
    onMounted(() => {
        window.addEventListener('click', savePotin);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePotin);
    });
    //使用hook一定要给当前函数返回信息
    return { mpoint, param };
}
