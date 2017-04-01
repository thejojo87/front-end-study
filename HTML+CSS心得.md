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

水平居中很容易：0 auto 就可以了。
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

