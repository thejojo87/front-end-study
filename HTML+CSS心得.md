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
