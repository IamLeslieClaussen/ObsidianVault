## [[Command Line]]
When Computers were expensive, gigantic monstrosities and only owned by large institiutions. These were operated by [[the command line interface]]

It is a text only interface
The CLI is a text only interface that interacts with the computer by typing in the Terminal or Console.
The instructions we put into the terminal are called commands. Once input, are interpreted by a type of Programm called a  [[Shell]] or [[command language interpreter]].
Some of the most popular ones are Bash, Zshell, Kornshell, Command Promt and Windows Powershell.

[[Command prompt]] - it prompts the user to insert a command. 
[[Command Line]] - it is where the user enters the command

Every command is case sensitive. For instance, running 'Date' is not the same as running 'date'

[[Parameter]]- It is either an option or an arguement. 
[[Option]] - is a string of symbols that modifies the behavior of the command and it always starts with a dash (-)....eg '-y'
[[Arguement ]] or [[Operand]] - is an object upon which the command acts.
[[Utility ]]- the first item in the instruction. 

Options alter the behavior of commands
[[Long Option]]  option that starts with '--'
[[Short Option ]] starts with '-'
They both have the same outcome though. However Long Options are more easier to remember, easier to guess what they do and more descriptive. 

[[File system]] is among other things, an organisational system of our files  in groups called [[directory]] or folders for common folks.
When a directory isn't contained in any other directory, it is called a [[root]].

[[current working directory]] or [[working directory]] is the directory where our terminal session is located at a given time.

[[Hidden file]] a file that, by default, filesystem utilities do not display when showing a directory listing. We can also however, list the hidden files by using '-A' option. 
A file that is hidden when its name starts with a full stop(.)..This also counts for directories.

[[Metadata]]is data about the file itself, not its content. Eg, are the last modifcation time, date, size and so on. 

[[Absoluth path]] is any path that starts with a slash (/)
[[Relative path]]  any other path is called that because they are paths relative to the current working directory.

[[-q ]]which only reports that the files are different, when they in fact are

### [[The Filesystem:]]

Syntax
Concepts
Resources
• Listing the contents of a directory.
• Listing the non-hidden contents of the current [[directory]] without any options: ls
• Listing the non-hidden contents of path /home/dq : ls /home/dq
• Listing the non-hidden contents of the current directory in long format: ls -l
• Listing all contents of the current directory: ls [[-a]]
Listing all contents of the current directory except for the directories . and .. :
ls -A
•
Listing all contents of /home/dq in long format, except for the directories . and .. :
ls -Al
•
• Changing directories:
• Change to directory /home : cd /home
• Change to the parent directory of the current directory: cd ..
• Change to the parent directory of the parent directory of the current directory: cd ../..
• Change to your home directory: cd
• Change your home directory: cd ~
• Change to the home directory of user dq: cd ~dq
• Change to the previous directory: cd -
Files are organized in a hierarchical directory structure. It is an organizational system for
files and directories, in which files and directories are contained in other directories.
•
A path is a sequence of slashes and files and directory names that define the location of a file or
directory.
•
An absolute path is any path that starts with a slash. It tells us how to go from the root
directory to the location of the the file specified by the path.
•
All others paths are relative paths. They tell us how to go from the current directory to
the location of the the file specified by the path.
•
The root directory is defined by the path / . It is the only directory that isn't contained in any
other directory.
•
• The home directory of user <username> is /home/<username> .
	
To create a directory, we use the command [[mkdir]] short form for 'Make directory'
[[rmdir]] - remove directory
	
move directory - mv
	
	
	
### Glob Patterns and Wildcards

The patterns we create to match filenames are called [[glob patterns ]](https://en.wikipedia.org/wiki/Glob_%28programming%29). This works in a similar way to regular expressions, which you learned earlier, only the characters used and their roles are a bit different. Glob patterns are built from special characters called [wildcards](https://en.wikipedia.org/wiki/Wildcard_character), and from regular characters.
	






