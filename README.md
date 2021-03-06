## 初始化项目

1. 脚手架创建项目
2. 精简项目
   1. public
   2. src

## 01. Hello React

1. 虚拟DOM创建的两种方式 (jsx || js)
2. 渲染到页面


## 02. 创建组件

1. 函数
2. 类

## 03. 组件三大属性之state

1. state既然是挂载到组件实例身上，就没必要在constructor中添加
2. 方法中this不是组件实例的问题，也可以用箭头函数解决
3. 综上constructor基本不用写

## 04. 组件三大属性之props


## 05. 组件三大属性之ref

1. 获取节点的三种方式
2. 受控与非受控组件

## 06. 生命周期函数

1. 挂载时
2. 更新时
3. 传参时
4. 卸载时

## 07. 小练习(发布评论)

1. 拆静态页面
2. 直接组件化编写
3. 组件间通信(props => context)

## 08. axios

1. 第三方插件
2. fetch(原生)
3. pubsub-js
   1. 发布publish('msg',{})
   2. 订阅subscribe('msg',(msg,data)=>{})

## 09. 路由
> v6 版本改动：
> Routes 替代 Switch (更灵活的匹配机制)
> element 替代 component / render ， 接收一个组件为参数，更加灵活好用
> Route 可以嵌套， 显示子组件用 <Outlet />

1. 基本使用
2. 特有属性
3. 高阶组件

```jsx

// v5
<Switch>
   <Route path="/about" component={About}/>
   <Route path="/home" component={Home}>
   <Redirect to="/home">
</Switch>

// Home
<Switch>
   <Route path="/home/news" component={News}/>
   <Route path="/home/message" component={Message}/>
   <Redirect to="/home/news">
</Switch>

// Message
<Route path="/home/message/detail/:id" component={Detail}/>
// 取参数：props.params

// v6
<Routes>
   <Route path="about" element={<About/>} />
   <Route path="home" element={<Home/>}>
      <Route path="news" element={<News/>} />
      <Route path="message" element={<Message/>}>
         <Route path="detail/:id" element={<Detail/>}/>
      </Route>
      <Route path="" element={<Navigate to="news"/>} />
   </Route>
   <Route path="" element={<Navigate to="about"/>}/>
</Routes>

// Home
<Outlet />

// Message
<Outlet />
// 取数据：由于element渲染出来的不是路由组件，不能通过props.params去取
// 方式一：用函数组件useParams钩子取，函数式跳转也是同理
// 方式二：手写withRouter高阶组件
```

## 10. redux && react-redux

1. redux 核心 (store, reducer, actions)
2. react-redux 核心(connect(映射属性,映射方法)(目标容器))

## 11. 




