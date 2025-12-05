## [[Algorithm]]
It is a program or function that solves some specific problem. 


Intuitively, the more data an algorithm needs to process, the more time it will take to run. What we are interested in is building a model that tells us by how much the execution time grows as we increase the amount of data. We call these models the [[time complexity of an algorithm]]






Our starting point will be measuring the execution time, because that would help us to build valuable intuition. 
Python offers a few different ways to do this. In this lesson, we will use the [`time` module](https://docs.python.org/3/library/time.html). 

Using the [[time.time()]] function, we can measure the time a Python function takes to execute by computing the difference between the time just _after_ the function finishes executing and the time just _before_ it started executing. If we call the time just before the execution `start` and the time just after `end`, then the execution time of the function will be `end - start` 


import time                
start = time.time()        
f()
end = time.time()          
runtime = end - start

