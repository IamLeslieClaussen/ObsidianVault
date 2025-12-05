[[ETL]](Extract, Transform and Load):
Extract data from source and transformed before saved.
Stream oriented approach.
-Basic Transformation task (cleaning, Removing duplicates, removal of sensitive Infos)
-usually used on On-premis ([[SSIS]])

[[ELT]](Extract, Load and Transform):
Gathering of data and loading before the transformation occurs.
-Usually used for complex operations 
-Iterative approach often used for periodic batch processing. 
-Suitable for Cloud 
-Azure Data Factory-create a scheduled data driven workflows
