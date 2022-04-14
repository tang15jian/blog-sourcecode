module.exports = [
    {
        title: '代码仓库',
        collapsable: true,
        children:[
            '/devops/repository/gitlab',
            '/devops/repository/github',
        ]
    },
    {
        title: 'CI(持续集成)',
        collapsable: true,
        children:[
            '/devops/ci/jenkins',
        ]
    },
    {
        title: '容器',
        collapsable: true,
        children:[
            {title:'Docker',collapsable: true, children:[
                '/devops/container/docker1',
                '/devops/container/docker2'
            ]},
            // '/devops/container/docker2',
            {title:'Kubenetes',collapsable: true,children:[
                '/devops/container/k8s-1',
                '/devops/container/k8s-2'
            ]},
        ]
    },
    {
        title: '日志分析',
        collapsable: true,
        children:[
            '/devops/log/elk',
            '/devops/log/splunk',
        ]
    },
    {
        title: '监控',
        collapsable: true,
        children:[
            '/devops/monitor/promethus',
            '/devops/monitor/dynatrace',
        ]
    },
]