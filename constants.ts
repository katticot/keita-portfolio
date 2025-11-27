import { CVData } from "./types";
import profileImage from "./picture.jpeg";

// Local photo used for the CV header.
export const PROFILE_IMAGE_URL = profileImage;

export const RESUME_DATA: CVData = {
  personal: {
    name: "Keita Louis-Alexandre",
    title: "Engineering Manager",
    subtitle: "blockchain services",
    profileImage: PROFILE_IMAGE_URL,
  },
  contact: {
    phone: "06 46 38 33 88",
    email: "keita.louisalexandre@gmail.com",
    address: "49 rue des poissonniers",
  },
  education: [
    {
      year: "2013",
      degree: "MSc in Business Computing (MIAGE)",
      school: "University of Paris-Est Créteil (UPEC)",
    },
    {
      year: "2010",
      degree: "BPS in Information Systems Management",
      school: "University of Évry Paris-Saclay",
    },
  ],
  expertise: [
    "Kubernetes/AWS",
    "Go",
    "Javascript/NodeJS",
    "Rust",
    "React/VueJs/Svelte",
    "PostgreSQL/MongoDB",
    "Nginx, HAProxy",
    "Solidity",
  ],
  languages: ["French", "English", "Spanish"],
  experience: [
    {
      id: "ledger",
      period: "April 2022 - Now",
      company: "Ledger",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ledger-logo-long.svg",
      logoClasses: "dark:invert", // Invert black logo to white in dark mode
      title: "Engineering Manager",
      details: [
        {
          label: "Leadership",
          items: [
            "Led the B2B Web3 squad, later managed the frontend team.",
            "Conducted regular team meetings, performance reviews and hiring to maintain productivity.",
          ],
        },
        {
          label: "Key Achievements with Web3 Squad",
          items: [
            "Fast-tracked EVM chain integration, reducing integration time.",
            "Enhanced clear signing processes for dApp applications.",
            "Reduced dependency on legacy our Web3 services.",
            "Developed an NFT gallery, boosting user engagement by 25%.",
            "Improved smart contract interactions and blockchain integration.",
          ],
        },
        {
          label: "Key Achievements with Frontend Team",
          items: [
            "Implemented a design system with Storybook and Figma.",
            "End-to-End Testing: Advocated for and implemented end-to-end testing using Playwright, significantly reducing bugs and improving code quality.",
          ],
        },
        {
          label: "Tools and Technologies",
          items: [
            "React, Storybook, Figma, Playwright",
            "Ethereum, EVM-Like",
            "Scala, Typescript, Python",
            "Agile/Scrum methodologies",
          ],
        },
      ],
    },
    {
      id: "edf-2017",
      period: "2017 - 2022",
      company: "EDF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg",
      logoClasses: "dark:bg-white dark:p-1 dark:rounded", // Add white background in dark mode for visibility
      title: "Project Manager, Information Systems Innovation",
      subtitle: "October 2017 - April 2022",
      details: [
        {
          label: "Leadership",
          items: [
            "Managed a team of developers, overseeing IT system development for innovative projects.",
          ],
        },
        {
          label: "Key Achievements:",
          items: [
            "Developed mobile applications, CRM systems, chatbots, and websites.",
            "Architecture Implementation: Put in place a new architecture based on Docker and Kubernetes to improve shipping delays and monitoring of multiple tiny applications, significantly enhancing operational efficiency and deployment speed.",
          ],
        },
      ],
    },
    {
      id: "edf-2013",
      period: "2013 - 2017",
      company: "EDF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg",
      logoClasses: "dark:bg-white dark:p-1 dark:rounded", // Add white background in dark mode for visibility
      title: "Application manager",
      details: [
        {
          items: [
            "Managed various application projects, overseeing development and maintenance.",
          ],
        },
      ],
    },
  ],
};
