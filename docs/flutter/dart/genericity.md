---
title: 【Flutter】基础篇 - 泛型
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
泛型主要是帮助复杂数据类型去规范子元素的数据类型，提高代码的严谨，也可以通过泛型减少重复代码的书写
:::

<!-- more -->


#### **List泛型**
> 语法格式：
> 1. 格式一：`List<子元素数据类型> 变量名 = [子元素]`
> 2. 格式二：`List 变量名 = <子元素数据类型>[子元素]`

```dart
// 设置子元素都必须是String类型
List<String> list = ["123"];
List list = <String>["123"];
```

#### **map泛型**
> 语法格式：
> 1. `Map<键数据类型, 值数据类型> map = {键: 值}`
> 2. `Map map = <键数据类型, 值数据类型>{键: 值}`

> 注意：
> 1. 键的数据类型一般都是`String`
> 2. `dynamic`是动态数据类型，如果你严格限制`值的数据类型`，可以写成这种方式`Map<String, String> map = {"name": "张三"}`

```dart
Map<String, dynamic> map = {"name": "张三"};
Map map = <String, dynamic>{"name": "张三"};
```

#### **方法泛型**
> 针对方法的参数，返回值等使用泛型可以帮助我们提高代码的复用性和安全性
> 
> `T`是`Type`的缩写，这个可以自己随便定义，这里的`T`代表的就是动态的数据类型，你传入什么参数，他就是什么类型并且严格限制的

```dart
T getAreaFirst<T>(List<T> ts) {
  T tmp = ts[0];
  return tmp;
}
```