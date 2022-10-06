---
titre : changing version
layout: default
techno: php
---


## install other version of php
```bash
sudo apt install php7.4
```

## list of version available
```bash
sudo update-alternatives --list php
```

## choose version in available's one
```bash
sudo update-alternatives --config php
```

## desactivate php version
```bash
sudo a2dismod php7.4
```

## activate php version
```bash
sudo a2enmod php8.1
```
