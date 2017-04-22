/**
 * Created by thejojo on 2017/4/21.
 */

var win = document.getElementById("divFloat");
var close = document.getElementsByTagName("span")[0];
var title = document.getElementById("title");
// var confirm = document.getElementsByTagName("button")[0];
var cancel = document.getElementById("btnCancel");
var click = document.getElementById("btnLogin");
var mask = document.getElementById("mask");


// 创建eventUtil对象
var eventUtil = {
    // 添加
    addHandler: function(elt, type, handler) {
        if (elt.addEventListener) {
            elt.addEventListener(type, handler, false);
        } else if (elt.attachEvent) {
            elt.attachEvent("on" + type, handler);
        } else {
            elt["on" + type] = handler;
        }
    }
};


function setBlock() {
    // alert("aaa");
    win.style.display = "block";
    mask.style.display = "block";
}

function setNone() {
    // alert("bbb");
    win.style.display = "none";
    mask.style.display = "none";
}

function setDrag(event) {
    var disX, disY;
    event = event || window.event;
    disX = event.clientX - win.offsetLeft;
    disY = event.clientY - win.offsetTop;
    document.onmousemove = function(event) {
        event = event || window.event;
        win.style.left = event.clientX + 200 - disX + "px";
        win.style.top = event.clientY + 100 - disY + "px";
    };
    document.onmouseup = function() {
        document.onmousedown = null;
        document.onmousemove = null;
    }
}

eventUtil.addHandler(click, "click", setBlock);
eventUtil.addHandler(close, "click", setNone);
eventUtil.addHandler(cancel, "click", setNone);
eventUtil.addHandler(mask, "click", setNone);
eventUtil.addHandler(title, "mousedown", setDrag);
// eventUtil.addHandler(confirm, "click", function(){alert("这是一个弹出层")});

