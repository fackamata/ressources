---
titre : bash
layout: default
techno: linux
---

# bash

## script

### special character

#### $?
error code of the last command

#### $@
all the argument of a script 

#### $1 ...
first argument of a script

$2 for the second
$3 for the third

#### >
```bash
echo 'test' > new.txt
```
write test in the file new.txt, create the file if it doesn't exit. Erase all the content all the file.

#### >>
```bash
echo 'text suite' >> new.txt
```

append text suite to our file new.txt. Erase nothing, just append at the end of file.

#### <
```bash
grep test < new.txt
```
new.txt is send to grep as an input.

equivalent to `new.txt | grep test`

#### <<
```bash
grep test << EOF
```

similar to < but instead of a file, we are writing in therminal until EOF


## web exploitation

### get header

```bash
curl -I www.website.com
```

### get cookie

```bash
curl URL --cookie-jar cookie_file
```


### exectutable
```bash
chmod +x myScript
```

### global
we can make a script executable globally with a link :
```bash
sudo ln myScript.any /usr/local/bin/myScript
```

## some command

### re read a file
```bash
. .bashrc
```
re read the bashrc file, if we added a new alias

```bash
set | less
```
print out the entire environement

## ip address
get ip address from alias

to get the ip address
```bash
ifconfig | grep broadcast | awk '{print $2}'
```

create an alias to stock it
```bash
alias myip="echo $(ifconfig | grep broadcast | awk '{print $2}'"
```

now, we get the ip address from the alias myip
```bash
$ ip
192.168.1.1
```

## alias
it's better to stock them in ~/.bash_aliases

Then we put alias in this file and run 
```bash
source ~/.bashrc
```
