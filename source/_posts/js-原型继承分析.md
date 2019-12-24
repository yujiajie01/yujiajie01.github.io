---
title: js 原型继承分析
date: 2019-12-04 14:31:09
tags: 
- js
categories: 工作学习
comments: true
cover: /img/js/js-org-inherit.jpg
top_img: /img/js/TOP.jpg
---


# js 原型继承分析

## 1、继承上下文



```
//人
function Person(lastname,firstname,gender){
    this.lastname=lastname;
    this.firstname=firstname;
    this.gender=gender;
}
//作家
function Writer(lastname,firstname,gender,worksname){
    this.worksname=worksname;
    Person.apply(this,arguments);//继承人类的上下文
    //Person.apply(this,lastname,firstname,gender);
}
//给作家添加原型方法
Writer.prototype.introduce=function(){
    console.log('我叫 %s %s \n性别 %s \n我的成名作是 %s',this.lastname,this.firstname,this.gender,this.worksname);
    }
//实例化作家苏洵
var writer=new Writer('苏','洵','mela','六国论');
writer.introduce();
/*我叫 苏 洵 
  性别 mela 
  我的成名作是 六国论*/  

```
## 2、继承原型
关于原型、原型链不了解可以戳这  <a href="http://nikoyu.asia/2019/12/04/JS-原型、原型链、构造器关系/" rel="nofollow" target="_blank"><strong>js 原型、原型链、构造器关系</strong></a></p>



```
//人
function Person(lastname,firstname,gender){
    this.lastname=lastname;
    this.firstname=firstname;
    this.gender=gender;
}
Person.prototype={
    constructor:Person,
    eat(){
        console.log('我饿了需要吃饭');
    },
    breathe(){
        console.log('我不呼吸会死的');
    }
}
//作家
function Writer(lastname,firstname,gender,worksname){
    this.worksname=worksname;
    Person.apply(this,arguments);//继承人类的上下文
    //Person.apply(this,lastname,firstname,gender);
}
//原型继承
Writer.prototype=new Person();
//或者Writer.prototype=Object.create(Person.prototype);
Writer.prototype.constructor=Writer;
Writer.prototype.introduce=function(){
    console.log('我叫 %s %s \n性别 %s \n我的成名作是 %s',this.lastname,this.firstname,this.gender,this.worksname);
    }
Writer.prototype.init='老子可是笔下生花的作家呀';
var writer=new Writer('苏','洵','mela','六国论');
writer.eat()//我饿了需要吃饭
writer.breathe()//我不呼吸会死的
writer.introduce()/*我叫 苏 洵 
                    性别 mela 
                   我的成名作是 六国论*/
console.log(writer.init)//"老子可是笔下生花的作家呀"
```

<p>分析：<strong><code>Writer.prototype=new Person()</code></strong></p>

<p>这句代码让Write的原型成为Person的一个实例，而new Person()的原型链(__proto__)指向Person的原型(prototype)，所以有</p>



```
Writer.prototype.__proto__===Person.prototype//true
```

<p>再看看此时Writer的原型</p>

<p><img src="https://img-blog.csdn.net/20170804133139604?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2VpeGluXzM4MjgzMTU5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

<p>返回的是Person对象，但是</p>


```
Writer.prototype===Person//false  new Person()当然不等于Person
```
<p><strong>自我理解是Writer继承new Person()提供的Person方法和属性后就与Person脱离关系</strong> <br>
这也是为啥不直接用<code>Writer.prototype=Person.prototype</code> <br>
到此Writer的实例就可以使用Person的原型方法了</p>

<p>分析：<strong><code>Writer.prototype=Object.create(Person.prototype);</code></strong></p>

<p>Object.create(proto, [ propertiesObject ])函数创建一个指定原型且可选择性地包含指定属性的对象 <br>
可以先肤浅的认为和<strong><code>Writer.prototype=new Person()</code></strong>效果一样 <br>
分析：<strong><code>Writer.prototype.constructor=Writer;</code></strong></p>

<p>如果缺少这句就有</p>

```
Writer===writer.constructor//false
writer.constructor===Person//true
```

<p>因为Writer的原型的构造器是Person,但是缺少这句并不影响继承</p>

<p>之所以不影响继承是因为实例writer继承的方法和属性有：</p>

<ul>
<li><strong>构造器原型的方法、属性</strong></li>
<li><p><strong>原型链上的方法、属性</strong></p>

<p>虽然实例writer的构造器是 Person,Person没有Writer添加的原型方法、属性，但是writer的原型链指向Writer的原型</p></li>
</ul>



```
writer.__proto__===Writer.prototype//true
```

<p>所以writer就有了introduce方法和init属性</p>

## 3、写在后面
        纯属个人理解，有问题请不要留情