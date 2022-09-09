---
titre : command line
layout: default
techno: mysql
page.url: command-line
---

## access

```
mysql -u root -p
```

open mysql for user (-u) root and ask for password.

## show all databases

```bash
mysql> SHOW DATABASES;
```

## create database

```bash
mysql> CREATE DATABASE post;
```

## use database

```bash
mysql> USE api;
```

### see a table

```bash
mysql> DESCRIBE product;
mysql> SHOW FIELDS FROM table product;
```
product being a table of api schema


## create user

```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```

give user all privileges on all databases
```sql
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
FLUSH PRIVILEGES;
``` 