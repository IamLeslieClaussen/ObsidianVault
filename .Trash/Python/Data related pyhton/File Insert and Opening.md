-Import the reader from the CVS module.

```python
from csv import reader
```

-Use Python build in function open()

```python
opened_file = open('......csv')
```

-use the csv.reader() to parse the data from the opened file.

```python
read_file = reader(opened_file)

```

-Use list() to create a list of lists from reader

```
    children = list(read_file)
```

a [[module]] is simply a collection of variables, functions, and/or classes (which we'll collectively call 'definitions') that can be imported into a Python script.

Whenever we use definitions from a module, we first need to [[import]] those definitions. There are a number of ways we can import modules and their definitions using the [`import` statement](https://docs.python.org/3/reference/simple_stmts.html#import):

1. Import the whole module by name. This is the most common method for importing a module.
#import the module 
import csv

#definitions are available using the format
#module.name.definition_name
csv.reader()

2. Import the whole module with an alias. This is especially useful if a module is long and we need to type it a lot.
#import the module with an alias
import csv as c

#definitions are available using the format
#alias.definition_name
c.reader()

3. Import one or more definitions from the module by name. This is the technique we've used so far. This technique is useful if you want only a single or select definitions and don't want to import everything.

#import a single definition
from csv import reader

#the definition you imported is available
#by name
reader()

#import multiple definitions
from csv import reader, writer

#the definitions you imported are available
#using the format definition_name
reader()
writer()

4. Import all definitions with a wildcard. This is useful if you want to import and use many definitions from a module.

#import all definitions
from csv import *

#all definitions from the module are
#available using the format definition_name
reader()
writer()
get_dialect()

Choosing which option to use when importing is often a matter of taste, but it's good to keep in mind how each choice can affect the readability of your code:

If we're importing a long-name module by name and using it often, our code can become harder to read.
If we use an uncommon alias, it may not be clear in our code which module we are using.
If we use the specific definition or wildcard approach, and the script is long or complex, it may not be immediately clear where a definition comes from. This can also be a problem if we use this approach with multiple modules.
If we use the specific definition or wildcard approach, it's easier to accidentally overwrite an imported definition.
In the end, there is often more than one "correct" way, so the most important thing is to be mindful of the trade-offs when you make a decision on how to import definitions from modules.

We'll learn about these trade-offs in the next screen as we learn about Python's datetime module, and make a decision on how to import it for our needs.