# Docker基础

> 参考： https://blog.csdn.net/pjsdsg/article/details/90445128


Docker 学习

- Docker概述
- Docker安装
- Docker命令
  - 镜像命令
  - 容器命令
  - 操作命令
  - ...
- Docker镜像！
- 容器数据卷
- DockerFile
- Docker网络原理
- IDEA整合Docker
- Docker Compose
- Docker Swarm
- CI\CD Jenkins





## Docker概述

###	Docker为什么出现？

开发--运维，环境配置麻烦

发布一个项目 jar + （Redis MySql jdk ES），项目带上环境，能跨平台。

java --- jar (环境) --- 打包项目带上环境（镜像）--- （Docker仓库：商店） --- 下载我们发布的镜像 --- 直接运行

![docker1](/blog/devops/docker1.png)

###	Docker历史

2010年成立了DotCloud，做pass的云计算服务，容器化技术Docker。初期没有引起行业注意。

`开源`

2013年开源，从此火爆，轻巧。





### 容器化技术

--容器化技术不是模拟的一个完整的操作系统--



> ​	DevOps（开发、运维）

**更快速的的交付和部署**

​	传统：一堆帮助文档，安装程序

​	Docker：打包镜像发布测试，一键运行

**更便捷的升级和扩缩容**

使用了Docker之后，我们部署应用就和搭积木一样.

**更简单的系统运维**

开发和测试环境高度一致

**更高效的计算资源利用**

Docker是内核级别的虚拟化，可以在一个物理机上运行很多的容器实例，服务器的性能被压榨到极致。



##	Docker 命令



###	帮助命令

```shell
docker version
docker info
docker 命令 --help
```

###	镜像命令

```shell
docker images #查看所有镜像
-a #所有镜像
-q #只显示id
```

```shell
docker search mysql #搜索镜像
--filter=STARS=3000 #搜索超过3000赞的镜像
```

```shell
docker pull mysql #下载镜像
docker pull mysql:5.7 
```

```shell	
docker rmi -f imageid
docker rmi -f $(docker images -aq) #删除全部容器
```

###	容器命令	

**新建容器并启动**

```shell
docker run [可选参数] image

#参数说明
--name="name" 容器名字，用来区分容器
-d 			  后台方式运行
-it 		  使用交互方式运行，进入容器查看内容
exit		  从容器中退出主机,
-p 			  端口映射
```

**端口映射：**

![network](/blog/devops/dockernet.PNG)




**列出所有容器**

```shell
docker ps

#参数说明
-a			  列出当前正在运行的容器+带出历史运行过的容器
-n=?		  显示最近新建的容器
-q			  只显示容器的编号
```

**退出容器**

```shell
exit #直接容器停止并退出
crtl + P + Q #容器不停止退出
```

**删除容器**

```shell
docker rm 容器id #删除指定的容器，不能删除正在运行的容器
docker rm -f $(docker ps -aq) #删除所有容器
docker ps -a -q|xargs docker rm #删除所有容器
```

**启动和停止容器的操作**

```shell
docker start 容器id
docker restart 容器id
docker stop 容器id
docker kill 容器id
```

###	常用其他命令

**docker启动命令**
```shell
systemctl start docker
```

**后台启动容器**

```shell
docker run -d centos
```

**查看日志**

```shell
docker logs
```

**查看容器内进程信息**

```shell
docker top id
```

**查看容器元数据**

```shell
docker inspect id
```

**进入当前正在运行的容器**

```shell
docker exec -it id /bin/bash
docker attach id /bin/bash

```

**从容器内拷贝文件到主机上**

```shell
docker cp id:/home/test.java /home
```

### 小结

![docker2](/blog/devops/docker2.png)



## 可视化

- portainer
- Rancher

```shell
docker run -d -p 8055:9000 \
--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

登录页面

![docker3](/blog/devops/docker3.PNG)

选择本地
![docker4](/blog/devops/docker4.PNG)

portainer首页
![docker5](/blog/devops/docker5.PNG)




## Docker镜像原理

### UnionFS(联合文件系统)

UnionFS(联合文件系统): Union文件系统(UnionFS)是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union文件系统是Docker镜像的基础。镜像可以通过分层来进行继承, 基于基础镜像(没有父镜像)， 可以制作各种具体的应用镜像。
特性: 一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。


### Docker镜像加载原理

**bootfs(boot file system)**主要包含bootloader和kernel，bootloader主要是引导加载kernel，Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的, 包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。

rootfs(root file system), 在bootfs之上。包含的就是典型Linux系统中的/dev, /proc, /bin, /etc等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。
![docker7](/blog/devops/docker7.PNG)

对于一个精简的OS，rootfs可以很小，只包含基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供rootfs就可以了。对于不同的linux发行版，bootfs基本是一致的，bootfs会有差别，因此不同的发行版版可以公用bootfs。



### 分层的理解

当我们docker pull下载镜像的时候，可以看到是一层一层的下载。

![docker8](/blog/devops/docker8.PNG)

docker inspect redis，看一下redis镜像的元数据，发现确实有6层Layer

![docker9](/blog/devops/docker9.PNG)

tomcat镜像：

![docker6](/blog/devops/docker6.PNG)

采用这种分层结构最大的一个好处就是共享资源，比如有多个镜像都从相同的base镜像构建而来，那么宿主机只需要在磁盘上保存一份base镜像，同时内存中也只需要加载一份base镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。 

docker 镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作 “容器层” ，“容器层” 之下的都叫镜像层。


### commit镜像

```shell
docker commit 提交容器成为一个新的副本

docker commit -m="描述" -a="作者" 容器id 目标镜像名:[tag]
#  docker commit -a="tangjian" -m="wo zi ji de tomcat" d5c11c271c0d mytomcat:1.0
```
可以看到镜像内多了一个mytomcat
![docker10](/blog/devops/docker10.PNG)




## 容器数据卷

### 什么是容器数据卷

容器之间可以有一个数据共享的技术，Docker容器中产生的数据，同步到本地。这就是数据卷技术。将容器的目录挂载到linux上面。

![docker11](/blog/devops/docker11.PNG)

### 使用数据卷

> 方式一：直接使用命令来挂载

```shell
docker run -it -v 主机目录：容器内目录
# docker run -it -v /home/ceshi:/home --privileged=true centos /bin/bash
```
使用docker inspect查看目录已挂载

![docker12](/blog/devops/docker12.PNG)

在主机的/home/ceshi 下新建test.java,在容器内也能看到，反之亦可。

![docker13](/blog/devops/docker13.PNG)

以后修改只需要在本地修改即可，容器内会自动同步


### MySql的数据持久化

```shell
docker run -d -p 3306:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --privileged=true --name mysql01 mysql:5.7

# -d 后台运行
# -p 端口映射
# -v 数据卷挂载
# -e 环境配置
# --name 容器名称
```

容器启动后，再用navicat连接测试

![docker14](/blog/devops/docker14.PNG)

创建一个数据库testDB

![docker16](/blog/devops/docker16.PNG)

在主机目录上也可以看到

![docker15](/blog/devops/docker15.PNG)

将容器删除后，发现挂载到本地的数据卷依旧没有丢失，这就实现了容器数据持久化的功能

![docker17](/blog/devops/docker17.PNG)


### 具名和匿名挂载

```shell

#匿名挂载
-v 容器内路径
docker run -d -p 8088:80 --name nginx01 -v /etc/nginx nginx

#查看所有卷的情况
docker volume ls

DRIVER              VOLUME NAME
local               0241a81ce6ed2227d3e98328d693535b5c480a8385991343849e4dc055ab0744
local               08c578a4a64aae0e8ce0b892f7c41b39a3e7ee160c53e27c190f22a7ed950643
local               0b50662d90b2526a8493bf198c25b06d9a4594ae5fdfc7477ab57307ed0a9077
local               0b756a0df92b8f6adfddcce4f68bd130b228a8139924fc198cdd34601b33bf5b


```
```shell
#具名挂载

docker run -d -p --name nginx02 -v juming-nginx:/etc/nginx nginx

docker volume ls

local               e0494ea792ec25685377327907f58565749ab20542473e50bf9bda0c05581c28
local               ed604977db946d4d77b883f00eaed72aa6b190e7aeb04817d946187c61c29d5e
local               fc5ba61d912c4552264fd9f5e9250964d88f9d5584e566591492d16110f6f04e
local               juming-nginx



docker volume inspect juming-nginx

[
    {
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/juming-nginx/_data",
        "Name": "juming-nginx",
        "Options": {},
        "Scope": "local"
    }
]

```

所有的docker容器内的卷，没有指定目录的情况下都是在/var/lib/docker/volumes/xxx/_data下。
我们通过具名挂载可以放方便的找到卷，大多数情况在使用**具名挂载**


如何确定是具名挂载和匿名挂载，还是指定路径挂载
```shell
-v 容器内路径        # 匿名挂载
-v 卷名：容器内路径     # 具名挂载
-v 主机路径：容器内路径  # 指定路径挂载
```

拓展
```shell
#改变读写权限
ro  #只读,说明这个路径只能通过宿主机来操作，容器内部是无法操作的
rw  #可读可写

#一旦这个设置了容器权限，容器对我们挂载出来的内容就有限定了
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx
```

### 初识DockerFile

通过DockerFile用来构建docker镜像并挂载数据卷

dockerfile脚本
```shell
FROM centos

VOLUME ["volume01","volume02"]
#VOLUME [卷名："volume01",卷名："volume02"]

CMD echo "------end-------"

CMD /bin/bash

```
脚本指令的含义

![docker23](/blog/devops/docker23.PNG)


运行脚本进行构建
```shell
docker build -f dockerfile1 -t tangjian/centos .
```

脚本执行结果：

![docker18](/blog/devops/docker18.PNG)



启动并进入创建的镜像内，发现生成的数据卷（匿名）

![docker19](/blog/devops/docker19.PNG)

在数据卷目录新建一个文件

![docker22](/blog/devops/docker22.PNG)

使用docker inspect查看卷挂载的路径

![docker20](/blog/devops/docker20.PNG)


进入卷挂载路径，发现文件已经同步出去

![docker21](/blog/devops/docker21.PNG)


### 数据卷容器

多个容器同步数据，实现数据共享

```shell
# --volumes-from
docker run -it --name centos2 --volumes-from inspiring_haibt tangjian/centos

```
两个容器可以同步数据

![docker24](/blog/devops/docker24.PNG)

删除一个容器后，其他容器仍然能访问文件，各容器之间是一种双向“拷贝”（浅拷贝）

结论：
  容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有容器使用为止。
  但是一旦持久化到了本地，本地的数据是不会删除的。




## DockerFile

构建步骤：

1、编写一个dockerfile文件

2、docker build 构建成为一个镜像

3、docker run 运行镜像

4、docker push 发布镜像（DockerHub、阿里云镜像仓库等）


