---
layout: sql
title: SQL 深入"了解" sqlserver 表连接 join　及性能调优化
date: 2020-01-15 11:44:29
tags: 
- IT
- SQL
categories: 
- 工作学习
comments: true
cover: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-pic20200115115921.jpg
top_img: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-pic20200115115922.jpg
# top: true
---
<meta name="referrer" content="no-referrer" /><!--页面头部添加-->

# SQL  深入"了解"  sqlserver 表连接 join　及性能调优化
                

<p>　问题 :</p>
<div id="cnblogs_post_body">
<p>　　　　　1.什么是内连接(inner)和外联结(outer)</p>
<p>　　　　　2. SQL server 表连接 (FROM--AND 法, JOIN -- ON 法)的区别.</p>
<p>　　　　　3.表连接及多表连接的SQL语句执行顺序,和性能调优.</p>
<hr>

## 1.第一个问题，首先要明白如何使用JOIN 和 ON 关键字作表连接。
<p>　　　　<span style="color: #cc99ff;">申明：下文中所用的等价，可能指的是逻辑上的等价(即产生相同的结果集)，也可能是执行顺序上的等价，甚至是所产生的执行计划或者执行效率等价。因为很多时候用户只要写普通的sql ，而sql server 会跟据自己的优化 配置和执行计划，产生执行步骤，这些步骤也许和你写的sql很符合，也许更优，当然也可能不符合你的需求。这需要很多的积累，我也只是浅尝辄止，所以没有能力做过多论述。具体问题具体分析，这里只能提供大体思路。</span></p>

### 1）join 的5种方式 ：
<p>　　　　inner join ; left join; right join; full join; cross join;</p>
<p>　　　　其中inner&nbsp; join可以省去inner 关键字。 left/right join 与left/right out join 等价。</p>
<p>　　　　full join 与 同时 left join&nbsp;和 right join 等价。</p>
<p>　　　　cross join 为将两张表笛卡尔集　　　</p>
<p>　</p>
<hr>
<p>&nbsp;</p>

### 2) JOIN -- ON 语句的执行顺序：

<p>　　　　例句：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">SELECT <span style="color: #808080;">* <span style="color: #0000ff;">FROM A <span style="color: #808080;">LEFT <span style="color: #808080;">JOIN B <span style="color: #0000ff;">ON A.ID <span style="color: #808080;">= B.ID <span style="color: #808080;">AND A<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0 <span style="color: #0000ff;">WHERE A.name <span style="color: #808080;">= <span style="color: #ff0000;">'<span style="color: #ff0000;">x<span style="color: #ff0000;">'  </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>
</div>
<p>　　　　注意在作on&nbsp; 连接后 的and 子句 和where 子句 。&nbsp; 他们有什么不同！。。。。。。</p>
<p>　　　<strong>　逻辑上解释：(不考虑执行计划中执行步骤和作嵌套连接等具体方式，这里只讨论如何思考逻辑上的步骤)　</strong></p>
<p>　　　　　　　　执行顺序是： FROM --&gt; JOIN --&gt; ON --&gt;AND--&gt;　LEFT--&gt; WHERE --&gt;SELECT</p>
<p>　　　　　　　　A步骤. 先将两张表根据ON 条件 作连接（逻辑上，相等于将两张表笛卡尔集后根据ID相等条件筛选数据，实际情况后面分析）　</p>
<p>　　　　　　　　B步骤. 根据ON 后面,WHERE&nbsp;之前&nbsp;的 AND 条件筛选数据</p>
<p>　　　　　　　　C步骤. 跟据LEFT 无论如何，要保证A表的数据完整性。所以在上一步骤产生的结果集中<span style="color: #ff0000;">补齐A表因无法比与B表匹配而被AND 条件筛选的掉的数据；</span></p>
<p>　　　　　　　　D步骤. 再根据WHERE筛选结果集。　</p>
<p>　　　　示例：（为了能更好的这一过程，通过实例先思考）</p>
<p>　　　　　　　　</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">CREATE <span style="color: #0000ff;">TABLE EMPLOY  (NAME    <span style="color: #0000ff;">VARCHAR(<span style="color: #800000; font-weight: bold;">10),     DEPTNO    <span style="color: #0000ff;">INTEGER<span style="color: #000000;"> );     

<span style="color: #0000ff;">INSERT <span style="color: #0000ff;">INTO EMPLOY (NAME, DEPTNO) <span style="color: #0000ff;">VALUES<span style="color: #000000;">  
 (<span style="color: #ff0000;">'<span style="color: #ff0000;">张三<span style="color: #ff0000;">',<span style="color: #800000; font-weight: bold;">10<span style="color: #000000;">),  
 (<span style="color: #ff0000;">'<span style="color: #ff0000;">李四<span style="color: #ff0000;">',<span style="color: #800000; font-weight: bold;">20<span style="color: #000000;">),  
 (<span style="color: #ff0000;">'<span style="color: #ff0000;">王五<span style="color: #ff0000;">',<span style="color: #800000; font-weight: bold;">10<span style="color: #000000;">),  
 (<span style="color: #ff0000;">'<span style="color: #ff0000;">赵红<span style="color: #ff0000;">',<span style="color: #800000; font-weight: bold;">20<span style="color: #000000;">);    

 
<span style="color: #0000ff;">CREATE <span style="color: #0000ff;">TABLE DEPARTMENT  (DEPTNO    <span style="color: #0000ff;">INTEGER,      DEPTNAME    <span style="color: #0000ff;">VARCHAR(<span style="color: #800000; font-weight: bold;">10<span style="color: #000000;">) ); 

<span style="color: #0000ff;">INSERT <span style="color: #0000ff;">INTO DEPARTMENT (DEPTNO, DEPTNAME) <span style="color: #0000ff;">VALUES<span style="color: #000000;"> 
(<span style="color: #800000; font-weight: bold;">10, <span style="color: #ff0000;">'<span style="color: #ff0000;">市场部<span style="color: #ff0000;">'<span style="color: #000000;">),
(<span style="color: #800000; font-weight: bold;">20, <span style="color: #ff0000;">'<span style="color: #ff0000;">技术部<span style="color: #ff0000;">'<span style="color: #000000;">);


<span style="color: #008080;">--<span style="color: #008080;">查询一下所有的员工的姓名和部门名为市场部的部门 </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>


<p>　　　　</p>
<p>也许你的SQL 会写成这样：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">SELECT<span style="color: #000000;"> E.NAME,D.DEPTNAME 
<span style="color: #0000ff;">FROM EMPLOY  E <span style="color: #808080;">LEFT <span style="color: #808080;">JOIN DEPARTMENT D <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=<span style="color: #000000;">D.DEPTNO   
<span style="color: #0000ff;">WHERE D.DEPTNAME<span style="color: #808080;">=<span style="color: #ff0000;">'<span style="color: #ff0000;">市场部<span style="color: #ff0000;">' </span></span></span></span></span></span></span></span></span></span></span></span></span></pre>
</div>
<p>仔细读题目，是要查询“所有”员工的姓名，所以肯定要保证员工表的数据完整性。如果使用where，当然不能保证员工表的完整拉。</p>
<p>还记得 <span style="color: #ff0000;">在 ON 关键字后 ，WHERE 关键字前的条件筛选方式么？？？</span></p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">SELECT E.NAME,D.DEPTNAME <span style="color: #0000ff;">FROM EMPLOY  E <span style="color: #808080;">LEFT <span style="color: #808080;">JOIN DEPARTMENT D <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=D.DEPTNO <span style="color: #808080;">AND D.DEPTNAME<span style="color: #808080;">=<span style="color: #ff0000;">'<span style="color: #ff0000;">市场部<span style="color: #ff0000;">'  </span></span></span></span></span></span></span></span></span></span></span></pre>
</div>
<p>这样就对了！！</p>
<p>产生的结果很奇怪</p>
<p>张三&nbsp;市场部 李四&nbsp;NULL 王五&nbsp;市场部 赵红&nbsp;NULL</p>
<p>为什么结果是这样呢？　深入理解下前面所说的SQL 语句执行顺序&nbsp;</p>
<p>　　　　举个例子：分别执行看看结果，结合上个例子想想(以下ABC步骤意思是前面说的ABCD四个步骤)</p>
<div class="cnblogs_code">
<pre><span style="color: #008080;">--<span style="color: #008080;">执行A步骤等价的逻辑SQL
<span style="color: #0000ff;">SELECT <span style="color: #808080;">* <span style="color: #0000ff;">FROM EMPLOY  E   <span style="color: #808080;">JOIN DEPARTMENT D   <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=<span style="color: #000000;">D.DEPTNO
<span style="color: #008080;">--<span style="color: #008080;">执行B步骤等价的逻辑SQL
<span style="color: #0000ff;">SELECT <span style="color: #808080;">* <span style="color: #0000ff;">FROM EMPLOY  E   <span style="color: #808080;">JOIN DEPARTMENT D   <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=D.DEPTNO <span style="color: #808080;">and  D.DEPTNO<span style="color: #808080;">=<span style="color: #800000; font-weight: bold;">40
<span style="color: #008080;">--<span style="color: #008080;">执行C步骤等价的逻辑SQL
<span style="color: #0000ff;">SELECT <span style="color: #808080;">* <span style="color: #0000ff;">FROM EMPLOY  E  <span style="color: #808080;">left <span style="color: #808080;">JOIN DEPARTMENT D   <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=D.DEPTNO <span style="color: #808080;">and  D.DEPTNO<span style="color: #808080;">=<span style="color: #800000; font-weight: bold;">40</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>


### 3)表连接在执行计划，或者是真正的执行方式：
<p>　　首先要理解下执行计划，看看SQL语句如何在　SQL SERVER&nbsp;&nbsp; 内部中真正实现这些复杂操作；其中SQL SERVER JOIN 的三种方式（<span style="color: #ff0000;">Nested Loops join，Merge Join，Hash Join）要有所了解。如果不懂，可以去<a href="http://www.cnblogs.com/fish-li/archive/2011/06/06/2073626.html">http://www.cnblogs.com/fish-li/archive/2011/06/06/2073626.html</a>　看看学习。</span></p>
<p>　　我的私人理解：</p>
<p>　　　　A. Nested Loops join :外表县进行逐条扫描，而内表，根据ＯＮ的连接条件，快速ＳＥＥＫ内表看是否有符合的数据（ＳＥＥＫ不是ＳＣＡＮ）。这样产生两张表ＪＯＩＮ后集合。</p>
<p>　　　&nbsp; B. Merge Join : 用于两张表差不多大，而且在连接字段上有索引。</p>
<p>　　　 C.&nbsp;&nbsp;Hash Join : 两张表都是数据量很大。</p>
<p>　　虽然不是太明白具体如何判断，但是ＳＱＬ　ＳＥＲＶＥＲ　会自动判断使用哪种方式，所以不需要太关心，除非是做ＤＢＡ的。重点了解下<span style="color: #ff0000;">Nested Loops join。</span></p>
<p>&nbsp;</p>
<hr>

### FROM , JOIN , ON , AND , WHERE  总结
<p><span style="color: #ff0000;"><span style="color: #000000;">　　铺垫了这么多，终于回到关键问题：　平时看到很多ＳＱＬ　写法　有的用WHERE&nbsp; and 进行表连接，有的用JOIN ON 作表连接。这里面不能随便，写不好即影响结果，又阻碍执行效率。可以查看更多详细资料：<a href="http://blog.csdn.net/shangboerds/article/details/5213264">http://blog.csdn.net/shangboerds/article/details/5213264</a></span></span></p>
<p><span style="color: #ff0000;"><span style="color: #000000;">　　　　</span></span></p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">SELECT E.NAME,D.DEPTNAME <span style="color: #0000ff;">FROM EMPLOY  E <span style="color: #808080;">LEFT <span style="color: #808080;">JOIN DEPARTMENT D <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=<span style="color: #000000;">D.DEPTNO   
<span style="color: #0000ff;">WHERE D.DEPTNAME<span style="color: #808080;">=<span style="color: #ff0000;">'<span style="color: #ff0000;">市场部<span style="color: #ff0000;">' 

<span style="color: #0000ff;">SELECT E.NAME,D.DEPTNAME <span style="color: #0000ff;">FROM EMPLOY  E <span style="color: #808080;">LEFT <span style="color: #808080;">JOIN DEPARTMENT D <span style="color: #0000ff;">ON E.DEPTNO<span style="color: #808080;">=<span style="color: #000000;">D.DEPTNO 
<span style="color: #808080;">AND D.DEPTNAME<span style="color: #808080;">=<span style="color: #ff0000;">'<span style="color: #ff0000;">市场部<span style="color: #ff0000;">'  
<span style="color: #008080;">--<span style="color: #008080;"> 不论逻辑上还是结果上都不等价</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>

<p>&nbsp;</p>

## 现实SQL查询中，一般都不止两个表连接，一般是多表连接查询！
<p>　　<span style="color: #ff0000;"> <span style="color: #000000;">几个常见错误：</span></span></p>
<p><span style="color: #ff0000;">　　<span style="color: #000000;">１。胡乱使用LEFT join　：由于分析过执行步骤, LEFT&nbsp;关键字是要在“两张”表连接完成后（思考下多表连接），再对表相当于进行扫描部全的过程，所以会耗费很多时间。</span></span></p>
<p><span style="color: #ff0000;"><span style="color: #000000;">　　２。分不清表连接 (FROM--AND 法, JOIN -- ON 法)的区别；如下两个SQL:</span></span></p>
<div class="cnblogs_code">

<pre><span style="color: #0000ff;">SELECT <span style="color: #808080;">*
<span style="color: #0000ff;">FROM<span style="color: #000000;"> A 
<span style="color: #0000ff;">INNER <span style="color: #808080;">JOIN B <span style="color: #0000ff;">ON A.ID <span style="color: #808080;">= B.ID <span style="color: #808080;">AND B<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0
<span style="color: #0000ff;">INNER <span style="color: #808080;">JOIN C <span style="color: #0000ff;">ON A.ID <span style="color: #808080;">= B.ID <span style="color: #808080;">AND C<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0


<span style="color: #0000ff;">SELECT <span style="color: #808080;">*
<span style="color: #0000ff;">FROM<span style="color: #000000;"> A 
<span style="color: #0000ff;">INNER <span style="color: #808080;">JOIN B <span style="color: #0000ff;">ON A.ID <span style="color: #808080;">=<span style="color: #000000;"> B.ID 
<span style="color: #0000ff;">INNER <span style="color: #808080;">JOIN C <span style="color: #0000ff;">ON A.ID <span style="color: #808080;">=<span style="color: #000000;"> B.ID 
<span style="color: #0000ff;">WHERE<span style="color: #000000;"> 
    B<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0
<span style="color: #808080;">AND C<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0
<span style="color: #008080;">--<span style="color: #008080;">此写法效率比上面两种都差,尤其表越多,效果越明显</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>

</div>
<p>&nbsp;</p>
<p>　　　思考表连接的的ＳＱＬ执行顺序。。。前者两张表ＪＯＩＮ　后　马上筛选部分结果在与另一张表ＪＯＩＮ　。后者先将三张表ＪＯＩＮ后再筛选。所以很明显前者效率比后者高.</p>
<p>　　３。再添加一条SQL :</p>
<p>　　</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">SELECT <span style="color: #808080;">* 
<span style="color: #0000ff;">FROM<span style="color: #000000;"> A , B , C
<span style="color: #0000ff;">WHERE A.ID <span style="color: #808080;">=<span style="color: #000000;"> B.ID 
<span style="color: #808080;">AND A.ID <span style="color: #808080;">=<span style="color: #000000;"> C.ID
<span style="color: #808080;">AND B<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0 
<span style="color: #808080;">AND C<span style="color: #808080;">&lt;&gt;<span style="color: #800000; font-weight: bold;">0</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>
</div>
<p>　　此结果和第一条ＳＱＬ一样效率不错！　从逻辑上看，似乎ＳＱＬ　会先将表ＪＯＩＮ　后再筛选，但实战结果。是先筛选再ＪＯＩＮ　！因为ＳＱＬ　ＳＥＲＶＥＲ　会内部分析，产生一个最优的执行计划，所以不用你操心，自动帮你处理了！<span style="color: #ff0000;">而使用ＪＯＩＮ　ＯＮ　的话，就<span style="color: #000000;">好像是使用强制命令，告诉数据库，就是要按你的方式处理结果，数据库只好服从！！　所以思考ＳＱＬ写法不能只说要效率，同时还要注重结果对了，这才是关键！</span></span></p>
<p>　　４。本人一次看别人ＳＱＬ，就是不明白作表连接查询，为什么ＷＨＥＲＥ后面要进行大量的ＷＨＥＲＥ条件筛选，而且都是无关业务逻辑的。在我的传统观念看来，执行WHERE　语句是需要对全表进行扫描的，这样因该会增加查询时间。现在结合前面所讲的，<span style="color: #ff0000;">因为不论是（ＦＲＯＭ－－ＡＮＤ　还是　ＪＯＩＮ－－ＯＮ）方式，再与第三张表ＪＯＩＮ之前都应该尽量先筛选一部分结果（可能是大部分结果）。这样速度会大大提升！</span></p>
<p>&nbsp;</p>
<p><span style="color: #ff0000;">　　</span></p>
<p>&nbsp;</p>
<p><span style="color: #ff0000;"><span style="color: #000000;"><span style="color: #ff0000;">　　表连接人人都会，可真要说的清清楚楚，也许还需要花点功夫和时间去测试和总结吧。说起来因该有很大的文章，本人知识积累还不够，还希望有人能提点提点，斧正补充一下！！　&nbsp;</span></span></span></p>
</div>
