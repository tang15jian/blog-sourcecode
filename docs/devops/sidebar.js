module.exports = [
    {
        title: 'Repository',
        collapsable: false,
        children: [
            '/devops/repository/git',
        ]
    },
    {
        title: 'Jenkins',
        collapsable: false,
        children: [
            '/devops/ci/jenkins',
        ]
    },
    {
        title: '容器',
        collapsable: false,
        children: [
            {
                title: 'Kubenetes',
                collapsable: false,
                children: [
                    '/devops/container/k8s/k8s-1',
                    '/devops/container/k8s/k8s-2',
                    '/devops/container/k8s/k8s-3',
                    '/devops/container/k8s/k8s-4',
                    '/devops/container/k8s/k8s-5',
                    '/devops/container/k8s/k8s-6',
                    '/devops/container/k8s/k8s-7',
                    '/devops/container/k8s/k8s-8',
                    '/devops/container/k8s/k8s-9',
                    '/devops/container/k8s/k8s-10',
                    '/devops/container/k8s/k8s-11',
                    '/devops/container/k8s/k8s-12',
                    '/devops/container/k8s/k8s-13',
                    '/devops/container/k8s/k8s-14',
                    '/devops/container/k8s/k8s-15',
                    '/devops/container/k8s/k8s-16'
                ]
            },
            {
                title: 'Docker',
                collapsable: false,
                children: [
                    '/devops/container/docker1',
                    '/devops/container/docker2'
                ]
            },
        ]
    },
    {
        title: '日志分析',
        collapsable: false,
        children: [
            '/devops/log/elk',
            '/devops/log/splunk',
        ]
    },
    {
        title: '监控',
        collapsable: false,
        children: [
            '/devops/monitor/promethus',
            '/devops/monitor/dynatrace',
        ]
    },
]