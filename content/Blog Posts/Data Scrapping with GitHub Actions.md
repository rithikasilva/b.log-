---
title: Data Scrapping with GitHub Actions
date: 2023-11-10
---

This post is going to be very brief, as it is just for capturing an idea I overheard at a recent UWAGGS meeting. Suppose you need to do some daily scrapping of a some web page for information that is updated periodically, but don't have a personal server to do your scrapping from. Then, you can take advantage of the free usage of GitHub Actions in public repositories to write an Action that checks out a repo with your scrapped data, runs a script to gather new data, and updates this checked-out repo with the new information and commits it back to whatever branch it is from. 

Doing this isn't hard even if you haven't used GitHub Action before, because most Actions actually follow a very similar overall template (and thus there are lots of example of how to do this).

If I ever get a situation where I can't run Typhoon (my personal server) to collect data, I now have a backup plan.