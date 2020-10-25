---
title: 【Flutter】基础篇 - 入口函数
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
Dart语言和Java语言一样,都是属于强类型语言，并且每一个独立的程序文件如果想要执行都是需要一个入口函数的
:::

<!-- more -->


####  **什么是入口函数？**

> 简单直白的说就是程序执行的开始位置，也就是起点，Dart的入口函数是`main()方法`

```dart
main(List<String> args) {
	print("Hello world");
}
```

> 注意：`Dart`是强类型语言，每一句代码结束都必须使用`;`冒号进行结尾，否则就是报错

#### **打印函数**

> 每种语言都有其特殊的打印函数，`JS`的是`console.log()`，而`Dart`的是`print()`

```dart
print("Hello world");
```

