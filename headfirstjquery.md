
[TOC]

# head first jquery

## 第一章 jquery入门

jquery是javascript的一个库。

jquery就是javascript。
比如说：

```apple js
document.getElementsByTagName("p")[0].innerHTML = "Change the page."
$("p").html("Change the page.");

或者说想改变页面上5个段落元素中的HTML。
```

jquery函数是$()=jquery()
括号里可以放入 三种东西。css选择器，html串和javascript object

jquery选择器的方式和css选择器一模一样。
css增加的是样式，而jquery增加的是行为。

```apple js
$("h1").hide() $(".my_class").slideUp() $("#my_id").fadeOut();
类用.号， id用#
```

这部分简单的例子：
是一个块，点击，就隐藏图片。

```apple js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>第一章</title>
    <link rel="stylesheet" type="text/css" href="chapter01.css">
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
</head>
<body>
    <div id="clickMe">Show me the furry friend of the Day</div>
    <div id="picframe">
        <img src="20120216203834668.jpg">
    </div>

<script>
    $(document).ready(function() {
        $("#clickMe").click(function() {
            $("img").fadeIn(1000);
            $("#picframe").slideToggle("slow");
        });
    });
</script>
</body>
</html>


#clickMe {
    background:#D8B36E;
    padding: 20px;
    text-align: center;
    width:205px;
    display: block;
    border: 2px solid #000;
}

#picframe {
    background: #D8B36E;
    padding: 20px;
    width: 205px;
    display: none;
    border: 2px solid #000;
}
```

## 第二章 选择器与方法

在这里要做的动作是，有4个图片并排。
点击的话，出现一个随机数字的文字。
再点击，那么刷新文字。

代码写后，和想象中不一样。
首先4个图片并非是并排的，而是上下叠加。
还有，最后一个图片显示全部图片，其他3个只是显示一点点像素而已。

应该是图片尺寸太大了。

第一步：写图片的div
第二步：图片可以单击
第三步：添加discountmessage，append方法。
为了删除方便，msg方法添加<p>标签。
第四步，现在点击，会在每个图片下面都显示，要修改需要当前元素，this来表示。
$(this) 就是当前元素。

第五步，点击的时候删除之前的消息。

$("li").remove():

后代选择器。
父亲和孩子之间有个空格。
div div img 

## 第三章 在页面上有所作为

完全没看懂第三部分的需求是啥。
绑定事件。
方法1：click(function(){})
方法2：bind('click',function(){})
方法1是2的快捷办法。但是有局限，dom必须先存在才可以。
增加一个新的图片什么的，就要用2.


选择器+事件+函数 = 复杂的交互

选择器大概分为5类
浏览器事件，文档加载，表单，键盘，鼠标。

删除事件用unbind

```apple js
$("#myElement").unbind('click');
$("#myElement").unbind();
这是删除所有
```

有4个图片，所以需要unbind循环到所有4个图片里。
用each方法 。

函数的声明有两种方法：
1.函数声明

```apple js
function  name1() {
  $("div").hide();
}
```

2.函数表达式

```apple js
var name2 = function() {
  xxxxxx;
}
```

区别主要在于执行时间。
第二种方法，直到代码运行到这里，是无法使用的。

