# 原型模式

用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。
简单来说：crlt+c 、crlt+v


## 浅克隆

创建一个新对象，新对象的属性和原来对象完全相同，对于非基本类型属性，仍指向原有属性所指向的对象的内存地址。

![运行结果](/blog/designmode/lightcopy.PNG)

1.实现Cloneable接口
2.重写clone（）方法
    

```java
//Video.java
    package prototype.demo1;

    import java.util.Date;

    /*
    * 1.实现Cloneable接口
    * 2.重写clone（）方法
    *
    * */

    public class Video implements Cloneable{
        private String name;
        private Date createTime;

        @Override
        protected Object clone() throws CloneNotSupportedException {
            return super.clone();
        }

        public Video() {
        }

        public Video(String name, Date createTime) {
            this.name = name;
            this.createTime = createTime;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Date getCreateTime() {
            return createTime;
        }

        public void setCreateTime(Date createTime) {
            this.createTime = createTime;
        }

        @Override
        public String toString() {
            return "Video{" +
                    "name='" + name + '\'' +
                    ", createTime=" + createTime +
                    '}';
        }
    }


```
```java
//Test.java
    package prototype.demo1;

    import java.util.Date;

    public class Test {
        public static void main(String[] args) throws CloneNotSupportedException {
            Video v1 = new Video("老菊教你学java01",new Date());
            System.out.println("v1:"+v1);
            System.out.println("v1 hash:"+v1.hashCode());

            Video v2 = (Video) v1.clone();
            System.out.println("v2:"+v2);
            System.out.println("v2 hash:"+v2.hashCode());

        }

    }


```
运行结果：

![运行结果](/blog/designmode/lightcopyresult.PNG)




## 深克隆

重写clone方法，将克隆对象的属性也进行克隆

```java
//Video.java
    package prototype.demo02;

    import java.util.Date;

    /*
    * 1.实现Cloneable接口
    * 2.重写clone（）方法
    *
    * */

    public class Video implements Cloneable {
        private String name;
        private Date createTime;

        @Override
        protected Object clone() throws CloneNotSupportedException {

            Object object = super.clone();
            //将这个对象的属性也进行克隆
            Video v = (Video) object;
            v.createTime = (Date) this.createTime.clone();

            return v;
        }

        public Video() {
        }

        public Video(String name, Date createTime) {
            this.name = name;
            this.createTime = createTime;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Date getCreateTime() {
            return createTime;
        }

        public void setCreateTime(Date createTime) {
            this.createTime = createTime;
        }

        @Override
        public String toString() {
            return "Video{" +
                    "name='" + name + '\'' +
                    ", createTime=" + createTime +
                    '}';
        }
    }

```

```java
//Test.java
    package prototype.demo02;

    import java.util.Date;

    public class Test {
        public static void main(String[] args) throws CloneNotSupportedException {
            Date date = new Date();
            Video v1 = new Video("老菊教你学java01",date);
            Video v2 = (Video) v1.clone();
            System.out.println("v1:"+v1);
            System.out.println("v2:"+v2);

            System.out.println("-------------------------");
            date.setTime(123423512);
            System.out.println("v1:"+v1);
            System.out.println("v2:"+v2);

        }

    }

```

运行结果：

![运行结果](/blog/designmode/deepcopyresult.PNG)

可以看出，此时改变date，而克隆出来的v2的date并没有发生改变。这就是深克隆

![运行结果](/blog/designmode/deepcopy.PNG)



## 原型模式的优缺点


- 优点
    - Java 自带的原型模式基于内存二进制流的复制，在性能上比直接 new 一个对象更加优良。
    - 可以使用深克隆方式保存对象的状态，使用原型模式将对象复制一份，并将其状态保存起来，简化了创建对象的过程，以便在需要的时候使用（例如恢复到历史某一状态），可辅助实现撤销操作。

- 缺点
    - 需要为每一个类都配置一个 clone 方法
    - clone 方法位于类的内部，当对已有类进行改造的时候，需要修改代码，违背了开闭原则。
    - 当实现深克隆时，需要编写较为复杂的代码，而且当对象之间存在多重嵌套引用时，为了实现深克隆，每一层对象对应的类都必须支持深克隆，实现起来会比较麻烦。因此，深克隆、浅克隆需要运用得当。