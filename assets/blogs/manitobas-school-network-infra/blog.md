
# Peeking Behind the Curtain: A Casual Guide to Network Recon in Manitoba's Education System

Ever been curious about what goes on behind the scenes in a large network? I recently took a dive into the tech setup behind Manitoba’s educational institutions—and here’s a look at my process and findings.

&nbsp;
&nbsp;

## Where It All Started
I kicked things off by checking out the Evergreen School Division website. My first question was simple: who’s running their front end? Turns out it’s managed by a company (schoolbundle.com). Not a huge deal on its own, but it gave me a starting point.

&nbsp;
&nbsp;

## Tools
with basic network scanning tools like Nmap and Telnet, I began mapping out the network. I looked up IP addresses, scanned for open ports, and tried to piece together which services were up and running. What really caught my eye was a directory listing every server used by the various school divisions in Manitoba. This kind of resource shows you:

&nbsp;
&nbsp;

## IP addresses & Domains: How different services and servers connect.
Open Ports: A hint at what protocols or services are in play.
Tech Stack: Some clues about what software and hardware are being used.

&nbsp;
&nbsp;

## Key Findings
VPN Portals & Private Networks
One interesting find was a VPN portal (IP 69.46.108.222) that appears linked to secure.esd.ca (216.73.73.172). Even though direct access was blocked, it confirmed that each school division uses its own private network. The VPN setup is likely handled by a company called Sylogist—suggesting they’re not just providing the portal but also backing the whole secure connection process.

&nbsp;
&nbsp;

## The Role of “Merlin”
At the heart of the setup is something called Merlin. This appears to be a branch of the Manitoba Government coordinating network services for schools. Although details are a bit murky, Merlin seems to act as the central hub, working with various vendors like Sylogist and even Q9 Networks (which is linked to Bell) to keep things running smoothly.

&nbsp;
&nbsp;

## Email & Media Gateways
I noticed several domains hinting at Microsoft’s influence—subdomains like “stu.” for students and “fs.” for staff, along with others like “officewebapps” and “autodiscover.” These likely point to secure email and media gateways that handle everything from spam filtering to malware scans before the data makes its way into the network.

&nbsp;
&nbsp;

## Network Monitoring with Perfsonar
Another cool piece was a Perfsonar instance—basically a network monitoring tool keeping an eye on traffic, errors, and overall network health. This instance ran on a beefy Dell PowerEdge R430 with AlmaLinux 9.3. It’s one thing to know your network is alive; it’s another to see it monitored in real time.

&nbsp;
&nbsp;

## GeoFeed & IP Allocation
A neat discovery was a “geofeed” subdomain that triggered an automatic download of a CSV file. This file lists IP blocks by postal code, province, and city—pretty much laying out where the network’s assets are spread across Manitoba. From what I gathered, a lot of these IPs are linked to areas around the University of Manitoba.

&nbsp;
&nbsp;

## Admin Portals: Observium & Others
I also came across admin interfaces—labeled “Portal” (likely short for a forms-based login) and “Observium.” These dashboards are the control centers for managing network services. While they’re standard fare, I did note that they rely on basic text-based authentication, which raises some security flags if there aren’t additional safeguards in place.

&nbsp;
&nbsp;

### Wrapping It Up
To sum up, this exploration wasn’t about uncovering some earth-shattering secret. Instead, it was a practical exercise in network reconnaissance, showing how public tools and a bit of curiosity can reveal a lot about how large networks—like those supporting Manitoba’s education system—are put together.


&nbsp;
- **Start Small:** Begin with public websites and domain lookups.
- **Use the Right Tools:** Nmap, Telnet, and similar tools can give you a clear picture of active services.
- **Connect the Dots:** Look for patterns—like the relationship between IP addresses and geographic data.
- **Stay Ethical:** Remember, any recon work should always be done legally and ethically, with proper permissions.

This guide is just the starting point. There’s plenty more to uncover if you’re curious, but even a quick peek like this shows the complexity behind what most of us take for granted.