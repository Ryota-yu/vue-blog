<template>
  <div id="app">
    <!-- <add-blog></add-blog>  -->    <!-- 调用 AddBlog组件 add-blog是AddBlog的name -->
    <!-- <show-blogs></show-blogs> -->           <!-- 调用 ShowBlogs组件 show-blogs是ShowBlogs的name -->
    
    <blog-header></blog-header>         <!-- 导航组件 -->
    <router-view></router-view>         <!-- 路由展示——根据路径去跳转到对应的内容 -->
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'            /* 引入AddBlog组件 */
import ShowBlogs from './components/ShowBlogs'        /* 引入ShowBlogs组件 */
import BlogHeader from './components/BlogHeader'      /* 引入BlogHeader组件 */
import HomePage from './components/HomePage'          /* 引入HomePage组件 */

export default {
  name: 'App',
  components: {
    AddBlog,ShowBlogs,BlogHeader,HomePage                              /* 注册组件 */  
  }
}
</script>

<style > 

</style>
