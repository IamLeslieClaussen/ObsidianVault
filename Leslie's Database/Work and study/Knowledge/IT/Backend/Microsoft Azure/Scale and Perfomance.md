[[Vertical scaling]]: Making qualitative changes to the resources.
Increase computing power by adding more Ram and disk storage. Upgrade the SQL server edition to acces more features.

[[Horizontal Scaling]]: Like distributive computing where workload can be spread accross different computer systems. Also across different geographical regions.

Key aspects you can change for Azure Vms running SQL Server:

VM Size
Storage Options
Disks

SQL Managed Instaces:
[[Instance pool]]: Running multiple vm on one physical machine. Each Instance maintaince its own dedicated CPU and RAM resources. The Sum of these must not exceed the total of the pool. An isntance Pool has  max storage limit of 8TB and cannot host more than a 100 Databases.
Vcore is the method of charge.
[[Elastic Pool]]: CPU and memory space are shared. Best and cost effective.

It can be scaled via the 
[[azure portal]]
[[PowerShell]]
[[Azure CLI]]
[[Rest API]]