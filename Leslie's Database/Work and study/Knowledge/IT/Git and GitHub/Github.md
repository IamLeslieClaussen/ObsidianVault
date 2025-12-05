One of the most useful ways to use Git is in conjunction with [[GitHub,]] a website built on Git, but with a familiar graphical user interface. Using Git with GitHub allows us to push our code to remote repositories. This enables us to:

Share our code with others and build a portfolio.
Collaborate with others on a project and build code together.
Download and use code others have created.

To download a remote [[repository]] to your own computer, you'll need to clone it. Cloning copies a repository from one location (in this case, a remote one) to a folder on your computer. The repository retains all of its Git history, and you can work with it just like you would with a Git repository you created yourself.

Every Git [[repo ]] consists for one or more [[branches]]. Each branch consist of a slightly different version of the code. The main branch of the Git repo is called the  [[Master]] Branch. Developers create different branches when they want to work on new features for a project, then add the commits in those branches back to the master when the features are ready. 

The master branch is usually the most up to date version of any code project.

We can check which branch we on with the [[git branch ]]command. 
This command will list all the branches in the repo. It was also highlight the currenty active branch and add an asterics next to its name. 

Once changes are made locally on the computer,  these can pushed to the remote repo with the [[git push]] command.  When we use the [[git push]], we need to specify both the name of the remote to push to, and the name of the branch we are pushing. 
When we[[ clone]]  a repo, Git automatically names the remote repo [[origin ]].  This means that the following command will push master branch to the remote repo. 

-git push origin master 

The [[git remote]] command will list all the repos remotes. If we speficy the -v option, we'll get additional nformation about where the remote repos are located. 

We can use [[git log]] to see changes made in the local repo. 
We can use git with hash (the particular number seen in the git log) to give info on an exact point the history...like an ID. 

The working directory, is the folder we are version controlling with Git. And the contents of the directory are what we see when we list the content of the folder with ls. [[Git add ]] adds the difference between the most recent commit and the current state of the working directory to the staging area. 

we can pull up the difference between two commits with the [[git diff]] command. 
[[git reset ]] undo changes on stage
[[git reset --hard]]: Resets both the working directory and the Git history to a specific state.
[[git reset --soft]]: If we ommit the  ''--'', that is what is referred to as soft rese. This would make changes only to the Git history but not to the working directory. 

When the latest update on the local repo is older than that on the remote repo we can do a [[Git pull]] to update the current branch with the latest commits. 

We can use [[git rev-parse]](https://git-scm.com/docs/git-rev-parse) along with the `HEAD` variable to find the commit hash corresponding to a particular commit number


### Git Branches 
We can use the command [[git branch]].
After that, we can change to the new  branch by using the command [[git checkout branch ]].
[[git checkout -b rocky]] is a short form of creating the branch, naming and moving to it at the same time. 
Switching to a different branch will change the working directory to reflect the latest commit in that branch. 
switching to a new branch, making a new commit, then switching back to master will switch our working directory back to the state of the latest commit in master. 
To redirect some code into a file, we can se the [[printf ]]command. Printf is a C library function that sends formatted output to stdout. For example, to redirect the code bot.py, we use the following 

printf "print(2)" >>bot.py

[[git merge]]: is a command that merges branches into each other or with the master branch. 
[[git branch -d]] will delete any branch with merged commits. It will not delete branches with unmerged info.
[[git fetch]]: will fetch all of the current branches and commits from the remote. This will not make any changes to the working directory, but it will update Git's list of branches and commits. 

''[[git checkout branch]]'' angry-bot will look for the `angry-bot` branch in the local repo and remote repo. Because it only exists in the remote repo, Git will copy it into the local repo. Git will also make `angry-bot` the current branch (For example)


### Merging Conflicts 
When Git cant merge commits automatically, it informs the users of a merge conflict and asks them to sort it out. This involves editing the code that conflicts with the correct version. This way, the person who wrote the code is in charge of solving the issue, and Git doesn't overwrite anybodies work.

One way to resolve a conflict is to abort the merge altogether. We can do this with [[git merge --abort]]