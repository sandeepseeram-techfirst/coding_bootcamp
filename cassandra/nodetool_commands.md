$ docker exec -it my-cassandra nodetool status

Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address     Load       Tokens  Owns (effective)  Host ID                               Rack 
UN  172.17.0.3  70.49 KiB  16      51.2%             32368b79-8319-4bf3-a9b9-686732dd73a4  rack1
UN  172.17.0.2  80.76 KiB  16      48.8%             2aa376f4-3771-4649-8cd0-960e34d2c881  rack1

$ docker exec -it my-cassandra nodetool info
ID                     : 2aa376f4-3771-4649-8cd0-960e34d2c881
Gossip active          : true
Native Transport active: true
Load                   : 80.76 KiB
Generation No          : 1674207880
Uptime (seconds)       : 958
Heap Memory (MB)       : 93.39 / 725.44
Off Heap Memory (MB)   : 0.00
Data Center            : datacenter1
Rack                   : rack1
Exceptions             : 0
Key Cache              : entries 5, size 432 bytes, capacity 36 MiB, 62 hits, 72 requests, 0.861 recent hit rate, 14400 save period in seconds
Row Cache              : entries 0, size 0 bytes, capacity 0 bytes, 0 hits, 0 requests, NaN recent hit rate, 0 save period in seconds
Counter Cache          : entries 0, size 0 bytes, capacity 18 MiB, 0 hits, 0 requests, NaN recent hit rate, 7200 save period in seconds
Percent Repaired       : 100.0%
Token                  : (invoke with -T/--tokens to see all 16 tokens)
$ docker exec -it my-cassandra nodetool ring

Datacenter: datacenter1
==========
Address          Rack        Status State   Load            Owns                Token                                       
                                                                                8793484813079664523                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              -9039451731787617902                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -8561962149937674833                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -7717585502446513075                        
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              -6917756831785382791                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -6277317272543929835                        
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              -5659336240641729757                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -5205816656203897023                        
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              -4594995250868666361                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -4187965251461470007                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -3370293318849119213                        
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              -2774990949888719962                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -2294537437623539673                        
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -1558621744912646033                        
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              -897926620375733934                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              -479248937465044376                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              271028302803280444                          
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              764271068215547596                          
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              1320152103132471532                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              1731635311294083095                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              2256065275923986952                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              2671702935495626832                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              3321639863807981733                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              3883383282167607977                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              4280706134516320768                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              4940663159505025030                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              5539126850461763856                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              5918808612021139106                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              6573427497137168223                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              6999713998418297613                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              7697442912844726234                         
172.17.0.3       rack1       Up     Normal  70.49 KiB       51.15%              8349915824992975496                         
172.17.0.2       rack1       Up     Normal  80.76 KiB       48.85%              8793484813079664523                         

  Warning: "nodetool ring" is used to output all the tokens of a node.
  To view status related info of a node use "nodetool status" instead.