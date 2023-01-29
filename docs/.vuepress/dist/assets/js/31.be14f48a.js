(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{376:function(a,t,r){"use strict";r.r(t);var e=r(26),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"kubenetes简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubenetes简介"}},[a._v("#")]),a._v(" Kubenetes简介")]),a._v(" "),r("p",[a._v("k8s 是谷歌在2014年开源的容器化集群管理系统，让部署容器化应用更加简洁和高效。")]),a._v(" "),r("p",[a._v("特点：")]),a._v(" "),r("ul",[r("li",[a._v("轻量级： 消耗资源小")]),a._v(" "),r("li",[a._v("开源")]),a._v(" "),r("li",[a._v("弹性伸缩")]),a._v(" "),r("li",[a._v("负载均衡 ： IPVS")])]),a._v(" "),r("h2",{attrs:{id:"基础概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[a._v("#")]),a._v(" 基础概念")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Pod:  控制器类型  K8S 网络通讯模式")])]),a._v(" "),r("li",[r("p",[a._v("资源清单： 资源清单的语法   编写 Pod   掌握 Pod 的生命周期")])]),a._v(" "),r("li",[r("p",[a._v("Pod 控制器：各种控制器的特点以及使用定义方式")])]),a._v(" "),r("li",[r("p",[a._v("服务发现： SVC 原理及其构建方式")])]),a._v(" "),r("li",[r("p",[a._v("存储：多种存储类型的特点 并且能够在不同环境中选择合适的存储方案")])]),a._v(" "),r("li",[r("p",[a._v("调度器：调度器原理  根据要求把Pod 定义到想要的节点运行")])]),a._v(" "),r("li",[r("p",[a._v("安全：集群的认证  鉴权  访问控制 原理及其流程")])]),a._v(" "),r("li",[r("p",[a._v("HELM：(Linux yum)   掌握 HELM 原理   HELM 模板自定义  HELM 部署一些常用插件")])]),a._v(" "),r("li",[r("p",[a._v("运维：修改Kubeadm 达到证书可用期限为 10年   能够构建高可用的 Kubernetes 集群")])])]),a._v(" "),r("h2",{attrs:{id:"k8s功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#k8s功能"}},[a._v("#")]),a._v(" k8s功能")]),a._v(" "),r("h3",{attrs:{id:"自动装箱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱"}},[a._v("#")]),a._v(" 自动装箱")]),a._v(" "),r("p",[a._v("基于容器对应用运行环境的资源配置要求自动部署应用容器")]),a._v(" "),r("h3",{attrs:{id:"自我修复-自愈能力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自我修复-自愈能力"}},[a._v("#")]),a._v(" 自我修复(自愈能力)")]),a._v(" "),r("p",[a._v("当容器失败时，会对容器进行重启")]),a._v(" "),r("p",[a._v("当所部署的Node节点有问题时，会对容器进行重新部署和重新调度")]),a._v(" "),r("p",[a._v("当容器未通过监控检查时，会关闭此容器直到容器正常运行时，才会对外提供服务")]),a._v(" "),r("p",[r("img",{attrs:{src:"/blog/devops/k8s/image-20200928101336750.png",alt:"image-20200928101336750"}})]),a._v(" "),r("p",[a._v("如果某个服务器上的应用不响应了，Kubernetes会自动在其它的地方创建一个")]),a._v(" "),r("p",[r("img",{attrs:{src:"/blog/devops/k8s/image-20201122112241092.png",alt:"image-20201122112241092"}})]),a._v(" "),r("h3",{attrs:{id:"水平扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平扩展"}},[a._v("#")]),a._v(" 水平扩展")]),a._v(" "),r("p",[a._v("通过简单的命令、用户UI 界面或基于CPU 等资源使用情况，对应用容器进行规模扩大或规模剪裁")]),a._v(" "),r("blockquote",[r("p",[a._v("当我们有大量的请求来临时，我们可以增加副本数量，从而达到水平扩展的效果")])]),a._v(" "),r("p",[a._v("当黄色应用过度忙碌，会来扩展一个应用")]),a._v(" "),r("p",[r("img",{attrs:{src:"/blog/devops/k8s/image-20201122112301750.png",alt:"image-20201122112301750"}})]),a._v(" "),r("h3",{attrs:{id:"服务发现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务发现"}},[a._v("#")]),a._v(" 服务发现")]),a._v(" "),r("p",[a._v("用户不需使用额外的服务发现机制，就能够基于Kubernetes 自身能力实现服务发现和负载均衡")]),a._v(" "),r("blockquote",[r("p",[a._v("对外提供统一的入口，让它来做节点的调度和负载均衡， 相当于微服务里面的网关？")])]),a._v(" "),r("p",[r("img",{attrs:{src:"/blog/devops/k8s/image-20200928101711968.png",alt:"image-20200928101711968"}})]),a._v(" "),r("h3",{attrs:{id:"滚动更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#滚动更新"}},[a._v("#")]),a._v(" 滚动更新")]),a._v(" "),r("p",[a._v("可以根据应用的变化，对应用容器运行的应用，进行一次性或批量式更新")]),a._v(" "),r("blockquote",[r("p",[a._v("添加应用的时候，不是加进去就马上可以进行使用，而是需要判断这个添加进去的应用是否能够正常使用")])]),a._v(" "),r("h3",{attrs:{id:"版本回退"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[a._v("#")]),a._v(" 版本回退")]),a._v(" "),r("p",[a._v("可以根据应用部署情况，对应用容器运行的应用，进行历史版本即时回退")]),a._v(" "),r("blockquote",[r("p",[a._v("类似于Git中的回滚")])]),a._v(" "),r("h3",{attrs:{id:"密钥和配置管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#密钥和配置管理"}},[a._v("#")]),a._v(" 密钥和配置管理")]),a._v(" "),r("p",[a._v("在不需要重新构建镜像的情况下，可以部署和更新密钥和应用配置，类似热部署。")]),a._v(" "),r("h3",{attrs:{id:"存储编排"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储编排"}},[a._v("#")]),a._v(" 存储编排")]),a._v(" "),r("p",[a._v("自动实现存储系统挂载及应用，特别对有状态应用实现数据持久化非常重要")]),a._v(" "),r("p",[a._v("存储系统可以来自于本地目录、网络存储(NFS、Gluster、Ceph 等)、公共云存储服务")]),a._v(" "),r("h3",{attrs:{id:"批处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#批处理"}},[a._v("#")]),a._v(" 批处理")]),a._v(" "),r("p",[a._v("提供一次性任务，定时任务；满足批量数据处理和分析的场景")]),a._v(" "),r("h2",{attrs:{id:"基础组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础组件"}},[a._v("#")]),a._v(" 基础组件")]),a._v(" "),r("p",[r("img",{attrs:{src:"/blog/devops/k8s/image-20200928103059652.png",alt:"image-20200928103059652.png"}})]),a._v(" "),r("h3",{attrs:{id:"api-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-server"}},[a._v("#")]),a._v(" API Server")]),a._v(" "),r("p",[a._v("所有服务访问统一入口")]),a._v(" "),r("h3",{attrs:{id:"crontroller-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crontroller-manager"}},[a._v("#")]),a._v(" Crontroller Manager")]),a._v(" "),r("p",[a._v("维持副本期望数目")]),a._v(" "),r("h3",{attrs:{id:"scheduler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[a._v("#")]),a._v(" Scheduler")]),a._v(" "),r("p",[a._v("负责介绍任务，选择合适的节点进行分配任务")]),a._v(" "),r("h3",{attrs:{id:"etcd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[a._v("#")]),a._v(" ETCD")]),a._v(" "),r("p",[a._v("键值对数据库  储存K8S集群所有重要信息（持久化）")]),a._v(" "),r("h3",{attrs:{id:"kubelet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubelet"}},[a._v("#")]),a._v(" Kubelet")]),a._v(" "),r("p",[a._v("直接跟容器引擎交互实现容器的生命周期管理")]),a._v(" "),r("h3",{attrs:{id:"kube-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy"}},[a._v("#")]),a._v(" Kube-proxy")]),a._v(" "),r("p",[a._v("负责写入规则至 IPTABLES、IPVS 实现服务映射访问的")]),a._v(" "),r("h3",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),r("p",[a._v("容器")]),a._v(" "),r("h2",{attrs:{id:"扩展组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扩展组件"}},[a._v("#")]),a._v(" 扩展组件")]),a._v(" "),r("h3",{attrs:{id:"coredns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coredns"}},[a._v("#")]),a._v(" CoreDNS")]),a._v(" "),r("p",[a._v("可以为集群中的SVC创建一个域名IP的对应关系解析")]),a._v(" "),r("h3",{attrs:{id:"dashboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[a._v("#")]),a._v(" Dashboard")]),a._v(" "),r("p",[a._v("给 K8S 集群提供一个 B/S 结构访问体系")]),a._v(" "),r("h3",{attrs:{id:"ingress-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ingress-controller"}},[a._v("#")]),a._v(" Ingress Controller")]),a._v(" "),r("p",[a._v("官方只能实现四层代理，INGRESS 可以实现七层代理")]),a._v(" "),r("h3",{attrs:{id:"federation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#federation"}},[a._v("#")]),a._v(" Federation")]),a._v(" "),r("p",[a._v("提供一个可以跨集群中心多K8S统一管理功能")]),a._v(" "),r("h3",{attrs:{id:"promethueus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promethueus"}},[a._v("#")]),a._v(" Promethueus")]),a._v(" "),r("p",[a._v("提供K8S集群的监控能力")]),a._v(" "),r("h3",{attrs:{id:"elk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elk"}},[a._v("#")]),a._v(" ELK")]),a._v(" "),r("p",[a._v("提供 K8S 集群日志统一分析接入平台")]),a._v(" "),r("h2",{attrs:{id:"流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[a._v("#")]),a._v(" 流程")]),a._v(" "),r("p",[r("img",{attrs:{src:"/blog/devops/k8s/image-20201122163512535.png",alt:"image-20201122163512535"}})]),a._v(" "),r("ul",[r("li",[a._v("通过Kubectl提交一个创建RC（Replication Controller）的请求，该请求通过APlserver写入etcd")]),a._v(" "),r("li",[a._v("此时Controller Manager通过API Server的监听资源变化的接口监听到此RC事件")]),a._v(" "),r("li",[a._v("分析之后，发现当前集群中还没有它所对应的Pod实例")]),a._v(" "),r("li",[a._v("于是根据RC里的Pod模板定义一个生成Pod对象，通过APIServer写入etcd")]),a._v(" "),r("li",[a._v("此事件被Scheduler发现，它立即执行执行一个复杂的调度流程，为这个新的Pod选定一个落户的Node，然后通过API Server讲这一结果写入etcd中")]),a._v(" "),r("li",[a._v('目标Node上运行的Kubelet进程通过APiserver监测到这个"新生的Pod.并按照它的定义，启动该Pod并任劳任怨地负责它的下半生，直到Pod的生命结束')]),a._v(" "),r("li",[a._v("随后，我们通过Kubectl提交一个新的映射到该Pod的Service的创建请求")]),a._v(" "),r("li",[a._v("ControllerManager通过Label标签查询到关联的Pod实例，然后生成Service的Endpoints信息，并通过APIServer写入到etod中，")]),a._v(" "),r("li",[a._v("接下来，所有Node上运行的Proxy进程通过APIServer查询并监听Service对象与其对应的Endponts信息，建立一个软件方式的负载均衡器来实现Service访问到后端Pod的流量转发功能")])])])}),[],!1,null,null,null);t.default=v.exports}}]);