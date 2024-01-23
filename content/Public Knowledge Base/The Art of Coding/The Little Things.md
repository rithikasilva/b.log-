---
title: The Little Things
date: 2024-01-22
---
In doing anything for extended periods of time, your pick up a few tips and tricks. You can judge me all you want for what I may have learned to late, or that the way I do things isn't actually the best. I don't care. 

Listed below are tips, tricks, and settings. Everything is subjective (but you can still be wrong). Most of my settings and keybindings can be found in my [dotfiles repo](https://github.com/rithikasilva/.dotfiles).

#### VSCode
- `Alt` and using arrow keys on current line or selected lines can move things around.
- `Ctrl + p` is your best friend. Just use it.
	- Find files.
	- Run commands (`>`).
	- Use the `@` in the command palette to search for symbols quickly. This is for one file. `#` for all the code.
	- `:` just like Vim will get you to a line.
- Click + `Alt` will let you have multiple cursors. `Ctrl + Alt` and arrows will let you extend adjacent lines.
- Select code and do `Ctrl + /` to comment and uncomment.
- `Ctrl + x` cuts a line.
- ``Ctrl + ` ``  opens the integrated terminal. I hate this binding with a passion.  I have it bound to `Ctrl + \`. I have the split editor rebound to `Shift + \` since my Tmux config also has vertical split bound to `<leader> Shift + \`.
	- Use `Ctrl` and left-right arrows to go between parts of the text faster to fix mistakes.
- VSCode can rename symbols. Use `Find All References` then rename. Use with caution. 

#### Neovim
- Building a config from scratch or building a config is up to you. Personally, I found myself coming back to [LazyVim](https://www.lazyvim.org/) a lot. Has stuff I use anyways:
	- [bufferline.nvim](https://github.com/akinsho/bufferline.nvim.git).
	- [conform.nvim](https://github.com/stevearc/conform.nvim.git).
	- [flash.nvim](https://github.com/folke/flash.nvim.git).
	- [mason.nvim](https://github.com/williamboman/mason.nvim.git).
	- [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git).
	- [noice.nvim](https://github.com/folke/noice.nvim).
	- [nvim-notify](https://github.com/rcarriga/nvim-notify).
	- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter).
	- [telescope.nvim](https://github.com/nvim-treesitter/nvim-treesitter).
- I'm lazy, so I use [LazyGit](https://github.com/jesseduffield/lazygit).
- I don't really change any keybindings for NVIM. I probably should but haven't found a case to make changes yet.

#### Tmux
- A couple of must have lines in your `.tmux.conf`:
	- `set-option -sa terminal-overrides ",xterm*:Tc"` for fixing colours.
	- `set -g mouse on` is handy for copying. Let's be real, do you really want vim style copying for large terminal output? No.
	- `set -g base-index 1`, `set -g pane-base-index 1`, `set-window-option -g pane-base-index 1`, and `set-option -g renumber-windows on` are used together to have numbers not start at 0. Keeps things linear on the keyboard since I don't use a numpad.
	- If you use the default `<leader>` keys you are a psychopath. I rebind mine to `Ctrl + s` with `set -g prefix C-s`.
	- Rebind the pane navigation keys with `setw -g mode-keys vi` and `bind-key KEY select-pane DIRECTION`.
	- I know some people might complain that my pane splitting keybindings are not ideal, and to them I say to step on a Lego. I use `Shift + \` and `Shift + -` to split vertically and horizontally. Additionally, I specify that the new pane should have the same path as the one I'm splitting from. I first `ubind KEY` and then `bind-key KEY split-window DIRECTION -c "#{pane_current_path}"` and replace `KEY` and `DIRECTION` with the necessary values.
- [TPM](https://github.com/tmux-plugins/tpm) is a necessity. Use it. I try to keep my stuff minimal so the plugins I use are [Tmux-Yank](https://github.com/tmux-plugins/tmux-yank) and the [Catppuccin](https://github.com/catppuccin/tmux) or [Nord](https://www.nordtheme.com/docs/ports/tmux/installation) theme (depending on what I am feeling). There are many other amazing plugins that may be handy situationally.
- I don't really use windows at all. I have found that the pane-only workflow seems to work best for me. 
- If you work on a server, just use Tmux. Disconnecting from the server doesn't quit your session.





