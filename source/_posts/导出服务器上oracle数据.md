---
title: 导出服务器上oracle数据
date: 2019-11-04 15:28:35
tags: oracle
categories: 工作学习
comments: true
cover: https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture
top_img: https://source.unsplash.com/collection/collectionid/1600x900
---
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" />
<!-- <script src="https://cdn.jsdelivr.net/gh/yujiajie01/live2d-widget@V11/autoloadx.js"></script> -->

## 导出服务器上oracle数据
```
sqlplus / as  sysdba

create user  test; identified by test;

grant connect,resource,dba to test;

exp test/test@XE file=d:\test.dmp full=y;
```

2 将数据库中system用户与sys用户的表导出

```
exp system/manager@TEST file=d:\daochu.dmp owner=(system,sys)
```


3 将数据库中的表table1 、table2导出

```
exp system/manager@TEST file=d:\daochu.dmp tables=(table1,table2)
```




导入 （本地环境cmd）

```
imp system/manager@TEST file=d:\daochu.dmp ignore=y
imp system/manager@TEST file=d:\daochu.dmp tables=(table1) ignore=y
```

