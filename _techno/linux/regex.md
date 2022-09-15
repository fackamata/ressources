---
titre : regex
layout: default
techno: linux
---


# regex

## caret - ^

### stand for
^ -> start with

### exemple

```bash
grep '^ad' name.txt
    adam
    adnan
```

return only what start with ad

^ are place before the search pattern

## dollar - $

### stand for
$ -> finish with


### exemple

```bash
grep 'sam$' name.txt
    basam
```

return only what finish with sam

$ are place at the end of the search pattern


## dot - .

### stand for
. -> replace a character

### exemple

```bash
grep 'c.r' name.txt
    caroline
    corentin
    corine
    cyrill
```
replace any character


to match only word we use -w (word)
```bash
grep -w 'c.r' word.txt
    car
    cor
    cir
```

if we are looking for an actual dot :
```bash
grep '\.' /etc/login.defs
```
if we escape the dot, it'll considered as a simple dot.


## asterics - *

### stand for
* -> match the previous element 0 or more times

### exemple

```bash
grep 'let*' name.txt
    le
    let
    lett
    lettt
```

we can combine with dot

```bash
grep -r '/.*/' /etc/
    /usr/man/
    /usr/share/
    /path/to/
    /usr/bin/
```

## plus - +

### stand for
+ -> match the previous element 1 or more times

### escaping
the plus symbole needs to be escape

we can use -E option for extended-regexp
it interpret patterns as extende regular expressions

```bash
grep -E 'a+'
```

or we can use egrep
```bash
egrep 'a+'
```

### exemple

simmilar to * but with a minimum of one occurence 

```bash
grep 'let+' name.txt
    let
    lett
    lettt
```

we can combine with dot

```bash
grep -r '/.*/' /etc/
    /usr/man/
    /usr/share/
    /path/to/
    /usr/bin/
```


## braces - {}

### stand for
{} -> previous element can exist 'this many' times

### exemple

```bash
grep '0{3,}' name.txt
    000e
    00003
```

this expression will match 3 zeros at least

```bash
grep '10{,3}' name.txt
    1
    10
    1000
```

this expression will match 1 follow by at most 3 zeros (can be none)

```bash
egrep '10{3}' name.txt
    1000
    1000s
    10008
```

this expression will match 1 follow 3 zeros 

```bash
egrep '10{3,5}' name.txt
    1000
    100000
    100000e
```

this expression will match 1 follow 3 zeros and maximum 5 zeros

we can combine with dot

```bash
egrep -r '/.*/' /etc/
    /usr/man/
    /usr/share/
    /path/to/
    /usr/bin/
```

## question mark - ?

### stand for
? -> make the previous element optional
exist 0 or 1 time

### example
```bash
egrep -r 'disabled?' /etc/
    disable
    disabled
    disables
```
in this case the d is optional.

## vertical pipe - |

### stand for
| -> match one thing or the other

### example
```bash
egrep -r 'disabled|enabled' /etc/
    enabled
    disabled
```
will match all occurence of disabled or enabled

```bash
egrep -r 'disabled?|enabled?' /etc/
    enabled
    enable
    disabled
    disable
```
will match all occurence of disable. or enable.

## brackets - []

### stand for
[] -> ranges or sets

range : [a-z] all the letter between a to z [0-9] [a-zA-Z0-9]
set : [abz954] only the letter specified in the set

### example
```bash
egrep -r 'c[au]t' /etc/
    cat
    cut
```
will match cat or cut

```bash
egrep -r '/dev/[a-z]*[0-9]?' /etc/
    /dev/sda
    /dev/sda1
    /dev/sda2
    /dev/sdd
    /dev/twa0
```

## parentheses - ()

### stand for
() -> subexpressions  

### example
```bash
egrep -r '/dev/( ([a-z]|[A-Z])* [0-9]? )' /etc/
    /dev/scanner
    /dev/ttyS0
    /dev/ttyS0p0
    /dev/term
```

## caret in brakets - [^]

### stand for
[^] -> negated ranges or sets  


### example
```bash
egrep -r 'http[^s]' /etc/
```
will match http but not https

```bash
egrep -r '[^a-z]' /etc/
```
will match only uppercase caractere
