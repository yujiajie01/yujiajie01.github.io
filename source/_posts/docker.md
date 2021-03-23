---
title: "docker 小结"
date: "2021-03-19 17:26:44"
tags:
  - docker
  - IT
categories:
  - docker
comments: true
cover: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/docker-c.jpeg
top_img: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-pic肖战top.jpg
top: true
---

<meta name="referrer" content="no-referrer" /><!--页面头部添加-->

# docker

## docker 启动 mongo 命令

```
docker run --name mongo -p 27017:27017 -v mongodata:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo
```

## docker 启动 redis

```
docker run -p 6379:6379 --name redis -d

```

# --------------------------------------------------------------------------------------------

<div class="article-body">		
<div class="article-intro" id="content">			
<h1>Docker Dockerfile </h1>
<h3>什么是 Dockerfile？</h3>
<p>Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。</p>

<h3>使用 Dockerfile 定制镜像</h3>
<p>这里仅讲解如何运行 Dockerfile 文件来定制一个镜像，具体 Dockerfile 文件内指令详解，将在下一节中介绍，这里你只要知道构建的流程即可。</p>
<p><strong>1、下面以定制一个 nginx 镜像（构建好的镜像内会有一个 /usr/share/nginx/html/index.html
 文件）</strong></p>
<p>在一个空目录下，新建一个名为 Dockerfile 文件，并在文件内添加以下内容：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">FROM nginx
RUN echo </span><span class="str">'这是一个本地构建的nginx镜像'</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln"> </span><span class="str">/usr/</span><span class="pln">share</span><span class="pun">/</span><span class="pln">nginx</span><span class="pun">/</span><span class="pln">html</span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">html</span></pre>

<p><img src="https://www.runoob.com/wp-content/uploads/2019/11/dockerfile1.png"></p>

<p><strong>2、FROM 和 RUN 指令的作用</strong></p>
<p><strong>FROM</strong>：定制的镜像都是基于 FROM 的镜像，这里的 nginx 就是定制需要的基础镜像。后续的操作都是基于 nginx。</p>

<p><strong>RUN</strong>：用于执行后面跟着的命令行命令。有以下俩种格式：</p>

<p>shell 格式：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">RUN </span><span class="pun">&lt;命令行命令&gt;</span><span class="pln">
</span><span class="com"># &lt;命令行命令&gt; 等同于，在终端操作的 shell 命令。</span></pre>

<p>exec 格式：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">RUN </span><span class="pun">[</span><span class="str">"可执行文件"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"参数1"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"参数2"</span><span class="pun">]</span><span class="pln">
</span><span class="com"># 例如：</span><span class="pln">
</span><span class="com"># RUN ["./test.php", "dev", "offline"] 等价于 RUN ./test.php dev offline</span></pre>

<p><strong>注意</strong>：Dockerfile 的指令每执行一次都会在 docker 上新建一层。所以过多无意义的层，会造成镜像膨胀过大。例如：</p>

<div class="example"> <div class="example_code">
FROM centos<br>
RUN <span style="color: #c20cb9; font-weight: bold;">yum install</span> <span style="color: #c20cb9; font-weight: bold;">wget</span><br>
RUN <span style="color: #c20cb9; font-weight: bold;">wget</span> <span style="color: #660033;">-O</span> redis.tar.gz <span style="color: #a10;">"http://download.redis.io/releases/redis-5.0.3.tar.gz"</span><br>
RUN <span style="color: #c20cb9; font-weight: bold;">tar</span> <span style="color: #660033;">-xvf</span> redis.tar.gz<br>
以上执行会创建 <span style="color: #000000;">3</span> 层镜像。可简化为以下格式：<br>
FROM centos<br>
RUN <span style="color: #c20cb9; font-weight: bold;">yum install</span> <span style="color: #c20cb9; font-weight: bold;">wget</span> \<br>
&nbsp; &nbsp; <span style="color: #000000; font-weight: bold;">&amp;&amp;</span> <span style="color: #c20cb9; font-weight: bold;">wget</span> <span style="color: #660033;">-O</span> redis.tar.gz <span style="color: #a10;">"http://download.redis.io/releases/redis-5.0.3.tar.gz"</span> \<br>
&nbsp; &nbsp; <span style="color: #000000; font-weight: bold;">&amp;&amp;</span> <span style="color: #c20cb9; font-weight: bold;">tar</span> <span style="color: #660033;">-xvf</span> redis.tar.gz<br>
</div></div>
<p>如上，以 <span class="marked">&amp;&amp;</span> 符号连接命令，这样执行后，只会创建 1 层镜像。</p>

<h3>开始构建镜像</h3>
<p>在 Dockerfile 文件的存放目录下，执行构建动作。</p>
<p>以下示例，通过目录下的 Dockerfile 构建一个 nginx:v3（镜像名称:镜像标签）。</p>
<p><strong>注</strong>：最后的  <span class="marked">.</span>  代表本次执行的上下文路径，下一节会介绍。</p>
<div class="example"> <div class="example_code">
$ docker build <span style="color: #660033;">-t</span> nginx:v3 .<br>
</div></div>

<p><img src="https://www.runoob.com/wp-content/uploads/2019/11/dockerfile2.png"></p>

<p>以上显示，说明已经构建成功。</p>

<h3>上下文路径</h3>
<p>上一节中，有提到指令最后一个  <span class="marked">.</span>  是上下文路径，那么什么是上下文路径呢？</p>
<div class="example"><div class="example_code">
$ docker build <span style="color: #660033;">-t</span> nginx:v3 .<br>
</div></div>

<p>上下文路径，是指 docker 在构建镜像，有时候想要使用到本机的文件（比如复制），docker build 命令得知这个路径后，会将路径下的所有内容打包。</p>

<p><strong>解析</strong>：由于 docker 的运行模式是 C/S。我们本机是 C，docker 引擎是 S。实际的构建过程是在 docker 引擎下完成的，所以这个时候无法用到我们本机的文件。这就需要把我们本机的指定目录下的文件一起打包提供给 docker 引擎使用。</p>

<p>如果未说明最后一个参数，那么默认上下文路径就是 Dockerfile 所在的位置。</p>
<p><strong>注意</strong>：上下文路径下不要放无用的文件，因为会一起打包发送给 docker 引擎，如果文件过多会造成过程缓慢。</p>

<hr>
<h2>指令详解</h2> 
<h3>COPY</h3>
<p>复制指令，从上下文目录中复制文件或者目录到容器里指定路径。</p>
<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">COPY </span><span class="pun">[--</span><span class="pln">chown</span><span class="pun">=&lt;</span><span class="pln">user</span><span class="pun">&gt;:&lt;</span><span class="kwd">group</span><span class="pun">&gt;]</span><span class="pln"> </span><span class="pun">&lt;源路径</span><span class="lit">1</span><span class="pun">&gt;...</span><span class="pln">  </span><span class="pun">&lt;目标路径&gt;</span><span class="pln">
COPY </span><span class="pun">[--</span><span class="pln">chown</span><span class="pun">=&lt;</span><span class="pln">user</span><span class="pun">&gt;:&lt;</span><span class="kwd">group</span><span class="pun">&gt;]</span><span class="pln"> </span><span class="pun">[</span><span class="str">"&lt;源路径1&gt;"</span><span class="pun">,...</span><span class="pln">  </span><span class="str">"&lt;目标路径&gt;"</span><span class="pun">]</span></pre>
<p><strong>[--chown=&lt;user&gt;:&lt;group&gt;]</strong>：可选参数，用户改变复制到容器内文件的拥有者和属组。</p>
<p><strong>&lt;源路径&gt;</strong>：源文件或者源目录，这里可以是通配符表达式，其通配符规则要满足 Go 的 filepath.Match 规则。例如：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">COPY hom</span><span class="pun">*</span><span class="pln"> </span><span class="str">/mydir/</span><span class="pln">
COPY hom</span><span class="pun">?.</span><span class="pln">txt </span><span class="pun">/</span><span class="pln">mydir</span><span class="pun">/</span></pre>
<p><strong>&lt;目标路径&gt;</strong>：容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。</p>

<h3>ADD</h3>
<p>ADD 指令和 COPY 的使用格式一致（同样需求下，官方推荐使用 COPY）。功能也类似，不同之处如下：</p>
<ul><li>
ADD 的优点：在执行 &lt;源文件&gt; 为 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，会自动复制并解压到 &lt;目标路径&gt;。</li><li>
ADD 的缺点：在不解压的前提下，无法复制 tar 压缩文件。会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。具体是否使用，可以根据是否需要自动解压来决定。</li></ul>

<h3>CMD</h3>

<p>类似于 RUN 指令，用于运行程序，但二者运行的时间点不同:</p>
<ul><li>
CMD 在docker run 时运行。</li><li>
RUN 是在 docker build。</li></ul>

<p><strong>作用</strong>：为启动的容器指定默认要运行的程序，程序运行结束，容器也就结束。CMD 指令指定的程序可被 docker run 命令行参数中指定要运行的程序所覆盖。</p>

<p><strong>注意</strong>：如果 Dockerfile 中如果存在多个 CMD 指令，仅最后一个生效。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">CMD </span><span class="pun">&lt;</span><span class="pln">shell </span><span class="pun">命令&gt;</span><span class="pln"> 
CMD </span><span class="pun">[</span><span class="str">"&lt;可执行文件或命令&gt;"</span><span class="pun">,</span><span class="str">"&lt;param1&gt;"</span><span class="pun">,</span><span class="str">"&lt;param2&gt;"</span><span class="pun">,...]</span><span class="pln"> 
CMD </span><span class="pun">[</span><span class="str">"&lt;param1&gt;"</span><span class="pun">,</span><span class="str">"&lt;param2&gt;"</span><span class="pun">,...]</span><span class="pln">  </span><span class="com"># 该写法是为 ENTRYPOINT 指令指定的程序提供默认参数</span></pre>
<p>推荐使用第二种格式，执行过程比较明确。第一种格式实际上在运行的过程中也会自动转换成第二种格式运行，并且默认可执行文件是 sh。</p>

<h3>ENTRYPOINT</h3>
<p>类似于 CMD 指令，但其不会被 docker run 的命令行参数指定的指令所覆盖，而且这些命令行参数会被当作参数送给 ENTRYPOINT 指令指定的程序。</p><p>但是, 如果运行 docker run 时使用了 --entrypoint 选项，将覆盖 CMD 指令指定的程序。</p>

<p><strong>优点</strong>：在执行 docker run 的时候可以指定 ENTRYPOINT 运行所需的参数。</p>
<p><strong>注意</strong>：如果 Dockerfile 中如果存在多个 ENTRYPOINT 指令，仅最后一个生效。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">ENTRYPOINT </span><span class="pun">[</span><span class="str">"&lt;executeable&gt;"</span><span class="pun">,</span><span class="str">"&lt;param1&gt;"</span><span class="pun">,</span><span class="str">"&lt;param2&gt;"</span><span class="pun">,...]</span></pre>
<p>可以搭配 CMD 命令使用：一般是变参才会使用 CMD ，这里的 CMD 等于是在给 ENTRYPOINT 传参，以下示例会提到。</p>

<p>示例：</p>
<p>假设已通过 Dockerfile 构建了 nginx:test 镜像：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">FROM nginx

ENTRYPOINT </span><span class="pun">[</span><span class="str">"nginx"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"-c"</span><span class="pun">]</span><span class="pln"> </span><span class="com"># 定参</span><span class="pln">
CMD </span><span class="pun">[</span><span class="str">"/etc/nginx/nginx.conf"</span><span class="pun">]</span><span class="pln"> </span><span class="com"># 变参 </span></pre>

<p>1、不传参运行</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">$ docker run  nginx</span><span class="pun">:</span><span class="pln">test</span></pre>
<p>容器内会默认运行以下命令，启动主进程。</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">nginx </span><span class="pun">-</span><span class="pln">c </span><span class="pun">/</span><span class="pln">etc</span><span class="pun">/</span><span class="pln">nginx</span><span class="pun">/</span><span class="pln">nginx</span><span class="pun">.</span><span class="pln">conf</span></pre>
<p>2、传参运行</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">$ docker run  nginx</span><span class="pun">:</span><span class="pln">test </span><span class="pun">-</span><span class="pln">c </span><span class="pun">/</span><span class="pln">etc</span><span class="pun">/</span><span class="pln">nginx</span><span class="pun">/</span><span class="kwd">new</span><span class="pun">.</span><span class="pln">conf</span></pre>
<p>容器内会默认运行以下命令，启动主进程(/etc/nginx/new.conf:假设容器内已有此文件)</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">nginx </span><span class="pun">-</span><span class="pln">c </span><span class="pun">/</span><span class="pln">etc</span><span class="pun">/</span><span class="pln">nginx</span><span class="pun">/</span><span class="kwd">new</span><span class="pun">.</span><span class="pln">conf</span></pre>

<h3>ENV</h3>
<p>设置环境变量，定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">ENV </span><span class="str">&lt;key&gt;</span><span class="pln"> </span><span class="str">&lt;value&gt;</span><span class="pln">
ENV </span><span class="str">&lt;key1&gt;</span><span class="pun">=&lt;</span><span class="pln">value1</span><span class="pun">&gt;</span><span class="pln"> </span><span class="str">&lt;key2&gt;</span><span class="pun">=&lt;</span><span class="pln">value2</span><span class="pun">&gt;...</span></pre>
<p>以下示例设置 NODE_VERSION = 7.2.0 ， 在后续的指令中可以通过 $NODE_VERSION 引用：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">ENV NODE_VERSION </span><span class="lit">7.2</span><span class="pun">.</span><span class="lit">0</span><span class="pln">

RUN curl </span><span class="pun">-</span><span class="pln">SLO </span><span class="str">"https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz"</span><span class="pln"> \
 </span><span class="pun">&amp;&amp;</span><span class="pln"> curl </span><span class="pun">-</span><span class="pln">SLO </span><span class="str">"https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc"</span></pre>

<h3>ARG </h3>
<p>构建参数，与 ENV 作用一至。不过作用域不一样。ARG 设置的环境变量仅对 Dockerfile 内有效，也就是说只有 docker build 的过程中有效，构建好的镜像内不存在此环境变量。</p>

<p>构建命令 docker build 中可以用 --build-arg &lt;参数名&gt;=&lt;值&gt; 来覆盖。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">ARG </span><span class="pun">&lt;参数名&gt;[=&lt;默认值&gt;]</span></pre>

<h3>VOLUME</h3>
<p>定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷。</p>

<p>作用：</p>
<ul><li>
避免重要的数据，因容器重启而丢失，这是非常致命的。</li><li>
避免容器不断变大。</li></ul>
<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">VOLUME </span><span class="pun">[</span><span class="str">"&lt;路径1&gt;"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"&lt;路径2&gt;"</span><span class="pun">...]</span><span class="pln">
VOLUME </span><span class="pun">&lt;路径&gt;</span></pre>
<p>在启动容器 docker run 的时候，我们可以通过 -v 参数修改挂载点。</p>

<h3>EXPOSE </h3>
<p>仅仅只是声明端口。</p>

<p>作用：</p><ul><li>
帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射。</li><li>
在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。</li></ul>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">EXPOSE </span><span class="pun">&lt;端口</span><span class="lit">1</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">[&lt;端口</span><span class="lit">2</span><span class="pun">&gt;...]</span></pre>

<h3>WORKDIR</h3>
<p>指定工作目录。用 WORKDIR 指定的工作目录，会在构建镜像的每一层中都存在。（WORKDIR 指定的工作目录，必须是提前创建好的）。</p>

<p>docker build 构建镜像过程中的，每一个 RUN 命令都是新建的一层。只有通过 WORKDIR 创建的目录才会一直存在。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">WORKDIR </span><span class="pun">&lt;工作目录路径&gt;</span></pre>

<h3>USER </h3>
<p>用于指定执行后续命令的用户和用户组，这边只是切换后续命令执行的用户（用户和用户组必须提前已经存在）。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">USER </span><span class="pun">&lt;用户名&gt;[:&lt;用户组&gt;]</span></pre>

<h3>HEALTHCHECK</h3>
<p>用于指定某个程序或者指令来监控 docker 容器服务的运行状态。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">HEALTHCHECK </span><span class="pun">[选项]</span><span class="pln"> CMD </span><span class="pun">&lt;命令&gt;：设置检查容器健康状况的命令</span><span class="pln">
HEALTHCHECK NONE</span><span class="pun">：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令</span><span class="pln">

HEALTHCHECK </span><span class="pun">[选项]</span><span class="pln"> CMD </span><span class="pun">&lt;命令&gt;</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="pun">这边</span><span class="pln"> CMD </span><span class="pun">后面跟随的命令使用，可以参考</span><span class="pln"> CMD </span><span class="pun">的用法。</span></pre>

<h3>ONBUILD </h3>
<p>用于延迟构建命令的执行。简单的说，就是 Dockerfile 里用 ONBUILD 指定的命令，在本次构建镜像的过程中不会执行（假设镜像为 test-build）。当有新的 Dockerfile 使用了之前构建的镜像 FROM test-build ，这是执行新镜像的 Dockerfile 构建时候，会执行 test-build 的 Dockerfile 里的 ONBUILD 指定的命令。</p>

<p>格式：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">ONBUILD </span><span class="pun">&lt;其它指令&gt;</span></pre>
			<!-- 其他扩展 -->
						
</div>
			
</div>
