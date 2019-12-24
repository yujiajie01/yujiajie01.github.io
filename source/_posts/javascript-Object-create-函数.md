---
title: javascript Object.create()函数
date: 2019-12-04 15:02:15
tags: 
- js
categories: 工作学习
comments: true
cover: /img/js/js-create.jpg
top_img: /img/js/TOP.jpg
---

# javascript Object.create()函数
<p>Object.create() 方法会使用指定的原型对象及其属性去创建一个新的对象。 <br>

## 语法

```
 Object.create(proto, [ propertiesObject ])
```
## 参数

```
proto
一个对象，应该是新创建的对象的原型。
propertiesObject
可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符

```

## 测试<

<p>1参数proto为原型对象</p>

```
//实现继承
function Father(){}
function Child(){}
Child.prototype=Object.create(Father.prototype);
console.log(Child.prototype.__proto__===Father.prototype)//true
console.log(Child.__proto__===Father.__proto__)//true
//
function A(){}
var a=Object.create(A.prototype);//无prototype属性
console.log(a.__proto__===A.prototype)//true
```

<p>2参数proto为函数对象 </p>

```
function A(){}
var a1=Object.create(A)//有prototype属性
console.log(a1.prototype===A.prototype)//true
console.log(a1.__proto__===A)//true
//对比
var a2=new A();//无prototype属性
console.log(a2.__proto__===A.prototype)//true

```

<p>3参数proto为函数实例</p>

```
function A(){}
var A1=new A();
var a=Object.create(A1);//无prototype属性
console.log(a.__proto__===A1)//true

```
</div>