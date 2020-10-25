---
title: 【Flutter】基础篇 - 数据类型
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
强类型语言对于数据类型的限制是非常严格的，严格的数据类型同样也保证了我们代码的安全性和可拓展性
:::

<!-- more -->


#### **数字类型**
> Dart的数字有两种形式,分别是`int`和`double`

> `int`：整型
> `double`：浮点数，包含单精度和双精度

```dart
int age = 18; // 整型
double number = 18.88; // 浮点型
```

**`.toString() 整数转字符串`**

```dart
String number = 18.toString();
```

**`.toStringAsFixed(保留位数) 浮点数转字符串`**

```dart
String age = 3.14159.toStringAsFixed(2); // 浮点数转字符串，并保留两位小数
```

#### **字符串类型**
> `Dart`中定义一个字符串可以使用单引号或者双引号

```dart
String name = "张三"; // 双引号
String name = '李四'; // 单引号
```

**`.isEmpty 判断是否为空`**
> 返回值true or false

```dart
main(List<String> args) {
    String name = "";
    if (name.isEmpty) {
        print("name值为空");
    }
}
```

**`.isNotEmpty 判断是否不为空`**
> 返回值true or false

```dart
main(List<String> args) {
    String name = "";
    if (name.isEmpty) {
        print("name值为空");
    }
}
```

> `数据名称.isEmpty / isNotEmpty` 不仅仅可以判断字符串，可迭代的数据类型一样也可以判断


**`.parse() 字符串转数字`**

```dart
int number = int.parse("1"); // 字符串转整数
double age = double.parse("3.14159"); // 字符串转浮点型
```

**`${} 字符串模板`**
> 字符串模板语法：和JS的模板语法一致，在字符串中通过`${数据名称}`进行动态取值

```dart
main(List<String> args) {
    String name = "张三";
    print("${name}"); // 模板语法
}
```

#### **布尔值**
> 和其他语言一样，布尔值的数据类型是`bool`，取值也只有两种`true`和`fasle`

> 注意：
> 1. 在JS中，对于其他数据类型会有`非空即真`的理念，但是在`Dart`中是没有这个理念的
> 2. 如何你想判断某一个数据是否为空可是使用`数据名称.isEmpty`进行判断

#### **数组**
> `Dart`中的数组，我们一般不叫数组而是列表。其实数据都是一样的，只是换了一种叫法
>
> 关于数组的定义方式有两种：
> 1. `List<int> arr = [1,2,3,4]`：数组内每一个元素都必须是 int 类型
> 2. `List arr = [1, "2", 3, 4]`：数组内每一个元素数据类型可以不一样

```dart
List<int> arr = [1, 2, 3, 4];
List arr = [1, "2", 3, 4];
print(arr);
```

**`..add()填加`**
```dart
List arr = [1, "2", 3, 4];
arr..add("20"); //新增元素
```

**`..addAll()数组合并`**
```dart
List arr = [1, "2", 3, 4];
arr..addAll([3, 4]); // 数组合并
```

**`.length 获取数组长度`**
```dart
List arr = [1, "2", 3, 4];
print(arr.length);
```

**`.forEach() 遍历`**
```dart
List arr = [1, "2", 3, 4];
arr.forEach((item){
    print(item);
});
```

#### **对象**
> `Dart`中对象的叫法也是不一样的，这里叫做映射

> 注意：
> 1. `键值`：必须是字符串或者数字
> 2. `取值`：必须使用`数据名[属性名]`的方式进行取值

```dart
Map man = {"age": 18, "name": "张三"};
```

**`新增属性`**
```dart
Map man = {"age": 18, "name": "张三"};
man["add"] = "合肥"; // 新增属性
```

**`.length 获取对象长度`**
```dart
Map man = {"age": 18, "name": "张三"};
print(man.length);
```