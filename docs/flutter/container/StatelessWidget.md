---
title: 【Flutter】容器篇 - StatelessWidget无状态组件
date: 2020-10-25
categories:
 - Flutter
tags:
 - Container
---

:::tip
无状态组件，用户交互不会改变页面展示内容的布局文件可以继承至该组件
:::

<!-- more -->

> 类似于`React组件`需要继承`Component`一样，而`Flutter`的每一个页面组件也需要继承

> `StatelessWidget `：无状态，指得就是继承与这个的组件内容是不会发生改变的

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget { // 继承无状态组件
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        child: 子组件
    );
  }
}
```

