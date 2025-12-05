## [[Import ]]  [[CSV ]] files into [[Python ]] and [[Jupyter]] 
.CSV = Comma Seperated Value

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xi52tx6phRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/efSjcrp87OY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Method 1
from csv import reader

opened_file = open('*filename.csv*')
read_file = reader(opene_file)
list= list(read_file)

### Method 2 
with open('filename.csv') as csvfile:
    csv_reader = csv.reader(csvfile)
    for role in csv_reader:
        print(role)














### Load [[CSV ]]File or [[Dataset]]
#### 1. Import [[pandas ]]as pd
Pandas is a python library, that gives us a set of tools to work with data more efficiently.

### [[Opening Files]]
When using for example open('AppleSore.csv') (Withouth specifying the full path), the compter looks for the file('AppleStore.csv') *only* inside the directory where the *Jupyter Notebook* from which we run code is located.

Either place file in the same directory or state out direct path. 