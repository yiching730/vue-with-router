<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">回首頁</router-link> |
      <router-link to="/news">最新消息</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/content">內容</router-link>
    </div>
    <Breadcrumb />
    <router-view/>
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb'
export default {
  name: 'about',
  components: {
    Breadcrumb
  }
}
</script>

<style scoped>
  #nav {
    background: #42b983;
    padding: 20px;
    text-align: center;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>