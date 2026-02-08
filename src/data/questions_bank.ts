import { Question } from '../types';

export const questionBank: Question[] = [
    // --- DOMAIN 1.0 ---
    {
        id: "qb_1_1",
        domainId: "1.0",
        objectiveId: "social_eng",
        type: "MULTIPLE_CHOICE",
        text: "An employee receives a phone call from someone claiming to be from the IT Help Desk asking for their password to resolve a ticket. The employee does not recall opening a ticket. What type of attack is this?",
        options: [
            { id: "a", text: "Phishing" },
            { id: "b", text: "Vishing" },
            { id: "c", text: "Smishing" },
            { id: "d", text: "Tailgating" }
        ],
        correctOptionId: "b",
        explanation: "Vishing (Voice Phishing) involves attackers using phone calls to deceive victims into revealing sensitive information."
    },
    {
        id: "qb_1_2",
        domainId: "1.0",
        objectiveId: "malware",
        type: "MULTIPLE_CHOICE",
        text: "Which of the following malware types is characterized by its ability to self-replicate and spread across a network without user interaction?",
        options: [
            { id: "a", text: "Trojan" },
            { id: "b", text: "Virus" },
            { id: "c", text: "Worm" },
            { id: "d", text: "Logic Bomb" }
        ],
        correctOptionId: "c",
        explanation: "Worms are self-replicating malware that spread across networks automatically. Viruses need a host file/user action, and Trojans need to be installed by the user."
    },
    {
        id: "qb_1_3",
        domainId: "1.0",
        objectiveId: "phys_sec",
        type: "MULTIPLE_CHOICE",
        text: "An attacker follows an authorized employee through a secure door without using a badge. What is this physical security attack called?",
        options: [
            { id: "a", text: "Lockpicking" },
            { id: "b", text: "Tailgating" },
            { id: "c", text: "Dumpster Diving" },
            { id: "d", text: "Shoulder Surfing" }
        ],
        correctOptionId: "b",
        explanation: "Tailgating (or Piggybacking) is when an unauthorized person follows an authorized person into a secure area."
    },
    {
        id: "qb_1_4",
        domainId: "1.0",
        objectiveId: "attacks",
        type: "MULTIPLE_CHOICE",
        text: "A web server is overwhelmed by traffic from thousands of different IP addresses, causing it to crash. What type of attack is this?",
        options: [
            { id: "a", text: "DoS" },
            { id: "b", text: "DDoS" },
            { id: "c", text: "Man-in-the-Middle" },
            { id: "d", text: "SQL Injection" }
        ],
        correctOptionId: "b",
        explanation: "DDoS (Distributed Denial of Service) involves multiple compromised systems attacking a single target. DoS usually comes from one source."
    },
    {
        id: "qb_1_5",
        domainId: "1.0",
        objectiveId: "password_attacks",
        type: "MULTIPLE_CHOICE",
        text: "An attacker uses a pre-computed table of hash values to match against stolen password hashes. What is this table called?",
        options: [
            { id: "a", text: "Dictionary Table" },
            { id: "b", text: "Rainbow Table" },
            { id: "c", text: "Hash Map" },
            { id: "d", text: "Brute Force List" }
        ],
        correctOptionId: "b",
        explanation: "Rainbow Tables are pre-computed tables for reversing cryptographic hash functions, usually for cracking password hashes."
    },

    // --- DOMAIN 2.0 ---
    {
        id: "qb_2_1",
        domainId: "2.0",
        objectiveId: "cryptography",
        type: "MULTIPLE_CHOICE",
        text: "Which of the following cryptographic algorithms is primarily used for verifying the integrity of a file?",
        options: [
            { id: "a", text: "AES" },
            { id: "b", text: "RSA" },
            { id: "c", text: "SHA-256" },
            { id: "d", text: "Diffie-Hellman" }
        ],
        correctOptionId: "c",
        explanation: "SHA-256 is a hashing algorithm used to verify integrity. AES/RSA are for encryption (confidentiality), Diffie-Hellman is for key exchange."
    },
    {
        id: "qb_2_2",
        domainId: "2.0",
        objectiveId: "virtualization",
        type: "MULTIPLE_CHOICE",
        text: "Which cloud computing model provides the customer with a virtual server where they are responsible for patching the OS and installing applications?",
        options: [
            { id: "a", text: "SaaS (Software as a Service)" },
            { id: "b", text: "PaaS (Platform as a Service)" },
            { id: "c", text: "IaaS (Infrastructure as a Service)" },
            { id: "d", text: "FaaS (Function as a Service)" }
        ],
        correctOptionId: "c",
        explanation: "IaaS gives you the infrastructure (VMs/Network). You manage the OS and up. PaaS manages the OS for you. SaaS manages everything (e.g., Gmail)."
    },
    {
        id: "qb_2_3",
        domainId: "2.0",
        objectiveId: "security_concepts",
        type: "MULTIPLE_CHOICE",
        text: "Which concept implies that a system should not trust any user or device, regardless of location, until verified?",
        options: [
            { id: "a", text: "Defense in Depth" },
            { id: "b", text: "Zero Trust" },
            { id: "c", text: "Air Gap" },
            { id: "d", text: "Least Privilege" }
        ],
        correctOptionId: "b",
        explanation: "Zero Trust architecture assumes no implicit trust. 'Never trust, always verify'."
    },
    {
        id: "qb_2_4",
        domainId: "2.0",
        objectiveId: "resilience",
        type: "MULTIPLE_CHOICE",
        text: "A company implements a RAID 5 array for its file server. Which security objective does this primarily support?",
        options: [
            { id: "a", text: "Confidentiality" },
            { id: "b", text: "Integrity" },
            { id: "c", text: "Availability" },
            { id: "d", text: "Authentication" }
        ],
        correctOptionId: "c",
        explanation: "RAID provides redundancy, ensuring the data remains Available even if a drive fails."
    },
    {
        id: "qb_2_5",
        domainId: "2.0",
        objectiveId: "secure_design",
        type: "MULTIPLE_CHOICE",
        text: "Which specialized device is designed to store cryptographic keys and perform encryption operations in a hardware module?",
        options: [
            { id: "a", text: "TPM (Trusted Platform Module)" },
            { id: "b", text: "HSM (Hardware Security Module)" },
            { id: "c", text: "SED (Self-Encrypting Drive)" },
            { id: "d", text: "UEFI" }
        ],
        correctOptionId: "b",
        explanation: "HSMs are dedicated hardware appliances for crypto operations. TPM is a chip on the motherboard."
    },

    // --- DOMAIN 3.0 ---
    {
        id: "qb_3_1",
        domainId: "3.0",
        objectiveId: "protocols",
        type: "MULTIPLE_CHOICE",
        text: "Which protocol should be used to securely administer a remote Linux server via the command line?",
        options: [
            { id: "a", text: "Telnet" },
            { id: "b", text: "SSH" },
            { id: "c", text: "RDP" },
            { id: "d", text: "FTP" }
        ],
        correctOptionId: "b",
        explanation: "SSH (Secure Shell) provides encrypted remote access. Telnet is unencrypted. RDP is for Windows GUI usually. FTP is unencrypted file transfer."
    },
    {
        id: "qb_3_2",
        domainId: "3.0",
        objectiveId: "wireless",
        type: "MULTIPLE_CHOICE",
        text: "Which wireless security standard is considered the most secure and supports 192-bit encryption?",
        options: [
            { id: "a", text: "WEP" },
            { id: "b", text: "WPA" },
            { id: "c", text: "WPA2" },
            { id: "d", text: "WPA3" }
        ],
        correctOptionId: "d",
        explanation: "WPA3 is the newest standard, replacing WPA2, and offering stronger encryption (SAE instead of PSK)."
    },
    {
        id: "qb_3_3",
        domainId: "3.0",
        objectiveId: "network_security",
        type: "MULTIPLE_CHOICE",
        text: "A security administrator wants to stop attackers from scanning the network topology. Which device rule is most effective?",
        options: [
            { id: "a", text: "Block outbound TCP 80" },
            { id: "b", text: "Disable SSID broadcast" },
            { id: "c", text: "Block ICMP (Ping) at the firewall" },
            { id: "d", text: "Enable Port Security" }
        ],
        correctOptionId: "c",
        explanation: "Blocking ICMP (Ping) prevents simple sweep scans from mapping live hosts."
    },
    {
        id: "qb_3_4",
        domainId: "3.0",
        objectiveId: "app_security",
        type: "MULTIPLE_CHOICE",
        text: "When developing a web application, which practice best prevents SQL Injection attacks?",
        options: [
            { id: "a", text: "Input Validation and Parameterized Queries" },
            { id: "b", text: "Using HTTPS" },
            { id: "c", text: "Encrypting the database" },
            { id: "d", text: "Implementing MFA" }
        ],
        correctOptionId: "a",
        explanation: "SQL Injection is caused by untrusted input. Parameterized queries ensure input is treated as data, not code."
    },
    {
        id: "qb_3_5",
        domainId: "3.0",
        objectiveId: "mobile",
        type: "MULTIPLE_CHOICE",
        text: "A company wants to ensure that corporate data on employee phones can be remotely wiped if the device is lost. What solution should they implement?",
        options: [
            { id: "a", text: "MFA" },
            { id: "b", text: "MDM (Mobile Device Management)" },
            { id: "c", text: "VPN" },
            { id: "d", text: "Antivirus" }
        ],
        correctOptionId: "b",
        explanation: "MDM solutions allow organizations to manage, secure, and remotely wipe mobile devices."
    },

    // --- DOMAIN 4.0 ---
    {
        id: "qb_4_1",
        domainId: "4.0",
        objectiveId: "incident_resp",
        type: "MULTIPLE_CHOICE",
        text: "During which phase of the Incident Response lifecycle is the root cause analysis typically performed?",
        options: [
            { id: "a", text: "Preparation" },
            { id: "b", text: "Identification" },
            { id: "c", text: "Eradication" },
            { id: "d", text: "Lessons Learned" }
        ],
        correctOptionId: "d",
        explanation: "Lessons Learned (Post-Incident Activity) focuses on analyzing what happened and how to improve. Root cause analysis is key here."
    },
    {
        id: "qb_4_2",
        domainId: "4.0",
        objectiveId: "forensics",
        type: "MULTIPLE_CHOICE",
        text: "When collecting digital evidence, what is the most important document to maintain to ensure the evidence is admissible in court?",
        options: [
            { id: "a", text: "Incident Report" },
            { id: "b", text: "Chain of Custody" },
            { id: "c", text: "Network Log" },
            { id: "d", text: "User Agreement" }
        ],
        correctOptionId: "b",
        explanation: "Chain of Custody documents exactly who handled the evidence, when, and where. Without it, evidence can be dismissed."
    },
    {
        id: "qb_4_3",
        domainId: "4.0",
        objectiveId: "tools",
        type: "MULTIPLE_CHOICE",
        text: "Which command line tool would a Linux administrator use to view the current network connections and listening ports?",
        options: [
            { id: "a", text: "ifconfig" },
            { id: "b", text: "netstat" },
            { id: "c", text: "ping" },
            { id: "d", text: "nslookup" }
        ],
        correctOptionId: "b",
        explanation: "Netstat (Network Statistics) displays network connections, routing tables, and interface statistics. 'ss' is the modern replacement."
    },
    {
        id: "qb_4_4",
        domainId: "4.0",
        objectiveId: "scanning",
        type: "MULTIPLE_CHOICE",
        text: "A security analyst is performing a vulnerability scan. The scan reports a vulnerability that does not actually exist on the target system. What is this called?",
        options: [
            { id: "a", text: "False Negative" },
            { id: "b", text: "False Positive" },
            { id: "c", text: "True Positive" },
            { id: "d", text: "True Negative" }
        ],
        correctOptionId: "b",
        explanation: "False Positive: The tool says there is a problem, but there isn't. (False Negative is saying there is NO problem when there IS one)."
    },
    {
        id: "qb_4_5",
        domainId: "4.0",
        objectiveId: "logs",
        type: "MULTIPLE_CHOICE",
        text: "Which system is dedicated to collecting, aggregating, and analyzing log data from various network devices in real-time?",
        options: [
            { id: "a", text: "IDS" },
            { id: "b", text: "IPS" },
            { id: "c", text: "SIEM" },
            { id: "d", text: "Firewall" }
        ],
        correctOptionId: "c",
        explanation: "SIEM (Security Information and Event Management) aggregates logs for analysis."
    },

    // --- DOMAIN 5.0 ---
    {
        id: "qb_5_1",
        domainId: "5.0",
        objectiveId: "governance",
        type: "MULTIPLE_CHOICE",
        text: "Which document specifies the rules for acceptable use of company resources by employees?",
        options: [
            { id: "a", text: "SLA (Service Level Agreement)" },
            { id: "b", text: "AUP (Acceptable Use Policy)" },
            { id: "c", text: "NDA (Non-Disclosure Agreement)" },
            { id: "d", text: "MOU (Memorandum of Understanding)" }
        ],
        correctOptionId: "b",
        explanation: "AUP defines what an employee can and cannot do with company IT assets."
    },
    {
        id: "qb_5_2",
        domainId: "5.0",
        objectiveId: "risk",
        type: "MULTIPLE_CHOICE",
        text: "In risk management, what is the term for the expected monetary loss every time a specific risk occurs?",
        options: [
            { id: "a", text: "ALE (Annualized Loss Expectancy)" },
            { id: "b", text: "SLE (Single Loss Expectancy)" },
            { id: "c", text: "ARO (Annualized Rate of Occurrence)" },
            { id: "d", text: "ROI (Return on Investment)" }
        ],
        correctOptionId: "b",
        explanation: "SLE is the cost of a single event. ALE = SLE * ARO."
    },
    {
        id: "qb_5_3",
        domainId: "5.0",
        objectiveId: "compliance",
        type: "MULTIPLE_CHOICE",
        text: "Which regulation is primarily concerned with the protection of EU citizens' personal data?",
        options: [
            { id: "a", text: "HIPAA" },
            { id: "b", text: "SOX" },
            { id: "c", text: "GDPR" },
            { id: "d", text: "PCI-DSS" }
        ],
        correctOptionId: "c",
        explanation: "GDPR (General Data Protection Regulation) is the EU privacy law. HIPAA is US healthcare. PCI-DSS is for credit cards."
    },
    {
        id: "qb_5_4",
        domainId: "5.0",
        objectiveId: "personnel",
        type: "MULTIPLE_CHOICE",
        text: "Which personnel policy requires employees to take time off, allowing others to audit their work for fraud?",
        options: [
            { id: "a", text: "Separation of Duties" },
            { id: "b", text: "Least Privilege" },
            { id: "c", text: "Job Rotation" },
            { id: "d", text: "Mandatory Vacations" }
        ],
        correctOptionId: "d",
        explanation: "Mandatory Vacations forces someone else to cover the role, often exposing ongoing fraud."
    },
    {
        id: "qb_5_5",
        domainId: "5.0",
        objectiveId: "bcp",
        type: "MULTIPLE_CHOICE",
        text: "Which type of disaster recovery site is fully equipped and can go live immediately with current data?",
        options: [
            { id: "a", text: "Cold Site" },
            { id: "b", text: "Warm Site" },
            { id: "c", text: "Hot Site" },
            { id: "d", text: "Mobile Site" }
        ],
        correctOptionId: "c",
        explanation: "Hot Sites have power, hardware, software, and near-real-time data. Warm sites have hardware but need data restored. Cold sites are empty rooms."
    },
    // More Scenario Questions
    {
        id: "qb_mixed_1",
        domainId: "2.0",
        objectiveId: "cloud_sec",
        type: "MULTIPLE_CHOICE",
        text: "A developer inadvertently uploads AWS access keys to a public GitHub repository. Within minutes, a bot spins up 100 crypto-mining instances. What cloud security tool could have prevented this?",
        options: [
            { id: "a", text: "WAF (Web Application Firewall)" },
            { id: "b", text: "CASB (Cloud Access Security Broker)" },
            { id: "c", text: "DLP (Data Loss Prevention) / Secret Scanning" },
            { id: "d", text: "HIDS" }
        ],
        correctOptionId: "c",
        explanation: "DLP tools or Secret Scanning (often integrated into CASBs or Repos) detect sensitive data like keys before or during upload."
    },
    {
        id: "qb_mixed_2",
        domainId: "1.0",
        objectiveId: "social_eng",
        type: "MULTIPLE_CHOICE",
        text: "An attacker drops a USB drive labeled 'Executive Salaries 2025' in the company parking lot. What type of social engineering attack is this?",
        options: [
            { id: "a", text: "Phishing" },
            { id: "b", text: "Baiting" },
            { id: "c", text: "Pretexting" },
            { id: "d", text: "Quid Pro Quo" }
        ],
        correctOptionId: "b",
        explanation: "Baiting uses physical media (USB) or false promises to lure a victim. It relies on curiosity."
    },
    {
        id: "qb_mixed_3",
        domainId: "3.0",
        objectiveId: "wifi",
        type: "MULTIPLE_CHOICE",
        text: "A user at a coffee shop connects to 'Free_Starbucks_Wifi' but it connects them to an attacker's laptop instead. What is this attack called?",
        options: [
            { id: "a", text: "Evil Twin" },
            { id: "b", text: "Bluejacking" },
            { id: "c", text: "Disassociation Attack" },
            { id: "d", text: "NFC Replay" }
        ],
        correctOptionId: "a",
        explanation: "An Evil Twin is a rogue AP that mimics a legitimate SSID to intercept traffic."
    }
];
