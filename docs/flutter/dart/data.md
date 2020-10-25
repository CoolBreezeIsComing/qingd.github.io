---
title: 【Flutter】基础篇 - 常量、变量
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
Dart语言中数据常量、变量的声明方式
:::

<!-- more -->


> `Dart`既然属于强类型语言，那么对于数据的声明也就是非常严格的。在`Dart`中对于数据的声明方式有两种，分别是`强制声明`、`隐式声明`

#### **强制声明**
> 强制声明就是在数据初始化的时候就`明确的声明数据类型`

```dart
String name = "张三"; // 强制声明
int age = 18;
double score = 12.12;

main(List<String> args) {
    print("${name} ${age} ${score}"); // 打印输出
}
```

#### **隐式声明**
> 隐式声明使用`var` 关键字

```dart
var name = "张三"; // 隐式声明

main(List<String> args) {
    print("${name}");
}
```

#### **常量声明**
> 上面的两种定义方式都是属于变量的定义的，对于常量的定义使用的是`const`和`final`关键字

```dart
const String name = "张三";
const name_ot = "李四";

final int age = 18;
final age_ot = 11;
```


> 注意：
> 1. 不管对于常量还是变量，一旦数据被定义出来并且初始化赋值那么这个数据的类型就固定了下来，是不允许被修改的
> 2. 变量是可以改变的数据（前提是数据类型一致），常量是不可以改变的数据

#### **默认值**
> `Js`中对未初始化赋值但已经定义的数据默认值是`undefind`，而在`Dart`中默认值都是`null`，不管是什么数据类型

```dart
// JavaScript
var name; // == undefined

// Dart
var name; // == null
int x; // == null
```

#### **默认值判断**
> 在`Dart`的判断中，只有布尔值`true`视为`true`

**`正确写法`**
```dart
main(List<String> args) {
    var myNull = true;
    if (myNull) {
        print("正确写法");
    };
}
```

**`错误写法`**
```dart
main(List<String> args) {
    var zero = 1;
    if (zero) {
        print("错误写法");
    };
}
```

> 注意：`zero = 1 `在`Js`中 0 和 1 我们可以视为`true`和`false`，但是在`Dart`中不可以，只有布尔值`true`才能视为判断条件的`true`