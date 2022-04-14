# Service Mesh 服务网格化

![service mesh](/blog/microservice/servicemesh.PNG)



## 未使用Mesh出现的问题

- 客户端中间件版本的不统一。有些服务需要对熔断或其他组件升级时会出现版本不统一的问题，需要一些逻辑去兼容差异

- 业务与框架耦合

- 流量调度的诉求

- 框架不断升级

- 机器资源逐年增加