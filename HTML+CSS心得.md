[TOC]

1. 三列布局该怎么做？
比如说左边和右边是固定像素，中间要自适应。
如果使用float：left，right的话，会乱套的。
这里必须要使用position:absolute

给左边和右边position:absolute 属性。
中间

但是在最外面的main里，需要设置position：relative。
不然要在页面加上内容的话页面会乱套，因为你两边是绝对定位而且父级元素没有定义相对定位，
那么绝对定位的两边会依据body定位。
加上这个，才会根据父亲元素定位。

```css
    <style type="text/css">
        .main{
            margin: 20px;
            height: 440px;
            background-color: #eee;
            padding: 20px;
            border: 1px solid #999;
            position: relative;
        }
        .left{
            height: 120px;
            width: 200px;
            background-color: green;
            /*float: left;*/
            position: absolute;
            left: 20px;
            top: 20px;
        }
        .icon{
            /*display:inline;*/
            /*color: black;*/
            /*position: ;*/
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 160px;
            /*float: left;*/
            width: 80px;
            height: 80px;
        }
        .icon2{
            margin-bottom: 20px;/*margin-top: 20px;*/
            margin-left: 20px;
            width: 80px;
            height: 80px;
        }
        .middle{
            background-color: yellowgreen;
            height: auto;
            margin-left: 220px;
            margin-right: 140px;
            padding: 20px;
        }
        .right{
            background-color: red;
            height: 420px;
            width: 120px;
            position: absolute;
            top: 20px;
            right: 20px;
            padding-top: 20px;
        }
    </style>
```

2. 元素如何并列？
比如说一个图片一个文字。

3. 一个div里的几个元素和上边下面距离怎么设置？
用最外面的padding就可以了。

```css
        .middle{
            background-color: yellowgreen;
            height: auto;
            margin-left: 220px;
            margin-right: 140px;
            padding: 20px;
        }
```

4. 一个div里，4个图片，怎么安排间距？

```css
        .icon2{
            margin-bottom: 20px;/*margin-top: 20px;*/
            margin-left: 20px;
            width: 80px;
            height: 80px;
        }
        .middle{
            background-color: yellowgreen;
            height: auto;
            margin-left: 220px;
            margin-right: 140px;
            padding: 20px;
        }
```

5. 表格标题，表格单元格合并

表格的标题是caption,单元格合并是colspan和rowspan。

```html
		<tr>
			<td>总计</td>
			<td colspan="2">1000</td>
</tr>
```

6. form 表单元素-label和input可以成套联动

form表单元素，

    label标签，为input元素定义标注，改进了表单控件的可用性，当你点击到label标签时，会自动聚焦到对应控件上，label标签一般有两种用法
        label的for属性与控件的id对应，比如

        <label for="username">请输入用户名: </label>
              <input type="text" id="username" name="username">

        label内嵌控件，比如

        <label>请输入用户名<input type="text" id="username" name="username"></label>



7. img最好添加alt信息

img元素最好附带alt信息，即对图片进行文本说明，当图像无法查看时会显示这段文本描述

```html
<img src="sdf.jpg" alt="这是测试信息">
```

8. figure元素

文档中的一些嵌入式内容，比如引用的图片，插图，表格，代码段等，可以作为独立的单元，当这部分转移到附录中或者其他页面时不会影响到主体，这样的元素都可以放在<figure>元素内，而且可以搭配其子元素<figcaption>作很好的元素说明或者备注信息

9. header和nav标签 article

html是有header 和nav 标签的。页眉，还有导航栏链接,还有article这个标签

```css
    nav{
        margin-right:10px;
        float: right;
        margin-top:15px;
    }
    nav ul li {
        float: right;
        margin:0 20px;
    }
    nav a{
        color: #ffffff;
        font-size: 12px;
    }
    /*header*/
    header{
        width: 100%;
        background: #333333;
        height: 50px;
    }
```

```html
  <header>
    <img src="images/bd_logo.png" class="logo" alt="baidu-logo">
    <nav>
      <ul>
        <li><a href="#article1">导航链接一</a></li>
        <li><a href="#article2">导航链接二</a></li>
        <li><a href="#article3">导航链接三</a></li>
        <li><a id="a4" href="#aside1">导航链接四</a></li>
      </ul>
    </nav>
</header>
```

## 10. blockquote必须要定义才可以

要不然边框是不会出现的，边框也是css定义出来的。

```css
    blockquote{
        border-left: 3px solid #ccc;
        height: 40px;
    }

```

## 11. 表单元素怎么对其？

思路就是，一个form里，加一个div，加一个label和input。

然后label，设置宽度，然后float，右边对齐。

```html
    <form class="form1">
        <div class="email">
        <label for="email">请输入邮箱地址:</label>
        <input type="email" id="email" placeholder="这是一个文本输入框">
            <p>邮箱地址请按要求格式输入</p>
        </div>
```

```css
    form{
        line-height: 30px;
        margin-top: 20px;
    }
    form p{
        color: #aaa;
        margin-left: 39.5%;
    }
    label{
        display: inline-block;
        width: 40%;
        float: left;
        vertical-align: top;
        text-align: right;
        margin-right: 20px;
        /*font-size: px;*/
    }
```

## 12. hover属性
添加hover属性，那么就可以鼠标移动的时候改变样式

```css
.btn-success:hover{
  background-color: #2e6da4;
}
```

## 13. aside属性


## 14. 如何水平和垂直居中？

水平居中很容易：margin: 0 auto就可以了。
垂直比较难，这个思路就是：
position absolute，然后top 往下50%。
因为方块，直接移动了50%，必须要往上调整自身高度的50%才可以。
left一样原理。

```css
        .child{
            background-color: #cccccc;
            width: 400px;
            height: 200px;
            position: absolute;
            left:50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
```

## 15. 如何画半圆？

```css
        .first{
            position: relative;
            left: 0;
            background-color: #fc0;
            -webkit-border-radius: 0 0 50px 0;
            width: 50px;
            height: 50px;
        }
```
http://blog.csdn.net/lzgs_4/article/details/46827761

## 16. 如何相对父亲元素定位？

position absolute 和relative

http://www.fscwz.com/2016/03/18/understand-css-position/

绝对定位的关键点在于它的起点在哪里，比如设置top: 20px，那么这20px是从哪里开始计算的。

一个绝对定位的元素的起点位置是相对于它的第一个position值不为static的父元素而言的，比如：

    当你在一个元素的样式设置为position:absolute
    如果该元素的父元素的position值不为static(而是relative,absolute,fixed,inherit), 那么绝对定位元素的起点为父元素的左上角位置，
    当该元素的父元素为默认值(static),那么就检查父元素的父元素是否有非static定位，如果该元素应用了(relative,absolute,fixed,inherit)定位，则它的左上角便会成为绝对元素的起始位置。
    如果还没有，就向上遍历DOM，直到找到一个非static定位元素或寻找失败到达最外层浏览器窗口，此时绝对定位元素会相对于文档窗口来定位。
## 17. 并排导航栏该怎么写？
放在header里，然后放在一个nav里。
nav，float right，然后nav里，ul li，float left 最后设置margin就可以了。

## 18. p元素之间的白色margin怎么消除？

margin-top:0;
padding：0；

## 19. p如何居中？

text-align: center;

## 20. 解决Div float后，父Div无法高度自适应的问题，其实就是父元素坍塌了  

第一个和第三个方法管用。

```css
1. 额外标签法

这种方法就是向父容器的末尾再插入一个额外的标签，并令其清除浮动（clear）以撑大父容器。这种方法浏览器兼容性好，没有什么问题，缺点就是需要额外的（而且通常是无语义的）标签。我个人比较喜欢这种方法，因为它简单、实用、浏览器兼容性好，而且这种方法也是W3C推荐的方法

<div style="clear:both;"></div>

       或者使用

<br style="clear:both;" />

2. 使用after伪类

这种方法就是对父容器使用after伪类和内容声明在指定的现在内容末尾添加新的内容。经常的做法就是添加一个“点”，因为它比较小不太引人注意。然后我们再利用它来清除浮动（闭合浮动元素），并隐藏这个内容。这种方法兼容性一般，但经过各种 hack 也可以应付不同浏览器了，同时又可以保证html比较干净。

 #outer:after
{
   content:".";
   height:0;
   visibility:hidden;
   display:block;
   clear:both;
}

3. 设置overflow为hidden或者auto

这种做法就是将父容器的overflow设为hidden或auot就可以在标准兼容浏览器中闭合浮动元素。不过使用overflow的时候，可能会对页面表现带来影响，而且这种影响是不确定的，你最好是能在多个浏览器上测试你的页面。

 #outer
 {
    overflow:auto;
   zoom:1;
}

overflow:auto;是让高度自适应， zoom:1;是为了兼容IE6，也可以用height:1%;的方式来解决。
```

## 21. 图片不是块状元素所以无法并排

display:block;
就好了。


## 22. margin-top有效，margin-bottom无效

header里有一个块，想把块里的文字往下放，结果发现margin-bottom无效。
但是margin-top有效。
不知道为什么


这不是定位...

margin-bottom是下方的外边距，并不能让元素向下方移动，margin-top作为上边距，把元素“推”了下去。

题主的意思想必是希望图标距离下方30px，那么可以试试在ul上设置position: absolute，bottom: 30px，另外父元素position:relative

## 23. 怎么把一个div叠加在另一个div上,比如说图片上面显示文字

将一个div覆盖在另一个div上有两种手段：一是设置margin为负值，二是设置绝对定位。

```css
        .first img{
            width: 100%;
            height: 800px;
        }
        .first #Time{
            position: absolute;
            font-size: 60px;
            margin-top: -500px;
            margin-left: 150px;
            color: #FFFFFF;
        }
```
## 24. 如何首字母字号变大而不影响其下划线粗细的方法 

```css
.about{    
font-size: 24px;    
color: #000;    
font-family: "微软雅黑";    
line-height: 40px;    
text-decoration: underline;    
font-variant: small-caps;    /*关键样式*/
text-transform: capitalize;  /*关键样式*/  
}
```

## 25. 如何固定footer？

https://segmentfault.com/a/1190000004453249

```css
方法二：footer高度固定+margin负值

HTML结构：

<body>
    <div class="container">
        <header>header</header>
        <main>main content</main>
    </div>
    <footer>footer</footer>
</body>

CSS设置：

html,body{height:100%;margin:0;padding:0;}

.container{min-height:100%;}
header{background-color: #ffe4c4;}
main{padding-bottom:100px;background-color: #bdb76b;}/* main的padding-bottom值要等于或大于footer的height值 */
footer{height:100px;margin-top:-100px;background-color: #ffc0cb;}/* margin-top（负值的）高度等于footer的height值 */

此方法把footer之前的元素放在一个容器里面，形成了container和footer并列的结构：
首先，设置.container的高度至少充满整个屏幕；
其次，设置main（.container最后一个子元素）的padding-bottom值大于等于footer的height值；
最后，设置footer的height值和margin-top负值。

这种方法没有使用绝对定位，但html结构的语义化不如方法一中的结构清晰。

也可以设置负值的margin-bottom在.container上面，此时html结构变化如下：

<body>
    <div class="container">
        <header>header</header>
        <main>main content</main>
        <div class="empty"></div>
    </div>
    <footer>footer</footer>
</body>

CSS设置：

html,body{height:100%;margin:0;padding:0;}
.container{min-height:100%;margin-bottom:-100px;}
.empty,footer{height:100px;}

使用一个空的div把footer容器推到页面最底部，同时给container设置一个负值的margin-bottom，这个margin-bottom与footer和.empty的高度相等。

虽然多了一个空的div，语义上也不怎么好，但是相比前面为main元素设置padding-bottom的方法有一个明显的好处：当网页内容不满一屏的时候，如果需要为main元素设置边框、背景色的时候，padding-bottom硬生生地撑出了一片空白，真真是有点丑，但是加个空的div之后，布局方式作用在.empty上，对main的css设置就不影响了，算是一个好处吧！
```

我使用了第二个方法。


## 26. 如何并排显示多个div？像报纸一样？
div是块儿元素会自动换行显示。如果要实现多个div并列一行显示建议用float（浮动），不妨将全部的div左浮动，如果这些div的父元素没有设置高度的话，请清除浮动

## 27. 如何使一个label垂直居中共？

在父亲元素里，height 和line-height 像素一样就可以了。
            line-height: 100px;
            /*height: 100px;*/
            vertical-align: top;
            
            好像有额成功了，不知道为什么。

## 28. 如何调试？
在chrome里，检查，可以很方便的看到margin padding等等


## 29. 按钮样式？

```css
        .first #start{
            position: absolute;
            font-size: 30px;
            margin-top: -300px;
            margin-left: 150px;
            background-color: #d45d5c;
            border:none;
            font-family: 微软雅黑;
            width: 350px;
            color: #FFFFFF;
            height: 80px;
        }
```

## 30. img底部有空白？

https://www.zhihu.com/question/21558138

vertical-align: bottom;

## 31. 如何等间距排列图片？

外面设置一个div，然后地v设置 text-align: center;
这样就会居中了。
然后设置img的padding left和right
可以用百分比，比如说10%.

## 32. float之后如何处理塌陷的问题？

        .secondimg:after{
            display: block;
            clear: both;
            content: "";
        }

## 33. 如何并列div包裹的内容？

比如说我要并列select。
我包裹在div里，国家，城市，省份。
首先我要平行，然后再居中。

https://github.com/simaQ/cssfun/issues/3

这里最后一个办法是flexbox布局。

但是这个有一个问题，我把select框长度弄长之后，并没有相应调整。

```html
<head>
    <meta charset="UTF-8">
    <title>Imooc-test</title>
    <style type="text/css">
        h1{
            font-size:12px;
            color:#930;
            text-align:center;
        }

        .select{
            /*TEXT-ALIGN: center;*/
            height: 80px;
            width:100%;
            background-color: #418c59;
            display:flex;
        }
        .select1{
            /*position: absolute;*/
            float: inherit;
            height: 30px;
            width: 300px;
            margin:auto;
        }
        select{
            width: 200px;
        }
    </style>
</head>
<body>
<h1>Hello World22!</h1>
<div class="select">
    <div id="nation" class="select1">
        <select >
            <option>中国</option>
            <option>韩国</option>
            <option selected>日本</option>
        </select>
    </div>
    <div id="province" class="select1">
        <select >
            <option>北京市</option>
            <option>天津市</option>
            <option selected>吉林</option>
        </select>
    </div>
    <div id="city" class="select1">
        <select >
            <option>长春</option>
            <option>延吉</option>
            <option selected>首尔</option>
        </select>
    </div>
```

## 34. 总结一些div居中的方法

```html
.👍the better method:

    可参考How to Center Anything With CSS
👏👏👏

    重要： 先对元素 设置高度
    运用以下规则

    position: absolute;
    margin: auto;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: auto;

    考虑多浏览器兼容性的话 display: table or display: inline-block;
2.宽度高度不固定DIV水平居中

  html部分

     <div class="container">
     <div class="center"><a href="#">1</a><a href="#">2</a><a href="#">3</a>
     <div style="clear:both"></div></div>  

  css部分

     .container{width:500px;height:80px;background:#C2300B;margin-left:50px;padding-top:10px;text-align:center;}
     .center{display:inline-block;border:2px solid #fff;}
     .center{_display:inline;} /*针对ie6 hack*/
     .center a{float:left;border:1px solid #fff;padding:5px 10px;margin:10px;color:#fff;text-decoration:none;}

  代码要点：

    父容器container加css属性 text-align:center;
    子容器center加css属性display:inline-block;
    .center{_display:inline;} 为针对ie6的hack

3.宽度高度不固定DIV垂直居中

  html部分

     <div id="vc"><div id="vci"><div id="content">
     我们垂直居中了，我们水平居中了
     </div></div></div>

  css部分

     #vc { display:table; background-color:#C2300B; width:500px; height:200px; overflow:hidden; margin-left:50px; _position:relative; }
     #vci { vertical-align:middle; display:table-cell; text-align:center; _position:absolute; _top:50%; _left:50%; }
     #content { color:#fff; border:1px solid #fff; display:inline-block; _position:relative; _top:-50%; _left:-50%; }

  代码要点：

    父容器vc的css属性 display:table;overflow:hidden;
    子容器vci的css属性 vertical-align:middle;display:table-cell;
    针对ie6的hack，vci容器的 _position:absolute;_top:50%; 和content容器的 _position:relative; _top:-50%;
    如果不需要水平居中的话，需要注释掉vci容器的text-align:center;_left:50%;以及content的display:inline-block;_left:-50%;

4.宽度高度固定水平垂直居中

  html部分

     <div class="guding"><div class="gd">居中了</div></div>

  css部分

    .guding{width:500px;height:200px;background:#c2300b;margin-left:50px;position:relative;}
    .gd{width:50px;height:20px;background:#fff;position:absolute;top:50%;left:50%;margin-top:-10px;margin-left:-25px;}

  代码要点:

    父容器要用相对定位position:relative;否则的话子元素会相对于浏览器窗口进行绝对定位。
    子容器绝对定位，top:50%;left:50%;margin-top，margin-left的值取该容器高度，宽度的一半的负值。

5. 然后CSS3来了，使用flexbox布局

抛开兼容性，我想这是一个完美的居中，不需要考虑宽度和高度值。

<div id="parent">
    <div id="item">test</div>
</div>

#parent {
    display: flex;
    width: 400px; /* 宽度值，随便啦 */
    height: 400px;  /* 高度值，随便啦 */
    background-color: yellow;
}

#item {
    width: 100px;/* 宽度值，随便啦 */
    height: 20px;/* 高度值，随便啦 */
    margin: auto;
    background-color: red; /* Magic! */
}
```

## 35. 怎么在计算里使用百分比和px？

calc函数就可以了。

```css
        .fourth img{
            float: left;
            width: 600px;
            height: 600px;
        }
        .fourthright{
            background-color: #d45d5c;
            float: left;
            height: 600px;
            width: calc(100% - 600px);
        }
```

##36. @media all and (min-width:0px)这个是干什么用的？
css3的屏幕查询（响应式布局）。屏幕大于多少像素该什么样子，要不然另一个样子。
开始研究响应式web设计，CSS3 Media Queries是入门

http://www.cnblogs.com/mofish/archive/2012/05/23/2515218.html

如果要和手机大交道，可能需要这个。


## 37. css使用正则表达式来精简共同的内容

```css
    .grid-container{
        width: 100%; 
        max-width: 1200px;      
    }

    /*-- our cleafix hack -- */ 
    .row:before, 
    .row:after {
        content:"";
          display: table ;
        clear:both;
    }

    [class*='col-'] {
        float: left; 
        min-height: 1px; 
        width: 16.66%; 
        /*-- our gutter -- */
        padding: 12px; 
        background-color: #FFDCDC;
    }

    .col-1{ width: 16.66%; }
    .col-2{ width: 33.33%; }
    .col-3{ width: 50%;    }
    .col-4{ width: 66.66%; }
    .col-5{ width: 83.33%; }
    .col-6{ width: 100%;   }

    .outline, .outline *{
        outline: 1px solid #F6A1A1; 
    }

    /*-- some extra column content styling --*/
    [class*='col-'] > p {
     background-color: #FFC2C2; 
     padding: 0;
     margin: 0;
     text-align: center; 
     color: white; 
    }
```
