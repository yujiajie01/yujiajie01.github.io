---
title: JS 原型、原型链、构造器关系
date: 2019-12-04 14:06:50
tags: 
- js
categories: 工作学习
comments: true
cover: /img/js/js-org-cover.jpg
top_img: /img/js/TOP.jpg
---

# js 原型、原型链、构造器关系

<p>写在前面</p>

<ul>
<li>已实例化的对象只有__proto__属性</li>
<li>未实例化的对象有prototype和__proto__属性</li>
<li>构造器是prototype对象的一个属性</li>
</ul>

<p>上图 <br>
 <img src="https://img-blog.csdn.net/20170801164359406?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2VpeGluXzM4MjgzMTU5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""> <br>
测试走起</p>

## 1.普通函数

```
function A(x){
    this.x=x;
}
console.log(A.prototype.constructor)//function A()
console.log(A.prototype.__proto__===Object.prototype)//true
console.log(A.__proto__===Function.prototype)//true
```

<ul>
<li>函数原型(prototype)的构造器(constructor)指向构造函数自身</li>
<li>函数原型的原型链(__proto__)指向Object的原型(prototype)</li>
<li>函数对象的原型链指向Function(所有函数对象的爸爸)的原型</li>
</ul>



```
function A(x){
    this.x=x;
}
var A1=new A(1);
console.log(A1.__proto__===A.prototype)//true
console.log(A1.__proto__.constructor)//function A()
console.log(A1.constructor)//function A()
```

<ul>
<li>函数实例的原型链(__proto__)指向其构造函数的原型(prototype)</li>
<li><p>函数实例的构造器就是其构造函数</p>
</ul>

## 2.对象函数



```
console.log(Object.prototype.constructor)//function Object()
console.log(Object.__proto__===Function.prototype)//true
```

<ul>
<li>对象函数原型(prototype)的构造器(constructor)指向对象构造函数自身</li>
<li>当然Function也是Object他爸</li>
</ul>


```
var obj=new Object();
obj={
    a:'a',
    b:'b'
}
console.log(obj.__proto__===Object.prototype)//true
console.log(obj.__proto__.constructor)//function Object()
console.log(obj.constructor)//function Object()
```

<ul>
<li>对象的原型链(__proto__)指向对象函数的原型(prototype)</li>
<li><p>对象的构造器(constructor)是对象函数</p>
</ul>

## 3.Function函数




```
console.log(Function.prototype.constructor)//function Function() 
console.log(Function.__proto__===Function.prototype)//true
console.log(Function.prototype.__proto__===Object.prototype)//true
```

<ul>
<li>Function的构造器(constructor)指向Function</li>
<li>Function的原型链(__proto__)指向Function的原型(prototype)</li>
<li><p>Function原型的原型链(__proto__)指向Object的原型(prototype)</p>

## 4.归于虚无
</ul>


```
console.log(Object.prototype.__proto__===null)//true
```

<ul>
<li>Object原型(prototype)的原型链(__proto__)指向null</li>
</ul>                                    </div>
