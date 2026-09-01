---
title: Java IO流 学习总结（附代码示例）💧
published: 2026-08-30
description: 这是一篇IO流知识点总结的文章
image: ./images/JavaIO流.avif
tags:
  - 后端
  - 开发
category: 后端开发
draft: false
---

# 本文概述📖

在这篇文章中我会总结 IO 流的知识，以及我对各个知识点的了解。希望对你有所帮助~

> [!NOTE] 作者的废话
> 那就废话不多说，马上开始喵🐱~。

---

# 什么是IO流？🤔

**IO 流是可以操作任何数据源的 API（代码工具）。**

那么什么是数据源呢？数据源有：

+ 🗂️ **文件**：存在硬盘上的纯文本文件、音视频文件、压缩包等等
+ 🧠 **内存**：内存里面的缓存数据
+ 🌐 **网络**：网站上的一些网络资源

这些都是数据源，IO 流就是可以操作这些数据源的工具。

比如可以把视频文件变成压缩包、从网站上的数据读取到本地文件、拷贝文件......

现在知道 IO 流有多么强大了吧喵~只要简单几十行代码就可以操作数据。(*^▽^*)

> 💡 但是 IO 流是通过什么去获取到数据源所在的位置的呢？那就是 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">路径</mark> 还有 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">链接</mark> 🔗！

> [!NOTE] 提醒
> 下面会讲述路径跟链接以及相应的 API。

# File📃

File 类可以用来表示本地文件或文件夹的路径，并且还可以查看文件的信息、创建文件夹和文件、删除文件夹跟文件。

下面来展示一下在 Java 中怎么创建 File 的对象：

```java
//使用绝对路径创建File对象
File file1 = new File("D:\\Java\\Project\\a.txt");
//使用相对路径创建File对象
File file2 = new File("Project\\a.txt");
```

看到这可知，**路径有两种**：

+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">绝对路径</mark>：从盘符开始的路径，比如上面代码中的 `D:\`，这是**唯一的**，无论在哪个软件都能定位到在哪
+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">相对路径</mark>：从当前工作目录（也就是当前程序运行的位置）开始的路径，换一个位置可能就找不到了

但把它们拆开看又多了两种：

+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">父级路径</mark>：拿 <span style="background-color:#E3F0FF;border-radius:8px;padding:1px 6px;">D:\Java\Project\a.txt</span> 来举例，<span style="background-color:#E3F0FF;border-radius:8px;padding:1px 6px;">D:\Java\Project</span> 就是父级路径，也就是当前路径的上一级
+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">子级路径</mark>：这个更好分辨，除开父级路径剩下的就是子级路径。还是拿上面的绝对路径举例，<span style="background-color:#E3F0FF;border-radius:8px;padding:1px 6px;">a.txt</span> 就是它的子级路径

# URL-链接🔗

链接就是我们访问网站的链接喵~那有没有什么 API 可以存放链接呢？当然有咯喵！

下面是 URL 创建对象的代码：

```java
// 存放单个链接
URL baidu = new URL("https://www.baidu.com?wd=java");
```

跟 File 差不多，就是把数据源的链接变成字符串存进去。

<hr style="height:3px;background:linear-gradient(90deg,#ADD8E6,#FFD966,#ADD8E6);border:none;border-radius:3px;">

IO 流通过这些路径或链接去操作文件，那就会产出异常。比如：路径上的文件不存在、网站访问不到，这些情况都会出异常。

那异常出现了，作为一名负责的程序员当然要去解决啦！那具体怎么解决咧？马上就来讲喵~

> [!CAUTION] 注意
> 下面会讲述异常的相关知识，很重要哦~

# 异常👾

异常其实随处可见，你的代码报错了，那一片红其实就是异常。我们平时解决异常一般都是改参数，但是遇到 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">编译时异常</mark> 就不能单单修改参数就可以解决的了。

> **异常有两种：**

| 类型 | 发生时机 | 典型例子 |
| --- | --- | --- |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">编译时异常</mark> | 点击 IDEA 的「开始运行程序」按钮之后会进行编译，这时出现的问题（只要 .class 文件没有生成的时候报错，都叫编译时的问题） | 如 URL 构造等检查型异常 |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">运行时异常</mark> | 当程序编译完没问题后，程序开始运行才出现的异常 | 数组越界、空指针异常、算术错误等等 |

> **异常的解决方式：**

> [!NOTE] 提醒
> 这个解决方法主要针对于编译时异常，对于运行时异常是可有可无的。因为编译时异常你必须要解决，不解决就过不了编译，一直报错。

**方式一：抛出或声明异常**

抛出或声明异常就是告诉调用者：用这个方法会出现这些异常，出现了异常你要处理。那如果调用者不处理，调用者也抛出异常，就会让 JVM（虚拟机）处理——>爆红🔴

**方式二：捕获异常**

+ **目的**：当代码出现异常时，可以让程序继续往下执行，不会像 JVM 处理异常那样，出现异常就停止程序
+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">捕获异常不是为了"让代码不报错"，而是为了"让代码在报错时依然可控"。</mark>

抛出 & 声明异常代码演示：

```java
// 声明异常
public static void main(String[] args) throws MalformedURLException {
	// 创建链接对象
	URL baidu = new URL("https://www.baidu.com?wd=java");
}
// 抛出异常
public static void registerUser(String name, int age){
	// 业务校验：如果年龄不合法，主动抛出异常
        if (age < 18) {
            // 这里的 throw 就是"主动抛出"，程序会立即终止执行，跳到调用方的 catch 块
            throw new IllegalArgumentException("用户年龄不能小于18岁，当前输入：" + age);
        }
        // 只有校验通过才会执行到这里
        System.out.println("用户 " + name + " 注册成功！");
}
```

+ 先看第一个 main 方法，<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">throws MalformedURLException</mark> 这个就是**声明异常**。这个异常必须声明，因为 URL 是会出现编译时异常的；声明异常也告诉调用者：运行这个方法可能会导致这样的异常。
+ 第二个是**抛出异常**，<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">throw new IllegalArgumentException()</mark> 是主动抛出，表示传递的数据不对，我要抛出异常让调用者解决。

捕获异常代码演示：

```java
public static void main(String[] args) {
        System.out.println("=== 程序开始 ===");
        try {
            System.out.println("进入try块");
            int result = 10 / 0; // 这里会报错（除数不能为0）
            System.out.println("这行不会打印，因为上面已经炸了");
        } catch (Exception e) {
            System.out.println("捕获到异常：" + e.getMessage());
        } finally {
            System.out.println("finally执行：无论try里是否出错，我都要跑！");
        }
        System.out.println("=== 程序结束（未崩溃）===");
    }
```

**try...catch...finally 是捕获异常的完整格式：**

+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">try</mark>：里面的代码表示可能会发生异常的代码
+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">catch</mark>：try 的代码发生异常，catch 就会去接收异常，接收到异常就会执行里面的代码
+ <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">finally</mark>：无论 try 是否出现异常，最后都会执行

**捕获异常的 4 个注意点：**

1. **没遇到问题**：try 中没有遇到问题，就不会执行 catch 里的代码，而是把 try 里面所有的代码全部执行完毕，跳过 catch 往下执行
2. **遇到多个问题**：try 中遇到多个问题，就要写多个 catch。catch 小括号中的参数是父子关系（多态）去接收异常，异常符合才会进入对应的 catch；如果多个异常之间存在父子关系，那么 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">父类一定要写在最下面</mark>
3. **没有被捕获**：try 中遇到的问题没有被捕获，那就相当于 try...catch 的代码白写了，最终还是会交给虚拟机进行处理
4. **try 中出错**：try 中遇到了问题，try 下面的代码就不会执行，直接跳到对应的 catch 当中执行语句体；但如果没有对应的 catch 与之匹配，那么还是会交给虚拟机进行处理  

>**自定义异常：**  

我们写代码的时候，时常会抛出异常，但是抛出的异常是Java定义好的很多时候可能表达不了自己写的程序出的是什么异常。这时我们就可以去自定义异常了。  
<span style="background-color:#E3F0FF;border-radius:8px;padding:1px 6px;">自定义运行时异常代码示例：</span>  
```java
/**
 * 自定义运行时异常
 * 继承 RuntimeException，无需显式捕获或声明抛出
 */
public class MyRuntimeException extends RuntimeException {

    // 无参构造
    public MyRuntimeException() {
        super();
    }

    // 带消息的构造
    public MyRuntimeException(String message) {
        super(message);
    }

    // 带消息和原因的构造
    public MyRuntimeException(String message, Throwable cause) {
        super(message, cause);
    }

    // 带原因的构造
    public MyRuntimeException(Throwable cause) {
        super(cause);
    }
}
```  
<span style="background-color:#E3F0FF;border-radius:8px;padding:1px 6px;">自定义编译时时异常代码示例：</span>    
```java
/**
 * 自定义编译时异常（受检异常）
 * 继承 Exception，必须由调用者捕获或声明抛出（throws）
 */
public class MyCheckedException extends Exception {

    // 无参构造
    public MyCheckedException() {
        super();
    }

    // 带消息的构造
    public MyCheckedException(String message) {
        super(message);
    }

    // 带消息和原因的构造
    public MyCheckedException(String message, Throwable cause) {
        super(message, cause);
    }

    // 带原因的构造
    public MyCheckedException(Throwable cause) {
        super(cause);
    }
}
```

<hr style="height:3px;background:linear-gradient(90deg,#ADD8E6,#FFD966,#ADD8E6);border:none;border-radius:3px;">

> [!TIP] 提醒
> 下面会讲述不同 IO 流的用法与区别~

# 不同种类的IO流🎯

## IO流的分类

IO 流可以从**两个维度**来分类：

| 分类方式 | 类型 | 说明 |
| --- | --- | --- |
| 按照流向分类 | <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">输入流</mark> | 读取数据 |
| | <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">输出流</mark> | 写出数据 |
| 按照操作文件类型分类 | <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">字节流</mark> | 可以操作所有类型的数据（音频、视频、图片...） |
| | <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">字符流</mark> | 只能操作纯文本文件（能用记事本打开、能读得懂的就是纯文本文件） |

## 基本流与高级流

**什么是基本流？**

基本流直接连接数据源，可以读写字节 / 字符：

| 接口 | 类型 | 作用 |
| --- | --- | --- |
| `OutputStream` | 字节输出流 | 写出字节数据 |
| `InputStream` | 字节输入流 | 读取字节数据 |
| `Writer` | 字符输出流 | 写出字符数据 |
| `Reader` | 字符输入流 | 读取字符数据 |

> [!TIP] 注意：上面这些都是接口
> 要使用这些 IO 流，就得调用它们的**实现类**。比如你要用字节读取的方式读取本地文件，那么在前面加个 File 就行了——`FileInputStream`，后面的高级流也是一样的。

> [!TIP] 字节流 vs 字符流
> 字节流读取数据是一个字节一个字节地读取、写出的；而字符流是根据系统默认或指定的字符集去读取、写出的——一次会读写一个字节或者读多个字节。

**什么是高级流？**

高级流底层还是用基本流去读写数据，但因为拥有 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">特有方法或特性</mark>，读写的效率更高了：

| 流名称 | 类型 | 特点 / 特有方法 |
| --- | --- | --- |
| `BufferedOutputStream` | 字节缓冲输出流 | 写出数据的时候会有**缓冲区** |
| `BufferedInputStream` | 字节缓冲输入流 | 读取数据的时候会有**缓冲区** |
| `BufferedWriter` | 字符缓冲输出流 | 写出数据的时候会有缓冲区（Writer 自身也有）；特有方法 `newLine()` 可以**跨平台换行** |
| `BufferedReader` | 字符缓冲输入流 | 读取数据的时候会有缓冲区（Reader 自身也有）；特有方法 `readLine()` 可以**一次读取一整行** |
| `InputStreamReader` | 转换输入流 | 把**字节流转换成字符流**，让字节流拥有字符流的特性——一次读一个或多个字节，再把字节转换成字符 |
| `OutputStreamWriter` | 转换输出流 | 把**字节流转换成字符流**，让字节流拥有字符流的特性——把内存中的字符转换成字节，再一次写一个或多个字节，可以使用字符流的方法 |
| `ObjectOutputStream` | 序列化流 | 可以把**对象写到文件当中** |
| `ObjectInputStream` | 反序列化流 | 可以把**文件中的对象读到内存中** |
| `PrintStream` | 字节打印流 | 可以把数据写到文件中，**没有缓冲区** |
| `PrintWriter` | 字符打印流 | 可以把数据写到文件中，**有缓冲区** |
| `ZipInputStream` | 解压缩流 | 可以把**压缩包解压成文件** |
| `ZipOutputStream` | 压缩流 | 可以把**文件变成压缩包** |

> [!WARNING] 序列化流注意事项
> + 使用序列化流的时候，要写出的对象一定要实现 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">Serializable</mark> 接口——这个可以理解为"许可证"，没有这个许可证，你就不能把这个对象写出到文件中
> + 使用反序列化流的时候，会出现**序列号不匹配**的情况。这是因为在读取之前更改了原本的对象，导致序列号变更，所以在写出之前要把 <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">序列号固定下来</mark>
> + <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">transient（瞬间关键字）</mark>：当你不想让某个成员变量或方法被序列化时，可以在修饰符后加上这个关键字，避免被序列化

> [!TIP] 打印流的特点
> + **特点 1**：打印流只能操作文件的目的地，不操作数据源
> + **特点 2**：特有的写出方法可以实现数据**原样写出**——例如：打印 `97`，文件中也是 `97`
> + **特点 3**：特有的写出方法可以实现**自动刷新、自动换行**。特有方法：
>   - `println`：打印任意数据，自动刷新，自动换行
>   - `print`：打印任意数据，不换行
>   - `printf`：带占位符的打印语句，不换行

<hr style="height:3px;background:linear-gradient(90deg,#ADD8E6,#FFD966,#ADD8E6);border:none;border-radius:3px;">

# 总结🎉

到这里，IO 流的知识就全部讲完啦喵~ 最后我们再来快速回顾一下整篇笔记：

| 知识点 | 一句话总结 |
| --- | --- |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">IO流</mark> | 可以操作**任何数据源**的 API（代码工具），比如文件、内存、网络 |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">File / URL</mark> | 通过**路径 / 链接**来定位数据源的位置 |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">异常处理</mark> | 编译时异常必须解决：**声明抛出** 或 **try...catch...finally 捕获** |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">基本流</mark> | 直接连接数据源，读写**字节 / 字符** |
| <mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">高级流</mark> | 底层还是用基本流，靠**特有方法或特性**提升读写效率 |

> [!TIP] 学习小建议
> + **动手敲一遍**：每个流都写个小 Demo 跑一跑，比看十遍记得牢
> + **先记住分类**：输入 / 输出、字节 / 字符，把这两个维度刻在脑子里，后面学什么都好归类
> + **多留意特有方法**：`newLine()`、`readLine()`、`println` 这些才是高级流的精华
> + **序列化记得加"许可证"**：写对象前先实现 `Serializable`，再固定好序列号

最后送大家一句话：<mark style="background-color:#FFE9A8;border-radius:8px;padding:1px 6px;color:inherit;">IO 流并不难，多敲多练，熟能生巧</mark>喵~ 💧

希望这篇笔记能帮到你，我们下次再见喵~ 🐱✨

<hr style="height:3px;background:linear-gradient(90deg,#ADD8E6,#FFD966,#ADD8E6);border:none;border-radius:3px;">

