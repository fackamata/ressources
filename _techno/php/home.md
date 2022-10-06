---
titre : home
layout: default
techno: php
---

## somme command

### ownership and permission

```bash
sudo chown -R www-data:www-data /var/www/html
```

to allow the group www-data to take ownership of folder.

```bash
sudo adduser username www-data
```
to add your user to the group www-data

```bash
sudo chmod -R 775 /var/www/html/
```
To now change file permissions to 775 so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can write and can execute. (O)thers can read, can't write and can execute.


### PHP local server

```bash
php -S localhost:8080
```

### Vardump

dump information about one or more variables.

<?php var_dump(var1, var2, ...); ?>


### If elseif else

```php
<?php
$a = 10;
if ($a == 10) {
echo "The value of a is equal to 10";
} elseif ($a == 15 ){
echo "The value of a is equal to 15";
} else {
echo " a is not equal to 10 or 15 ";
}
?>
```

