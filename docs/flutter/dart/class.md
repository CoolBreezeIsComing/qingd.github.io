---
title: 【Flutter】基础篇 - 类
date: 2020-10-25
categories:
 - Flutter
tags:
 - Dart
---

:::tip
面向对象语言两大特征就是类与对象，而类与对象的三大特点就是继承、封装、多态，这是面向对象语言的核心内容
:::

<!-- more -->

> 在之前我就已经记录过`Dart`是强类型语言，也是属于面向对象的编程语言，既然是面向对象，那么类和对象也就是这种语言的重中之重的知识点

> 本小章节就是用来记录`Dart`中关于类的知识点

#### **类的语法结构**
> 类的基本结构由两部分组成：`成员变量(member)` 和 `方法(method)`

```dart
class 类名{
    数据类型 成员变量名;

    返回值类型 方法名(参数列表){
        // 方法体
    }
}
```

```dart
class Person{
    String name;
    void getName(){
        print(this.name);
    }
}

final p = new Person();
p.name = "张三";
p.getName();
```

> 在`Dart 2.x`版本中，我们实例化一个类就不需要`new`关键字了，可以直接书写

```dart
class Person{
    String name;
    void getName(){
        print(this.name);
    }
}

final p = Person(); // 省去new关键字，直接书写
```

#### **构造函数**

**`普通构造函数`**
> 我们知道在实例化一个类的对象时，会自动调用这个类的构造方法
> 1. 如果类中我们没有`指明构造方法`，类会自动帮助我们创建一个`无参构造方法`
> 2. 当存在手动定义的构造方法时，我们可以在创建类的时候，同时把参数赋值进去

```dart
class Person{
    String name;

    Person(String name){
        this.name = name;
    }
}

final p = new Person("张三");
```

**`优化写法`**
> 可以将构造函数改为`Person(this.name,this.age)`的形式来简化构造函数的书写

```dart
class Person{
    String name;
    int age;
    Person(this.name,this.age);
}

final p = new Person("张三",18);
```

**`可选参数`**
> 对于函数参数的可选具体可以查看函数章节

```dart
class Person{
    String name;
    int age;
    Person([this.name,this.age]);
}

final p = new Person("张三");
```

**`命名参数`**
> 对于函数参数的命名参数具体可以查看函数章节

```dart
class Person{
    String name;
    int age;
    Person({this.name,this.age});
}

final p = new Person(age:18);
```

**`特殊参数 - 命名构造函数`**
> 注意：
> 1. 有时候我们实例化一个对象的时候，参数可能不是一个一个单独书写的，而是直接以键值对的形式(map类型数据)传递的
> 
> 2. 此时，我们就可以利用`命名构造函数`来在`class类`中定义多种构造函数使其并存，然后我们根据不同的参数数据类型来调用不同的构造函数即可动态的实例化类对象
> 
> 3. 下面代码`.fromMap`取名是自定义的，主要功能是用来`区分不同的构造函数`
```dart
var per = {"name":"张三","age":18};

class Person{
    String name;
    int age;
    Person({this.name,this.age});

    Person.fromMap(Map<String, dynamic> map){
        this.name = map["name"];
        this.age = map["age"];
    }
}

final p = Person.fromMap(per);
```

**`初始化列表`**
> 创建`class类`的时候，可能会出现这种情况，某一个参数的值是根据其他参数动态计算出来的而不是我们手动传递的，这个时候我们就可以利用初始化列表的方法类设置这个参数的值

> 下面代码中`area`成员变量便是根据用户传递的`宽`和`高`动态计算出来的，对于多个需要初始化的数据之间可以用`,`逗号隔开。
> 
> 如：`Rectangle(this.width,this.height):area=(width*height),area=(width*height);`

```dart
class Rectangle{
    double width;
    double height;
    double area;

    Rectangle(this.width,this.height):area=(width*height);
}
```

**`其他`**
> 关于构造函数的内容还远远不止如此，比如说`常量构造函数`、`工厂构造函数`等等，但是这些构造函数在我们的实际开发中使用的频率并不是很高，很有可能你写十个项目中一次都没用到，所以这里就做为其他知识点，简单述说一下。如果想具体了解可以查看`Dart`官方文档


#### **set 和 get**
> 关于`set`和`get`的核心还是用来帮助我们监听`class类`中关于成员变量的操作，而我们可以通过`set`和`get`方法做一些事件拦截操作

```dart
class Person{
    String name;

    setName(String name){
        this.name =name;
    }
    
    getName(){
        print("我的姓名是：${this.name}");
    }
}

final p = Person();
p.setName("张三");
p.getName();
```

#### **继承**
> 继承使用的是`extends`关键字

**`普通继承 - 父类没有成员属性`**

```dart
class Animal {
  void eating() {
    print("吃饭");
  }
}

class Person extends Animal {}
```

**`特殊继承 - 在子类中给父类的成员属性赋值`**
> 如果父类中同样包含成员属性，我们在子类中想要对其进行赋值就必须调用`spuer()`方法

```dart
// 父类
class Animal {
  int age;
  Animal(this.age);
  void eating() {
    print("吃饭");
  }
}

// 子类继承父类的成员属性和方法
// 子类通过`super()`方法和初始化列表的方法将父类成员属性赋值
class Person extends Animal {
  String name;
  Person(this.name, int age) : super(age);
}

Person p = Person("张三", 18);
print(p.age); // 18
```

> 注意：
> 1. `Dart`中类的继承只能是单继承，不能同时继承多个类

**`多继承的实现`**
> 上面我们提示了，在`Dart`中是没有多继承概念的，也就是说一个子类只能继承一个父类，想要多继承就必须换种方式实现

> 下面代码中，我们定义了两个父类`Eat(吃饭)`和`Sleep(睡觉)`，又定义了一个子类`Person(人)`
> 1. 人可以吃饭也可以睡觉，所以`Person(人)`要同时继承`Eat(吃饭)`和`Sleep(睡觉)`两个父类
> 2. `Dart`中接口是隐式实现的,也就是`class`不仅可以当做是一个类，也可以当做是一个接口
> 3. `class Person extends Eat implements Sleep`：一个父类用来继承，一个父类当成接口用来实现，从而最终实现多继承

```dart
class Eat {
  void eating() {
    print("吃东西");
  }
}

class Sleep {
  void sleeping() {
    print("正在睡觉");
  }
}

class Person extends Eat implements Sleep {
  @override
  void sleeping() {
    print("正在睡觉");
  }
}
```

#### **抽象类**
> 有方法的定义，但是没有方法的具体实现的方法我们称之为抽象方法，而抽象方法必须放在抽象类中
> 1. `abstract`关键字可以帮助我们定义一个类
> 2. 抽象类中只定义但未实现的方法在子类继承中必须重写并实现该方法
> 3. 抽象类中已经实现的方法在子类继承中可以不重写改方法而直接使用

> 下面代码中，我们定义了一个抽象类`Eat`,其中有两个成员方法，一个是只定义但未实现的方法`eating()`，另一个是已经实现的方法`sleeping()`

```dart
abstract class Eat {
  void eating();
  void sleeping() {
    print("正在睡觉");
  }
}

class Person extends Eat {
  @override
  void eating() {
    print("正在吃饭");
  }
}
```

#### **接口**
> `Dart`中没有`interface`关键字用来帮助我们定义一个接口，所以在`Dart`中接口的实现是一种隐式实现的，也就是说`class既能看成是类，也可以看成是一个接口`

> 类和接口的区别：
> 1. 类的继承不需要去重写父类的方法
> 2. 接口的实现必须要重新实现接口中的所有方法
> 3. 接口的实现使用的是`implements`关键字

```dart
// 接口
class Eat {
  void eating() {
    print("吃东西");
  }
}


// 子类实现接口，并重写方法
class Person implements Eat {
  @override
  void eating() {
    print("正在吃饭");
  }
}
```

#### **接口和抽象类的作用**
> 其实在日常开发中，有很多人根本不清楚抽象类和接口到底有什么根本意义所在，也很少使用的到。在面向对象的语言中，类和对象是语言的重点内容。而面向对象语言的三大特征就是`继承`、`封装`、`多态`。
> 
> 关于继承的实现我们可以不必多说，但是对于多态的实现就必然会使用到`抽象类`和`接口`，这两者可以帮助我们实现同一个方法能够完成不同的功能

> 实际案例：计算面积
> 1. 矩形的面积是`长 * 宽`
> 2. 圆形的面积是`半径 * 半径 * 3.14`

> 解析：
> 1. 首先矩形和圆形的面积计算方法是不一样的，这也就注定我们无法通过一个固定的方法来动态实现面积的计算，这个时候我们就必须借助抽象类或者接口来实现方法的多态
> 2. 下面的`getArea()`方法就能帮助我们实现不同的图形面积计算

```dart
main(List<String> args) {
  Reactangle r1 = Reactangle(10, 20);
  getArea(r1);

  Circle c1 = Circle(10);
  getArea(c1);
}

abstract class Area {
  void calcArea();
}

class Reactangle extends Area {
  int width;
  int height;

  Reactangle(this.width, this.height);

  @override
  void calcArea() {
    print(this.width * this.height);
  }
}

class Circle extends Area {
  int r;
  Circle(this.r);

  @override
  void calcArea() {
    print(r * r * 3.14);
  }
}

void getArea(Area c) {
  c.calcArea();
}

```

