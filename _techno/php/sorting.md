---
titre : sorting
layout: default
techno: php
---



## ascending order sorting - sort()
```php
$cars = array('Volvo', "BMW", 'Ford');
sort($cars);
```


## descending order sorting - rsort()
```php
$cars = array('Volvo', "BMW", 'Ford');
rsort($cars)
```


## ascending order in terms of value - asort()
```php
$age = array('Math'=>'22', 'Bob'=>'24', 'Luc'=>'26');
asort($age);
```

## ascending order according to key - ksort()
```php
$age = array('Math'=>'22', 'Bob'=>'24', 'Luc'=>'26');
ksort($age);
```

## descending value - arsort()
```php
$age = array('Math'=>'22', 'Bob'=>'24', 'Luc'=>'26');
arsort($age);
```

## descending key - krsort()
```php
$age = array('Math'=>'22', 'Bob'=>'24', 'Luc'=>'26');
arsort($age);
```

