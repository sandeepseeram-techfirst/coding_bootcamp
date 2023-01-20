CREATE KEYSPACE my_keyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

CREATE TABLE my_keyspace.user (first_name text, last_name text, title text, PRIMARY KEY (last_name, first_name));




$ docker exec -it my-cassandra cqlsh
Connected to Test Cluster at 127.0.0.1:9042
[cqlsh 6.1.0 | Cassandra 4.1.0 | CQL spec 3.4.6 | Native protocol v5]
Use HELP for help.


cqlsh> CREATE KEYSPACE my_keyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
cqlsh> CREATE TABLE my_keyspace.user (first_name text, last_name text, title text, PRIMARY KEY (last_name, first_name));
cqlsh> 