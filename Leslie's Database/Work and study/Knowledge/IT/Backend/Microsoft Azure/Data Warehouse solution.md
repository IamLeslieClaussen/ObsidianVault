[[Data warehouse]]
Data from different sourcces and cleans/transforms/validates/aggregates and saved in hiarachyial groups (Facts and dimensions).

The quantity of data is overwhelming so working on it is extremely hard to read.
We only want to know whats important.
We need to be able to slice data
Data should be easily be available.

[[Star Schema]]
A way to build your the Data warehouse.
A design pattern made up of 'Facts' and 'Dimension Tables'
Facts: The Subject of Analysis. The central concept table.
They are mostly Additve or semi-Additive
Dimension: Describes business entities - Things you model. 
The outer table refering to the central table.
The context of Analysis. Contains most attributes.
Example: Products, People, Places and concepts


[[ERP]]: Enterprise resource planning-software in organizations use to manage day-to-day business  activities succh as accounting, procument, project management, risk management, compliance and supply chain operations.

[[CMR]]: Customer Relation Mgmt.

[[Modern Data Warehousing ]]
![[Screenshot 2023-01-21 at 01.08.47.png]]

-Data from variety of sources are ingested via data warehousing
-[[Data Lake]]  architecture is more often used to store data for later analysis.
-Compute and storage are seperate. charged seperately. 
For storage, you only pay for the amount of storage and not for the transaction itself.
DWU = CPU + Memory + IO

Modern Data Warehouse Architecture:
![[Screenshot 2023-01-21 at 01.24.45.png]]

Set of services that we can bring together:
[[Azure Data Factory]]: Severless integration product
Data integration in a hybrid scenario.
Can bring data from any source.
Also controls Data flow and land it in [[Data Lake]] storage for later use.
-[[Azure SQL]]: Is used to query the data.
-[[Azure databricks]]: Uses different languages to query/Work the data in [[Data Lake]].
-Finaly for 
