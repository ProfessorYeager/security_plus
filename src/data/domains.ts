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
                        details: `### Concept Breakdown
The **CIA Triad** is the foundational model for information security. It represents the three main goals that every security control tries to achieve.

*   **Confidentiality (C)**: Ensuring that data is only accessed by authorized personnel.
*   **Integrity (I)**: Ensuring that data has not been tampered with or altered.
*   **Availability (A)**: Ensuring that systems and data are accessible when needed.

### Real-World Application
*   **Confidentiality**: A hospital encrypts patient records so that hackers cannot read them if they steal the hard drive.
*   **Integrity**: A software developer signs their code with a digital signature so users know the installer hasn't been infected with malware.
*   **Availability**: Amazon uses a Content Delivery Network (CDN) to ensure their website loads fast and stays online even during Black Friday traffic spikes.

### Non-Technical Analogy
Think of your **bank account**:
*   **Confidentiality**: Only *you* know your PIN. If everyone knew it, your money wouldn't be safe.
*   **Integrity**: When you deposit $100, the balance goes up by exactly $100. If it went up by $10 or $1000 randomly, you couldn't trust the bank.
*   **Availability**: You can withdraw cash from an ATM 24/7. If the ATM is always broken, the bank is useless to you.

### 🛡️ Exam Tip
If a question mentions "encryption" or "access controls," it's usually **Confidentiality**. If it mentions "hashing" or "digital signatures," it's **Integrity**. If it mentions "redundancy," "backups," or "RAID," it's **Availability**.`,
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
                        details: `### Concept Breakdown
These two terms are often used interchangeably by laypeople, but they mean very different things in security.

*   **Authentication (AuthN)**: The process of verifying *who you are*.
*   **Authorization (AuthZ)**: The process of determining *what you are allowed to do*.

### Real-World Application
*   **Authentication**: Logging into your work computer with a smart card and PIN. The system checks its database to confirm "Yes, this is Alice."
*   **Authorization**: Once Alice is logged in, the active directory settings determine that she can access the "Sales" folder but is blocked from the "HR" folder.

### Non-Technical Analogy
Think of **boarding a plane**:
*   **Authentication**: The TSA agent checks your ID and boarding pass at the security checkpoint. They are verifying *who you are* and that you are allowed in the terminal.
*   **Authorization**: Walking onto the plane and finding your seat. Your ticket *authorizes* you to sit significantly in Seat 12A (Economy). It does *not* authorize you to sit in Seat 1A (First Class) or fly the plane (Cockpit).

### 🛡️ Exam Tip
Start with **Authentication** (Who are you?), then move to **Authorization** (What can you do?). You cannot authorize someone until you know who they are.`,
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
                        details: `### Concept Breakdown
The **AAA Framework** is the architectural model for managing network access control.

1.  **Authentication**: Verifying the user's identity. ("Who are you?")
2.  **Authorization**: Determining what the user can do. ("What are you allowed to access?")
3.  **Accounting**: Tracking what the user did. ("What did you do, and when?")

### Real-World Application
*   **Scenario**: A remote employee connects to the corporate VPN.
    *   **AuthN**: They enter their username/password and MFA code. The RADIUS server confirms their identity.
    *   **AuthZ**: Based on their group membership (e.g., "Contractors"), the firewall assigns them a dynamic ACL that restricts them to only the Email server.
    *   **Accounting**: The system logs: "User J.Smith connected at 09:00 AM, transferred 50MB of data, and disconnected at 05:00 PM."

### Non-Technical Analogy
Think of using a **Credit Card**:
*   **Authentication**: Putting your card in the chip reader and entering your PIN. You are proving you own the account.
*   **Authorization**: The bank computer checks if you have enough money (credit limit) to complete the purchase. Ideally, it *authorizes* or *declines* the transaction.
*   **Accounting**: The transaction appears on your monthly statement. It logs the Date, Time, Merchant, and Amount.

### 🛡️ Exam Tip
Don't forget **Accounting**! Security isn't just about letting people in (AuthN/AuthZ); it's about being able to prove *who* did *what* later (Non-repudiation and Auditing).`,
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
                        details: `### Concept Breakdown
The **Principle of Least Privilege (PoLP)** states that users and systems should have *only* the minimum level of access necessary to perform their job functions—and no more.

### Real-World Application
*   **System Administration**: A web server process (like Apache or Nginx) should run as a low-privilege 'www-data' user, NOT as 'root'. If the web server is hacked, the attacker is trapped in that low-level account.
*   **Employee Access**: A new Sales Associate should only have access to the CRM software. They should *not* have access to the Finance Department's payroll folders.

### Non-Technical Analogy
Think of a **Valet Key** for a fancy car:
*   The valet key allows the parking attendant to unlock the door and start the engine to park the car.
*   It does **not** allow them to open the glovebox, trunk, or drive above 25 MPH.
*   They have the *least privilege* needed to park the car, but not enough to steal your valuables or joyride.

### 🛡️ Exam Tip
Least Privilege is a preventative control. It doesn't stop an attack from happening, but it drastically limits the "blast radius" (the damage) if an account is compromised.`,
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
                        details: `### Concept Breakdown
MFA requires a user to present two or more *different types* of credentials to verify their identity. It is exponentially more secure than a password alone.

### The Categories (Factors)
1.  **Something you Know**: Password, PIN, Mother's maiden name.
2.  **Something you Have**: Smart card, USB token, Smartphone (Authenticator App).
3.  **Something you Are**: Fingerprint, Retina scan, Face ID (Biometrics).
4.  **Somewhere you Are**: GPS location, IP address subnet.
5.  **Something you Do**: Typing cadence, gait analysis (Behavioral).

### Real-World Application
*   **Logging into your Bank**: You type your Password (Know) and then receive a 6-digit code via SMS on your Phone (Have).
*   **Secure Facility Access**: You swipe your Badge (Have) and then scan your Fingerprint (Are).

### Non-Technical Analogy
Think of a **medieval castle gate**:
*   To enter, you must know the **Passcode** (Something you know).
*   BUT, the guard also demands to see the **King's Signet Ring** (Something you have).
*   If you stole the password but don't have the ring, the gate stays closed.

### 🛡️ Exam Tip
**Two passwords are NOT MFA.** If a system asks for a Password and a PIN, that is "Two-Step Authentication" but NOT Multi-Factor, because both are "Something you Know."`,
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
                        details: `### Concept Breakdown
SSO allows a user to authenticate once and gain access to multiple applications without having to log in again for each one.

*   **Technologies**: SAML, OIDC, Kerberos.
*   **Benefits**: Better user experience (fewer passwords to remember), fewer helpdesk calls for password resets.

### Real-World Application
*   **Google Workspace**: You log in to Gmail once. Then, when you open Drive, Calendar, and YouTube, you are already logged in. You don't type your password 4 times.

### Non-Technical Analogy
Think of a **Theme Park Wristband (Disney MagicBand)**:
*   You confirm your ID *once* at the resort entrance and get a wristband.
*   For the rest of the day, you rely on that wristband to enter the park, open your hotel room, and buy lunch. You don't show your ID card at every single ride.

### 🛡️ Exam Tip
**The Catch**: SSO is convenient but creates a **Single Point of Failure**. If an attacker steals your SSO credentials (your wristband), they have access to *everything* linked to that account.`,
                        video: {
                            title: "Single Sign-On (SSO) — Convenience with a Price",
                            url: "https://www.loom.com/share/585f5f2be0e04addb37a2d30d178d88d"
                        },
                        quizQuestions: [
                            {
                                id: "sso-q1",
                                domainId: "1.0",
                                objectiveId: "1.3",
                                type: "MULTIPLE_CHOICE",
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
                        details: `### Concept Breakdown
Two fundamental cryptographic operations that do opposite things.

*   **Hashing**: A **one-way** function. You turn data into a fixed-length string of characters (a hash). You *cannot* reverse it to get the original data back. Used for **Integrity**.
*   **Encryption**: A **two-way** function. You scramble data with a key. You *can* decrypt it to get the original data back if you have the key. Used for **Confidentiality**.

### Real-World Application
*   **Hashing**: Storing passwords in a database. The database stores the hash of your password, not the password itself. When you log in, the system hashes your input and compares it to the stored hash.
*   **Encryption**: Sending a credit card number over the internet. It is encrypted so that if anyone intercepts the traffic, they only see garbage data.

### Non-Technical Analogy
*   **Hashing**: **Turning a cow into a hamburger**. You can turn the cow into a burger (one-way), but you cannot turn the burger back into a cow.
*   **Encryption**: **Putting a letter in a safe**. You lock the safe (encrypt). Anyone with the key (decrypt) can open it and read the letter again.

### 🛡️ Exam Tip
*   **Hash** = **Integrity** (Did the file change?)
*   **Encryption** = **Confidentiality** (Can unauthorized people read it?)`,
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
                        details: `### Concept Breakdown
*   **Symmetric Encryption**: Uses the **SAME key** to encrypt and decrypt.
    *   *Pros*: Very fast, efficient for large data.
    *   *Cons*: How do you share the key securely? (Key Exchange Problem).
    *   *Examples*: AES, DES, 3DES, RC4.
*   **Asymmetric Encryption**: Uses a **Key Pair** (Public Key + Private Key).
    *   *Public Key*: Encrypts data (Shared with everyone).
    *   *Private Key*: Decrypts data (Kept secret by owner).
    *   *Pros*: Solves the key exchange problem.
    *   *Cons*: Slow and computationally expensive.
    *   *Examples*: RSA, ECC, Diffie-Hellman, PGP.

### Real-World Application
Specific "Hybrid" approach: When you visit a secure website (HTTPS), your browser uses **Asymmetric** encryption to securely swap a **Symmetric** key. Then, it uses that Symmetric key for the rest of the session because it's faster.

### Non-Technical Analogy
*   **Symmetric**: A **House Key**. You have a copy, your spouse has a copy. Both keys lock and unlock the door. If you lose a key, you have to change the locks.
*   **Asymmetric**: A **Mailbox**. Anyone can drop a letter in the slot (Public Key encrypts), but only the mail carrier with the master key can open the box and take the letters out (Private Key decrypts).

### 🛡️ Exam Tip
*   Need speed/bulk encryption? Use **Symmetric** (AES).
*   Need to share keys securely? Use **Asymmetric** (RSA).`,
                        video: {
                            title: "Understanding Symmetric vs Asymmetric Encryption",
                            url: "https://www.loom.com/share/20c803acb79946ca91e9360f072a658e"
                        }
                    },
                    {
                        id: "pki",
                        title: "Public Key Infrastructure (PKI)",
                        summary: "The framework for managing digital certificates and public-key encryption.",
                        details: `### Concept Breakdown
PKI is the system of hardware, software, and policies that manages the creation, distribution, and revocation of Digital Certificates. It establishes **Trust** on the internet.

*   **CA (Certificate Authority)**: The "Server of Trust". It issues certificates (e.g., VeriSign, Let's Encrypt).
*   **Certificate**: A digital ID card that binds a Public Key to an Identity (like "google.com").
*   **CRL (Certificate Revocation List)**: A "No Fly List" for certificates that have been stolen or expired.

### Real-World Application
When you see the **padlock icon** in your browser, PKI is working. Your browser checks the website's certificate. It sees that the certificate was signed by a trusted CA. Therefore, it trusts the website.

### Non-Technical Analogy
Think of a **Passport**:
*   **You** are the web server.
*   **The Passport** is the Digital Certificate.
*   **The Government** is the Certificate Authority (CA).
*   When you travel, customs agents trust your passport because they trust the Government that issued it, not because they know you personally.

### 🛡️ Exam Tip
If a question asks "What binds a public key to a user identity?", the answer is a **Digital Certificate**.`,
                        video: {
                            title: "Understanding Public Key Infrastructure and Trust Relationships",
                            url: "https://www.loom.com/share/37fa24a623fd460cafabb91e49a38a68"
                        }
                    },
                    {
                        id: "digital-signatures",
                        title: "Digital Signatures",
                        summary: "Provide authentication, non-repudiation, and integrity.",
                        details: `### Concept Breakdown
A mathematical scheme for demonstrating the authenticity of a digital message or document.

*   **How it works**:
    1.  Sender HASHES the data.
    2.  Sender ENCRYPTS the hash with their **PRIVATE KEY**.
    3.  Receiver DECRYPTS with Sender's **PUBLIC KEY**.
    4.  Receiver compares the hashes.

### The "Big Three" Benefits
1.  **Authentication**: Proof of who sent it.
2.  **Integrity**: Proof it wasn't changed.
3.  **Non-Repudiation**: The sender cannot deny sending it (because only they have their private key).

### Real-World Application
**DocuSign**: When you electronically sign a contract, cryptographic checks ensure that the document hasn't been altered since you signed it and proving that *you* were the one who signed it.

### Non-Technical Analogy
A **Wax Seal** on a letter from a King:
*   The unique crest proves it came from the King (**Authentication**).
*   If the seal is broken or smudged, you know someone tampered with it (**Integrity**).
*   The King cannot claim he didn't write it, because only he has the ring that makes that seal (**Non-Repudiation**).

### 🛡️ Exam Tip
Digital Signatures provide **Integrity** and **Non-Repudiation**. They do *not* provide Confidentiality (the message itself is usually visible, just the signature is encrypted).`,
                        video: {
                            title: "Understanding Digital Signatures: Integrity, Authentication, and Non-Repudiation",
                            url: "https://www.loom.com/share/26e7679b7401441b97d38fe91234bd80"
                        }
                    },
                    {
                        id: "data-transit-rest",
                        title: "Data in Transit vs. At Rest",
                        summary: "Protecting data while it moves across a network vs while it is stored.",
                        details: `### Concept Breakdown
Data exists in three states, and each needs different protection methods.

1.  **Data at Rest**: Passive data stored on physical media.
    *   *Risk*: Physical theft of the drive.
    *   *Protection*: Full Disk Encryption (BitLocker, FileVault), USB Encryption.
2.  **Data in Transit (Motion)**: Data traveling over a network (wired or wireless).
    *   *Risk*: Interception (Sniffing), Man-in-the-Middle attacks.
    *   *Protection*: TLS/SSL (HTTPS), IPsec (VPN), SSH.
3.  **Data in Use**: Data currently in RAM or CPU caches being processed.
    *   *Risk*: Memory scraping, malware.
    *   *Protection*: Trusted Execution Environments (TEE), Homomorphic Encryption.

### Non-Technical Analogy
*   **At Rest**: Money in a **Vault**. (Needs thick walls and a lock).
*   **In Transit**: Money in an **Armored Truck**. (Needs guards and bulletproof glass).
*   **In Use**: Money in your **Hands** at the register. (Hardest to protect, you just have to be careful).

### 🛡️ Exam Tip
*   **VPN** protects Data in **Transit**.
*   **BitLocker** protects Data **At Rest**.`,
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
        id: "2.0",
        title: "Threats, Vulnerabilities, and Mitigations",
        weight: 22,
        objectives: [
            {
                id: "2.1",
                domainId: "2.0",
                title: "Threat Actors",
                concepts: [
                    {
                        id: "apt",
                        title: "Advanced Persistent Threat (APT)",
                        summary: "Highly skilled, well-funded attackers (usually Nation-States).",
                        details: `### Concept Breakdown
An **APT** is the highest tier of threat actor. They have:
*   **Advanced** tools (Zero-day exploits).
*   **Persistent** presence (They stay in your network for months/years).
*   **Threat** (Specific goals: Espionage, Sabotage).

### Real-World Application
*   **Stuxnet**: Malware created by US/Israel to sabotage Iranian nuclear centrifuges.
*   **SolarWinds Hack**: Russian spies compromised a software update to infiltrate US government agencies.

### Non-Technical Analogy
**The Professional Heist Crew (Ocean's 11)**:
*   They plan for months.
*   They have unlimited budget and specialized gear.
*   They don't just smash a window; they bypass the alarm, loop the cameras, and walk out quietly.

### 🛡️ Exam Tip
If the exam mentions **"Nation-State"**, **"Government"**, or **"Well-Funded"**, the answer is **APT**.`,
                        video: {
                            title: "Threat Actors Explained: APTs vs Script Kiddies",
                            url: "https://www.loom.com/share/apt-vs-skiddie-placeholder"
                        },
                        quizQuestions: [
                            {
                                id: "apt-q1",
                                domainId: "2.0",
                                objectiveId: "2.1",
                                text: "Which type of threat actor is characterized by having significant resources and the intent to conduct espionage?",
                                options: [
                                    { id: "a", text: "Script Kiddie" },
                                    { id: "b", text: "Insider Threat" },
                                    { id: "c", text: "APT (Advanced Persistent Threat)" },
                                    { id: "d", text: "Hacktivist" }
                                ],
                                correctOptionId: "c",
                                explanation: "APTs are typically nation-state actors with the resources to conduct long-term espionage campaigns."
                            }
                        ]
                    },
                    {
                        id: "script-kiddie",
                        title: "Script Kiddie",
                        summary: "Unskilled attackers who use tools created by others.",
                        details: `### Concept Breakdown
A **Script Kiddie** has little to no coding knowledge. They download attack tools (scripts) from the dark web and point them at targets just to see what happens.
*   **Motivation**: Clout, bragging rights, boredom.
*   **Danger**: Still dangerous! A kid with a loaded gun is still a threat, even if they don't know how the gun works.

### Real-World Application
A teenager downloading "Low Orbit Ion Cannon" (LOIC) to DDoS their school's website because they don't want to take a test.

### Non-Technical Analogy
**Graffiti Artist**:
*   They buy a spray can (tool) from a store.
*   They tag a wall to show off to their friends.
*   They didn't invent the paint or the wall, they just use it to make a mess.

### 🛡️ Exam Tip
**"Low technical knowledge"** or **"Uses existing tools"** = **Script Kiddie**.`,
                        video: null
                    },
                    {
                        id: "insider-threat",
                        title: "Insider Threat",
                        summary: "Current or former employees with authorized access.",
                        details: `### Concept Breakdown
The most dangerous threat often comes from *inside* the house.
*   **Malicious Insider**: Disgruntled employee stealing data before quitting.
*   **Negligent Insider**: Employee who accidentally clicks a phishing link (Most Common).

### Real-World Application
A salesperson downloading the entire client database to a USB drive before leaving to work for a competitor.

### Non-Technical Analogy
**The Butler**:
*   You have locks on all the doors to keep thieves out.
*   But the **Butler** has the keys. If the Butler decides to steal the silverware, your locks are useless.

### 🛡️ Exam Tip
**Background Checks** and **Least Privilege** are the best defenses against Insider Threats.`,
                        video: null
                    }
                ]
            },
            {
                id: "2.2",
                domainId: "2.0",
                title: "Social Engineering",
                concepts: [
                    {
                        id: "phishing",
                        title: "Phishing & Variations",
                        summary: "Deceptive attempts to get sensitive information (Passwords, Credit Cards).",
                        details: `### Concept Breakdown
Attacking the **Human**, not the computer.
*   **Phishing**: Generic email spray (".", "Dear Customer").
*   **Spear Phishing**: Targeted at a specific person ("Hi Gabriel, see attached invoice").
*   **Whaling**: Targeting a "Big Fish" (CEO/CFO).
*   **Vishing**: Voice Phishing (Phone calls).
*   **Smishing**: SMS Phishing (Text messages).

### Real-World Application
You get an email saying "Your Netflix account is suspended. Click here to update payment." The link goes to \`netf1ix-support.com\`.

### Non-Technical Analogy
**Fishing with a Net vs. a Spear**:
*   **Phishing**: Casting a wide net. You catch a lot of tuna, but also some old boots.
*   **Spear Phishing**: Hunting one specific fish. You study its habits and strike precisely.

### 🛡️ Exam Tip
*   **Voice** = **Vishing**.
*   **SMS/Text** = **Smishing**.
*   **CEO/Executive** = **Whaling**.`,
                        video: {
                            title: "Social Engineering Types Explained (Phishing vs Spear Phishing vs Whaling)",
                            url: "https://www.loom.com/share/social-engineering-placeholder"
                        }
                    }
                ]
            },
            {
                id: "2.3",
                domainId: "2.0",
                title: "Types of Malware",
                concepts: [
                    {
                        id: "ransomware",
                        title: "Ransomware",
                        summary: "Encrypts files and demands payment for the decryption key.",
                        details: `### Concept Breakdown
Malware that denies access to your own data until you pay a fee (usually crypto).
*   **Encryption**: It uses strong encryption (AES/RSA) against you.
*   **Extortion**: "Pay us 5 BTC or you lose your photos forever."

### Real-World Application
**WannaCry (2017)**: Infected thousands of hospital computers in the UK, forcing them to turn away patients.

### Non-Technical Analogy
**Digital Kidnapping**:
*   The kidnapper locks your child (Data) in a room.
*   They send you a note: "Pay up or you never see them again."
*   (Note: Even if you pay, you might not get them back!)

### 🛡️ Exam Tip
The best defense against Ransomware is **Offline Backups**. If you have a backup, you don't need to pay the ransom.`,
                        video: null
                    },
                    {
                        id: "trojan",
                        title: "Trojan",
                        summary: "Malware disguised as legitimate software.",
                        details: `### Concept Breakdown
A program that looks helpful but contains a malicious payload.
*   It does **not** self-replicate (unlike a Virus or Worm).
*   It relies on the **user** to install it.

### Real-World Application
You download a "Free Minecraft Crack" tool. It runs the game, but in the background, it installs a Keylogger that steals your passwords.

### Non-Technical Analogy
**The Trojan Horse (Greek Myth)**:
*   The Greeks hid inside a giant wooden horse.
*   The Trojans thought it was a gift and dragged it inside their city walls.
*   Once inside, the Greeks jumped out and attacked.

### 🛡️ Exam Tip
**Trojans** rely on **Social Engineering** (tricking the user) to get installed.`,
                        video: null
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
            },
            {
                id: "3.3",
                domainId: "3.0",
                title: "Virtualization & Cloud Computing",
                concepts: [
                    {
                        id: "hypervisors",
                        title: "Hypervisors (Type 1 vs. Type 2)",
                        summary: "Software that creates and runs virtual machines (VMs).",
                        details: `### Concept Breakdown
A **Hypervisor** (or VMM - Virtual Machine Monitor) is the software layer that allows you to run multiple operating systems on a single physical computer.

*   **Type 1 (Bare Metal)**: Installs directly on the hardware. No host OS needed.
    *   *Usage*: Enterprise servers, Data Centers.
    *   *Examples*: VMware ESXi, Microsoft Hyper-V.
*   **Type 2 (Hosted)**: Installs as an application on top of a regular OS (Windows/Mac).
    *   *Usage*: Developers, Students, Home labs.
    *   *Examples*: Oracle VirtualBox, VMware Workstation.

### Real-World Application
*   **Type 1**: AWS and Azure run their massive clouds on Type 1 hypervisors because they are faster and more secure.
*   **Type 2**: You want to test Linux on your MacBook without erasing MacOS? You install VirtualBox (Type 2).

### Non-Technical Analogy
*   **Type 1**: A **Race Car Driver**. The driver sits directly in the car (hardware) for maximum performance.
*   **Type 2**: A **Backseat Driver**. They have to shout instructions to the person driving (the Host OS), who then controls the car. It works, but there's a delay.

### 🛡️ Exam Tip
*   **Type 1** = **Bare Metal** (Faster, Secure, Enterprise).
*   **Type 2** = **Hosted** (Easier, Slower, Desktop).`,
                        video: {
                            title: "Type 1 vs Type 2 Hypervisors in 2 Minutes",
                            url: "https://www.loom.com/share/hypervisor-explainer-placeholder"
                        },
                        quizQuestions: [
                            {
                                id: "hyp-q1",
                                domainId: "3.0",
                                objectiveId: "3.3",
                                text: "Which type of hypervisor runs directly on the system hardware without a host operating system?",
                                options: [
                                    { id: "a", text: "Type 1" },
                                    { id: "b", text: "Type 2" },
                                    { id: "c", text: "Container" },
                                    { id: "d", text: "Application cell" }
                                ],
                                correctOptionId: "a",
                                explanation: "Type 1 (Bare Metal) hypervisors run directly on hardware for better performance and security."
                            }
                        ]
                    },
                    {
                        id: "cloud-models",
                        title: "Cloud Service Models (SPI)",
                        summary: "SaaS, PaaS, and IaaS determine who manages what.",
                        details: `### Concept Breakdown
The "SPI" model describes the three main tiers of cloud computing.

*   **SaaS (Software as a Service)**: You use the software. You manage **nothing**.
    *   *Examples*: Gmail, Salesforce, Dropbox, Office 365.
*   **PaaS (Platform as a Service)**: You manage the **App & Data**. The provider manages the OS and hardware.
    *   *Examples*: Google App Engine, Heroku, AWS Elastic Beanstalk.
*   **IaaS (Infrastructure as a Service)**: You manage the **OS, App, & Data**. The provider only manages the hardware/network.
    *   *Examples*: AWS EC2, Azure VMs, Google Compute Engine.

### Real-World Application
*   **SaaS**: Using Google Docs to write a report. You don't care what server it's on or what version of Linux it runs.
*   **IaaS**: Renting a virtual server to host a custom legacy database. You have to install Windows updates yourself.

### Non-Technical Analogy
**Pizza as a Service**:
*   **House (On-Prem)**: You make the dough, buy ingredients, bake it, and eat it at your table.
*   **IaaS (Take & Bake)**: You buy the pre-made pizza, but you bake it in your own oven and provide the table.
*   **PaaS (Delivery)**: The pizza comes hot. You just need a table/plates to eat it.
*   **SaaS (Dining Out)**: You go to the restaurant. They cook, serve, and clean up. You just eat.

### 🛡️ Exam Tip
*   **SaaS**: End-user software.
*   **PaaS**: For Developers (code).
*   **IaaS**: For SysAdmins (servers).`,
                        video: {
                            title: "Cloud Service Models (IaaS, PaaS, SaaS) Clearly Explained",
                            url: "https://www.loom.com/share/cloud-models-placeholder"
                        },
                        quizQuestions: [
                            {
                                id: "cloud-q1",
                                domainId: "3.0",
                                objectiveId: "3.3",
                                text: "A developer wants to deploy code without worrying about managing the underlying operating system security patches. Which cloud model is best?",
                                options: [
                                    { id: "a", text: "IaaS" },
                                    { id: "b", text: "PaaS" },
                                    { id: "c", text: "SaaS" },
                                    { id: "d", text: "DaaS" }
                                ],
                                correctOptionId: "b",
                                explanation: "PaaS (Platform as a Service) manages the OS and runtime, allowing developers to focus solely on their code."
                            }
                        ]
                    },
                    {
                        id: "cloud-deployment",
                        title: "Cloud Deployment Models",
                        summary: "Public, Private, Community, and Hybrid clouds.",
                        details: `### Concept Breakdown
Who owns the cloud hardware and who can access it?

*   **Public Cloud**: Owned by a third-party (AWS, Azure). usage is shared by multiple customers ("Multi-tenancy").
*   **Private Cloud**: Hardware is dedicated to a *single* organization. Can be on-premise or hosted.
*   **Community Cloud**: Shared by several organizations with similar concerns (e.g., a cloud for all hospitals in a state).
*   **Hybrid Cloud**: A mix of Public and Private. You keep secrets on your Private cloud but "burst" to Public cloud for extra power.

### Non-Technical Analogy
**Transportation**:
*   **Public Cloud**: **A Bus**. Cheap, shared with strangers, follows a set route.
*   **Private Cloud**: **Your Own Car**. Expensive, private, you go where you want.
*   **Hybrid Cloud**: **Renting a Car**. You own a bike (Private) but rent a Minivan (Public) when you need to move a couch.

### 🛡️ Exam Tip
**Multi-tenancy** (sharing hardware with strangers) is the biggest security concern with **Public Cloud**.`,
                        video: null,
                        quizQuestions: [
                            {
                                id: "deploy-q1",
                                domainId: "3.0",
                                objectiveId: "3.3",
                                text: "Which cloud deployment model involves infrastructure shared by several organizations with shared concerns?",
                                options: [
                                    { id: "a", text: "Public" },
                                    { id: "b", text: "Private" },
                                    { id: "c", text: "Hybrid" },
                                    { id: "d", text: "Community" }
                                ],
                                correctOptionId: "d",
                                explanation: "A Community Cloud is shared by a specific community of organizations that have shared concerns (e.g., compliance, security requirements)."
                            }
                        ]
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
                        details: `### Concept Breakdown
Linux security revolves around accounting (who you are) and permissions (what you can do).

*   **Root User (UID 0)**: The superuser with unlimited power. Can read any file, stop any service, and destroy the system.
*   **Standard Users (UID 1000+)**: Have specific permissions. Can only write to their own home directory (e.g., \`/home/alice\`).
*   **Service Accounts**: Used by applications (like a web server) to run in the background. They usually cannot log in interactively.

### Real-World Application
You never log in as **root** for daily tasks. You log in as a standard user (e.g., "gabriel") and use \`sudo\` (SuperUser DO) to execute specific administrative commands when needed. This creates an audit trail ('/var/log/auth.log' shows who did what).

### Non-Technical Analogy
**The Hotel Master Key**:
*   **Root**: The **General Manager** with a Master Key that opens every single room and safe in the hotel.
*   **Standard User**: A **Guest**. Your key only opens your specific room (\`/home/guest\`).
*   **Sudo**: Calling the front desk to ask them to open the gym for you. They verify who you are, then do it for you.

### 🛡️ Exam Tip
**UID 0** is always **Root**. If you see a generic account with UID 0, it's a backdoor.`,
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
                        details: `### Concept Breakdown
Managing permissions for every single user individually is a nightmare. **Groups** allow you to assign permissions to a collection of users at once (Role-Based Access Control - RBAC).

*   **/etc/group**: The file where group definitions are stored.
*   **Primary Group**: Assigned when the user is created (usually same as username).
*   **Secondary Groups**: Added permissions (e.g., adding a user to the \`docker\` group to manage containers).

### Real-World Application
In a company, you create a group called \`HR_Managers\`. You give that group read/write access to the \`/srv/personnel_files\` directory. When you hire a new HR manager, you just add them to the \`HR_Managers\` group. You don't touch the file permissions.

### Non-Technical Analogy
**VIP Wristbands**:
*   The club bouncer (Operating System) doesn't know every person's name.
*   They just look for the **VIP Wristband** (Group).
*   If you have the wristband, you get into the VIP lounge (Access to Directory). It doesn't matter who you are, just what group you are in.

### 🛡️ Exam Tip
**RBAC** (Role-Based Access Control) is almost always implemented using **Groups**.`,
                        video: {
                            title: "Linux Groups = RBAC (Security+ Connection People Miss)",
                            url: "https://www.loom.com/share/d5e3719be22445f7ae34eb85d44fc67b"
                        },
                        quizQuestions: [
                            {
                                id: "grp-q1",
                                domainId: "4.0",
                                objectiveId: "4.1",
                                text: "A system administrator wants to give the Sales team access to a shared directory without modifying permissions for each user. What should they use?",
                                options: [
                                    { id: "a", text: "DAC" },
                                    { id: "b", text: "MAC" },
                                    { id: "c", text: "Groups" },
                                    { id: "d", text: "Sudo" }
                                ],
                                correctOptionId: "c",
                                explanation: "Groups allow for efficient permission management by assigning rights to a role rather than individuals."
                            }
                        ]
                    },
                    {
                        id: "active-directory",
                        title: "Active Directory (AD)",
                        summary: "Microsoft's directory service for Windows domain networks.",
                        details: `### Concept Breakdown
**Active Directory (AD)** is the heart of most corporate networks. It is a database that stores everything: Users, Computers, Printers, and Policies.

*   **Domain Controller (DC)**: The server that holds the database and authenticates users (Kerberos).
*   **Group Policy Objects (GPO)**: Rules pushed to all computers (e.g., "Disable USB drives", "Force Wallpapers").
*   **Organizational Units (OU)**: Folders to organize objects (e.g., "Sales", "Engineering").

### Real-World Application
When you change your password on your work laptop, you are talking to the **Domain Controller**. That new password now works for your email, your VPN, and the Wi-Fi. This is **Centralized Authentication**.

### Non-Technical Analogy
**The Phone Book + Rule Book**:
*   **AD is a Phone Book**: It lists everyone's number (User Accounts).
*   **AD is a Rule Book**: It tells everyone what they are allowed to do (Group Policy).
*   **Domain Controller**: The Librarian who guards the books.

### 🛡️ Exam Tip
*   **GPO** = **Configuration Management** (Enforcing settings on many computers).
*   **Kerberos** = The default authentication protocol for Active Directory.`,
                        video: {
                            title: "Active Directory — What It Actually Does",
                            url: "https://www.loom.com/share/fc24f82855e24a2f9e48c3a7334eaf68"
                        },
                        quizQuestions: [
                            {
                                id: "ad-q1",
                                domainId: "4.0",
                                objectiveId: "4.1",
                                text: "Which component of Active Directory is used to enforce security settings, such as password complexity, across multiple computers?",
                                options: [
                                    { id: "a", text: "LDAP" },
                                    { id: "b", text: "Kerberos" },
                                    { id: "c", text: "Group Policy" },
                                    { id: "d", text: "Domain Controller" }
                                ],
                                correctOptionId: "c",
                                explanation: "Group Policy Objects (GPO) are used to deploy and enforce configuration settings to users and computers in the domain."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "5.0",
        title: "Governance, Risk, and Compliance",
        weight: 14,
        objectives: [
            {
                id: "5.1",
                domainId: "5.0",
                title: "Risk Management",
                concepts: [
                    {
                        id: "risk-types",
                        title: "Qualitative vs. Quantitative Risk",
                        summary: "Measuring risk with intuition vs. numbers.",
                        details: `### Concept Breakdown
How do you measure how "bad" a risk is?

*   **Qualitative Risk Analysis**: Subjective. Uses **colors** (Red/Yellow/Green) or **words** (High/Medium/Low).
    *   *Best for*: Quick triage, prioritizing what to focus on first.
*   **Quantitative Risk Analysis**: Objective. Uses **numbers** and **dollars**.
    *   *Formula*: **SLE** (Single Loss Expectancy) x **ARO** (Annual Rate of Occurrence) = **ALE** (Annual Loss Expectancy).
    *   *Best for*: Justifying budgets (e.g., "This tool costs $5k but saves $50k/year").

### Real-World Application
*   **Qualitative**: "The server crashing would be **Catastrophic** for our reputation."
*   **Quantitative**: "If the server crashes, we lose **$10,000 per hour** in sales."

### Non-Technical Analogy
**Weather Forecast**:
*   **Qualitative**: "It's going to clear up later." (Vague, feeling-based).
*   **Quantitative**: "There is a **20% chance** of rain and the temperature is **65°F**." (Math-based).

### 🛡️ Exam Tip
*   **Quantitative** = **$$$** (Dollars/Numbers).
*   **Qualitative** = **Quality/Feeling** (High/Low).`,
                        video: {
                            title: "Qualitative vs Quantitative Risk Analysis (The MATH of Security)",
                            url: "https://www.loom.com/share/risk-analysis-placeholder"
                        },
                        quizQuestions: [
                            {
                                id: "risk-q1",
                                domainId: "5.0",
                                objectiveId: "5.1",
                                text: "A Chief Information Security Officer (CISO) is presenting a budget request and states that a specific security control will save the company $50,000 annually. What type of risk analysis was performed?",
                                options: [
                                    { id: "a", text: "Qualitative" },
                                    { id: "b", text: "Quantitative" },
                                    { id: "c", text: "Hybrid" },
                                    { id: "d", text: "Compliance-based" }
                                ],
                                correctOptionId: "b",
                                explanation: "Quantitative analysis uses specific financial metrics and data to assess risk and value."
                            }
                        ]
                    },
                    {
                        id: "risk-response",
                        title: "Risk Response Strategies",
                        summary: "Avoid, Transfer, Mitigate, Accept.",
                        details: `### Concept Breakdown
Once you find a risk, you have 4 main choices (ATMA):

1.  **Avoid**: Stop doing the risky activity entirely.
2.  **Transfer**: Make someone else pay for it (Insurance).
3.  **Mitigate**: Reduce the likelihood or impact (Install Antivirus, Firewalls).
4.  **Accept**: Do nothing. The cost of fixing it is higher than the loss.

### Real-World Application
*   **Transfer**: Buying Cyber Insurance. If you get hacked, they pay the fine.
*   **Mitigate**: Patching your servers to close vulnerabilities.
*   **Accept**: Deciding not to upgrade an old printer because a new one is too expensive and the old one rarely fails.

### Non-Technical Analogy
**Skydiving**:
*   **Avoid**: You don't go skydiving.
*   **Transfer**: You sign a waiver (or buy life insurance).
*   **Mitigate**: You pack a **backup parachute**.
*   **Accept**: You jump and know there is a small chance risk of injury, but the fun is worth it.

### 🛡️ Exam Tip
**Insurance** or **Outsourcing** is almost always **Risk Transfer**.`,
                        video: {
                            title: "Risk Response Strategies Explained (Avoid, Transfer, Mitigate, Accept)",
                            url: "https://www.loom.com/share/risk-response-placeholder"
                        },
                        quizQuestions: [
                            {
                                id: "resp-q1",
                                domainId: "5.0",
                                objectiveId: "5.1",
                                text: "A company decides to purchase cyber liability insurance to cover potential losses from a data breach. Which risk response strategy is this?",
                                options: [
                                    { id: "a", text: "Avoidance" },
                                    { id: "b", text: "Mitigation" },
                                    { id: "c", text: "Acceptance" },
                                    { id: "d", text: "Transfer" }
                                ],
                                correctOptionId: "d",
                                explanation: "Risk Transfer involves shifting the financial burden of a risk to a third party, such as an insurance provider."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
