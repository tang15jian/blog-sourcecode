# Go语言简介

参考
> [1] Go 和 Golang 有什么关系？ https://blog.csdn.net/EDDYCJY/article/details/120837946
> [2] Go语言一个包下只能有一个main()函数怎么办？https://codeplayer.vip/p/j7tek
> [3] Go 报错：变量未使用 —— xxx declared and not used  https://learnku.com/go/t/46477


## 官网

https://golang.google.cn

开发文档：

https://pkg.go.dev/std

https://studygolang.com/pkgdoc

## Go or Golang ？

![go1.png](/blog/lang/go/go1.png)
这一门语言称为 “Go”，不叫 “Golang”，也不叫 “GO”。“golang” 只是网站的地址，而不是语言的名称。

但可能又有小伙伴疑惑了，那为什么 “Golang” 这个别名，如此之火。到底是为什么？

这里一共有三点原因，分别是：站点地址（Go FAQ 提到）、搜索引擎、社区和论坛等。

### Go 站点地址
  
Go 团队所期望的 https://go.org 早就被注册，从网站的底部标识来看，2008 年起建站：

所以 Go 语言只能使用 https://golang.org，你也会 https://pkg.go.dev 和 https://golang.org、https://godoc.org，存在多个域名，并不统一。

因此作为 Go 开发者所常用官方站点，自然而然 golang 这一个语言标识就深深地被记住了，一直沿用至今。

同时域名为 “golang” 关键字，自然会大幅度的影响到 Go 资料搜索引擎的收录，是一个非常重要的因素。

### 搜索引擎
  
在早年 Go 语言还不知名时，用 go 关键字去搜索资料会非常的困难。这是各大搜索引擎早年的一个槽点（reddit 很多吐槽）。

因为单一的 go 关键字过于广泛了，很多人会直接用 golang 关键字来搜资料，反而会更能看到一些与 Go 真正相关的。


### 社区和论坛
  
在社区、论坛等，也有类似的问题。因为占位、重名、认知等原因。像是 segmentfault、twitter 叫 golang。掘金叫 Go，各有不同。


这点难以改善，毕竟各家都是不同企业的。所以难受的点是用户，搜了 Go，可能搜不到，又跑去搜 Golang 才可以。

再看看国外的论坛，在 Google 群组 golang-nuts 和 golang-dev 也有类似偏差。

**基本可以明确 “Golang” 更多会被用在搜索和标签上，能够保证搜索和标签查询的结果**。[1]



<!-- ## Go语言核心开发团队

Ken Thompson（肯·汤普森）：1983年图灵奖（Turing Award）和1998年美国国家技术奖（National Medal of Technology）得主。他与Dennis Ritchie是Unix的原创者。Thompson也发明了后来衍生出C语言的B程序语言，同时也是C语言的主要发明人。

Rob Pike（罗布-派克）：曾是贝尔实验室（Bell Labs）的Unix团队，和Plan 9操作系统计划的成员。
他与Thompson共事多年，并共创出广泛使用的UTF-8字元编码。

Robert Griesemer：曾协助制作Java的HotSpot编译器，和Chrome浏览器的JavaScript引擎V8。

![image-20200718103112309](images/image-20200718103112309.png) -->

## Google为什么要创建Go

- 计算机硬件技术更新频繁，性能提高很快。目前主流的编程语言发展明显落后于硬件，不能合理利用多核多CPU的优势提升软件系统性能。
- 软件系统复杂度越来越高，维护成本越来越高，目前缺乏一个足够简洁高效的编程语言。
  - 现有编程语言存在：风格不统一、计算能力不够、处理大并发不够好
- 企业运行维护很多c/c++的项目，c/c++程序运行速度虽然很快，但是编译速度确很慢，同时还存在内存泄漏的一系列的困扰需要解决。

## Go语言发展历史

- 2007年，谷歌工程师Rob Pike，Ken Thompson和Robert Griesemer开始设计一门全新的语言，这是Go语言的最初原型。
- 2009年11月10日，Google将Go语言以开放源代码的方式向全球发布。
- 2015年8月19日，Go1.5版发布，本次更新中移除了”最后残余的c代码”
- 2017年2月17日，Go语言Go1.8版发布。
- 2017年8月24日，Go语言Go1.9版发布。
- 2018年2月16日，Go语言Go1.10版发布。

## Go语言的特点

Go语言保证了既能到达静态编译语言的安全和性能，又达到了动态语言开发维护的高效率，使用一个表达式来形容Go语言：Go=C+Python，说明Go语言既有C静态语言程序的运行速度，又能达到Python动态语言的快速开发。

- 从c语言中继承了很多理念，包括表达式语法，控制结构，基础数据类型，调用参数传值，指针等等，也保留了和C语言一样的编译执行方式及弱化的指针。
```go
// go语言的指针使用特点
func testPtr(num *int)  {
	*num = 20
}
```
- 引入包的概念，用于组织程序结构，Go语言的一个文件都要归属于一个包，而不能单独存在。
- 垃圾回收机制，内存自动回收，不需开发人员管理 【稍微不注意就会出现内存泄漏】
- 天然并发【重要特点】
  - 从语言层面支持并发，实现简单
  - goroutine，轻量级线程，可实现大并发处理，高效利用多核。
  - 基于CPS并发模型（Communicating Sequential Processes）实现
- 吸收了管道通信机制，形成go语言特有的管道channel，通过管道channel，可以实现不同的goroute之间的相互通信
- 函数返回多个值（实例代码）
- 新的创新：比如切片slice，延时执行defer等

## Hello Go

我们写一个最简单的入门代码，在控制台输出hello go！

```go
package main
// fmt包中提供格式化，输入和输出的函数
import "fmt"
func main() {
	fmt.Println("hello go!")
}
```

## Golang执行流程

我们可以通过以下命令来进行操作

- go build hello.go    -> hello.exe
- go  run  hello.go

![go2.png](/blog/lang/go/go2.png)

### 两种执行流程

- 如果我们先编译生成了可执行文件，那么我们可以将该可执行文件拷贝到没有go开发环境的机器上，然可以运行
- 如果我们是直接go run go源代码，那么如果要在另外一个机器上运行，也需要go开发环境，否则无法执行。
- 在编译时，编译器会将程序运行依赖的库文件包含在可执行文件中，所以，可执行文件变大了很多。

### 什么是编译

- 有了go源文件，通过编译器将其编译成机器可以识别的二进制码文件。
- 在该源文件目录下，通过go build 对hello.go文件进行编译。可以指定生成的可执行文件名，在windows下必须是.exe后缀。
- 如果程序没有错误，没有任何提示，会在当前目录下会出现一个可执行文件（windows下是.exe Linux下是一个可执行文件），该文件是二进制码文件，也是可以执行的程序。
- 如果程序有错误，编译时，会在错误的那行报错。

## Go语言开发注意事项

- Go源文件以“go”为扩展名
- Go应用程序的执行入口是main()方法
- Go语言严格区分大小写。
- Go方法由一条条语句构成，每个语句后不需要分号（Go语言会在每行后自动加分号），这也体现出Golang的简洁性。
- Go编译器是一行行进行编译的，因此我们一行就写一条语句，不能把多条语句写在同一个，否则报错
- Go语言定义的变量或者import的包如果没有使用到，代码不能编译通过
- 大括号都是成对出现的，缺一不可。

## Go语言一个包下只能有一个main()函数怎么办？

Go语言的官方文档中上来就是一个很简单的Hello World。
```go
// 你可以编辑这里的代码！
// 点击这里然后开始输入。
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

然而很多小伙伴却发现在一个包中写多个main()函数，却报错了。

- 在 Java 中，每一个 Java 文件都可以包含一个main()方法，并且可以独立启动，这对于学习 Java 的同学来说太方便了。

- 然而 Go 却不同，任何一个包中只能有一个Go文件带有main()函数

我在B站上看到一个视频，是一个培训老师在上课，他为了避免这个问题，就每写一个main()函数就新建一个包，这个包中基本就放一个文件main.go。效率真的很低，而且不便于浏览代码，要一层层的点文件夹。

还有人采用代码注释的方法，在main()函数中调用各种不同的函数，每次都注释掉无关的其他方法，这样真的好累，而且不便于版本管理，为了一个小小的测试，就多提交一次 commit 是无意义的。

### 编写可测试的Go代码

Go语言作为一门工程化语言，提供了非常简单而且实用的编写单元测试的能力。而且每个测试方法都可以单独执行，也可以通过一个命令全部执行。

1. 文件名必须以xxx_test.go命名；

2. 方法名称必须是Test[^a-z]开头，而且 Test 的后缀部分第一个字符必须大写；

3. 方法参数必须是 t *testing.T。

一旦我们按照这个要求写好了，VS Code会自动帮我们加上可执行的按钮，如图：

![go5.png](/blog/lang/go/go5.png)


当然，你也可以通过命令执行：`go test [flags] [packages]`

类型 testing.T 有以下方法：

```go
// 打印日志。对于测试，会在失败或指定 -test.v 标志时打印。对与基准测试，总是打印，避免因未指定 -test.v 带来的测试不准确
func (c *T) Log(args ...interface{})
func (c *T) Logf(format string, args ...interface{})


// 标记函数失败，继续执行该函数
func (c *T) Fail()
// 标记函数失败，调用 runtime.Goexit 退出该函数。但继续执行其它函数或基准测试。
func (c *T) FailNow()
// 返回函数是否失败
func (c *T) Failed() bool


// 等同于 t.Log + t.Fail
func (c *T) Error(args ...interface{})
// 等同于 t.Logf + t.Fail
func (c *T) Errorf(format string, args ...interface{})


// 等同于 t.Log + t.FailNow
func (c *T) Fatal(args ...interface{})
// 等同于 t.Logf + t.FailNow
func (c *T) Fatalf(format string, args ...interface{})


// 将调用函数标记标记为测试助手函数。
func (c *T) Helper()

// 返回正在运行的测试或基准测试的名称
func (c *T) Name() string

// 用于表示当前测试只会与其他带有 Parallel 方法的测试并行进行测试。
func (t *T) Parallel()

// 执行名字为 name 的子测试 f，并报告 f 在执行过程中是否失败
// Run 会阻塞到 f 的所有并行测试执行完毕。
func (t *T) Run(name string, f func(t *T)) bool


// 相当于 t.Log + t. SkipNow
func (c *T) Skip(args ...interface{})
// 将测试标记为跳过，并调用 runtime.Goexit 退出该测试。继续执行其它测试或基准测试
func (c *T) SkipNow()
// 相当于 t.Logf + t.SkipNow
func (c *T) Skipf(format string, args ...interface{})
// 报告该测试是否是忽略
func (c *T) Skipped() bool

```


## Go 报错：变量未使用 —— xxx declared and not used

编码时发现变量即使使用，但不在等式右边，仍然会报declared and not used 编译错误。
```go
	var x int
		var y int
		if l1 == nil {
			x = 0
		} else {
			x = l1.val
		}
```

这是 Go 语言的一个特性

> 存在未使用的变量可能表明存在错误 […] 为了项目的构建速度和便利性以及程序的可读性，Go 语言拒绝使用未使用的变量和包。Go FAQ：我可以停止对未使用的变量 / 导入的投诉吗？
https://golang.org/doc/faq#unused_variables_and_imports

但是 Go 语言，允许使用未使用的全局变量和函数参数。

解决方案：

如果你不想删除或注释掉一个未使用的变量或者包，则可以添加一个虚拟分配。

```go
func main() {
        var n int
        n = 5
        _ = n // n 现在被使用了
}
```