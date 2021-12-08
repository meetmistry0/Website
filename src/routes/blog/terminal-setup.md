---
title: "Terminal Setup"
description: "Description..."
date: "2021-11-30"
published: true
---

Setting up a customized terminal can be useful to those who use it on a daily basis.

![Terminal Prompt](/blog-images/1-dev_setup/1.png)

# Windows config
## 1. Windows Terminal

Install the terminal from the [**Windows/Microsoft Store.**](https://www.microsoft.com/store/productId/9N0DX20HK701) 

If you don't like to use the store, Go to the [**releases page**](https://github.com/microsoft/terminal/releases/latest) on the github repo and install it.

## 2. Powershell Tweaks 


## 3. Starship Installation
To install Starship we need [**Chocolatey**](https://chocolatey.org/) which is package manager for windows. Follow the [**Installation Instructions**](https://chocolatey.org/install) on the chocolatey website.

After installing Chocolatey, use the below command to install Starship 
```sh
choco install starship
```

Add the below to the end of `Microsoft.PowerShell_profile.ps1`. You can check the location of this file by querying the `$PROFILE` variable in PowerShell. 

Typically the path is `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`

```ps1
Invoke-Expression (&starship init powershell)
```
# Linux(WSL) Config
## 1. WSL Install
Run Command Prompt as administrator and paste the below line in the prompt.
```ps1
wsl --install
```
<br />

> ⚠️ The above command only works if you have Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11.

<br />
If you're running an older build, or just prefer not to use the install command and would like step-by-step directions, see [**WSL manual installation steps for older versions.**](https://docs.microsoft.com/en-us/windows/wsl/install-manual)

Reboot to apply changes.


## 2. Starship Install

Paste the following command in the linux shell to install the binary.

```sh
sh -c "$(curl -fsSL https://starship.rs/install.sh)"
```
<br />

- **For Bash, Add the following to the end of ~/.bashrc:**
```sh
# ~/.bashrc

eval "$(starship init bash)"
```
    
- **For Fish, Add the following to the end of ~/.config/fish/config.fish:**
```sh
# ~/.config/fish/config.fish

starship init fish | source
```

- **For Zsh, Add the following to the end of ~/.zshrc:**
```sh
# ~/.zshrc

eval "$(starship init zsh)"
```
<br />

# Editing starship config

We need to create a `starship.toml` file to customize the prompt.

- Windows -- ` mkdir ~/.config | New-Item ~/.config/starship.toml`
- Linux -- `mkdir -p ~/.config && touch ~/.config/starship.toml`

Paste the below lines in `starship.toml` 
```toml
# ███████╗████████╗ █████╗ ██████╗ ███████╗██╗  ██╗██╗██████╗ 
# ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║  ██║██║██╔══██╗
# ███████╗   ██║   ███████║██████╔╝███████╗███████║██║██████╔╝
# ╚════██║   ██║   ██╔══██║██╔══██╗╚════██║██╔══██║██║██╔═══╝ 
# ███████║   ██║   ██║  ██║██║  ██║███████║██║  ██║██║██║     
# ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝     

# Sets the format for the modules.
format = """
$username\
$hostname\
$shlvl\
$singularity\
$kubernetes\
$directory\
$vcsh\
$git_branch\
$git_commit\
$git_state\
$git_metrics\
$git_status\
$hg_branch\
$docker_context\
$package\
$cmake\
$cobol\
$dart\
$deno\
$dotnet\
$elixir\
$elm\
$erlang\
$golang\
$helm\
$java\
$julia\
$kotlin\
$lua\
$nim\
$nodejs\
$ocaml\
$perl\
$php\
$purescript\
$python\
$rlang\
$red\
$ruby\
$rust\
$scala\
$swift\
$terraform\
$vlang\
$vagrant\
$zig\
$nix_shell\
$conda\
$memory_usage\
$aws\
$gcloud\
$openstack\
$env_var\
$crystal\
$custom\
$cmd_duration\
$battery\
$time\
$line_break\
$jobs\
$status\
$shell\
$character"""

# Wrong command or error occured symbol
[character]
error_symbol = "[✗](bold red)"

# Battery symbols
[battery]
full_symbol = "🔋 "
charging_symbol = "🔌 "
discharging_symbol = "💀 "

# Style for 0-15% battery capacity.
[[battery.display]]
threshold = 15
style = "bold red"

# Style for 10-30% battery capacity.
[[battery.display]]
threshold = 30
style = "bold yellow"

# Style for 30-100% battery capacity.
[[battery.display]]
threshold = 100
style = "bold white"

# Username style & format.
[username]
style_user = "bold white"
format = "[$user]($style) "
show_always = true

# Will truncate the directory if current folder is a git repo.
[directory]
truncation_length = 5
truncation_symbol = "./"

# Show the time.
[time]
disabled = false
format = '[\[$time\]]($style) '
time_format = "%R"
```
