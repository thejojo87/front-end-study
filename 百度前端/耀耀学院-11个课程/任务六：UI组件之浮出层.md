[TOC]
# 任务六：UI组件之浮出层
 
 任务目的
 
     练习综合运用HTML、CSS、JavaScript实现局部功能
     练习对于代码的抽象与封装
     为第四阶段的RIA任务做准备
 
 任务描述
 
 ![](http://7xrp04.com1.z0.glb.clouddn.com/task_3_37_1.jpg)
     参考如下设计图，实现一个浮出层的UI组件实现
     浮出层的中心默认在屏幕正中
     当浮出层显示时，屏幕滚动时，浮出层始终保持位置固定在屏幕正中，不随屏幕滚动而变化位置。或者禁止页面在有浮出层出现时滚动
     当浮出层显示时，点击浮出层以外的部分，默认为关闭浮出层。可以实现一个半透明的遮罩来挡住浮出层外的部分
     浮出层的样式、内容和逻辑尽量解耦
     提供使用JavaScript控制浮出层展现和关闭的接口
     浮出层的窗口大小可以是一个默认固定值，也可以是随内容变化而自适应变化，也可以是通过接口参数进行调整，自行根据自己能力进行选择
     有能力的同学可以实现浮出层的拖拽移动浮出窗口位置以及拖拽边缘来放大缩小浮出窗口的功能
 
 任务注意事项
 
     请注意代码风格的整齐、优雅
     代码中含有必要的注释
     可以合理选择使用其它第三方类库，但不建议



## 答案：
一头雾水，不知道这个该从何做起。
网上找的代码，混乱不堪，不想再看。

看了别人的答案。
http://ife.baidu.com/2016/review/detail?workId=10809

html文件写的相当简单：
没有一丁点多余的元素。
一个登陆按钮。
一个弹出窗的标题，按住可以拖动。
一个说明。
然后两个，确定和取消的button

其实原理应该是很简单的。
在一个html里写上所有的组件。
然后用css和js来隐藏。

css很简单，没任何特别之处。

太复杂了，看不懂

https://github.com/whiskey0705/2016-ife/blob/master/task37/task37.html

换一个简单的。



     浮出层的中心默认在屏幕正中
     当浮出层显示时，屏幕滚动时，浮出层始终保持位置固定在屏幕正中，不随屏幕滚动而变化位置。或者禁止页面在有浮出层出现时滚动
     当浮出层显示时，点击浮出层以外的部分，默认为关闭浮出层。可以实现一个半透明的遮罩来挡住浮出层外的部分
     浮出层的样式、内容和逻辑尽量解耦
     提供使用JavaScript控制浮出层展现和关闭的接口
     浮出层的窗口大小可以是一个默认固定值，也可以是随内容变化而自适应变化，也可以是通过接口参数进行调整，自行根据自己能力进行选择
     有能力的同学可以实现浮出层的拖拽移动浮出窗口位置以及拖拽边缘来放大缩小浮出窗口的功能
 
 
 问题1： 浮出层默认中心怎么实现的？
 
 ```css
    top: 50%;
    left: 50%;
    width: 400px;
    height: 200px;
    margin-left: -200px;
    margin-top: -100px;
```

就是，top和left50%，然后margin 自身长度宽度的一半。

 
 问题2： 浮出层相对屏幕固定，怎么做的？
 
 position: fixed; 实现的。
 
 问题3： 点击浮出层意外的部分，默认为关闭浮出层怎么做到的？
 
 首先在body的第一个部分设置一个mask 的div。高度和宽度都是100%；
 先把mask设置为display none，然后当点击登陆按钮的时候，mask就出现。
 然后mask 增加click事件，隐藏浮出层。隐藏mask。
 
 问题4： 浮出层拖动怎么做到的？
 添加mousedown事件。
 
```javascript
function setDrag(event) {
    var disX, disY;
    event = event || window.event;
    disX = event.clientX - win.offsetLeft;
    disY = event.clientY - win.offsetTop;
    document.onmousemove = function(event) {
        event = event || window.event;
        win.style.left = event.clientX + 200 - disX + "px";
        win.style.top = event.clientY + 100 - disY + "px";
    };
    document.onmouseup = function() {
        document.onmousedown = null;
        document.onmousemove = null;
    }
}
```