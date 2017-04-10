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