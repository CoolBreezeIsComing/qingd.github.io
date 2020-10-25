module.exports = {
    theme: 'reco',
    title: "一盏青灯欲锁魂",
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        type: 'blog',
        author: '一盏青灯欲锁魂',
        mode: 'light',
        modePicker: false,
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '时光小筑', link: '/time', icon: 'reco-date' },
            {
                text: '技术文档', icon: 'reco-api',
                items: [
                    {
                        text: 'Flutter',
                        link: '/flutter/index',
                        icon: 'reco-document',
                    },
                ]
            },
            { text: '关于本站', link: '/about', icon: 'reco-account' },
        ],
        sidebar: {
            "/flutter/": [
                {
                    title: "Dart",
                    collapsable: true,
                    path: "index",
                    children: [
                        {
                            title: '入口函数',
                            path: '/flutter/dart/mianFunc'
                        },
                        {
                            title: '常量、变量',
                            path: '/flutter/dart/data'
                        },
                        {
                            title: '数据类型',
                            path: '/flutter/dart/dataTypes'
                        },
                        {
                            title: '函数',
                            path: '/flutter/dart/function'
                        },
                        {
                            title: '运算符',
                            path: '/flutter/dart/character'
                        },
                        {
                            title: '流程控制',
                            path: '/flutter/dart/process'
                        },
                        {
                            title: '类',
                            path: '/flutter/dart/class'
                        },
                        {
                            title: '泛型',
                            path: '/flutter/dart/genericity'
                        },
                        {
                            title: '异步',
                            path: '/flutter/dart/async'
                        },
                        {
                            title: '错误处理',
                            path: '/flutter/dart/error'
                        },
                    ],
                },
                {
                    title: '环境搭建',
                    path: '/flutter/install/',
                    children: [
                        {
                            title: 'Android Studio 环境搭建',
                            path: '/flutter/install/android'
                        },
                        {
                            title: 'Vs Code 环境搭建',
                            path: '/flutter/install/vscode'
                        },
                        {
                            title: 'BUG 处理',
                            path: '/flutter/install/bug'
                        },
                    ]
                },
                {
                    title: '容器',
                    path: '/flutter/container/',
                    children: [
                        {
                            title: 'StatelessWidget 无状态',
                            path: '/flutter/container/StatelessWidget'
                        },
                        {
                            title: 'StatefulWidget 有状态',
                            path: '/flutter/container/StatefulWidget'
                        },
                        {
                            title: 'MaterialApp() 容器',
                            path: '/flutter/container/MaterialApp'
                        },
                        {
                            title: 'Scaffold() 基本结构',
                            path: '/flutter/container/Scaffold'
                        },
                    ]
                },
                {
                    title: '布局组件',
                    path: '/flutter/layout/',
                    children: [
                        {
                            title: 'Center() 居中',
                            path: '/flutter/layout/Center'
                        },
                    ]
                }
            ],
            sidebarDepth: 4,
        },
    }
}