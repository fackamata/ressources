---
titre : cron
layout: default
techno: linux
---


## install

```bash
sudo apt install cron
```

## authorized user

to use it, the user need to be in the cron group

### define user permission

we can define user permission in `/etc/cron.allow` and `/etc/cron.deny` files.

## how to use

### list of action

```bash
crontab -l
```

### delete all action

```bash
crontab -r
```

### edit actions

```bash
crontab -e
```

open crontab in default text editor

## crontab syntaxe

```bash
 # Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  *  user command to be executed
```

### example

```bash
mm hh jj MMM JJJ [user] tâche > log
```

