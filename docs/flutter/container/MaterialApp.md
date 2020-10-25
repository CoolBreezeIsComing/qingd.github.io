---
title: 【Flutter】容器篇 - MaterialApp()风格容器
date: 2020-10-25
categories:
 - Flutter
tags:
 - Container
---

:::tip
Flutter具有两种风格的UI库，一个MaterialApp()风格容器，另一个是cupertinoApp()风格容器，本章节便讲述MaterialApp()风格容器的相关知识点
:::

<!-- more -->

> `MaterialApp()`是`Flutter`应用最基础的容器，它的风格偏向于安卓风格UI，与之相对应的便是cupertinoApp()风格容器，也就是IOS风格UI，不管是哪一种风格，如果你想使用该风格，就必须将相对应的风格容器当成根容器使用，页面中的所有布局都在这个根容器中所书写

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp( // 作为根容器返回
        
    );
  }
}
```



## **title**
> 文本属性：用于设置该组件的标题的,这个标题是不会展示在页面上的，所以不用过多关注

> 需要注意的是。一般组件内的`title属性`我们是需要使用到`Text()`文本组件来放置内容的，这里不需要，直接写文本内容上去即可

```dart
MaterialApp(
	title: "需要的文本内容直接写", // 标题
),
```

## **theme**

> 主题属性：用于设置页面主题样式的，比如说主题颜色

```dart
MaterialApp(
	theme: ThemeData(primaryColor: Colors.pink), // 设置主题颜色是粉色
),
```

> 效果图：

![1.0](./../../.vuepress/public/img/materialapp/1.0.png)

## **debugShowCheckedModeBanner**

> debug提示条属性：用来控制页面右上角debug字样是否展示，`true`展示，`false`不展示

```dart
MaterialApp(
	debugShowCheckedModeBanner: false,
),
```

> 效果图：

![1.1](./../../.vuepress/public/img/materialapp/1.1.png)

![1.2](./../../.vuepress/public/img/materialapp/1.2.png)



## **home**

> 主体属性：放置该容器内的主体内容，注意，这是主体不是主题！别搞混了

```dart
MaterialApp(
	home: Center(
		child: Text("主体内容"),
	)
),
```

> 效果图：

![1.3](./../../.vuepress/public/img/materialapp/1.3.png)

