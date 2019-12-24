---
title: SSM框架整合及搭建
date: 2019-11-04 15:31:23
tags: ssm
categories: 工作学习
comments: true
cover: /img/it.jpg
top_img: https://source.unsplash.com/collection/collectionid/1600x900
---
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" />
<!-- <script src="https://cdn.jsdelivr.net/gh/yujiajie01/live2d-widget@V11/autoloadx.js"></script> -->

SSM框架整合及搭建
1、SpringMVC
	处理视图层前端请求及控制层接收请求后响应给客户端
2、Mybatis
	数据访问层
	
3、Spring
	IOC/DI
		控制反转、依赖注入
		处理层与层之间的依赖关系，进行解耦
	AOP
		面向切面编程
		处理日志、异常、事务
	
1、SpringMVC与Spring不需要整合
2、Mybatis与Spring整合数据访问
	1、dataSource	数据源
	2、SqlSessionFactory	会话工厂
	3、SqlSession	会话
	
	
框架搭建
1、导入jar包
	SpringMVC的jar包
	Mybatis的jar包
	Spring的jar包
	Mybatis与Spring集成的jar包

2、创建项目的包、创建实体类
	
3、添加SpringMVC环境
	1、添加SpringMVC核心配置文件 dispatcher-servlet.xml
		1) 添加注解的驱动支持，注解所在包的扫描
			

```
<!-- 设置注解支持,扫描带有注解类的包 -->
			<context:component-scan base-package="controller,service.impl" />
			<mvc:annotation-driven />
```
		2) 添加视图解析器
			

```
<!-- 视图解析器 -->
		   <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver" >
				<!-- 属性名name,属性值value ,给class类的对象中的属性赋值 -->
				<property name="prefix" value="/WEB-INF/jsp/"></property>
				<property name="suffix" value=".jsp"></property>
		   </bean>
```
		3) 静态资源文件处理
			

```
<!-- 处理静态资源文件 -->
			<mvc:resources location="/resource/" mapping="/resource/**" />
		
```

2、配置web.xml
		1) 配置SpringMVC核心控制器及加载核心配置文件				
			

```
<!-- 配置SpringMVC核心控制器 -->
			<servlet>
				<servlet-name>dispatcherServlet</servlet-name>
				<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
				<init-param>
					<param-name>contextConfigLocation</param-name>
					<param-value>classpath:dispatcher-servlet.xml</param-value>
				</init-param>
			</servlet>
			<servlet-mapping>
				<servlet-name>dispatcherServlet</servlet-name>
				<url-pattern>/</url-pattern>
			</servlet-mapping>	
```
	
3、创建Controller控制器
		1) 添加注解映射请求URL
	
4、创建JSP页面
	
	
4、Spring集成Mybatis
	1) 添加Mybatis环境
		添加配置文件mybatis-config.xml，配置文件中不再配置environments，其余的配置保留
		
2) 添加Spring配置文件applicationContext.xml
		将原有使用MyBatis进行数据访问的对象全部配置到Spring文件中
1) 数据源 - 第三方提供
			

```
<!-- dataSource 数据源-第三方 -->
			<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource" >
				<property name="driverClassName" value="com.mysql.jdbc.Driver" />
				<property name="url" value="jdbc:mysql://localhost:3306/house?useUnicode=true&amp;characterEncoding=utf-8" />
				<property name="username" value="root" />
				<property name="password" value="123456"/>
			</bean>
```

2) 会话工厂
			

```
<!-- sessionFactory 会话工厂集成 -->
			<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean" >
				<!-- 注入数据源dataSource -->
				<property name="dataSource" ref="dataSource" />
				<!-- 注入Mybatis配置文件的路径 -->
				<property name="configLocation" value="classpath:mybatis-config.xml" />
			</bean>
```

 3) 会话
		

```
	<!-- SqlSessionTemplate - Spring提供的会话模板 -->
			<bean id="sqlSessionTemplate" class="org.mybatis.spring.SqlSessionTemplate" >
				<!-- 只提供了 构造方法注入 -->
				<constructor-arg name="sqlSessionFactory" ref="sqlSessionFactory" />
			</bean>
			
```
	
5、衔接控制层与service层	
	1) 在控制层和service层的实现类 加上注解
		1) controller层类的注解
			

```
@Controller
			@RequestMapping(value="/user")
			public class LoginController
```
2) service层类的注解
			

```
@Service("userService")
			public class UserServiceImpl implements UserService
```
3) 在controller层类中定义service接口作为其属性并通过注解注入该接口的实现类的实例
			

```
@Resource
			@Qualifier("userService")
			private UserService userService;
```
			
2) 配置注解支持及扫描注解所在的包
	1) dispatcher-servlet.xml配置文件中添加如下配置
			

```
<!-- 设置注解支持,扫描带有注解类的包 -->
			<context:component-scan base-package="controller,service.impl" />
			<mvc:annotation-driven />
```
			

6、衔接service层与dao层
	service需要的是使用Spring容器中提供的sqlSessionTemplate会话模板, 所以service注入的是该会话模板对象
	由于sqlSessionTemplate已经在Spring的配置文件applicationContext.xml中定义了bean, 所以可以直接注入
	
1 在service类中定义属性sqlSessionTemplate 
	
		

```
private SqlSessionTemplate sqlSessionTemplate; 
```
		
2) 使用注解实现注入 
	
		@Resource
		@Qualifier("sqlSessionTemplate")
		private SqlSessionTemplate sqlSessionTemplate;
	
	
7、web.xml中加载Spring配置文件applicationContext.xml
	由于sqlSessionTemplate在applicationContext.xml中定义的bean，当tomcat容器启动时就要完成controller注入service，
	service注入sqlSessionTemplate, 所以需要在web.xml中配置监听器加载applicationContext.xml配置文件, 这样tomcat容器在
	启动时会加载 dispatcher-servlet.xml 和 applicationCOntext.xml配置文件, 那么在客户端发起请求之前，这些注入全部都会
	提前完成。
	
	<!-- Spring监听器 -->
	<context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>classpath:applicationContext.xml</param-value>
	</context-param>
	<listener>
		<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>
	
	
	