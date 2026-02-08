import { Domain } from '../types';

export const domains: Domain[] = [
    {
        id: "1.0",
        title: "General Security Concepts",
        weight: 12,
        objectives: [
            {
                id: "1.2",
                domainId: "1.0",
                title: "Fundamental Security Concepts",
                concepts: [
                    {
                        id: "cia-triad",
                        title: "CIA Triad",
                        summary: "Confidentiality, Integrity, and Availability are the three pillars of information security.",
                        details: "The CIA Triad is a benchmark model designed to guide policies for information security within an organization. \n\n• **Confidentiality**: Keeping information private. Example: Encrypting a hard drive so only authorized users can read the data.\n• **Integrity**: Ensuring data is accurate and hasn't been tampered with. Example: Using hashing to verify a downloaded file hasn't been modified by an attacker.\n• **Availability**: Ensuring data and services are accessible when needed. Example: Implementing a Load Balancer to prevent a website from going down during a traffic spike.",
                        video: null,
                        quizQuestions: [
                            {
                                id: "cia-q1",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "An attacker performs a DoS (Denial of Service) attack on a web server. Which pillar of the CIA triad is being directly attacked?",
                                options: [
                                    { id: "a", text: "Confidentiality" },
                                    { id: "b", text: "Integrity" },
                                    { id: "c", text: "Availability" },
                                    { id: "d", text: "Non-repudiation" }
                                ],
                                correctOptionId: "c",
                                explanation: "Availability ensures that systems operate continuously and authorized persons can access data when needed. A DoS attack aims to take systems offline."
                            },
                            {
                                id: "cia-q2",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "A user encrypts a sensitive file before sending it over email. Which security goal is primarily being addressed?",
                                options: [
                                    { id: "a", text: "Confidentiality" },
                                    { id: "b", text: "Integrity" },
                                    { id: "c", text: "Availability" },
                                    { id: "d", text: "Accounting" }
                                ],
                                correctOptionId: "a",
                                explanation: "Confidentiality is the goal of keeping information private and protecting it from unauthorized access."
                            },
                            {
                                id: "cia-q3",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "A system administrator checks a file's hash value after a transfer to ensure it was not corrupted. Which pillar is this verifying?",
                                options: [
                                    { id: "a", text: "Confidentiality" },
                                    { id: "b", text: "Integrity" },
                                    { id: "c", text: "Availability" },
                                    { id: "d", text: "Privacy" }
                                ],
                                correctOptionId: "b",
                                explanation: "Integrity ensures that organizational information is accurate, free of errors, and has not been modified without authorization."
                            }
                        ]
                    },
                    {
                        id: "auth-vs-authz",
                        title: "Authentication vs. Authorization",
                        summary: "Authentication verifies identity, while Authorization determines access rights.",
                        details: "These two concepts are often confused but serve distinct purposes in security.\n\n• **Authentication (AuthN)**: The process of verifying who you are. \n  *Real-world example*: Showing your ID at a secure facility entrance.\n• **Authorization (AuthZ)**: The process of verifying what you have access to.\n  *Real-world example*: Once inside the facility, your badge only allows you to enter the Server Room, not the CEO's office.\n\n**Key Exam Tip**: You must be authenticated BEFORE you can be authorized.",
                        video: {
                            title: "Authentication vs. Authorization in Security Plus Exam 🎟️",
                            url: "https://www.loom.com/share/02b1e68bd2224bb98c88fc1a8fa2354b"
                        },
                        quizQuestions: [
                            {
                                id: "auth-q1",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "A user enters their username and password into a login screen. Which process is occurring?",
                                options: [
                                    { id: "a", text: "Authentication" },
                                    { id: "b", text: "Authorization" },
                                    { id: "c", text: "Accounting" },
                                    { id: "d", text: "Auditing" }
                                ],
                                correctOptionId: "a",
                                explanation: "Authentication is the process of proving your identity to the system."
                            },
                            {
                                id: "auth-q2",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "After logging in, a user tries to delete a file but receives a 'Permission Denied' error. Which security mechanism is blocking them?",
                                options: [
                                    { id: "a", text: "Authentication" },
                                    { id: "b", text: "Authorization" },
                                    { id: "c", text: "Non-repudiation" },
                                    { id: "d", text: "Identification" }
                                ],
                                correctOptionId: "b",
                                explanation: "Authorization determines what rights and privileges a user has after they have been authenticated."
                            },
                            {
                                id: "auth-q3",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "Which of the following MUST happen first in a standard security flow?",
                                options: [
                                    { id: "a", text: "Authorization" },
                                    { id: "b", text: "Authentication" },
                                    { id: "c", text: "Accounting" },
                                    { id: "d", text: "Logging" }
                                ],
                                correctOptionId: "b",
                                explanation: "Identification and Authentication must occur before Authorization can determine access levels."
                            }
                        ]
                    },
                    {
                        id: "aaa-framework",
                        title: "AAA Framework",
                        summary: "Authentication, Authorization, and Accounting provide a framework for controlling access.",
                        details: "The AAA framework is the backbone of access control. It ensures that users are identified, granted the correct access, and their actions are recorded.\n\n• **Authentication**: Verifying identity (Something you know, have, are).\n• **Authorization**: Granting permissions (Read, Write, Execute).\n• **Accounting**: Logging and auditing (What did the user do, and when?).\n\n*Scenario*: In a corporate network, a RADIUS or TACACS+ server provides centralized AAA services to manage thousands of users and network devices.",
                        video: null,
                        quizQuestions: [
                            {
                                id: "aaa-q1",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "Which component of the AAA framework is responsible for generating an audit trail of user activities?",
                                options: [
                                    { id: "a", text: "Authentication" },
                                    { id: "b", text: "Authorization" },
                                    { id: "c", text: "Accounting" },
                                    { id: "d", text: "Allocation" }
                                ],
                                correctOptionId: "c",
                                explanation: "Accounting is responsible for tracking user usage and creating logs for auditing purposes."
                            },
                            {
                                id: "aaa-q2",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "The first 'A' in the AAA framework stands for which of the following?",
                                options: [
                                    { id: "a", text: "Accounting" },
                                    { id: "b", text: "Auditing" },
                                    { id: "c", text: "Authentication" },
                                    { id: "d", text: "Authorization" }
                                ],
                                correctOptionId: "c",
                                explanation: "The standard order of the AAA framework is Authentication, Authorization, and Accounting."
                            },
                            {
                                id: "aaa-q3",
                                domainId: "1.0",
                                objectiveId: "1.2",
                                text: "A security engineer is configuring a RADIUS server to manage network access. This is an implementation of which framework?",
                                options: [
                                    { id: "a", text: "CIA Triad" },
                                    { id: "b", text: "NIST CSF" },
                                    { id: "c", text: "AAA Framework" },
                                    { id: "d", text: "ISO 27001" }
                                ],
                                correctOptionId: "c",
                                explanation: "RADIUS and TACACS+ are common protocols used to implement the AAA framework for centralized management."
                            }
                        ]
                    }
                ]
            },
            {
                id: "1.3",
                domainId: "1.0",
                title: "Identity and Access Management (IAM)",
                concepts: [
                    {
                        id: "least-privilege",
                        title: "Principle of Least Privilege",
                        summary: "Users should only be granted the minimum level of access necessary to perform their job functions.",
                        details: "The Principle of Least Privilege (PoLP) is a core security pillar that limits access rights for users, accounts, and computing processes to only those needed to do their jobs.\n\n• **Benefit**: Limits the 'blast radius' if an account is compromised.\n• **Implementation**: Use Role-Based Access Control (RBAC) and conduct regular access reviews.\n\n*Real-world example*: A marketing intern should have access to the social media dashboard, but not the company's payroll system.",
                        video: {
                            title: "Least Privilege (Why Security+ Won’t Shut Up About It)",
                            url: "https://www.loom.com/share/1e2bbd28fd574708853934f0824e83e0"
                        },
                        quizQuestions: [
                            {
                                id: "lp-q1",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "A user is complaining that they cannot access a folder needed for a one-time project. The administrator provides full administrative access to 'save time'. Which principle is being violated?",
                                options: [
                                    { id: "a", text: "Separation of Duties" },
                                    { id: "b", text: "Least Privilege" },
                                    { id: "c", text: "Job Rotation" },
                                    { id: "d", text: "Implicit Deny" }
                                ],
                                correctOptionId: "b",
                                explanation: "Least privilege means providing ONLY the necessary permissions. Giving full admin for a small task is a major violation."
                            },
                            {
                                id: "lp-q2",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "Which of the following is the primary goal of implementing Least Privilege?",
                                options: [
                                    { id: "a", text: "Improve system performance" },
                                    { id: "b", text: "Reduce the attack surface and impact of a breach" },
                                    { id: "c", text: "Increase user productivity" },
                                    { id: "d", text: "Simplify password management" }
                                ],
                                correctOptionId: "b",
                                explanation: "By limiting what a user can do, you limit what an attacker can do if they steal that user's credentials."
                            },
                            {
                                id: "lp-q3",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "A server process runs with 'root' privileges despite only needing to write to a specific log file. This is a failure of which concept?",
                                options: [
                                    { id: "a", text: "Confidentiality" },
                                    { id: "b", text: "Least Privilege" },
                                    { id: "c", text: "Integrity" },
                                    { id: "d", text: "Availability" }
                                ],
                                correctOptionId: "b",
                                explanation: "Processes, just like users, should run with the minimum possible permission level."
                            }
                        ]
                    },
                    {
                        id: "mfa",
                        title: "Multi-Factor Authentication (MFA)",
                        summary: "Requires more than one method of authentication from independent categories.",
                        details: "MFA requires users to present two or more pieces of evidence from different categories:\n\n1. **Something you know**: Password, PIN, Security Question.\n2. **Something you have**: Smart card, hardware token, phone (SMS/App).\n3. **Something you are**: Fingerprint, Retina scan, Facial recognition.\n4. **Somewhere you are**: Geolocation/IP gating.\n5. **Something you do**: Typing cadence, gait analysis.\n\n*Critical Note*: Using two passwords is NOT MFA (it's 'Two-Step' but both are in the 'Something you know' category).",
                        video: {
                            title: "Understanding Multi-Factor Authentication for the Security Plus Exam🔐",
                            url: "https://www.loom.com/share/461041344c62411c9412fd4d4802d9e6"
                        },
                        quizQuestions: [
                            {
                                id: "mfa-q1",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "A user logs in using a password and a code sent via SMS to their phone. Which two MFA categories are being used?",
                                options: [
                                    { id: "a", text: "Something you know and Something you are" },
                                    { id: "b", text: "Something you know and Something you do" },
                                    { id: "c", text: "Something you know and Something you have" },
                                    { id: "d", text: "Something you have and Somewhere you are" }
                                ],
                                correctOptionId: "c",
                                explanation: "Password = Know, SMS Code (received on physical phone) = Have."
                            },
                            {
                                id: "mfa-q2",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "Which of the following is considered 'Something you are'?",
                                options: [
                                    { id: "a", text: "Hardware token" },
                                    { id: "b", text: "Retina scan" },
                                    { id: "c", text: "PIN number" },
                                    { id: "d", text: "Employee ID badge" }
                                ],
                                correctOptionId: "b",
                                explanation: "Biometrics like retina scans, fingerprints, and voice recognition are 'Something you are'."
                            },
                            {
                                id: "mfa-q3",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "An organization requires a password plus another password as a 'security question'. Is this MFA?",
                                options: [
                                    { id: "a", text: "Yes, because it uses two steps" },
                                    { id: "b", text: "No, because both are 'Something you know'" },
                                    { id: "c", text: "Yes, because it increases security" },
                                    { id: "d", text: "No, because security questions are easily guessed" }
                                ],
                                correctOptionId: "b",
                                explanation: "MFA requires factors from different *categories* (Know, Have, Are, etc.)."
                            }
                        ]
                    },
                    {
                        id: "sso",
                        title: "Single Sign-On (SSO)",
                        summary: "Allows a user to log in once and access multiple independent systems.",
                        details: "SSO improves user experience by reducing 'password fatigue' while allowing centralizing management.\n\n• **Mechanism**: Uses a central authentication server (Identity Provider or IdP) and tokens (SAML, OIDC).\n• **Risk**: If the SSO credentials are stolen, the attacker has access to ALL connected systems.",
                        video: {
                            title: "Single Sign-On (SSO) — Convenience with a Price",
                            url: "https://www.loom.com/share/585f5f2be0e04addb37a2d30d178d88d"
                        },
                        quizQuestions: [
                            {
                                id: "sso-q1",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                text: "Which of the following is the biggest security risk associated with SSO?",
                                options: [
                                    { id: "a", text: "Slow login times" },
                                    { id: "b", text: "Users forgetting their passwords" },
                                    { id: "c", text: "Single point of failure/compromise" },
                                    { id: "d", text: "High hardware costs" }
                                ],
                                correctOptionId: "c",
                                explanation: "If the SSO account is compromised, every system the user can access is now at risk."
                            }
                        ]
                    },
                    {
                        id: "federation",
                        title: "Federation",
                        summary: "Enables identities to be shared across distinct security domains.",
                        details: "Federation extends SSO across different organizations. \n\n*Real-world example*: Logging into a travel website using your corporate Microsoft 365 or Google account. The companies 'trust' each other's identities.\n\n• **SAML**: XML-based standard for exchanging authentication data.\n• **OIDC**: Modern standard built on top of OAuth 2.0.",
                        video: {
                            title: "Federation (When Organizations Trust Each Other)",
                            url: "https://www.loom.com/share/2921388b02a6444aa33fd8c79d3c40a1"
                        }
                    }

                ]
            },
            {
                id: "1.4",
                domainId: "1.0",
                title: "Cryptographic Solutions",
                concepts: [
                    {
                        id: "hashing-vs-encryption",
                        title: "Hashing vs. Encryption",
                        summary: "Hashing is one-way (integrity), Encryption is two-way (confidentiality).",
                        details: "Fundamental Cryptography concepts:\n\n• **Hashing**: One-way transformation. Used for Integrity (checking if a file was changed). \n  *Examples*: SHA-256, MD5.\n• **Encryption**: Two-way transformation. Used for Confidentiality (keeping data secret).\n  *Examples*: AES, RSA.",
                        video: {
                            title: "Understanding Hashing vs. Encryption: Key Differences Explained 🔒",
                            url: "https://www.loom.com/share/1539a56296264a4fb5d4a2eeaad22b9d"
                        },
                        quizQuestions: [
                            {
                                id: "hash-q1",
                                domainId: "1.0",
                                objectiveId: "1.4",
                                text: "Which of the following is a one-way security mechanism used specifically for integrity?",
                                options: [
                                    { id: "a", text: "AES Encryption" },
                                    { id: "b", text: "Hashing" },
                                    { id: "c", text: "Salting" },
                                    { id: "d", text: "Steganography" }
                                ],
                                correctOptionId: "b",
                                explanation: "Hashing is a one-way function. Once data is hashed, it cannot be 'un-hashed' to its original form."
                            }
                        ]
                    },
                    {
                        id: "symmetric-vs-asymmetric",
                        title: "Symmetric vs. Asymmetric Encryption",
                        summary: "Symmetric uses one key (faster), Asymmetric uses a key pair (public/private).",
                        details: "• **Symmetric**: The same key encrypts and decrypts. Fast, but hard to share keys securely. \n  *Standard*: AES (Advanced Encryption Standard).\n• **Asymmetric**: Relies on a Public/Private key pair. The Public key encrypts, only the matching Private key can decrypt. Slower, but solves the key exchange problem. \n  *Standard*: RSA, ECC.",
                        video: {
                            title: "Understanding Symmetric vs Asymmetric Encryption",
                            url: "https://www.loom.com/share/20c803acb79946ca91e9360f072a658e"
                        }
                    },
                    {
                        id: "pki",
                        title: "Public Key Infrastructure (PKI)",
                        summary: "The framework for managing digital certificates and public-key encryption.",
                        details: "PKI is what makes HTTPS and secure communication possible at scale.\n\n• **CA (Certificate Authority)**: The trusted third party that issues certificates.\n• **Certificate**: Binds a public key to an identity (like a website name).\n• **CRL (Certificate Revocation List)**: A list of certificates that are no longer valid.",
                        video: {
                            title: "Understanding Public Key Infrastructure and Trust Relationships",
                            url: "https://www.loom.com/share/37fa24a623fd460cafabb91e49a38a68"
                        }
                    },
                    {
                        id: "digital-signatures",
                        title: "Digital Signatures",
                        summary: "Provide authentication, non-repudiation, and integrity.",
                        details: "A digital signature is created by hashing the message and then encrypting the hash with your **Private Key**.\n\n• **Integrity**: Any change to the message will break the signature.\n• **Authentication**: Only the holder of the private key could have created it.\n• **Non-repudiation**: The sender cannot deny sending the message.",
                        video: {
                            title: "Understanding Digital Signatures: Integrity, Authentication, and Non-Repudiation",
                            url: "https://www.loom.com/share/26e7679b7401441b97d38fe91234bd80"
                        }
                    },
                    {
                        id: "data-transit-rest",
                        title: "Data in Transit vs. At Rest",
                        summary: "Protecting data while it moves across a network vs while it is stored.",
                        details: "• **Data At Rest**: Stored on a disk/database. \n  *Protection*: Full Disk Encryption (FDE), Database Encryption.\n• **Data In Transit**: Moving over a network. \n  *Protection*: TLS/SSL, IPsec, SSH.\n• **Data In Use**: Currently loaded in RAM/CPU. \n  *Protection*: Trusted Execution Environments (TEE).",
                        video: {
                            title: "Understanding Data Encryption: In Transit vs. At Rest 🔒",
                            url: "https://www.loom.com/share/8840e7a174da45b9bc3447ae27ab708b"
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "3.0",
        title: "Security Architecture",
        weight: 18,
        objectives: [
            {
                id: "3.1",
                domainId: "3.0",
                title: "Architecture Models",
                concepts: [
                    {
                        id: "dmz",
                        title: "DMZ & Screened Subnets",
                        summary: "A buffer zone that protects the internal network from untrusted traffic.",
                        details: "Formerly known as a DMZ (Demilitarized Zone), a **Screened Subnet** is a physical or logical subnetwork that contains and exposes an organization's external-facing services (like web servers) to an untrusted network, usually the internet.\n\n• **Purpose**: To add an additional layer of security to the local area network (LAN).\n• **Typical Layout**: A 'triple-homed' firewall or two firewalls (External and Internal).\n• **Common Services**: Web servers, Mail servers, FTP servers, DNS servers.\n\n*Real-world example*: If a web server in the screened subnet is compromised, the internal firewall still prevents the attacker from accessing the sensitive HR database in the internal network.",
                        video: {
                            title: "DMZs on the Security+ Exam (Why Screened Subnets Exist)",
                            url: "https://www.loom.com/share/bda47497716743c3af59548514c59509"
                        },
                        quizQuestions: [
                            {
                                id: "dmz-q1",
                                domainId: "1.0",
                                objectiveId: "3.1",
                                text: "Which term is now the preferred CompTIA term for a DMZ?",
                                options: [
                                    { id: "a", text: "Air Gap" },
                                    { id: "b", text: "VLAN" },
                                    { id: "c", text: "Screened Subnet" },
                                    { id: "d", text: "Honeypot" }
                                ],
                                correctOptionId: "c",
                                explanation: "CompTIA SY0-701 uses 'Screened Subnet' to refer to the architecture formerly known as a DMZ."
                            },
                            {
                                id: "dmz-q2",
                                domainId: "1.0",
                                objectiveId: "3.1",
                                text: "A security engineer is placing a public-facing web server in the network. Where is the most secure place for this server?",
                                options: [
                                    { id: "a", text: "In the internal Intranet" },
                                    { id: "b", text: "In a Screened Subnet" },
                                    { id: "c", text: "Directly on the public internet" },
                                    { id: "d", text: "In the Management VLAN" }
                                ],
                                correctOptionId: "b",
                                explanation: "Public-facing services should be isolated in a screened subnet to protect the internal network."
                            }
                        ]
                    },
                    {
                        id: "enterprise-arch",
                        title: "Enterprise Network Architecture",
                        summary: "High-level design of network infrastructure.",
                        details: "Enterprise architecture involves complex designs like hierarchical networking (Core, Distribution, Access layers) and Software-Defined Networking (SDN).\n\n• **Core Layer**: High-speed switching, backbone.\n• **Distribution Layer**: Policy-based connectivity, routing between VLANs.\n• **Access Layer**: End-host connectivity (switches, APs).",
                        video: {
                            title: "Enterprise Network Architecture (Security+ Big Picture)",
                            url: "https://www.loom.com/share/be68c935a9804178b44f487754fcc723"
                        }
                    }
                ]
            },
            {
                id: "3.2",
                domainId: "3.0",
                title: "Securing the Infrastructure",
                concepts: [
                    {
                        id: "security-appliances",
                        title: "Security Appliances",
                        summary: "Specialized devices used to protect the network.",
                        details: "Security appliances are purpose-built hardware or virtual machines that perform specific security functions.\n\n• **Firewall**: Filters traffic based on rules (IP, Port, State).\n• **IDS (Intrusion Detection System)**: Moniters and alerts on suspicious activity (Passive).\n• **IPS (Intrusion Prevention System)**: Detects and actively blocks threats (Active).\n• **Proxy Server**: Intercepts client requests to provide caching, filtering, or anonymity.",
                        video: {
                            title: "Security Appliances on Security+ (What Each One Actually Does)",
                            url: "https://www.loom.com/share/d8b88b04fb1b4485bcf88f33461a1a54"
                        },
                        quizQuestions: [
                            {
                                id: "app-q1",
                                domainId: "3.0",
                                objectiveId: "3.2",
                                text: "A device is configured to detect an ongoing SQL injection attack and immediately reset the TCP connection. What type of device is this?",
                                options: [
                                    { id: "a", text: "IDS" },
                                    { id: "b", text: "IPS" },
                                    { id: "c", text: "Proxy" },
                                    { id: "d", text: "Load Balancer" }
                                ],
                                correctOptionId: "b",
                                explanation: "An Intrusion Prevention System (IPS) not only detects but also actively blocks or mitigates threats."
                            }
                        ]
                    },
                    {
                        id: "router-security",
                        title: "Router Security",
                        summary: "Hardening routing devices and protocols.",
                        details: "Routers are the gateways of the network. Hardening them is critical to prevent unauthorized access and traffic redirection.\n\n• **Physical Security**: Prevent console port access.\n• **Secure Management**: Use SSH instead of Telnet; use HTTPS for web interfaces.\n• **ACLs (Access Control Lists)**: Filter traffic entering/leaving the router.\n• **Control Plane Policing**: Protect the router's CPU from overhead/DDoS.\n• **Routing Protocol Security**: Use MD5/SHA authentication for OSPF or BGP updates.",
                        video: {
                            title: "Router Security on the Security+ Exam (What They’re REALLY Testing)",
                            url: "https://www.loom.com/share/7a7850350249416e9fab1860b00fd0f8"
                        },
                        quizQuestions: [
                            {
                                id: "router-q1",
                                domainId: "3.0",
                                objectiveId: "3.2",
                                text: "A security administrator needs to manage a router remotely. Which protocol should be used for the most secure management connection?",
                                options: [
                                    { id: "a", text: "Telnet" },
                                    { id: "b", text: "HTTP" },
                                    { id: "c", text: "SSH" },
                                    { id: "d", text: "SNMPv1" }
                                ],
                                correctOptionId: "c",
                                explanation: "SSH provides encrypted remote management, whereas Telnet sends credentials in plain text."
                            }
                        ]
                    },
                    {
                        id: "remote-access",
                        title: "Remote Access Security",
                        summary: "VPNs, SSH, RDP security.",
                        details: "Providing secure access for remote workers is a primary focus of Security operations.\n\n• **VPN (Virtual Private Network)**: Creates an encrypted tunnel over the internet (Full-tunnel vs Split-tunnel).\n• **HTML5 VPN**: Clientless VPN using a web browser.\n• **Jump Server**: A secure transit server used to manage devices in a high-security zone.\n• **Always-On VPN**: Automatically connects when the device is outside the corporate network.",
                        video: {
                            title: "Remote Access Explained (Security+ Exam)",
                            url: "https://www.loom.com/share/a1b88463d44949098705184415899f58"
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "4.0",
        title: "Security Operations",
        weight: 28,
        objectives: [
            {
                id: "4.1",
                domainId: "4.0",
                title: "Identity Management Implementation",
                concepts: [
                    {
                        id: "linux-users",
                        title: "Linux User Management",
                        summary: "Understanding root, sudo, and user permissions.",
                        details: "Linux security revolves around accounting and permissions.\n\n• **Root User**: The superuser with unlimited power (UID 0). Always limit its use.\n• **Sudo**: Allows a regular user to execute commands as the superuser (Logged/Audited).\n• **Standard Users**: Have a home directory and limited access to system files.",
                        video: {
                            title: "Linux Users Explained for Security+ (Why Root Is Dangerous)",
                            url: "https://www.loom.com/share/ad29091311ad466ba6628209ffd5a858"
                        },
                        quizQuestions: [
                            {
                                id: "linux-q1",
                                domainId: "4.0",
                                objectiveId: "4.1",
                                text: "Which command in Linux allows a standard user to run a single command with administrative privileges?",
                                options: [
                                    { id: "a", text: "su" },
                                    { id: "b", text: "sudo" },
                                    { id: "c", text: "root" },
                                    { id: "d", text: "admin" }
                                ],
                                correctOptionId: "b",
                                explanation: "sudo (superuser do) is the preferred way to execute admin tasks without logging in as root."
                            }
                        ]
                    },
                    {
                        id: "linux-groups",
                        title: "Linux Groups & RBAC",
                        summary: "Using groups to implement Role-Based Access Control.",
                        details: "Groups simplify administration by allowing permissions to be assigned to multiple users at once.\n\n• **/etc/group**: The file where group definitions are stored.\n• **Primary Group**: The user's main group.\n• **Secondary Groups**: Additional groups for access to specific files or devices.",
                        video: {
                            title: "Linux Groups = RBAC (Security+ Connection People Miss)",
                            url: "https://www.loom.com/share/d5e3719be22445f7ae34eb85d44fc67b"
                        }
                    },
                    {
                        id: "active-directory",
                        title: "Active Directory (AD)",
                        summary: "Microsoft's directory service for Windows domain networks.",
                        details: "Active Directory is the industry standard for centralized identity management in Windows environments.\n\n• **Domain Controller (DC)**: The server that responds to security authentication requests.\n• **Group Policy (GPO)**: Used to push security settings (like screen lock timers) to thousands of computers simultaneously.\n• **LDAP**: The protocol used to query and modify directory services.",
                        video: {
                            title: "Active Directory — What It Actually Does",
                            url: "https://www.loom.com/share/fc24f82855e24a2f9e48c3a7334eaf68"
                        }
                    }
                ]
            }
        ]
    }
];
