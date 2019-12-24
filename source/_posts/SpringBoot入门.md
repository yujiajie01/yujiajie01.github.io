---
title: Spring Boot【快速入门】
date: 2019-11-07 11:45:16
tags: SpringBoot
categories: 工作学习
comments: true
cover: /img/springboot.png
top_img: https://source.unsplash.com/collection/collectionid/1600x900
---

<!-- <div id="music163player">
    <iframe allow="autoplay" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=1&id=2838069802&auto=1&height=430"></iframe>
</div> -->



<div id="topics">
        <div class="post">
            <h1 class="postTitle">
                
<a id="cb_post_title_url" class="postTitle2" >Spring Boot【快速入门】</a>

<p><img src="/img/springboot.png"></p>
<h2 id="spring-boot-概述">Spring Boot 概述</h2>
<blockquote>
<p><strong>Build Anything with Spring Boot：</strong>Spring Boot is the starting point for building all Spring-based applications. Spring Boot is designed to get you up and running as quickly as possible, with minimal upfront configuration of Spring.</p>
</blockquote>
<p>上面是引自官网的一段话，大概是说： Spring Boot 是所有基于 Spring 开发的项目的起点。Spring Boot 的设计是为了让你尽可能快的跑起来 Spring 应用程序并且尽可能减少你的配置文件。</p>
<h4 id="什么是-spring-boot">什么是 Spring Boot</h4>
<ul>
<li>它使用 “习惯优于配置” （项目中存在大量的配置，此外还内置一个习惯性的配置，让你无须）的理念让你的项目快速运行起来。</li>
<li>它并不是什么新的框架，而是默认配置了很多框架的使用方式，就像 Maven 整合了所有的 jar 包一样，Spring Boot 整合了所有框架（引自：<a href="http://www.ityouknow.com/springboot/2016/01/06/springboot(%E4%B8%80)-%E5%85%A5%E9%97%A8%E7%AF%87.html">springboot(一)：入门篇——纯洁的微笑</a>）</li>
</ul>
<h4 id="使用-spring-boot-有什么好处">使用 Spring Boot 有什么好处</h4>
<p>回顾我们之前的 SSM 项目，搭建过程还是比较繁琐的，需要：</p>
<ul>
<li>1）配置 web.xml，加载 spring 和 spring mvc</li>
<li>2）配置数据库连接、配置日志文件</li>
<li>3）配置家在配置文件的读取，开启注解</li>
<li>4）配置mapper文件</li>
<li><strong>.....</strong></li>
</ul>
<p>而使用 Spring Boot 来开发项目则只需要非常少的几个配置就可以搭建起来一个 Web 项目，并且利用 IDEA 可以自动生成生成，这简直是太爽了...</p>
<ul>
<li>划重点：简单、快速、方便地搭建项目；对主流开发框架的无配置集成；极大提高了开发、部署效率。</li>
</ul>
<hr>
<h2 id="spring-boot-快速搭建">Spring Boot 快速搭建</h2>
<h4 id="第一步新建项目">第一步：新建项目</h4>
<p>选择 Spring Initializr ，然后选择默认的 url 点击【Next】：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-3e2c9c5742c10c86.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>然后修改一下项目的信息：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-28dbe478ff25a3a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>勾选上 Web 模板：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-532868b7e6760e03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>选择好项目的位置，点击【Finish】：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-931cc2fb5c8964e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>如果是第一次配置 Spring Boot 的话可能需要等待一会儿 IDEA 下载相应的 依赖包，默认创建好的项目结构如下：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-9ac7acc56d5a32f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>项目结构还是看上去挺清爽的，少了很多配置文件，我们来了解一下默认生成的有什么：</p>
<ul>
<li>SpringbootApplication： 一个带有 main() 方法的类，用于启动应用程序</li>
<li>SpringbootApplicationTests：一个空的 Junit 测试了，它加载了一个使用 Spring Boot 字典配置功能的 Spring 应用程序上下文</li>
<li>application.properties：一个空的 properties 文件，可以根据需要添加配置属性</li>
<li>pom.xml： Maven 构建说明文件</li>
</ul>
<h4 id="第二步hellocontroller">第二步：HelloController</h4>
<p>在【cn.wmyskxz.springboot】包下新建一个【HelloController】：</p>
```
package cn.wmyskxz.springboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试控制器
 *
 * @author: @niko
 * @create: 2018-05-08-下午 16:46
 */
@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello() {
        return "Hello Spring Boot!";
    }
}
```
<ul>
<li><strong>@RestController 注解：</strong> 该注解是 @Controller 和 @ResponseBody 注解的合体版</li>
</ul>
<h4 id="第三步利用-idea-启动-spring-boot">第三步：利用 IDEA 启动 Spring Boot</h4>
<p>我们回到 SpringbootApplication 这个类中，然后右键点击运行：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-bf1aa6ed5c0db7b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<ul>
<li><strong>注意</strong>：我们之所以在上面的项目中没有手动的去配置 Tomcat 服务器，是因为 Spring Boot 内置了 Tomcat</li>
</ul>
<p>等待一会儿就会看到下方的成功运行的提示信息：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-63e43dc6a277de3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>可以看到我们的 Tomcat 运行在 8080 端口，我们来访问 “<code>/hello</code>” 地址试一下：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-6111e1913c5bf6d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>可以看到页面成功显示出我们返回的信息。</p>
<hr>
<h2 id="解析-spring-boot-项目">解析 Spring Boot 项目</h2>
<blockquote>
<p>这一部分参考自：<a href="http://tengj.top/2017/02/26/springboot1/">Spring Boot干货系列（一）优雅的入门篇 ——嘟嘟独立博客</a></p>
</blockquote>
<h4 id="解析-pom.xml-文件">解析 pom.xml 文件</h4>
<p>让我们来看看默认生成的 pom.xml 文件中到底有一些什么特别：</p>
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>cn.wmyskxz</groupId>
    <artifactId>springboot</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>springboot</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.1.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```
<p>我们可以看到一个比较陌生一些的标签 <code>&lt;parent&gt;</code> ，这个标签是在配置 Spring Boot 的父级依赖：</p>
```
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.1.RELEASE</version>
    <relativePath/> <!-- lookup parent from repository -->
</parent>

```
<p>有了这个，当前的项目才是 Spring Boot 项目，spring-boot-starter-parent 是一个特殊的 starter ，它用来提供相关的 Maven 默认依赖，<strong>使用它之后，常用的包依赖就可以省去 version 标签。</strong></p>
<p>关于具体 Spring Boot 提供了哪些 jar 包的依赖，我们可以查看本地 Maven 仓库下：\repository\org\springframework\boot\spring-boot-dependencies\2.0.1.RELEASE\spring-boot-dependencies-2.0.1.RELEASE.pom 文件来查看，挺长的...</p>
<h4 id="应用入口类">应用入口类</h4>
<p>Spring Boot 项目通常有一个名为 *Application 的入口类，入口类里有一个 main 方法， <strong>这个 main 方法其实就是一个标准的 Javay 应用的入口方法。</strong></p>
<p><strong>@SpringBootApplication</strong> 是 Spring Boot 的核心注解，它是一个组合注解，该注解组合了：<strong>@Configuration、@EnableAutoConfiguration、@ComponentScan；</strong> 若不是用 @SpringBootApplication 注解也可以使用这三个注解代替。</p>
<ul>
<li>其中，<strong>@EnableAutoConfiguration 让 Spring Boot 根据类路径中的 jar 包依赖为当前项目进行自动配置</strong>，例如，添加了 spring-boot-starter-web 依赖，会自动添加 Tomcat 和 Spring MVC 的依赖，那么 Spring Boot 会对 Tomcat 和 Spring MVC 进行自动配置。</li>
<li><strong>Spring Boot 还会自动扫描 @SpringBootApplication 所在类的同级包以及下级包里的 Bean</strong> ，所以入口类建议就配置在 grounpID + arctifactID 组合的包名下（这里为 cn.wmyskxz.springboot 包）</li>
</ul>
<h4 id="spring-boot-的配置文件">Spring Boot 的配置文件</h4>
<p>Spring Boot 使用一个全局的配置文件 application.properties 或 application.yml，放置在【src/main/resources】目录或者类路径的 /config 下。</p>
<p>Spring Boot 不仅支持常规的 properties 配置文件，还支持 yaml 语言的配置文件。yaml 是以数据为中心的语言，在配置数据的时候具有面向对象的特征。</p>
<p>Spring Boot 的全局配置文件的作用是对一些默认配置的配置值进行修改。</p>
<blockquote>
<ul>
<li>简单实例一下</li>
</ul>
</blockquote>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-bcd65f7469b06608.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>我们同样的将 Tomcat 默认端口设置为 8080 ，并将默认的访问路径从 “<code>/</code>” 修改为 “<code>/hello</code>” 时，使用 properties 文件和 yml 文件的区别如上图。</p>
<ul>
<li>注意： yml 需要在 “<code>:</code>” 后加一个空格，幸好 IDEA 很好地支持了 yml 文件的格式有良好的代码提示；</li>
</ul>
<blockquote>
<ul>
<li>我们可以自己配置多个属性</li>
</ul>
</blockquote>
<p>我们直接把 .properties 后缀的文件删掉，使用 .yml 文件来进行简单的配置，然后使用 @Value 来获取配置属性：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-0e808a82254d6a4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>重启 Spring Boot ，输入地址：localhost:8080/hello 能看到正确的结果：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-c85216e8ea7910f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<ul>
<li><strong>注意：</strong> 我们并没有在 yml 文件中注明属性的类型，而是在使用的时候定义的。</li>
</ul>
<p>你也可以在配置文件中使用当前配置：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-37e91abbc4550982.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>仍然可以得到正确的结果：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-eabc3cd39b44fd0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<ul>
<li><strong>问题：</strong> 这样写配置文件繁琐而且可能会造成类的臃肿，因为有许许多多的 @Value 注解。</li>
</ul>
<blockquote>
<ul>
<li>封装配置信息</li>
</ul>
</blockquote>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-2599817d8f2f50d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<p>我们可以把配置信息封装成一个类，首先在我们的 name 和 age 前加一个 student 前缀，然后新建一个 StudentProperties 的类用来封装这些信息，并用上两个注解：</p>
<ul>
<li>@Component：表明当前类是一个 Java Bean</li>
<li>@ConfigurationProperties(prefix = "student")：表示获取前缀为 sutdent 的配置信息</li>
</ul>
<p>这样我们就可以在控制器中使用，重启得到正确信息：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-84dc1215d01f3fa9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<h4 id="spring-boot-热部署">Spring Boot 热部署</h4>
<p>在目前的 Spring Boot 项目中，当发生了任何修改之后我们都需要重新启动才能够正确的得到效果，这样会略显麻烦，Spring Boot 提供了热部署的方式，当发现任何类发生了改变，就会通过 JVM 类加载的方式，加载最新的类到虚拟机中，这样就不需要重新启动也能看到修改后的效果了。</p>
<blockquote>
<ul>
<li>做法也很简单，修改 pom.xml 即可！</li>
</ul>
</blockquote>
<p>我们往 pom.xml 中添加一个依赖就可以了：</p>
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional> <!-- 这个需要为 true 热部署才有效 -->
</dependency>
```
<p>重新启动 Spring Boot ，然后修改任意代码，就能观察到控制台的自动重启现象：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-cec869956c3cf158.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<blockquote>
<p>关于如何在 IDEA 中配置热部署：<a href="https://blog.csdn.net/xusheng_Mr/article/details/78771746">传送门</a></p>
</blockquote>
<hr>
<h2 id="spring-boot-使用">Spring Boot 使用</h2>
<p>上面已经完成了 Spring Boot 项目的简单搭建，我们仅仅需要进行一些简单的设置，写一个 HelloController 就能够直接运行了，不要太简单...接下来我们再深入了解一下 Spring Boot 的使用。</p>
<h4 id="spring-boot-支持-jsp">Spring Boot 支持 JSP</h4>
<p>Spring Boot 的默认视图支持是 Thymeleaf 模板引擎，但是这个我们不熟悉啊，我们还是想要使用 JSP 怎么办呢？</p>
<blockquote>
<ul>
<li>第一步：修改 pom.xml 增加对 JSP 文件的支持</li>
</ul>
</blockquote>
```
<!-- servlet依赖. -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
</dependency>

<!– tomcat的支持.–>
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>
```
<blockquote>
<ul>
<li>第二步：配置试图重定向 JSP 文件的位置</li>
</ul>
</blockquote>
<p>修改 application.yml 文件，将我们的 JSP 文件重定向到 /WEB-INF/views/ 目录下：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-7c17f7e10cfb2629.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<blockquote>
<ul>
<li>第三步：修改 HelloController</li>
</ul>
</blockquote>
<p>修改 @RestController 注解为 @Controller ，然后将 hello 方法修改为：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-2dc2c39cd962edc1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<blockquote>
<ul>
<li>第四步：新建 hello.jsp 文件</li>
</ul>
</blockquote>
<p>在【src/main】目录下依次创建 webapp、WEB-INF、views 目录，并创建一个 hello.jsp 文件：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-a180556d7ead9605.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<blockquote>
<ul>
<li>第五步：刷新网页</li>
</ul>
</blockquote>
<p>因为我们部署了热部署功能，所以只需要等待控制台重启信息完成之后再刷新网页就可以看到正确效果了：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-cfd20f747ffca978.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<ul>
<li>关于 404，使用 spring-boot:run 运行项目可以解决：</li>
</ul>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-27c1bf46487ba5eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<h4 id="集成-mybatis">集成 MyBatis</h4>
<blockquote>
<ul>
<li>第一步：修改 pom.xml 增加对 MySql和 MyBatis 的支持</li>
</ul>
</blockquote>
```
<!-- mybatis -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>1.1.1</version>
</dependency>
<!-- mysql -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.21</version>
</dependency>
```
<blockquote>
<ul>
<li>第二步：新增数据库链接参数</li>
</ul>
</blockquote>
<p>这里我们就直接使用之前创建好的 student 表了吧：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-1eda563cfdfbae65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<blockquote>
<ul>
<li>第三步：创建 Student 实体类和 StudentMapper 映射类</li>
</ul>
</blockquote>
<p>在【cn.wmyskxz.springboot】下新建一个【pojo】包，然后在其下创建一个 Student 类：</p>
```
public class Student {

<span class="hljs-keyword">private</span> Integer id;
<span class="hljs-keyword">private</span> Integer student_id;
<span class="hljs-keyword">private</span> <span class="hljs-built_in">String</span> name;
<span class="hljs-keyword">private</span> Integer age;
<span class="hljs-keyword">private</span> <span class="hljs-built_in">String</span> sex;
<span class="hljs-keyword">private</span> <span class="hljs-built_in">Date</span> birthday;

/* getter <span class="hljs-keyword">and</span> setter */
}
```
<p>在【cn.wmyskxz.springboot】下新建一个【mapper】包，然后在其下创建一个 StudentMapper 映射类：</p>
```
package cn.wmyskxz.springboot.mapper;

import cn.wmyskxz.springboot.pojo.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


import java.util.List;


@Mapper
public interface StudentMapper {


<span class="hljs-meta">@Select</span>(<span class="hljs-string">"SELECT * FROM student"</span>)
<span class="hljs-function">List&lt;Student&gt; <span class="hljs-title">findAll</span><span class="hljs-params">()</span></span>;
}
```
<blockquote>
<ul>
<li>第四步：编写 StudentController</li>
</ul>
</blockquote>
<p>在【cn.wmyskxz.springboot】下新建一个【controller】包，然后在其下创建一个 StudentController ：</p>
```
package cn.wmyskxz.springboot.controller;

import cn.wmyskxz.springboot.mapper.StudentMapper;
import cn.wmyskxz.springboot.pojo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.List;


/**



Student 控制器




@author: @我没有三颗心脏



@create: 2018-05-08-下午 20:25



/
@Controller
public class StudentController {


  @Autowired
  StudentMapper studentMapper;


  @RequestMapping(“/listStudent”)
  public String listStudent(Model model) {


<span class="hljs-type">List</span>&lt;<span class="hljs-type">Student</span>&gt; students = studentMapper.findAll();
model.addAttribute(<span class="hljs-string">"students"</span>, students);
<span class="hljs-keyword">return</span> <span class="hljs-string">"listStudent"</span>;
  }
}
```
<blockquote>
<p>第五步：编写 listStudent.jsp 文件</p>
</blockquote>
<p>我们简化一下 JSP 的文件，仅显示两个字段的数据：</p>
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>



<%@ taglib uri=“http://java.sun.com/jsp/jstl/core" prefix=“c”%>


<table align=‘center’ border=‘1’ cellspacing=‘0’>
    <tr>
        <td>id</td>
        <td>name</td>
    </tr>
    <c:forEach items=“${students}” var=“s” varStatus=“st”>
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
        </tr>
    </c:forEach>
</table>
```
<blockquote>
<ul>
<li>第六步：重启服务器运行</li>
</ul>
</blockquote>
<p>因为往 pom.xml 中新增加了依赖的包，所以自动重启服务器没有作用，我们需要手动重启一次，然后在地址输入：localhost:8080/listStudent 查看效果：</p>
<p><img src="https://images.weserv.nl/?url=upload-images.jianshu.io/upload_images/7896890-5fd3c075d07b5840.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></p>
<blockquote>
<p>以上。</p>
</blockquote>
<hr>
</div>
        </div>
	    
	    
    