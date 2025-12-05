[[Data]]
Any information. 

### Types of Data:
1. [[Structured Data]]:
 Data in the forms of colums and Rows eg Retail Data, Banking Data
 (Azure SQL Database)
2. [[Semi-Structured Data]]:
  Structure of Data is not fixed. It has some organisational framework. 
  But does not have the complete structure to fit in a relational database.
  (Azure Cosmos DB)
3. [[Unstractured Data]]
   Data that does not have any form of organisation or predefind manner.
   Eg. Audio and Video files. 
   (Azure Blob storage)



###[[Datafile Formats]]
[[Delimited Text File]]:
Data is stored in plain text format with specific field delimiters and row terminators.
Eg. [[CSV]], Tab sepetated Values ([[TSV]])
-Easy to read.
Disadvantages 
-commas might be precent in the actual data itself. 
-datatype is not forced consistent.

[[Extensible Mark up Language]], [[XML]]:
-Uses tags enlosed in angle Brackets (<.../>) to define the elements and attributes. 
-This has now been overtaken by [[Work and study/Knowledge/IT/Microsoft Azure/JSON]]

[[Java Object Notation]], [[Work and study/Knowledge/IT/Microsoft Azure/JSON]]:
-Stored with .json extension. 
-Supported by most progamming Languages 
-widely accepted format on the web.
-easily Human readable 
-Reques less formating and is a good alternative for XML.

[[Binary Large Object]], [[BLOP]]
-Some stored in basic binary code. We need application to open these files. Usually images, videos, audios etc.
-They can exist as persistent Values inside some databases, or exist at runtime as progam variables in some languages.

###[[Optimized File Formats]]
Enable Compression, indexing  and efficient Storage and processing.

[[Avro]]
-created by Apache
-Row based format
-Compact, fast, binery data format.
-Header describes the data and structure.
-Header is stored in JSON
-Application uses the information in the header to parse the binary data and extract the fields in contains. 
-Good format for compressing data and minimizing storage and network bandwith requirements.

[[Optimized Row Columnar Format]], [[ORC]]
Based on columns called strips 

[[Parquet]]




###[[Transactional Database]],[[OLTP]] vs [[Data warehouse]], [[OLAP]]
