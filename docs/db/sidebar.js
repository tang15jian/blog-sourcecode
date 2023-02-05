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
            {title:'Redis',collapsable: true, children:[
                '/db/nosql/redis/redis'
            ]},
            {title:'Elastic Stack',collapsable: true,children:[
                '/db/nosql/elasticsearch/elasticsearch1',
                '/db/nosql/elasticsearch/elasticsearch2',
                '/db/nosql/elasticsearch/elasticsearch3',
                '/db/nosql/elasticsearch/elasticsearch4',
                '/db/nosql/elasticsearch/elasticsearch5'
            ]},
            {title:'Neo4j',collapsable: true, children:[
                '/db/nosql/neo4j'
            ]},
            {title:'Mongodb',collapsable: true, children:[
                '/db/nosql/mongodb',
            ]},
            {title:'HBase',collapsable: true, children:[
                '/db/nosql/hbase',
            ]},
            {title:'TimeSeries',collapsable: true, children:[
                '/db/nosql/timeseries'
            ]},
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