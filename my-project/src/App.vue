<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/">Go to Foo </router-link>
    <span> &ensp;  </span>
    <router-link to="/Hello2/Tom">Go to Bar</router-link>
    </p>
    <div id="nav" class="container">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><router-link to="/">Go to Foo </router-link></li>
        <li role="presentation"><router-link to="/Hello2/Tom">Go to Tom</router-link></li>
        <li role="presentation"><router-link to="/Hello2/Jerry">Go to Jerry</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {

}
</style>
