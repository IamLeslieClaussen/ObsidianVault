
Python provides a method[[  int.bit_length()]] thqt computes the number of bits requred to represent a given integer. However this funtions uses the binary representation that we have learned, which considered only positive integers rather than [[two's completement representation ]]

As a consequence it might underestimate by 1 the required number of bits. Nevertheless, the result is accurate enough to be useful in practice. 

More concretely, in Python we can identify th minimum number of bits required to represent a list  of numbers by computing the maximum value of int.bit_length() for all elements of that list. This can be done using [[max()]]

In the same way as before, we can use the [[sys.getsizeof()]] to get the size (in bytes) of a Python string


Python will use one of three encodings to store strings in memory:

1 byte per character (Latin-1 encoding)
2 bytes per character (UCS-2 encoding)
4 bytes per character (UCS-4 encoding)
