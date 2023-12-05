---
title: iSH V.S. Termius V.S. Blink Shell for SSH
date: 2022-06-17
---

After using an iPad for remote development for
CS136 via the browser, and hearing that CS246 assignments were encouraged to be done on the school server via SSH, I decided that I would try my hand at contining to program off of my iPad (while I wasn't in my dorm, nothing quite beats a dedicated setup).

### **Options**

Ultimately, all I needed was a method to SSH into the school server. After doing some googling, I found myself with three options: 

1. iSH
2. Termius
3. Blink Shell

While Termius and Blink Shell are SSH clients, iSH is Linux Shell Emulator. All three have pros and cons that would benefit some users over others.

### **iSh**
[iSH](https://ish.app) is a Linux Shell Emulator that uses usermode x86 with an underlying distro of Alpine Linux. As a result, you can *almost* install whatever tools you want. The interface is just a terminal, and has some customization options built-in.

While iSH may seem like an immediate winner, there are several drawbacks. Firstly, the app sometimes has visual glitches. While this may because of my machine (2021 M1 iPad Pro), it hinders my ability to use the app nonetheless. Afterall, the majority of my personal development takes place on my windows machine and I only really need the ability to SSH. If I need to remotely access a smaller project and run code, I generally use Gitpod.

iSH promises too much and under-delivers on the core statbility and user expierence that I need from an app. As a result, I have decided to take this app off the table.


### **Termius**

[Termius](https://termius.com) is a robust SSH client which is available on both desktop and mobile. Since I am a student, I recieved the studen version of the app. Though this is true, the free version of the app would have been more the enough for my tasks.

If I hadn't discovered Blink Shell, I think I would still be using termius. The interface is very intuitive to use, you can have multiple sessions going, the app is able to keep a stable connection with a server for sometime in the background without loosing connection, and much more. The expierence of using the app was nothing but pleasing.

Termius does exactly what it advertises and more. I believe that my use case is very limited, and thus I only get to expierence a tiny part of the app. I can see someone who has to work with many different servers highly enjoying working with this app, especially because it has a desktop app. The only compaint that I have is the interface takes up a decent amount of space when I have the app in Slide Over.


### **Blink Shell**

[Blink Shell](https://blink.sh) is a minimal SSH client available on iOS. There are several versions of the app, of which I am using their student version (which essentially get's rid of the "thrice-a-day" pop-up asking to upgrade).

The initial thing that drew me to Blink Shell was the minimal aesthetic. Much like iSH, the app was just a terminal. This made using the app in Split Screen and Slide Over perfectly viable (which is something I often due to reference my assignment questions). While the interface is simple, there are several features hidden in the app. Of several, I find the "Blink Code" utility the most useful.

Essentially "Blink Code" lets you open an instance of the web version of VSCode (customized to you preferences) in the app. Using this instance, you may open remote repositories, connect to Gitpod, edit files via SSH. While the SSH features doesn't work for my use case (due to the way the authentication is set up on my schools servers), the others features were beneficial enough that it has already seamelessesly worked it's way into my workflow. In fact, this post was written using "Blink Code".

Blink Shell filled my exact requirements and more. While it doesn't have the same tools Termius does, it is a much better expierence when multitasking and for my workflow.


### **Closing Thoughts**

While each app has benefits and drawbacks, I think Blink Shell is the one that works the best for what I do. I plan on using it for the rest of my school term.

If anyone reading this decides to use Blink Shell, you'll note that it has support for custom themes. I have created several themes using the Catpuccin palette which can be found [here](https://github.com/catppuccin/blink). Consider giving it a shot (and starring :3).

This comparison was by no means thorough, and mostly seeks to inform my future self of what decisions I was making while picking Blink Shell. I encourage anyone who is unsure of which app to use to give each one of them a shot.

