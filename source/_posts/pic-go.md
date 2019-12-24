---
title: Github+jsDelivr+PicGo 打造稳定快速、高效免费图床
date: 2019-12-23 11:31:32
tags:
- jsDelivr
- 图床
- PicGo
categories: 
- 工作学习
comments: true
cover: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-picjsDeliver.jpg
top_img: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-picPicGo.jpg
---
<meta name="referrer" content="no-referrer" /><!--页面头部添加-->

# Github+jsDelivr+PicGo 打造稳定快速、高效免费图床

<section class="article typo">
        <div class="article-entry" itemprop="articleBody">
          <fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/ImgHosting.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/ImgHosting.png" alt="ImgHosting"></a><br></fancybox>

<hr>
<h1 id="–-前言"><a href="#–-前言" class="headerlink" title="– 前言"></a><font color="#FF000">– 前言</font></h1><p>图床是个啥东西就不用过多介绍了，先来对比一下各路图床：</p>
<blockquote>
<ul>
<li>微博图床：以前用的人比较多，从2019年4月开始开启了防盗链，凉凉</li>
<li>SM.MS：运营四年多了，也变得越来越慢了，到了晚上直接打不开图片，速度堪忧</li>
<li>其他小众图床：随时有挂掉的风险</li>
<li>Imgur等国外图床：国内访问速度太慢，随时有被墙的风险</li>
<li>大厂储存服务：例如七牛云、又拍云、腾讯云COS、阿里云OSS等，容量限制，操作繁琐，又是实名认证又是域名备案的，麻烦，而且还要花钱（有钱又不怕麻烦的当我没说）</li>
</ul>
</blockquote>
<p>因此，GitHub 图床是个不错的选择，利用 jsDelivr CDN 加速访问（jsDelivr 是一个免费开源的 CDN 解决方案），PicGo 工具一键上传，操作简单高效，GitHub 和 jsDelivr 都是大厂，不用担心跑路问题，不用担心速度和容量问题，而且完全免费，可以说是目前免费图床的最佳解决方案！</p>
<hr>
<h1 id="–-新建GitHub仓库"><a href="#–-新建GitHub仓库" class="headerlink" title="– 新建GitHub仓库"></a><font color="#FF000">– 新建GitHub仓库</font></h1><p>登录/注册GitHub，新建一个仓库，填写好仓库名，仓库描述，根据需求选择是否为仓库初始化一个README.md描述文件</p>
<fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/01.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/01.png" alt="01"></a><br></fancybox><br><fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/02.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/02.png" alt="02"></a><br></fancybox>

<hr>
<h1 id="–-生成一个Token"><a href="#–-生成一个Token" class="headerlink" title="– 生成一个Token"></a><font color="#FF000">– 生成一个Token</font></h1><p>在主页依次选择【Settings】-【Developer settings】-【Personal access tokens】-【Generate new token】，填写好描述，勾选【repo】，然后点击【Generate token】生成一个Token，注意这个Token只会显示一次，自己先保存下来，或者等后面配置好PicGo后再关闭此网页</p>
<fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/03.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/03.png" alt="03"></a><br></fancybox><br><fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/04.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/04.png" alt="04"></a><br></fancybox><br><fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/05.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/05.png" alt="05"></a><br></fancybox><br><fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/06.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/06.png" alt="06"></a><br></fancybox><br><fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/07.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/07.png" alt="07"></a><br></fancybox>

<h1 id="–-配置PicGo"><a href="#–-配置PicGo" class="headerlink" title="– 配置PicGo"></a><font color="#FF000">– 配置PicGo</font></h1><p>前往<a href="https://github.com/Molunerfinn/picgo/releases" target="_blank" rel="noopener">下载PicGo</a>，安装好后开始配置图床</p>
<fancybox><br><a data-fancybox="gallery" href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/08.png"><img src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/08.png" alt="08"></a><br></fancybox>

<ul>
<li><p><font color="#FF000">设定仓库名：</font>按照【用户名/图床仓库名】的格式填写</p>
</li>
<li><p><font color="#FF000">设定分支名：</font>【master】</p>
</li>
<li><p><font color="#FF000">设定Token：</font>粘贴之前生成的【Token】</p>
</li>
<li><p><font color="#FF000">指定存储路径：</font>填写想要储存的路径，如【ITRHX-PIC/】，这样就会在仓库下创建一个名为 ITRHX-PIC 的文件夹，图片将会储存在此文件夹中</p>
</li>
<li><p><font color="#FF000">设定自定义域名：</font>它的作用是，在图片上传后，PicGo 会按照【自定义域名+储存路径+上传的图片名】的方式生成访问链接，并放到粘贴板上，因为我们要使用 jsDelivr 加速访问，所以可以设置为【<a href="https://cdn.jsdelivr.net/gh/用户名/图床仓库名" target="_blank" rel="noopener">https://cdn.jsdelivr.net/gh/用户名/图床仓库名</a> 】，上传完毕后，我们就可以通过【<a href="https://cdn.jsdelivr.net/gh/用户名/图床仓库名/图片路径" target="_blank" rel="noopener">https://cdn.jsdelivr.net/gh/用户名/图床仓库名/图片路径</a> 】加速访问我们的图片了，比如上图的图片链接为：<a href="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/08.png" target="_blank" rel="noopener">https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/A27/08.png</a></p>
</li>
</ul>
<p>关于 jsDelivr 具体是如何引用资源的可以参考我的另一篇博客：<a href="https://www.itrhx.com/2019/02/10/A18-free-cdn/">《免费CDN：jsDelivr+Github》</a></p>
<hr>
<h1 id="–-进行高效创作"><a href="#–-进行高效创作" class="headerlink" title="– 进行高效创作"></a><font color="#FF000">– 进行高效创作</font></h1><p>配置好PicGo后，我们就可以进行高效创作了，将图片拖拽到上传区，将会自动上传并复制访问链接，将链接粘贴到博文中就行了，访问速度杠杠的，此外PicGo还有相册功能，可以对已上传的图片进行删除，修改链接等快捷操作，PicGo还可以生成不同格式的链接、支持批量上传、快捷键上传、自定义链接格式、上传前重命名等，更多功能自己去探索吧！</p>

     
        
          


  