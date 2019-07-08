<template>
    <div id="single-blog">
        <h1>{{ blog.title}}</h1>
        <p>作者；{{ blog.authorHaved }} {{ blog.authorAdd}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories" :key="category.id">
                {{ category }}
            </li>
        </ul>
        <p>博客内容：</p>
        <article>{{ blog.content }}</article>
        <button v-on:click="deleteBlog">删除博客</button>
        <router-link :to="'/edit/' + id">编辑博客</router-link>      <!-- 编辑博客跳转到编辑页面，id是所需要编辑的博客的id -->
    </div>
</template>

<script>
export default {
    name:'single-blog',
    data(){
        return{
            id:this.$route.params.id,           /* 获取路由参数的id值   blogRouter.js */
            blog:{}
        }
    },
     methods:{
        deleteBlog:function(){
            var confirmMessage = confirm("确定是否删除当前博客");
            if(confirmMessage == true){       
                this.$http.delete("https://blogdata-b966d.firebaseio.com/blog/" + this.id + ".json")
                .then(response =>{
                    this.$router.push({path:"/show"})
                }) 
            }else{    
            }
        }
    }, 
    created(){
        this.$http.get("https://blogdata-b966d.firebaseio.com/blog/" + this.id + ".json")
            .then(function(data){
                console.log(data);
                return data.json();     /* 将数据对象化 */
            })
            .then(function(data){
                this.blog = data;       /* 将数据赋给用于展示的blog */
            })
    }
}
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding:  20px;
        background: #7aa8c7;
        border: 1px dotted  #aaa;
    }
    button{
        display: inline-block;      
        width:100px;
        height:30px;
        border: 2px solid #451;
        border-radius: 8px;
        font-size: 16px;
        color:#179e129c;
        margin:5px 5px;
        padding: 3px;  
    }
    a{
        display: inline-block;      
        width:90px;
        text-align: center; 
        border: 2px solid #451;
        border-radius: 8px;
        text-decoration: none;
        color:#ad14cc9c;
        margin:5px 5px;
        padding: 3px; 
    }
</style>
