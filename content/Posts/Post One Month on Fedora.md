---
title: Post One Month on Fedora
date: 2024-03-17
---
I've officially been using Fedora for a month on [[Tachyon]] and I have enough changes made that I think it's time for me to do a progress post.
<p align="center">
  <img src="https://rithikasilva.ca/b.log-/Images-and-Assets/post-month-fedora-open.png" width="600px"/>
</p>
At a glance, I'm using:
- [Alacritty](https://github.com/alacritty/alacritty) as my terminal emulator.
	- Bash as my shell.
	- [Starship](https://github.com/starship/starship) for my prompt.
	- Tmux as default.
- [Dunst](https://github.com/dunst-project/dunst) for desktop notifications.
- [i3](https://github.com/i3/i3) as my WM.
- [Picom](https://github.com/yshui/picom) as my compositor.
- [Rofi](https://github.com/davatorium/rofi) as my app/script launcher.
- [Polybar](https://github.com/polybar/polybar) as my bar.
- [Catppuccin](https://github.com/catppuccin) Mocha as my theme for everything.
- I use both NVIM and VSCode for my editors.
- [auto-cpufreq](https://github.com/AdnanHodzic/auto-cpufreq) to increase my battery life.
The details of what I'm using right now can be found in my [dotfiles repo](https://github.com/rithikasilva/.dotfiles).

Things I needed to address:
- Setting up "battery" and "power" modes using a script to change things like keyboard brightness, screen brightness, refresh rate, and GPU mode.
- Pulseaudio as an audio solution instead of pipewire (issues with WH-1000XM4's).
- Create desktop entries for appimages in order for them to show up in Rofi (ex. Obsidian).

Things I've noticed:
- Battery Life: I was expecting it to be poor, but as it turns out, it isn't much worse than Windows. With the battery starting at 80%, I can get around 7.5-8 hours of regular use (basically anything except watching videos) where on windows I could have gotten 8-9.
	- Videos drain the battery almost twice as fast. I assume this is because of videos codecs, but at the moment I'm not bothered enough to fix it.