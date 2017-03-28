[TOC]

# javascript深入浅出

## 1-1 JavaScript深入浅出课程介绍 (01:27)

## 1-2 JavaScript六种数据类型 (02:58)

JavaScript数据类型：number、string、Boolean、null、undefined、object对象（Function、Aarray、Date...）

javascript 不需要指定类型，所以有很多隐式转换。
比如说字符串+数字就会被认为是字符串拼接。
- 就理解为数字运算。


1-3 [JavaScript]隐式转换 (04:47)


1-4 [JavaScript]包装对象 (04:03)


##1-5 [JavaScript]类型检测 (09:44)

1.typeof :适合基本类型 和函数对象的检测，遇到null失效
2.instanceof基于原型链检测，适合自定义对象，也可以用来检测原生对象
  在不同iframe和window间检测时失效。
3.Object.prototype.toString适合内置对象和基元对象
  Object.prototype.toString.apply([]) //"[Object Array]"
  Object .prototype.toString.apply(function(){});    //"[Object function]"
  Object .prototype.toString.apply(null);    //"[Object null]'
  Object .prototype.toString.apply(undefined);    //"[Object object]"
  PS：ie6/7/8下存在兼容性问题，在检测null时会返回object
4.constructor构造器
每个对象都有个constructor属性，它指向该对象的构造函数类型，不过该属性的值可以被改写的，所以用它的判断并不可靠


1-6 编程练习 


## 第八章 OOP上

## 8-1 概念与继承

```apple js
function  Person(name,age) {
    this.name = name;
    this.age = age;
  
}

Person.prototype.hi = function() {
    console.log("Hi,my name is" + this.name + ",I'm" + this.age + "years old now.");
    
};

Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;
Person.prototype.walk = function() {
    console.log(this.name + "is walking...");
  
};

function Student(name,age,className) {
    Person.call(this,name,age);
    this.className = className;
  
}

// 这里就是继承了。
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```

