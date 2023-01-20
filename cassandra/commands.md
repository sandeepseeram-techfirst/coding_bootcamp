$ bin/cqlsh
Connected to Test Cluster at 127.0.0.1:9042.
[cqlsh 5.0.1 | Cassandra 4.0-alpha4 | CQL spec 3.4.5 | Native protocol v4]
Use HELP for help.
cqlsh> HELP

Documented shell commands:
===========================
CAPTURE  CLS          COPY  DESCRIBE  EXPAND  LOGIN   SERIAL  SOURCE   UNICODE
CLEAR    CONSISTENCY  DESC  EXIT      HELP    PAGING  SHOW    TRACING

CQL help topics:
================
AGGREGATES               CREATE_KEYSPACE           DROP_TRIGGER      TEXT     
ALTER_KEYSPACE           CREATE_MATERIALIZED_VIEW  DROP_TYPE         TIME     
ALTER_MATERIALIZED_VIEW  CREATE_ROLE               DROP_USER         TIMESTAMP
ALTER_TABLE              CREATE_TABLE              FUNCTIONS         TRUNCATE 
ALTER_TYPE               CREATE_TRIGGER            GRANT             TYPES    
ALTER_USER               CREATE_TYPE               INSERT            UPDATE   
APPLY                    CREATE_USER               INSERT_JSON       USE      
ASCII                    DATE                      INT               UUID     
BATCH                    DELETE                    JSON            
BEGIN                    DROP_AGGREGATE            KEYWORDS        
BLOB                     DROP_COLUMNFAMILY         LIST_PERMISSIONS
BOOLEAN                  DROP_FUNCTION             LIST_ROLES      
COUNTER                  DROP_INDEX                LIST_USERS      
CREATE_AGGREGATE         DROP_KEYSPACE             PERMISSIONS     
CREATE_COLUMNFAMILY      DROP_MATERIALIZED_VIEW    REVOKE          
CREATE_FUNCTION          DROP_ROLE                 SELECT          
CREATE_INDEX             DROP_TABLE                SELECT_JSON     

cqlsh> SHOW VERSION
[cqlsh 5.0.1 | Cassandra 4.0-alpha4 | CQL spec 3.4.5 | Native protocol v4]
cqlsh> DESCRIBE CLUSTER

Cluster: Test Cluster
Partitioner: Murmur3Partitioner

cqlsh> DESCRIBE KEYSPACES

system_virtual_schema  system_auth   system              system_traces
system_schema          system_views  system_distributed

cqlsh> 
cqlsh> 




Let's two additional nodes using the same network:

docker run --name my-cassandra-2 --network cass-network -d -e CASSANDRA_SEEDS=my-cassandra cassandra

docker run --name my-cassandra-3 --network cass-network -d -e CASSANDRA_SEEDS=my-cassandra cassandra