<template>
  <div  v-theme:column="'wide'" id="show-blogs">        <!-- v-theme是自定义指令，用来改变容器大小，其中column、'wide'都是指令参数 -->
      <h1>Blog</h1>           
      <input type="text" v-focus v-show="searchByTitle"  v-model="searchTitle" placeholder="Search Blog By Title">              <!-- 标题搜索框 -->
      <input type="text" v-focus  v-show="!searchByTitle" v-model="searchContent" placeholder="Search Blog By Content">             <!-- 内容搜索框 -->
      <button id="changeSearch" v-on:click="changeSearchMethod">改变搜索方式</button>

      <div v-for="blog in filterBlogs" :key="blog.id" class="single-blog">            <!-- v-for遍历展示博客 -->
          <router-link v-bind:to="'/Blog/'+blog.id">           
           <!-- router-link 实现点击博客然后跳转单独显示 因为要拼接字符串 所以/blog/要用''括起来，然后用v-bind绑定 -->
           <!-- v-raibow是自定义指令，用于将标题添加一个颜色 -->
            <h2 v-rainbow>{{ blog.idNumber }}.{{ blog.title }}</h2>            <!-- to-uppercase 是一个全局过滤器 用于将博客的标题显示为大写 （已删除）-->
            <article>{{blog.content | concentre}}</article>
          </router-link>                          <!-- concentre 是一个全局过滤器，用于集中缩写博客的内容 -->
      </div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data:function(){
      return{
        blogs:[],               /* 用于存储获取到的数据 */
        searchByTitle:"true",
        searchTitle:"",
        searchContent:"",   
      }
  },
  created(){
      this.$http.get("https://blogdata-b966d.firebaseio.com/blog.json")
            .then(function(data){
                return data.json();         /* 将添加的博客（还是json数据）转为对象 */
            })
            /* 对返回的对象进行处理 */
            .then(function(data){
                var blogsArray = [];        /* 用于临时存放数组 */
                var i = 1;
                for(let key in data){       /* key是data的标识 */
                    data[key].id = key;                  /* 添加的id作为每篇博客的标识 */
                    data[key].idNumber = i++;            /* 添加的idNumber作为博客的序号 */
                    blogsArray.push(data[key]);         /* 将data[key]这个对象推入数组 */
                }
                this.blogs = blogsArray;
                
            })
  },
  computed:{
      /* 用于匹配搜索框中的内容的函数 */
      filterBlogs:function(){
          if(this.searchTitle != "")
          {
              return this.blogs.filter((blog) =>{
              return blog.title.match(this.searchTitle);         
              /* this.blogs是所有获取的的blog filter是一个过滤函数，内部是一个箭头函数，参数为blog(v-for当中的blog），箭头函数中将title值与search匹配 */
          })
          }else if(this.serchContent !=""){
              return this.blogs.filter((blog) =>{
              return blog.content.match(this.searchContent);                  
          })
          }
          else {return this.blogs;}
      }
  },
  methods:{
      changeSearchMethod:function(){
          this.searchByTitle = !this.searchByTitle;
      }
  }
}
</script>

<style scoped> 
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color:#5584a3;
}
.single-blog{
    padding: 20px;
    margin: 30px 0;
    background-color: #eee;
}
input{
    height: 26px;
    width: 300px;
    margin-right: 5px;
}
#show-blogs a{
    color:#666;
    text-decoration: none;
}
#changeSearch{
    display: block;
    font-size: 14px;
    color:#34ade6;
    border:2px solid #c02371;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
}
</style>