---
title: Github清除历史提交，保留最新提交
date: 2019-12-25 09:41:01
tags:
- IT
- git
- github
categories: 
- 工作学习
comments: true
cover: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-pic20191225094702.jpg
top_img: https://cdn.jsdelivr.net/gh/yujiajie01/imgHosting/yujiajie01-pic20191225094653.jpg
---


# Github清除历史提交，保留最新提交

## 有时候，需要启动一个新的分支，同时想摒弃历史信息，那么可以使用下面的方法来实现

```
#克隆git仓库
git clone [URL] 
#进入git仓库
cd [仓库名] 

#创建一个名为 new_branch 新的空分支(不包含历史的分支)
git checkout --orphan  new_branch

#添加所有文件到new_branch分支，对new_branch分支做一次提交
git add -A
git commit -am '提交信息' 

#删除master分支
git branch -D master 
#将当前所在的new_branch分支重命名为master
git branch -m master
#将更改强制推送到github仓库
git push origin master --force
```