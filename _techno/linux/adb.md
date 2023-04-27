---
titre : adb
layout: default
techno: linux
---

## display all devices 

```bash
adb devices
```

## bug report

if only one device connected :
```bash
adb bugreport ~/Desktop/report
```

if more than one connected we need the -s option to define the device. Find the devices with `adb devices`

```bash
adb -s S25D28D5F8E bugreport
```

## find bug report

```bash
adb shell ls /bugreports/bugreport/
```

and then we can pull the report desired

```bash
adb pull /bugreports/bugreport/dumpstate-XXXX-XX.zip
```