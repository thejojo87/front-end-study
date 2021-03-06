[TOC]
# 任务七：JavaScript和树（一）
 
 任务目的
 
     熟练JavaScript
     学习树这种数据结构的基本知识
 
 任务描述
 
     参考示例图，在页面中展现一颗二叉树的结构
     提供一个按钮，显示开始遍历，点击后，以动画的形式呈现遍历的过程
     二叉树的遍历算法和方式自定，前序中序后序皆可，但推荐可以提供多种算法的展示（增加多个按钮，每个按钮对应不同的算法）
     当前被遍历到的节点做一个特殊显示（比如不同的颜色）
     每隔一段时间（500ms，1s等时间自定）再遍历下一个节点
 
 任务注意事项
 
 ![mark](http://oc2aktkyz.bkt.clouddn.com/markdown/20170415/022321766.png)
     如果按照示例图中展示树，可以使用flexbox布局
     实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
     请注意代码风格的整齐、优雅
     代码中含有必要的注释
     建议不使用任何第三方库、框架
 
 在线学习参考资料
 
     JavaScript入门篇
     MDN JavaScript
     js数据结构和算法 二叉树
     Data Structures With JavaScript: Tree
     Computer science in JavaScript: Binary search tree

http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html




先递归生成二叉树吧。
4层是展示的极限了。

然后遍历。
有三种遍历。

（1）前序遍历（DLR），首先访问根结点，然后遍历左子树，最后遍历右子树。简记根-左-右。

（2）中序遍历（LDR），首先遍历左子树，然后访问根结点，最后遍历右子树。简记左-根-右。

（3）后序遍历（LRD），首先遍历左子树，然后遍历右子树，最后访问根结点。简记左-右-根。 
