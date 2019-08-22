## Vue 从入门到精通

Vue 是目前比较流行的三大单页应用框架之一，本教程的目的是帮助初学者快速入门 Vue

### [script 标签式引用 Vue](./examples/demo01.html)

```
如果想快速开始Vue的开发的话，可以直接以script标签方式引用Vue来进行Vue的相关开发。

示例如下：
<script src="./js/vue.js"></script>
```

### [实例化](./examples/demo02.html)

```
Vue的开发依赖于Vue类的实例，Vue实例接收一些参数属性：模板、样式、数据、方法甚至插件拓展等。

示例如下：
new Vue({});
```

### [实例装载](./examples/demo03.html)

```
Vue实例 接受一个父DOM，用于实例装载

示例如下：
new Vue({
    el: ''
});
```

### [模板装载](./examples/demo04.html)

```
Vue实例暴露一个template属性，用于接收html字符串模板，进行实例内部的HTML渲染

示例如下：
new Vue({
    el: "#root",
    template: "<h1>Hello World !</h1>"
});
```

### [数据装载](./examples/demo05.html)

```
Vue实例暴露一个data属性，用于数据结构的存储，便于实例内部的数据渲染，内部的模板
可以通过双花括号获取data中的数据。

示例如下：
new Vue({
    el: "#root",
    template: "<h1>{{text}}</h1>",
    data: {
        text: "Hello World !"
    }
});
```

### 指令

#### 事件绑定

方法定义也可以在 data 中进行拓展，但是方法的绑定需要使用到指令

1. [指令 v-on](./examples/demo06.html)

```
通过 v-on 方式可以绑定方法/事件

示例如下：
new Vue({
    el: "#root",
    template: "<h1 v-on:click='clickFun'>{{text}}</h1>",
    data: {
        text: "Hello World !",
        clickFun: () => alert(1)
    }
});

```

2. [@形式绑定](./examples/demo07.html)

```
也可以通过 @进行事件绑定

示例如下：
new Vue({
    el: "#root",
    template: "<h1 @click='clickFun'>{{text}}</h1>",
    data: {
        text: "Hello World !",
        clickFun: () => alert(1)
    }
});
```

3. [methods](./examples/demo08.html)

```
Vue实例暴露一个methods属性，专门用于方法的装载，将方法挂在在data上不便于data数据的获取与修改，
所以方法还是需要挂在在methods上。
```

### 包裹性

```
vue 具有包裹性，不允许存在无包裹的标签模板（模板必须被一个顶级父模板包裹），无包裹的模板将会直接导致报错

错误示例：

<div>b</div><div>c</div>

正确示例：

<div>
   <div>b</div>
   <div>c</div>
</div>
```

#### [v-model 指令](./examples/demo09.html)

```
v-model 指令用于修饰<input>、<select>、<textarea>等表单组件，一旦表单数据变化，data数据也将发生变化，
并同步重新渲染受影响的组件。

示例如下（实现数据的同步修改渲染）：
new Vue({
    el: "#root",
    template: `<div>
        <h1>{{text}}</h1>
        <input type="text" @change="changeText" v-model="text"/>
    </div>`,
    data: {
        text: "Hello World !"
    }
});
```

### 条件渲染指令

#### [if else if](./examples/demo10.html)

```
条件渲染指令用于替代部分js代码，使得可以快速进行项目开发

v-if
v-if-else
v-else
```

#### [v-show](./examples/demo11.html)

```
v-show是一个惰性指令，用于控制组件/标签的显示状态

示例如下：
new Vue({
    el: "#root",
    template: `<div>
        <h1 v-show="status">Hello World !</h1>
        <button @click="checks">点击我控制显示和消失</button>
    </div>`,
    data: {
        status: true
    },
    methods: {
        checks: function() {
        this.status = !this.status;
        }
    }
});
```

#### [v-for](./examples/demo12.html)

```
v-for用于数据遍历，是项目开发中常用的DOM遍历方式，在进行节点遍历的时候，需要为节点
绑定一个:key指令并赋予唯一值，以方便Vue去识别唯一节点。

示例如下：
new Vue({
    el: "#root",
    template: `<ul>
        <li v-for="item in list" :key='item.id'>{{item.text}}</li>
    </ul>`,
    data: {
        list: [
        { id: 0, text: "测试001" },
        { id: 1, text: "测试002" },
        { id: 2, text: "测试003" },
        { id: 3, text: "测试004" },
        { id: 4, text: "测试005" },
        { id: 5, text: "测试006" },
        { id: 6, text: "测试007" },
        { id: 7, text: "测试008" },
        { id: 8, text: "测试009" },
        { id: 9, text: "测试0010" },
        { id: 10, text: "测试0011" },
        { id: 11, text: "测试0012" },
        { id: 12, text: "测试0013" },
        { id: 13, text: "测试0014" },
        { id: 14, text: "测试0015" },
        { id: 15, text: "测试0016" }
        ]
    }
});
```

#### [创建自定义组件](./examples/demo13.html)

以上实例只是在顶级组件中挂在 HTML，不利于维护，我们下面将介绍如何拆分组件

```

注意*
   1. 组件注册需要在组件使用之前
   2. 组件名以横线串联，例如：el-test，使用 <el-test>
   3. 组件有自己的data属性，但是组件的data属性是带返回值的函数

示例如下：
  Vue.component("my-el", {
    template: "<h1>{{text}}</h1>",
    data: function() {
      return {
        text: "Hello World !"
      };
    }
  });
  let vue = new Vue({
    el: "#root",
    template: `
      <div>
        <my-el/>
      </div>
    `
  });
```

### 父子组件传值

#### [子组件共享父组件的数据和方法](./examples/demo14.html)

```
在子组件中可以通过 this.$parent 拿到父组件的内部属性

  Vue.component("my-el", {
    template: "<h1>{{text}}</h1>",
    data: function() {
      return {
        text: this.$parent.text
      };
    }
  });
  let vue = new Vue({
    el: "#root",
    template: `
      <div>
        <my-el/>
      </div>
    `,
    data: {
      text: "Hello World !"
    }
  });
```

#### Prop 父组件向子组件传值

1. v-bind 指令

```
   v-bind 指令可以用于data对象参数绑定，此功能可以替代直接在HTML标签赋值的行为

   示例：

   原始写法： <h1>Hello World !</h1>

   v-bind写法：<h1 v-bind:text="text"/>
```

2. props 属性

子组件的 props 属性可以拿到父组件给自己传递的属性值

```
   示例：
   Vue.component("my-el", {
     props: ["text"],
     template: "<h1>{{text}}</h1>"
   });
   let vue = new Vue({
     el: "#root",
     template: `
       <div>
         <my-el text="Hello World !"/>
       </div>
     `,
   });
```

3. [综合实例](./examples/demo15.html)

```
  Vue.component("my-el", {
    props: ["text"],
    template: "<h1>{{text}}</h1>"
  });
  let vue = new Vue({
    el: "#root",
    template: `
      <div>
        <my-el v-bind:text="text"/>
      </div>
    `,
    data: {
      text: "Hello World !"
    }
  });
```

### 关于项目构建

如果各位朋友想要快速入门 Vue，请直接使用官方脚手架进行项目构建，快速学习。

1. [官方脚手架](https://cli.vuejs.org/)

官方脚手架是依赖 Vue 环境、通过 webpack 构建

```
安装CLI工具：

npm install -g @vue/cli
# OR
yarn global add @vue/cli

创建项目：

vue create 项目名

启动服务：

npm run start

#OR

yarn start

项目目录：

我们只需要关注安装后的src目录，即我们的开发目录

src的main方法是我们的主方法，我们可以把里面的代码清空，并将我们现有的代码复制进去进行运行编译。

```

注\* 因为官方的脚手架工具依赖的 Node.js 版本和 webpack 版本不一定和自己电脑的版本一致，可能会导
致构建/安装失败，在安装之前先查询下当前本地的 Node.js 以及 webpack 版本

2. 自己搭建脚手架

官方的脚手架工具已经很不错了，如果自己搭建脚手架的话，需要自己进行相关的环境配置。

相关配置请参考/移步[webpack 教程](./https://github.com/hanchn/webpack_Doc)，具体自定义配置示
例后期会更新出来。

```
待续...
```

注\* 在自己进行脚手架搭建的时候，可能会出现报错情况，报错消息如下：

```
vue.runtime.esm.js?7c52:619 [Vue warn]: You are using the runtime-only build of Vue where
the template compiler is not available. Either pre-compile the templates into render functions,
 or use the compiler-included build.
```

上述问题是因为正在使用的是 vue 的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的
版本，[官方介绍](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)

```
resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }
}
```

```
注* 从本处以下的教程依赖于项目进行讲解，代码示例依赖于运行的项目，请用Vue-CLI构建项目，在项目中进行运行。
```

### \$mount 挂载

```
我们在上文用的到挂在方式是直接在示例里面传入挂载的，我们也可以使用以下方式进行实例挂载：

import Vue from "vue";
Vue.component("App", {
  template: `
   <h1>Hello World !</h1>
  `
});

new Vue({
  template: "<App/>"
}).$mount("#app");

```

### Vue 模板

```
在进行Vue的开发过程中，如果只能用字符串的形式进行模板定义，会非常不便于快速项目开发和问题定位。
Vue提供了一种开发模板，即.vue后缀的文件，我们可以在里面用HTML语法直接进行模板开发。

文件格式例如： app.vue
<template>  // 组件内容用template包裹
  <h1>Hello World !</h1>
</template>
<script>
export default {  // 用export暴露组件
  name: 'App'  //定义组件名
};
</script>


我们可以直接在main.js中进行引用，引用示例：

import Vue from "vue";
import App from "./app.vue";

new Vue({
  template: "<App/>",  //使用定义好的模板格式
  components: {
    App   // 在组件中引用定义好的组件模块
  }
}).$mount("#app");


```

#### 组件单例

组件内的数据可以直接渲染并使用

```
<template>
  <h1>{{text}}</h1>
</template>
<script>
export default {
  name: "App",
  data: function() {
    return {
      text: "Hello World !"
    };
  }
};
</script>
```

### 生命周期

### 路由

路由用于页面多页面跳转，历史页面回退等

1. 安装路由模板

```
路由模块很多，我们在本次教程中用到的路由模板是vue-router

安装：

npm install vue-router
```

2. Vue 路由功能拓展

```
Vue可以通过use方法拓展功能，例如拓展一个路由插件：

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

3. 为路由挂载不同的页面内容

```
VueRouter实例暴露一个routes属性用于接受路由配置，路由配置分别有:

1. path 跳转地址
2. default 默认显示的地址
3. name 路由别名
4. component 组件
5. children 组路由
...

const Home = { template: "<div>This is Home</div>" };
const OtherPage = { template: "<div>This is OtherPage</div>" };

const router = new VueRouter({
  routes: [
    { path: "/", name: "home", component: Home },  // 为不同的地址 挂载不同的组件
    { path: "/otherpage", name: "otherpage", component: OtherPage }
  ]
});
```

4. router-link

```
router-link 用于进行不同页面的跳转，在渲染时会自动变成a链接，router-link可以根据路由的别名
进行不同页面的跳转。

示例：

new Vue({
  router,
  template: `
  <div id="app">
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li> // router-link组件最后会生成 a标签
        <li><router-link :to="{ name: 'otherpage' }">otherPage</router-link></li>
      </ul>
  </div>
  `
}).$mount("#app");
```

5. router-view

```
用于路由内容显示，根据router-link的跳转显示不同内容

new Vue({
  router,
  template: `
  <div id="app">
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li> // router-link组件最后会生成 a标签
        <li><router-link :to="{ name: 'otherpage' }">otherPage</router-link></li>
      </ul>
      <router-view class="view"></router-view>  // 组件容器，用于显示不同的路由跳转内容
  </div>
  `
}).$mount("#app");
```

6. 完整示例

```
Vue实例中通过router属性进行路由挂载

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);  //挂载路由

const Home = { template: "<div>This is Home</div>" };
const OtherPage = { template: "<div>This is OtherPage</div>" };

const router = new VueRouter({
  routes: [
    { path: "/", name: "home", component: Home },  // 为不同的地址 挂载不同的组件
    { path: "/otherpage", name: "otherpage", component: OtherPage }
  ]
});

new Vue({
  router,
  template: `
  <div id="app">
      <p>当前访问的页面是: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li> // router-link组件最后会生成 a标签
        <li><router-link :to="{ name: 'otherpage' }">otherPage</router-link></li>
      </ul>
      <router-view class="view"></router-view>  // 组件容器，用于显示不同的路由跳转内容
  </div>
  `
}).$mount("#app");
```

### vuex 状态管理

1. vuex

```
vuex借鉴了flux、redux的思想，如果熟悉redux，做过基于redux状态管理的开发，vuex就可以略过了。

安装vuex：

npm i vuex --save

引用：

import Vuex from 'vuex'
```

2. 为什么要进行状态管理

```
痛点：

1. 项目开发过程中组件较多，跨组件共享数据困难
2. 通过组件间传值，使得项目更复杂
3. 一处改动，多处渲染，通信复杂

我们需要一个共享的数据树，通过修改公共的数据树来达到：改动一处，多处自动渲染的目的。
```

#### vuex 功能拆分


1. 在Vue中挂载Vuex

```
import Vuex from 'vuex'

Vue.use(Vuex)
```


2. 创建组件数据模块

Vuex提供一个内部属性类 Store 用于创建公共数据树，Store的实例接收并合并各个组件的数据单例模块

```
import Vuex, {Store} from 'vuex'
let store = new Store({})

Store 实例内部接收一个对象，对象属性分别为：

a. state,  // 组件的初始化数据/结构
b. getters, // 纯数据引用，并针对数据做出部分过滤行为
c. mutations // 针对数据做（增删改查）处理
d. actions, // 用户行为，根据传入参数进行mutations方法调用，不直接修改数据

```
3. state

```
state 用于初始化页面数据绑定

例如：

import Vuex, {Store} from 'vuex'
let store = new Store({
  state: {
    text: 'Hello World !',
    list: [
      id: 0, text: '测试数据0',
      id: 1, text: '测试数据1',
      id: 2, text: '测试数据2',
    ]
  }
})
```

4. getters

```
用于纯引用数据过滤

例如：

import Vuex, {Store} from 'vuex'
let store = new Store({
  state: {
    text: 'Hello World !',
    list: [
      id: 0, text: '测试数据0',
      id: 1, text: '测试数据1',
      id: 2, text: '测试数据2',
    ]
  },
  getters: {
    filterList: state => state.list.filter(li => li.id < 2)
  }
})
```

5. mutations

```
针对state数据的状态变更，针对state做增删改查的操作

例如：

import Vuex, {Store} from 'vuex'
let store = new Store({
  state: {
    count: 0,
    text: 'Hello World !',
    list: [
      id: 0, text: '测试数据0',
      id: 1, text: '测试数据1',
      id: 2, text: '测试数据2',
    ]
  },
  getters: {
    filterList: state => state.list.filter(li => li.id < 2)
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})

mutations中的函数无法直接被使用，类似于函数/事件注册，需要利用特定的方式去进行触发
```

6. mutations事件触发

无参

```
store提供一个commit函数属性用于触发已经注册的mutations函数

例如：

store.commit('increment')
```

有参

```
例如：

store.commit('increment', ...args)
```

7. actions

```
actions用于暴露外部可调用的事件，间接调用/触发mutations

例如： 

import Vuex, {Store} from 'vuex'
let store = new Store({
  state: {
    count: 0,
    text: 'Hello World !',
    list: [
      id: 0, text: '测试数据0',
      id: 1, text: '测试数据1',
      id: 2, text: '测试数据2',
    ]
  },
  getters: {
    filterList: state => state.list.filter(li => li.id < 2)
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  },
  actions: {
    increment({commit}){
      commit('increment')
    }
  }
})

```



### 插槽

插槽解决了页面未渲染时无内容的尴尬，可以用于预渲染处理

1. 无名/不具名插槽

不具名插槽在同一作用域内只能设置一个，用于内容替换

```
  Vue.component("my-button", {
    template: `
      <h1>
         <slot>loading...</slot>
      </h1>
    `
  });
  let vue = new Vue({
    el: "#root",
    template: `
        <my-button>
          Hello World !
        </my-button>
    `
  });
```

2. 其他插槽

```
暂未更新
```
