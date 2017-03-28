

[TOC]

# Javascript 入门经典

## 第一章 了解javascript

javascript能做什么？

比如说改善导航功能，验证表单，特殊效果。
ajax是用来不用刷新，就能后台和服务器交换数据的。

## 第二章 创建简单的脚本

只有一点，js文件要放在和html一个目录下。


```apple js
<script language="JavaScript" type="text/javascript" src="2-4.js"></script>
```

## 第三章 开始javascript编程

## 第五章 使用变量，字符串和数组

变量，全局变量和局部变量。

局部变量必须要用var，全局可以省略。

全部用var就对了。
还有，函数内就是局部变量，函数外就是全局变量。

字符串后面 .length 就是长度

字符串的一部分用 .substring(a,b) 从0开始，所以，3，6 意思是第四个到第六个。
0-9 就是345 

单个字符是charAt(9) 也是从0开始。

查找是indexOf()  test.indexOf("this");
也可以制定从第几个字母开始查找。

indexOf("",19)；

数组需要先声明， scores = new Array(4);

js里空格或者回车并不是换行。

```apple js
document.write(text.substring(3,6) + "<br>");
```
用br才可以。

join split 可以分离，结合字符串

sort 按照字母来排序
数字排序，就要自己写个函数了。

P64

## 第六章 使用函数和对象

### 定义函数

```apple js
function name(XXX) {
    alert("Greetings", + XXX);
  
}
```

### 使用函数

name("Fred");

### 返回值

return XXX;

### 方法

函数当然有方法。

一个例子：用对象来简化脚本

```apple js
function Card(name,address,work,home) {
    this.name = name;
    this.address = address;
    this.work = work;
    this.home = home;
    this.PrintCard = PrintCard;
}

// 新建一个方法：
function PrintCard() {
    line1 = "Name:" + this.name + "<br>\n";
    line2 = "Address:" + this.address + "<br>\n";
    line3 = "Work Phone:" + this.work + "<br>\n";
    line4 = "Home Phone:" + this.home + "<br>\n";
    document.write(line1,line2,line3,line4);
}

// 使用
holmes = new Card();
holmes.name = "Sharlock Holmes";
holmes.address = "baker street"
holmes.work = "18923789";
holmes.home = "324";

holmes.PrintCard();

```

### 扩展内置对象

```apple js
<script language="JavaScript" type="text/javascript">
    function addhead(level) {
        html = "H" + level;
        text = this.toString();
        start = "<" + html + ">";
        stop = "</" + html + ">";
        return start + text + stop;
    }
    String.prototype.heading = addhead;
    document.write("This is a heading 1".heading(1));
    document.write("This is a heading 2".heading(2));
    document.write("This is a heading 3".heading(3));
    
</script>
```

## 第七章 用条件和循环控制流程

和c语言一模一样呢。

```apple js
if () {
    语句1;
}
else {
    
}

switch(){
    case "1":
        XXX;
        break;
        
    default:
        XXX;
}

for 和c一样
while  do while

continue 跳一次for循环

还有一个for in  循环

```

## 第八章 使用内置函数和程序库

内置的math库，还有可以使用第三方库什么的

# 第三部分 深入学习DOM

# 第九章 事件响应

之前是按照顺序来进行的。要换成用事件来运行脚本。

```apple js
<a href="http://www.google.com"
   onmouseover="window.alert('You moved over the link.');">Click here</a>
```

这个会在鼠标移动到链接的时候就跳出警告。

更好的办法是在链接引用javascript的函数。

```apple js
<a href="#bottom" onmouseover="DoIt();">Move the mouse over this link.</a>
```

简单来说是在html设置一个id 元素。
然后在javascript里，用document.getElementById来寻找这个元素。
然后把这个.onclick 设置为函数。

第九章里的代码是一个链接，设置2个函数，显示des的和清除des的函数。
然后鼠标在上面就显示desc，离开就不显示。

```apple js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>9章的代码</title>
</head>
<body>
<p>移动这些链接，来查看说明</p>
<ul>
    <li><a href="order.html" id="order">Order Form</a> </li>
    <li><a href="email.html" id="email">Email Form</a> </li>
    <li><a href="complain.html" id="complain">Complain Form</a> </li>
</ul>
<h2 id="description"></h2>
<script language="JavaScript" type="text/javascript" src="9-2.js"></script>
</body>
</html>
```

```apple js
function cleardesc() {
    d = document.getElementById("description");
    d.innerHTML = "";

}

function hover(e) {
    if (!e) var e = window.event;
    whichlink = (e.target)? e.target.id : e.srcElement.id;
    if (whichlink == "order") desc = "Order a product";
    else if (whichlink == "email") desc = "Send us a message";
    else if (whichlink == "complain") desc = "Insult us";

    d = document.getElementById("description");
    d.innerHTML = desc;
}

orderlink = document.getElementById("order");
emaillink = document.getElementById("email");
complainlink = document.getElementById("complain");
orderlink.onmouseover=hover;
emaillink.onmouseover=hover;
complainlink.onmouseover=hover;
orderlink.onmouseout = cleardesc;
emaillink.onmouseout = cleardesc;
complainlink.onmouseout = cleardesc;
```

## 第十章 使用窗口和框架

这里要尝试操作窗口开关。
这里程序第一个是三个按钮。第一个创建一个窗口，第二个关闭。第三个关闭当前窗口。

第一个新建的窗口，无法在地址栏输入。第三个是无法关闭当前的firefox的。

```apple js
<form NAME="winform">
    <input type="button" value="Open new window"
    onclick="NewWin=window.open('','NewWin',
    'toolbar=no,status=no,width=200,height=100');">

    <p><input type="button" value="Close the window"
    onclick="NewWin.close();"></p>

    <p><input type="button" value="Close the mainwindow"
              onclick="window.close();"></p>

</form>
```

第二个例子是移动窗口位置的。跳过去了。没有本质区别。

这里最后一个例子是框架。不过貌似已经被deprecate了。

## 第十一章 利用表单获取数据


这里有表单验证例子。
不过懒得敲代码，跳过去了。

## 第十二章 使用样式表-css

这里写的就是css的基本。

js使用getelement的方式可以获取和改变css。

这里做的例子是，按照多选的颜色，动态改变文字颜色。

## 第十三章 使用w3c的dom





