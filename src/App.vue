<template>
  <div class="app">
    <navbar/>
    <div class="home__content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import navbar from './components/UI/navbar.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: {navbar, HeaderComponent},

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Questrial', sans-serif;
  }
  body{
   position: relative;
   width: 100%;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .home__content{
    position: absolute;
    left: 78px;
    height: 100%;
    width: calc(100% - 78px);
    padding: 15px 20px;
    transition: all .5s ease;
  }
  .sidebar.active ~ .home__content{
    width: calc(100% - 240px);
    left: 240px;
    transition: all .5s ease;
  }
  .container{
    width: 100%;
    /* border: 1px solid black; */
  }

</style>