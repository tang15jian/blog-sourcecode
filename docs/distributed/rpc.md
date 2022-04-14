# RPC

## 什么是RPC

> 参考：谁能用通俗的语言解释一下什么是 RPC 框架？ - 牛客网的回答 - 知乎
https://www.zhihu.com/question/25536695/answer/1846152026

> 参考：https://dubbo.apache.org/zh/docs/v2.7/user/preface/architecture/

RPC（Remote Procedure Call）—远程过程调用，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。也就是说两台服务器A，B，一个应用部署在A服务器上，想要调用B服务器上应用提供的方法，由于不在一个内存空间，不能直接调用，需要通过网络来表达调用的语义和传达调用的数据。

rpc两个核心模块：通讯，序列化

### rpc调用过程

![rpc1](/blog/distributed/rpc1.jpg)

1. Client像调用本地服务似的调用远程服务；
2. Client stub接收到调用后，将方法、参数序列化
3. 客户端通过sockets将消息发送到服务端
4. Server stub 收到消息后进行解码（将消息对象反序列化）
5. Server stub 根据解码结果调用本地的服务
6. 本地服务执行(对于服务端来说是本地执行)并将结果返回给Server stub
7. Server stub将返回结果打包成消息（将结果消息对象序列化）
8. 服务端通过sockets将消息发送到客户端
9. Client stub接收到结果消息，并进行解码（将结果消息发序列化）
10. 客户端得到最终结果。


### 业界常用的 RPC 框架

- Dubbo: Dubbo 是阿里巴巴公司开源的一个高性能优秀的服务框架，使得应用可通过高性能的 RPC 实现服务的输出和输入功能，可以和 Spring框架无缝集成。目前 Dubbo 已经成为 Spring Cloud Alibaba 中的官方组件。

- gRPC ：gRPC 是可以在任何环境中运行的现代开源高性能RPC框架。它可以通过可插拔的支持来有效地连接数据中心内和跨数据中心的服务，以实现负载平衡，跟踪，运行状况检查和身份验证。它也适用于分布式计算的最后一英里，以将设备，移动应用程序和浏览器连接到后端服务。

- Hessian： Hessian是一个轻量级的 remoting-on-http 工具，使用简单的方法提供了 RMI 的功能。 相比 WebService，Hessian 更简单、快捷。采用的是二进制 RPC协议，因为采用的是二进制协议，所以它很适合于发送二进制数据。


## Dubbo

Dubbo 采用全 Spring 配置方式，透明化接入应用，对应用没有任何 API 侵入，只需用 Spring 加载 Dubbo 的配置即可，Dubbo 基于 Spring 的 Schema 扩展 进行加载。

### Dubbo 架构

![dubbo1](/blog/distributed/dubbo1.PNG)


调用关系说明：

0. 服务容器负责启动，加载，运行服务提供者。
1. 服务提供者在启动时，向注册中心注册自己提供的服务。
2. 服务消费者在启动时，向注册中心订阅自己所需的服务。
3. 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。
4. 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。
5. 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。
Dubbo 架构具有以下几个特点，分别是连通性、健壮性、伸缩性、以及向未来架构的升级性。

### 注册中心zookeeper

使用docker 安装zookeeper

```shell
docker pull zookeeper
docker run --name some-zookeeper --restart always -d zookeeper
#通过Zookeeper command line client连接
docker run -it --rm --link some-zookeeper:zookeeper zookeeper zkCli.sh -server zookeeper
```


