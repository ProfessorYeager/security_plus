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
                        summary: "Confidentiality, Integrity, and Availability are the three pillars of information security...",
                        video: null,
                    },
                    {
                        id: "auth-vs-authz",
                        title: "Authentication vs. Authorization",
                        summary: "Authentication serves to verify the identity of a user/entity, while Authorization determines what resources they can access.",
                        video: {
                            title: "Authentication vs. Authorization in Security Plus Exam 🎟️",
                            url: "https://www.loom.com/share/02b1e68bd2224bb98c88fc1a8fa2354b"
                        }
                    },
                    {
                        id: "aaa-framework",
                        title: "AAA Framework",
                        summary: "Authentication, Authorization, and Accounting provide a framework for controlling access to computer resources.",
                        video: null
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
                        video: {
                            title: "Least Privilege (Why Security+ Won’t Shut Up About It)",
                            url: "https://www.loom.com/share/1e2bbd28fd574708853934f0824e83e0"
                        }
                    },
                    {
                        id: "mfa",
                        title: "Multi-Factor Authentication (MFA)",
                        summary: "Requires more than one method of authentication from independent categories of credentials to verify the user's identity.",
                        video: {
                            title: "Understanding Multi-Factor Authentication for the Security Plus Exam🔐",
                            url: "https://www.loom.com/share/461041344c62411c9412fd4d4802d9e6"
                        }
                    },
                    {
                        id: "sso",
                        title: "Single Sign-On (SSO)",
                        summary: "An authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.",
                        video: {
                            title: "Single Sign-On (SSO) — Convenience with a Price",
                            url: "https://www.loom.com/share/585f5f2be0e04addb37a2d30d178d88d"
                        }
                    },
                    {
                        id: "federation",
                        title: "Federation",
                        summary: "Enables identities to be shared across distinct security domains.",
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
                        video: {
                            title: "Understanding Hashing vs. Encryption: Key Differences Explained 🔒",
                            url: "https://www.loom.com/share/1539a56296264a4fb5d4a2eeaad22b9d"
                        }
                    },
                    {
                        id: "symmetric-vs-asymmetric",
                        title: "Symmetric vs. Asymmetric Encryption",
                        summary: "Symmetric uses one key (faster), Asymmetric uses a key pair (public/private).",
                        video: {
                            title: "Understanding Symmetric vs Asymmetric Encryption",
                            url: "https://www.loom.com/share/20c803acb79946ca91e9360f072a658e"
                        }
                    },
                    {
                        id: "pki",
                        title: "Public Key Infrastructure (PKI)",
                        summary: "A set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption.",
                        video: {
                            title: "Understanding Public Key Infrastructure and Trust Relationships",
                            url: "https://www.loom.com/share/37fa24a623fd460cafabb91e49a38a68"
                        }
                    },
                    {
                        id: "digital-signatures",
                        title: "Digital Signatures",
                        summary: "Provide authentication, non-repudiation, and integrity.",
                        video: {
                            title: "Understanding Digital Signatures: Integrity, Authentication, and Non-Repudiation",
                            url: "https://www.loom.com/share/26e7679b7401441b97d38fe91234bd80"
                        }
                    },
                    {
                        id: "data-transit-rest",
                        title: "Data in Transit vs. At Rest",
                        summary: "Protecting data while it moves across a network vs while it is stored.",
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
                        summary: "A physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network.",
                        video: {
                            title: "DMZs on the Security+ Exam (Why Screened Subnets Exist)",
                            url: "https://www.loom.com/share/bda47497716743c3af59548514c59509"
                        }
                    },
                    {
                        id: "enterprise-arch",
                        title: "Enterprise Network Architecture",
                        summary: "High-level design of network infrastructure.",
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
                        summary: "Firewalls, IDS/IPS, Proxies, etc.",
                        video: {
                            title: "Security Appliances on Security+ (What Each One Actually Does)",
                            url: "https://www.loom.com/share/d8b88b04fb1b4485bcf88f33461a1a54"
                        }
                    },
                    {
                        id: "router-security",
                        title: "Router Security",
                        summary: "Hardening routing devices and protocols.",
                        video: {
                            title: "Router Security on the Security+ Exam (What They’re REALLY Testing)",
                            url: "https://www.loom.com/share/7a7850350249416e9fab1860b00fd0f8"
                        }
                    },
                    {
                        id: "remote-access",
                        title: "Remote Access Security",
                        summary: "VPNs, SSH, RDP security.",
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
                        video: {
                            title: "Linux Users Explained for Security+ (Why Root Is Dangerous)",
                            url: "https://www.loom.com/share/ad29091311ad466ba6628209ffd5a858"
                        }
                    },
                    {
                        id: "linux-groups",
                        title: "Linux Groups & RBAC",
                        summary: "Using groups to implement Role-Based Access Control.",
                        video: {
                            title: "Linux Groups = RBAC (Security+ Connection People Miss)",
                            url: "https://www.loom.com/share/d5e3719be22445f7ae34eb85d44fc67b"
                        }
                    },
                    {
                        id: "active-directory",
                        title: "Active Directory (AD)",
                        summary: "Microsoft's directory service for Windows domain networks.",
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
