import { ProfileData } from "@/types/portfolio.types";

export const profileData: ProfileData = {
  name: "Sohib Khan",
  role: "Full Stack QA Intern / QA Automation Engineer",
  shortTitle: "SK / QA",
  tagline:
    "QA Engineer dedicated to breaking software so users don't have to. Currently a Full Stack QA Intern at Artifact Geeks, I specialize in rigorous manual validation while actively advancing into automation testing with Selenium and Playwright.",
  status: "Open to full-time QA & automation roles",
  summary: [
    "I'm a detail-oriented QA professional pursuing a BCA while working as a Full Stack QA Intern. What drew me to testing is the mindset it demands — thinking like a user, breaking things on purpose, and catching the edge case before it ever reaches production. I like that QA sits right at the intersection of empathy for the user and precision about how software actually behaves.",
    "My work today centers on manual and functional testing — validating user workflows, documenting critical bugs clearly, and making sure applications hold up across browsers and devices. I'm now actively transitioning from manual into automation testing, building hands-on skill with Selenium and Playwright so I can contribute to faster, more scalable QA pipelines alongside the manual coverage I already do well.",
  ],
  contact: {
    email: "sohiblodhi59@gmail.com",
    phone: "+91 91459 21300",
    location: "Rajasthan, India",
    linkedin: "https://www.linkedin.com/in/sohib-lodhi-6059083ab/",
    github: "https://github.com/Sohib-Khan",
    resumePdf: "/pdf/Sohib_Khan_Resume.pdf",
  },
  metrics: [
    { label: "Test Cases Written", value: "120+", sublabel: "Manual & Automated" },
    { label: "Critical Defects Caught", value: "25+", sublabel: "Pre-Release Verification" },
    { label: "Live Platforms Tested", value: "3+", sublabel: "SaaS & Community Apps" },
    { label: "Regression Test Coverage", value: "100%", sublabel: "Zero Critical Production Escapes" },
  ],
  languages: ["Hindi", "English"],
  hobbies: ["Cricket", "Learning New Tech", "Breaking UI Boundaries"],
};
