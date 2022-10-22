<template>
    <div>
        <h2>Student组件</h2><br/>
        <input type="text" v-model="msg"><br/>
        <span>数据：{{msg}}</span>
    </div>
</template>
  
<script>
import { customRef } from 'vue'
/**

*/
export default {
    name: 'Student',
    setup(props, context) {
        function myref(value) {
            let timer;
            return customRef((track, trigger) => {
                return {
                    get() {
                        // 通知vue跟踪value的变化
                        track();
                        return value;
                    },
                    set(newValue) {
                        clearTimeout(timer)
                        timer = setInterval(() => {
                            value = newValue;
                            // 通知vue重新解析模板
                            trigger()
                        }, 500);
                    }
                }
            })
        }
        let msg = myref('')
        return {
            msg
        }
    }
}
</script>
  
<style>
</style>