<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div @click="click3">click3 me</div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="click3">主要按钮</el-button>
      <el-button type="success" @click="click4">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Hello2',
  data () {
    return {
      msg: 'Welcome hghhhhhh ',
      rawHtml: '<span style="color:red">this should be red</span>',
      color: 'blue',
      number: 10,
      ok: false,
      message: 'vue',
      seen: 1,
      url: 'http://localhost:8080',
      content: ''
    }
  },
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      console.log(this.$route.params.username)
      return this.$route.params.username
    }
  },
  methods: {
    click1: function () {
      console.log('"click1"')
    },
    click2: function () {
      console.log('"click2"')
    },
    doSomething: function () {
      console.log('"doSomething"')
    },
    click3: function () {
      console.log('"click3"')
      this.axios
        .get('http://localhost:1323/users')
        .then(response => {
          this.content = response.data
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    click4 () {
      console.log(this.$route.params.username)
      return this.$route.params.username
    }
  },
  // created: function ()
  created () {
    console.log('created')
    console.log(this.$route.params.username)
    // this.axios.get('http://localhost:1323/users')
    //   .then(response => {
    //     this.$content = response.data
    //     console.log(response.data)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
  font-size: 100px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
