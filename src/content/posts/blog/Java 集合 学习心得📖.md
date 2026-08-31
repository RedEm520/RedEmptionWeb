---
title: Java 集合 学习心得📖
published: 2026-08-20
description: 在这里我会讲述学习Java集合的心得
image: ./images/Java集合.avif
tags:
  - 后端
  - 开发
category: 后端开发
draft: false
---

# 写在前面✨

你好呀！欢迎你来到这里~ 听我的故事。

在这里，我将会讲讲学习完 Java 集合之后的一些学习心得。

# 我学到了什么？💡

集合是来源于数据结构的，所以在学习集合的初期，我没有一上来就去学习集合——因为集合实在是太多了，没有把基础打好，可能看了就忘了。

> [!NOTE] 初期我做了这些
> + 复习数据结构
> + 把代码基础打牢

这些其实花了 2 天时间，其实挺值的。如果直接去学习集合，虽然说知道怎么用，但是不能理解底层是怎么操作的，那样会忘得很快。

## Collection集合🗂️

> [!NOTE] 首先从 Collection 单列集合开始学

| 集合 | 底层数据结构 |
| --- | --- |
| `ArrayList` | 顺序表 |
| `LinkedList` | 双向链表 |
| `HashSet` | 哈希表 |
| `LinkedHashSet` | 哈希表 + 双向链表的组合 |
| `TreeSet` | 红黑树 |

+ 学习单列集合通用的 API 以及遍历方法
+ 跟着视频扒了扒源码

在学习 Collection 集合时，让我印象最深刻的是**扒源码**的那次：看着老师一步步扒源码、一步步带着我去分析，看完之后，感觉浑浊的脑浆都变得<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">清澈见底</mark>。万万没想到这么牛逼的想法，是上个世纪的老前辈想出来的。

在那时，我也对编程知识愈发感兴趣了，嘿嘿😁

## Map集合🗺️

> [!NOTE] 接着就开始学习 Map 集合了

+ `HashMap` 集合
+ `LinkedHashMap` 集合
+ `TreeMap` 集合
+ 学习了相关的遍历方法以及 API
+ 扒了扒源码

Map 集合其实跟 Collection 集合差不多，不过就是一次存一个数据，变成一次存一对数据了。

有了前面学习集合的基础之后，Map 集合也不过如此。当我看源码的时候很意外——在没有视频分析的情况下，看得还是如此通透👋，这也许是前面学习集合和复习数据结构的功劳。

## Stream流 && 方法引用🌊

学习 Stream 流跟方法引用：

+ Stream 流的**中间方法**跟**终结方法**
+ 方法引用：静态方法、成员方法、构造方法.....
+ Stream 流跟方法引用结合

学习这俩的时候，Stream 流让我看到了一个方法原来可以这么凌乱（用匿名内部类）....不过可读性倒是挺好。

刚学方法引用的时候觉得没什么，也在疑惑为什么要这么用？在我结合 Stream 流跟方法引用去写一些编程题的时候，我才意识到<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">代码可以这么简洁</mark>——看来是前辈们想出的偷懒的方法😄，不过可读性变低了。

# 我想到了什么？🤔

在学习的期间我其实很痛苦😔，API 学完忘了又忘，甚至有些知识第二天就忘了....哈哈哈。

## 把所有知识都记住，才能变成编程大牛吗？🧠

在学习 Java 的时候，我一直都认为要像学文科那样把知识全部记住才行。我觉得查 API、问 AI 这些效率太慢了，不如把所有知识的每一个细节都记下来，这样我的效率就会更高了。可...现实是这么残酷，我越是这么做，记下来的也很快就忘了...

> [!NOTE] 后来我越来越焦躁，进度也停滞了....

在此期间，我看了很多学习编程的案例、听了学长对编程的讲解，发现：许多编程大牛都逃不过遗忘。

那一刻我忽然就释怀了——原来我所想象的大牛不是记忆超人，而是<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">他们早就学会了在遗忘的时候去查文档、查笔记、查自己以前写过的代码</mark>，而不是跟知识点死磕。

## 为什么这些知识在大佬手中可以变成一个大项目？🚀

我在刷题的时候会用到很多集合相关的知识，可刷题只是为了解决问题，并没有<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">创造一个新事物</mark>。

我在那时就挺好奇的：为什么这些知识在大佬手中可以变成好玩的游戏、精美的网站、有趣的模组，可在我手中只是用来解决问题的工具？

> [!TIP] 以下仅为我个人理解⬇️
> 我在刷题的时候，注意力全在"怎么把这道题 AC"上。集合对我而言，就是 `List`、`Set`、`Map` 这些容器——装完数据、做完操作、提交，就结束了。
>
> 可大佬看到的就不一样了：
> 1. `List` 可以是存放**角色**的容器
> 2. `Set` 可以用来存放、排序游戏中**唯一性的道具**
>
> 这也许就是不同点吧。

<hr style="height:3px;background:linear-gradient(90deg,#ADD8E6,#FFD966,#ADD8E6);border:none;border-radius:3px;">

# 尾声🌙

其实本想再说说未来想干些什么的，但想了想，这对于我来说还是太过遥远了。现在的想法对于未来的我来说会很幼稚。😃

但~是！"幼稚"不代表不正确，所以我还是想说出来！未来的我看到这篇文章的时候，可能会笑、可能会羞耻，但也可能会找到那时破解困难的种子。

> [!NOTE] 将来我想自己做一款精美的游戏🎮
> + 类型：视觉小说
> + 然后上架到 Steam，让每一位热爱视觉小说的人都可以玩到！
>
> 这就是我未来最想做的事了。

> 刷题还会继续，<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">种子已经种下</mark>。
>
> 下次打开 IDEA 的时候，我大概会对着 Map 发一会呆，然后偷偷想：
>
> "这个键值对，以后会是谁对谁说的话呢？"
>
> <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">尾声，也是序章。</mark>

<hr style="height:3px;background:linear-gradient(90deg,#ADD8E6,#FFD966,#ADD8E6);border:none;border-radius:3px;">
