export interface GlossaryTerm {
    term: string;
    definition: string;
    category: 'General' | 'Network' | 'Attacks' | 'Crypto' | 'Risk';
}

export const glossaryTerms: GlossaryTerm[] = [
    // General / CIA
    { term: "Confidentiality", definition: "Ensuring data is only accessible to authorized parties.", category: "General" },
    { term: "Integrity", definition: "Ensuring data has not been tampered with or altered.", category: "General" },
    { term: "Availability", definition: "Ensuring systems and data are accessible when needed.", category: "General" },
    { term: "Non-Repudiation", definition: "Proof that a user took an action, preventing them from denying it later.", category: "General" },
    { term: "Authentication", definition: "Verifying the identity of a user or system (Who are you?).", category: "General" },
    { term: "Authorization", definition: "Determining what an authenticated user is allowed to do (What can you do?).", category: "General" },
    { term: "Accounting", definition: "Tracking and logging user activities (What did you do?).", category: "General" },

    // Attacks
    { term: "Phishing", definition: "Sending fraudulent emails to trick users into revealing sensitive info.", category: "Attacks" },
    { term: "Spear Phishing", definition: "Targeted phishing attack aimed at a specific individual or organization.", category: "Attacks" },
    { term: "Whaling", definition: "Phishing attack targeting high-level executives (CEOs, CFOs).", category: "Attacks" },
    { term: "Vishing", definition: "Voice phishing conducted over the phone.", category: "Attacks" },
    { term: "Smishing", definition: "Phishing conducted via SMS text messages.", category: "Attacks" },
    { term: "Ransomware", definition: "Malware that encrypts data and demands payment for the decryption key.", category: "Attacks" },
    { term: "Trojan", definition: "Malware disguised as legitimate software.", category: "Attacks" },
    { term: "Worm", definition: "Malware that self-replicates and spreads across a network without user interaction.", category: "Attacks" },
    { term: "Rootkit", definition: "Malware that hides deep in the OS to maintain persistent access.", category: "Attacks" },
    { term: "Logic Bomb", definition: "Malicious code that executes when specific conditions or dates are met.", category: "Attacks" },
    { term: "DDoS", definition: "Distributed Denial of Service; overwhelming a target with traffic from many sources.", category: "Attacks" },
    { term: "Zero-Day", definition: "An attack that exploits a vulnerability before the vendor knows about it.", category: "Attacks" },
    { term: "SQL Injection", definition: "Inserting malicious SQL queries into input fields to manipulate a database.", category: "Attacks" },
    { term: "XSS (Cross-Site Scripting)", definition: "Injecting malicious scripts into trusted websites.", category: "Attacks" },

    // Networking
    { term: "Firewall", definition: "A device that filters network traffic based on rules.", category: "Network" },
    { term: "Router", definition: "A device that directs traffic between different networks.", category: "Network" },
    { term: "Switch", definition: "A device that connects devices within the same network (LAN).", category: "Network" },
    { term: "VPN", definition: "Virtual Private Network; creates an encrypted tunnel over an untrusted network.", category: "Network" },
    { term: "Proxy", definition: "A server that acts as an intermediary for requests from clients.", category: "Network" },
    { term: "DMZ", definition: "Demilitarized Zone (Screened Subnet); a buffer zone for public-facing services.", category: "Network" },
    { term: "NIDS", definition: "Network Intrusion Detection System; monitors traffic for malicious activity.", category: "Network" },
    { term: "NIPS", definition: "Network Intrusion Prevention System; detects and blocks malicious traffic.", category: "Network" },
    { term: "VLAN", definition: "Virtual Local Area Network; logically segmenting a physical network.", category: "Network" },
    { term: "Air Gap", definition: "Physically isolating a system from all other networks.", category: "Network" },

    // Cryptography
    { term: "Symmetric Encryption", definition: "Using the same key for encryption and decryption (e.g., AES).", category: "Crypto" },
    { term: "Asymmetric Encryption", definition: "Using a key pair (Public/Private) for encryption (e.g., RSA).", category: "Crypto" },
    { term: "Hashing", definition: "Transforming data into a fixed-length string to verify integrity (One-way).", category: "Crypto" },
    { term: "Digital Signature", definition: "A cryptographic hash encrypted with a private key to prove authenticity.", category: "Crypto" },
    { term: "PKI", definition: "Public Key Infrastructure; system for managing digital certificates.", category: "Crypto" },
    { term: "CA", definition: "Certificate Authority; entity that issues digital certificates.", category: "Crypto" },
    { term: "Steganography", definition: "Hiding data within other files (like hiding text in an image).", category: "Crypto" },

    // Risk & Compliance
    { term: "Risk Acceptance", definition: " acknowledging a risk but doing nothing because the cost of fixing is too high.", category: "Risk" },
    { term: "Risk Avoidance", definition: "Eliminating the risk by stopping the activity.", category: "Risk" },
    { term: "Risk Mitigation", definition: "Implementing controls to reduce the likelihood or impact of a risk.", category: "Risk" },
    { term: "Risk Transfer", definition: "Shifting the risk to a third party (e.g., Insurance).", category: "Risk" },
    { term: "SLE", definition: "Single Loss Expectancy; cost of a single risk event.", category: "Risk" },
    { term: "ALE", definition: "Annual Loss Expectancy; expected yearly cost of a risk (SLE x ARO).", category: "Risk" },
    { term: "RTO", definition: "Recovery Time Objective; target time to restore a system after failure.", category: "Risk" },
    { term: "RPO", definition: "Recovery Point Objective; max acceptable data loss (time since last backup).", category: "Risk" },
    { term: "MTBF", definition: "Mean Time Between Failures; reliability metric for hardware.", category: "Risk" },
    { term: "SLA", definition: "Service Level Agreement; contract defining expected performance/uptime.", category: "Risk" }
];
