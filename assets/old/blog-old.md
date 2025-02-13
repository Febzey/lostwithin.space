
# Unveiling Manitoba's Educational Tech Ensemble: Behind the Digital Curtain

Ever wondered about the underlying technology and network infrastructure that seamlessly keeps Manitoba's educational system running? Let's take a behind-the-scenes look at the tech ensemble orchestrating the province's educational landscape.
\
\
My exploration kicked off by browsing through the ESD's (Evergreen School Division) website, I initially was only curious about who operates and maintains their front end website, I quickly seen it was a company named "schoolbundle.com", not too interesting but took note of that anyways. From there I dug deeper, looking into various domains associated with the school system. 
\
\
Using network scanning tools, I identified IP addresses and probed open ports to gather information about the servers and services in use. Nmap and telnet were handy for this. As I uncovered more details, I explored the relationships between different domains and IPs, I quickly stumbled upon a directory cataloging every single server utilized by each school division in Manitoba. This directory, a compiled tool that systematically scans the entire internet at regular intervals, revelead a wealth of information about the technological infrastructure supporting the province's educational institutions. Through this resource, I gained insights into the specific servers, services and configurations employed across different school divisions. The data included details about IP addresses, open ports, and the technologies underlying the educational network. 
\
\
For instance, I found a VPN (Virtual Private Network) portal hosted under the IP 69.46.108.222, which I think should be accessed through secure.esd.ca (216.73.73.172). Although direct access was restricted, I established a connection to the VPN portal using an IP address that had relation to the service. Further digging revealed the involvement of companies like [Merlin](https://www.merlin.ca), [Sylogist](https://www.Sylogist.com), [SchoolBundle](https://www.SchoolBundle.ca), [PerfSONAR](https://www.perfsonar.net),  and [Q9](https://ca.linkedin.com/company/q9-networks) in managing various aspects of the educational tech infrastructure, along with many different software used. The process involved a mix of website exploration, network scanning, and connecting the dots between different online elements.


## Merlin.ca
At the heart of it all is Merlin, the conductor of Manitoba's educational infrastructure. A branch of the Manitoba Government. They provide direction and management in the educational use of networks, acting as a broker of services. Merlin was established in 1995 as special operating agency with the Department of Education. It was formed as a facilitating body to coordinate the delivery of technology services to the education community across Manitoba. Merlin currently operates under the Department of Central Services. Merlin uses a variaty of partners and services to get their job done, which we talk about below.


## Azure Front Door: Emails and Media
During my bordem I found multiple domains and IPs pointing towards some Azure Edge and Outlook domains, soon finding out the Student and Staff use seperate subdomains "stu." and "fs.". Both domains lead to a protective gateway intricately linked with 'Microsoft Exhange SMTP." (Secure Message Transfer Protocol). This frontline service meticulously screens incoming emails and media for security, including spam filtering and malware scans before seamlessly transmitting them to the core infrastructure.
\
\
I uncovered various domains and IPs associated with email and media services, including '0365.,' 'officewebapps.,' 'autodiscover.,' 'mail.,' and 'media.' Notably, 'sitegovern.' appears to be an administrative access route. While some domains are not directly accessible from the external internet, their visibility is maintained through DNS records, hinting at potential proxy setups. This suggests these domains might be intended for use within a Virtual Private Network (VPN) or accessible via a single IP address, enhancing security and controlled access.


## SyLogist.com's VPN Service
So earlier I mentioned the VPN and how I found the VPN Portal to one of the School Divisions Private Networks, well first off what even is a "VPN"? It stands for Virtual Private Network, and the "VPN Portal" is essentially a door to that network. Each school division having its own network ensures a dedicated and secure connection for internal communication and access to confidential resources, safeguarding sensitive educational information and maintaining privacy.
\
\
Syslogist, the company associated with the VPN service, seems to play a significant role in ensuring the security and functionality of these private networks. Their involvement may extend beyond just providing the VPN Portal; they could be responsible for the infrastructure and backend support that makes the VPN service operational. This could include aspects like server management, security protocols and network configurations to guarentee a seamless and secure connection for users.
\
\
The discovery of Sylogist's IP adresses in the DNS and IP lookups highlights their direct involvement in the VPN infrastructure. While merlin may act as a central coordinator, partnering with specialized companies like Sylogist ensures that the services are profesionally managed and maintained. 


## Q9.net (Owned by Bell) - IT Management
I seen that the company Q9 had some domains pointed to some IP's associated with the Private Network infrastructure for school divisions, Q9 being one of Canada's largest infrastructure service providers and being owned by BELL is no surprise that they would be involved. This presence indicates that Q9 Networks could potentially manage the servers infrastructure supporting the Private Networks and also providing IT services remotely, It is actually not 100% clear on the full inolvement of Q9 and which services they maintain for this entire operation.


## Perfsonar, network monitoring and educational research
So during all of this I came across what seems to be a centralized server hosting a Perfsonar instance, a very powerful network monitoring tool which I believe is monitoring traffic from each school division. after doing some searching I found a none authenticated user panel giving insights into the network, the server hosting the Perfsonar instance exhibits a robust 10 Gb/s speed, indicating a high capacity infrastructure. 
\
\
This tool offers valuable insights into various network parameters, including network health, packet transmission, and error metrics. Notably, our investigation revealed that the server operating Perfsonar is a powerful server; PowerEdge R430 manufactured by Dell, showcasing impressive computing capabilities. It appears to runs on the AlmaLinux 9.3 operating system.
\
\
Perfsonar is a crucial tool for advanced network capabilities in educational research. After finding a comprehensive directory of public Perfsonar instances, complete with a graphical map, it became clear that this tool is widely used in the USA and Europe. However, its presence in Canada is more localized, with only a handful of instances identified in the Yukon, Manitoba, and various parts of British Columbia. Perfsonar really is a comprehensive and large tool, I can't really begin to explain the entirety of its use case and how it's beneficial for research all in this blog, read more at their website [Merlin](https://www.merlin.ca).


## GeoFeed And Allocated IP Addresses
In our pursuit of understanding the intricacies of Manitoba's school network infrastructure, a pretty cool moment unfolded as I stumpled upon a subdomain "geofeed", thought this was neat so I explored it. Surprisingly, upon accessing this domain, an automatic download of a CVS file occured, adding an extra layer of mystery to our exploration. This unexpected file appears to be a key to unraveling the digital geography of IP ranges linked to numerious school divisions in the region. 
\
\
Looking further into this newly found geofeed file, I seen each IP block was associated with a Postal Code, Provice and City, in our case; Winnipeg, Manitoba since we are looking into Merlin which is Manitoba based, Doing a quick search of the Postal code it appears the main server infrastructure is hosted at, or right next to the University Of Manitoba.
\
\
So with this information in hand, we now have a list of every IP address Merlin has allocated to Manitoba's school divisions, offering a unique glimpse into the digital landscape that supports education across the province.

## Observium And Administrative Portals
Two portals where discovered that are intented to be used by administrators at Merlin, being a subdomain "Portal" which resolves to another subdomain "fba" which most likely stands for "Forms-Based Authentication" another subdomain found was "Observium", both subdomains lead to different user interfaces. Not to mention the VPN portal. All contain a login form for which seems to be an administrator dashboard of some type.
\
\
in trying to assess the security of these portals, it is noteworthy that both "Portal" and "Observium" employ text-based authentication, While text-based authentication is a conventional method, it could pose security concerns, especially without any additional layers such as two-factor authentication.

## Summary
So to summarize our jouney through Manitoba's educational network infrastructure, we uncovered a complex web of technologies and services, all working together to sustain the seamless functioning of Manitoba's educational system. Our exploration started with examining Evergreen School Division's web presence, swiftly leading us to the intricate network of servers and services utilized across the province.Through this we learnt at the core is Merlin, a key player that orchestrates collaborative efforts with companies like sylogist, Q9, Perfsonar and more. 
\
\
Further the discovery of Perfsonar provided insights into robust network monitoring capabilities, enhancing the overall health of Manitoba's educational network. The GeoFeed and allocated IP addresses added a geographical layer, connecting specific details to the University of Manitoba. However, our observation of Observium and  the Portals raised questions about the security practices, especially with the use of text-based authentication for administrator portals.
\
\
While our summary briefly touched up on some of the underlying services and technologies, there might be other services under the hood that we couldn't access without the right permissions. However, what we did uncover provides a solid overview. Each topic we discussed has the potential for much deeper exploration, and you'll likely find much more detailed documentation for the individual services if you decide to dive in. This overview is just the starting point, leaving plenty of room for those curious to dig deeper into Manitoba's education tech ensemble.
