[[Back-up]]: Protects you against;
1. Host fail
2. Hackers 
Backups are always associated with downtime.
[[RTO]] and [[RPO]] times to loose and regain the database environment.
Stretch Database: 

Complex systems need resilience to deliver reliability.

[[Realiability]]: It is the goal for production systems to ensure availability of their Services.
we want to make sure our system is reliable of their services with appropriate up time/Availabilty.
[[Resilience]]: This is the "How". It is the way in which systems can achieve reliability. 
The objective is not avoid failures. It is to respond to failure to reduce down time 

It is the ability of an organisation to continue to operate  or provide services in the event of a disaster or any event that interrupt the organisational processes.

2 Main strategie to provide business continuity are:
[[High Availability]], [[HA]]: Allows seemless switchover between main and back up to the secondary systems (second instance). when the primary fails. Its more expensive and complex since it has to have secondary set of the data that is used in the production services.

[[Disaster Recovery]], [[DR]]: It acknowledges, that there will be some interruption to service but  will resume to normal asap. It is usually cheaper and cover a wide range of solutions. It is cheaper and can cover a wider range of solutions. switch over to the replica.
I can vary by the amount of potential data loss.
[[Back-up]]: When the data is corrupted, deleted or lost, you can restore it.

[[Availabilty Groups]]:
Availability replicas running in Azure VMs in the same region provide high availabilities.

[[DR]] Methods:
[[Log Shipping]]: The database transaction log can be restored to a replica database bringing it up to the time the database failed. Easy to set up but requires the replica to be updated regulary to ensure minimal data loss. Transaction Logs are usually more up to date than the back up. The replica database is offline. Database back ups with a full differential or Log can be saved direclty to [[Blob Storage]] in any region. 

Azure site recovery[[ASR Replication]]:
Production SQL server instance in one Azure datacenter replicated directly to Azure Storage in a different Azure datacenter for disaster recovery. Not only specific to SQL server.

PaaS [[HA]] Solutions:
Standard availability model:
-Low cost to run.
-Performance degradation maintenance activities.
-provide failover for production services.
-uses globally redundant storage for backup files.

Premium availability model:
-Based on a cluster engine Process.
-Multiple copies of the data need to syncd with multiple secondary replicas kept warm and ready should the primary fail.
-For mission critical applications.

[[Hyperscale database architecture]]
its divided into 4 Layers:
1. [[Stateless Compute layer]]: where you can have multiple Replica notes.
2. [[Stateless Storage Layer]]: It orchastrates the I/O of information from database files.
3. [[Stateful transaction log]]: Stateful transaction log storage layer formed by the compute node running the log service Process.
4. [[Stateful data Storage]]: 


Zone Redundant Configurations:
Zone redundant databases and elastic pool are currently only supported in the Premium and business Critical service tiers in select regions.
When using the Business Critical tier, zone redundant configuration is only available when the gen5 compute hardware is selected  

[[SLA]]: Service Level Agreement:
External facing agreement between between Microsoft and you, and/or between you and the end costumers. Microsoft offers 99% uptime for these VMs, but you may offer different end user guarantees.
[[SLO]]: Service Level Objectives: Internal Organisational goals based on the requirements of each App and its users
[[SLI]]: How the APP is currently performing.

[[Availability Set]]: High availabilty protection from hardware failures in a datacenter. A pair of Vms 
each on different datacenters.

### Azure storage resiliency solutions:
[[locally redundant storage]]:()The simplest, low cost replication strategy that azure storage offers.
[[Zone-redundant Storage]]: Replication accross multiple zones. A simple option for high availability and durability.
[[Geo-redundant Storage]]: 


Key words:
[[Azure Traffic Manager]]


SQL Database automatically performs a combination of [[full database backups ]]weekly, 
[[differential database backups]] hourly, and [[transaction log backups]] every 5 minutes.

The full and differential database backups are also replicated to a paired data center for protection against a data center outage and uses Azure [[read-access geo-redundant storage]]       ([[RA-GRS]]) to provide geo-redundancy. 