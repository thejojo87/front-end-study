[TOC]

#如何用css进行网页布局

##第1章 内容简介

    
### 1-1 内容简介 (04:47)

>布局：网页UI设计师将有限的视觉元素进行有机排列的组合。
网页设计的特点：（纸媒和新媒体的异同出发）1：网页宽度可变，打破纸媒页面限制。2：头+内容主体（根据需要分栏）+页脚（不重要的内容）
常见布局：一列布局，两列布局，三列布局，混合布局
前端工程师：用技术将艺术设计呈现出来

## 第2章 用HTML+CSS实现最简单的网页布局效果：一列布局

### 2-1 一列布局 (04:09)

```apple js
margin(0,auto)前面代表垂直（上下），后面代表水平（左右）。auto代表居中的意思
```

jetbrain chrom有自动刷新的插件。
live edit， debug 模式就可以了。


### 2-3 编程练习

很简单

第3章 自适应宽度及固定宽度的二列布局的实现

## 3-1 二列布局 (03:06)

两个div，left和right，如果只是放着，那么就会充满页面。
所以一般放在一个父集上。

```apple js
<div class="main">
<div class="left"></div>
<div class="right"></div>
</div>
```

### 3-2 评测题目
    
    文档流：将窗口自上而下分成一行一行，并在每行中按从左至右的依次排放元素，即为文档流。
    
    有三种情况使得元素离开文档流而存在，分别是浮动 绝对布局 固定定位
    
### 3-3 编程练习

不光是设置 float:
text-align position top margin-left 20 360

## 第4章 用position定位方法实现自适应效果的三列布局

### 4-1 三列布局 (03:21)

左边和右边写成 absolute，中间设置margin就可以了。

    4-3 编程练习

## 第5章 用HTML+CSS实现复杂结构的混合布局

### 5-1 混合布局 (05:24)
   
混合布局用第一个单列布局来修改。

网页布局其实就是块之间的关系。
块挨着块，块叠加着块
    
    5-2 实践题
    5-3 编程挑战 