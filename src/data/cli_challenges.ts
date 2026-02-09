export interface CliChallenge {
    id: number;
    title: string;
    scenario: string;
    description: string;
    platform: 'Windows' | 'Linux' | 'Cross-Platform';
    validCommands: RegExp[]; // Regex for flexibility
    hint: string;
    explanation: string;
    baseXP: number;
}

export const cliChallenges: CliChallenge[] = [
    {
        id: 1,
        title: "Basic Reconnaissance",
        scenario: "You are on a Windows machine. You need to see the files in the current directory to look for suspicious scripts.",
        description: "List the contents of the current directory.",
        platform: 'Windows',
        validCommands: [/^dir$/i, /^ls$/i, /^get-childitem$/i], // Allow ls/powershell as valid alts
        hint: "In Windows Command Prompt, this 3-letter command lists directory contents.",
        explanation: "The 'dir' command displays a list of files and subdirectories in a directory.",
        baseXP: 10
    },
    {
        id: 2,
        title: "Network Identity",
        scenario: "You need to identify the IP address of your Windows workstation to verify if it's on the correct subnet.",
        description: "Display the IP configuration details.",
        platform: 'Windows',
        validCommands: [/^ipconfig$/i, /^ipconfig \/all$/i],
        hint: "This command shows the IP Configuration.",
        explanation: "'ipconfig' displays all current TCP/IP network configuration values.",
        baseXP: 10
    },
    {
        id: 3,
        title: "Connectivity Check",
        scenario: "A user reports they cannot reach the internal file server at 10.0.0.5. Verify basic connectivity.",
        description: "Test reachability to 10.0.0.5.",
        platform: 'Cross-Platform',
        validCommands: [/^ping 10\.0\.0\.5$/i],
        hint: "Send ICMP Echo Request packets to the target IP.",
        explanation: "'ping' is the primary tool for testing network connectivity.",
        baseXP: 15
    },
    {
        id: 4,
        title: "Path Trace",
        scenario: "Connectivity to a remote branch office server (192.168.50.10) is slow. You want to see where the packets might be dropping or slowing down.",
        description: "Trace the route to 192.168.50.10. (Assume Windows environment)",
        platform: 'Windows',
        validCommands: [/^tracert 192\.168\.50\.10$/i],
        hint: "On Windows, this command traces the route packets take to a destination.",
        explanation: "'tracert' (Windows) or 'traceroute' (Linux/Mac) shows the path and transit delays of packets.",
        baseXP: 20
    },
    {
        id: 5,
        title: "Active Connections",
        scenario: "You suspect malware is beaconing out to a C2 server. You need to see all active network connections and listening ports.",
        description: "Display all active TCP/UDP connections and listening ports.",
        platform: 'Cross-Platform',
        validCommands: [/^netstat -a$/i, /^netstat -an$/i, /^ss -a$/i],
        hint: "Use 'netstat' with a flag to show 'all' connections.",
        explanation: "'netstat -a' displays all active connections and the TCP and UDP ports on which the computer is listening.",
        baseXP: 25
    },
    {
        id: 6,
        title: "DNS Lookup",
        scenario: "You found a suspicious domain 'evil-corp.com' in the logs. You need to resolve its IP address.",
        description: "Query the DNS records for 'evil-corp.com'.",
        platform: 'Cross-Platform',
        validCommands: [/^nslookup evil-corp\.com$/i, /^dig evil-corp\.com$/i, /^host evil-corp\.com$/i],
        hint: "Name Server Lookup.",
        explanation: "'nslookup' is a tool for querying the Domain Name System (DNS) to obtain domain name or IP address mapping.",
        baseXP: 25
    },
    {
        id: 7,
        title: "Network Scan",
        scenario: "You are authorized to scan the subnet 192.168.1.0/24 to identify live hosts without port scanning them yet.",
        description: "Perform a ping scan (no port scan) on 192.168.1.0/24 using Nmap.",
        platform: 'Linux',
        validCommands: [/^nmap -sn 192\.168\.1\.0\/24$/i, /^nmap -sP 192\.168\.1\.0\/24$/i],
        hint: "Use nmap with the flag that disables port scanning (often called ping scan).",
        explanation: "'nmap -sn' (formerly -sP) performs a ping scan to discover live hosts without scanning ports.",
        baseXP: 30
    },
    {
        id: 8,
        title: "File Content Inspection",
        scenario: "On a Linux server, you need to quickly view the contents of '/etc/passwd' to check for unauthorized users.",
        description: "Display the contents of the file '/etc/passwd'.",
        platform: 'Linux',
        validCommands: [/^cat \/etc\/passwd$/i, /^less \/etc\/passwd$/i, /^more \/etc\/passwd$/i],
        hint: "Concatenate and print files.",
        explanation: "'cat' is the standard utility to output the contents of a file to standard output.",
        baseXP: 25
    },
    {
        id: 9,
        title: "Permission Hardening",
        scenario: "You found a script 'backup.sh' that is world-writable. You need to set it so only the owner can read, write, and execute, and group/others have no permissions.",
        description: "Change permissions of 'backup.sh' to 700 (rwx------).",
        platform: 'Linux',
        validCommands: [/^chmod 700 backup\.sh$/i, /^chmod u=rwx,go= backup\.sh$/i],
        hint: "Change Mode.",
        explanation: "'chmod 700' gives read, write, and execute permissions to the user only.",
        baseXP: 35
    },
    {
        id: 10,
        title: "User Management",
        scenario: "A user 'jdoe' has left the company. You need to delete their account from the Linux system.",
        description: "Delete the user account 'jdoe'.",
        platform: 'Linux',
        validCommands: [/^userdel jdoe$/i, /^deluser jdoe$/i],
        hint: "Command to delete a user.",
        explanation: "'userdel' is a low-level utility for removing users. 'deluser' is a friendlier frontend often found on Debian systems. Both are accepted.",
        baseXP: 40
    }
];
