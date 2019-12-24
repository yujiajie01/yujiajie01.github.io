---
title: ajax实现区域-街道多级联动
date: 2019-11-04 15:30:46
tags: ajax
categories: 工作学习
comments: true
cover: /img/ajax.jpg
top_img: https://source.unsplash.com/collection/collectionid/1600x900

---
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" />
<!-- <script src="https://cdn.jsdelivr.net/gh/yujiajie01/live2d-widget@V11/autoloadx.js"></script> -->

前端代码示例：

	$(document).ready(function(){
		$("#districtId").change(function(){
			//清空下拉框街道的选项
			$("#streetId option:gt(0)").remove();
			//获取要发送的数据
			var districtIdVal = $("#districtId").val();
			//如果没有选择区不进行ajax请求
			if(null == districtIdVal || "" ==  districtIdVal){
				return;
			}
			
			//发送ajax请求
			$.ajax({
				"url":"<%=path%>/house/getStreetByAjax",	//请求的地址				
				"type":"POST",	//发送请求的方式
				"data":{"districtId":districtIdVal},		//发送的数据
				"dataType":"json",		//定义服务端返回的数据格式
				"success":function(data){	//响应成功的回调函数
					 for(var i=0; i<data.length; i++){
						var street = data[i];
						//创建option元素节点
						var $option = $("<option value='"+street.id+"'>"+street.name+"</option>");
						//将新节点添加到select标签下
						$("#streetId").append($option);
					 }
				},
				"error":function(error){		//响应失败的回调函数
					alert("请求失败:" + error.status );
				}
			});
			
		})
	})

后台代码示例：
	
	/*@responseBody注解的作用是将controller的方法返回的对象通过适当的转换器转换为指定的格式之后，写入到response对象的body区，通常用来返回JSON数据或者是XML
	　　数据，需要注意的呢，在使用此注解之后不会再走试图处理器，而是直接将数据写入到输入流中，他的效果等同于通过response对象输出指定格式的数据。*/
	@ResponseBody
	@RequestMapping(value="/getStreetByAjax")
	public List<TStreet> getStreetByAjax(Long districtId){
		System.out.println("id = " + districtId);
		List<TStreet> streets = districtService.getStreetByDistrictId(districtId);
		
		return streets;
	}

代码解析：
	
1、首先在区域(district)下拉列表绑定一个方法：当选项被改变时，执行以下步骤：
		1) 清空下拉框街道的选项(除了第一行)
		2) 获取用户选择的区域项的value值(就是了解用户选了哪个城区，好在后台查出这个市区对应的街道)
		3) 发送ajax请求(其实就是发送请求，和页面跳转、表单提交一个道理，只不过发出请求的不是整个页面，而是下拉框的个人行为，你可以这样理解)
		PS: $.ajax方法的参数，也就是括号里面的语句是json格式，写法是固定的，就是一行行键值对，键名是固定的属性，值的意思注释写了

2、前端代码的ajax请求被发送到后台，请求地址：http://localhost:8080/u3-springmvc-t66/house/getStreetByAjax
		并且request中有一个json类型的参数————用户选择的市区的value值，根据请求地址执行后台HouseController中的getStreetByAjax方法
		1) 通过入参的方式拿到request中的市区id
		2) 调用service层的districtService的方法，根据id从数据库拿到该市区的所有街道的list集合(由于我们还没有service层，这里只是模拟实现一下)
		3) 把这个list以json形式返回(由注解：@ResponseBody自动实现)

3、最后这个后台响应返回前端页面，则响应成功，继续执行"success":中的回调函数
		1) 将json形式的后台返回的街道的list遍历
		2) 拿出每一个街道实体，每一个实体建立一个option标签
		3) 把这些标签一个个补到下拉框下面
		PS: 由于这些操作都只是下拉框的个人行为，当用户选择一个市区选项时，看到的页面本身没有变化，但实际上脚本已经把街道选项框重新组装