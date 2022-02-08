<template>
  <div class="sidebar" :class="sidebarSeen === true ? 'active' : ''">
    <div class="logo__content">
      <div class="logo">
        <i class='bx bxl-c-plus-plus'></i>
        <div class="logo__name">Malik</div>
      </div>
      <i class='bx bx-menu' id="btn" @click="btnClick"></i>
    </div>
    <ul class="nav__list">
      <li>
        <a href="#">
          <i class='bx bx-search' ></i>
          <input type="text" placeholder="Search">
        </a>
          <span class="tooltip">Search</span>
      </li>
      <li v-for="(navList,idx) in navLists" :key = "idx">
        <router-link :to="navList.path">
          
          <i :class='navList.icon' ></i>
          <span class="links__name" :class="sidebarSeen === true ? 'active' : ''">{{navList.link}}</span>
        
        </router-link>
          <span class="tooltip">{{navList.link}}</span>
      </li>
    </ul>
    <div class="profile__content">
      <div class="profile">
        <div class="profile__details">
          <img src="../../assets/profile/my.jpeg" alt="">
          <div class="name__job">
            <div class="name">Malik Duisebayev</div>
            <div class="job">Web Developer</div>  
          </div>
        </div>
        <i class='bx bx-log-out' id="log__out"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLists: [
        {link: 'Notes', path: '/notes', icon: 'bx bx-edit'},
        {link: 'Users', path: '/users', icon: 'bx bx-user'},
        {link: 'Messages', path: '/messages', icon: 'bx bx-chat'},
        {link: 'Analytics', path: '/analytics', icon: 'bx bx-pie-chart-alt'},
        {link: 'File Manager', path: '/filemanager', icon: 'bx bx-folder'},
        {link: 'Order', path: '/order', icon: 'bx bx-cart'},
        {link: 'Saved', path: '/saved', icon: 'bx bx-heart'},
        {link: 'Setting', path: '/setting', icon: 'bx bx-cog'},
      ],
      sidebarSeen : false    
    }
  },
  methods: {
    btnClick(){
      return this.sidebarSeen = this.sidebarSeen === false ? true : false
    },
  },

}
</script>

<style lang="css" scoped>
  .sidebar{
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    width: 78px;
    background: rgb(9, 9, 54);
    padding: 6px 14px;
    transition: all .5s ease;
  }
  .sidebar.active{
    width: 240px;
    transition: all.5s ease;
  }
  .logo{
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar.active .logo{
    opacity: 1;
    pointer-events: none;
    transition: all .5s ease;
  }
  .logo i {
    font-size: 28px;
    margin-right: 5px;

  }
  .logo__name{
    font-size: 20px;
    font-weight: 400;
  }
  #btn{
    position: absolute;
    color: #fff;
    left: 50%;
    top: 6px;
    font-size: 20px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
  }
  .sidebar.active #btn{
    left: 90%;
  }
  .nav__list{
    margin-top: 20px;
  }
  .nav__list li:first-child{
    margin-bottom: 50px;
    display: flex;
    align-items: center;
  }
  
  .nav__list li{
    position: relative;
    height: 50px;
    width: 100%;
    margin: 0 5px;
    line-height: 50px;
  }

/*  */
.nav__list li .tooltip{
  position: absolute;
  height: 35px;
  width: 122px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  left: 122px;
  top: 0;
  transform: translate(-50%,-50%);
  border-radius: 6px;
  line-height: 35px;
  text-align: center;
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active .nav__list li .tooltip{
  display: none;
}

.nav__list li:hover .tooltip{
  top: 50%;
  transition: .5s ease;
  opacity: 1;
}
/*  */
  .nav__list li input{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    padding-left: 50px;
    background:  rgb(26, 26, 114);
  }
  .sidebar.active input{
    background: white;
  }
  .nav__list li .bx-search{
    position: absolute;
    z-index: 99;
    color: #fff;
    font-size: 22px;
    transition: all .5s ease;
  }
  .sidebar.active .nav__list li .bx-search{
    color: rgb(9, 9, 54)
  }
  .sidebar .nav__list li .bx-search:hover{
    background: #fff;
    color:  rgb(9, 9, 54);
  }
  .nav__list li a{
    color: #fff;
    display: flex;
    align-items: center;
    transition: all .4s ease;
    border-radius: 12px;
    white-space: nowrap;
  }
  .nav__list li a:hover{
    color:rgb(9, 9, 54);
    background: #fff;
  }
  .nav__list li i{
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
  }
  .sidebar .links__name{
    opacity: 0;
    pointer-events: none;
    transition: all .5s ease;
  }
  .sidebar.active .links__name{
    opacity: 1;
    pointer-events: auto;
  } 
/*  */
  .profile__content{
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .profile{
    position: relative;
    padding: 10px 6px;
    height: 60px;
    background: rgb(41, 0, 131);

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .profile__details{
    display: flex;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
  }

  .sidebar.active .profile .profile__details{
    opacity: 1;
    pointer-events: auto;
  }
  .profile__details img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name__job{
    margin-left: 10px;
  }
  .name{
    font-size: 15px;
    font-weight: 400;
  }
  .job{
    font-size: 12px;
    font-weight: 400;
  }
  #log__out{
    position: absolute;
    left: 50%;
    bottom: 6px;
    transform: translateX(-50%);
    min-width: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
  .sidebar.active #log__out{
     left: 88%;
  }
</style>
