# 工厂模式

实现了创建者和调用者的解耦

- 简单工厂模式 （虽然某种程度上不符合设计原则，但实际使用最多）

- 工厂方法模式 （不修改已有类的前提下，通过增加新的工厂类实现扩展）

- 抽象工厂模式 （不可以增加产品，可以增加产品簇）


## 简单工厂模式

又叫做静态工厂方法（Static Factory Method）模式，根据参数的不同返回不同类的实例

``` java
    //Car.java
    package factory.simple;
    public interface Car {
        void name();
    }
```

```java
    //Tesla.java
    package factory.simple;

    public class Tesla implements Car{
        @Override
        public void name() {
            System.out.println("特斯拉");
        }
    }

```
```java
    //Wuling.java
    package factory.simple;

    public class WuLing implements Car{
        @Override
        public void name() {
            System.out.println("五菱");
        }
    }

```
CarFactory负责汽车的生产（new xxx），不用自己去new对象
``` java
    //CarFactory.java
    package factory.simple;
    public class CarFactory {
        public static Car getCar(String car) {
            if ("五菱".equals(car)) {
                return new WuLing();
            } else if ("特斯拉".equals(car)) {
                return new Tesla();
            } else {
                return null;
            }
        }
    }
```

```java
    //Consumer.java
    package factory.simple;

    public class Consumer {
        public static void main(String[] args) {
    //        Car car1 = new WuLing();
    //        Car car2 = new Tesla();

            Car car1 = CarFactory.getCar("五菱");
            Car car2 = CarFactory.getCar("特斯拉");

            car1.name();
            car2.name();
        }
    }

```
简单工厂模式扩展性不好，当存在一种新的车型时，需要扩展CarFactory类，和OOP设计原则（开闭原则：对扩展开放，对修改关闭） 不符。


## 工厂方法模式

工厂方法模式是对简单工厂模式的进一步抽象化，其好处是可以使系统在**不修改原来代码**的情况下引进新的产品，即满足开闭原则。


```java
    //Car.java
    package factory.method;

    public interface Car {
        void name();
    }
```

```java
    //Tesla.java
    package factory.method;

    public class Tesla implements Car {
        @Override
        public void name() {
            System.out.println("特斯拉");
        }
    }
```

```java
    //WuLing.java
    package factory.method;

    public class WuLing implements Car {
        @Override
        public void name() {
            System.out.println("五菱");
        }
    }
```

使用接口CarFactory来将工厂抽象出来，便于扩展
```java
    //CarFactory.java
    package factory.method;

    public interface CarFactory {
        Car getCar();
    }
```

```java
    //TeslaFactory.java
    package factory.method;

    public class TeslaFactory implements CarFactory{
        @Override
        public Car getCar() {
            return new Tesla();
        }
    }

```

```java
    //WuLingFactory.java
    package factory.method;

    public class WuLingFactory implements CarFactory{
        @Override
        public Car getCar() {
            return new WuLing();
        }
    }
```


```java
    //Consumer.java
    package factory.method;

    public class Consumer {
        public static void main(String[] args) {
            Car car1 = new WuLingFactory().getCar();
            Car car2 = new TeslaFactory().getCar();
            car1.name();
            car2.name();
        }
    }
```

- 优点：
    - 用户只需要知道具体工厂的名称就可得到所要的产品，无须知道产品的具体创建过程。
    - 灵活性增强，对于新产品的创建，只需多写一个相应的工厂类。
    - 典型的解耦框架。高层模块只需要知道产品的抽象类，无须关心其他实现类，满足迪米特法则、依赖倒置原则和里氏替换原则。
- 缺点：
    - 类的个数容易过多，增加复杂度
    - 抽象产品只能生产一种产品，此弊端可使用抽象工厂模式解决。




## 抽象工厂模式

工厂的工厂，围绕一个超级工厂创建其他工厂。



![抽象工厂](/blog/designmode/abstractFactory.PNG)



超级工厂，定义产品簇
```java
    //ProductFactory.java
    package factory.abstract1;

    //抽象产品工厂
    public interface ProductFactory {

        //生产手机
        PhoneProduct phoneProduct();

        //生产路由器
        RouterProduct routerProduct();

    }
```

手机产品接口
```java
    //PhoneProduct.java
    package factory.abstract1;

    public interface PhoneProduct {
        void start();
        void shutdown();
        void callup();
        void sendSMS();
    }

```
路由器产品接口
```java
    //RouterProduct.java
   package factory.abstract1;

    public interface RouterProduct {
        void start();
        void shutdown();
        void openWifi();
        void setting();
    }
```
华为手机实现类
```java
    //HuaweiPhone.java
   package factory.abstract1;

    public class HuaweiPhone implements PhoneProduct {
        @Override
        public void start() {
            System.out.println("开启华为手机");
        }

        @Override
        public void shutdown() {
            System.out.println("关闭华为手机");
        }

        @Override
        public void callup() {
            System.out.println("华为打电话");
        }

        @Override
        public void sendSMS() {
            System.out.println("华为发短信");
        }
    }
```

小米手机实现类
```java
    //XiaomiPhone.java
   package factory.abstract1;

    public class XiaomiPhone implements PhoneProduct {
        @Override
        public void start() {
            System.out.println("开启小米手机");
        }

        @Override
        public void shutdown() {
            System.out.println("关闭小米手机");
        }

        @Override
        public void callup() {
            System.out.println("小米打电话");
        }

        @Override
        public void sendSMS() {
            System.out.println("小米发短信");
        }
    }
```

华为路由器实现类
```java
    //HuaweiRouter.java
    package factory.abstract1;

    public class HuaweiRouter implements RouterProduct {
        @Override
        public void start() {
            System.out.println("启动华为路由器");
        }

        @Override
        public void shutdown() {
            System.out.println("关闭华为路由器");
        }

        @Override
        public void openWifi() {
            System.out.println("打开华为Wifi");
        }

        @Override
        public void setting() {
            System.out.println("华为路由器设置");
        }
    }

```

小米路由器实现类
```java
    //XiaomiRouter.java
    package factory.abstract1;

    public class XiaomiRouter implements RouterProduct {
        @Override
        public void start() {
            System.out.println("启动小米路由器");
        }

        @Override
        public void shutdown() {
            System.out.println("关闭小米路由器");
        }

        @Override
        public void openWifi() {
            System.out.println("打开小米Wifi");
        }

        @Override
        public void setting() {
            System.out.println("小米路由器设置");
        }
    }

```

华为工厂
```java
    //HuaweiFactory.java
   package factory.abstract1;

    public class HuaweiFactory implements ProductFactory {
        @Override
        public PhoneProduct phoneProduct() {
            return new HuaweiPhone();
        }

        @Override
        public RouterProduct routerProduct() {
            return new HuaweiRouter();
        }
    }

```

小米工厂
```java
    //XiaomiFactory.java
    package factory.abstract1;

    public class XiaomiFactory implements ProductFactory {
        @Override
        public PhoneProduct phoneProduct() {
            return new XiaomiPhone();
        }

        @Override
        public RouterProduct routerProduct() {
            return new XiaomiRouter();
        }
    }

```


用户
```java
    //Client.java
   package factory.abstract1;

    public class Client {
        public static void main(String[] args) {

            System.out.println("===========小米系列产品============");
            //小米产品
            XiaomiFactory xiaomiFactory = new XiaomiFactory();
            PhoneProduct phoneProduct = xiaomiFactory.phoneProduct();
            phoneProduct.callup();
            phoneProduct.sendSMS();

            RouterProduct routerProduct = xiaomiFactory.routerProduct();
            routerProduct.openWifi();

            System.out.println("===========华为系列产品============");
            //华为产品
            HuaweiFactory huaweiFactory = new HuaweiFactory();
            phoneProduct = huaweiFactory.phoneProduct();
            phoneProduct.callup();
            phoneProduct.sendSMS();

            routerProduct = huaweiFactory.routerProduct();
            routerProduct.openWifi();

        }
    }


```

















- 优点
    - 具体产品再应用层的代码隔离，无需关心创建的细节
    - 将一个系列的产品统一到一起创建。

- 缺点
    - 规定了所有可能被创建的产品集合，产品簇中扩展新的产品困难；
    - 增加了系统的抽象性和理解难度