$ docker pull cassandra
Using default tag: latest
latest: Pulling from library/cassandra
846c0b181fff: Pull complete 
9923132fe6ab: Pull complete 
fcd5cbc3b5e5: Pull complete 
4d78778bf6ee: Pull complete 
8a46c9313733: Pull complete 
200797bd56b8: Pull complete 
33d4c6e1eee9: Pull complete 
ff00f670cf06: Pull complete 
e22ff0b1ed21: Pull complete 
Digest: sha256:566489b615eec3d43427f73d986aaa9568ff88f3a83ac6bea2175f5bfcd2469d
Status: Downloaded newer image for cassandra:latest
docker.io/library/cassandra:latest



$ docker network create cass-network
32018847aa1c5ecebf00caee5aaa32833c52e40b86444d26ce73a37f6959913e



$ docker run -d --name my-cassandra --network cass-network cassandra
4ddd26b26771313cf573a9afa759386cfe9366e86732975a2d1ec0bb41815a0b 


docker start cassandra -p 9042:9042 


$ docker exec -it my-cassandra cqlsh
Connected to Test Cluster at 127.0.0.1:9042
[cqlsh 6.1.0 | Cassandra 4.1.0 | CQL spec 3.4.6 | Native protocol v5]
Use HELP for help.
cqlsh> 
cqlsh> 