# 建造者模式

建造者模式也属于创建型模式，它提供了一种创建对象的最佳方式。在用户不知道对象的建造过程和细节的情况下就可以直接创建复杂对象。由Director指挥Builder完成对象创建。

![建造者模式](/blog/designmode/buildermode.PNG)

Product: 最终要生成的对象，例如这里的房子实例。
```java
    //Product.java
    package factory.builder;

    //产品：房子
    public class Product {
        private String buildA;
        private String buildB;
        private String buildC;
        private String buildD;

        public String getBuildA() {
            return buildA;
        }

        public void setBuildA(String buildA) {
            this.buildA = buildA;
        }

        public String getBuildB() {
            return buildB;
        }

        public void setBuildB(String buildB) {
            this.buildB = buildB;
        }

        public String getBuildC() {
            return buildC;
        }

        public void setBuildC(String buildC) {
            this.buildC = buildC;
        }

        public String getBuildD() {
            return buildD;
        }

        public void setBuildD(String buildD) {
            this.buildD = buildD;
        }

        @Override
        public String toString() {
            return "Product{" +
                    "buildA='" + buildA + '\'' +
                    ", buildB='" + buildB + '\'' +
                    ", buildC='" + buildC + '\'' +
                    ", buildD='" + buildD + '\'' +
                    '}';
        }

    }


```


Builder： 构建者的抽象基类（有时会使用接口代替）。其定义了构建Product的抽象步骤，其实体类需要实现这些步骤。其会包含一个用来返回最终产品的方法Product getProduct()
```java
    //Builder.java
    package factory.builder;

    //抽象的建造者
    public abstract class Builder {

        abstract void buildA();//地基
        abstract void buildB();//钢筋工程
        abstract void buildC();//铺电线
        abstract void buildD();//粉饰

        abstract Product getProduct();

    }

```


Worker: Builder的实现类。
```java
    //Worker.java
    package factory.builder;
    //具体的建造者：工人
    public class Worker extends Builder{

        private Product product;

        public Worker(){
            product = new Product();
        }

        @Override
        void buildA() {
            product.setBuildA("地基");
            System.out.println("地基");
        }

        @Override
        void buildB() {
            product.setBuildB("钢筋工程");
            System.out.println("钢筋工程");
        }

        @Override
        void buildC() {
            product.setBuildC("铺电线");
            System.out.println("铺电线");
        }

        @Override
        void buildD() {
            product.setBuildD("粉刷");
            System.out.println("粉刷");
        }

        @Override
        Product getProduct() {
            return product;
        }
    }

```


Director: 决定如何构建最终产品的算法. 其会包含一个负责组装的方法build(Builder builder)， 在这个方法中通过调用builder的方法，就可以设置builder，等设置完成后，就可以通过builder的 getProduct() 方法获得最终的产品。
Director类中还可以改变builder的建造顺序
```java
    //Director.java
    package factory.builder;

    //指挥：负责指挥构建一个工程
    public class Director {

        public Product build(Builder builder){
            builder.buildA();
            builder.buildB();
            builder.buildC();
            builder.buildD();
            return builder.getProduct();
        }

    }

```
最后在Test类中使用director.build()方法完成构造
```java
    //Test.java
    package factory.builder;

    public class Test {
        public static void main(String[] args) {
            Director director = new Director();
            Product product = director.build(new Worker());
            System.out.println(product.toString());
        }
    }

```

- 优点
    - 产品的建造和表时分离，实现了解耦，使创建过程更加清晰
    - 具体的建造者类之间使相互独立的，这有利于系统的扩展。（增加新的具体建造者无需修改原有类库的代码，符合开闭原则）
- 缺点
    - 建造者模式所创建的产品一般具有较多相同点，其组成部分相似（例如造房子需要相同的材料、工序等）
    - 如果产品内部变化复杂，可能会需要定义很多具体建造者类来实现这种变化，造成系统冗余