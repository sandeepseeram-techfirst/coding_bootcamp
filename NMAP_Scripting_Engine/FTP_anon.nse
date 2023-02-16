$ nmap --script ftp-anon.nse 10.0.0.5

Starting Nmap 7.80 ( https://nmap.org ) at 2023-02-16 06:45 UTC
Nmap scan report for 10.0.0.5
Host is up (0.0000070s latency).
Not shown: 994 closed ports
PORT    STATE SERVICE
21/tcp  open  ftp
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| -rw-r--r--    5 0        0              16 Aug 13  2021 file1.txt
| -rw-r--r--    5 0        0              16 Aug 13  2021 file2.txt
| -rw-r--r--    5 0        0              29 Aug 13  2021 file3.txt
|_-rw-r--r--    5 0        0              26 Aug 13  2021 supersecretfile.txt
22/tcp  open  ssh
53/tcp  open  domain
80/tcp  open  http
139/tcp open  netbios-ssn
445/tcp open  microsoft-ds
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.43 seconds
$ 