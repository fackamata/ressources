---
titre : install
layout: default
techno: linux
---

# list of tool

```bash
cat tools.list

    netcat
    ncat
    nmap
    wireshark
    tcpdump
    hashcat
    ffuf
    gobuster
    hydra
    zaproxy
    proxychains
    sqlmap
```

if we want to install all the tools of this list

```bash
sudo apt install $(cat tools.list | tr "\n" " ") -y
```


## restore a system

save /etc and /home in another partition.

```bash
dpkg --get-selections > pkg.list
```
list of all installed software, to restore system at anytime