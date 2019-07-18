<template>
  <div id="add-blog">
    <h2>添加博客</h2>

    <!-- 添加博客 -->
    <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required  v-focus />     <!-- 因为表单的提交使用的是自己提供的addBlog方法，所以required属性没有用处 -->

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label>JavaScript</label>
            <input type="checkbox" value="JavaScript" v-model="blog.categories">
            <label>ES6</label>
            <input type="checkbox" value="ES6" v-model="blog.categories">
            <label>jQuery</label>
            <input type="checkbox" value="jQuery" v-model="blog.categories">
            <label>Vue.js</label>
            <input type="checkbox" value="vue.js" v-model="blog.categories"> 
        </div>

       <!--  <label>作者</label>
        <select v-model="blog.authorHaved" >             
            <option v-for="author in authors" :key="author.id">{{ author }}</option>       
        <label>(其他作者)</label>
        <input type="text" v-model="blog.authorAdd"> -->
        
        <label>作者</label>
        <input type="text" v-model="blog.authorHaved" list="authors_list" name="link" autocomplete="off"/>
        <datalist id="authors_list">
            <option v-for="author in authors" :key="author.id" >{{ author }}</option> 
        </datalist>


        
        <button v-on:click.prevent="addBlog">添加博客</button>
        
    </form>

    <!-- 添加博客后的提示内容 -->
    <div v-if="submmited">
        <h3>您的博客已经添加成功！</h3>
    </div>

    <!-- 博客预览 -->
    <div id="preview">
        <h3>博客预览</h3>

        <p>博客标题：{{ blog.title }}</p>
        <p>博客内容：</p>
        <p>{{ blog.content }}</p>
        <p>博客类别</p>
        <ul>
            <li v-for="category in blog.categories" :key="category.id"  >
                {{ category }}
            </li>
        </ul>
        <p>博客作者：{{ blog.authorHaved }} {{ blog.authorAdd}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data:function () {
    return {
      blog:{
          title:"",
          content:"",
          categories:[],
          authorHaved:"",
          authorAdd:""
      },   /* 与博客有关的数据 */
      authors:["Ryota","Yu","HJH"],         /* 系统自带的博客作者 */

      submmited:false,                      /* 用于提示是否点击了添加博客的变量 */
    }
  },
  methods:{
      /* addBlog方法，用于添加博客 */
      /* post方法，第一个参数为要post的地址，第二个是对象 */
      addBlog:function(){
          if( this.blog.title =="") {alert("请必须填写博客标题")}
          else
          {this.$http.post("https://blogdata-b966d.firebaseio.com/blog.json",this.blog)
            .then(function(data){
                console.log(data);      /* 用于测试数据是否已经上传 */
                this.submmited = true;
            })}
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    max-width: 800px;
    margin: 30px auto;
    padding: 30px;
}
label{
    display: block;
    margin:20px 0 5px ;
}
input[type="text"],textarea{
    display: block;
    width: 60%;
    padding:8px; 
}
textarea{
    height: 200px;
}
select{
    display: block;
    width: 10%;
}
#checkboxes label{
    display: inline-block;
    padding-left: 10px;
    margin-right: 10px;
}
#checkboxes input{
    display: inline-block;
    width: 20px;
    margin-left: -10px;
}
button{
    display: block;
    margin: 20px 0;
    background:#332d2d9f;
    color: #da9c28;
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
}

#preview{
    width: 60%;
    padding: 10px 20px;
    border:1px dotted #ccc;
    margin: 50px 0;
}
h2,h3{
    color:#846;
    margin-top: 10px;
}
</style>