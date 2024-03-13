module.exports = [
    {
        title: '分布式',
        collapsable: false,
        children:[
            '/distributed/distributed1',
            '/distributed/rpc',
        ]
    },
    {
        title: 'MQ',
        collapsable: false,
        children:[
            {
                title: 'Rabbit MQ',
                collapsable: false,
                children:[
                    '/distributed/rabbitmq',
                ]
            },
            {
                title: 'Kafka',
                collapsable: false,
                children:[
                    '/distributed/kafka',
                ]
            }
        ]
    },

]