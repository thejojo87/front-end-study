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
