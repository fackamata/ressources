---
titre : ubuntu
layout: default
techno: linux
---

## shortcut

## Window & Workspace Management

SUPER + H	 -> Minimize windows

### operating system

SUPER	-> Activities overview
SUPER + A	-> Applications
SUPER + P	-> Presentation mode (cycle display modes)
SUPER + L	-> Lock screen
SUPER + O	-> Orientation lock (on devices w/accelerometer)
SUPER + D	-> Show desktop
SUPER + V	-> Calendar and notifications indicator
SUPER + N	-> Focus active notification
Ctrl + Alt + T	-> Terminal
Alt + Space	-> Application menu
SUPER + Space	-> Switch input source (language keyboard)
Alt + F2	-> Run command
Ctrl + Alt + Del	-> Log 

## Accessibility

Alt + SUPER + S	-> Toggle screen reader
Alt + SUPER + 8	-> Toggle magnifier
Alt + SUPER + +/-	-> Zoom in/out (when magnifier is active)

### Aptitude stuff

    aptitude search mysql       # Look for something
    dpkg -S `which tsclient`    # What package does it belong to?
    dpkg -L aria2c              # What does this package provide?
    dpkg -i *.deb               # Install a deb file
    dpkg -s nodejs              # Show info

    dpkg --get-selections       # list installed packages

### Apt archives path

    /var/cache/apt/archives

### List services

    service --status-all
