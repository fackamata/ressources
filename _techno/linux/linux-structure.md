---
titre : linux structure
layout: default
techno: linux
---

# Linux Structure

## Philosophy

Linux follows five core principles:

| Principle | Description |
|-----------|-------------|
| Everything is a file | All configuration files for the various services running on the Linux operating system are stored in one or more text files.|
| Small, single-purpose programs | Linux offers many different tools that we will work with, which can be combined to work together.|
|Ability to chain programs together to perform complex tasks | The integration and combination of different tools enable us to carry out many large and complex tasks, such as processing or filtering specific data results.|
|Avoid captive user interfaces 	| Linux is designed to work mainly with the shell (or terminal), which gives the user greater control over the operating system.|
|Configuration data stored in a text file |	An example of such a file is the /etc/passwd file, which stores all users registered on the system.|

## components

### Bootloader 
	A piece of code that runs to guide the booting process to start the operating system. Parrot Linux uses the GRUB Bootloader.

### OS Kernel 
	The kernel is the main component of an operating system. It manages the resources for I/O devices the system at the hardware level.

### Daemons 	
    Background services are called "daemons" in Linux. Their purpose is to ensure that key functions such as scheduling, printing, and multimedia are working correctly. These small programs load after we booted or log into the computer.

### OS Shell 	
    The operating system shell or the command language interpreter (also known as the command line) is the interface between the OS and the user. This interface allows the user to tell the OS what to do. The most commonly used shells are Bash, Tcsh/Csh, Ksh, Zsh, and Fish.

### Graphics server 	
    This provides a graphical sub-system (server) called "X" or "X-server" that allows graphical programs to run locally or remotely on the X-windowing system.

### Window Manager 	
    Also known as a graphical user interface (GUI). There are many options, including GNOME, KDE, MATE, Unity, and Cinnamon. A desktop environment usually has several applications, including file and web browsers. These allow the user to access and manage the essential and frequently accessed features and services of an operating system.

### Utilities 
	Applications or utilities are programs that perform particular functions for the user or another program.



## Linux Architecture

The Linux operating system can be broken down into layers:

|Layer| 	Description|
|-----|----------------|
|Hardware |	Peripheral devices such as the system's RAM, hard drive, CPU, and others.|
|Kernel |	The core of the Linux operating system whose function is to virtualize and control common computer hardware resources like CPU, allocated memory, accessed data, and others. The kernel gives each process its own virtual resources and prevents/mitigates conflicts between different processes.|
|Shell |	A command-line interface (CLI), also known as a shell that a user can enter commands into to execute the kernel's functions.|
|System Utility| 	Makes available to the user all of the operating system's functionality.|

## File System Hierarchy

The Linux operating system is structured in a tree-like hierarchy and is documented in the Filesystem Hierarchy Standard (FHS). Linux is structured with the following standard top-level directories:


### / 	
    The top-level directory is the root filesystem and contains all of the files required to boot the operating system before other filesystems are mounted as well as the files required to boot the other filesystems. After boot, all of the other filesystems are mounted at standard mount points as subdirectories of the root.

### /bin
 	Contains essential command binaries.
### /boot
 	Consists of the static bootloader, kernel executable, and files required to boot the Linux OS.
### /dev
 	Contains device files to facilitate access to every hardware device attached to the system.
### /etc
 	Local system configuration files. Configuration files for installed applications may be saved here as well.
### /home
 	Each user on the system has a subdirectory here for storage.
### /lib
 	Shared library files that are required for system boot.
### /media
 	External removable media devices such as USB drives are mounted here.
### /mnt
 	Temporary mount point for regular filesystems.
### /opt
 	Optional files such as third-party tools can be saved here.
### /root
 	The home directory for the root user.
### /sbin
 	This directory contains executables used for system administration (binary system files).
### /tmp
 	The operating system and many programs use this directory to store temporary files. This directory is generally cleared upon system boot and may be deleted at other times without any warning.
### /usr
 	Contains executables, libraries, man files, etc.
### /var
 	This directory contains variable data files such as log files, email in-boxes, web application related files, cron files, and more.

## prompt description

The bash prompt is easy to understand and, by default, includes information such as the user, hostname, and current working directory. The format can look something like this:
```bash
<username>@<hostname><current working directory>$
```

The home directory for a user is marked with a tilde <~> and is the default folder when we log in.

```bash
<username>@<hostname>[~]$
```

The dollar sign, in this case, stands for a user. As soon as we log in as root, the character changes to a hash <#> and looks like this:

```bash
root@htb[/htb]#
```


## System Information

Since we will be working with many different Linux systems, we need to learn the structure and the information about the system, its processes, network configurations, users, directories, user settings, and the corresponding parameters. Here is a list of the necessary tools that will help us get the above information. Most of them are installed by default.


### whoami
 	Displays current username.
### id
 	Returns users identity

    The id command expands on the whoami command and prints out our effective group membership and IDs. This can be of interest to penetration testers looking to see what access a user may have and sysadmins looking to audit account permissions and group membership. In this output, the hackthebox group is of interest because it is non-standard, the adm group means that the user can read log files in /var/log and could potentially gain access to sensitive information, membership in the sudo group is of particular interest as this means our user can run some or all commands as the all-powerful root user. Sudo rights could help us escalate privileges or could be a sign to a sysadmin that they may need to audit permissions and group memberships to remove any access that is not required for a given user to carry out their day-to-day tasks.

```bash
cry0l1t3@htb[/htb]$ id

uid=1000(cry0l1t3) gid=1000(cry0l1t3) groups=1000(cry0l1t3),1337(hackthebox),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lpadmin),126(sambashare)
```
### hostname
 	Sets or prints the name of current host system.
### uname 	
Prints basic information about the operating system name and system hardware.

#### Uname to Obtain Kernel Release

Suppose we want to print out the kernel release to search for potential kernel exploits quickly. We can type uname -r to obtain this information.

Uname to Obtain Kernel Release
```bash
cry0l1t3@htb[/htb]$ uname -r

4.15.0-99-generic
```

With this info, we could go and search for "4.15.0-99-generic exploit," and the first result immediately appears useful to us.

### pwd
 	Returns working directory name.
### ifconfig
 	The ifconfig utility is used to assign or to view an address to a network interface and/or configure network interface parameters.
### ip
 	Ip is a utility to show or manipulate routing, network devices, interfaces and tunnels.
### netstat
 	Shows network status.
### ss
 	Another utility to investigate sockets.
### ps
 	Shows process status.
### who
 	Displays who is logged in.
### env
 	Prints environment or sets and executes command.
### lsblk
 	Lists block devices.
### lsusb
 	Lists USB devices
### lsof
 	Lists opened files.
### lspci
 	Lists PCI devices.


### Logging In via SSH

Secure Shell (SSH) refers to a protocol that allows clients to access and execute commands or actions on remote computers. On Linux-based hosts and servers running or another Unix-like operating system, SSH is one of the permanently installed standard tools and is the preferred choice for many administrators to configure and maintain a computer through remote access. It is an older and very proven protocol that does not require or offer a graphical user interface (GUI). For this reason, it works very efficiently and occupies very few resources. We use this type of connection in the following sections and in most of the other modules to offer the possibility to try out the learned commands and actions in a safe environment. We can connect to our targets with the following command:

#### SSH Login
```bash
furybar@htb[/htb]$ ssh [username]@[IP address]
```


## User Management

User management is an essential part of Linux administration. Sometimes we need to create new users or add other users to specific groups. Another possibility is to execute commands as a different user. After all, it is not too rare that users of only one specific group have the permissions to view or edit specific files or directories. This, in turn, allows us to collect more information locally on the machine, which can be very important. Let us take a look at the following example of how to execute code as a different user.

## package Management

There are different package management programs that we can use for this. Here is a list of examples of such programs:

| **Command** | **Description** |
| --------------|-------------------|
| `dpkg` | Install, remove and configure Debian-based packages. | 
| `apt` | High-level package management command-line utility. | 
| `aptitude` | Alternative to `apt`. | 
| `snap` | Install, remove and configure snap packages. |
| `gem` | Standard package manager for Ruby. | 
| `pip` | Standard package manager for Python. | 
| `git` | Revision control system command-line utility. | 


### Advanced Package Manager (APT)

Debian-based Linux distributions use the `APT` package manager. A package is an archive file containing multiple ".deb" files. The `dpkg` utility is used to install programs from the associated ".deb" file. `APT` makes updating and installing programs easier because many programs have dependencies. When installing a program from a standalone ".deb" file, we may run into dependency issues and need to download and install one or multiple additional packages. `APT` makes this easier and more efficient by packaging together all of the dependencies needed to install a program.

Each Linux distribution uses software repositories that are updated often. When we update a program or install a new one, the system queries these repositories for the desired package. Repositories can be labeled as stable, testing, or unstable. Most Linux distributions utilize the most stable or "main" repository. This can be checked by viewing the contents of the /etc/apt/sources.list file.

`APT` uses a database called the `APT` cache. This is used to provide information about packages installed on our system offline. We can search the `APT` cache, for example, to find all `Impacket` related packages.

```bash
$ apt-cache search impacket

python3-pcapy - Python interface to the libpcap packet capture library (Python 3)
polenum - Extracts the password policy from a Windows system
python3-impacket - Python3 module to easily build and dissect network protocols
```

We can then view additional information about a package.

```bash
$ apt-cache show python3-impacket

Package: python3-impacket
Architecture: all
Version: 0.9.20-5
Priority: optional
Section: universe/python
Source: impacket
Origin: Ubuntu
...
```

We can also list all installed packages.
```bash
$ apt list --installed
```


### DPKG

We can also download the programs and tools from the repositories separately. In this example, we download 'strace' for Ubuntu 18.04 LTS.
```bash
 wget http://archive.ubuntu.com/ubuntu/pool/main/s/strace/strace_4.21-1ubuntu1_amd64.deb
```

Furthermore, now we can use both apt and dpkg to install the package. Since we have already worked with apt, we will turn to dpkg in the next example.
```bash
 sudo dpkg -i strace_4.21-1ubuntu1_amd64.deb
```

With this, we have already installed the tool and can test if it works properly.
```bash
stach -h
```

### Service and Process Management

In general, there are two types of services: internal, the relevant services that are required at system startup, which for example, perform hardware-related tasks, and services that are installed by the user, which usually include all server services. Such services run in the background without any user interaction. These are also called `daemons` and are identified by the letter `'d'` at the end of the program name, for example, `sshd` or `systemd`.

Most Linux distributions have now switched to `systemd`. This daemon is an `Init process` started first and thus has the process ID (PID) 1. This daemon monitors and takes care of the orderly starting and stopping of other services. All processes have an assigned PID that can be viewed under `/proc/` with the corresponding number. Such a process can have a parent process ID (PPID), known as the child process.

#### Systemctl

```bash
systemctl start ssh
```
After we have started the service, we can now check if it runs without errors.

```bash
systemctl status ssh
```

To add OpenSSH to the SysV script to tell the system to run this service after startup, we can link it with the following command:

```bash
systemctl enable ssh
```

Once we reboot the system, the OpenSSH server will automatically run. We can check this with a tool called `ps`.

```bash
ps -aux | grep ssh
```

We can also use `systemctl` to list all services.

```bash
 systemctl list-units --type=service
```

It is quite possible that the services do not start due to an error. To see the problem, we can use the tool `journalctl` to view the logs.

```bash
journalctl -u ssh.service --no-pager
```

#### Kill a Process

A process can be in the following states:

- Running
- Waiting (waiting for an event or system resource)
- Stopped
- Zombie (stopped but still has an entry in the process table).

Processes can be controlled using `kill`, `pkill`, `pgrep`, and `killall`. To interact with a process, we must send a signal to it. We can view all signals with the following command:

```bash
kill -l
```

The most commonly used are:

| **Signal** | **Description** |
| --------------|-------------------|
| `1` | `SIGHUP` - This is sent to a process when the terminal that controls it is closed. | 
| `2` | `SIGINT` - Sent when a user presses `[Ctrl] + C` in the controlling terminal to interrupt a process. | 
| `3` |  `SIGQUIT` - Sent when a user presses `[Ctrl] + D` to quit. | 
| `9` | `SIGKILL` - Immediately kill a process with no clean-up operations. | 
| `15` | `SIGTERM` - Program termination. | 
| `19` | `SIGSTOP` - Stop the program. It cannot be handled anymore. | 
| `20` | `SIGTSTP` - Sent when a user presses `[Ctrl] + Z` to request for a service to suspend. The user can handle it afterward. | 

For example, if a program were to freeze, we could force to kill it with the following command:

```bash
kill 9 <PID>
```

#### Background a Process

Sometimes it will be necessary to put the scan or process we just started in the background to continue using the current session to interact with the system or start other processes. As we have already seen, we can do this with the shortcut `[Ctrl + Z]`. As mentioned above, we send the `SIGTSTP` signal to the kernel, which suspends the process.

```bash
ping -c 10 www.google.com

vim tmpfile
	[Ctrl + Z]
	[2]+  Stopped                 vim tmpfile
```

Now all background processes can be displayed with the following command.
```bash
jobs

	[1]+  Stopped                 ping -c 10 www.hackthebox.eu
	[2]+  Stopped                 vim tmpfile
```

The `[Ctrl] + Z` shortcut suspends the processes, and they will not be executed further. To keep it running in the background, we have to enter the command `bg` to put the process in the background.
```bash
$ bg

$ 
--- www.google.com ping statistics ---
10 packets transmitted, 0 received, 100% packet loss, time 113482ms

[ENTER]
[1]+  Exit 1                  ping -c 10 www.google.com

```

Another option is to automatically set the process with an AND sign (`&`) at the end of the command.
```bash
$ ping -c 10 www.google.com &

[1] 10825
PING www.google.com (8.8.1.1) 56(84) bytes of data.
```

Once the process finishes, we will see the results.

```bash
$ 

--- www.google.com ping statistics ---
10 packets transmitted, 0 received, 100% packet loss, time 9210ms

[ENTER]
[1]+  Exit 1                  ping -c 10 www.google.com
```


#### Foreground a Process

After that, we can use the `jobs` command to list all background processes. Backgrounded processes do not require user interaction, and we can use the same shell session without waiting until the process finishes first. Once the scan or process finishes its work, we will get notified by the terminal that the process is finished.

```bash
$ jobs

[1]+  Running                 ping -c 10 www.google.com &
```

If we want to get the background process into the foreground and interact with it again, we can use the fg <ID> command.
```bash
$ fg 1
ping -c 10 www.google.com

--- www.google.com ping statistics ---
10 packets transmitted, 0 received, 100% packet loss, time 9206ms
```

### Execute Multiple Commands

There are three possibilities to run several commands, one after the other. These are separated by:

- Semicolon (`;`)
- Double ampersand characters (`&&`)
- Pipes (`|`)

The difference between them lies in the previous processes' treatment and depends on whether the previous process was completed successfully or with errors. The semicolon (;) is a command separator and executes the commands by ignoring previous commands' results and errors.

```bash
$ echo '1'; echo '2'; echo '3'
```

For example, if we execute the same command but replace it in second place, the command ls with a file that does not exist, we get an error, and the third command will be executed nevertheless.

```bash
echo '1'; ls MISSING_FILE; echo '3'

	1
	ls: cannot access 'MISSING_FILE': No such file or directory
	3
```

However, it looks different if we use the double AND characters (`&&`) to run the commands one after the other. If there is an error in one of the commands, the following ones will not be executed anymore, and the whole process will be stopped.

Pipes (|) depend not only on the correct and error-free operation of the previous processes but also on the previous processes' results.

## Working with Web Services

Another essential component is the communication with the web servers. There are many different ways to set up web servers on Linux operating systems. One of the most used and widespread web servers, besides IIS and Nginx, is Apache. For an Apache web server, we can use appropriate modules, which can encrypt the communication between browser and web server (mod_ssl), use as a proxy server (mod_proxy), or perform complex manipulations of HTTP header data (mod_headers) and URLs (mod_rewrite).

Apache offers the possibility to create web pages dynamically using server-side scripting languages. Commonly used scripting languages are PHP, Perl, or Ruby. Other languages are Python, JavaScript, Lua, and .NET, which can be used for this. We can install the Apache webserver with the following command.

```bash
apt install apache2 -y
```

After we have started it, we can navigate using our browser to the default page (http://localhost).

This is the default page after installation and serves to confirm that the webserver is working correctly.

### CURL

`cURL` is a tool that allows us to transfer files from the shell over protocols like `HTTP`, `HTTPS`, `FTP`, `SFTP`, `FTPS`, or `SCP`. This tool gives us the possibility to control and test websites remotely. Besides the remote servers' content, we can also view individual requests to look at the client's and server's communication. Usually, `cURL` is already installed on most Linux systems. This is another critical reason to familiarize ourselves with this tool, as it can make some processes much easier later on.

```bash
curl http://localhost
```

In the title tag, we can see that it is the same text as from our browser. This allows us to inspect the source code of the website and get information from it. Nevertheless, we will come back to this in another module.

## Wget

An alternative to curl is the tool `wget`. With this tool, we can download files from FTP or HTTP servers directly from the terminal and serves as a good download manager. If we use wget in the same way, the difference to curl is that the website content is downloaded and stored locally, as shown in the following example.

```bash
wget http://localhost
```

## Python 3

Another option that is often used when it comes to data transfer is the use of Python 3. In this case, the web server's root directory is where the command is executed to start the server. For this example, we are in a directory where WordPress is installed and contains a "readme.html." Now, let us start the Python 3 web server and see if we can access it using the browser.

```bash
python3 -m http.server
```

We can see what requests were made if we now look at our Python 3 web server's events.
```bash
$ python3 -m http.server

Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
127.0.0.1 - - [15/May/2020 17:56:29] "GET /readme.html HTTP/1.1" 200 -
127.0.0.1 - - [15/May/2020 17:56:29] "GET /wp-admin/css/install.css?ver=20100228 HTTP/1.1" 200 -
127.0.0.1 - - [15/May/2020 17:56:29] "GET /wp-admin/images/wordpress-logo.png HTTP/1.1" 200 -
127.0.0.1 - - [15/May/2020 17:56:29] "GET /wp-admin/images/wordpress-logo.svg?ver=20131107 HTTP/1.1" 200 -
```

## Working with Files and Directories

### Create a Directory

```bash
mkdir Storage
```

We may want to have specific directories in the directory, and it would be very time-consuming to create this command for every single directory. The command `mkdir` has an option marked `-p` to add parent directories.

```bash
mkdir -p Storage/local/user/documents
```

We can look at the whole structure after creating the parent directories with the tool tree.

```bash
$ tree .

.
├── info.txt
└── Storage
    └── local
        └── user
            └── documents

4 directories, 1 file
```

### Mouve and rename

With the command `mv`, we can move and also rename files and directories. The syntax for this looks like this:

```bash
mv <file/directory> <renamed file/directory>
```


## Editing Files

There are several ways to edit a file. One of the most common text editors for this is `Vi` and `Vim`. More rarely, there is the `Nano` editor. We will first deal with the `Nano` editor here, as it is a bit easier to understand. We can create a new file directly with the Nano editor by specifying the file's name directly as the first parameter. In this case, we create a new file named notes.txt.

```bash
nano notes.txt
```

Now we should see a so-called "`pager`" open, and we can freely enter or insert any text. 

In `nano` the caret (^) stands for our "[CTRL]" key. For example, if we press `[CTRL + W]`, a "Search:" line appears at the bottom of the editor, where we can enter the word or words we are looking for. If we now search for the word "we" and press `[ENTER]`, the cursor will move to the first word that matches.

To jump to the next match with the cursor, we press `[CTRL + W]` again and confirm with `[ENTER]` without any additional information.

## VIM

`Vim` is an open-source editor for all kinds of ASCII text, just like Nano. It is an improved clone of the previous Vi. It is an extremely powerful editor that focuses on the essentials, namely editing text. For tasks that go beyond that, Vim provides an interface to external programs, such as `grep`, `awk`, `sed`, etc., which can handle their specific tasks much better than a corresponding function directly implemented in an editor usually can. This makes the editor small and compact, fast, powerful, flexible, and less error-prone.

Vim follows the Unix principle here: many small specialized programs that are well tested and proven, when combined and communicating with each other, resulting in a flexible and powerful system.

