---
title: 【Flutter】环境篇 - Bug处理
date: 2020-10-25
categories:
 - Flutter
tags:
 - Install
---

:::tip
记录在搭建Flutter环境中各种报错的处理方法
:::

<!-- more -->

> 异常处理：你可能会因为网络原因无法下载`Flutter`编译包而出现错误

##### **1. 因网络原因无法下载`Flutter`编译包而出现错误**
> ​	1. 找到项目中`Android目录下build.gradle文件`，把`google() 和 jcenter()`替换为下面内容
>
> ```kotlin
> maven { url 'https://maven.aliyun.com/repository/google' }
> maven { url 'https://maven.aliyun.com/repository/jcenter' }
> maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
> ```
>
> 2. 在找到`Flutter SDK\packages\flutter_tools\gradle目录中flutter.gradle文件`一样把`google() 和 jcenter()`替换为上面内容即可

> `Android`构建`Flutter`应用，因为国内网络被墙的原因会导致构建项目很慢，我们可以在系统`Path`中加入两个系统变量
>
>   1. `变量名：FLUTTER_STORAGE_BASE_URL`，`变量值：https://storage.flutter-io.cn`
> 
>   2. `变量名：PUB_HOSTED_URL`，`变量值：https://pub.flutter-io.cn`

> `Flutter`应用在运行的时候是需要`gradle`构建的，你可以在`Android目录下gradle目录下wrapper目录下gradle-wrapper.properties文件中设置`
>
> `distributionUrl=https\://services.gradle.org/distributions/gradle-5.6.2-all.zip`把`gradle-5.6.2-all.zip`改成你制定的版本就行

##### **2. Android Studio 无法找到虚拟机**

> 暂时省略.....