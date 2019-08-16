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

#### 组件拆分

以上实例只是在顶级组件中挂在 HTML，不利于维护，我们下面将介绍如何拆分组件

1. 创建自定义组件

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