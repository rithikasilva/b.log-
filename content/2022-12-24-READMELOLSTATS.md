---
layout: post
title: Initial Alpha of README LoL Stats
date: 2022-12-24
---

After just finishing my first co-op (which could be it's own post), I decided that I wanted to work on a project using the Riot API since I had been considering it over the summer but was too lazy to get started. Two things happened recently which sparked the idea of **README LoL Stats**. First was finding about the existence of **GitHub Actions**. In particular, the fact that I could use one of their runners for free (unlimitedly) as long as I use a workflow in a public repository. As a student, this was naturally enticing. Second was finding the numerous README profile related workflows on the **GitHub Actions Marketplace**. Putting two and two together, I decided that I wanted to make a GitHub Action which auto-populated a users README Profile with their League of Legends statistics. Since websites already exist for gathering most useful stats (such as performance on champions, KDA, expierence, gold, etc..), and since the Riot API contains lots of interesting stats because of the "Challenges" introduced in season 12, I decided that I would focus on fun statistics. This also avoids displaying stats that you aren't proud of on your profile :P. 

Currently, the action is accessible [here](https://github.com/marketplace/actions/readme-lol-stats). The project is still in it's alpha phase, since there may be several bugs that I haven't come across yet. As a result, only people who have a **Fine-Grained Access Token** for the repository that actual contains the source code (since I have that in a private repository) and a **Riot API Key**. When I get the "Version 1" of this project released, I will probably make the repository public as it will then have thorough documentation and contain code that isn't horendous.


My goal is to have V.1 released on **January 3rd**. This is for two reasons. The first is that I start my 2A term of university on the 9th and I would like to get the first version finished before then. The second is that I only have access to API keys that are active for 24hrs at a time since Riot Games will only be accepting requests for permanant API keys after January 3rd.

An example of what can be displayed can be found on [my README profile](https://github.com/rithikasilva).

