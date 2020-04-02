<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <div v-bind:class="color">test..d</div>
    <p>{{number+1}}</p>
    <p>{{ok ? 'yes' : 'no'}}</p>
    <p>{{message.split('').reverse().join('') }}</p>
    <p v-if="seen">现在你看到我了</p>
    <a v-bind:href="url">linkto</a>
    <a v-on:click="doSomething">...</a>
    <div @click="click1">
      <div @click.stop="click2">
        click me
      </div>
    </div>
    <h2>Essential Links</h2>
    <div @click="click3">
      click3 me
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
      this.axios.get('http://localhost:1323/users')
        .then(response => {
          this.content = response.data
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{color: red;}
.blue{color: blue; font-size: 100px;}
h1, h2 {
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
