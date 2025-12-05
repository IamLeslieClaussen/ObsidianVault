[[GIT]]

The typical Git workflow involves adding files, making changes, and then storing a checkpoint (or "snapshot") of those changes. These checkpoints are called [[commits]].

Instead of storing every file in every commit, Git stores the [[diff]], or the things that change between commits.

[[committed ]]- The current version of the file has been added to a commit, and Git has stored it.
[[staged ]]- The file has been marked for inclusion in the next commit, but hasn't been committed yet (and Git hasn't stored it yet). You might stage one file before working on a second file, for example, then commit both files at the same time when you're done.
[[modified]] - The file has been modified since the last commit, but isn't staged yet.

Before we can make our first commit, we need to tell Git who we are so it can store that information along with the commit. This step ensures that all of the members on a team can tell who made a certain commit.

We can do this by running [[git config]]. We only need to run this command once per computer, because Git will save the information.

Git needs two pieces of information about you -- your email address and your name. You can configure your email with:

[[git config --global user.email "your.email@domain.com"]]

ou can configure your name with:

[[git config --global user.name "Your name"]]

To make a commit, we use [[git commit]] -m "Commit message here". The -m flag indicates that we're adding a message, and the text in quotes that comes after it is the commit message itself. It's customary to make the commit message something informative, so if we do have to rewind or merge code, it's obvious what changes we made and when.

We can pull up a repository's commit history using the [[git log]] command. This command will show us a list of all of the commits to the repository, in descending order by creation date. If the output is very long, it will allow us to scroll. We can scroll through the log with the up and down arrows, and use the `q` key to exit.