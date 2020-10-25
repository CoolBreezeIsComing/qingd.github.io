---
title: 【Flutter】布局篇 - 子控件居中容器
date: 2020-10-25
categories:
 - Flutter
tags:
 - Layout
---

:::tip
样式控件之一，默认占满整个父控件，可将内部的子控件，呈现到屏幕正中央进行显示
:::

<!-- more -->


```dart
Center(
  child: 子元素,
)
```

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Center( //将child内的Text组件居中显示
            child: Text("Hello Flutter!")
        )
    );
  }
}
```

## **child**
> 子组件属性：用于放置所包裹的子内容

```
Center( //将child内的Text组件居中显示
    child: Text("Hello Flutter!")
)
```

> 效果图：

![1.0](./../../.vuepress/public/img/center/1.0.png)

