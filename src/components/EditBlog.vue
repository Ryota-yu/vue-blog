<template>
  <div id="edit-blog">
    <h2>编辑博客</h2>

    <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required />

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

        <label>作者</label>
        <select v-model="blog.authorHaved" >             
            <option v-for="author in authors" :key="author.id">{{ author }}</option>         <!-- 根据事先给定的authors数组显示出可以选择的选项 -->
        </select>
        <label>(其他作者)</label>
        <input type="text" v-model="blog.authorAdd">

        <button v-on:click.prevent="editBlog">编辑博客</button>
        
    </form>

    
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
import { resolve } from 'q';
export default {
  name: 'edit-blog',
  data:function () {
    return {
      id:this.$route.params.id,
      blog:{},   /* 与博客有关的数据 */
      authors:["Ryota","Yu","HJH"],         /* 系统自带的博客作者 */

      submmited:false,                      /* 用于提示是否点击了添加博客的变量 */
    }
  },
  methods:{
      /* editBlog方法，用于添加博客 */
      /* post方法，第一个参数为要post的地址，第二个是对象 */
      editBlog:function(){
          this.$http.put("https://blogdata-b966d.firebaseio.com/blog/" + this.id + ".json",this.blog)
            .then(function(data){
                /* console.log(data);       用于测试数据是否已经上传 */
                this.submmited = true;
            })
      },
      /* 获取所要编辑的博客的方法 */
      getDate:function(){
          this.$http.get("https://blogdata-b966d.firebaseio.com/blog/" + this.id + ".json")
            .then(response =>{
                this.blog = response.body;
            })
      }
  },
  created:function(){
      this.getDate();       /* getData是获取所要编辑的博客的方法 */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
#edit-blog *{
    box-sizing: border-box;
}
#edit-blog{
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
