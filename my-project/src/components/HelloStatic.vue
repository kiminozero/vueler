<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="img_box">
      <!-- <img width="400px" height="100%" src="../../static/1.jpg"> -->
      <img width="400px" height="100%" v-for="img in imgs" :key="img" :src="img">
    </div>
    <h2>Essential Links</h2>
    <div @click="click3">
      click3 me
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloStatic',
  data () {
    return {
      msg: 'Welcome Static ',
      imgs: [
        '../../static/1.jpg',
        '../../static/2.jpg',
        '../../static/3.jpg'
      ],
      content: ''
    }
  },
  methods: {
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
