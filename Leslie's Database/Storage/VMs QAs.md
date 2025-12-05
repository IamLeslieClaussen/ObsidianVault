You have just created a brand new SQL Server database on an Azure Virtual machine.
Which of the following is the only backup type that would allow you to restore the entire database?
Select one answer
Full Backup
Transaction Log Backup
Differential
Simple


CA2. You have been asked to enable Automated Patching on your SQL Virtual Machine by using PowerShell.
Which of the following commands is the correct way to achieve this goal?

Select one answer
$aps = New-AzVMSqlServerAutoPatching -Enable -MaintenanceWindowStartingHour 11 -MaintenanceWindowDuration 120

Set-AzVMSqlServerExtension -AutoPatchingSettings $aps -VMName VMDemo1 -ResourceGroupName rg-demovms

$aps = New-AzVMSqlServerAutoPatching -Enable -DayOfWeek "Sunday" -MaintenanceWindowStartingHour 11 -MaintenanceWindowDuration 120

Set-AzVMSqlServerExtension -AutoPatchingSettings $aps -VMName VMDemo1 -ResourceGroupName rg-demovms

$aps = New-AzVMSqlServerAutoPatchingConfig -Enable -DayOfWeek "Sunday" -MaintenanceWindowStartingHour 11 -MaintenanceWindowDuration 120  -PatchCategory "Critical"


CA3. You’ve been asked to deploy a new Azure SQL Virtual Machine and you have to choose which type of data disk storage you want to use.
You have been asked to choose which type of drive for the data based on best practice recommendations from Microsoft which states that data should be held on a separate data drive.
Which disk sizes are recommended by Microsoft to use for the separate data drives?

Select one answer
Premium P10 and P20 SSD Drives 

Premium P30 and P40 SSD Drives

Standard S10 and S20 Drives

Standard S30 and S40 Drives


CA4. A database administrator has to deploy a SQL Server on an Azure VM with automatic patching enabled, and has configured the followed PowerShell command to complete this task.

$vmname = “companyvm”

$resourcegroupname= “company-rg”

$company_config = "Slot-1" "Slot-2" DayOfWeek “Sunday” -MaintenanceWindowStartingHour 11 -MaintenanceWindowDuration 120 -PatchCategory "Important"

“Slot-3” -AutoPatchingSettings $aps -VMName $vmname -ResourceGroupName $resourcegroupname

What command snippets will successfully complete this PowerShell command?

Select one answer
Slot 1: NewAzVMConfig

Slot 2: -Configure

Slot 3: Get-AzVMSqlServerExtension 


Slot 1: New-AzVMSqlServerAutoBackupConfig

Slot 2: -Enable

Slot 3: Get-AzVMSqlServerExtension 



Slot 1: New-AzVMSqlServerAutoPatchingConfig

Slot 2: -Enable

Slot 3: Set-AzVMSqlServerExtension



Slot 1: Publish-AzVMDscConfiguration

Slot 2: -Configure

Slot 3: Set-AzVMDscExtension 


CA5. A DB administrator is using Azure Key Vault to configure disk encryption for an Azure VM named companyvm.

Review the Azure CLI commands below that will create a key vault named "companyvault" in a resource group named "company-rg", and then enable disk encryption for the Azure virtual machine.

az keyvault create –name “companyvault” –resource-group “company-rg” –location eastus “Slot-1”

az “Slot-2” enable -g company-rg –name companyvm “Slot-3” companyvault

Which parameters below correctly completes this command?

Select one answer
Slot 1: --encryption-at-host

Slot 2: vm encryption

Slot 3: --os-disk-encryption-set


Slot 1: --enable-purge-protection true

Slot 2: az keyvault key create

Slot 3: -disk-encryption-keyvault


Slot 1: -enabled-for-disk-encryption

Slot 2: vm encryption

Slot 3: -disk-encryption-keyvault


Slot 1: az keyvault key create

Slot 2: vm encryption

Slot 3: --os-disk-encryption-set



CA6. A database administrator needs to deploy Microsoft SQL Server on Azure VMs using Premium SSD's to store data and log files.

The DB administrator is going to use separate Premium SSD disks for the data disk and transaction log disk, and will have to choose the right policy to apply to each disk.

Which caching policies should be applied for the disks holding the data files for optimum performance?

Select one answer
Read caching
Read/Write caching

Write caching
None.



CA7. The SQL Server IaaS Agent extension runs on SQL Server on Windows Azure Virtual Machines to automate the management and administration tasks to help reduce administrative overhead.

What are the three key features that the SQL Server IaaS Agent extension makes available to use?

Select one answer
SQL Server automated patching

SQL Server automated backup

SQL Server automated logging


SQL Server automated patching

SQL Server automated backup

SQL Server automated monitoring


SQL Server automated patching

SQL Server automated Backup

Azure Key Vault integration


SQL Server automated patching

SQL Server automated Backup

Azure Monitor integration


QUESTION 8 
DRAG DROP You have SQL Server 2019 on an Azure virtual machine that contains an SSISDB database. A recent failure causes the master database to be lost. You discover that all Microsoft SQL Server integration Services (SSIS) packages fail to run on the virtual machine. Which four actions should you perform in sequence to resolve the issue? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct.

QUESTION 48 
DRAG DROP You have an Azure subscription. You plan to deploy a new Azure virtual machine that will host a Microsoft SQL Server instance. You need to configure the disks on the virtual machine. The solution must meet the following requirements: Minimize latency for transaction logs. Minimize the impact on IO throughput of the virtual machine. Which type of disk should you use for each workload? To answer, drag the appropriate disk types to the correct workloads. Each disk type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

QUESTION 55 
You have an Azure virtual machine named VM1 on a virtual network named VNet1. Outbound traffic from VM1 to the internet is blocked. You have an Azure SQL database named SqlDb1 on a logical server named SqlSrv1. You need to implement connectivity between VM1 and SqlDb1 to meet the following requirements: Ensure that all traffic to the public endpoint of SqlSrv1 is blocked. Minimize the possibility of VM1 exfiltrating data stored in SqlDb1. What should you create on VNet1? A. a VPN gateway B. a service endpoint C. a private link D. an ExpressRoute gateway Correct Answer: C


QUESTION 62
You have an Azure virtual machine named VM1 on a virtual network named VNet1. Outbound traffic from VM1 to the internet is blocked. You have an Azure SQL database named SqlDb1 on a logical server named SqlSrv1. You need to implement connectivity between VM1 and SqlDb1 to meet the following requirements: Ensure that VM1 cannot connect to any Azure SQL Server other than SqlSrv1. Restrict network connectivity to SqlSrv1. What should you create on VNet1? A. a VPN gateway B. a service endpoint C. a private link D. an ExpressRoute gateway.


QUESTION 71 
You have an Azure virtual machine named VM1 on a virtual network named VNet1. Outbound traffic from VM1 to the internet is blocked. You have an Azure SQL database named SqlDb1 on a logical server named SqlSrv1. You need to implement connectivity between VM1 and SqlDb1 to meet the following requirements: Ensure that VM1 cannot connect to any Azure SQL Server other than SqlSrv1. Restrict network connectivity to SqlSrv1. What should you create on VNet1? A. a VPN gateway B. a service endpoint C. a private endpoint D. an ExpressRoute gateway

QUESTION 83
You have an instance of SQL Server on Azure Virtual Machines named VM1. You plan to schedule a SQL Server Agent job that will rebuild indexes of the databases hosted on VM1. You need to configure the account that will be used by the agent. The solution must use the principle of least privilege. Which operating system user right should you assign to the account? A. Increase scheduling priority B. Log on as a service C. Profile system performance D. Log on as a batch job.

QUESTION 84 
You have an Azure subscription that contains an instance of SQL Server on an Azure virtual machine named SQLVM1 and a user named User1. SQLVM1 hosts a database named DB1. You need to ensure that User1 can create a scheduled task to perform a full backup of DB1. The solution must use the principle of least privilege. Which built-in database role should you assign to User1? A. db_owner B. SQLAgentReaderRole C. SQLAgentUserRole D. SQLAgentOperatorRole.


QUESTION 94
You have SQL Server 2019 on an Azure virtual machine that runs Windows Server 2019. The virtual machine has 4 vCPUs and 28 GB of memory. You scale up the virtual machine to 16 vCPUSs and 64 GB of memory. You need to provide the lowest latency for tempdb. What is the total number of data files that tempdb should contain? A. 2 B. 4 C. 8 D. 64.

QUESTION 98
You have SQL Server 2019 on an Azure virtual machine that runs Windows Server 2019. The virtual machine has 4 vCPUs and 28 GB of memory. You scale up the virtual machine to 8 vCPUSs and 64 GB of memory. You need to provide the lowest latency for tempdb. What is the total number of data files that tempdb should contain? A. 2 B. 4 C. 8 D. 64.

QUESTION 99
You have SQL Server on an Azure virtual machine that contains a database named DB1. DB1 contains a table named CustomerPII. You need to record whenever users query the CustomerPII table. Which two options should you enable? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point. A. server audit specification B. SQL Server audit C. database audit specification D. a server principal

QUESTION 100 
You have an Azure virtual machine based on a custom image named VM1. VM1 hosts an instance of Microsoft SQL Server 2019 Standard. You need to automate the maintenance of VM1 to meet the following requirements: Automate the patching of SQL Server and Windows Server. Automate full database backups and transaction log backups of the databases on VM1. Minimize administrative effort. What should you do first? A. Enable a system-assigned managed identity for VM1 B. Register the Azure subscription to the Microsoft.Sql resource provider C. Install an Azure virtual machine Desired State Configuration (DSC) extension on VM1 D. Register the Azure subscription to the Microsoft.SqlVirtualMachine resource provider.

QUESTION 114
Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have SQL Server 2019 on an Azure virtual machine. You are troubleshooting performance issues for a query in a SQL Server instance. To gather more information, you query sys.dm_exec_requests and discover that the wait type is PAGELATCH_UP and the wait_resource is 2:3:905856. You need to improve system performance. Solution: You change the data file for the master database to autogrow by 10 percent. Does this meet the goal? A. Yes B. No

QUESTION 115 
Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have SQL Server 2019 on an Azure virtual machine. You are troubleshooting performance issues for a query in a SQL Server instance. To gather more information, you query sys.dm_exec_requests and discover that the wait type is PAGELATCH_UP and the wait_resource is 2:3:905856. You need to improve system performance. Solution: You reduce the use of table variables and temporary tables. Does this meet the goal? A. Yes B. No

QUESTION 117 
Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have SQL Server 2019 on an Azure virtual machine. You are troubleshooting performance issues for a query in a SQL Server instance. To gather more information, you query sys.dm_exec_requests and discover that the wait type is PAGELATCH_UP and the wait_resource is 2:3:905856. You need to improve system performance. Solution: You create additional tempdb files. Does this meet the goal? A. Yes B. No Correct Answer: A

QUESTION 118 
You have SQL Server on an Azure virtual machine. You need to add a 4-TB volume that meets the following requirements: Maximizes IOPs Uses premium solid state drives (SSDs) What should you do? A. Attach two mirrored 4-TB SSDs. B. Attach a stripe set that contains four 1-TB SSDs. C. Attach a RAID-5 array that contains five 1-TB SSDs. D. Attach a single 4-TB SSD. Correct Answer: B

QUESTION 123 
You have SQL Server 2019 on an Azure virtual machine that runs Windows Server 2019. The virtual machine has 4 vCPUs and 28 GB of memory. You scale up the virtual machine to 8 vCPUs and 64 GB of memory. You need to reduce tempdb contention without negatively affecting server performance. What is the number of secondary data files that you should configure for tempdb? A. 2 B. 4 C. 8 D. 64 Correct Answer: C

QUESTION 127 
DRAG DROP You are building an Azure virtual machine. You allocate two 1-TiB, P30 premium storage disks to the virtual machine. Each disk provides 5,000 IOPS. You plan to migrate an on-premises instance of Microsoft SQL Server to the virtual machine. The instance has a database that contains a 1.2-TiB data file. The database requires 10,000 IOPS. You need to configure storage for the virtual machine to support the database. Which three objects should you create in sequence? To answer, move the appropriate objects from the list of objects to the answer area and arrange them in the correct order.

QUESTION 128 
HOTSPOT You need to use an Azure Resource Manager (ARM) template to deploy an Azure virtual machine that will host a Microsoft SQL Server instance. The solution must maximize disk I/O performance for the SQL Server database and log files. How should you complete the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

QUESTION 134 
You have the following resources: 15 SQL Server on Azure Virtual Machines instances 20 Azure SQL databases You need to recommend a solution to centrally monitor the resources for security vulnerabilities. What should you include in the recommendation? A. database audits B. Microsoft Defender C. SQL insights D. Azure SQL Auditing Correct Answer: C

QUESTION 135 
HOTSPOT You have an Azure subscription that contains an instance of SQL Server on Azure Virtual Machines named SQLVM1 and a user named User1. SQLVM1 hosts a database named DB1. You need to ensure that User1 can perform the following tasks on DB1: Create jobs. View all jobs. Modify, delete, and disable the jobs the user created. The solution must use the principle of least privilege. Which built-in database role should you assign to User1, and where is the role defined? To answer, select the appropriate options in the answer area.

QUESTION 138 
You have SQL Server on an Azure virtual machine that contains a database named DB1. You have an application that queries DB1 to generate a sales report. You need to see the parameter values from the last time the query was executed. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point. A. Enable Last_Query_Plan_Stats in the master database B. Enable Lightweight_Query_Profiling in DB1 C. Enable Last_Query_Plan_Stats in DB1 D. Enable Lightweight_Query_Profiling in the master database E. Enable PARAMETER_SNIFFING in DB1 Correct Answer: BC (without section).

QUESTION 139 
HOTSPOT You have SQL Server on an Azure virtual machine that contains a database named Db1. You need to enable automatic tuning for Db1. How should you complete the statements? To answer, select the appropriate answer in the answer area. NOTE: Each correct selection is worth one point.

QUESTION 175 
DRAG DROP You have SQL Server on an Azure virtual machine. You need to use Policy-Based Management in Microsoft SQL Server to identify stored procedures that do not comply with your naming conventions. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

QUESTION 180 
DRAG DROP You have SQL Server on an Azure virtual machine named SQL1. SQL1 has an agent job to back up all databases. You add a user named dbadmin1 as a SQL Server Agent operator. You need to ensure that dbadmin1 receives an email alert if a job fails. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

QUESTION 185 
You deploy an instance of SQL Server on Azure Virtual Machines named VM1. You need to create a SQL Server Agent job that will rebuild indexes of the databases hosted on VM1. The solution must use the principle of least privilege. What should you create first? A. a local Windows account B. a user-assigned managed identity in Azure AD C. a system-assigned managed identity in Azure AD D. an Elastic Job agent Correct Answer: C

QUESTION 188 
You have an Azure subscription. You plan to deploy an instance of SQL Server on Azure Virtual Machines by using an Azure Marketplace image. You need to register the SQL Server IaaS Agent extension (SqlIaasExtension). The solution must meet the following requirements: Install critical updates for SQL Server automatically. Minimize performance impact on the virtual machine. Which management mode should you select? A. full B. lightweight C. NoAgent Correct Answer: A

QUESTION 194
You have 10 Azure virtual machines that have SQL Server installed. You need to implement a backup strategy to ensure that you can restore specific databases to other SQL Server instances. The solution must provide centralized management of the backups. What should you include in the backup strategy? A. Automated Backup in the SQL virtual machine settings B. Azure Backup C. Azure Site Recovery D. SQL Server Agent jobs.

QUESTION 197 
You are building a database backup solution for a SQL Server database hosted on an Azure virtual machine. In the event of an Azure regional outage, you need to be able to restore the database backups. The solution must minimize costs. Which type of storage accounts should you use for the backups? A. locally-redundant storage (LRS) B. read-access geo-redundant storage (RA-GRS) C. zone-redundant storage (ZRS) D. geo-redundant storage (GRS)

QUESTION 198
You have SQL Server on Azure virtual machines in an availability group. You have a database named DB1 that is NOT in the availability group. You create a full database backup of DB1. You need to add DB1 to the availability group. Which restore option should you use on the secondary replica? A. Restore with Recovery B. Restore with Norecovery C. Restore with Standby Correct Answer: B

QUESTION 219
You have an Always On availability group deployed to Azure virtual machines. The availability group contains a database named DB1 and has two nodes named SQL1 and SQL2. SQL1 is the primary replica. You need to initiate a full backup of DB1 on SQL2. Which statement should you run? A. BACKUP DATABASE DB1 TO URL='https://mystorageaccount.blob.core.windows.net/ mycontainer/DB1.bak' with (Differential, STATS=5, COMPRESSION); B. BACKUP DATABASE DB1 TO URL='https://mystorageaccount.blob.core.windows.net/ mycontainer/DB1.bak' with (COPY_ONLY, STATS=5, COMPRESSION); C. BACKUP DATABASE DB1 TO URL='https://mystorageaccount.blob.core.windows.net/ mycontainer/DB1.bak' with (File_Snapshot, STATS=5, COMPRESSION); D. BACKUP DATABASE DB1 TO URL='https://mystorageaccount.blob.core.windows.net/ mycontainer/DB1.bak' with (NoInit, STATS=5, COMPRESSION); Correct Answer: B (without section)

QUESTION 220 
HOTSPOT You have a SQL Server on Azure Virtual Machines instance named VM1 that hosts a database named DB1. You run the following query. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

QUESTION 224
You have an Azure subscription that contains two instances of SQL Server on Azure Virtual Machines named VM1 and VM2. Both instances run Microsoft SQL Server 2019 CU8. You need to deploy a failover cluster instance (FCI) to VM1 and VM2 that will use Azure shared disks. The solution must maximize resiliency. Which quorum option should you use? A. node majority with a cloud witness B. node majority with no witness C. node majority with a file share witness D. node majority with a disk witness Correct Answer: D

QUESTION 227 
You plan to deploy two instances of SQL Server on Azure virtual machines in a highly available configuration that will use an Always On availability group. You need to recommend a deployment solution that meets the following requirements: Provides a Service Level Agreement (SLA) of at least 99.95% Replicates databases in the same group synchronously Minimizes the latency of database writes What should you recommend? A. Create two proximity groups and two availability sets. Deploy each virtual machine to a unique availability set. Add one virtual machine to each proximity group. B. Create a proximity group and an availability set. Deploy each virtual machine to the availability set. Add both virtual machines to the proximity group. C. Create a proximity group and two availability sets. Deploy each virtual machine to a unique availability set. Add both virtual machines to the proximity group. D. Create two proximity groups and a single availability set. Deploy both virtual machines to the availability set. Add one virtual machine to each proximity group.

QUESTION 228 
You have a single availability set that contains two SQL Server on Azure Virtual Machines instances. The instances were deployed by using an Azure Marketplace SQL Server 2019 Enterprise image that has the latest cumulative updates applied. The instances are configured as the nodes of a failover cluster instance (FCI) named FCI1. You need to ensure that client applications can connect to FCI1. The solution must meet the following requirements: Provide an availability SLA. Minimize costs. What should you create? A. an Azure Standard Load Balancer B. a virtual network name (VNN) resource C. a Basic Azure Load Balancer D. a distributed network name (DNN) resource Correct Answer: D (without section)

QUESTION 231
You deploy an instance of SQL Server on Azure Virtual Machines: named SQL1 that hosts multiple databases. You configure the full recovery model for all the databases. You perform a full backup of the master database on SQL1. You need to a perform an additional backup of the master database on SQL1. The solution must minimize how long it takes to perform the backup. Which type of backup should you perform? A. log B. full C. differential D. tail-log Correct Answer: C

QUESTION 234 
HOTSPOT You have SQL Server on an Azure virtual machine that contains a database named DB1. The database reports a CHECKSUM error. You need to recover the database. How should you complete the statements? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.