[TOC]
# 任务七：UI组件之排序表格

任务目的

    练习综合运用HTML、CSS、JavaScript实现局部功能
    练习对于代码的抽象与封装
    为第四阶段的RIA任务做准备

任务描述

![](http://7xrp04.com1.z0.glb.clouddn.com/task_3_38_1.jpg)

    参考下方设计图，实现一个支持列排序的表格组件
    提供生成表格的接口，表格中的数据，表格样式尽量低耦合
    可以配置对哪些列支持排序功能，并在表头进行排序按钮的显示，图中的样式为示意参考，可自行设定样式及交互方式
    提供点击排序按钮后的响应接口，并提供默认的排序方法，当提供的接口没有具体实现时，按默认的排序方法进行排序操作，并更新表格中的数据显示。

任务注意事项

    请注意代码风格的整齐、优雅
    代码中含有必要的注释
    可以合理选择使用其它第三方类库，但不建议


原理：

首先写函数，随机数字，放进数组里。
然后用字典，生成。

生成报表，
然后在表头div里，添加cursor=pointer

然后给箭头添加事件监听。
事件的父元素节点来操作。

```javascript
divNode.addEventListener('click',function(eve){
					var content = eve.target.parentNode.innerHTML.split('<')[0],
					      listNum = config.thContent.indexOf(content),
					      sortList = [],
					      newList = [],
					      trList = tab.childNodes;
```

第一个难点，如何生成箭头？

第二个难点，如何把箭头联系起来？
