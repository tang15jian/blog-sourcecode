module.exports = [
    {
        title: '关系型',
        collapsable: false,
        children: [
            {
                title: 'MySql', collapsable: false, children: [
                    '/db/sql/mysql',
                    '/db/sql/mysql2',
                    '/db/sql/mysql3'
                ]
            },
            // '/db/sql/',
            {
                title: 'Oracle', collapsable: false, children: [
                    '/db/sql/oracle'
                ]
            },
           
        ]
    },
    {
        title: '非关系型',
        collapsable: false,
        children: [
            {
                title: 'Redis', collapsable: false, children: [
                    '/db/nosql/redis/redis'
                ]
            },
            {
                title: 'Elastic Stack', collapsable: false, children: [
                    '/db/nosql/elasticsearch/elasticsearch1',
                    '/db/nosql/elasticsearch/elasticsearch2',
                    '/db/nosql/elasticsearch/elasticsearch3',
                    '/db/nosql/elasticsearch/elasticsearch4',
                    '/db/nosql/elasticsearch/elasticsearch5'
                ]
            },
            {
                title: 'Neo4j', collapsable: false, children: [
                    '/db/nosql/neo4j'
                ]
            },
            {
                title: 'Mongodb', collapsable: false, children: [
                    '/db/nosql/mongodb',
                ]
            },
            {
                title: 'HBase', collapsable: false, children: [
                    '/db/nosql/hbase',
                ]
            },
            {
                title: 'TimeSeries', collapsable: false, children: [
                    '/db/nosql/timeseries'
                ]
            },
        ]
    },
    {
        title: '分布式数据库',
        collapsable: false,
        children: [
            // '/db/distributed/',
            '/db/distributed/fercar',
            '/db/distributed/sharding',
            '/db/distributed/tidb',
            '/db/distributed/oceanbase',
        ]
    },
]