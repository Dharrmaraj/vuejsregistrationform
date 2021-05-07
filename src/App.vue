<template>
  <div id="app">
    <div class="container">
      <ul class="progressbar">
        <li v-bind:class="{ active: isActive==1 }" @click="isclass(1,'Personal')"> Personal Details</li>
        <li v-bind:class="{ active: isActive==2 }" @click="isclass(2,'Company')"> Company Details</li>
        <li v-bind:class="{ active: isActive==3 }" @click="isclass(3,'EmailVerification')"> Email Verificcation</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isActive:1
    }
  },
  methods:{
    isclass:function(data,route){
      if(this.isActive!=data){
        this.isActive=data;
        this.$router.push({ path: route })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  width:100%;
  height: 60px;
  background: #2E4B64;
  display: inline-block;
  margin: -8px;
}
.progressbar{
  counter-reset: step;
}
.progressbar li{
  list-style-type: none;
  float:left;
  width:33.3%;
  position: relative;
  text-align:center;
  font-weight:200;
  color: rgba(255, 255, 255, 0.7);
}

.progressbar li:before{
  content:counter(step);
  counter-increment: step;
  height:30px;
  width:30px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%; 
  background-color: #3d4348;
  cursor:pointer;
}
.progressbar li.active::before,.progressbar li.active::after{
  color: #FFFFFF;
  font-weight: 300;
  background-color: #ED5901;
}
.progressbar li.active{
  color: #FFFFFF;
  font-weight: 300;
}
.progressbar li:after{
  content:’’;
  position: absolute;
  width:100%;
  height:2px;
  background-color: #3d4348;
  top: 15px;
  left: -50%;
  z-index: -1; 
  cursor:pointer;
}
.text-center{
  text-align: center;
}
.center{
  margin: auto;
  width: 40%;
  padding: 10px;
  background: #ffff;
}
body{
  background: #f9f3f3;
}

</style>
