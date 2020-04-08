<template>
  <div>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-input placeholder="请输入内容" v-model="msg.u" clearable></el-input>
    <el-input placeholder="请输入内容" v-model="msg.data" clearable></el-input>
    <!-- <button @click="send">发消息</button> -->
    <el-button type="primary" @click="send" >发消息</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: "",
      msgs: ['',],
      msg: {
        u: "Tom",
        data: 'sdasdasd'
      },
      username: '',
      data: '',
      
      textarea: ''
    }
  },
  mounted() {
    // 初始化
    this.init()
  },
  methods: {
    init: function () {
      if (typeof (WebSocket) === "undefined") {
        alert("您的浏览器不支持socket")
      } else {
        // 实例化socket
        this.socket = new WebSocket(`ws://localhost:8080/ws`);
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      console.log("socket连接成功")
    },
    error: function () {
      console.log("连接错误")
    },
    getMessage: function (msg) {
      // this.msg = msg.data
      var j = JSON.parse(msg.data)
      this.textarea += "\n" + j.u + ": " + j.data
      console.log(j)
      // console.log(msg)
    },
    send: function () {
      // this.socket.send(this.username + ":" + this.data)
      this.socket.send(JSON.stringify(this.msg))
      this.msg.data = ''
    },
    close: function () {
      console.log("socket已经关闭")
    }
  },
  destroyed() {
    // 销毁监听
    this.socket.onclose = this.close
  }
}
</script>

<style>
</style>
