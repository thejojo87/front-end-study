
# 关于html的那些事情

[TOC]

# 第一章 HTML介绍
## 1-1 代码初体验，制作第一个网页

其实就是一个默认的html文件

html，head，body没了

## 1-2 Html和CSS的关系

交互都用javascript

css可以在head，title下面style里面填写。

## 1-3 认识html标签

p是段落，img是图片

```angular2html
<img src="1.jpg">
```

## 1-4 标签的语法

标签不分大小写，但是建议小写。

## 1-6 认识head标签

head里大概有这么几个

```angular2html
<head>
    <title>...</title>
    <meta>
    <link>
    <style>...</style>
    <script>...</script>
</head>
```
## 1-7 了解HTML代码注释

```angular2html
<!--注释文字  -->
```
# 第二章 认识标签

## 2-1 语义化，让网页更好的被搜索引擎理解

## 2-2 <body>标签，网页上显示的内容放在这里

```angular2html
<em></em> <!--倾斜-->
<srong></strong> <!--加粗--> strong
<i></i> (斜体) italic
<b></b> (加粗) bold
<u></u> （下划线） underline
<span></span> 可以赋值给它 比如 <span style= "color: red;">美国梦</span> 美国梦就会变成红色
```
## 2-6 使用<span>标签为文字设置单独样式

span是没有语义的，这个就是用来设置单独的样式。

span使用后在上面title下面添加定义

```angular2html
<style>
span{
    color:blue;
}
</style>
```

## 2-7 q标签，短文本引用

## 2-8 blockquote标签长文本引用

引用文本比较长，所以使用<blockquote>。

```angular2html
<blockquote>引用文本</blockquote>
```

## 2-9 使用<br>标签分行显示文本

<br>表示分行

## 2-10 为你的网页添加一些空格

```angular2html

&nbsp;

```
这个就是一个空格

## 2-11 认识hr标签，添加水平横线

hr就是水平横线

## 2-12 address地址

另起一行然后斜体

## 2-13 code 插入代码

code

## 2-14 pre大段代码

```html
<pre></pre>

在上面的例子中可以看到代码中的空格，换行符都保留下来。如果用以前的方法，回车需要输入<br>签，空格需要输入&nbsp;
```

# 第三章 认识标签（第二部分）

## 3-1 使用ul添加新闻信息列表

ul的意思是unordered lists

ul下面用li来表示

```angular2html
<ul>
  <li>精彩少年</li>
  <li>美丽突然出现</li>
  <li>触动心灵的旋律</li>
</ul>
```

## 3-2 使用ol，添加图片销售排行榜

ol当然就是前面有序列号的list了。

## 3-3 认识div在排版中的作用
div当然就是容器了。

## 3-4 给div命名，使逻辑更加清晰

id就是div的名称
```angular2html
<div  id="版块名称">…</div>
```

## 3-5 table标签，认识网页上的表格

创建表格的四个元素：

table、tbody、tr、th、td

```angular2html
1、<table>…</table>：整个表格以<table>标记开始、</table>标记结束。

2、<tbody>…</tbody>：当表格内容非常多时，表格会下载一点显示一点，但如果加上<tbody>标签后，这个表格就要等表格内容全部下载完才会显示。如右侧代码编辑器中的代码。

3、<tr>…</tr>：表格的一行，所以有几对tr 表格就有几行。

4、<td>…</td>：表格的一个单元格，一行中包含几对<td>...</td>，说明一行中就有几列。

5、<th>…</th>：表格的头部的一个单元格，表格表头。

6、表格中列的个数，取决于一行中数据单元格的个数
```

table如果没有添加css样式，那么浏览器里是不会显示表格的。
table，tbody，tr，th（td）

## 3-6 用css样式，为表格加入边框

```angular2html
<style type="text/css">
table tr td,th{border:1px solid #000;}
</style>
```
head里添加样式，这也就意味着，用bootstrap也是如此。
## 3-7 caption标签，为表格添加标题和摘要

```angular2html
语法：<table summary="表格简介文本">
<caption>标题文本</caption>
```

# 第四章 认识标签（第三部分）

## 4-1 使用a标签，链接到另一个页面

title是鼠标划过去显示的

```html
<a  href="目标网址"  title="鼠标滑过显示的文本">链接显示的文本</a>
```

## 4-2 在新建浏览器打开链接

a标签里target就可以了

```html
<a href="目标网址" target="_blank">click here!</a>
```

## 4-3 使用mailto在网页中链接Email地址

如果mailto后面同时有多个参数的话，第一个参数必须以“?”开头，后面的参数每一个都以“&”分隔。

这一个就是发送邮件的。

## 4-4 认识img标签，为网页插入图片

```html
语法：

<img src="图片地址" alt="下载失败时的替换文本" title = "提示文本">

举例：

<img src = "myimage.gif" alt = "My Image" title = "My Image" />

讲解：

1、src：标识图像的位置；

2、alt：指定图像的描述性文本，当图像不可见时（下载不成功时），可看到该属性指定的文本；

3、title：提供在图像可见时对图像的描述(鼠标滑过图片时显示的文本)；

4、图像可以是GIF，PNG，JPEG格式的图像文件。
```

# 第五章 与浏览者交互，表单标签

## 5-1 使用表单标签，与用户交互

```html
语法：

<form   method="传送方式"   action="服务器文件">

讲解：

1.<form> ：<form>标签是成对出现的，以<form>开始，以</form>结束。

2.action ：浏览者输入的数据被传送到的地方,比如一个PHP页面(save.php)。

3.method ： 数据传送的方式（get/post）。
```

## 5-2 文本输入框，密码输入框

```html
语法：

<form   method="传送方式"   action="服务器文件">

讲解：

1.<form> ：<form>标签是成对出现的，以<form>开始，以</form>结束。

2.action ：浏览者输入的数据被传送到的地方,比如一个PHP页面(save.php)。

3.method ： 数据传送的方式（get/post）。
```

## 5-3 文本域，支持多行文本输入

```html
语法：

<form   method="传送方式"   action="服务器文件">

讲解：

1.<form> ：<form>标签是成对出现的，以<form>开始，以</form>结束。

2.action ：浏览者输入的数据被传送到的地方,比如一个PHP页面(save.php)。

3.method ： 数据传送的方式（get/post）。

语法：

<form   method="传送方式"   action="服务器文件">

讲解：

1.<form> ：<form>标签是成对出现的，以<form>开始，以</form>结束。

2.action ：浏览者输入的数据被传送到的地方,比如一个PHP页面(save.php)。

3.method ： 数据传送的方式（get/post）。
```

## 5-4 使用单选框，复选框，让用户选择

```angular2html
单选框和复选框，两者的区别是单选框中的选项用户只能选择一项，而复选框中用户可以任意选择多项，甚至全选。请看下面的例子:

语法：

<input   type="radio/checkbox"   value="值"    name="名称"   checked="checked"/>

1、type:

   当 type="radio" 时，控件为单选框

   当 type="checkbox" 时，控件为复选框

2、value：提交数据到服务器的值（后台程序PHP使用）

3、name：为控件命名，以备后台程序 ASP、PHP 使用

4、checked：当设置 checked="checked" 时，该选项被默认选中

同一组的单选按钮，name 取值一定要一致，比如上面例子为同一个名称“radioLove”，这样同一组的单选按钮才可以起到单选的作用。

```

## 5-5 使用下拉列表框，节省空间

selected这个是用来默认值的。


```angular2html
<form action="save.php" method="post" >
    <label>爱好:</label>
    <select>
      <option value="看书">看书</option>
      <option value="旅游">旅游</option>
      <option value="运动">运动</option>
      <option value="购物" selected="selected">购物</option>
    </select>
</form>
```

## 5-6 使用下拉列表框进行多选

上面的select标签里面添加multiple="multipled" 就可以多选了。
按住ctrl就可以多选。



## 5-7 使用提交按钮，提交数据

```angular2html
语法：

<input   type="submit"   value="提交">

type：只有当type值设置为submit时，按钮才有提交作用

value：按钮上显示的文字
```

## 5-8 使用重置按钮，重置表单信息

```angular2html
发现书写有误，可以使用重置按钮使输入框恢复到初始状态。只需要把type设置为"reset"就可以。

语法：

<input type="reset" value="重置">

type：只有当type值设置为reset时，按钮才有重置作用

value：按钮上显示的文字
```

这个会把整个form的数据全部清空。


## 5-9 form表单红的label标签

```angular2html
label标签不会向用户呈现任何特殊效果，它的作用是为鼠标用户改进了可用性。如果你在 label 标签内点击文本，就会触发此控件。就是说，当用户单击选中该label标签时，浏览器就会自动将焦点转到和标签相关的表单控件上（就自动选中和该label标签相关连的表单控件上）。

语法：

<label for="控件id名称">

注意：标签的 for 属性中的值应当与相关控件的 id 属性值一定要相同。
```

简单说，就是一个label，文字，加一个for字段，就关联了文字和选项。

# 第六章 开始学习CSS，为网页添加样式
CSS全称为“层叠样式表 (Cascading Style Sheets)”，它主要是用于定义HTML内容在浏览器内的显示样式，如文字大小、颜色、字体加粗等。


## 6-1 认识css样式

比如说p标签的内容就可以

```angular2html
p{
   font-size:12px;
   color:red;
   font-weight:bold;
}
```

## 6-2 css样式的优势

这里什么也没有，就是可以把一些单词，用span什么的标签概括起来，然后设置样式。

## 6-3 css代码语法

css的格式就是：
选择符{声明}
声明就是 属性：值

p{
    color:red;
}

最后一行可以没有分号，不过为了以后方便，还是要加上分号。

## 6-4 css注释代码

css的注释是 /* 注释内容 */


# 第七章 css样式基本知识

## 7-1 内联式css样式，直接写在现有的HTML标签中

直接在html标签里写上，用双引号，写好几个。

```apple js
<p style="color:red;font-size:12px">这里文字是红色。</p>
```


## 7-2 嵌入式css样式，写在当前的文件中

在上面的style里面写上。

```apple js
<style type="text/css">
span{
color:red;
}
</style>
```

## 7-3 外部式css样式，写在单独的一个文件中

head里用href方式写在文件里。

```apple js
在<head>内（不是在<style>标签内）使用<link>标签将css样式文件链接到HTML文件内，如下面代码：

<link href="base.css" rel="stylesheet" type="text/css" />

注意：

1、css样式文件名称以有意义的英文字母命名，如 main.css。

2、rel="stylesheet" type="text/css" 是固定写法不可修改。

3、<link>标签位置一般写在<head>标签之内。
```

## 7-4 三种方法的优先级

内联式 > 嵌入式 > 外部式
但是嵌入式>外部式有一个前提：嵌入式css样式的位置一定在外部式的后面。

```apple js
<link href="style.css" rel="stylesheet" type="text/css">
<style type="text/css">
span{
   color:red;
}
</style>
```
其实总结来说，就是--就近原则（离被设置元素越近优先级别越高）
内联式、嵌入式、外部式样式表中css样式是在的相同权值的情况下

# 第八章 css选择器

## 8-1 什么是选择器

```apple js
每一条css样式声明（定义）由两部分组成，形式如下：

选择器{
    样式;
}

在{}之前的部分就是“选择器”，“选择器”指明了{}中的“样式”的作用对象，也就是“样式”作用于网页中的哪些元素。
```

## 8-2 标签选择器

```apple js
标签选择器其实就是html代码中的标签。如右侧代码编辑器中的<html>、<body>、<h1>、<p>、<img>
```

## 8-3 类选择器

这个最常见了。
span等标签里添加class

```apple js
语法：

.类选器名称{css样式代码;}

注意：

1、英文圆点开头

2、其中类选器名称可以任意起名（但不要起中文噢）

使用方法：

第一步：使用合适的标签把要修饰的内容标记起来，如下：

<span>胆小如鼠</span>

第二步：使用class="类选择器名称"为标签设置一个类，如下：

<span class="stress">胆小如鼠</span>

第三步：设置类选器css样式，如下：

.stress{color:red;}/*类前面要加入一个英文圆点*/
```

## 8-4 ID选择器

和类一样，只不过不是.号，而是#号。


## 8-5 类和ID选择器的区别

两个区别。
第一个是id只能用一次。
第二个是，遇到为一个元素设置多个样式的时候要用class，而不是id

```apple js
.stress{
    color:red;
}
.bigsize{
    font-size:25px;
}
<p>到了<span class="stress bigsize">三年级</span>下学期时，我们班上了一节公开课...</p>
```
## 8-6 子选择器

```apple js


还有一个比较有用的选择器子选择器，即大于符号(>),用于选择指定标签元素的第一代子元素。如右侧代码编辑器中的代码：

.food>li{border:1px solid red;}

这行代码会使class名为food下的子元素li（水果、蔬菜）加入红色实线边框。

```
## 8-7 包含后代选择器

```apple js


包含选择器，即加入空格,用于选择指定标签元素下的后辈元素。如右侧代码编辑器中的代码：

.first  span{color:red;}

这行代码会使第一段文字内容中的“胆小如鼠”字体颜色变为红色。

请注意这个选择器与子选择器的区别，子选择器（child selector）仅是指它的直接后代，或者你可以理解为作用于子元素的第一代后代。而后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。

总结：>作用于元素的第一代后代，空格作用于元素的所有后代。

```

## 8-8 通用选择器

```apple js


通用选择器是功能最强大的选择器，它使用一个（*）号指定，它的作用是匹配html中所有标签元素，如下使用下面代码使用html中任意标签元素字体颜色全部设置为红色：

* {color:red;}

```
## 8-9 伪类选择符

```apple js
更有趣的是伪类选择符，为什么叫做伪类选择符，它允许给html不存在的标签（标签的某种状态）设置样式，比如说我们给html中一个标签元素的鼠标滑过的状态来设置字体颜色：

a:hover{color:red;}

上面一行代码就是为 a 标签鼠标滑过的状态设置字体颜色变红。这样就会使第一段文字内容中的“胆小如鼠”文字加入鼠标滑过字体颜色变为红色特效。

关于伪选择符：

    关于伪类选择符，到目前为止，可以兼容所有浏鉴器的“伪类选择符”就是 a 标签上使用 :hover 了（其实伪类选择符还有很多，尤其是 css3 中，但是因为不能兼容所有浏览器，本教程只是讲了这一种最常用的）。其实 :hover 可以放在任意的标签上，比如说 p:hover，但是它们的兼容性也是很不好的，所以现在比较常用的还是 a:hover 的组合。
```

## 8-10 分组选择器

```apple js


当你想为html中多个标签元素设置同一个样式时，可以使用分组选择符（，），如下代码为右侧代码编辑器中的h1、span标签同时设置字体颜色为红色：

h1,span{color:red;}

它相当于下面两行代码：

h1{color:red;}
span{color:red;}


```

# 第九章css的继承 层叠和特殊性

## 9-1 继承

有些样式是有继承性质的，比如颜色。p下面span标签也会改变。
但有些没有，比如边框，就不会。


## 9-2 特殊性
标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100。

```apple js
p{color:red;} /*权值为1*/
p span{color:green;} /*权值为1+1=2*/
.warning{color:white;} /*权值为10*/
p span.warning{color:purple;} /*权值为1+1+10=12*/
#footer .note p{color:yellow;} /*权值为100+10+1=111*/

注意：还有一个权值比较特殊--继承也有权值但很低，有的文献提出它只有0.1，所以可以理解为继承的权值最低。
```

## 9-3 层叠
如果在html文件中对于同一个元素可以有多个css样式存在并且这多个css样式具有相同权重值怎么办？
后面的样式会覆盖前面的样式。
其实就是近的有效。
所以：
内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。

## 9-4 重要性
!important 添加在；号前面就是优先级最高了

# 第十章 css格式化排版

## 10-1 文字排版-字体

```apple js
为网页中的文字设置字体为宋体。

body{font-family:"宋体";}

这里注意不要设置不常用的字体，因为如果用户本地电脑上如果没有安装你设置的字体，就会显示浏览器默认的字体。（因为用户是否可以看到你设置的字体样式取决于用户本地电脑上是否安装你设置的字体。）
现在一般网页喜欢设置“微软雅黑”，如下代码：

body{font-family:"Microsoft Yahei";}

或

body{font-family:"微软雅黑";}

注意：第一种方法比第二种方法兼容性更好一些。
```

## 10-2 文字排版-字号颜色

```apple js
可以使用下面代码设置网页中文字的字号为12像素，并把字体颜色设置为#666(灰色)：

body{font-size:12px;color:#666}
```

## 10-3 文字排版-粗体

p span{font-weight:bold;}

## 10-4 文字排版-斜体
p a{font-style:italic;}

## 10-5 文字排版-下斜线

```apple js
有些情况下想为文字设置为下划线样式，这样可以在视觉上强调文字，可以使用下面代码来实现：

p a{text-decoration:underline;}
```

## 10-6 文字排版-删除线

{text-decoration:line-through;}

## 10-7 段落排版-缩进

p{text-indent:2em;}

## 10-8 段落排版-行间距（行高）

p{line-height:2em;}

## 10-9 段落排版-中文字间距，字母间距

文字间隔或者字母间隔就可以使用    letter-spacing 来实现

h1{letter-spacing:20px;}

注意：这个样式使用在英文单词时，是设置字母与字母之间的间距。

单词间距设置：

如果我想设置英文单词之间的间距呢？可以使用 word-spacing 来实现。

## 10-10 段落排版-对齐

div{text-align:center;} left right

# 第十一章 css盒模型

##11-1 元素分类

```
在CSS中，html中的标签元素大体被分为三种不同的类型：块状元素、内联元素(又叫行内元素)和内联块状元素。

常用的块状元素有：

<div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>

常用的内联元素有：

内联元素就是 行内元素

<a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>

常用的内联块状元素有：

<img>、<input>

```

##11-2 元素分类--块级元素

```apple js
。设置display:block就是将元素显示为块级元素。如下代码就是将内联元素a转换为块状元素，从而使a元素具有块状元素特点。

a{display:block;}

块级元素特点：

1、每个块级元素都从新的一行开始，并且其后的元素也另起一行。（真霸道，一个块级元素独占一行）

2、元素的高度、宽度、行高以及顶和底边距都可设置。

3、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。
```

##11-3 元素分类--内联元素

```apple js
在html中，<span>、<a>、<label>、 <strong> 和<em>就是典型的内联元素（行内元素）（inline）元素。当然块状元素也可以通过代码display:inline将元素设置为内联元素。如下代码就是将块状元素div转换为内联元素，从而使 div 元素具有内联元素特点。

 div{
     display:inline;
 }

......

<div>我要变成内联元素</div>

内联元素特点：

1、和其他元素都在一行上；

2、元素的高度、宽度及顶部和底部边距不可设置；

3、元素的宽度就是它包含的文字或图片的宽度，不可改变。
```
##11-4 元素分类--内联块状元素

```apple js
内联块状元素（inline-block）就是同时具备内联元素、块状元素的特点，代码display:inline-block就是将元素设置为内联块状元素。(css2.1新增)，<img>、<input>标签就是这种内联块状标签。

inline-block 元素特点：

1、和其他元素都在一行上；

2、元素的高度、宽度、行高以及顶和底边距都可设置。
```
##11-5 什么是盒模型 (02:14)

```apple js
盒子模型的内容可以是文字，图片，和标签元素。月饼盒与月饼之间的距离叫做内填充padding，月饼盒与另外一个月饼盒之间的距离叫做外边距margin，盒子的边框叫做border。内填充，外边距，边框都有四个方向（top,bottom,left,right）。实际高度=上下内填充的高度+上下边框的高度+内容的高度，实际宽度=左右内填充的宽度+左右边框的宽度+内容的宽度。块级标签，比如<div><ul><ol><p><h><table>，都具有盒子模型的特征。
```

##11-6 盒模型--边框（一）

```apple js
盒子模型的边框就是围绕着内容及补白的线，这条线你可以设置它的粗细、样式和颜色(边框三个属性)。

如下面代码为 div 来设置边框粗细为 2px、样式为实心的、颜色为红色的边框：

div{
    border:2px  solid  red;
}

上面是 border 代码的缩写形式，可以分开写：

div{
    border-width:2px;
    border-style:solid;
    border-color:red;
}

注意：

1、border-style（边框样式）常见样式有：

dashed（虚线）| dotted（点线）| solid（实线）。


2、border-color（边框颜色）中的颜色可设置为十六进制颜色，如:

border-color:#888;//前面的井号不要忘掉。


3、border-width（边框宽度）中的宽度也可以设置为：

thin | medium | thick（但不是很常用），最常还是用象素（px）。
```
##11-7 盒模型--边框（二）

```apple js
如果有想为 p 标签单独设置下边框，而其它三边都不设置边框样式怎么办呢？css 样式中允许只为一个方向的边框设置样式：

div{border-bottom:1px solid red;}

同样可以使用下面代码实现其它三边(上、右、左)边框的设置：

border-top:1px solid red;
border-right:1px solid red; 
border-left:1px solid red;
```

##11-8 盒模型--宽度和高度

```apple js


盒模型宽度和高度和我们平常所说的物体的宽度和高度理解是不一样的，css内定义的宽（width）和高（height），指的是填充以里的内容范围。

因此一个元素实际宽度（盒子的宽度）=左边界+左边框+左填充+内容宽度+右填充+右边框+右边界。

元素的高度也是同理。

比如：

css代码：

div{
    width:200px;
    padding:20px;
    border:1px solid red;
    margin:10px;    
}

html代码：

<body>
   <div>文本内容</div>
</body>

元素的实际长度为：10px+1px+20px+200px+20px+1px+10px=262px。在chrome浏览器下可查看元素盒模型，如下图：


```

##11-9 盒模型--填充

```apple js
元素内容与边框之间是可以设置距离的，称之为“填充”。填充也可分为上、右、下、左(顺时针)。如下代码：

div{padding:20px 10px 15px 30px;}

顺序一定不要搞混。可以分开写上面代码：

div{
   padding-top:20px;
   padding-right:10px;
   padding-bottom:15px;
   padding-left:30px;
}

如果上、右、下、左的填充都为10px;可以这么写

div{padding:10px;}

如果上下填充一样为10px，左右一样为20px，可以这么写：

div{padding:10px 20px;}
```

##11-10 盒模型-边界

```apple js
元素与其它元素之间的距离可以使用边界（margin）来设置。边界也是可分为上、右、下、左。如下代码：

div{margin:20px 10px 15px 30px;}

也可以分开写：

div{
   margin-top:20px;
   margin-right:10px;
   margin-bottom:15px;
   margin-left:30px;
}

如果上右下左的边界都为10px;可以这么写：

div{ margin:10px;}

如果上下边界一样为10px，左右一样为20px，可以这么写：

div{ margin:10px 20px;}

总结一下：padding和margin的区别，padding在边框里，margin在边框外。
```

# 第十二章 css布局模型

## 12-1 css布局模型

在网页中，元素有三种布局模型：
1、流动模型（Flow）
2、浮动模型 (Float)
3、层模型（Layer）

## 12-2 流动模型（一）

先来说一说流动模型，流动（Flow）是默认的网页布局模式。也就是说网页在默认状态下的 HTML 网页元素都是根据流动模型来分布网页内容的。

流动布局模型具有2个比较典型的特征：

第一点，块状元素都会在所处的包含元素内自上而下按顺序垂直延伸分布，因为在默认状态下，块状元素的宽度都为100%。实际上，块状元素都会以行的形式占据位置。如右侧代码编辑器中三个块状元素标签(div，h1，p)宽度显示为100%。

## 12-3 流动模型（二）

在流动模型下，内联元素都会在所处的包含元素内从左到右水平分布显示。（内联元素可不像块状元素这么霸道独占一行）

右侧代码编辑器中内联元素标签a、span、em、strong都是内联元素。

## 12-4 浮动模型

任何元素在默认情况下是不能浮动的，但可以用 CSS 定义为浮动，如 div、p、table、img 等元素都可以被定义为浮动。
float:left;


## 12-5 什么是层模型？

层模型有三种形式：

1、绝对定位(position: absolute)

2、相对定位(position: relative)

3、固定定位(position: fixed)


## 12-6 层模型--绝对定位

```apple js
如果想为元素设置层模型中的绝对定位，需要设置position:absolute(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。

如下面代码可以实现div元素相对于浏览器窗口向右移动100px，向下移动50px。

div{
    width:200px;
    height:200px;
    border:2px red solid;
    position:absolute;
    left:100px;
    top:50px;
}
<div id="div1"></div>
```

## 12-7 层模型--相对定位

如果想为元素设置层模型中的相对定位，需要设置position:relative（表示相对定位），它通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。


## 12-8 层模型--固定定位

fixed：表示固定定位，与absolute定位类型类似，但它的相对移动的坐标是视图（屏幕内的网页窗口）本身。由于视图本身是固定的，它不会随浏览器窗口的滚动条滚动而变化，除非你在屏幕中移动浏览器窗口的屏幕位置，或改变浏览器窗口的显示大小，因此固定定位的元素会始终位于浏览器窗口内视图的某个位置，不会受文档流动影响，这与background-attachment:fixed;属性功能相同。以下代码可以实现相对于浏览器视图向右移动100px，向下移动50px。并且拖动滚动条时位置固定不变。
position:fixed;
bottom:0;
right:0;
好像是弹窗广告

## 12-9 Relative与Absolute组合使用 

```apple js
小伙伴们学习了12-6小节的绝对定位的方法：使用position:absolute可以实现被设置元素相对于浏览器（body）设置定位以后，大家有没有想过可不可以相对于其它元素进行定位呢？答案是肯定的，当然可以。使用position:relative来帮忙，但是必须遵守下面规范：

1、参照定位的元素必须是相对定位元素的前辈元素：

<div id="box1"><!--参照定位的元素-->
    <div id="box2">相对参照元素进行定位</div><!--相对定位元素-->
</div>

从上面代码可以看出box1是box2的父元素（父元素当然也是前辈元素了）。

2、参照定位的元素必须加入position:relative;

#box1{
    width:200px;
    height:200px;
    position:relative;        
}

3、定位元素加入position:absolute，便可以使用top、bottom、left、right来进行偏移定位了。

#box2{
    position:absolute;
    top:20px;
    left:30px;         
}

这样box2就可以相对于父元素box1定位了（这里注意参照物就可以不是浏览器了，而可以自由设置了）。
```

# 第十三章 css代码缩写，占用更少的带宽

## 13-1 盒模型代码简写

```apple js


还记得在讲盒模型时外边距(margin)、内边距(padding)和边框(border)设置上下左右四个方向的边距是按照顺时针方向设置的：上右下左。具体应用在margin和padding的例子如下：

margin:10px 15px 12px 14px;/*上设置为10px、右设置为15px、下设置为12px、左设置为14px*/

通常有下面三种缩写方法:

1、如果top、right、bottom、left的值相同，如下面代码：

margin:10px 10px 10px 10px;

可缩写为：

margin:10px;

2、如果top和bottom值相同、left和 right的值相同，如下面代码：

margin:10px 20px 10px 20px;

可缩写为：

margin:10px 20px;

3、如果left和right的值相同，如下面代码：

margin:10px 20px 30px 20px;

可缩写为：

margin:10px 20px 30px;

注意：padding、border的缩写方法和margin是一致的。

```
## 13-2 颜色值缩写

```apple js


关于颜色的css样式也是可以缩写的，当你设置的颜色是16进制的色彩值时，如果每两位的值相同，可以缩写一半。

例子1：

p{color:#000000;}

可以缩写为：

p{color: #000;}

例子2：

p{color: #336699;}

可以缩写为：

p{color: #369;}
```
## 13-3 字体缩写 

```apple js


网页中的字体css样式代码也有他自己的缩写方式，下面是给网页设置字体的代码：

body{
    font-style:italic;
    font-variant:small-caps; 
    font-weight:bold; 
    font-size:12px; 
    line-height:1.5em; 
    font-family:"宋体",sans-serif;
}

这么多行的代码其实可以缩写为一句：

body{
    font:italic  small-caps  bold  12px/1.5em  "宋体",sans-serif;
}

注意：

1、使用这一简写方式你至少要指定 font-size 和 font-family 属性，其他的属性(如 font-weight、font-style、font-variant、line-height)如未指定将自动使用默认值。

2、在缩写时 font-size 与 line-height 中间要加入“/”斜扛。

一般情况下因为对于中文网站，英文还是比较少的，所以下面缩写代码比较常用：

body{
    font:12px/1.5em  "宋体",sans-serif;
}

只是有字号、行间距、中文字体、英文字体设置。

```

# 第十四章 单位和值

## 14-1 颜色值

```apple js
在网页中的颜色设置是非常重要，有字体颜色（color）、背景颜色（background-color）、边框颜色（border）等，设置颜色的方法也有很多种：

1、英文命令颜色

前面几个小节中经常用到的就是这种设置方法：

p{color:red;}

2、RGB颜色

这个与 photoshop 中的 RGB 颜色是一致的，由 R(red)、G(green)、B(blue) 三种颜色的比例来配色。

p{color:rgb(133,45,200);}

每一项的值可以是 0~255 之间的整数，也可以是 0%~100% 的百分数。如：

p{color:rgb(20%,33%,25%);}

3、十六进制颜色

这种颜色设置方法是现在比较普遍使用的方法，其原理其实也是 RGB 设置，但是其每一项的值由 0-255 变成了十六进制 00-ff。

p{color:#00ffff;}
```

## 14-2 长度值

```apple js
2、em

就是本元素给定字体的 font-size 值，如果元素的 font-size 为 14px ，那么 1em = 14px；如果 font-size 为 18px，那么 1em = 18px。如下代码：

p{font-size:12px;text-indent:2em;}

上面代码就是可以实现段落首行缩进 24px（也就是两个字体大小的距离）。

下面注意一个特殊情况：

但当给 font-size 设置单位为 em 时，此时计算的标准以 p 的父元素的 font-size 为基础。如下代码：

html:

<p>以这个<span>例子</span>为例。</p>

css:

p{font-size:14px}
span{font-size:0.8em;}

结果 span 中的字体“例子”字体大小就为 11.2px（14 * 0.8 = 11.2px）。

3、百分比

p{font-size:12px;line-height:130%}

设置行高（行间距）为字体的130%（12 * 1.3 = 15.6px）。
```

# 第十五章 css样式设置小技巧
## 15-1 水平居中设置-行内元素

```apple js
我们在实际工作中常会遇到需要设置水平居中的场景，比如为了美观，文章的标题一般都是水平居中显示的。

这里我们又得分两种情况：行内元素 还是 块状元素 ，块状元素里面又分为定宽块状元素，以及不定宽块状元素。今天我们先来了解一下行内元素怎么进行水平居中？

如果被设置元素为文本、图片等行内元素时，水平居中是通过给父元素设置 text-align:center 来实现的。
```

## 15-2 水平居中设置-定宽块状元素

```apple js
当被设置元素为 块状元素 时用 text-align：center 就不起作用了，这时也分两种情况：定宽块状元素和不定宽块状元素。

这一小节我们先来讲一讲定宽块状元素。(定宽块状元素：块状元素的宽度width为固定值。)

满足定宽和块状两个条件的元素是可以通过设置“左右margin”值为“auto”来实现居中的。我们来看个例子就是设置 div 这个块状元素水平居中：

html代码：

<body>
  <div>我是定宽块状元素，哈哈，我要水平居中显示。</div>
</body>

css代码：

<style>
div{
    border:1px solid red;/*为了显示居中效果明显为 div 设置了边框*/
    
    width:200px;/*定宽*/
    margin:20px auto;/* margin-left 与 margin-right 设置为 auto */
}

</style>

也可以写成：

margin-left:auto;
margin-right:auto;

注意：元素的“上下 margin” 是可以随意设置的。
```

## 15-3 水平居中总结-不定宽块状元素方法（一）

```apple js
不定宽度的块状元素有三种方法居中（这三种方法目前使用的都很多）：

    加入 table 标签
    设置 display: inline 方法：与第一种类似，显示类型设为 行内元素，进行不定宽元素的属性设置
    设置 position:relative 和 left:50%：利用 相对定位 的方式，将元素向左偏移 50% ，即达到居中的目的

这一小节我们来讲一下第一种方法：

为什么选择方法一加入table标签? 是利用table标签的长度自适应性---即不定义其长度也不默认父元素body的长度（table其长度根据其内文本长度决定），因此可以看做一个定宽度块元素，然后再利用定宽度块状居中的margin的方法，使其水平居中。

第一步：为需要设置的居中的元素外面加入一个 table 标签 ( 包括 <tbody>、<tr>、<td> )。

第二步：为这个 table 设置“左右 margin 居中”（这个和定宽块状元素的方法一样）。
```

## 15-4 水平居中总结-不定宽块状元素方法（二）

```apple js
可以使不定宽块状元素水平居中之外，本节介绍第2种实现这种效果的方法，改变元素的display类型为行内元素，利用其属性直接设置。

第二种方法：改变块级元素的 display 为 inline 类型（设置为 行内元素 显示），然后使用 text-align:center 来实现居中效果。如下例子：
```

## 15-5 水平居中总结-不定宽块状元素方法（三）

跳过去了。

## 15-6 垂直居中-父元素高度确定的单行文本

```apple js
我们在实际工作中也会遇到需要设置垂直居中的场景，比如好多报纸的文章标题在左右一侧时，常常会设置为垂直居中，为了用户体验性好。

这里我们又得分两种情况：父元素高度确定的单行文本，以及父元素高度确定的多行文本。

本节我们先来看第一种父元素高度确定的单行文本, 怎么设置它为垂直居中呢？

父元素高度确定的单行文本的竖直居中的方法是通过设置父元素的 height 和 line-height 高度一致来实现的。(height: 该元素的高度，line-height: 顾名思义，行高（行间距），指在文本中，行与行之间的 基线间的距离 )。

line-height 与 font-size 的计算值之差，在 CSS 中成为“行间距”。分为两半，分别加到一个文本行内容的顶部和底部。

这种文字行高与块高一致带来了一个弊端：当文字内容的长度大于块的宽时，就有内容脱离了块。

如下代码：

<div class="container">
    hi,imooc!
</div>

css代码：

<style>
.container{
    height:100px;
    line-height:100px;
    background:#999;
}
</style>
```

## 15-7 垂直居中-父元素高度确定的多行文本（方法一）

```apple js


父元素高度确定的多行文本、图片等的竖直居中的方法有两种：

方法一：使用插入 table  (包括tbody、tr、td)标签，同时设置 vertical-align：middle。

css 中有一个用于竖直居中的属性 vertical-align，在父元素设置此样式时，会对inline-block类型的子元素都有用。下面看一下例子：

html代码：

<body>
<table><tbody><tr><td class="wrap">
<div>
    <p>看我是否可以居中。</p>
</div>
</td></tr></tbody></table>
</body>

css代码：

table td{height:500px;background:#ccc}

因为 td 标签默认情况下就默认设置了 vertical-align 为 middle，所以我们不需要显式地设置了。

```
## 15-8 垂直居中-父元素高度确定的多行文本（方法二）

```apple js
除了上一节讲到的插入table标签，可以使父元素高度确定的多行文本垂直居中之外，本节介绍另外一种实现这种效果的方法。但这种方法兼容性比较差，只是提供大家学习参考。

在 chrome、firefox 及 IE8 以上的浏览器下可以设置块级元素的 display 为 table-cell（设置为表格单元显示），激活 vertical-align 属性，但注意 IE6、7 并不支持这个样式, 兼容性比较差。

html代码：

<div class="container">
    <div>
        <p>看我是否可以居中。</p>
        <p>看我是否可以居中。</p>
        <p>看我是否可以居中。</p>
    </div>
</div>

css代码：

<style>
.container{
    height:300px;
    background:#ccc;
    display:table-cell;/*IE8以上及Chrome、Firefox*/
    vertical-align:middle;/*IE8以上及Chrome、Firefox*/
}
</style>

这种方法的好处是不用添加多余的无意义的标签，但缺点也很明显，它的兼容性不是很好，不兼容 IE6、7而且这样修改display的block变成了table-cell，破坏了原有的块状元素的性质。
```
## 15-9 隐性改变display类型

跳过去了。




