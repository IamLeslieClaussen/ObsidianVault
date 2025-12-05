Migration scenarios can broadly be categorized into 
1. [[rehosting]] also referred to as [[lift and shift]]. It is mostlu associated with changing the underlying infrasture. As in rehosting an on-premis database on Azure VM. A vm doesnt care what database engine it is running, so after configuring the relevant database server software. Eg micgration is assisted by 3rd party tools such as SQL Server, Oracle, IBM DB2 you can. If the databases are currently supported by versions of SQL server, migragtion can be done via [[lift and shift]]. SQL Server databases reliant of third party or custom libraries for extended functionaliry will be limited to rehosting unless, alternative solutions compatible wit the selected azure target can be implemented.

[[sql managed instance]]: is nearly 100% compatible with SQL server

3. [[re-platforming]]: It encompases all scenarios where you migrate from database  engine that isnt supported either as a managed instance, or your migrating to 
-Azure SQL DB
-Azure MySQL
-Azure PostgreSQL
