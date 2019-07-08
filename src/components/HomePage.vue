<template>
    <div id="home-page">
        <h2>博客功能介绍：</h2>
        <p>使用须知：</p>
        <p>博客的存储借助的是geogle的Firebase，所以需要fan过去才能使用，谢谢！</p>
        <ol>
            <li>添加博客
                <p>在添加博客界面，可以填写你所要添加的博客的标题、内容、分类、作者（可选择已有的作者，或者自己添加作者）。其中博客标题是必须填写的</p>
                <p>有博客预览板块，在此板块可以预览你所要添加的博客</p>
                <p>添加博客后会显示“博客已经添加成功”</p>
            </li>
            <li>博客
                <p>在博客界面，有搜索框，可以根据题目搜索或者根据内容搜索</p>
                <p>点击某篇博客可以跳转到该博客的页面</p>
                <p>单篇博客页面可以选择删除博客或者编辑博客，重新编辑过的博客可以在博客页面重新得到</p>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name:"home-page"
}
</script>

<style scoped>
#home-page{
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color:#a2bed1;
    padding: 50px;
}

</style>



