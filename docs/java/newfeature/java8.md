# Java 8

> 文章参考：https://www.pianshen.com/article/22171238959/

## 哪些升级

- **速度更快 数据结构有一定改动，垃圾回收机制更新**
    - HashMap在java7中，每次计算到相同的hash值，新的值会代替老的值，那么它是怎么插入的呢，它会产生碰撞，它会把老的值以链的形式缀在新值后面，形成一个链型结构，那么如果这个值很多呢，那么这个链就会很长，最后当你插入一个相同的哈希值的索引的时候，这个新值依然要和这个老的值形成的链表一一比对，那么效率就会降低很多了。所以java7就使用了一种扩容的办法来解决这个问题，HashMap会以0.75的**加载因子**来判断是否扩容，当这个链表的长度达到了HashMap长度的百分之75的时候，那么HashMap就会自动扩容，然后对这个链表的所有数据除了最新那个，进行一个哈希值的重新运算，这样做是解决了很大一部分问题，但是碰撞的情况依然存在，所以此时java8就出现了。

    - 到了java8的时候，HashMap就有了一种新的结构，数组+链表+红黑树，简单来说就是当碰撞的数量大于8，hashmap总容量大于64的时候，那么它就会把这个链表结构转换为红黑树，红黑树就像一个二分法，一直把这个列表一分二，二分四，这样下次进来比对的时候就会比对整个链表比对快的多了（除了新增更慢，因为新增链表会直接放最后，而红黑树要二分），当然速度还是快了不少，所以HashMap在java8就做了这种改变，那么随之而来HashSet，ConcurrentHashMap也做了这样的改变。

    -  1.8把jvm中的永久区给去除，取而代之的是元空间，里面直接用的就是物理内存，而不是你来分配内存了，这样垃圾回收机制就几乎不做回收了，虽然1.7里面方法区也一般不会被回收，但还是有一些被回收的情况，所以1.8直接优化了内存机制，（虽然其它大厂早已优化，比如taobao jvm，但是这次java的优化也是对这个提高效率的肯定），然后你会发现在jdk 1.8中，PremGenSize和MaxPremGenSize这两个参数已经没有用了，取而代之的是**MetaSpaceSize**和**MaxMetaSpaceSize**，默认是你得全部物理内存。物理内存越大，垃圾回收的概率也降低了


- **代码更少（新增新的语法Lambda表达式）**

- **强大的stream API**

- **便于并行**

    - Fork/Join 速度提升：fork/join 框架是在 Java7 中首次引入的，目的是简化使用 JVM 的并发程序。Java8 中投入了很多努力进一步提升该框架。现在，fork/join 在 Streams API 中用于并发操作。

- **最大化减少空指针异常 Optional**



<!-- 
- 使用接口进行扩展
- 匿名内部类
```java
    //匿名内部类
    Comparator<Integer> com = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return Integer.compare(o1,o2);
            }
        };
``` -->


## Lambda 表达式




Lambda 表达式可以理解为一段传递的代码，核心是**能省则省**

-> 将表达式分为左右两侧，左侧对应接口抽象方法的参数，右侧接口抽象方法的实现 


### 无参数，无返回值

```java
    ()-> System.out.println("Hello World")
```
```java

    package java8;

    import org.junit.Test;

    public class TestLambda2 {

        @Test
        public void test1(){
            final int num = 0;//jdk 1.8之后final可以省略，但实际上仍是final
            Runnable r = new Runnable() {
                @Override
                public void run() {
                    System.out.println("Hello World"+num);
                }
            };
            r.run();
            System.out.println("-----------------------");

            Runnable r2 = () -> System.out.println("Hello Lambda"+num);
            r2.run();
        }
    }

```

### 有一个参数 无返回值

有一个参数，小括号可以不写
```java
    package java8;

    import org.junit.Test;

    import java.util.function.Consumer;

    public class TestLambda2 {

        @Test
        public void test1() {

            Consumer<String> con = x -> System.out.println(x);
            con.accept("Hello World");
            
        }
    }

```

### 有两个以上的参数，有返回值并且Lambda体中有多条语句

Lambda表达式参数列表的数据类型可以省略不写，因为JVM编译器通过上下文推断出数据类型

```java
    package java8;

    import org.junit.Test;

    import java.util.*;
    import java.util.function.Consumer;

    public class TestLambda2 {

        @Test
        public void test1() {


            List list =  Arrays.asList(2,5,346,7,9,3);

            Comparator<Integer> com = (x,y) -> {
                System.out.println("函数式接口handle: "+x+" "+y);
                return Integer.compare(x,y);
            };

            list.sort(com);
            System.out.println(list.toString());

        }
    }


```
### 有两个以上的参数,只有一条语句

只有一条语句，大括号和语句都可以省略不写

```java
Comparator<Integer> com = (x,y) -> Integer.compare(x,y);
```


Lambda 表达式需要**函数式接口**的支持，即接口中只有一个抽象方法。可以用注解@FunctionalInterface修饰检查是否为函数式接口


## 函数式接口


Java8 内置的四大核心函数式接口


### 消费型接口

```java
    Consumer<T>：
    void accept(T t);
```
```java
    package java8;

    import org.junit.Test;

    import java.util.function.Consumer;

    public class TestLambda3 {

        @Test
        public void test1(){
            happy(1000,(e)-> System.out.println("共花了"+e));

        }
        public void happy(double money, Consumer<Double> con){
            con.accept(money);
        }
    }

```



### 供给型接口

```java
    Supplier<T>:
    T get();

```

```java

    package java8;

    import org.junit.Test;

    import java.util.ArrayList;
    import java.util.List;
    import java.util.function.Supplier;

    public class TestLambda3 {

        //产生指定个数的整数，并放入集合中
        @Test
        public void test2() {
            List<Integer> numList = getNumList(10, () -> (int) (Math.random() * 100));
            System.out.println(numList);

        }

        public List<Integer> getNumList(int num, Supplier<Integer> sup) {
            List<Integer> list = new ArrayList<>();

            for (int i = 0; i < num; i++) {
                Integer n = sup.get();
                list.add(n);
            }
            return list;
        }


    }


```



### 函数型接口

```java
    Function<T,R>：
    R apply(T t);

    package java8;

    import org.junit.Test;

    import java.util.ArrayList;
    import java.util.List;
    import java.util.function.Function;

    public class TestLambda3 {


        //Function<T,R> 函数型接口：

        @Test
        public void test3(){
            String newStr = strHandler("\t\t\t Hello World.",(str)-> str.trim());
            System.out.println(newStr);

            String subStr = strHandler( "Hello World",(str)->str.substring(2,5));
            System.out.println(subStr);
        }


        //需求：用于处理字符串
        public String strHandler(String str, Function<String,String> fun){
            return fun.apply(str);
        }
        
    }





```

### 断言型接口

```java
    Predicate<T>:
    boolean test(T t);

    package java8;

    import org.junit.Test;

    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.List;
    import java.util.function.Predicate;

    public class TestLambda3 {

        @Test
        public void test4() {
            List<String> list = Arrays.asList("Hello", "world", "Lambda", "www");
            List<String> strList = filterStr(list, (s) -> s.length() > 3);
            System.out.println(strList);
        }


        //需求：将满足条件的字符串，放入集合中
        public List<String> filterStr(List<String> list, Predicate<String> pre) {
            List<String> strList = new ArrayList<>();

            for (String str : list) {
                if (pre.test(str)) {
                    strList.add(str);
                }
            }
            return strList;

        }

    }


```

### 其他接口

![interface](/blog/javaversion/java8/interface.png)



## 方法引用与构造器引用

### 方法引用

若Lamdba体中的内容有方法已经实现了，我们可以使用“方法引用”

主要有三种语法格式:

#### 对象::实例方法名

```java

    package java8;

    import org.junit.Test;

    import java.util.function.Supplier;

    public class TestMethodRef {

        @Test
        public void test1(){

            Employee employee = new Employee("zhangsan",18,6000);
            Supplier<String> sup = () -> employee.getName();
            System.out.println(sup.get());

            // 由于上面Lambda体内容已经实现了，这里可以用::直接引用
            Supplier<Integer> sup2 = employee::getAge;
            System.out.println(sup2.get());
            
        }

    }


```



#### 类::静态方法名

```java
        //compare 是静态方法
        Comparator<Integer> com = (x,y)->Integer.compare(x,y);

        Comparator<Integer> com1 = Integer::compare;
```


#### 类::实例方法名

若Lambda参数列表中的第一个参数是实例方法的调用者，而第二个参数是实例方法的参数时，可以使用ClassName::方法名
```java
        //判断两个字符串是否一致
        BiPredicate<String,String> bp = (x,y)->x.equals(y);
        
        BiPredicate<String,String> bp2 = String::equals;
```

### 构造器引用

需要调用的构造器的参数列表要与函数式接口中的抽象方法的参数列表保持一致。
```java
    package java8;

    import org.junit.Test;

    import java.util.function.Supplier;

    public class TestMethodRef {

        @Test
        public void test3() {
    //        原来的写法
    //        Supplier<Employee> supplier = () -> new Employee();
    //        supplier.get();

            Supplier<Employee> supplier2 = Employee::new;
            Employee employee = supplier2.get();
            System.out.println(employee);
        }

    }

```

一个参数，调用Employee一个参数的构造方法
```java
    @Test
    public void test3(){
        Function<Integer,Employee> fun = (x)->new Employee(x);
        Function<Integer,Employee> fun2 = Employee::new;
        Employee employee = fun2.apply(101);
        System.out.println(employee);
        
    }
```

### 数组引用

```java
    @Test
    public void test2() {
        Function<Integer,String[]> fun = (x)->new String[x];
        String[] strs = fun.apply(10);
        System.out.println(strs.length);

        Function<Integer,String[]> fun2 = String[]::new;
        String[] str2 = fun2.apply(20);
        System.out.println(str2.length);

    }
```



## Stream API

### Stream（流）是什么

Stream（流）是数据渠道，用于操作数据源（集合、数组等）所生成的元素序列。

![stream](/blog/javaversion/java8/stream.svg)

Stream的效果就像上图展示的它可以先把数据变成符合要求的样子（map），吃掉不需要的东西（filter）然后得到需要的东西（collect）。


![stream1](/blog/javaversion/java8/stream1.png)

### 流的特性

- Straem自己不会存储元素

- Stream不会改变源对象，它们会返回一个持有结果的新Stream。

- Stream操作时延迟执行的，这意味着它们会等到需要结果的时候才执行

### 创建流

- 通过Collection提供的stream（）或parallelStream（）

- 通过Arrays中的静态方法stream()获取数组流

- 通过String类中的静态方法 of（）

- 通过迭代或生成创建无限流

```java
    package java8;

    import org.junit.Test;

    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.List;
    import java.util.stream.Stream;

    public class StreamAPI1 {

        //创建Stream
        @Test
        public void test1() {
            //1.通过Collection提供的stream（）或parallelStream（）
            List<String> list = new ArrayList<>();
            Stream<String> stream1 = list.stream();

            //2.通过Arrays中的静态方法stream()获取数组流
            Employee[] employees = new Employee[10];
            Stream<Employee> stream2 = Arrays.stream(employees);

            //3.通过String类中的静态方法 of（）
            Stream<String> stream3 = Stream.of("aa", "bb", "cc");

            //4.创建无限流
            //迭代
            Stream<Integer> stream4 = Stream.iterate(0, (x) -> x + 2);
            stream4.limit(10).forEach(System.out::println);

            //生成
            Stream.generate(() -> Math.random()).limit(5).forEach(System.out::println);

        }

    }
```

### Stream的中间操作

- filter - 接收Lambda，从流中排除某些元素
- limit - 截断流，使其元素不超过给定数量
- skip- 跳过元素，返回一个扔掉了前n个元素的流。若流中元素不足n个，则返回一个空流。与limit（n）互补
- distinct- 筛选，通过流所生成元素的hashCode（）和equals（）去除重复元素



#### filter 

```java
package java8;


import org.junit.Test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class TestStreamAPI2 {

    List<Employee> employeeList = Arrays.asList(
            new Employee("zhangsan", 18, 9999),
            new Employee("lisi", 38, 5555),
            new Employee("wangwu", 50, 6666),
            new Employee("zhaoliu", 16, 3333),
            new Employee("tianqi", 8, 7777)
    );

    
    @Test
    public void tes2(){
        //中间操作
        Stream<Employee> stream = employeeList.stream()
                .filter((e)->{
                    System.out.println("中间操作");
                    return e.getAge()>35;
                });
        //终止操作，内部迭代
        // stream.forEach(System.out::println);

    }

}
```

![stream2](/blog/javaversion/java8/stream2.PNG)

可以看到上面的例子，当终止操作stream.forEach(System.out::println)没有执行的时候，中间操作不会打印。直到终止操作执行。

![stream3](/blog/javaversion/java8/stream3.PNG)


 多个中间操作可以连接起来形成一个流水线，除非流水线上触发终止操作，否则中间操作不会执行任何的处理，而在终止操作时一次性全部处理，称为“**惰性求值**”


#### limit

```java
package java8;


import org.junit.Test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class TestStreamAPI2 {

    List<Employee> employeeList = Arrays.asList(
            new Employee("zhangsan", 18, 9999),
            new Employee("lisi", 38, 5555),
            new Employee("wangwu", 50, 6666),
            new Employee("zhaoliu", 16, 3333),
            new Employee("tianqi", 8, 7777)
    );

    @Test
    public void tes2(){
        //中间操作
        employeeList.stream()
                    .filter((e)-> e.getSalary()>5000)
                    .limit(2)
                    .forEach(System.out::println);
    }

}
```
结果

![stream4](/blog/javaversion/java8/stream4.PNG)

#### skip

```java
  @Test
    public void tes2(){
        //中间操作
        employeeList.stream()
                    .filter((e)-> e.getSalary()>5000)
                    .skip(2)
                    .forEach(System.out::println);
    }
```
结果，可以看到结果跳过了前面的2条

![stream5](/blog/javaversion/java8/stream5.PNG)

#### distinct

```java
package java8;


import org.junit.Test;

import java.util.Arrays;
import java.util.List;

public class TestStreamAPI2 {

    List<Employee> employeeList = Arrays.asList(
            new Employee("zhangsan", 18, 9999),
            new Employee("lisi", 38, 5555),
            new Employee("wangwu", 50, 6666),
            new Employee("zhaoliu", 16, 3333),
            new Employee("zhaoliu", 16, 3333),
            new Employee("zhaoliu", 16, 3333),
            new Employee("zhaoliu", 16, 3333),
            new Employee("zhaoliu", 16, 3333),
            new Employee("tianqi", 8, 7777)
    );

    @Test
    public void tes2() {
        //中间操作
        employeeList.stream()
                .filter((e) -> e.getSalary() < 5000)
                .distinct()
                .forEach(System.out::println);
    }

}
```
![stream6](/blog/javaversion/java8/stream6.PNG)

可以看到，结果并没有去重。必须重写Employee 的hashCode()和equals方法。

```java
//Employee.java
package java8;

import java.util.Objects;

public class Employee {
    private String name;
    private int age;
    private int salary;

    public Employee() {
    }

    public Employee(int age) {
        this.age = age;
    }


    public Employee(String name, int age, int salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return age == employee.age &&
                salary == employee.salary &&
                Objects.equals(name, employee.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age, salary);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", salary=" + salary +
                '}';
    }
}
```
再重新执行，发现distinct成功

![stream7](/blog/javaversion/java8/stream7.PNG)

<!-- ```java

    List<Employee> employeeList = Arrays.asList(
        new Employee("zhangsan", 18, 9999),
        new Employee("lisi", 38, 5555),
        new Employee("wangwu", 50, 6666),
        new Employee("zhaoliu", 16, 3333),
        new Employee("tianqi", 8, 7777)
        );


    @Test
    public void test3() {
        //取出薪水大于5000的前两位
        employeeList.stream()
                .filter((e) -> e.getSalary()>=5000)
                .limit(2)
                .forEach(System.out::println);

        System.out.println("-----------------");
        //打印出所有Employee的名字
        employeeList.stream()
                .map(Employee::getName)
                .forEach(System.out::println);

    }
``` -->






## 接口中的默认方法与静态方法

## 新时间日期API