---
title: 【Flutter】容器篇 - Scaffold()基本结构脚手架
date: 2020-10-25
categories:
 - Flutter
tags:
 - Container
---

:::tip
Scaffold()与其说是一个容器，不如说是一个脚手架，而这个脚手架为我们搭建了最基本的页面布局，包含appbar(顶部导航条)、body(主体内容)、floatingActionButton(底部右下角浮动按钮)、drawer(侧边栏)、bottomnavigationbar(底部切换栏)等等属性...
:::

<!-- more -->

> 这个组件，你可以将其视为一个页面结构的脚手架，包含了页面的基本组成单元，通俗的说，就是集成了页面的基本布局

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar( // 头部导航条区域
          title: Text('页面标题'),
        ),
        body: Center( // 主题内容区域
          child: Text('主体内容'),
        ),
        floatingActionButton: FloatingActionButton( // 底部右下角浮动按钮
          onPressed: () {},
          child: Icon(Icons.add),
        ),
        drawer: Drawer( // 侧边栏区域
        ),
      ),
      // 主题颜色
      theme: ThemeData(primarySwatch: Colors.blue),
    );
  }
}
```

> 效果如下：

![1.0](./../../.vuepress/public/img/scaffold/1.0.png)
![1.0](./../../.vuepress/public/img/scaffold/1.1.png)

## **appBar**

> 导航条属性：顶部导航条，也可以说是标题栏

> 注意：
>
> 1. 需要搭配`AppBar()`组件使用
>
> 2. `AppBar()`中的`title属性`必须使用`Text()`文本组件进行渲染展示

```dart
Scaffold(
	appBar: AppBar(
		title: Text("标题栏",style: TextStyle(fontSize: 14.0)), // 标题内容
         centerTitle: true, // 设置标题内容是否居中
         toolbarHeight: 40.0, // 设置标题区域的高度
         elevation: 0.0,
         actions: [
			Container(
				child: IconButton(
					icon: Icon(Icons.search), // 按钮图标
					onPressed: () {}, // 点击事件
				),
			)
		],
	),
),
```

> ​	关于`AppBar()`组件的属性还远远不止于此，本子章节重点讲解的是`Scaffold()`基本布局组件，故对`AppBar()`组件在此简单带过，如要了解详细内容，请前往`导航章节`进行查阅

## **body**

> 主体属性：用于放置并展示页面主题内容的区域属性

```dart
Scaffold(
	body: Center(
		child: Text("主体属性"),
	),
)
```

## **floatingActionButton**

> 右下角图标属性：底部右下角固定的按钮，也是界面主要的功能按钮之一

```dart
Scaffold(
	floatingActionButton: FloatingActionButton(
		child: Icon(Icons.add), // 图标
		onPressed: () {} // 点击事件
	),
)
```

> 效果图：

![1.2](./../../.vuepress/public/img/scaffold/1.2.png)

## **persistentFooterButtons**

> 固定在下方的按钮属性：固定在下方显示的按钮，比如说对话框下方的确定、取消按钮

```dart
Scaffold(
	persistentFooterButtons: [
		TextButton(child: Icon(Icons.home),onPressed: (){}),
		TextButton(child: Icon(Icons.home),onPressed: (){}),
		TextButton(child: Icon(Icons.home),onPressed: (){}),
		TextButton(child: Icon(Icons.home),onPressed: (){}),
	],
)
```

> 效果图：

![1.3](./../../.vuepress/public/img/scaffold/1.3.png)

## **drawer**

> ​	左侧栏属性：搭配`Drawer()`控件一起使用，不用手动填加事件，只要加入这个属性和组件就能在`AppBar()`的左边出现一个菜单按钮，点击即可弹出一个左菜单栏

```dart
Scaffold(
	drawer: Drawer(),
)
```

> 效果图：

![1.4](./../../.vuepress/public/img/scaffold/1.4.png)

> 注意：`draw属性`必须和`appbar属性`一起使用，讲白了就是说想要使用`draw`属性，前置条件就是必须有`appbar属性`

## **bottomNavigationBar**

> 底部tabbar属性：放置在底部的一个切换导航栏

> 注意：
>
> 1. 必须搭配`BottomNavigationBar()`控件和`BottomNavigationBarItem()`控件一起使用

```dart
Scaffold(
	bottomNavigationBar: BottomNavigationBar(
		items: [ // 配置每一个子图标按钮
			BottomNavigationBarItem(
				icon: Icon(Icons.home), // 图标
				title: Text("首页") // 图标下方的文字
			),
			BottomNavigationBarItem(
				icon: Icon(Icons.email),
				title: Text("邮箱")
			)
		],
		type: BottomNavigationBarType.fixed, // 显示效果
		onTap: (index){}, // 点击事件，有一个参数index，指的是当前点击菜单按钮的对于索引值
		currentIndex: 0, // 控制当前选中的菜单按钮
	),
)
```

> 效果图：

![1.5](./../../.vuepress/public/img/scaffold/1.5.png)

> 在上面我们学习了右下角浮动按钮，刚好搭配这个`bottomNavigationBar属性`做一个嵌入式底部导航栏

> 大致的代码逻辑都没有任何变化，只是填加了一个新的属性`floatingActionButtonLocation`

```dart
Scaffold(
	floatingActionButton: FloatingActionButton(
		child: Icon(Icons.add),
		onPressed: () {}
	),
	floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked, // 设置底部浮动按钮居中
	bottomNavigationBar: BottomNavigationBar(
		items: [
			BottomNavigationBarItem(
				icon: Icon(Icons.home),
				title: Text("首页")
			),
			BottomNavigationBarItem(
				icon: Icon(Icons.email),
				title: Text("邮箱")
			)
		],
		onTap: (index){},
		currentIndex: 0,
		type: BottomNavigationBarType.fixed,
	),
)
```

> 效果图：

![1.6](./../../.vuepress/public/img/scaffold/1.6.png)

## **backgroundcolor**
> 背景属性：用于修改`body`主体内容区域的背景颜色