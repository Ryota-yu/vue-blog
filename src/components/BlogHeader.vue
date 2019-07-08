<template>
   <nav>
       <ul>
           <li>
               <router-link to="/" exact>首页</router-link>
               <router-link to="/show" exact>博客</router-link>
               <router-link to="/add" exact>添加博客</router-link>      <!-- exact用于控制当前router-link的样式 -->
           </li>

       </ul>
   </nav>
</template>

<script>
export default {
    name:"blog-header"
}
</script>

<style scoped>
nav{
    max-width: 1280px;
    background-color: #b6d657;
    padding: 30px 0;
    margin: 0 auto;
    margin-bottom: 24px;
}
ul{
    list-style-type: none;
    margin: 0;
}
li{
    margin:0 10px ;
}
a{
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
    margin:0 0 10px 10px;
    font-size: 18px;
}

/* 系统给的router-link默认的样式，记得是类 （加.） */
.router-link-active{
    background: #ffffffcc;
    color: #b6d657;
}
</style>
