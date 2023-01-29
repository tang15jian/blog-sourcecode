(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{400:function(s,a,e){"use strict";e.r(a);var t=e(26),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker基础"}},[s._v("#")]),s._v(" Docker基础")]),s._v(" "),e("blockquote",[e("p",[s._v("参考： https://blog.csdn.net/pjsdsg/article/details/90445128")])]),s._v(" "),e("p",[s._v("Docker 学习")]),s._v(" "),e("ul",[e("li",[s._v("Docker概述")]),s._v(" "),e("li",[s._v("Docker安装")]),s._v(" "),e("li",[s._v("Docker命令\n"),e("ul",[e("li",[s._v("镜像命令")]),s._v(" "),e("li",[s._v("容器命令")]),s._v(" "),e("li",[s._v("操作命令")]),s._v(" "),e("li",[s._v("...")])])]),s._v(" "),e("li",[s._v("Docker镜像！")]),s._v(" "),e("li",[s._v("容器数据卷")]),s._v(" "),e("li",[s._v("DockerFile")]),s._v(" "),e("li",[s._v("Docker网络原理")]),s._v(" "),e("li",[s._v("IDEA整合Docker")]),s._v(" "),e("li",[s._v("Docker Compose")]),s._v(" "),e("li",[s._v("Docker Swarm")]),s._v(" "),e("li",[s._v("CI\\CD Jenkins")])]),s._v(" "),e("h2",{attrs:{id:"docker概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker概述"}},[s._v("#")]),s._v(" Docker概述")]),s._v(" "),e("h3",{attrs:{id:"docker为什么出现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker为什么出现"}},[s._v("#")]),s._v(" Docker为什么出现？")]),s._v(" "),e("p",[s._v("开发--运维，环境配置麻烦")]),s._v(" "),e("p",[s._v("发布一个项目 jar + （Redis MySql jdk ES），项目带上环境，能跨平台。")]),s._v(" "),e("p",[s._v("java --- jar (环境) --- 打包项目带上环境（镜像）--- （Docker仓库：商店） --- 下载我们发布的镜像 --- 直接运行")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker1.png",alt:"docker1"}})]),s._v(" "),e("h3",{attrs:{id:"docker历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker历史"}},[s._v("#")]),s._v(" Docker历史")]),s._v(" "),e("p",[s._v("2010年成立了DotCloud，做pass的云计算服务，容器化技术Docker。初期没有引起行业注意。")]),s._v(" "),e("p",[e("code",[s._v("开源")])]),s._v(" "),e("p",[s._v("2013年开源，从此火爆，轻巧。")]),s._v(" "),e("h3",{attrs:{id:"容器化技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器化技术"}},[s._v("#")]),s._v(" 容器化技术")]),s._v(" "),e("p",[s._v("--容器化技术不是模拟的一个完整的操作系统--")]),s._v(" "),e("blockquote",[e("p",[s._v("​\tDevOps（开发、运维）")])]),s._v(" "),e("p",[e("strong",[s._v("更快速的的交付和部署")])]),s._v(" "),e("p",[s._v("​\t传统：一堆帮助文档，安装程序")]),s._v(" "),e("p",[s._v("​\tDocker：打包镜像发布测试，一键运行")]),s._v(" "),e("p",[e("strong",[s._v("更便捷的升级和扩缩容")])]),s._v(" "),e("p",[s._v("使用了Docker之后，我们部署应用就和搭积木一样.")]),s._v(" "),e("p",[e("strong",[s._v("更简单的系统运维")])]),s._v(" "),e("p",[s._v("开发和测试环境高度一致")]),s._v(" "),e("p",[e("strong",[s._v("更高效的计算资源利用")])]),s._v(" "),e("p",[s._v("Docker是内核级别的虚拟化，可以在一个物理机上运行很多的容器实例，服务器的性能被压榨到极致。")]),s._v(" "),e("h2",{attrs:{id:"docker-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-命令"}},[s._v("#")]),s._v(" Docker 命令")]),s._v(" "),e("h3",{attrs:{id:"帮助命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令"}},[s._v("#")]),s._v(" 帮助命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker version\ndocker info\ndocker 命令 --help\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"镜像命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[s._v("#")]),s._v(" 镜像命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker images "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有镜像")]),s._v("\n-a "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有镜像")]),s._v("\n-q "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只显示id")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker search mysql "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索镜像")]),s._v("\n--filter"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STARS"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索超过3000赞的镜像")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull mysql "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载镜像")]),s._v("\ndocker pull mysql:5.7 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker rmi -f imageid\ndocker rmi -f "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -aq"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除全部容器")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"容器命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[s._v("#")]),s._v(" 容器命令")]),s._v(" "),e("p",[e("strong",[s._v("新建容器并启动")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("可选参数"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" image\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#参数说明")]),s._v("\n--name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" 容器名字，用来区分容器\n-d \t\t\t  后台方式运行\n-it \t\t  使用交互方式运行，进入容器查看内容\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\t\t  从容器中退出主机,\n-p \t\t\t  端口映射\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("strong",[s._v("端口映射：")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/dockernet.PNG",alt:"network"}})]),s._v(" "),e("p",[e("strong",[s._v("列出所有容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#参数说明")]),s._v("\n-a\t\t\t  列出当前正在运行的容器+带出历史运行过的容器\n-n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?\t\t  显示最近新建的容器\n-q\t\t\t  只显示容器的编号\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("strong",[s._v("退出容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接容器停止并退出")]),s._v("\ncrtl + P + Q "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器不停止退出")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("删除容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器id "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除指定的容器，不能删除正在运行的容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aq"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除所有容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除所有容器")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("启动和停止容器的操作")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker start 容器id\ndocker restart 容器id\ndocker stop 容器id\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"常用其他命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用其他命令"}},[s._v("#")]),s._v(" 常用其他命令")]),s._v(" "),e("p",[e("strong",[s._v("docker启动命令")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl start docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("后台启动容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -d centos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("查看日志")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker logs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("查看容器内进程信息")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("查看容器元数据")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker inspect "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("进入当前正在运行的容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" /bin/bash\ndocker attach "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" /bin/bash\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("从容器内拷贝文件到主机上")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" id:/home/test.java /home\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker2.png",alt:"docker2"}})]),s._v(" "),e("h2",{attrs:{id:"可视化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可视化"}},[s._v("#")]),s._v(" 可视化")]),s._v(" "),e("ul",[e("li",[s._v("portainer")]),s._v(" "),e("li",[s._v("Rancher")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8055")]),s._v(":9000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -v /var/run/docker.sock:/var/run/docker.sock --privileged"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true portainer/portainer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("登录页面")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker3.PNG",alt:"docker3"}})]),s._v(" "),e("p",[s._v("选择本地\n"),e("img",{attrs:{src:"/blog/devops/docker4.PNG",alt:"docker4"}})]),s._v(" "),e("p",[s._v("portainer首页\n"),e("img",{attrs:{src:"/blog/devops/docker5.PNG",alt:"docker5"}})]),s._v(" "),e("h2",{attrs:{id:"docker镜像原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像原理"}},[s._v("#")]),s._v(" Docker镜像原理")]),s._v(" "),e("h3",{attrs:{id:"unionfs-联合文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unionfs-联合文件系统"}},[s._v("#")]),s._v(" UnionFS(联合文件系统)")]),s._v(" "),e("p",[s._v("UnionFS(联合文件系统): Union文件系统(UnionFS)是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union文件系统是Docker镜像的基础。镜像可以通过分层来进行继承, 基于基础镜像(没有父镜像)， 可以制作各种具体的应用镜像。\n特性: 一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。")]),s._v(" "),e("h3",{attrs:{id:"docker镜像加载原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像加载原理"}},[s._v("#")]),s._v(" Docker镜像加载原理")]),s._v(" "),e("p",[s._v("**bootfs(boot file system)**主要包含bootloader和kernel，bootloader主要是引导加载kernel，Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的, 包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。")]),s._v(" "),e("p",[s._v("rootfs(root file system), 在bootfs之上。包含的就是典型Linux系统中的/dev, /proc, /bin, /etc等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。\n"),e("img",{attrs:{src:"/blog/devops/docker7.PNG",alt:"docker7"}})]),s._v(" "),e("p",[s._v("对于一个精简的OS，rootfs可以很小，只包含基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供rootfs就可以了。对于不同的linux发行版，bootfs基本是一致的，bootfs会有差别，因此不同的发行版版可以公用bootfs。")]),s._v(" "),e("h3",{attrs:{id:"分层的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分层的理解"}},[s._v("#")]),s._v(" 分层的理解")]),s._v(" "),e("p",[s._v("当我们docker pull下载镜像的时候，可以看到是一层一层的下载。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker8.PNG",alt:"docker8"}})]),s._v(" "),e("p",[s._v("docker inspect redis，看一下redis镜像的元数据，发现确实有6层Layer")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker9.PNG",alt:"docker9"}})]),s._v(" "),e("p",[s._v("tomcat镜像：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker6.PNG",alt:"docker6"}})]),s._v(" "),e("p",[s._v("采用这种分层结构最大的一个好处就是共享资源，比如有多个镜像都从相同的base镜像构建而来，那么宿主机只需要在磁盘上保存一份base镜像，同时内存中也只需要加载一份base镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。")]),s._v(" "),e("p",[s._v("docker 镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作 “容器层” ，“容器层” 之下的都叫镜像层。")]),s._v(" "),e("h3",{attrs:{id:"commit镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit镜像"}},[s._v("#")]),s._v(" commit镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker commit 提交容器成为一个新的副本\n\ndocker commit -m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述"')]),s._v(" -a"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"作者"')]),s._v(" 容器id 目标镜像名:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  docker commit -a="tangjian" -m="wo zi ji de tomcat" d5c11c271c0d mytomcat:1.0')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("可以看到镜像内多了一个mytomcat\n"),e("img",{attrs:{src:"/blog/devops/docker10.PNG",alt:"docker10"}})]),s._v(" "),e("h2",{attrs:{id:"容器数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器数据卷"}},[s._v("#")]),s._v(" 容器数据卷")]),s._v(" "),e("h3",{attrs:{id:"什么是容器数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是容器数据卷"}},[s._v("#")]),s._v(" 什么是容器数据卷")]),s._v(" "),e("p",[s._v("容器之间可以有一个数据共享的技术，Docker容器中产生的数据，同步到本地。这就是数据卷技术。将容器的目录挂载到linux上面。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker11.PNG",alt:"docker11"}})]),s._v(" "),e("h3",{attrs:{id:"使用数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用数据卷"}},[s._v("#")]),s._v(" 使用数据卷")]),s._v(" "),e("blockquote",[e("p",[s._v("方式一：直接使用命令来挂载")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -it -v 主机目录：容器内目录\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it -v /home/ceshi:/home --privileged=true centos /bin/bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("使用docker inspect查看目录已挂载")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker12.PNG",alt:"docker12"}})]),s._v(" "),e("p",[s._v("在主机的/home/ceshi 下新建test.java,在容器内也能看到，反之亦可。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker13.PNG",alt:"docker13"}})]),s._v(" "),e("p",[s._v("以后修改只需要在本地修改即可，容器内会自动同步")]),s._v(" "),e("h3",{attrs:{id:"mysql的数据持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql的数据持久化"}},[s._v("#")]),s._v(" MySql的数据持久化")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" --privileged"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --name mysql01 mysql:5.7\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 后台运行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 端口映射")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 数据卷挂载")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e 环境配置")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name 容器名称")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("容器启动后，再用navicat连接测试")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker14.PNG",alt:"docker14"}})]),s._v(" "),e("p",[s._v("创建一个数据库testDB")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker16.PNG",alt:"docker16"}})]),s._v(" "),e("p",[s._v("在主机目录上也可以看到")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker15.PNG",alt:"docker15"}})]),s._v(" "),e("p",[s._v("将容器删除后，发现挂载到本地的数据卷依旧没有丢失，这就实现了容器数据持久化的功能")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker17.PNG",alt:"docker17"}})]),s._v(" "),e("h3",{attrs:{id:"具名和匿名挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具名和匿名挂载"}},[s._v("#")]),s._v(" 具名和匿名挂载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#匿名挂载")]),s._v("\n-v 容器内路径\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),s._v(":80 --name nginx01 -v /etc/nginx nginx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有卷的情况")]),s._v("\ndocker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\nDRIVER              VOLUME NAME\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               0241a81ce6ed2227d3e98328d693535b5c480a8385991343849e4dc055ab0744\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               08c578a4a64aae0e8ce0b892f7c41b39a3e7ee160c53e27c190f22a7ed950643\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               0b50662d90b2526a8493bf198c25b06d9a4594ae5fdfc7477ab57307ed0a9077\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               0b756a0df92b8f6adfddcce4f68bd130b228a8139924fc198cdd34601b33bf5b\n\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#具名挂载")]),s._v("\n\ndocker run -d -p --name nginx02 -v juming-nginx:/etc/nginx nginx\n\ndocker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               e0494ea792ec25685377327907f58565749ab20542473e50bf9bda0c05581c28\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               ed604977db946d4d77b883f00eaed72aa6b190e7aeb04817d946187c61c29d5e\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               fc5ba61d912c4552264fd9f5e9250964d88f9d5584e566591492d16110f6f04e\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               juming-nginx\n\n\n\ndocker volume inspect juming-nginx\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Labels"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mountpoint"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/juming-nginx/_data"')]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"juming-nginx"')]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Scope"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("所有的docker容器内的卷，没有指定目录的情况下都是在/var/lib/docker/volumes/xxx/_data下。\n我们通过具名挂载可以放方便的找到卷，大多数情况在使用"),e("strong",[s._v("具名挂载")])]),s._v(" "),e("p",[s._v("如何确定是具名挂载和匿名挂载，还是指定路径挂载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("-v 容器内路径        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匿名挂载")]),s._v("\n-v 卷名：容器内路径     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 具名挂载")]),s._v("\n-v 主机路径：容器内路径  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定路径挂载")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("拓展")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改变读写权限")]),s._v("\nro  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只读,说明这个路径只能通过宿主机来操作，容器内部是无法操作的")]),s._v("\nrw  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可读可写")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一旦这个设置了容器权限，容器对我们挂载出来的内容就有限定了")]),s._v("\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"初识dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初识dockerfile"}},[s._v("#")]),s._v(" 初识DockerFile")]),s._v(" "),e("p",[s._v("通过DockerFile用来构建docker镜像并挂载数据卷")]),s._v(" "),e("p",[s._v("dockerfile脚本")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FROM centos\n\nVOLUME "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"volume01"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"volume02"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#VOLUME [卷名："volume01",卷名："volume02"]')]),s._v("\n\nCMD "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"------end-------"')]),s._v("\n\nCMD /bin/bash\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("脚本指令的含义")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker23.PNG",alt:"docker23"}})]),s._v(" "),e("p",[s._v("运行脚本进行构建")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker build -f dockerfile1 -t tangjian/centos "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("脚本执行结果：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker18.PNG",alt:"docker18"}})]),s._v(" "),e("p",[s._v("启动并进入创建的镜像内，发现生成的数据卷（匿名）")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker19.PNG",alt:"docker19"}})]),s._v(" "),e("p",[s._v("在数据卷目录新建一个文件")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker22.PNG",alt:"docker22"}})]),s._v(" "),e("p",[s._v("使用docker inspect查看卷挂载的路径")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker20.PNG",alt:"docker20"}})]),s._v(" "),e("p",[s._v("进入卷挂载路径，发现文件已经同步出去")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker21.PNG",alt:"docker21"}})]),s._v(" "),e("h3",{attrs:{id:"数据卷容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据卷容器"}},[s._v("#")]),s._v(" 数据卷容器")]),s._v(" "),e("p",[s._v("多个容器同步数据，实现数据共享")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --volumes-from")]),s._v("\ndocker run -it --name centos2 --volumes-from inspiring_haibt tangjian/centos\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("两个容器可以同步数据")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/devops/docker24.PNG",alt:"docker24"}})]),s._v(" "),e("p",[s._v("删除一个容器后，其他容器仍然能访问文件，各容器之间是一种双向“拷贝”（浅拷贝）")]),s._v(" "),e("p",[s._v("结论：\n容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有容器使用为止。\n但是一旦持久化到了本地，本地的数据是不会删除的。")]),s._v(" "),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" DockerFile")]),s._v(" "),e("p",[s._v("构建步骤：")]),s._v(" "),e("p",[s._v("1、编写一个dockerfile文件")]),s._v(" "),e("p",[s._v("2、docker build 构建成为一个镜像")]),s._v(" "),e("p",[s._v("3、docker run 运行镜像")]),s._v(" "),e("p",[s._v("4、docker push 发布镜像（DockerHub、阿里云镜像仓库等）")])])}),[],!1,null,null,null);a.default=n.exports}}]);