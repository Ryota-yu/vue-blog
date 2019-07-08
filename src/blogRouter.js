/* 实现路由界面的设置 */

import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import Homepage from './components/HomePage'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'


/* 输出一个数组，元素是对象 */
export default[
    {path:'/',component:Homepage},         /* 默认界面 */
    {path:'/show',component:ShowBlogs}, 
    {path:'/add',component:AddBlog},
    {path:'/Blog/:id',component:SingleBlog}     /* 通过id值实现跳转，id这个变量是自己命名的，任意 */,
    {path:'/edit/:id',component:EditBlog}
]       