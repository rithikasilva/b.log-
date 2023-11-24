---
title: "Update: Interacting with the School Server"
date: 2023-11-24
---

After having a conversation with a friend, I realized I had gone through several different "workflows" for interacting with the University of Waterloo's student server for completing some of my coursework. While I think the workflow I have right now is the best that I have used, that is also what I thought with each of the previous iterations so I'm positive that this will probably change in the future again.

#### First Iteration: PuTTY
When first introducing the existence of the school server for submitting/completing assignments, my professors has suggest to just use PuTTY and Vim. The reason I almost immediately moved away from this was because of my disdain for using PuTTY, and the fact that the school server is pretty locked down, so didn't allow me to install any additional tools that I personally like to use (which includes plugins for Vim/Nvim).


#### Second Iteration: Windows Terminal + VSCode and Blink Shell
What I had been using the longest (so far) was using windows terminal (for appearance sake) to SSH to the school server, then use VSCode's remote extension to make edit from my machine. While I don't hate using Vim on the school server, having VSCode meant that I had greater control of the different editor tools I could have running (including those that came already built-in to VSCode). The school server locks down the type of things you can install/change on each system, and many of the plugins I like to use with Vim/NVIM couldn't be setup.


When I didn't have my laptop with me and wanted to make edits to some code, I would use Blink Shell to SSH from my iPad to the school server. Of all the SSH clients I have tried for the iPad, I think Blink Shell best suits my needs. If you are looking for a theme for it, why not try out the [Catppuccin theme I wrote](https://github.com/catppuccin/blink).


#### Third Iteration: Nvim + SSHFS in WSL 2
What I use at the time of writing for the iPad has remained the same, but for my laptop has changed. I had been using WSL 1/2 for a while for development related work as I had gotten fed up with Window's related issues too many times. As a result, I had built up a nice development environment to get things done quickly. For some odd reason, I had completely forgotten the existing of SSHFS. Upon rediscovering it, I had realized that I had found the solution to my problem for not being able to install plugins for Vim/NVIM on the school server.

So, I wrote a two quick scripts to mount my user content from the school server to my machine (in WSL) so I could use all the programs and tools on my development environment with the files on the school server.

The best setup I have found is to use Tmux to have one window to edit files that are mounted using SSHFS and the other to have a SSH connected terminal so I can run programs that are only found on the school server that I don't want on my machine (things like running QEMU emulators).

The necessary scrips, Nvim setup, and Tmux config can all be found in my [.dotfiles repo](https://github.com/rithikasilva/.dotfiles).

![[2023-11-24-SchoolDevSetup.png]]
*Example of how my current setup looks like. The left has Nvim running on my machine (in WSL) editing a file from the school server mounted on  my machine using SSHFS. The right is just a terminal with an SSH connection to the school server. Everything is contained within Tmux.*

Tags: #nvim #school #dev