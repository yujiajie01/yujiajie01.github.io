---
title: JS面向对象编程之：封装、继承、多态
date: 2019-12-03 11:53:57
tags: 
- js
- 面向对象
categories: 
- 工作学习
- 面向对象
comments: true
cover: /img/js/jscover.jpg
top_img: /img/js/TOP.jpg

---
<meta name="referrer" content="no-referrer" /><!--页面头部添加-->

# JS面向对象编程之：封装、继承、多态
  

<p>&nbsp;最近在实习公司写代码，被隔壁的哥们吐槽说，代码写的没有一点艺术。为了让我的代码多点艺术，我就重新温故了《javascript高级程序设计》（其中几章），然后又看了《javascript设计模式》，然后觉得要写点心得体会，来整理自己所学的吧。以下是我个人见解，错了请轻喷，欢迎指出错误，乐于改正。</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731220533138-1790206129.png" alt="" width="474" height="262"></p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp;&nbsp;一、封装</p>
<p>&nbsp; &nbsp; &nbsp; （1）封装通俗的说，就是我有一些秘密不想让人知道，就通过私有化变量和私有化方法，这样外界就访问不到了。然后如果你有一些很想让大家知道的东西，你就可以通过this创建的属性看作是对象共有属性和对象共有方法，这样别人知道你的公共的东西啦，不止如此，你还可以访问到类或对象自身的私有属性和私有方法。哇，这种权利好大呀，外面的公共的方法和属性，和内部的私有属性和方法都可以访问到，都有特权啦，因此就叫做特权方法了。看个例子就知道啦。</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731221941169-1981451310.png" alt=""></p>
<p>类的内部this上定义的属性和方法自然就可以复制到新创建的对象上，成为对象公有化的属性和方法，又可以访问私有属性和私有方法，因此就叫特权方法。</p>
<p>这样调用就可以啦</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731222522778-478754452.png" alt=""></p>
<p>&nbsp; &nbsp;&nbsp;&nbsp; （2）闭包实现的封装</p>
<p>　　闭包是有权访问另外一个函数作用域中变量的函数，即在一个函数内部创建另外一个函数。这时就可以将闭包作为创建对象的构造函数，这样它既是闭包又是可实例对象的函数。</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731230614356-1409630772.png" alt=""></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;二、继承</p>
<p>　　（1）类</p>
<p>　　&nbsp;每个类有3个部分：1,是构造函数内的，是供实例化对象复制用的。2,是构造函数外的，直接通过点语法添加的，这是供类使用的，实例化对象是访问不到的。3,是类的原型中的，实例化对象可以通过其原型链简介地访问到，也是为供所有实例化对象所共有的。</p>
<p>&nbsp; &nbsp; &nbsp;（2）类式继承</p>
<p>&nbsp; &nbsp; &nbsp;通过子类的原型prototype对象实例化来实现的</p>
<p>　　<img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731231414903-1734538422.png" alt=""></p>
<p>继承就是声明2个类，不过类式继承需要将第一个类的实例赋值给第二个类的原型。这段代码，在实现subClass继承superClass时是通过将superClass的实例赋值给subClass的原型prototype,所以subClass.prototype继承了superClass.</p>
<p><strong>缺点</strong>就是：一个子类的实例原型从父类构造函数中继承来的共有属性就会直接影响到其他子类。比如：</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731232427403-1713790397.png" alt=""></p>
<p><strong>额外知识点</strong>：instanceof是通过对象的prototype链来确定这个对象是否是某个类的实例，而不关心对象与类的自身结构。</p>
<p>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;（3）构造函数式继承</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;构造函数式继承是通过在子类的构造函数作用环境中执行一次父类的构造函数来实现的。</p>
<p>　　 &nbsp;&nbsp;<img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731233137638-668815399.png" alt=""></p>
<p>SuperClass.call(this,id);是构造函数式继承的精华，call可以更改函数的作用环境。这个对SuperClass调用这个方法就是将子类中的变量子啊父类中执行一遍，由于父类中是给this绑定属性的，因此子类自然也就继承了父类的共有属性。由于这种类型的继承没有涉及原型prototype,所以父类的原型方法自然不会被子类继承，而如果要想被子类继承就必须要放在构造函数中。</p>
<p>　　（4）组合继承</p>
<p>&nbsp; &nbsp; 组合继承就是：类式继承+构造函数继承</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731234213216-1128265252.png" alt=""></p>
<p>这里用例子来测试下</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201607/816397-20160731234539106-488093682.png" alt=""></p>
<p>&nbsp;果然子类的实例中更改父类继承下来的引用类型属性如books,根本不会影响到其他实例，并且子类实例化过程中又能将参数传递到父类的构造函数中。</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; （5）原型式继承</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;原型式继承跟类式继承一样，父类对象book中的值类型的属性被复制，引用类型的属性被共有。</p>
<p>&nbsp;<img src="https://images2015.cnblogs.com/blog/816397/201608/816397-20160802101645668-406639973.png" alt=""></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; （6）寄生式继承</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 通过在一个函数内的过渡对象实现继承并返回新对象的方式，称之为寄生式继承。</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;寄生就像寄生虫一样寄托于某个对象内部生长。就是对原型继承的第二次封装，并且在这第二次封装过程中对继承的对象进行了扩展，这样新创建的对象不仅仅有父类中的属性和方法而且还添加了新的属性和方法。</p>
<p>看下下面的例子吧</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201608/816397-20160802102508778-920595923.png" alt=""></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（7）寄生组合式继承</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 寄生组合式继承就是寄生式继承+构造函数式继承，</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201608/816397-20160802105736122-504725171.png" alt=""></p>
<p>先创建了父类，还有父类的原型方法，然后创建子类，并在构造函数中实现构造函数式继承，然后又通过寄生式继承了父类 原型，最后又对子类添加了一些原型方法。</p>
<p>现在我们来测试一下</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201608/816397-20160802110120465-1702254787.png" alt=""></p>
<p>显然不会出现子类调用之后，另一个子类的值被改变。在这里其中最大的改变是对子类原型的处理，被赋予父类原型的一个引用，这是一个对象。</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（8）多继承</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="https://images2015.cnblogs.com/blog/816397/201608/816397-20160802112718090-303191191.png" alt=""></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 通过这种方式对一个对象属性的复制继承，将多个父类(对象)的属性与方法拷贝给子类实现继承</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;三、多态</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 多态就是通过对传递的参数判断来执行逻辑，即可实现一种多态处理机制</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;下面就是这个例子，通过多态类，调用add运算方式，根据不同参数做运算</p>
<p><img src="https://images2015.cnblogs.com/blog/816397/201608/816397-20160802113538512-1706925925.png" alt=""></p>
<p>&nbsp;</p>
<p>这就是面向对象的三种特性啦，封装、继承、多态，对原理的理解，能在看其他人的优秀代码的时候，有个很好的理解。</p>
</div>
