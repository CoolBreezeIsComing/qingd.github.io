---
title: 【Flutter】基础篇 - 函数
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
Dart中函数的相关内容还是比较简单的，本章节记录函数的基本结构、参数的作用域、入口函数、返回值、函数一等公民等等知识点
:::

<!-- more -->


#### **函数的基本结构**

**`普通函数`**
```dart
返回值类型  函数名(参数列表){
    // 函数体
}
```

**`箭头函数`**
```dart
返回值类型  函数名(参数列表) => 函数体
```

> 注意：箭头函数的在函数体只有一句代码的情况下才可以使用，并具有`return`的功能

#### **入口函数**
> 在Dart中每一个独立的逻辑功能都必须有一个入口函数`main()函数`，这表示程序从这里开始执行

> `main()函数`属于顶级函数，返回值必须是`void`

```dart
void main(){ // 入口函数
    
}
```

#### **函数参数**

**`必传参数`**
> 下面代码`name`和`age`两个参数就是必传参数

```dart
void getPerson(String name, int age){

}
```

**`可选参数`**
> 下面代码`height`就是可选参数，函数的参数列表中，所有可选参数都必须放在`[int height]`中括号内,多个可选参数之间用`,`逗号隔开

```dart
void getPerson(String name, [int height]){

}
```

**`命名参数`**
> 当一个函数的参数列表中有多个参数时，我们可以使用`命名参数`来指定我们所传递的数据是对应哪一个参数的

> `命名参数`的语法格式`{String name = "张三", int age}`，所有的参数都是被`{}`花括号所包裹的，另外`命名参数`也属于可选参数并设置默认值

```dart
void getPersonInfo({String name, int age}) {
  print(name);
}

getPersonInfo(name: "张三")
```

**`默认值`**
> `Dart`中函数参数的默认值只能给可选参数设置，必传参数是无法设定默认值的，语法格式`[int height = 18, String name = "张三"]`

```dart
void getPerson([int height = 18, String name = "张三"]){

}
```

#### **作用域、闭包**
> 关于`作用域`和`闭包`是每个语言都具备的，也基本都是一致的，没啥好说的，这里就省略过去了。毕竟太基础了，记录起来也太麻烦了，能学`Dart`做移动端开发，这里默认都是有一定编程基础的

#### **返回值**
> 不管是什么作用的函数都有一个返回值存在的，`返回值`讲白了就是函数体中`return`出来的数据类型

**`有明确返回值`**

```dart
String getName(){
    return "张三";
}
```

**`无明确返回值`**
> 对于无法判断返回值数据类型的函数，我们可以省略掉函数前面的返回值类型。此时隐式的返回`null`并且附加到函数体中

```dart
getName(){
    return "张三";
}
```

**`没有返回值`**
> 对于已经明确没有返回值的函数，我们有两种做法一种是`直接不写返回值`，另一种是把返回值类型写成`void`

```dart
void getName(){
    
}
```

#### **函数一等公民**
> 所谓`函数一等公民`就是说函数本身可以当成参数传递给另一个函数

> 下面代码中`getName()`函数就被当成参数传递给了`getPersonInfo()`函数

```dart
void getPersonInfo(Function func) {
  func();
}

void getName([String name = "张三"]) {
  print(name);
}

getPersonInfo(getName);
```