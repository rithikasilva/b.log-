---
title: README LoL Stats to README Profile LoL Stats
date: 2022-12-29
---

After some debugging, commenting, and format changes, and name changes, I decided to 
make the repository that contains the code for "README Profile LoL Stats" 
(FKA "README LoL Stats") public. An advantage to doing so is that anyone with a
Riot API key can now use the project (and don't need to contact me for an access
token). The disadvantages were: having to rename the action since my repo name was
the same, I should start using different branches to keep new features separate
from the main branch (which I supposed is a good thing), and making my code more readable
(which is also probably a good thing 👀).

The new action can be found [here](https://github.com/marketplace/actions/readme-profile-lol-stats).
Hopefully I can get more people using it this way and find/fix/solve bugs that I haven't
come across yet. Changing the structure for this project also means that I can avoid users using
their own Riot API key in the future, provided I am able to get a production key.


