# 其他类型

## 函数

### 函数定义

函数是组织好的、可重复使用的、用于执行指定任务的代码块

Go语言支持：函数、匿名函数和闭包

Go语言中定义函数使用func关键字，具体格式如下：

```go
    func 函数名(参数)(返回值) {
        函数体
    }
```

其中：

- 函数名：由字母、数字、下划线组成。但函数名的第一个字母不能是数字。在同一个包内，函数名也不能重名

示例

```go
    // 求两个数的和
    func sumFn(x int, y int) int{
        return x + y
    }
    // 调用方式
    sunFn(1, 2)
```

获取可变的参数，可变参数是指函数的参数数量不固定。Go语言中的可变参数通过在参数名后面加... 来标识。

注意：可变参数通常要作为函数的最后一个参数

```go
    func sunFn2(x ...int) int {
        sum := 0
        for _, num := range x {
            sum = sum + num
        }
        return sum
    }
    // 调用方法
    sunFn2(1, 2, 3, 4, 5, 7)
```

方法多返回值，Go语言中函数支持多返回值，同时还支持返回值命名，函数定义时可以给返回值命名，并在函数体中直接使用这些变量，最后通过return关键字返回

```go
    // 方法多返回值
    func sunFn4(x int, y int)(sum int, sub int) {
        sum = x + y
        sub = x -y
        return
    }
```

### 函数类型和变量

#### 定义函数类型

我们可以使用type关键字来定义一个函数类型，具体格式如下

```bash
    type calculation func(int, int) int 
```

上面语句定义了一个calculation类型，它是一种函数类型，这种函数接收两个int类型的参数并且返回一个int类型的返回值。

简单来说，凡是满足这两个条件的函数都是calculation类型的函数，例如下面的add 和 sub 是calculation类型

```go
    type calc func(int, int) int
    // 求两个数的和
    func sumFn(x int, y int) int{
        return x + y
    }
    func main() {
        var c calc
        c = add
    }
```

#### 方法作为参数

```go
    /**
        传递两个参数和一个方法
    */
    func sunFn (a int, b int, sum func(int, int)int) int {
        return sum(a, b)
    }
```

或者使用switch定义方法，这里用到了匿名函数

```go
    // 返回一个方法
    type calcType func(int, int)int
    func do(o string) calcType {
        switch o {
            case "+":
                return func(i int, i2 int) int {
                    return i + i2
                }
            case "-":
                return func(i int, i2 int) int {
                    return i - i2
                }
            case "*":
                return func(i int, i2 int) int {
                    return i * i2
                }
            case "/":
                return func(i int, i2 int) int {
                    return i / i2
                }
            default:
                return nil

        }
    }

    func main() {
        add := do("+")
        fmt.Println(add(1,5))
    }
```

### 匿名函数

函数当然还可以作为返回值，但是在Go语言中，函数内部不能再像之前那样定义函数了，只能定义匿名函数。匿名函数就是没有函数名的函数，匿名函数的定义格式如下

```go
    func (参数)(返回值) {
        函数体
    }
```

匿名函数因为没有函数名，所以没有办法像普通函数那样调用，所以匿名函数需要保存到某个变量或者作为立即执行函数：

```go
    func main() {
        func () {
            fmt.Println("匿名自执行函数")
        }()
    }
```

### Golang中的闭包

#### 全局变量和局部变量

全局变量的特点：

- 常驻内存
- 污染全局

局部变量的特点

- 不常驻内存
- 不污染全局

#### 闭包

- 可以让一个变量常驻内存
- 可以让一个变量不污染全局

闭包可以理解成 “定义在一个函数内部的函数”。在本质上，闭包就是将函数内部 和 函数外部连接起来的桥梁。或者说是函数和其引用环境的组合体。

- 闭包是指有权访问另一个函数作用域中的变量的函数
- 创建闭包的常见的方式就是在一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量

注意：由于闭包里作用域返回的局部变量资源不会被立刻销毁，所以可能会占用更多的内存，过度使用闭包会导致性能下降，建议在非常有必要的时候才使用闭包。

```go
    // 闭包的写法：函数里面嵌套一个函数，最后返回里面的函数就形成了闭包
    func adder() func() int {
        var i = 10
        return func() int {
            return i + 1
        }
    }

    func main() {
        var fn = adder()
        fmt.Println(fn())
        fmt.Println(fn())
        fmt.Println(fn())
    }
```

最后输出的结果

```bash
    11
    11
    11
```

另一个闭包的写法，让一个变量常驻内存，不污染全局

```go
    func adder2() func(y int) int {
        var i = 10
        return func(y int) int {
            i = i + y
            return i
        }
    }

    func main() {
        var fn2 = adder2()
        fmt.Println(fn2(10))
        fmt.Println(fn2(10))
        fmt.Println(fn2(10))
    }
```

### defer语句

Go 语言中的defer 语句会将其后面跟随的语句进行延迟处理。在defer归属的函数即将返回时，将延迟处理的语句按defer定义的逆序进行执行，也就是说，先被defer的语句最后被执行，最后被defer的语句，最先被执行。

```go
    // defer函数
    fmt.Println("1")
    defer fmt.Println("2")
    fmt.Println("3")
    fmt.Println("4")
```

defer将会延迟执行

```bash
    1
    3
    4
    2
```

如果有多个defer修饰的语句，将会逆序进行执行

```go
    // defer函数
    fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    fmt.Println("4")
```

运行结果

```bash
    1
    4
    3
    2
```

如果需要用defer运行一系列的语句，那么就可以使用匿名函数

```go
    func main() {
        fmt.Println("开始")
        defer func() {
            fmt.Println("1")
            fmt.Println("2")
        }()
        fmt.Println("结束")
    }
```

运行结果

```bash
    开始
    结束
    1
    2
```



#### defer执行时机

在Go语言的函数中return语句在底层并不是原子操作，它分为返回值赋值和RET指令两步。而defer语句执行的时机就在返回值赋值操作后，RET指令执行前，具体如下图所示

![image-20200720220700249](images/image-20200720220700249.png)


### panic/revocer处理异常

Go语言中是没有异常机制，但是使用panic / recover模式来处理错误

- panic：可以在任何地方引发
- recover：只有在defer调用函数内有效

```go
    func fn1() {
        fmt.Println("fn1")
    }

    func fn2() {
        panic("抛出一个异常")
    }
    func main() {
        fn1()
        fn2()
        fmt.Println("结束")
    }
```

上述程序会直接抛出异常，无法正常运行

```bash
    fn1
    panic: 抛出一个异常
```

解决方法就是使用 recover进行异常的监听

```go
    func fn1() {
        fmt.Println("fn1")
    }

    func fn2() {
        // 使用recover监听异常
        defer func() {
            err := recover()
            if err != nil {
                fmt.Println(err)
            }
        }()
        panic("抛出一个异常")
    }
    func main() {
        fn1()
        fn2()
        fmt.Println("结束")
    }
```

### 异常运用场景

模拟一个读取文件的方法，这里可以主动发送使用panic  和 recover

```go
    func readFile(fileName string) error {
        if fileName == "main.go" {
            return nil
        } else {
            return errors.New("读取文件失败")
        }
    }

    func myFn () {
        defer func() {
            e := recover()
            if e != nil {
                fmt.Println("给管理员发送邮件")
            }
        }()
        err := readFile("XXX.go")
        if err != nil {
            panic(err)
        }
    }

    func main() {
        myFn()
    }
```

### 内置函数

| 内置函数      | 介绍                                                         |
| ------------- | ------------------------------------------------------------ |
| close         | 主要用来关闭channel                                          |
| len           | 用来求长度，比如string、array、slice、map、channel           |
| new           | 用来分配内存、主要用来分配值类型，比如 int、struct ，返回的是指针 |
| make          | 用来分配内存，主要用来分配引用类型，比如chan、map、slice     |
| append        | 用来追加元素到数组、slice中                                  |
| panic\recover | 用来处理错误                                                 |





## 接口


### 接口的介绍

现实生活中手机、相机、U盘都可以和电脑的USB接口建立连接。我们不需要关注usb卡槽大小是否一样，因为所有的USB接口都是按照统一的标准来设计的。

Golang中的接口是一种抽象数据类型，Golang中接口定义了对象的行为规范，只定义规范不实现。接口中定义的规范由具体的对象来实现。

通俗的讲接口就一个标准，它是对一个对象的行为和规范进行约定，约定实现接口的对象必须得按照接口的规范。

### Go接口的定义

在Golang中接口（interface）是一种类型，一种抽象的类型。接口（interface）是一组函数method的集合，Golang中的接口不能包含任何变量。

在Golang中接口中的所有方法都没有方法体，接口定义了一个对象的行为规范，只定义规范不实现。接口体现了程序设计的多态和高内聚低耦合的思想N Golang中的接口也是一种数据类型，不需要显示实现。只需要一个变量含有接口类型中的所有方法，那么这个变量就实现了这个接口。

Golang中每个接口由数个方法组成，接口的定义格式如下：

```go
    type 接口名 interface {
        方法名1 (参数列表1) 返回值列表1
        方法名2 (参数列表2) 返回值列表2
    }
```

**其中**

- **接口名**：使用type将接口定义为自定义的类型名。Go语言的接口在命名时，一般会在单词后面添加er，如有写操作的接口叫Writer，有字符串功能的接口叫Stringer等，接口名最好突出该接口的类型含义。
- **方法名**：当方法名首字母是大写且这个接口类型名首字母也是大写时，这个方法可以被接口所在的包（package）之外的代码访问。
- **参数列表、返回值列表**：参数列表和返回值列表中的参数变量名是可以省略

演示：定义一个Usber接口让Phone 和 Camera结构体实现这个接口

首先我们定义一个Usber接口，接口里面就定义了两个方法

```go
    // 定义一个Usber接口
    type Usber interface {
        start()
        stop()
    }
```

然后我们在创建一个手机结构体

```go
    // 如果接口里面有方法的话，必须要通过结构体或自定义类型实现这个接口

    // 使用结构体来实现 接口
    type Phone struct {
        Name string
    }
    // 手机要实现Usber接口的话，必须实现usb接口的所有方法
    func (p Phone) Start()  {
        fmt.Println(p.Name, "启动")
    }
    func (p Phone) Stop()  {
        fmt.Println(p.Name, "关闭")
    }
```

然后我们在创建一个Phone的结构体，来实现这个接口

```go
    // 如果接口里面有方法的话，必须要通过结构体或自定义类型实现这个接口

    // 使用结构体来实现 接口
    type Phone struct {
        Name string
    }
    // 手机要实现Usber接口的话，必须实现usb接口的所有方法
    func (p Phone) start()  {
        fmt.Println(p.Name, "启动")
    }
    func (p Phone) stop()  {
        fmt.Println(p.Name, "关闭")
    }
    func main() {
        var phone Usber = Phone{
            "三星手机",
        }
        phone.start()
        phone.stop()
    }
```

我们在创建一个Camera结构体

```go
    // 使用相机结构体来实现 接口
    type Camera struct {
        Name string
    }
    // 相机要实现Usber接口的话，必须实现usb接口的所有方法
    func (p Camera) start()  {
        fmt.Println(p.Name, "启动")
    }
    func (p Camera) stop()  {
        fmt.Println(p.Name, "关闭")
    }
    func main() {
        var camera Usber = Camera{
            "佳能",
        }
        camera.start()
        camera.stop()
    }
```

我们创建一个电脑的结构体，电脑的结构体就是用于接收两个实现了Usber的结构体，然后让其工作

```go
    // 电脑
    type Computer struct {

    }

    // 接收一个实现了Usber接口的 结构体
    func (computer Computer) Startup(usb Usber)  {
        usb.start()
    }

    // 关闭
    func (computer Computer) Shutdown (usb Usber)  {
        usb.stop()
    }
```

最后我们在main中调用方法

```go
    func main() {
        var camera interfaceDemo.Camera = interfaceDemo.Camera{
            "佳能",
        }
        var phone interfaceDemo.Phone = interfaceDemo.Phone{
            "苹果",
        }

        var computer interfaceDemo.Computer = interfaceDemo.Computer{}
        computer.Startup(camera)
        computer.Startup(phone)
        computer.Shutdown(camera)
        computer.Shutdown(phone)
    }
```

运行结果如下所示：

```bash
    佳能 启动
    苹果 启动
    佳能 关闭
    苹果 关闭
```

### 空接口（Object类型）

Golang中的接口可以不定义任何方法，没有定义任何方法的接口就是空接口。空接口表示没有任何约束，因此任何类型变量都可以实现空接口。

空接口在实际项目中用的是非常多的，用空接口可以表示任意数据类型。

```go
    // 空接口表示没有任何约束，任意的类型都可以实现空接口
    type EmptyA interface {

    }

    func main() {
        var a EmptyA
        var str = "你好golang"
        // 让字符串实现A接口
        a = str
        fmt.Println(a)
    }
```

同时golang中空接口也可以直接当做类型来使用，可以表示任意类型。相当于Java中的Object类型

```go
    var a interface{}
    a = 20
    a = "hello"
    a = true
```

空接口可以作为函数的参数，使用空接口可以接收任意类型的函数参数

```go
    // 空接口作为函数参数
    func show(a interface{}) {
        fmt.println(a)
    }
```

#### map的值实现空接口

使用空接口实现可以保存任意值的字典

```go
    // 定义一个值为空接口类型
    var studentInfo = make(map[string]interface{})
    studentInfo["userName"] = "张三"
    studentInfo["age"] = 15
    studentInfo["isWork"] = true
```

#### slice切片实现空接口

```go
    // 定义一个空接口类型的切片
    var slice = make([]interface{}, 4, 4)
    slice[0] = "张三"
    slice[1] = 1
    slice[2] = true
```

### 类型断言

一个接口的值（简称接口值）是由一个具体类型和具体类型的值两部分组成的。这两部分分别称为接口的动态类型和动态值。

如果我们想要判断空接口中值的类型，那么这个时候就可以使用类型断言，其语法格式：

```bash
    x.(T)
```

其中：

- X：表示类型为interface{}的变量
- T：表示断言x可能是的类型

该语法返回两个参数，第一个参数是x转化为T类型后的变量，第二个值是一个布尔值，若为true则表示断言成功，为false则表示断言失败

```go
    // 类型断言
    var a interface{}
    a = "132"
    value, isString := a.(string)
    if isString {
        fmt.Println("是String类型, 值为：", value)
    } else {
        fmt.Println("断言失败")
    }
```

或者我们可以定义一个能传入任意类型的方法

```go
    // 定义一个方法，可以传入任意数据类型，然后根据不同类型实现不同的功能
    func Print(x interface{})  {
        if _,ok := x.(string); ok {
            fmt.Println("传入参数是string类型")
        } else if _, ok := x.(int); ok {
            fmt.Println("传入参数是int类型")
        } else {
            fmt.Println("传入其它类型")
        }
    }
```

上面的示例代码中，如果要断言多次，那么就需要写很多if，这个时候我们可以使用switch语句来实现：

**注意：** 类型.(type) 只能结合switch语句使用

```go
    func Print2(x interface{})  {
        switch x.(type) {
        case int:
            fmt.Println("int类型")
        case string:
            fmt.Println("string类型")
        case bool:
            fmt.Println("bool类型")
        default:
            fmt.Println("其它类型")
        }
    }
```

### 结构体接收者

#### 值接收者

如果结构体中的方法是值接收者，那么实例化后的结构体值类型和结构体指针类型都可以赋值给接口变量

### 结构体实现多个接口

实现多个接口的话，可能就同时用两个接口进行结构体的接受

```go
    // 定义一个Animal的接口，Animal中定义了两个方法，分别是setName 和 getName，分别让DOg结构体和Cat结构体实现
    type Animal interface {
        SetName(string)
    }

    // 接口2
    type Animal2 interface {
        GetName()string
    }

    type Dog struct {
        Name string
    }

    func (d *Dog) SetName(name string)  {
        d.Name = name
    }
    func (d Dog)GetName()string {
        return d.Name
    }

    func main() {
        var dog = &Dog{
            "小黑",
        }
        // 同时实现两个接口
        var d1 Animal = dog
        var d2 Animal2 = dog
        d1.SetName("小鸡")
        fmt.Println(d2.GetName())
    }
```

### 接口嵌套

在golang中，允许接口嵌套接口，我们首先创建一个 Animal1 和 Animal2 接口，然后使用Animal接受刚刚的两个接口，实现接口的嵌套。

```go
    // 定义一个Animal的接口，Animal中定义了两个方法，分别是setName 和 getName，分别让DOg结构体和Cat结构体实现
    type Animal1 interface {
        SetName(string)
    }

    // 接口2
    type Animal2 interface {
        GetName()string
    }

    type Animal interface {
        Animal1
        Animal2
    }

    type Dog struct {
        Name string
    }

    func (d *Dog) SetName(name string)  {
        d.Name = name
    }
    func (d Dog)GetName()string {
        return d.Name
    }

    func main() {
        var dog = &Dog{
            "小黑",
        }
        // 同时实现两个接口
        var d Animal = dog
        d.SetName("小鸡")
        fmt.Println(d.GetName())
    }
```

### Golang中空接口和类型断言

```go
    // golang中空接口和类型断言
    var userInfo = make(map[string]interface{})
    userInfo["userName"] = "zhangsan"
    userInfo["age"] = 10
    userInfo["hobby"] = []string{"吃饭", "睡觉"}
    fmt.Println(userInfo["userName"])
    fmt.Println(userInfo["age"])
    fmt.Println(userInfo["hobby"])
    // 但是我们空接口如何获取数组中的值？发现 userInfo["hobby"][0]  这样做不行
    // fmt.Println(userInfo["hobby"][0])
```

也就是我们的空接口，无法直接通过索引获取数组中的内容，因此这个时候就需要使用类型断言了

```go
    // 这个时候我们就可以使用类型断言了
    hobbyValue,ok := userInfo["hobby"].([]string)
    if ok {
        fmt.Println(hobbyValue[0])
    }
```

通过类型断言返回来的值，我们就能够直接通过角标获取了。






## map

### map介绍

map是一种无序的基于key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用。

Go语言中map的定义语法如下：

```go
    map[KeyType]ValueType
```

其中：

- KeyType：表示键的类型
- ValueType：表示键对应的值的类型

map类型的变量默认初始值为nil，需要使用make()函数来分配内存。语法为：

make：用于slice、map和channel的初始化

示例如下所示：

```go
    // 方式1初始化
    var userInfo = make(map[string]string)
    userInfo["userName"] = "zhangsan"
    userInfo["age"] = "20"
    userInfo["sex"] = "男"
    fmt.Println(userInfo)
    fmt.Println(userInfo["userName"])
```

```go
    // 创建方式2，map也支持声明的时候填充元素
    var userInfo2 = map[string]string {
        "username":"张三",
        "age":"21",
        "sex":"女",
    }
    fmt.Println(userInfo2)
```

### 遍历map

使用for range遍历

```go
    // 遍历map
    for key, value := range userInfo2 {
        fmt.Println("key:", key, " value:", value)
    }
```

### 判断map中某个键值是否存在

我们在获取map的时候，会返回两个值，也可以是返回的结果，一个是是否有该元素

```go
    // 判断是否存在,如果存在  ok = true，否则 ok = false
    value, ok := userInfo2["username2"]
    fmt.Println(value, ok)
```

### 使用delete()函数删除键值对

使用delete()内建函数从map中删除一组键值对，delete函数的格式如下所示

```bash
    delete(map 对象, key)
```

其中：

- map对象：表示要删除键值对的map对象
- key：表示要删除的键值对的键

示例代码如下

```go
    // 删除map数据里面的key，以及对应的值
    delete(userInfo2, "sex")
    fmt.Println(userInfo2)
```

### 元素为map类型的切片

我们想要在切片里面存放一系列用户的信息，这时候我们就可以定义一个元素为map类型的切片

```go
    // 切片在中存放map
    var userInfoList = make([]map[string]string, 3, 3)
    var user = map[string]string{
        "userName": "张安",
        "age": "15",
    }
    var user2 = map[string]string{
        "userName": "张2",
        "age": "15",
    }
    var user3 = map[string]string{
        "userName": "张3",
        "age": "15",
    }
    userInfoList[0] = user
    userInfoList[1] = user2
    userInfoList[2] = user3
    fmt.Println(userInfoList)

    for _, item := range userInfoList {
        fmt.Println(item)
    }
```

### 值为切片类型的map

我们可以在map中存储切片

```go
    // 将map类型的值
    var userinfo = make(map[string][]string)
    userinfo["hobby"] = []string {"吃饭", "睡觉", "敲代码"}
    fmt.Println(userinfo)
```

### 示例

统计字符串中单词出现的次数

```go
    // 写一个程序，统计一个字符串中每个单词出现的次数。比如 "how do you do"
    var str = "how do you do"
    array := strings.Split(str, " ")
    fmt.Println(array)
    countMap := make(map[string]int)
    for _, item := range array {
        countMap[item]++
    }
    fmt.Println(countMap)
```



