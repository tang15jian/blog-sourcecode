# 单例模式

通过单例模式的方法创建的类在当前进程中只有一个实例

- 饿汉式
- 懒汉式

##	饿汉式 

```java
// 饿汉式单例
public class HungrySingleton {

    private HungrySingleton() {}
    
    private final static HungrySingleton HUNGRY = new HungrySingleton();

    public static HungrySingleton getInstance() {
        return HUNGRY;
    }
    
}
```

在初始化时就将实例建好，如果实例内部存在大量开辟内存的行为且该实例没有被调用的情况下容易浪费空间。





##		懒汉式

在未调用前仅做声明，调用后再生成实例

```java
//懒汉式
public class LazySingleton {

    private static LazySingleton LAZYSINGELTON;
    
    private LazySingleton() {
    }
    
    public static LazySingleton getInstance() {
        if (null == LAZYSINGELTON) {
            LAZYSINGELTON = new LazySingleton();
        }
        return LAZYSINGELTON;
    }

}
```

懒汉式存在多线程问题，需加检测锁



```java
//带锁的懒汉式
public class LazySingleton {

    private volatile static LazySingleton LAZYSINGELTON;
    
    private LazySingleton() {
        System.out.println(Thread.currentThread().getName() + " done");
    }

    //双重检测锁模式的懒汉式单例  DCL懒汉式
    public static LazySingleton getInstance() {
        if (null == LAZYSINGELTON) {
            synchronized (LazySingleton.class) {
                if (null == LAZYSINGELTON) {
                    LAZYSINGELTON = new LazySingleton();//不是一个原子性操作
                    /*
                     * 1.分配内存空间
                     * 2.执行构造方法，初始化对象
                     * 3.把这个对象指向这个空间
                     *
                     * */
                }
            }
        }
        return LAZYSINGELTON;
    }

    //多线程并发
    public static void main(String[] args) {

        for (int i = 0; i < 200; i++) {
            new Thread(() -> {
                LazySingleton.getInstance();
            }).start();
        }
    }
    
}

```

