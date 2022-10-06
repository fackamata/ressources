---
titre : home
layout: default
techno: linux
---

## Expressions

| Expression        | Example             | Description
| ---               | ---                 | ---
| `!!`              | `sudo !!`           | Last command (`sudo !!`)
| ---               | ---                 | ---
| `!*`              | `vim !*`            | Last command's parameters (`vim !*`)
| `!^`              |                     | Last command's first parameter
| `!$`              |                     | Last command's last parameter
| ---               | ---                 | ---
| `!?ls` `<tab>`    | `sudo !?mv` `<tab>` | Command and params of last `ls` command
| `!?ls?:*` `<tab>` |                     | Params of last `ls` command
| ---               | ---                 | ---
| `*(m0)`           | `rm *(m0)`          | Last modified today
| `*(m-4)`          |                     | Last modified <4 days ago



### Process Substitution

| Expression        | Example                                               | Description
| ---               | ---                                                   | ---
| `<(COMMAND)`      | `grep "needle" <(curl "https://haystack.io")`         | Replace argument with _named pipe/FIFO_ (read-only) with command output
| `=(COMMAND)`      | `vim =(curl "https://haystack.io")`                   | Replace argument with _file_ (writable) containing command output


### Also see

- [Bash cheatsheet](./bash)

Zsh is mostly compatible with Bash, so most everything in Bash's cheatsheet also applies.

## some command

neofetch - get info on computer
cpufetch - get info on cpu
bpytop - python version of top, can be personalise
ascii-image-converter - convert image to ascii art, look option
speedtest-cli - quick internet speed test
updatedb - update a file name database
locate - list files in databases that match a pattern
uname -a 	Shows the current kernel and OS information
apropos     short version of help

## cut

```bash
cut -d ' ' -f 4
```
-d for delimiter, here ' '
-f for field, here the 4th one

## tr

```bash
tr -d ':' 
```
-d for delimiter, here ':'

it's gonna remove ':'


## access another computer from file-manager

on the server side install
```bash
sudo apt install openssh-server
```

on the client side install if ssh is not allready installed
```bash
sudo apt install openssh-client
```

in the file-manager, go to 'Other locations'

in connect to server : sftp://192.168.1.?

## access another computer from terminal

by ssh
```bash
ssh user@192.168.1.10
```

by sftp
```bash
sftp user@192.168.1.10
```

## decode

to decode on base64
```bash
echo <to decode> | base64 -d
```

to decode hex to ascii
```bash
echo 0x70 | xxd -r -p
```

to decode hex to decimal
```bash
printf "%d\n" 0x3D
or
echo "ibase=16; $h"| bc
or
echo $((16#ff))
```

to convert number (ex : 42) to binary
```bash
echo "obase=2;42" | bc
```

to decode ascii to text
```bash
echo 100 | awk '{printf("%c",$1)}'
```

## hash

to hash in md5 (ex Chinatown)
```bash
printf '%s' "Chinatown" | md5sum
```

## get info on file

to read, write and edit meta information
```
exiftool file.jpg
```