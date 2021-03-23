---
title: "react组件"
date: "2021-03-22 17:26:44"
tags:
  - IT
  - react
categories:
  - react
comments: true
cover: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/react-c.jpeg
top_img: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/react-t.jpg
top: true
---

<div class="article-body">
		
<div class="article-intro" id="content">
			
<h1>React 组件</h1>
<p>本章节我们将讨论如何使用组件使得我们的应用更容易来管理。</p>
<p>接下来我们封装一个输出 "Hello World！" 的组件，组件名为 HelloMessage：</p>
<div class="example">
<h2 class="example">React 实例</h2>

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>菜鸟教程 React 实例</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>

<div id="example"></div>
<script type="text/babel">
function HelloMessage(props) {
	return <h1>Hello World!</h1>;
}

const element = <HelloMessage />;

ReactDOM.render(
	element,
	document.getElementById('example')
);
</script>

</body>
</html>
```

<br> <a class="tryitbtn" href="/try/try.php?filename=try_react_component" target="_blank">尝试一下 »</a>

</div>
<h3>实例解析：</h3>
<p>1、我们可以使用函数定义了一个组件：</p>
```
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
```
<p>你也可以使用 ES6 class 来定义一个组件:</p>
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```
<p>2、<b>const element = &lt;HelloMessage /&gt;</b> 为用户自定义的组件。</p>
<blockquote><p>
注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。</p></blockquote>
<p>如果我们需要向组件传递参数，可以使用 <b>this.props</b>  对象,实例如下：</p>
<div class="example">
<h2 class="example">React 实例</h2>
```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>菜鸟教程 React 实例</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>

<div id="example"></div>
<script type="text/babel">
function HelloMessage(props) {
	return <h1>Hello {props.name}!</h1>;
}

const element = <HelloMessage name="Runoob"/>;

ReactDOM.render(
element,
document.getElementById('example')
);
</script>

</body>
</html>

```
<br> <a class="tryitbtn" href="/try/try.php?filename=try_react_component2" target="_blank">尝试一下 »</a>
</div>
<p>以上实例中 <b>name</b> 属性通过 <span class="marked">props.name</span> 来获取。</p>
<blockquote><p>
注意，在添加属性时，
class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。</p></blockquote>

<hr>
<h2>复合组件</h2>
<p>我们可以通过创建多个组件来合成一个组件，即把组件的不同功能点进行分离。</p>
<p>以下实例我们实现了输出网站名字和网址的组件：</p>
<div class="example">
<h2 class="example">React 实例</h2>
```

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>菜鸟教程 React 实例</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>

<div id="example"></div>
<script type="text/babel">
function Name(props) {
	return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
	return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
	return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
	return (
	<div>
		<Name name="菜鸟教程" />
		<Url url="http://www.runoob.com" />
		<Nickname nickname="Runoob" />
	</div>
	);
}

ReactDOM.render(
<App />,
document.getElementById('example')
);
</script>

</body>
</html>
```
<br> <a class="tryitbtn" href="/try/try.php?filename=try_react_component3" target="_blank">尝试一下 »</a> 
</div>
<p>实例中 App 组件使用了 Name、Url 和 Nickname 组件来输出对应的信息。</p>			<!-- 其他扩展 -->
						
</div>
			
</div>
