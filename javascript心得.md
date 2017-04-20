[TOC]

## 1.获取input元素，id为aqi-input 的值

```javascript
document.getElementById("aqi-input").value;
```

## 2.innerHTML

一、JS中innerHTML、outerHTML、innerText 、outerText、value的区别与联系？
jS中设置或者获取所选内容的值：
①innerHTML :属性设置或返回该标签内的HTML。也就是从对象的起始位置到终止位置的全部内容,包括Html标签。
②outerHTML：属性设置或返回该标签及标签内的HTML。也就是从对象的该标签起始到终止位置的全部内容,包括Html标签。
如果要输出不含HTML标签的内容，可以使用innerHTML取得包含HTML标签的内容后，再用正则表达式去除HTML标签，
③inneText：从起始位置到终止位置的内容，但它去除html标签。（只能在IE和chrome下使用）
④outerText 设置(包括标签)或获取(不包括标签)对象的文本 <br><br>
⑤value：属性可设置或返回密码域的默认值。获取文本框的值

## 3.Javascript for 循环

有两种。
第一种是经典c方式。
第二种是for in 循环遍历对象的属性。

```html
<body>


<h3>污染城市列表</h3>
<ul id="aqi-list">
    <!--
        <li>第一名：福州（样例），10</li>
          <li>第二名：福州（样例），10</li> -->
</ul>
<button onclick="task2()">添加</button>

<script type="text/javascript">

    var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100]
    ];

    function task2() {

        /*
         在注释下方编写代码
         遍历读取aqiData中各个城市的数据
         将空气质量指数大于60的城市显示到aqi-list的列表中
         */

//        新建一个数组
        var answer = [];
//        用for循环，读取aqidata,然后符合条件的元素写入新数组里
        for (index in aqiData ){
            if (aqiData[index][1] >60) {
                answer.push(aqiData[index]);
            }
        }
        display(answer,"aqi-list");

//        获得数组长度，然后动态添加ul中的li节点

        function display(array,id) {
            var ul = document.getElementById(id);
            for (i=0;i<array.length;i++){
                var li = document.createElement("li");
                var num = i+1;
                li.innerHTML =  "第"+ num + "名:" + array[i][0] +"," + array[i][1];
                ul.appendChild(li);
            }
        }
    }

</script>

</body>
```

## 4.javascript 动态给ul添加li元素

```javascript
        function display(array,id) {
            var ul = document.getElementById(id);
            for (i=0;i<array.length;i++){
                var li = document.createElement("li");
                var num = i+1;
                li.innerHTML =  "第"+ num + "名:" + array[i][0] +"," + array[i][1];
                ul.appendChild(li);
            }
        }
```

## 5.如何截取特定的字符串？

3.截取类方法
(1)substring()

    stringObject.substring(start,end)

substring()是最常用到的字符串截取方法，它可以接收两个参数(参数不能为负值)，分别是要截取的开始位置和结束位置，它将返回一个新的字符串，其内容是从start处到end-1处的所有字符。若结束参数(end)省略，则表示从start位置一直截取到最后。

var str = 'abcdefg';
console.log(str.substring(1, 4));    //返回bcd
console.log(str.substring(1));    //返回bcdefg
console.log(str.substring(-1));    //返回abcdefg，传入负值时会视为0

(2) slice()

    stringObject.slice(start,end)

slice()方法与substring()方法非常类似，它传入的两个参数也分别对应着开始位置和结束位置。而区别在于，slice()中的参数可以为负值，如果参数是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符。

var str = 'abcdefg';
console.log(str.slice(1, 4));    //返回bcd
console.log(str.slice(-3, -1));    //返回ef
console.log(str.slice(1, -1));    //返回bcdef
console.log(str.slice(-1, -3));    //返回空字符串，若传入的参数有问题，则返回空

(3) substr()

    stringObject.substr(start,length)

substr()方法可在字符串中抽取从start下标开始的指定数目的字符。其返回值为一个字符串，包含从 stringObject的start（包括start所指的字符）处开始的length个字符。如果没有指定 length，那么返回的字符串包含从start到stringObject的结尾的字符。另外如果start为负数，则表示从字符串尾部开始算起。

var str = 'abcdefg';
console.log(str.substr(1, 3))    //返回bcd
console.log(str.substr(2))    //返回cdefg
console.log(str.substr(-2, 4))    //返回fg，目标长度较大的话，以实际截取的长度为准


## 6.javascript 获取ul中li的个数

```javascript


有这样一段代码：
<ul id="mycarousel">
        <li><img src=01_MED.jpg height=80 width=100/></li>
        <li><img src=02_MED.jpg height=80 width=100/></li>
        <li><img src=03_MED.jpg height=80 width=100/></li>
        <li><img src=04_MED.jpg height=80 width=100/></li>       
</ul>

<li>的数量是不固定的，现在需要通过javascript获取li的数量。

把getElementById和getElementsByTagName结合起来使用就可以实现：

temp = document.getElementById('mycarousel');
lis = temp.getElementsByTagName('li');
alert(lis.length); //显示li元素的个数

或者直接得到：

document.getElementById('mycarousel').getElementsByTagName('li').length

```

## 7.数组如何排序？

用sort和reverse方法。

reverse()方法相对而言要简单得多，它就是用来颠倒数组中元素的位置，并返回该数组的引用。

sort 后面可以添加函数。

```javascript
        data.sort(function (a,b){
            return a[1] - b[1];
        }).reverse();
```

## 8. 给按钮绑定事件的时候会触发一次事件，如何绑定而不触发？

用function包裹。

```javascript
    function init() {
        // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
        var btn = document.getElementById("sort-btn");
        btn.onclick = function () {
            btnHandle();
        };
    }
```

## 9. javascript 应该放在哪里？

head？body？

head 部分中的脚本: 需调用才执行的脚本或事件触发执行的脚本放在HTML的head部分中。当你把脚本放在head部分中时，可以保证脚本在任何调用之前被加载。
body 部分中的脚本: 当页面被加载时执行的脚本放在HTML的body部分。放在body部分的脚本通常被用来生成页面的内容。

放在head的时候，并没有执行init程序，按钮的onclick都没有执行，当然没反应了。


## 10. 如何插入ul下面li元素的第一个元素前面？

insertBefore()方法。
node.insertBefore(newnode,existingnode)

```javascript
//    先判断是左边还是右边，然后寻找ul，然后appendChildNode
    function addNum(value,leftOrRight) {
        var ul = document.getElementById("answer");
        var li = document.createElement("li");
        li.innerHTML = value;
        if (leftOrRight == 1){
            alert("left");
            ul.appendChild(li);
        }else {
            ul.insertBefore(li, ul.childNodes[0]);
        }
    }
```

## 11. 不知道为什么，ul删除节点，反应很迟钝


## 12.quicksort快速排序如何实现？

http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html


```javascript


    var quickSort = function(arr) {

    　　if (arr.length <= 1) { return arr; }

    　　var pivotIndex = Math.floor(arr.length / 2);

    　　var pivot = arr.splice(pivotIndex, 1)[0];

    　　var left = [];

    　　var right = [];

    　　for (var i = 0; i < arr.length; i++){

    　　　　if (arr[i] < pivot) {

    　　　　　　left.push(arr[i]);

    　　　　} else {

    　　　　　　right.push(arr[i]);

    　　　　}

    　　}

    　　return quickSort(left).concat([pivot], quickSort(right));

    };

```

## 13.li节点值？

```javascript
    //        可视化表达
    var draw = function() {
        var s;
        s = state.shift();
        if(s!== undefined){
            var ulDisplay = document.getElementById("answer2");
            var lis = ulDisplay.getElementsByTagName('div');
            for(var m = 0; m <s.length; m++){
                lis.item(m).innerHTML = s[m];
                var dataDiv =ulDisplay.querySelectorAll("div");
                dataDiv[m].style.height = s[m] + "px";
                dataDiv[m].style.top = (101 - s[m]) + "px";
            }
        }else{
            window.clearInterval(inter);
        }
    };
```

## 14. 除了alert，输出变量有什么？

console.log(display.innerHTML);
这个很好。

## 15. 如何结合for循环和时间间隔呢？

http://stackoverflow.com/questions/24293376/javascript-for-loop-with-timeout

 ```javascript
 var i = 0
 var id = window.setInterval(function(){
     if(i >= 10) {
         clearInterval(id);
         return;
     }
 
     console.log(i);
     i++;
 }, 1000)
 ``````
 
 ## 16. 二叉树遍历怎么搞？
 
 https://segmentfault.com/a/1190000000740261
 
 ## 17.如何生成随机正整数？
 
 从1到4的正整数。
 https://segmentfault.com/a/1190000002972940
 
```javascript
function getRandom(n,m){
  //省略特殊情形下的处理过程，比如n>m，或者n、m之一无法转化为有效数字；
  return Math.round(Math.random()*(m-n)+n);
}
```
 ## 18.如何生成随机字符串？
 
 http://bayescafe.com/webfrontend/generate-random-string-in-javascript.html
 
 ```javascript
function generateUIDNotMoreThan1million() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
}
```

## 19. 给所有div元素，增加值

 ```javascript
            console.log("生成结束了");
            var display = document.getElementById("main");
            var dataDiv = display.getElementsByTagName("div");
            console.log(dataDiv.length);
            for(i=0;i<dataDiv.length;i++){
                console.log(i);
                console.log(dataDiv);
                dataDiv[i].innerHTML = randamStr() + dataDiv[i].innerHTML;
            } 
```

## 20. javascript 复制
 
 https://www.zhihu.com/question/23031215
 
 字符串复制是可以的。
 但是很多时候却只是地址引用。
 如何能真正复制呢？
 数字、字符串是把值直接复制进去了，而数组、对象是把变量地址复制进去的。

 
 ## 21. hover叠加的时候如何只选择子元素，而不是父元素？
 
 ```javascript
<div class = "tree">
        <div class = "tree">
        
         </div>
 </div>
```

在这段代码里，我如果hover .tree 的话，鼠标与东到子元素的时候，父元素也跟着改变。
如何只改变子元素呢？


## 22. javascript 正则表达式

正则表达式可以用下面两种方式创建。

http://imweb.io/topic/56e804ef1a5f05dc50643106


```javascript
var pattern1 = /s$/;
var pattern2 = new RegExp('s$');
if(!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(input.value)){}
```

正则表达式貌似是 // 里面。
然后是^符号，这个是匹配字符串的开头，在多行检索中，匹配一行的开头
这个符号如果在[]内，就表示，非。
然后是[...]  方括号内任意字符
[^...] 不在方括号内的任意字符
开头，可以是[]内数字或者英文文字，或者中文。
+ 是重复符号。匹配前一项1次或多次，等价于{1,}

然后是$结尾。

test是一个方法
test() 	参数：字符串。返回true or false


```javascript
var regu =/^[1][3][0-9]...{9}$/;
var re = new RegExp(regu);
return re.test(s);
```

## 23. 添加监听事件

```javascript
    function city() {
        alert("ceshi ");
    }
    function init() {
        document.getElementById("city").addEventListener("change",city);
    }
```

## 24. 怎么才能获得selected事件？

```javascript
        var cityValue = document.getElementById("city");
        var value = cityValue.getElementsByTagName("option");
        if(value[2].selected){
            console.log("第二个被抓住了");
        }
```

## 25. 创建数组队列

```javascript
        data=[
            ["北京大学","清华大学","中国人民大学","北京师范大学"],
            ["复旦大学","上海交通大学","同济大学","华东师范大学"],
            ["武汉大学","华中科技大学","华中农业大学","武汉理工大学"],
            ["西安交通大学","西北大学","西北工业大学","陕西师范大学"]
        ];
```

## 26. 字符串当成数字

我遇到一个问题，获取了一个字符串 row = "4"
如果这个做 + 1 那么就变成字符串41 
为了要把这个变成数字，利用如果无法操作的时候先尝试转为数字的特性。
z = z *1
就可以了。


