<template>
    <div>
        <h2>Student组件</h2>
        <div>
            <h3>{{person}}</h3>
            <h3>姓名:{{name}}</h3>
            <h3>年龄:{{age}}</h3>
            <h3>薪资:{{salary}}K</h3>
            <button @click="person.name+='~'">修改姓名</button>
            <button @click="person.age++">修改年龄</button>
            <button @click="person.job.j.salary++">修改薪资</button>
        </div>
    </div>
</template>
  
<script>
import { reactive, toRef, toRefs } from '@vue/reactivity'
/**

*/
export default {
    name: 'Student',
    setup(props, context) {
        let person = reactive({
            name: 'odinsam',
            age: 20,
            job: {
                j: {
                    salary:50
                }
            }
        })
        return {
            person,
            ...toRefs(person),
            salary:toRef(person.job.j,'salary')
        }
    }
}
</script>
  
<style>
</style>