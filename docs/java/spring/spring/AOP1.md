# AOP
>Aspect Oriented Programming 面向切面编程 
指在程序运行期间，将某段代码动态的切入到指定方法的指定位置进行运行的这种编程方式。


**为什么需要AOP**

想象下面的场景，开发中在多个模块间有某段重复的代码，我们通常是怎么处理的？显然，没有人会靠“复制粘贴”吧。在传统的面向过程编程中，我们也会将这段代码，抽象成一个方法，然后在需要的地方分别调用这个方法，这样当这段代码需要修改时，我们只需要改变这个方法就可以了。然而需求总是变化的，有一天，新增了一个需求，需要再多出做修改，我们需要再抽象出一个方法，然后再在需要的地方分别调用这个方法，又或者我们不需要这个方法了，我们还是得删除掉每一处调用该方法的地方。实际上涉及到多个地方具有相同的修改的问题我们都可以通过 AOP 来解决。



## 日志记录

计算器运行计算方法的时候进行日志记录

### log直接编写在方法内容


Calculator 接口
```java
package com.inter;

public interface Calculator {

    public int add(int i,int j);
    public int sub(int i,int j);
    public int mul(int i,int j);
    public int div(int i,int j);

}
```

Calculator 实现类
```java
package com.inter.impl;

import com.inter.Calculator;

public class MyMathCal implements Calculator {
    @Override
    public int add(int i, int j) {
        System.out.println("[add] method start,param is ["+i+","+j+"]");
        int result =i+j;
        System.out.println("[add] method end,param is ["+i+","+j+"]");
        return result;
    }

    @Override
    public int sub(int i, int j) {
        System.out.println("[sub] method start,param is ["+i+","+j+"]");
        int result =i-j;
        System.out.println("[sub] method end,param is ["+i+","+j+"]");
        return result;
    }

    @Override
    public int mul(int i, int j) {
        System.out.println("[mul] method start,param is ["+i+","+j+"]");
        int result =i*j;
        System.out.println("[mul] method end,param is ["+i+","+j+"]");
        return result;
    }

    @Override
    public int div(int i, int j) {
        System.out.println("[div] method start,param is ["+i+","+j+"]");
        int result =i/j;
        System.out.println("[div] method end,param is ["+i+","+j+"]");
        return result;
    }
}

```

测试类
```java
package com.inter.test;

import com.inter.Calculator;
import com.inter.impl.MyMathCal;
import org.junit.Test;

public class AOPTest {

    @Test
    public void test(){
        Calculator calculator = new MyMathCal();
        calculator.add(1,2);
    }


}

```


运行结果
```bash
[add] method start,param is [1,2]
[add] method end,param is [1,2]
```

日志记录：系统的辅助功能

业务逻辑：核心功能

耦合


可以明显看出如果增加或修改日志，需要在实现类的多个方法中增删改，非常的繁琐。较难维护。



### Log工具类

将log的业务逻辑放在log类中，通过静态方法进行调用打印。

```java
package com.inter.util;

import java.util.Arrays;

public class LogUtils {

    public static void logStart(Object... object){
        System.out.println("[LogUtils][add] method start,param is ["+ Arrays.asList(object)+"]");
    }

}

```
在实现类的方法上加上调用
```java
 @Override
    public int sub(int i, int j) {
        LogUtils.logStart(i,j);
        System.out.println("[sub] method start,param is ["+i+","+j+"]");
        int result =i-j;
        System.out.println("[sub] method end,param is ["+i+","+j+"]");
        return result;
    }

```

运行结果
```bash
[LogUtils][add] method start,param is [[2, 1]]
[sub] method start,param is [2,1]
[sub] method end,param is [2,1]
```

与第一种方法类似，修改日志时同样需要修改多处，业务逻辑和日志逻辑仍然耦合。


### 动态代理

创建一个代理对象，在代理对象中调用加减乘除， 在加减乘除前后可以做一些事情。

创建一个动态代理类
```java
package com.inter.proxy;

import com.inter.Calculator;
import com.inter.util.LogUtils;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.Arrays;

public class CalculatorProxy {

    //为传入的参数对象创建一个动态代理对象
    public static Calculator getProxy(final Calculator calculator) {
        //拿到代理对象的类加载器
        ClassLoader loader = calculator.getClass().getClassLoader();
        //拿到代理对象的所有接口
        Class<?>[] interfaces = calculator.getClass().getInterfaces();
        //方法执行器，帮目标对象执行目标方法
        InvocationHandler h = new InvocationHandler() {
            /*
             * Object proxy: 代理对象，给jdk使用，无需东这个对象
             * Method method：当前将要执行的目标对象的方法
             * Object[] args: 方法调用时外界传入的参数值
             * */
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                //利用反射执行目标方法
                //目标方法执行后的返回值
                Object result = null;
                try {
                    System.out.println("这是动态代理帮你执行方法...");
                    LogUtils.logStart(method,args);
                    result = method.invoke(calculator, args);
                    LogUtils.logReturn(method,result);
                } catch (Exception e) {
                    LogUtils.logException(method,e);
                }finally {
                    LogUtils.logEnd(method);
                }

                return result;
            }
        };

        //Proxy为目标对象创建代理对象
        Object proxy = Proxy.newProxyInstance(loader, interfaces, h);
        return (Calculator) proxy;
    }
}

```

LogUtils工具类改造
```java
package com.inter.util;

import java.lang.reflect.Method;
import java.util.Arrays;

public class LogUtils {

    public static void logStart(Method method, Object... args){
        System.out.println("[" + method.getName() + "]方法开始执行，用的参数列表【" + Arrays.asList(args) + "】");
    }

    public static void logReturn(Method method, Object result){
        System.out.println("[" + method.getName() + "]方法正常执行完成，计算结果是【" + result+"】");
    }

    public static void logException(Method method, Exception e){
        System.out.println("[" + method.getName() + "]方法执行异常，异常信息是：【" + e.getCause());
    }

    public static void logEnd(Method method){
        System.out.println("[" + method.getName() + "]方法最终结束了");
    }
}
```


测试方法修改为用proxy调用add方法
```java
    @Test
    public void test(){
        Calculator calculator = new MyMathCal();
//        calculator.add(1,2);
//        calculator.sub(2,1);
        Calculator proxy = CalculatorProxy.getProxy(calculator);
        proxy.add(2,1);
        proxy.div(6,2);
        proxy.div(1,0);
    }
```

运行结果
```bash
这是动态代理帮你执行方法...
[add]方法开始执行，用的参数列表【[2, 1]】
[add]方法正常执行完成，计算结果是【3】
[add]方法最终结束了
这是动态代理帮你执行方法...
[div]方法开始执行，用的参数列表【[6, 2]】
[div]方法正常执行完成，计算结果是【3】
[div]方法最终结束了
这是动态代理帮你执行方法...
[div]方法开始执行，用的参数列表【[1, 0]】
[div]方法执行异常，异常信息是：【java.lang.ArithmeticException: / by zero
[div]方法最终结束了

```

<font color=#FF0000 >可以使用动态代理来讲日志代码动态的在目标方法执行前后先进行执行。</font>
代理对象和被代理对象唯一能产生的关联就是实现了同一接口


>1. 动态代理编写困难 
>2. jdk默认的动态代理，如果目标对象没有实现任何接口，是无法为其创建代理对象的。




## AOP

> 概念参考 https://www.cnblogs.com/hongwz/p/5764917.html


面向切面编程（AOP）通过提供另外一种思考程序结构的途经来弥补面向对象编程（OOP）的不足。在OOP中模块化的关键单元是类（classes），而在AOP中模块化的单元则是切面。切面能对关注点进行模块化，例如横切多个类型和对象的事务管理。（在AOP术语中通常称作横切（crosscutting）关注点。）

AOP框架是Spring的一个重要组成部分。但是Spring IoC容器并不依赖于AOP，这意味着你有权利选择是否使用AOP，AOP做为Spring IoC容器的一个补充,使它成为一个强大的中间件解决方案。

Spring 2.0允许用户选择使用更简单、更强大的基于模式或@AspectJ注解的方式来自定义切面。这两种风格都支持所有类型的通知(advice)和AspectJ的切入点语言，虽然实际上仍然使用Spring AOP进行织入（Weaving）。



<br/>

**AOP在Spring Framework中的作用**

- 提供声明式企业服务，特别是为了替代EJB声明式服务。最重要的服务是声明性事务管理。

- 允许用户实现自定义切面，用AOP来完善OOP的使用。

- AOP应用场景:日志记录，权限验证，效率检查，事务管理



### 基础概念
***
1. 横切关注点

对哪些方法进行拦截，拦截后怎么处理，这些关注点称之为横切关注点

2. 切面（aspect）

类是对物体特征的抽象，切面就是对横切关注点的抽象

3. 连接点（joinpoint）

被拦截到的点，因为Spring只支持方法类型的连接点，所以在Spring中连接点指的就是被拦截到的方法，实际上连接点还可以是字段或者构造器

4. 切入点（pointcut）

对连接点进行拦截的定义

5. 通知（advice）

所谓通知指的就是指拦截到连接点之后要执行的代码，通知分为前置、后置、异常、最终、环绕通知五类

6. 目标对象

代理的目标对象

<br/>

![AOP概念](/blog/java/spring/spring/aop1.png)


### 通知类型
***
1. 前置通知（Before advice）：在某连接点之前执行的通知，但这个通知不能阻止连接点之前的执行流程（除非它抛出一个异常）。

2. 后置通知（After returning advice）：在某连接点正常完成后执行的通知：例如，一个方法没有抛出任何异常，正常返回。

3. 异常通知（After throwing advice）：在方法抛出异常退出时执行的通知。

4. 最终通知（After (finally) advice）：当某连接点退出的时候执行的通知（不论是正常返回还是异常退出）。

5. 环绕通知（Around Advice）：包围一个连接点的通知，如方法调用。这是最强大的一种通知类型。环绕通知可以在方法调用前后完成自定义的行为。它也会选择是否继续执行连接点或直接返回它自己的返回值或抛出异常来结束执行。


![AOP通知](/blog/java/spring/spring/aop2.jpg)

<br/>

### 切入点表达式
***
- execution
- within
- this
- target
- args
- @target
- @within
- @annotation
- @args

![AOP概念](/blog/java/spring/spring/aop3.png)


#### execution
用于匹配连接点的执行方法

```bash
execution(访问权限符 返回值类型 方法全类名（参数） )

通配符
*：
    1）匹配一个或多个字符 execution(public int com.inter.impl.MyMath*.*(int,int))
    2）匹配任意参数 execution(public int com.inter.impl.MyMathcal.*(*,*))
    3) 只能匹配一层路径
    4）权限位置不写*就行
..：
    1）匹配任意多个参数 execution(public int com.inter.impl.MyMathcal.*(..))
    2）匹配多层路径 execution(public int com.inter..MyMathcal.*(..))


记住两种：
最精确的：execution(public int com.inter.impl.MyMathcal.add(int,int))
最模糊的：execution(* *.*(..)) 见方法就切，千万别写


&&、||、！
与或非

```


#### within表达式

```
拦截包中任意方法，不包含子包中的方法
within(com.xyz.service.*)

拦截包或者子包中定义的方法
within(com.xyz.service..*)
```



#### this表达式
实现接口的代理对象的任意连接点 （在 Spring AOP 中只是方法执行）

代理对象为指定的类型会被拦截,目标对象使用aop之后生成的代理对象必须是指定的类型才会被拦截，注意是目标对象被代理之后生成的代理对象和指定的类型匹配才会被拦截
```
this(com.xyz.service.AccountService)
```

#### target
实现接口的目标对象的任意连接点 

```
target（com.xyz.service.AccountService）
```


#### args
任何一个只接受一个参数，并且运行时所传入的参数是 Serializable 接口的连接点

```
args（java.io.Serializable）
```
请注意在例子中给出的切入点不同于execution(* *(Java.io.Serializable))，args 版本只有在动态运行时候传入参数是 Serializable 时才匹配，而 execution 版本在方法签名中声明只有一个 Serializable 类型的参数时候匹配。

#### @target
匹配的目标对象的类有一个指定的注解
目标对象中包含com.ms.aop.jtarget.Annotation1注解，调用该目标对象的任意方法都会被拦截
```
@target(com.ms.aop.jtarget.Annotation1)
```

#### @within表达式
指定匹配必须包含某个注解的类里的所有连接点
声明有com.ms.aop.jwithin.Annotation1注解的类中的所有方法都会被拦截
```
@within(com.ms.aop.jwithin.Annotation1)
```


#### @annotation表达式
匹配有指定注解的方法（注解作用在方法上面）
被调用的方法包含指定的注解
```
@annotation(com.ms.aop.jannotation.demo2.Annotation1)
```


#### @args表达式
方法参数所属的类型上有指定的注解，被匹配
> 注意：是方法参数所属的类型上有指定的注解，不是方法参数中有注解
```
匹配1个参数，且第1个参数所属的类中有Anno1注解
@args(com.ms.aop.jargs.demo1.Anno1)

匹配多个参数，且多个参数所属的类型上都有指定的注解
@args(com.ms.aop.jargs.demo1.Anno1,com.ms.aop.jargs.demo1.Anno2)

匹配多个参数，且第一个参数所属的类中有Anno1注解
@args(com.ms.aop.jargs.demo2.Anno1,..)
```



### 示例
***
对上面的代码进行改写，定义切面类

```java
package com.inter.util;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class LogUtils {


    //可重用的切入点表达式
    @Pointcut(" execution(public int com.inter.impl.MyMath*.*(int,int) ")
    public void hahaMyPoint(){};
    
    /*
    * try{
    *   @Before
    *   method.invoke(obj,args);
    *   @AfterReturning
    * }catch(e){
    *   @AfterThrowing
    * }finally{
    *   @After
    * }
    *5个通知注解：
    *   @Before：前置通知
    *   @AfterReturning：后置通知
    *   @AfterThrowing：返回通知
    *   @After：异常通知
    *   @Around：环绕通知
    * */

    //切入点表达式
    //execution(访问权限符 返回值类型 方法签名 )
    @Before("hahaMyPoint()")
    public static void logStart(){
        System.out.println("[xxx]方法开始执行，用的参数列表【】");
    }

    /*
    * execution(访问权限符 返回值类型 方法全类名（参数） )
    *
    * 通配符
    *   *：
    *       1）匹配一个或多个字符 execution(public int com.inter.impl.MyMath*.*(int,int))
    *       2）匹配任意参数 execution(public int com.inter.impl.MyMathcal.*(*,*))
    *       3) 只能匹配一层路径
    *       4）权限位置不写*就行
    *   ..：
    *       1）匹配任意多个参数 execution(public int com.inter.impl.MyMathcal.*(..))
    *       2）匹配多层路径 execution(public int com.inter..MyMathcal.*(..))
    *
    *
    * 记住两种：
    *   最精确的：execution(public int com.inter.impl.MyMathcal.add(int,int))
    *   最模糊的：execution(* *.*(..)) 见方法就切，千万别写
    *
    *
    * &&、||、！
    *   与或非
    *
    * */
    @AfterReturning(" execution(public int com.inter.impl.MyMathcal.*(*,*)) ")
    public static void logReturn(){
        System.out.println("[xxx]方法正常执行完成，计算结果是【】");
    }


    /*
    *
    * 我们可以在通知方法运行时，拿到目标方法的详细信息；
    *   1)只需要为通知方法的参数列表上写一个参数
    *       JoinPoint joinPoint:封装了当前目标方法的详细信息
    *   2）告诉Spring拿到计算结果或者异常信息
    *       表达式上加上returning="result"
    *       表达式上加上throwing="exception"
    *
    *
    * */
    @AfterThrowing(" execution(public int com.inter.impl.MyMathcal.*(..)) ")
    public static void logException(){
        System.out.println("[xxx]方法执行异常，异常信息是：【");
    }

    @After(" execution(public int com.inter..MyMathcal.*(..)) ")
    public static void logEnd(){
        System.out.println("[xxx]方法最终结束了");
    }


    /*
    *
    * @Around： 环绕通知，是Spring中最强大的通知,就是四合一通知
    *   环绕通知的优先级高于普通通知
    *
    * */
    @Around("hahaMyPoint()")
    public Object myAround(ProceedingJoinPoint pjp) throws Throwable {
        Object[] args = pjp.getArgs();
        Object proceed = pjp.proceed(args);
        return proceed;
    }


}

```

