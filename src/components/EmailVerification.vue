<template>
  <div class="hello">
    <h1 class="text-center">Enter your OTP</h1>
    <h6 class="text-center">For your security, we need to verify your identity. We sent a 5-digit<br>
             code to name@domain.com. Please enter it below.</h6>
    <div class="center">
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailVerification',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
