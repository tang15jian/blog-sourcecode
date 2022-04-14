module.exports = [
    {
        title: '关系型',
        collapsable: true,
        children:[
            // '/db/sql/',
            '/db/sql/mysql',
            '/db/sql/oracle',
        ]
    },
    {
        title: '非关系型',
        collapsable: true,
        children:[
            '/db/nosql/redis',
            '/db/nosql/elasticsearch',
            '/db/nosql/neo4j',
            '/db/nosql/mongodb',
            '/db/nosql/hbase',
            '/db/nosql/timeseries',
        ]
    },
    {
        title: '分布式数据库',
        collapsable: true,
        children:[
            // '/db/distributed/',
            '/db/distributed/fercar',
            '/db/distributed/sharding',
            '/db/distributed/tidb',
            '/db/distributed/oceanbase',
        ]
    },
]