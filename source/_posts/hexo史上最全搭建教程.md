---
title: hexo史上最全搭建教程
date: 2019-11-04 15:21:34
tags: hexo
categories: 工作学习
comments: true
cover: /img/hexo.jpg
top_img: https://source.unsplash.com/collection/collectionid/1600x900
top: true
---
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" />
<!-- <script src="https://cdn.jsdelivr.net/gh/yujiajie01/live2d-widget@V11/autoloadx.js"></script> -->

# hexo史上最全搭建教程



<p>现在市面上的博客很多，如CSDN，博客园，简书等平台，可以直接在上面发表，用户交互做的好，写的文章百度也能搜索的到。缺点是比较不自由，会受到平台的各种限制和恶心的广告。</p>
<p>而自己购买域名和服务器，搭建博客的成本实在是太高了，不光是说这些购买成本，单单是花力气去自己搭这么一个网站，还要定期的维护它，对于我们大多数人来说，实在是没有这样的精力和时间。</p>
<p>那么就有第三种选择，直接在github page平台上托管我们的博客。这样就可以安心的来写作，又不需要定期维护，而且hexo作为一个快速简洁的博客框架，用它来搭建博客真的非常容易。</p>
<h2><a name="t0"></a><a id="Hexo_10"></a>Hexo简介</h2>
<p>Hexo是一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub和Coding上，是搭建博客的首选框架。大家可以进入<a href="https://hexo.io/zh-cn/" rel="nofollow" data-token="566552a7a62a77832cb692c22280f61a">hexo官网</a>进行详细查看，因为Hexo的创建者是台湾人，对中文的支持很友好，可以选择中文进行查看。</p>
<p>教程分三个部分，</p>
<ul>
<li>第一部分：hexo的初级搭建还有部署到github page上，以及个人域名的绑定。</li>
<li>第二部分：hexo的基本配置，更换主题，实现多终端工作，以及在coding page部署实现国内外分流</li>
<li>第三部分：hexo添加各种功能，包括搜索的SEO，阅读量统计，访问量统计和评论系统等。</li>
</ul>
<hr>
<h1><a name="t1"></a><a id="_22"></a>第一部分</h1>
<p>hexo的初级搭建还有部署到github page上，以及个人域名的绑定。</p>
<h1><a name="t2"></a><a id="Hexo_27"></a>Hexo简介</h1>
<p>Hexo是一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub和Coding上，是搭建博客的首选框架。大家可以进入<a href="https://hexo.io/zh-cn/" rel="nofollow" data-token="566552a7a62a77832cb692c22280f61a">hexo官网</a>进行详细查看，因为Hexo的创建者是台湾人，对中文的支持很友好，可以选择中文进行查看。</p>
<h1><a name="t3"></a><a id="Hexo_31"></a>Hexo搭建步骤</h1>
<ol>
<li>安装Git</li>
<li>安装Node.js</li>
<li>安装Hexo</li>
<li>GitHub创建个人仓库</li>
<li>生成SSH添加到GitHub</li>
<li>将hexo部署到GitHub</li>
<li>设置个人域名</li>
<li>发布文章</li>
</ol>
<h1><a name="t4"></a><a id="1_Git_42"></a>1. 安装Git</h1>
<p>Git是目前世界上最先进的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。也就是用来管理你的hexo博客文章，上传到GitHub的工具。Git非常强大，我觉得建议每个人都去了解一下。廖雪峰老师的Git教程写的非常好，大家可以了解一下。<a href="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000" rel="nofollow" data-token="a7898ebe2baf3cae1521c34f89cd7516">Git教程</a></p>
<p>windows：到git官网上下载,<a href="https://gitforwindows.org/" rel="nofollow" data-token="65cbc636381262947ae8b932fb62d669">Download git</a>,下载后会有一个Git Bash的命令行工具，以后就用这个工具来使用git。</p>
<p>linux：对linux来说实在是太简单了，因为最早的git就是在linux上编写的，只需要一行代码</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">sudo apt-get install git
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>安装好后，用<code>git --version</code> 来查看一下版本</p>
<h1><a name="t5"></a><a id="2_nodejs_58"></a>2. 安装nodejs</h1>
<p>Hexo是基于nodeJS编写的，所以需要安装一下nodeJs和里面的npm工具。</p>
<p>windows：<a href="https://nodejs.org/en/download/" rel="nofollow" data-token="1ccdafce46a87ccfc591f0710f1c4f80">nodejs</a>选择LTS版本就行了。</p>
<p>linux：</p>
<pre class="prettyprint"><code class="prism language-shell has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nodejs
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">npm</span>
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>安装完后，打开命令行</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">node -v
npm -v
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>检查一下有没有安装成功</p>
<p>顺便说一下，windows在git安装完后，就可以直接使用git bash来敲命令行了，不用自带的cmd，cmd有点难用。</p>
<h1><a name="t6"></a><a id="3_hexo_80"></a>3. 安装hexo</h1>
<p>前面git和nodejs安装好后，就可以安装hexo了，你可以先创建一个文件夹blog，然后<code>cd</code>到这个文件夹下（或者在这个文件夹下直接右键git bash打开）。</p>
<p>输入命令</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">npm install -g hexo-cli
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>依旧用<code>hexo -v</code>查看一下版本</p>
<p>至此就全部安装完了。</p>
<p>接下来初始化一下hexo</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo init myblog
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>这个myblog可以自己取什么名字都行，然后</p>
<pre class="prettyprint"><code class="prism language-bash has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;"><span class="token function">cd</span> myblog //进入这个myblog文件夹
<span class="token function">npm</span> <span class="token function">install</span>
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>新建完成后，指定文件夹目录下有：</p>
<ul>
<li>node_modules: 依赖包</li>
<li>public：存放生成的页面</li>
<li>scaffolds：生成文章的一些模板</li>
<li>source：用来存放你的文章</li>
<li>themes：主题</li>
<li>** _config.yml: 博客的配置文件**</li>
</ul>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo g
hexo server
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>打开hexo的服务，在浏览器输入localhost:4000就可以看到你生成的博客了。</p>
<p>大概长这样：<br>
<img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksvj6e0j211c0f2n60.jpg" alt=""><br>
使用ctrl+c可以把服务关掉。</p>
<h1><a name="t7"></a><a id="4_GitHub_125"></a>4. GitHub创建个人仓库</h1>
<p>首先，你先要有一个GitHub账户，去注册一个吧。</p>
<p>注册完登录后，在GitHub.com中看到一个New repository，新建仓库<br>
<img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstcm7ej20ei0c1aah.jpg" alt=""></p>
<p>创建一个和你用户名相同的仓库，<a href="http://xn--yfr16an19l.github.io" rel="nofollow" data-token="8a9cfed7ff8665d6939250ba12ba911f">后面加.github.io</a>，只有这样，将来要部署到GitHub page的时候，才会被识别，<a href="http://xn--xxxx-4m5f354ev5p.github.io" rel="nofollow" data-token="29340eb4ad390b2f61cc7ca101505eec">也就是xxxx.github.io</a>，其中xxx就是你注册GitHub的用户名。我这里是已经建过了。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstusrdj20iw0o4myp.jpg" alt=""></p>
<p>点击create repository。</p>
<h1><a name="t8"></a><a id="5_SSHGitHub_141"></a>5. 生成SSH添加到GitHub</h1>
<p>回到你的git bash中，</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">git config --global user.name "yourname"
git config --global user.email "youremail"
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>这里的yourname输入你的GitHub用户名，youremail输入你GitHub的邮箱。这样GitHub才能知道你是不是对应它的账户。</p>
<p>可以用以下两条，检查一下你有没有输对</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">git config user.name
git config user.email
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>然后创建SSH,一路回车</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">ssh-keygen -t rsa -C "youremail"
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>这个时候它会告诉你已经生成了.ssh的文件夹。在你的电脑中找到这个文件夹。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstd106j20kb073gll.jpg" alt=""></p>
<p>ssh，简单来讲，就是一个秘钥，其中，<code>id_rsa</code>是你这台电脑的私人秘钥，不能给别人看的，<code>id_rsa.pub</code>是公共秘钥，可以随便给别人看。把这个公钥放在GitHub上，这样当你链接GitHub自己的账户时，它就会根据公钥匹配你的私钥，当能够相互匹配时，才能够顺利的通过git上传你的文件到GitHub上。</p>
<p>而后在GitHub的setting中，找到SSH keys的设置选项，点击<code>New SSH key</code><br>
把你的<code>id_rsa.pub</code>里面的信息复制进去。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstdifaj210s0gfjrz.jpg" alt=""></p>
<p>在gitbash中，查看是否成功</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">ssh -T git@github.com
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<h1><a name="t9"></a><a id="6_hexoGitHub_179"></a>6. 将hexo部署到GitHub</h1>
<p>这一步，我们就可以将hexo和GitHub关联起来，也就是将hexo生成的文章部署到GitHub上，打开站点配置文件 <code>_config.yml</code>，翻到最后，修改为<br>
YourgithubName就是你的GitHub账户</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">deploy:
  type: git
  repo: https://github.com/YourgithubName/YourgithubName.github.io.git
  branch: master
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></ul></pre>
<p>这个时候需要先安装deploy-git ，也就是部署的命令,这样你才能用命令部署到GitHub。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">npm install hexo-deployer-git --save
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>然后</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo clean
hexo generate
hexo deploy
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<p>其中 <code>hexo clean</code>清除了你之前生成的东西，也可以不加。<br>
<code>hexo generate</code> 顾名思义，生成静态文章，可以用 <code>hexo g</code>缩写<br>
<code>hexo deploy</code> 部署文章，可以用<code>hexo d</code>缩写</p>
<p>注意deploy时可能要你输入username和password。</p>
<p>得到下图就说明部署成功了，过一会儿就可以在<code>http://yourname.github.io</code> 这个网站看到你的博客了！！<br>
<img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstbtvfj20lq01u3yd.jpg" alt=""></p>
<h1><a name="t10"></a><a id="7__211"></a>7. 设置个人域名</h1>
<p>现在你的个人网站的地址是 <code>yourname.github.io</code>，如果觉得这个网址逼格不太够，这就需要你设置个人域名了。但是需要花钱。</p>
<p>注册一个阿里云账户,在<a href="https://wanwang.aliyun.com/?spm=5176.8142029.digitalization.2.e9396d3e46JCc5" rel="nofollow" data-token="d4fd2006cee1c75d664e7dba87778385">阿里云</a>上买一个域名，我买的是 <code>fangzh.top</code>，各个后缀的价格不太一样，比如最广泛的.com就比较贵，看个人喜好咯。</p>
<p>你需要先去进行实名认证,然后在域名控制台中，看到你购买的域名。</p>
<p>点<strong>解析</strong>进去，添加解析。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstcu8xj20d607wdfw.jpg" alt=""></p>
<p>其中，192.30.252.153 和 192.30.252.154 是GitHub的服务器地址。<br>
<strong>注意，解析线路选择默认</strong>，不要像我一样选境外。这个境外是后面来做国内外分流用的,在后面的博客中会讲到。记得现在选择<strong>默认</strong>！！</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstf8unj20ob05b0sq.jpg" alt=""></p>
<p>登录GitHub，进入之前创建的仓库，点击settings，设置Custom domain，输入你的域名<code>fangzh.top</code></p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstghklj20as04mt8n.jpg" alt=""></p>
<p>然后在你的博客文件source中创建一个名为CNAME文件，不要后缀。写上你的域名。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstgsyrj208806aq2z.jpg" alt=""></p>
<p>最后，在gitbash中，输入</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo clean
hexo g
hexo d
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<p>过不了多久，再打开你的浏览器，输入你自己的域名，就可以看到搭建的网站啦！</p>
<p>接下来你就可以正式开始写文章了。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new newpapername
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>然后在source/_post中打开markdown文件，就可以开始编辑了。当你写完的时候，再</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo clean
hexo g
hexo d
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<p>就可以看到更新了。</p>
<h1><a name="t11"></a><a id="_264"></a>第二部分</h1>
<p>hexo的基本配置，更换主题，实现多终端工作，以及在coding page部署实现国内外分流。</p>
<h1><a name="t12"></a><a id="1_hexo_269"></a>1. hexo基本配置</h1>
<p>在文件根目录下的<code>_config.yml</code>，就是整个hexo框架的配置文件了。可以在里面修改大部分的配置。详细可参考<a href="https://hexo.io/zh-cn/docs/configuration" rel="nofollow" data-token="0cd9e96179b40d463ae472906f4a098b">官方的配置</a>描述。</p>
<h3><a name="t13"></a><a id="_275"></a>网站</h3>

<div class="table-box"><table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td>网站标题</td>
</tr>
<tr>
<td><code>subtitle</code></td>
<td>网站副标题</td>
</tr>
<tr>
<td><code>description</code></td>
<td>网站描述</td>
</tr>
<tr>
<td><code>author</code></td>
<td>您的名字</td>
</tr>
<tr>
<td><code>language</code></td>
<td>网站使用的语言</td>
</tr>
<tr>
<td><code>timezone</code></td>
<td>网站时区。Hexo 默认使用您电脑的时区。<a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" rel="nofollow" data-token="32f792257181ee0c25e2a967c7297faa">时区列表</a>。比如说：<code>America/New_York</code>, <code>Japan</code>, 和 <code>UTC</code> 。</td>
</tr>
</tbody>
</table></div><p>其中，<code>description</code>主要用于SEO，告诉搜索引擎一个关于您站点的简单描述，通常建议在其中包含您网站的关键词。<code>author</code>参数用于主题显示文章的作者。</p>
<h3><a name="t14"></a><a id="_290"></a>网址</h3>

<div class="table-box"><table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>url</code></td>
<td>网址</td>
</tr>
<tr>
<td><code>root</code></td>
<td>网站根目录</td>
</tr>
<tr>
<td><code>permalink</code></td>
<td>文章的 <a href="https://hexo.io/zh-cn/docs/permalinks" rel="nofollow" data-token="79d8679b1fa8f4ab3a2e083ab4241c95">永久链接</a> 格式</td>
</tr>
<tr>
<td><code>permalink_defaults</code></td>
<td>永久链接中各部分的默认值</td>
</tr>
</tbody>
</table></div><p>在这里，你需要把<code>url</code>改成你的网站域名。</p>
<p>permalink，也就是你生成某个文章时的那个链接格式。</p>
<p>比如我新建一个文章叫<code>temp.md</code>，那么这个时候他自动生成的地址就是<code>http://yoursite.com/2018/09/05/temp</code>。</p>
<p>以下是官方给出的示例，关于链接的变量还有很多，需要的可以去官网上查找 <a href="https://hexo.io/zh-cn/docs/permalinks" rel="nofollow" data-token="79d8679b1fa8f4ab3a2e083ab4241c95">永久链接</a> 。</p>

<div class="table-box"><table>
<thead>
<tr>
<th>参数</th>
<th>结果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:year/:month/:day/:title/</code></td>
<td>2013/07/14/hello-world</td>
</tr>
<tr>
<td><code>:year-:month-:day-:title.html</code></td>
<td>2013-07-14-hello-world.html</td>
</tr>
<tr>
<td><code>:category/:title</code></td>
<td>foo/bar/hello-world</td>
</tr>
</tbody>
</table></div><p>再往下翻，中间这些都默认就好了。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">theme: landscape

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: &lt;repository url&gt;
  branch: [branch]

<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></li></li></li></li></ul></pre>
<p><code>theme</code>就是选择什么主题，也就是在<code>theme</code>这个文件夹下，在官网上有很多个主题，默认给你安装的是<code>lanscape</code>这个主题。当你需要更换主题时，在官网上下载，把主题的文件放在<code>theme</code>文件夹下，再修改这个参数就可以了。</p>
<p>接下来这个<code>deploy</code>就是网站的部署的，<code>repo</code>就是仓库(<code>Repository</code>)的简写。<code>branch</code>选择仓库的哪个分支。这个在之前进行github page部署的时候已经修改过了，不再赘述。而这个在后面进行双平台部署的时候会再次用到。</p>
<h3><a name="t15"></a><a id="Frontmatter_341"></a>Front-matter</h3>
<p>Front-matter 是文件最上方以 <code>---</code> 分隔的区域，用于指定个别文件的变量，举例来说：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">title: Hello World
date: 2013/7/13 20:46:25
---
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<p>下是预先定义的参数，您可在模板中使用这些参数值并加以利用。</p>

<div class="table-box"><table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>layout</code></td>
<td>布局</td>
</tr>
<tr>
<td><code>title</code></td>
<td>标题</td>
</tr>
<tr>
<td><code>date</code></td>
<td>建立日期</td>
</tr>
<tr>
<td><code>updated</code></td>
<td>更新日期</td>
</tr>
<tr>
<td><code>comments</code></td>
<td>开启文章的评论功能</td>
</tr>
<tr>
<td><code>tags</code></td>
<td>标签（不适用于分页）</td>
</tr>
<tr>
<td><code>categories</code></td>
<td>分类（不适用于分页）</td>
</tr>
<tr>
<td><code>permalink</code></td>
<td>覆盖文章网址</td>
</tr>
</tbody>
</table></div><p>其中，分类和标签需要区别一下，分类具有顺序性和层次性，也就是说 <code>Foo, Bar</code> 不等于 <code>Bar, Foo</code>；而标签没有顺序和层次。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">categories:
- Diary
tags:
- PS3
- Games
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></ul></pre>
<h3><a name="t16"></a><a id="layout_376"></a>layout（布局）</h3>
<p>当你每一次使用代码</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new paper
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>它其实默认使用的是<code>post</code>这个布局，也就是在<code>source</code>文件夹下的<code>_post</code>里面。</p>
<p>Hexo 有三种默认布局：<code>post</code>、<code>page</code> 和 <code>draft</code>，它们分别对应不同的路径，而您自定义的其他布局和 <code>post</code> 相同，都将储存到 <code>source/_posts</code> 文件夹。</p>

<div class="table-box"><table>
<thead>
<tr>
<th>布局</th>
<th>路径</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>post</code></td>
<td><code>source/_posts</code></td>
</tr>
<tr>
<td><code>page</code></td>
<td><code>source</code></td>
</tr>
<tr>
<td><code>draft</code></td>
<td><code>source/_drafts</code></td>
</tr>
</tbody>
</table></div><p>而new这个命令其实是：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new [layout] &lt;title&gt;
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>只不过这个layout默认是post罢了。</p>
<h4><a id="page_404"></a>page</h4>
<p>如果你想另起一页，那么可以使用</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new page board
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>系统会自动给你在source文件夹下创建一个board文件夹，<a href="http://xn--boardindex-zt2p02eqgs45dlht758bqmyd.md" rel="nofollow" data-token="4e64a53b8703e91bc2cf6f86b2772517">以及board文件夹中的index.md</a>，这样你访问的board对应的链接就是<code>http://xxx.xxx/board</code></p>
<h4><a id="draft_414"></a>draft</h4>
<p>draft是草稿的意思，也就是你如果想写文章，又不希望被看到，那么可以</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new draft newpage
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>这样会在source/_draft中新建一个newpage.md文件，如果你的草稿文件写的过程中，想要预览一下，那么可以使用</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo server --draft
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>在本地端口中开启服务预览。</p>
<p>如果你的草稿文件写完了，想要发表到post中，</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo publish draft newpage
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>就会自动把newpage.md发送到post中。</p>
<hr>
<h1><a name="t17"></a><a id="2__444"></a>2. 更换主题</h1>
<p>到这一步，如果你觉得默认的<code>landscape</code>主题不好看，那么可以在官网的主题中，选择你喜欢的一个主题进行修改就可以啦。<a href="https://hexo.io/themes/" rel="nofollow" data-token="93c3a226a9dd6802027cf6c5a36b3180">点这里</a></p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkswpjhtj21fu0rhtp6.jpg" alt=""></p>
<p>这里有200多个主题可以选。不过最受欢迎的就是那么几个，比如<a href="https://github.com/theme-next/hexo-theme-next" rel="nofollow" data-token="b9e2454e695795db7584af6acfe17ba7">NexT主题</a>，非常的简洁好看，大多数人都选择这个，关于这个的教程也比较多。不过我选择的是<a href="https://github.com/ppoffice/hexo-theme-hueman" rel="nofollow" data-token="7fd6d2eec71ae5b1ebd93695d162b8e5">hueman</a>这个主题，好像是从WordPress移植过来的，展示效果如下：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksxvknrj21fc0q8tsl.jpg" alt=""></p>
<p>不管怎么样，至少是符合我个人的审美。</p>
<p>直接在github链接上下载下来，然后放到<code>theme</code>文件夹下就行了，然后再在刚才说的配置文件中把<code>theme</code>换成那个主题文件夹的名字，它就会自动在<code>theme</code>文件夹中搜索你配置的主题。</p>
<p>而后进入<code>hueman</code>这个文件夹，可以看到里面也有一个配置文件<code>_config.xml</code>，貌似它默认是<code>_config.xml.example</code>，把它复制一份，重命名为<code>_config.xml</code>就可以了。这个配置文件是修改你整个主题的配置文件。</p>
<h3><a name="t18"></a><a id="menu_466"></a>menu（菜单栏）</h3>
<p>也就是上面菜单栏上的这些东西。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstfwjbj20jd0233ye.jpg" alt=""></p>
<p>其中，About这个你是找不到网页的，因为你的文章中没有about这个东西。如果你想要的话，可以执行命令</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new page about
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>它就会在根目录下<code>source</code>文件夹中新建了一个<code>about</code>文件夹，<a href="http://xn--index-ok2hl60a.md" rel="nofollow" data-token="8e35dc4dcc1b601bc7b92075c8c9ab97">以及index.md</a>，在index.md中写上你想要写的东西，就可以在网站上展示出来了。</p>
<p>如果你想要自己再自定义一个菜单栏的选项，那么就</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new page yourdiy
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>然后在主题配置文件的menu菜单栏添加一个 <code>Yourdiy : /yourdiy</code>，注意冒号后面要有空格，以及前面的空格要和menu中默认的保持整齐。然后在<code>languages</code>文件夹中，找到<code>zh-CN.yml</code>，在index中添加<code>yourdiy: '中文意思'</code>就可以显示中文了。</p>
<h3><a name="t19"></a><a id="customize_490"></a>customize(定制)</h3>
<p>在这里可以修改你的个人logo，默认是那个hueman，在<code>source/css/images</code>文件夹中放入自己要的logo，再改一下<code>url</code>的链接名字就可以了。</p>
<p><code>favicon</code>是网站中出现的那个小图标的icon，找一张你喜欢的logo，然后转换成ico格式，放在images文件夹下，配置一下路径就行。</p>
<p><code>social_links</code> ，可以显示你的社交链接，而且是有logo的。</p>
<p><strong>tips:</strong></p>
<p>在这里可以添加一个rss功能，也就是那个符号像wifi一样的东西。</p>
<h3><a name="t20"></a><a id="RSS_502"></a>添加RSS</h3>
<p><strong>1. 什么是RSS？</strong></p>
<p>RSS也就是订阅功能，你可以理解为类似与订阅公众号的功能，来订阅各种博客，杂志等等。</p>
<p><strong>2. 为什么要用RSS？</strong></p>
<p>就如同订阅公众号一样，你对某个公众号感兴趣，你总不可能一直时不时搜索这个公众号来看它的文章吧。博客也是一样，如果你喜欢某个博主，或者某个平台的内容，你可以通过RSS订阅它们，然后在RSS阅读器上可以实时推送这些消息。现在网上的垃圾消息太多了，如果你每一天都在看这些消息中度过，漫无目的的浏览，只会让你的时间一点一点的流逝，太不值得了。如果你关注的博主每次都发的消息都是精华，而且不是每一天十几条几十条的轰炸你，那么这个博主就值得你的关注，你就可以通过RSS订阅他。</p>
<p>在我的理解中，如果你不想每天都被那些没有质量的消息轰炸，只想安安静静的关注几个博主，每天看一些有质量的内容也不用太多，那么RSS订阅值得你的拥有。</p>
<p><strong>3. 添加RSS功能</strong></p>
<p>先安装RSS插件</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">npm i hexo-generator-feed
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>而后在你整个项目的<code>_config.yml</code>中找到Extensions，添加：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;"># Extensions
## Plugins: https://hexo.io/plugins/
#RSS订阅
plugin:
- hexo-generator-feed
#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></li></li></li></li></li></ul></pre>
<p>这个时候你的RSS链接就是  域名<code>/atom.xml</code>了。</p>
<p>所以，在主题配置文件中的这个<code>social links</code>，开启RSS的页面功能，这样你网站上就有那个像wifi一样符号的RSS logo了，注意空格。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">rss: /atom.xml
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p><strong>4. 如何关注RSS？</strong></p>
<p>首先，你需要一个RSS阅读器，在这里我推荐<code>inoreader</code>，宇宙第一RSS阅读器，而且中文支持的挺好。不过它没有PC端的程序，只有网页版，chrome上有插件。在官网上用google账号或者自己注册账号登录，就可以开始你的关注之旅了。</p>
<p>每次需要关注某个博主时，就点开他的RSS链接，把链接复制到<code>inoreader</code>上，就能关注了，当然，如果是比较大众化的很厉害的博主，你直接搜名字也可以的，比如每个人都非常佩服的阮一峰大师，直接在阅读器上搜索<code>阮一峰</code>，应该就能出来了。</p>
<p>我关注的比如，阮一峰的网络日志，月光博客，知乎精选等，都很不错。当然，还有我！！赶快关注我吧！你值得拥有：<a href="http://fangzh.top/atom.xml" rel="nofollow" data-token="1d365b8b8a72c69f7ac85d99cbcf993d">http://fangzh.top/atom.xml</a></p>
<p>在安卓端，inoreader也有下载，不过因为国内google是登录不了的，你需要在inoreader官网上把你的密码修改了，然后就可以用账户名和密码登录了。</p>
<p>在IOS端，没用过，好像是reader 3可以支持inoreader账户，还有个readon也不错，可以去试试。</p>
<h3><a name="t21"></a><a id="widgets_559"></a>widgets(侧边栏)</h3>
<p>侧边栏的小标签，如果你想自己增加一个，比如我增加了一个联系方式，那么我把<code>communication</code>写在上面，在<code>zh-CN.yml</code>中的<code>sidebar</code>，添加<code>communication: '中文'</code>。</p>
<p>然后在<code>hueman/layout/widget</code>中添加一个<code>communicaiton.ejs</code>，填入模板：</p>
<pre class="prettyprint"><code class="prism language-js has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;"><span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>site<span class="token punctuation">.</span>posts<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-wrap widget-list"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h3 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-title"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">%=</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'sidebar.communiation'</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>这里添加你要写的内容<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></li></li></li></ul></pre>
<h3><a name="t22"></a><a id="search_578"></a>search(搜索框)</h3>
<p>默认搜索框是不能够用的，</p>
<blockquote>
<p>you need to install <code>hexo-generator-json-content</code> before using Insight Search</p>
</blockquote>
<p>它已经告诉你了，如果想要使用，就安装这个插件。</p>
<h3><a name="t23"></a><a id="comment_588"></a>comment(评论系统)</h3>
<p>这里的多数都是国外的，基本用不了。这个<code>valine</code>好像不错，还能统计文章阅读量，可以自己试一试，<a href="https://valine.js.org/quickstart.html#npm" rel="nofollow" data-token="239a1af0bfb7fc6a90feb1702be74c2f">链接</a>。</p>
<h3><a name="t24"></a><a id="miscellaneous_594"></a>miscellaneous(其他)</h3>
<p>这里我就改了一个<code>links</code>，可以添加友链。注意空格要对！不然会报错！</p>
<h3><a name="t25"></a><a id="_600"></a>总结：</h3>
<p>整个主题看起来好像很复杂的样子，但是仔细捋一捋其实也比较流畅，</p>
<ul>
<li>languages: 顾名思义</li>
<li>layout：布局文件，其实后期想要修改自定义网站上的东西，添加各种各样的信息，主要是在这里修改，其中<code>comment</code>是评论系统，<code>common</code>是常规的布局，最常修改的在这里面，比如修改页面<code>head</code>和<code>footer</code>的内容。</li>
<li>scripts：js脚本，暂时没什么用</li>
<li>source：里面放了一些css的样式，以及图片</li>
</ul>
<hr>
<h1><a name="t26"></a><a id="3_git_613"></a>3. git分支进行多终端工作</h1>
<p>问题来了，如果你现在在自己的笔记本上写的博客，部署在了网站上，那么你在家里用台式机，或者实验室的台式机，发现你电脑里面没有博客的文件，或者要换电脑了，最后不知道怎么移动文件，怎么办？</p>
<p>在这里我们就可以利用git的分支系统进行多终端工作了，这样每次打开不一样的电脑，只需要进行简单的配置和在github上把文件同步下来，就可以无缝操作了。</p>
<h3><a name="t27"></a><a id="_623"></a>机制</h3>
<p>机制是这样的，由于<code>hexo d</code>上传部署到github的其实是hexo编译后的文件，是用来生成网页的，不包含源文件。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstj43xj20800d7glz.jpg" alt="可以看到，并没有source等源文件在内"></p>
<p>也就是上传的是在本地目录里自动生成的<code>.deploy_git</code>里面。</p>
<p>其他文件 ，包括我们写在source 里面的，和配置文件，主题文件，都没有上传到github</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksthbryj20eb07swej.jpg" alt=""></p>
<p>所以可以利用git的分支管理，将源文件上传到github的另一个分支即可。</p>
<h3><a name="t28"></a><a id="_645"></a>上传分支</h3>
<p>首先，先在github上新建一个hexo分支，如图：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstkyz7j20cp0bgdg5.jpg" alt=""></p>
<p>然后在这个仓库的settings中，选择默认分支为hexo分支（这样每次同步的时候就不用指定分支，比较方便）。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstl8uxj20ql0dsgmo.jpg" alt=""></p>
<p>然后在本地的任意目录下，打开git bash，</p>
<pre class="prettyprint"><code class="prism language-shell has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;"><span class="token function">git</span> clone git@github.com:ZJUFangzh/ZJUFangzh.github.io.git
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>将其克隆到本地，因为默认分支已经设成了hexo，所以clone时只clone了hexo。</p>
<p>接下来在克隆到本地的<code>ZJUFangzh.github.io</code>中，把除了.git 文件夹外的所有文件都删掉</p>
<p>把之前我们写的博客源文件全部复制过来，除了<code>.deploy_git</code>。这里应该说一句，复制过来的源文件应该有一个<code>.gitignore</code>，用来忽略一些不需要的文件，如果没有的话，自己新建一个，在里面写上如下，表示这些类型文件不需要git：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></li></li></ul></pre>
<p>注意，如果你之前克隆过theme中的主题文件，那么应该把主题文件中的<code>.git</code>文件夹删掉，因为git不能嵌套上传，最好是显示隐藏文件，检查一下有没有，否则上传的时候会出错，导致你的主题文件无法上传，这样你的配置在别的电脑上就用不了了。</p>
<p>而后</p>
<pre class="prettyprint"><code class="prism language-shell has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;"><span class="token function">git</span> add <span class="token keyword">.</span>
<span class="token function">git</span> commit –m <span class="token string">"add branch"</span>
<span class="token function">git</span> push 
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<p>这样就上传完了，可以去你的github上看一看hexo分支有没有上传上去，其中<code>node_modules</code>、<code>public</code>、<code>db.json</code>已经被忽略掉了，没有关系，不需要上传的，因为在别的电脑上需要重新输入命令安装 。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstk4k1j20yq0h9gmr.jpg" alt=""></p>
<p>这样就上传完了。</p>
<h3><a name="t29"></a><a id="_703"></a>更换电脑操作</h3>
<p>一样的，跟之前的环境搭建一样，</p>
<ul>
<li>安装git</li>
</ul>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">sudo apt-get install git
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<ul>
<li>设置git全局邮箱和用户名</li>
</ul>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">git config --global user.name "yourgithubname"
git config --global user.email "yourgithubemail"
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<ul>
<li>设置ssh key</li>
</ul>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">ssh-keygen -t rsa -C "youremail"
#生成后填到github和coding上（有coding平台的话）
#验证是否成功
ssh -T git@github.com
ssh -T git@git.coding.net #(有coding平台的话)
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></ul></pre>
<ul>
<li>安装nodejs</li>
</ul>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">sudo apt-get install nodejs
sudo apt-get install npm
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<ul>
<li>安装hexo</li>
</ul>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">sudo npm install hexo-cli -g
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>但是已经不需要初始化了，</p>
<p>直接在任意文件夹下，</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">git clone git@………………
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>然后进入克隆到的文件夹：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">cd xxx.github.io
npm install
npm install hexo-deployer-git --save
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<p>生成，部署：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo g
hexo d
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>然后就可以开始写你的新博客了</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo new newpage
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p><strong>Tips:</strong></p>
<ol>
<li>不要忘了，每次写完最好都把源文件上传一下</li>
</ol>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">git add .
git commit –m "xxxx"
git push 
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></ul></pre>
<ol start="2">
<li>如果是在已经编辑过的电脑上，已经有clone文件夹了，那么，每次只要和远端同步一下就行了</li>
</ol>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">git pull
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<hr>
<h1><a name="t30"></a><a id="4_coding_page_796"></a>4. coding page上部署实现国内外分流</h1>
<p>之前我们已经把hexo托管在github了，但是github是国外的，而且百度的爬虫是不能够爬取github的，所以如果你希望你做的博客能够在百度引擎上被收录，而且想要更快的访问，那么可以在国内的coding page做一个托管，这样在国内访问就是coding page，国外就走github page。</p>
<p><strong>1. 申请coding账户，新建项目</strong></p>
<p>先申请一个账户，然后创建新的项目，这一步项目名称应该是随意的。</p>
<p><strong>2.  添加ssh key</strong></p>
<p>这一步跟github一样。</p>
<p>添加后，检查一下是不是添加成功</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">ssh -T git@git.coding.net
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p><strong>3. 修改_config.yml</strong></p>
<p>hexo官方文档是这样的：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">deploy:
  type: git
  message: [message]
  repo:
    github: &lt;repository url&gt;,[branch]
    coding: &lt;repository url&gt;,[branch] 
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></li></ul></pre>
<p>那么，我们只需要：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">deploy:
  type: git
  repo: 
    coding: git@git.coding.net:ZJUFangzh/ZJUFangzh.git,master
    github: git@github.com:ZJUFangzh/ZJUFangzh.github.io.git,master
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></li></ul></pre>
<p><strong>4. 部署</strong></p>
<p>保存一下，直接</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">hexo g
hexo d
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>这样就可以在coding的项目上看到你部署的文件了。</p>
<p><strong>5. 开启coding pages服务，绑定域名</strong></p>
<p>如图：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstnswnj20xr0bugmj.jpg" alt=""></p>
<p><strong>6. 阿里云添加解析</strong></p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstjxu6j20o709bdg1.jpg" alt=""></p>
<p>这个时候就可以把之前github的解析改成境外，把coding的解析设为默认了。</p>
<p><strong>7. 去除coding page的跳转广告</strong></p>
<p>coding page的一个比较恶心人的地方就是，你只是银牌会员的话，访问会先跳转到一个广告，再到你自己的域名。那么它也给出了消除的办法。右上角切换到coding的旧版界面，默认新版是不行的。然后再来到<code>pages服务</code>这里。</p>
<p>这里：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstmpshj20j80cbmxq.jpg" alt=""></p>
<p>只要你在页面上添加一行文字，写<code>Hosted by Coding Pages</code>，然后点下面的小勾勾，两个工作日内它就会审核通过了。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">&lt;p&gt;Hosted by &lt;a href="https://pages.coding.me" style="font-weight: bold"&gt;Coding Pages&lt;/a&gt;&lt;/p&gt;
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>我的选择是把这一行代码放在主题文件夹<code>/layout/common/footer.ejs</code>里面，也就是本来在页面中看到的页脚部分。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstk1skj20lh0630su.jpg" alt=""></p>
<p>当然，为了统一，我又在后面加上了and <strong>Github</strong>哈哈，可以不加。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">&lt;p&gt;&lt;span&gt;Hosted by &lt;a href="https://pages.coding.me" style="font-weight: bold"&gt;Coding Pages&lt;/a&gt;&lt;/span&gt; and &lt;span&gt;&lt;a href="https://github.com" style="font-weight: bold"&gt;Github&lt;/a&gt;&lt;/span&gt;&lt;/p&gt;
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>这是最终加上去的代码。</p>
<hr>
<h1><a name="t31"></a><a id="_892"></a>第三部分</h1>
<p>hexo添加各种功能，包括搜索的SEO，阅读量统计，访问量统计和评论系统等。</p>
<p>本文参考了: <a href="http://visugar.com/2017/08/01/20170801HexoPlugins/" rel="nofollow" data-token="04bb7ff1bd5e918a6ff005ece25f43ec">visugar.com</a>这里面说的很详细了。</p>
<h1><a name="t32"></a><a id="1_SEO_900"></a>1. SEO优化</h1>
<p>推广是很麻烦的事情，怎么样别人才能知道我们呢，首先需要让搜索引擎收录你的这个网站，别人才能搜索的到。那么这就需要SEO优化了。</p>
<blockquote>
<p>SEO是由英文Search Engine Optimization缩写而来， 中文意译为“搜索引擎优化”。SEO是指通过站内优化比如网站结构调整、网站内容建设、网站代码优化等以及站外优化。</p>
</blockquote>
<h3><a name="t33"></a><a id="seo_908"></a>百度seo</h3>
<p>刚建站的时候是没有搜索引擎收录我们的网站的。可以在搜索引擎中输入<code>site:&lt;域名&gt;</code></p>
<p>来查看一下。</p>
<p><strong>1. 登录百度站长平台添加网站</strong></p>
<p>登录<a href="https://ziyuan.baidu.com/linksubmit/index?" rel="nofollow" data-token="d3a3e255150c5b678bf0fabaf10940e7">百度站长平台</a>，在站点管理中添加你自己的网站。</p>
<p>验证网站有三种方式：文件验证、HTML标签验证、CNAME验证。</p>
<p>第三种方式最简单，只要将它提供给你的那个xxxxx使用CNAME解析到xxx.baidu.com就可以了。也就是登录你的阿里云，把这个解析填进去就OK了。</p>
<p><strong>2. 提交链接</strong></p>
<p>我们需要使用npm自动生成网站的sitemap，然后将生成的sitemap提交到百度和其他搜索引擎</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">npm install hexo-generator-sitemap --save     
npm install hexo-generator-baidu-sitemap --save
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></ul></pre>
<p>这时候你需要在你的根目录下<code>_config.xml</code>中看看url有没有改成你自己的：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstpzd9j20ar03b749.jpg" alt=""></p>
<p>重新部署后，就可以在public文件夹下看到生成的sitemap.xml和baidusitemap.xml了。</p>
<p>然后就可以向百度提交你的站点地图了。</p>
<p>这里建议使用自动提交。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstwp4pj20fc0kyq4n.jpg" alt=""></p>
<p>自动提交又分为三种：主动推送、自动推送、sitemap。</p>
<p>可以三个一起提交不要紧，我选择的是后两种。</p>
<ul>
<li>自动推送：把百度生成的自动推送代码，放在主题文件<code>/layout/common/head.ejs</code>的适当位置，然后验证一下就可以了。</li>
<li>sitemap：把两个sitemap地址，提交上去，看到状态正常就OK了。</li>
</ul>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksu9fa6j20v60m4404.jpg" alt=""></p>
<p><strong>ps:</strong> 百度收录比较慢，慢慢等个十天半个月再去<code>site:&lt;域名&gt;</code>看看有没有被收录。</p>
<h3><a name="t34"></a><a id="googleSEO_962"></a>google的SEO</h3>
<p>流程一样，google更简单，而且收录更快，进入<a href="https://search.google.com/search-console/sitemaps?resource_id=http://fangzh.top/&amp;hl=zh-CN" rel="nofollow" data-token="aeecd3c3457815b3a71e3dbbe86ddef6">google站点地图</a>，提交网站和sitemap.xml，就可以了。</p>
<p>如果你这个域名在google这里出了问题，那你就提交 <a href="http://yourname.github.io" rel="nofollow" data-token="327364c036ff71ba8281eaf5c00de66d">yourname.github.io</a>，这个链接，效果是一样的。</p>
<p>不出意外的话一天内google就能收录你的网站了。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkswrucmj20q30lkq72.jpg" alt=""></p>
<p>其他的搜索，如搜狗搜索，360搜索，流程是一样的，这里就不再赘述。</p>
<h1><a name="t35"></a><a id="2__980"></a>2. 评论系统</h1>
<p>评论系统有很多，但是很多都是墙外的用不了，之前说过这个valine好像集成在hueman和next主题里面了，但是我还没有研究过，我看的是<a href="http://visugar.com/2017/08/01/20170801HexoPlugins/" rel="nofollow" data-token="04bb7ff1bd5e918a6ff005ece25f43ec">visugar</a>这个博主用的来比力评论系统，感觉也还不错。</p>
<p><a href="https://livere.com/" rel="nofollow" data-token="1b2d0c73266483a03b93d18e93f2e89f">来比力官网</a>，注册好后，点击管理页面，在<code>代码管理</code>中找到安装代码：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksu93vyj20tk0m440w.jpg" alt=""></p>
<p>获取安装代码后，在主题的comment下新建一个文件放入刚刚那段代码，再找到article文件，找到如下代码，若没有则直接在footer后面添加即可。livebe即为刚刚所创文件名称。</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">&lt;%- partial('comment/livebe') %&gt;
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>然后可以自己设置一些东西：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksufavtj20v70o9mzw.jpg" alt=""></p>
<p>还可以设置评论提醒，这样别人评论你的时候就可以及时知道了。</p>
<h1><a name="t36"></a><a id="3__1010"></a>3. 添加百度统计</h1>
<p>百度统计可以在后台上看到你网站的访问数，浏览量，浏览链接分布等很重要的信息。所以添加百度统计能更有效的让你掌握你的网站情况。</p>
<p><a href="https://tongji.baidu.com" rel="nofollow" data-token="34ac545e25167ce230e8369822aac405">百度统计</a>，注册一下，这里的账号好像和百度账号不是一起的。</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksvbdmwj20lf0kx78n.jpg" alt=""></p>
<p>照样把代码复制到<code>head.ejs</code>文件中，然后再进行一下安装检查，半小时左右就可以在百度统计里面看到自己的网站信息了。</p>
<h1><a name="t37"></a><a id="4_leanCloud_1026"></a>4. 文章阅读量统计leanCloud</h1>
<p><a href="https://leancloud.cn/" rel="nofollow" data-token="7f43b51103d0e74cad18e95b6e8d7194">leanCloud</a>，进去后注册一下，进入后创建一个应用：</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstp8rdj20h30cimxt.jpg" alt=""></p>
<p>在<code>存储</code>中创建Class，命名为Counter,</p>
<p><img src="http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstygbpj20gq0k0abm.jpg" alt=""></p>
<p>然后在设置页面看到你的<code>应用Key</code>，在主题的配置文件中：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">leancloud_visitors:
  enable: true
  app_id: 你的id
  app_key: 你的key
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></ul></pre>
<p>在<code>article.ejs</code>中适当的位置添加如下，这要看你让文章的阅读量统计显示在哪个地方了，</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">阅读数量:&lt;span id="&lt;%= url_for(post.path) %&gt;" class="leancloud_visitors" data-flag-title="&lt;%- post.title %&gt;"&gt;&lt;/span&gt;次
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></ul></pre>
<p>然后在<code>footer.ejs</code>的最后，添加：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">&lt;script src="//cdn1.lncld.net/static/js/2.5.0/av-min.js"&gt;&lt;/script&gt;
&lt;script&gt;
    var APP_ID = '你的app id';
    var APP_KEY = '你的app key';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    // 显示次数
    function showTime(Counter) {
        var query = new AV.Query("Counter");
        if($(".leancloud_visitors").length &gt; 0){
            var url = $(".leancloud_visitors").attr('id').trim();
            // where field
            query.equalTo("words", url);
            // count
            query.count().then(function (number) {
                // There are number instances of MyClass where words equals url.
                $(document.getElementById(url)).text(number?  number : '--');
            }, function (error) {
                // error is an instance of AVError.
            });
        }
    }
    // 追加pv
    function addCount(Counter) {
        var url = $(".leancloud_visitors").length &gt; 0 ? $(".leancloud_visitors").attr('id').trim() : 'icafebolger.com';
        var Counter = AV.Object.extend("Counter");
        var query = new Counter;
        query.save({
            words: url
        }).then(function (object) {
        })
    }
    $(function () {
        var Counter = AV.Object.extend("Counter");
        addCount(Counter);
        showTime(Counter);
    });
&lt;/script&gt;

<p>重新部署后就可以了。</p>
<h1><a name="t38"></a><a id="5__1110"></a>5. 引入不蒜子访问量和访问人次统计</h1>
<p>不蒜子的添加非常非常方便，<a href="http://busuanzi.ibruce.info/" rel="nofollow" data-token="6c76b066a8f5016935e2e6afd230afcb">不蒜子</a></p>
<p>在<code>footer.ejs</code>中的合适位置，看你要显示在哪个地方，添加：</p>
<pre class="prettyprint"><code class="has-numbering" onclick="mdcp.copyCode(event)" style="position: unset;">&lt;!--这一段是不蒜子的访问量统计代码--&gt;
&lt;script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"&gt;&lt;/script&gt;
&lt;span id="busuanzi_container_site_pv"&gt;本站总访问量&lt;span id="busuanzi_value_site_pv"&gt;&lt;/span&gt;次 &amp;nbsp;   &lt;/span&gt;
&lt;span id="busuanzi_container_site_uv"&gt;访客数&lt;span id="busuanzi_value_site_uv"&gt;&lt;/span&gt;人次&lt;/span&gt;
<div class="hljs-button {2}" data-title="复制"></div></code><ul class="pre-numbering" style=""></li></li></li></li></ul></pre>
<p>就可以了。</p>
<h1><a name="t39"></a><a id="_1127"></a>总结</h1>
<p>到这里就基本做完了。其实都是参考别的博主的设置的，不一定仅限于hueman主题，其他主题的设置也是大体相同的，所以如果你希望设置别的主题，那么仔细看一下这个主题的代码结构，也能够把上边的功能添加进去。</p>
<p>多看看别的博主的那些功能，如果有你能找到自己喜欢的功能，那么好好发动搜索技能，很快就能找到怎么做了。加油吧！</p>

                            