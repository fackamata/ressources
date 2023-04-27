---
titre : nmcli
layout: default
techno: linux
---


# configuration

## list network info

```bash
nmcli dev status
```

get a  list of your network devices along with their type, state, and network connection info.


## check if wifi is enable

```bash
nmcli radio wifi
```

## enable wifi

```bash
nmcli radio wifi on
```

## identify wifi point

```bash
nmcli dev wifi list
```

## connect to wifi with nmcli

```bash
sudo nmcli dev wifi connect network-ssid
```

### specify password

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
```

if you don't want to write out your password on screen use the --ask option

## view all saved connection

```bash
nmcli con show
```

## connect and disconnect network

```bash
nmcli con down ssid/uuid    # to disconnect
nmcli con up ssid/uuid      # to connect
```

