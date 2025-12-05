Data can be split vertically and horizontally accross tables and files.
It can also be partitioned across databases or physically seperate data stores to mitigate storage  defficiency. 

Resource Limitations:
-Storage
-Computing Power
-Bandwith
-Geography
-Legal Obligations 


[[sharding ]]: Database is split into multiple copies that share the same schema but are located on different servers. Each database will serve a subset of the data. 

Sharding strategies:
- -[[=Lookup]] 
- Range 
- Harsh: Helps to distrubute data and load acorss the system evenly

Data is stored based on a hasg of one or more attribues of the data.

Routing requests can be handled with a hash function. Rebalance makes it difficult. 
