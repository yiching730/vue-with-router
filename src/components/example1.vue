<template>
<div id="app">
    <h1>父層藏好料</h1>
    <child @hungry="hungry" :dinner="dinner" /> 
</div>    
</template>

<script>
import child from '../components/child'
export default {
    components:{
        child
    },
    data(){
        return{
        dinner:[]
        } 
    },
    methods:{
        hungry(){
            alert('你的晚餐來了!')
            return this.dinner = ['漢堡','薯條','可樂']
        }
    }
}
</script>

<style>
#app {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
}
</style>