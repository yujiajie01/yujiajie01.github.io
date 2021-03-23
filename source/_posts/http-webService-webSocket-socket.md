---
title: "webService、webSocket、socket、http之间的区别"
date: "2021-03-23 17:26:44"
tags:
  - HTTP
  - webSocket
  - Socket
  - webService
  - IT
categories:
  - IT
comments: true

cover: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/20210323173702.png
top_img: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/20210323173842.png
top: true
---

<meta name="referrer" content="no-referrer" /><!--页面头部添加-->
<div id="content_views" class="markdown_views prism-dracula">

 <h1><a name="t1"></a><a name="t1"></a><a id="webSocket_17"></a>HTTP</h1> 
<p>HTTP 是基于请求响应式的，即通信只能由客户端发起，服务端做出响应，无状态，无连接。</p> 
<p><strong>无状态</strong>：每次连接只处理一个请求，请求结束后断开连接。</p> 
<p><strong>无连接</strong>：对于事务处理没有记忆能力，服务器不知道客户端是什么状态。</p> 
<p>以往实现即时通讯的手段：</p> 
<p><strong>轮询</strong>：客户端定时向服务器发送 Ajax 请求，服务器接到请求后马上返回响应信息并关闭连接。</p> 
<p><strong>长轮询</strong>：客户端向服务器发送 Ajax 请求，服务器接到请求后 hold 住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。</p> 
<p><strong>长连接</strong>：在页面里嵌入一个隐蔵 iframe，将这个隐蔵 iframe 的 src 属性设为对一个长连接的请求，服务器端就能源源不断地往客户端输入数据。</p> 
<p><strong>Flash Socket</strong>：在页面中内嵌入一个使用了 Socket 类的 Flash 程序 JavaScript 通过调用此 Flash 程序提供的 Socket 接口与服务器端的 Socket 接口进行通信，JavaScript 在收到服务器端传送的信息后控制页面的显示。</p> 
<h1><a name="t1"></a><a name="t1"></a><a id="webSocket_17"></a>webSocket</h1> 
<h3><a name="t2"></a><a name="t2"></a><a id="webSocket_18"></a>为什么需要webSocket</h3> 
<p>HTTP 协议有一个缺陷：通信只能由客户端发起。</p> 
<p>举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。</p> 
<p>这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用"轮询"：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。</p> 
<p>轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。因此，工程师们一直在思考，有没有更好的方法。WebSocket 就是这样发明的。</p> 
<p>WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。</p> 
<p>它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。<br> <img src="https://img-blog.csdnimg.cn/20181227153625431.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pYW9fOQ==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p> 
<h3><a name="t3"></a><a name="t3"></a><a id="_33"></a>其他特点包括：</h3> 
<p>（1）建立在 TCP 协议之上，服务器端的实现比较容易。</p> 
<p>（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。</p> 
<p>（3）数据格式比较轻量，性能开销小，通信高效。</p> 
<p>（4）可以发送文本，也可以发送二进制数据。</p> 
<p>（5）没有同源限制，客户端可以与任意服务器通信。</p> 
<p>（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。</p> 
<p>Websocket使用和 HTTP 相同的 TCP 端口，可以绕过大多数防火墙的限制。默认情况下，Websocket协议使用80端口；运行在TLS之上时，默认使用443端口。</p> 
<h3><a name="t4"></a><a name="t4"></a><a id="WebSocketHTTP_49"></a>WebSocket与HTTP的关系</h3> 
<p><strong>相同点</strong></p> 
<ul><li>都是一样基于TCP的，都是可靠性传输协议。</li><li>都是应用层协议。</li></ul> 
<p><strong>不同点</strong></p> 
<ul><li>WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息。HTTP是单向的。</li><li>WebSocket是需要握手进行建立连接的。</li></ul> 
<p><strong>联系</strong><br> WebSocket在建立握手时，数据是通过HTTP传输的。但是建立之后，在真正传输时候是不需要HTTP协议的。</p> 
<h1><a name="t5"></a><a name="t5"></a><a id="Socket_63"></a>Socket</h1> 
<p>Socket 是操作系统提供的对于传输层（TCP / UDP）抽象的接口，是一个编程概念，而 Websocket 与 HTTP 一样是一个成文的互联网协议。</p> 
<p>Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket接口后面，对用户来说，一组简单的接口就是全部，让Socket去组织数据，以符合指定的协议。</p> 
<p><img src="https://img-blog.csdnimg.cn/20181227153658348.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pYW9fOQ==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p> 
<p>当两台主机通信时，必须通过Socket连接，Socket则利用TCP/IP协议建立TCP连接。TCP连接则更依靠于底层的IP协议，IP协议的连接则依赖于链路层等更低层次。</p> 
<h1><a name="t6"></a><a name="t6"></a><a id="webService_72"></a>webService</h1> 
<p>WebService是一种跨编程语言和跨操作系统平台的远程调用技术。</p> 
<p>跨编程语言和跨操作平台：就是说服务端程序采用java编写，客户端程序则可以采用其他编程语言编写，反之亦然！</p> 
<p>跨操作系统平台：则是指服务端程序和客户端程序可以在不同的操作系统上运行。</p> 
<p>远程调用：就是一台计算机a上的一个程序可以调用到另外一台计算机b上的一个对象的方法，譬如，银联提供给商场的pos刷卡系统，商场的POS机转账调用的转账方法的代码其实是跑在银行服务器上。再比如，amazon，天气预报系统，淘宝网，校内网，百度等把自己的系统服务以webservice服务的形式暴露出来，让第三方网站和程序可以调用这些服务功能，这样扩展了自己系统的市场占有率，往大的概念上吹，就是所谓的SOA应用。</p> 
<p>从表面上看，WebService就是一个应用程序向外界暴露出一个能通过Web进行调用的API，把调用这个WebService的应用程序叫做客户端，而把提供这个WebService的应用程序叫做服务端。从深层次看，WebService是建立可互操作的分布式应用程序的新平台，是一个平台，是一套标准。</p> 
<p>WebService平台需要一套协议来实现分布式应用程序的创建。任何平台都有它的数据表示方法和类型系统。要实现互操作性，WebService平台必须提供一套标准的类型系统，用于沟通不同平台、编程语言和组件模型中的不同类型系统。Web service平台必须提供一种标准来描述Web service，让客户可以得到足够的信息来调用这个Web service。最后，我们还必须有一种方法来对这个Web service进行远程调用,这种方法实际是一种远程过程调用协议(RPC)。为了达到互操作性，这种RPC协议还必须与平台和编程语言无关。</p> 
<h2><a name="t7"></a><a name="t7"></a><a id="WebService_86"></a>WebService平台技术</h2> 
<p><strong>XML+XSD,SOAP和WSDL就是构成WebService平台的三大技术。</strong></p> 
<h3><a name="t8"></a><a name="t8"></a><a id="XML_90"></a>XML：</h3> 
<p>WebService采用HTTP协议传输数据，采用XML格式封装数据（即XML中说明调用远程服务对象的哪个方法，传递的参数是什么，以及服务对象的返回结果是什么）。XML是WebService平台中表示数据的格式。除了易于建立和易于分析外，XML主要的优点在于它既是平台无关的，又是厂商无关的。无关性是比技术优越性更重要的：软件厂商是不会选择一个由竞争对手所发明的技术的。</p> 
<p>XML解决了数据表示的问题，但它没有定义一套标准的数据类型，更没有说怎么去扩展这套数据类型。例如，整形数到底代表什么？16位，32位，64位？这些细节对实现互操作性很重要。XML Schema(XSD)就是专门解决这个问题的一套标准。它定义了一套标准的数据类型，并给出了一种语言来扩展这套数据类型。WebService平台就是用XSD来作为其数据类型系统的。当你用某种语言(如VB.NET或C#)来构造一个Web service时，为了符合WebService标准，所有你使用的数据类型都必须被转换为XSD类型。你用的工具可能已经自动帮你完成了这个转换，但你很可能会根据你的需要修改一下转换过程。</p> 
<h3><a name="t9"></a><a name="t9"></a><a id="SOAPSimple_Object_Access_Protocol_96"></a>SOAP(Simple Object Access Protocol简单对象访问协议)：</h3> 
<p>WebService通过HTTP协议发送请求和接收结果时，发送的请求内容和结果内容都采用XML格式封装，并增加了一些特定的HTTP消息头，以说明HTTP消息的内容格式，这些特定的HTTP消息头和XML内容格式就是SOAP协议。SOAP提供了标准的RPC方法来调用Web Service。</p> 
<p><strong>SOAP协议 = HTTP协议 + XML数据格式</strong></p> 
<p>SOAP协议定义了SOAP消息的格式，SOAP协议是基于HTTP协议的，SOAP也是基于XML和XSD的，XML是SOAP的数据编码方式。打个比喻：HTTP就是普通公路，XML就是中间的绿色隔离带和两边的防护栏，SOAP就是普通公路经过加隔离带和防护栏改造过的高速公路。</p> 
<h3><a name="t10"></a><a name="t10"></a><a id="WSDL_104"></a>WSDL：</h3> 
<p>好比我们去商店买东西，首先要知道商店里有什么东西可买，然后再来购买，商家的做法就是张贴广告海报。 WebService也一样，WebService客户端要调用一个WebService服务，首先要有知道这个服务的地址在哪，以及这个服务里有什么方法可以调用，所以，WebService务器端首先要通过一个WSDL文件来说明自己家里有啥服务可以对外调用，服务是什么（服务中有哪些方法，方法接受的参数是什么，返回值是什么），服务的网络地址用哪个url地址表示，服务通过什么方式来调用。</p> 
<p>WSDL(Web Services Description Language)就是这样一个基于XML的语言，用于描述Web Service及其函数、参数和返回值。它是WebService客户端和服务器端都能理解的标准格式。因为是基于XML的，所以WSDL既是机器可阅读的，又是人可阅读的，这将是一个很大的好处。一些最新的开发工具既能根据你的Web service生成WSDL文档，又能导入WSDL文档，生成调用相应WebService的代理类代码。</p> 
<p>WSDL文件保存在Web服务器上，通过一个url地址就可以访问到它。客户端要调用一个WebService服务之前，要知道该服务的WSDL文件的地址。WebService服务提供商可以通过两种方式来暴露它的WSDL文件地址：1.注册到UDDI服务器，以便被人查找；2.直接告诉给客户端调用者。</p>
</div>
