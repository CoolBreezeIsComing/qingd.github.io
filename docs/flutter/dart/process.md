---
title: 【Flutter】基础篇 - 流程控制
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
流程控制也就是`if...else`等等这些，也是比较常见的内容，语法格式也都是一致的，这里对于常见的流程控制内容省去了，只记录一些比较特殊的流程控制
:::

<!-- more -->


#### **assert(断言)**
> 什么是断言？也就是假设一个条件是true，如果条件是false则会跑出异常，一般是用在测试环境中的

```dart
int age = 13;
assert( age > 14 ); // 条件false,抛出异常
```