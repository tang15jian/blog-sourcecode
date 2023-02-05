# 版本概览

<!-- :::tip 此文为转载
- 来源：https://www.zhihu.com/question/360985479/answer/969066895
- 来源：https://www.zhihu.com/question/360985479/answer/1274722961
- 来源：https://baijiahao.baidu.com/s?id=1749917039132965540&wfr=spider&for=pc
:::

## java各版本市场占有率

只有Java 8, Java 11 和未来的Java 17 是长期支持版本（LTS），Oracle会支持3年，其他的只会支持6个月，新版本一出，就放弃老版本的技术支持。

![java version](/blog/javaversion/javaversion.PNG)

这种快速的发布有好处吗？

有 ！ 小步快跑一直是我们软件开发的利器，采用迭代的方式，每次发布一部分功能，推向开发人员去验证，典型的敏捷思路。

但是这种好处更有利于JDK的开发者，对使用Java的个人和公司来说，想要跟上每六个月就要升级的步伐，实在是太难了。JDK是个非常核心的基础设施， 除了安全漏洞，谁没事去升级生产环境的JDK啊？出了问题谁负责？ 所以，按道理讲大家都会去找那些LTS的版本来升级，例如Java 11， 但是事实证明大部分人还在固守Java 8 :


![java version](/blog/javaversion/adoption.PNG)

## Java8 仍可堪大用

**收费**  

从2019年1月开始，Oracle JDK 开始对 Java SE 8 之后的版本开始进行商用收费，确切的说是 8u201/202 之后的版本。如果你用 Java 开发的功能如果是用作商业用途的，如果还不想花钱购买的话，能免费使用的最新版本是 8u201/202。当然如果是个人客户端或者个人开发者可以免费试用 Oracle JDK 所有的版本。

**对开发有利的重大特性升级很少，吸引力不够。**  

 在过去的十几年中，Java相继引入的泛型、注解、NIO、函数式编程等核心功能，极大地影响了应用程序开发的方式，你能想象现在的Java中没有注解会是什么样子吗？ 这几年的Java版本中，就缺乏这种重大功能的升级了，我把我有点印象的功能升级列一下：


| 版本   |                        重要特性                         |
| :----- | :-----------------------------------------------------: |
| Java9  |        模块化系统 Java Shell：交互式命令行控制台        |
| Java10 |                    局部变量类型推导                     |
| Java11 | 加强：Stream,String,Collection;标准化的HTTP Client；ZGC |
| Java12 |                    Switch表达式扩展                     |
| Java13 |                   重新实现Socket API                    |

&emsp;
&emsp;

Java 9引入了模块化系统，这是个看起来很美的特性，可是对程序员来说，这是一个破坏性的更新，因为JDK做了模块化，但是很多第三方库没有做模块化， 如果想让自己的项目也模块化，很有可能是一次不断填坑的经历，尤其在使用第三方库的时候。 

Java 11的ZGC是个有吸引力的特性，它的设计目标是：支持TB级内存容量，GC暂停时间低（<10ms），对整个程序吞吐量的影响小于15%，确实挺让人激动的！如果真的实现了，程序员就可以可劲儿造对象，而不用考虑GC了，可惜这仍然是个实验性质的版本。 至于局部变量类型推导，也只是方便了变量的声明而已。

一个JDK的版本如果想被广泛采用，一定得能提升开发效率（如泛型、注解），带来变革，这样才有吸引力， 如果给程序员们带来了麻烦， 大家就会用脚投票了。Java 8 已经发布5年多了，我估计再用两三年不成问题 -->

## 新版本推陈出新

:::tip 参考
- [1]https://zhuanlan.zhihu.com/p/480293185

- [2]https://blog.oxings.com/article/31.html

- [3]https://blog.csdn.net/best_luxi/article/details/122543074
:::

2022年Spring6和 SpringBoot3相继推出，在此之前，Java社区一直是"新版任你发，我用Java 8"，不管新版本怎么出，很少有人愿意升级。
这一次，Spring 直接来了个大招，SpringBoot3和Spring6的最低依赖就是JDK17！跨过 JDK 8-16，直接升级到 JDK 17。那么为什么是 JDK 17呢？


### 为什么是JDK17
这么多新版本的 JDK，而且2022年还会推出 JDK 18 和 JDK 19，为什么 Spring 选择了 JDK 17呢。

主要是因为他是一个 Oracle官宣可以免费商用的LTS版本，所谓 LTS，是 Long Term Support，也就是官方保证会长期支持的版本。
![java1](/blog/java/java1.PNG)

上面这张图是 Oracle 官方给出的 Oracle JDK 支持的时间线。可以看得到，JDK 17 最多可以支持到 2029 年 9 月份。按照技术更新迭代的速度，这次免费商用 8 年可谓是良苦用心，为的就是让使用者放心大胆地将 JDK 升级到 JDK 17(不过JDK 8 支持的时间更长，可以延长到 2030 年 12 月,JDK8可谓是YYDS！)

从 JDK 诞生到现在，还在长期支持的版本主要有 JDK 7、JDK 8 、JDK 11以及 JDK 1，JDK 17 将是继 Java 8 以来最重要的LTS版本，是 Java 社区八年努力的成果。

一直以来，Java8 都是 Java 社区心头的痛，Java8提供了很多特性，比如Lambda 表达式、Optional 类，加上Java8超长的支持时间，都导致了JDK8的使用至今。它代表着以稳定性为主的企业管理层与拥抱变化为主的程序猿之间的拉锯战。不升！成为各大厂心照不宣的选择。现在，这种平衡或将打破。因为 Java 届的霸主框架 SpringBoot，选择了最小支持的 Java lts 版本，就是最新的 Java17。
那么接下来，让我们看看，从JDK8到JDK17，Java 社区八年努力的成果有哪些？

### JDK9新特性（2017年9月）

- 模块化
  
- 提供了List.of()、Set.of()、Map.of()和Map.ofEntries()等工厂方法
  
- 接口支持私有方法
  
- Optional 类改进
  
- 多版本兼容Jar包
  
- JShell工具
  
- try-with-resources的改进
  
- Stream API的改进
  
- 设置G1为JVM默认垃圾收集器
  
- 支持http2.0和websocket的API

**重要特性：主要是API的优化，如支持HTTP2的Client API、JVM采用G1为默认垃圾收集器**



### JDK10新特性（2018年3月）

- 局部变量类型推断，类似JS可以通过var来修饰局部变量，编译之后会推断出值的真实类型
  
- 不可变集合的改进
  
- 并行全垃圾回收器 G1，来优化G1的延迟
  
- 线程本地握手，允许在不执行全局VM安全点的情况下执行线程回调，可以停止单个线程，而不需要停止所有线程或不停止线程
  
- Optional新增orElseThrow()方法
  
- 类数据共享
  
- Unicode 语言标签扩展
  
- 根证书

**重要特性：通过var关键字实现局部变量类型推断，使Java语言变成弱类型语言、JVM的G1垃圾回收由单线程改成多线程并行处理，降低G1的停顿时间。**



### JDK11新特性（2018年9月）（LTS版本）

- 增加一些字符串处理方法

- 用于 Lambda 参数的局部变量语法

- Http Client重写，支持HTTP/1.1和HTTP/2 ，也支持 websockets

- 可运行单一Java源码文件，如：java Test.java

- ZGC：可伸缩低延迟垃圾收集器，ZGC可以看做是G1之上更细粒度的内存管理策略。由于内存的不断分配回收会产生大量的内存碎片空间，因此需要整理策略防止内存空间碎片化，在整理期间需要将对于内存引用的线程逻辑暂停，这个过程被称为"Stop the world"。只有当整理完成后，线程逻辑才可以继续运行。（并行回收）

- 支持 TLS 1.3 协议

- Flight Recorder（飞行记录器），基于OS、JVM和JDK的事件产生的数据收集框架

- 对Stream、Optional、集合API进行增强

**重要特性：对于JDK9和JDK10的完善，主要是对于Stream、集合等API的增强、新增ZGC垃圾收集器。**


### JDK12新特性（2019年3月）

- Switch 表达式扩展，可以有返回值

- 新增NumberFormat对复杂数字的格式化

- 字符串支持transform、indent操作

- 新增方法Files.mismatch(Path, Path)

- Teeing Collector

- 支持unicode 11

- Shenandoah GC，新增的GC算法

- G1收集器的优化，将GC的垃圾分为强制部分和可选部分，强制部分会被回收，可选部分可能不会被回收，提高GC的效率
  
**重要特性：switch表达式语法扩展、G1收集器优化、新增Shenandoah GC垃圾回收算法。**


### JDK13新特性（2019年9月）

- Switch 表达式扩展，switch表达式增加yield关键字用于返回结果，作用类似于return，如果没有返回结果则使用break

- 文本块升级 """ ，引入了文本块，可以使用"""三个双引号表示文本块，文本块内部就不需要使用换行的转义字符

- SocketAPI 重构，Socket的底层实现优化，引入了NIO

- FileSystems.newFileSystem新方法

- ZGC优化，增强 ZGC 释放未使用内存，将标记长时间空闲的堆内存空间返还给操作系统，保证堆大小不会小于配置的最小堆内存大小，如果堆最大和最小内存大小设置一样，则不会释放内存还给操作系统

**重要特性：ZGC优化，释放内存还给操作系统、socket底层实现引入NIO。**



### JDK14新特性（2020年3月）

- instanceof模式匹配，instanceof类型匹配语法简化，可以直接给对象赋值，如if(obj instanceof String str),如果obj是字符串类型则直接赋值给了str变量

- 引入Record类型，类似于Lombok 的@Data注解，可以向Lombok一样自动生成构造器、equals、getter等方法；

- Switch 表达式-标准化

- 改进 NullPointerExceptions提示信息，打印具体哪个方法抛的空指针异常，避免同一行代码多个函数调用时无法判断具体是哪个函数抛异常的困扰，方便异常排查；

- 删除 CMS 垃圾回收器


### JDK15新特性（2020年9月）

- EdDSA 数字签名算法

- Sealed Classes（封闭类，预览），通过sealed关键字修饰抽象类限定只允许指定的子类才可以实现或继承抽象类，避免抽象类被滥用

- Hidden Classes（隐藏类）

- 移除 Nashorn JavaScript引擎

- 改进java.net.DatagramSocket 和 java.net.MulticastSocket底层实现


### JDK16新特性（2021年3月）

- 允许在 JDK C ++源代码中使用 C ++ 14功能

- ZGC性能优化，去掉ZGC线程堆栈处理从安全点到并发阶段

- 增加 Unix 域套接字通道

- 弹性元空间能力

- 提供用于打包独立 Java 应用程序的 jpackage 工具

**JDK16相当于是将JDK14、JDK15的一些特性进行了正式引入，如instanceof模式匹配（Pattern matching）、record的引入等最终到JDK16变成了final版本。**


### JDK17新特性（2021年9月）（LTS版本）

- Free Java License

- JDK 17 将取代 JDK 11 成为下一个长期支持版本

- Spring 6 和 Spring Boot 3需要JDK17

- 移除实验性的 AOT 和 JIT 编译器

- 恢复始终执行严格模式 (Always-Strict) 的浮点定义

- 正式引入密封类sealed class，限制抽象类的实现

- 统一日志异步刷新，先将日志写入缓存，然后再异步刷新

**虽然JDK17也是一个LTS版本，但是并没有像JDK8和JDK11一样引入比较突出的特性，主要是对前几个版本的整合和完善。**



## 重要特性


### Java 模块化

JPMS（Java Platform Module System）是Java 9发行版的核心亮点。它也被称为Jigshaw项目[1]。模块是新的结构，就像我们已经有包一样。使用新的模块化编程开发的应用程序可以看作是交互模块的集合，这些模块之间具有明确定义的边界和依赖关系。

JPMS包括为编写模块化应用程序提供支持，以及将JDK源代码模块化。JDK 9 附带了大约 92 个模块（在 GA 版本中可以进行更改）。Java 9 Module System有一个"java.base"模块。它被称为基本模块。它是一个独立的模块，不依赖于任何其他模块。默认情况下，所有其他模块都依赖于"java.base"。

在java模块化编程中：
一个模块通常只是一个 jar 文件，在根目录下有一个文件module-info.class。

要使用模块，请将 jar 文件包含到modulepath而不是classpath. 添加到类路径的模块化 jar 文件是普通的 jar 文件，module-info.class文件将被忽略。

典型的module-info.java类如下所示：
```bash
module helloworld {         exports com.alibaba.eight; } module test {         requires helloworld; }
```

总结： **模块化的目的，是让jdk的各个组件可以被分拆，复用和替换重写。** 比如对java的gui不满意，可以自己实现一个gui，对java的语法不满意，可以把javac替换成其他语言和其他语言的编译器，比如kotlin和kotlinc等，没有模块化，几乎很难实现，每次修改某个模块，总不能把整个jdk给重新编译一遍，再发布一个整个sdk吧，模块化可以帮助更有效的定制化和部署


### HTTP客户端API-响应式流实现的HttpClient

Java 使用HttpURLConnection进行HTTP通信已经很长一段时间了。但随着时间的推移，要求变得越来越复杂，应用程序的要求也越来越高。在 Java 11 之前，开发人员不得不求助于功能丰富的库，如Apache HttpComponents或OkHttp等。
我们看到Java 9发布包含一个HttpClient实现作为实验性功能。它随着时间的推移而发展，现在是 Java 11 的最终功能。现在 Java 应用程序可以进行 HTTP 通信，而无需任何外部依赖。
作为JDK11中正式推出的新Http连接器，支持的功能还是比较新的，主要的特性有：
完整支持HTTP 2.0 或者HTTP 1.1

支持 HTTPS/TLS

有简单的阻塞使用方法

支持异步发送，异步时间通知

支持WebSocket

支持响应式流

HTTP2.0其他的客户端也能支持，而HttpClient使用CompletableFuture作为异步的返回数据。WebSocket的支持则是HttpClient的优势。响应式流的支持是HttpClient的一大优势。
HttpClient中的NIO模型、函数式编程、CompletableFuture异步回调、响应式流让HttpClient拥有极强的并发处理能力，所以其性能极高，而内存占用则更少。


## 语法糖


### 本地变量类型推断

在Java 10之前版本中，我们想定义定义局部变量时。我们需要在赋值的左侧提供显式类型，并在赋值的右边提供实现类型：

MyObject value = new MyObject();

在Java 10中，提供了本地变量类型推断的功能，可以通过var声明变量：

var value = new MyObject();

本地变量类型推断将引入“var”关键字，而不需要显式的规范变量的类型。

其实，所谓的本地变量类型推断，也是Java 10提供给开发者的语法糖。

虽然我们在代码中使用var进行了定义，但是对于虚拟机来说他是不认识这个var的，在java文件编译成class文件的过程中，会进行解糖，使用变量真正的类型来替代var


### Stream API 改进

Collectors.teeing()

teeing 收集器已公开为静态方法Collectors::teeing。该收集器将其输入转发给其他两个收集器，然后将它们的结果使用函数合并。

示例：
```java
List<Student> list = Arrays.asList( 
    new Student("唐一", 55),
    new Student("唐二", 60),
    new Student("唐三", 90));
//平均分 总分
String result = list.stream().collect(Collectors.teeing(Collectors.averagingInt(Student::getScore),Collectors.summingInt(Student::getScore),(s1, s2) -> s1 + ":" + s2));
//最低分  最高分
String result2 = list.stream().collect(Collectors.teeing(Collectors.minBy(Comparator.comparing(Student::getScore)),        Collectors.maxBy(Comparator.comparing(Student::getScore)),(s1, s2) -> s1.orElseThrow() + ":" + s2.orElseThrow()));
System.out.println(result);System.out.println(result2);
```

添加Stream.toList方法(jdk16)
```java
List<String> list = Arrays.asList("1", "2", "3");
//之前这样写
List<Integer> oneList = list.stream().map(Integer::parseInt).collect(Collectors.toList());
//现在可以这样写
List<Integer> twoList = list.stream()    .map(Integer::parseInt)    .toList();
```


### Switch表达式改进

#### 支持箭头表达式（jdk12预览 jdk14标准）

此更改扩展了switch 语句以便它可以用作语句或表达式。不必为break每个 case 块定义一个语句，我们可以简单地使用箭头语法。

```java
boolean isWeekend = switch (day) {  
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> false;
    case SATURDAY, SUNDAY -> true;
    default -> throw new IllegalStateException("Illegal day entry :: " + day);
    };
```

```java
int size = 3;
String cn = switch (size) {
    case 1 -> "壹";    
    case 2 -> "贰";    
    case 3, 4 -> "叁";    
    default -> "未知";
    };
    System.out.println(cn);//要使用此预览功能，我们必须在应用程序启动期间使用–enable-preview标志明确指示 JVM。
```


#### yield关键字（jdk13）

使用yield，我们现在可以有效地从 switch 表达式返回值，并能够更容易实现策略模式。

```java
public class SwitchTest {    
    public static void main(String[] args) {        
        var me = 4;        
        var operation = "平方";        
        var result = switch (operation) {            
            case "加倍" -> {                
                yield me * 2;           
                 }            
            case "平方" -> {                
                yield me * me;            
                }            
            default -> me;        
        };
        System.out.println(result);    
        }
    }
```


### 文本块改进（jdk13）

早些时候，为了在我们的代码中嵌入 JSON，我们将其声明为字符串文字：

```json
String json  = "{\r\n" + "\"name\" : \"lingli\",\r\n" + "\"website\" : \"https://www.alibaba.com/\"\r\n" + "}";
```

现在让我们使用字符串文本块编写相同的 JSON ：

```json
String json = """ {         
    "name" : "Baeldung",         
    "website" : "https://www.alibaba.com/"}""";
```

很明显，不需要转义双引号或添加回车。通过使用文本块，嵌入的 JSON 更易于编写，更易于阅读和维护。


### instanceof 的模式匹配（jdk14出预览，jdk16最终确认）

之前：
```java
Object obj = "大阳";if (obj instanceof String) {    String t = (String) obj;    // TODO}
```

现在：
```java
Object obj = "大阳";if (obj instanceof String t) {    // TODO 此时t已经是String类型了}
```



### record记录类（jdk16正式）

传统的Java应用程序通过创建一个类，通过该类的构造方法实例化类，并通过getter和setter方法访问成员变量或者设置成员变量的值。有了record关键字，你的代码会变得更加简洁。
```java
/** * record 记录类 * 你也可以覆写equals() hashCode() toString()方法，不用写get、set了 * @author DAYANG */

record User(String name, Integer age) {        
    @Override    
    public String toString() {        
        return "User[" +                
        "name='" + name + '\'' +                
        ", age=" + age +                
        ']';    
        }    
        
        @Override   
         public boolean equals(Object obj) {        
            return false;    
            }    
        @Override    
        public int hashCode() {        
            return 0;    
            }
    }
```

### 更多的API

isBlank()：如果字符串为空或字符串仅包含空格（包括制表符），则返回 true。注意与isEmpty() 不同，isEmpty()仅在长度为 0 时返回 true。

lines()：将字符串拆分为字符串流，每个字符串包含一行。

strip() ：分别从开头和结尾；

stripLeading()/stripTrailing()仅开始和仅结束删除空格。

repeat(int times)：返回一个字符串，该字符串采用原始字符串并按指定的次数重复该字符串。

readString()：允许从文件路径直接读取到字符串。

writeString(Path path)：将字符串直接写入指定路径处的文件。

indent(int level)：缩进字符串的指定量。负值只会影响前导空格。

transform(Function f)：将给定的 lambda 应用于字符串。


## JVM

### GC变化

JDK9: 设置G1为JVM默认垃圾收集器

JDK10：并行全垃圾回收器 G1，通过并行Full GC, 改善G1的延迟。目前对G1的full GC的实现采用了单线程-清除-压缩算法。JDK10开始使用并行化-清除-压缩算法。

JDK11：推出ZGC新一代垃圾回收器（实验性）,目标是GC暂停时间不会超过10ms，既能处理几百兆的小堆，也能处理几个T的大堆。

JDK14 ：删除CMS垃圾回收器;弃用 ParallelScavenge + SerialOld GC 的垃圾回收算法组合;将 zgc 垃圾回收器移植到 macOS 和 windows 平台

JDk 15 : ZGC (JEP 377) 和Shenandoah (JEP 379) 不再是实验性功能。默认的 GC 仍然是G1。

JDK16：增强ZGC，ZGC获得了 46个增强功能 和25个错误修复，控制stw时间不超过10毫秒


### 指标测试

#### 吞吐量比较

![java2](/blog/java/java2.PNG)

在吞吐量方面，Parallel 中 JDK 8 和 JDK 11 差距不大，JDK 17 相较 JDK 8 提升 15% 左右；G1 中 JDK 17 比 JDK 8 提升 18%；ZGC 在 JDK 11[2]引入，JDK 17 对比JDK 11 提升超过 20%。

#### 延迟比较

![java3](/blog/java/java3.PNG)

在 GC 延迟方面，JDK 17 的提升更为明显。我们可以看到为缩短 GC 暂停时间所做的努力都得到了回报,很多提升都是因为 GC 的改进。
在 Parallel 中 JDK 17 对比 JDK 8 和JDK 11 提升 40%；在 G1 中，JDK 11 对比 JDK 8 提升 26%，JDK 17 对比 JDK 8 提升接近 60%！ZGC 中 JDK 17 对比 JDK 11 提升超过 40%。

#### 暂停时间对比

![java4](/blog/java/java4.PNG)

我们可以看到JDK 17 中的 ZGC 远低于目标：亚毫秒级的暂停时间。G1 的目标是在延迟和吞吐量之间保持平衡，远低于其默认的目标：200 毫秒的暂停时间。ZGC 的设计会保证暂停时间不随堆的大小而改变，我们可以清楚地看到当堆扩大到 128GB 时的情况。从暂停时间的角度来看，G1比Parallel 更善于处理更大的堆，因为它能够保证暂停时间满足特定目标。

#### 资源占用

![java5](/blog/java/java5.PNG)

上图比较了三个不同收集器原生内存的使用峰值。由于从这个角度来看 Parallel 和 ZGC 都非常稳定，因此我们应该看一看原始数字。我们可以看到 G1 在这方面确实有所改进，主要原因是所有功能和增强功能都提高了记忆集管理的效率 。

总结：无论使用哪种收集器，与旧版本相比，JDK 17 [3]的整体性能都有很大的提升。在 JDK 8 中，Parallel是默认设置，但在 JDK 9 中改为了 G1。从那以后，G1 的改进速度就超过了 Parallel，但在有些情况下可能 Parallel 仍然是最佳选择。而 ZGC（JDK 15 正式使用）的加入，成为了第三种高性能替代方案。



## 总结

1. Spring带头猛冲，直接上JDK17。如果Spring6还支持Java8的话，那很多技术框架都要跟着Java8的兼容，与其这样不如由Spring带头，一起飞升Java17，不过有些框架还不支持JDK17。
   
2. 性能升级，光从java8换到java11，啥也没干性能直接就提升了10%（nio底层的重写），更何况一路到jdk17过程中的JVM相关优化。不过光是性能的优化还不足以吸引企业进行JDK升级，毕竟加机器就能解决，费不着各种升级改造，还可能有安全问题。
   
3. JDK21可能成为真正的经典版本。目前还没有Project loom功能，代表着没有协程，性能方面比有协程jdk差远了。比如阿里开源的jdk8,11,就有非侵入式协程。
   
从发展趋势看，Project loom功能在JDK19已经可预览了，可以发现该版本许多的java工具都开始针对loom进行升级，Project loom大概在JDK21进行正式推出，而JDK21又是一个长期支持版本 (LTS) ，值得期待。

各种servlet容器，还有jetty，netty，vert.x等，在它们最新版本的release note找到对应的升级标注，说，我们添加了某某支持，其中最重要的就是loom，或者叫做虚拟线程的支持, 可以预见一旦JDK21发行，很多软件都会跟上投入生产.
Project loom参考：https://open.atatech.org/articles/249741