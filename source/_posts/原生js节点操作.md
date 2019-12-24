---
title: 原生js节点操作
date: 2019-12-04 15:06:27
tags: 
- js
categories: 工作学习
comments: true
cover: /img/js/node.jpg
top_img: /img/js/TOP.jpg
---

# 原生js节点操作
## 节点属性值
1 获取上级节点

```
    Node.parentNode     //返回父节点
    Node.ownerDocument  //返回祖先节点
```

<p>2 获取下级节点</p>

```
    Node.childNodes     //返回相邻后代的元素节点和文本节点对象的集合(换行算作文本节点)
    Node.children       //返回相邻后代的元素节点集合
    Node.firstChild     //返回相邻后代第一个的元素节点
    Node.lastChild      //返回相邻后代最后一个的元素节点
```

<p>3 获取同级节点</p>

```
    Node.previousSibling   // 返回前一个节点
    Node.nextSibling       // 返回后一个节点
```

## 节点方法
1 创建</p>

```
    document.createElement('li')           //创建元素节点
    document.createAttribute("class")      //创建属性节点
    document.createTextNode("Hello World") //创建文本节点
```

<p>2 复制</p>



```
    var newNode=Node.cloneNode(Boolean)    
    //Boolean:true  返回Node及其全部子孙节点
    //Boolean:false 只返回Node节点
```

<p>3 增加</p>

```
    parentNode.appendChild(newNode)     //增加节点至子节点末尾
    parentNode.insertBefore(newNode,targetNode)   //增加节点至targetNode之前
    parentNode.innerHTML+='<li></li>'   //增加元素节点至子节点末尾
    parentNode.innerText+='Hello World' //增加文本节点至子节点末尾
```

<p>4 删除</p>



```
    parentNode.removeChild(childNode)     //已知父节点
    node.parentNode.removeChild(childNod) //未知父节点
```
<p>5 获取</p>

```
    document.getElementById()
    document.getElementsByClassName()
    document.getElementsByTagName()  
```
</div>
