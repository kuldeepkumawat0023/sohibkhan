import { ProjectItem } from "@/types/portfolio.types";

export const projectsData: ProjectItem[] = [
  {
    id: "namdev-community",
    title: "Namdev Community",
    url: "https://namdev-community.artifactgeeks.com",
    displayUrl: "namdev-community.artifactgeeks.com ↗",
    description:
      "End-to-end manual testing on the Namdev Community web platform — validating core user workflows, profile directories, event boards, and cross-browser compatibility across mobile and desktop viewports.",
    validatedTags: ["User workflows", "UI / UX issues", "Cross-browser"],
    category: "Community Web Platform",
    testCaseCount: 45,
    criticalBugsFound: 9,
    testingTypes: ["Functional", "Cross-browser", "Regression", "Exploratory"],
    detailedReport: {
      overview:
        "Executed manual validation across Chrome, Firefox, Safari, and Edge. Verified community registration, forum posting, member search filters, and responsive layout scaling.",
      scope: [
        "User registration, OTP login, and multi-factor session authentication",
        "Directory search and demographic filter query accuracy",
        "Cross-device mobile viewport regression (360px to 1440px)",
        "Accessibility checks on color contrast and keyboard navigation",
      ],
      defectsCaught: [
        "Session timeout anomaly during high-volume directory pagination",
        "Dropdown navigation z-index clipping behind community hero banner on iOS Safari",
        "Form submission payload duplication on rapid double-tap action",
      ],
      toolsUsed: ["Chrome DevTools", "Postman", "Responsive Simulator", "Excel Test Tracker"],
      status: "Verified & Production",
    },
  },
  {
    id: "linkhub",
    title: "LinkHub",
    url: "https://linkhub-frontend-tox5.onrender.com",
    displayUrl: "linkhub-frontend-tox5.onrender.com ↗",
    description:
      "Manual QA on LinkHub, a modern link-in-bio platform for creators and founders — covering signup through to dashboard, real-time preview rendering, custom themes, and pricing tier upgrades.",
    validatedTags: [
      "Account signup",
      "Profile customization",
      "Theme selection",
      "Pricing tiers",
      "Responsiveness",
    ],
    category: "Creator SaaS / Micro-Landing Page",
    testCaseCount: 52,
    criticalBugsFound: 11,
    testingTypes: ["UI/UX", "Payment/Tier Flow", "Responsive Testing", "Boundary Values"],
    detailedReport: {
      overview:
        "Conducted thorough functional verification on creator customization engines, ensuring instant iframe reflection, analytics logging, and tier permission gates.",
      scope: [
        "Creator onboarding, profile handle slug uniqueness, and image uploads",
        "Theme engine switching and custom hex color contrast persistence",
        "Feature availability gates corresponding to Free vs Pro subscription tiers",
        "Mobile viewport responsive layout for end-user bio landing pages",
      ],
      defectsCaught: [
        "SVG icon rendering failure on dark theme preview generation",
        "Free tier users able to toggle premium gradient animations due to client-only gate",
        "Bio link URL sanitization flaw permitting invalid protocol schemes",
      ],
      toolsUsed: ["Postman API Runner", "BrowserStack", "DevTools Performance Inspector"],
      status: "Verified & Production",
    },
  },
  {
    id: "ai-job-fit",
    title: "AI Job Fit",
    url: "https://aijobfit.artifactgeeks.com",
    displayUrl: "aijobfit.artifactgeeks.com ↗",
    description:
      "Manual testing on an AI-powered job matching and resume evaluation platform, focused on complex input validation, multi-format PDF parsing constraints, and AI result accuracy & consistency.",
    validatedTags: ["Form inputs", "Resume upload", "AI result accuracy", "Usability"],
    category: "AI SaaS & Resume Scoring",
    testCaseCount: 48,
    criticalBugsFound: 8,
    testingTypes: ["Input Boundary", "Negative Testing", "AI Output Sanity", "File Parsing"],
    detailedReport: {
      overview:
        "Tested resume parser upload boundaries, large file constraints, unsupported formats, and AI output confidence consistency against varying job descriptions.",
      scope: [
        "Resume file uploads: DOCX, PDF, scanned images, corrupted binary uploads",
        "Form constraints: character length, special characters, malicious script tags",
        "Evaluation score sanity: ensuring repeatable consistency across identical inputs",
        "Latency feedback UX: skeleton loaders, error toast handling on API timeout",
      ],
      defectsCaught: [
        "Parser infinite loading on password-protected PDF files without graceful error",
        "Match percentage discrepancy when job description contained bullet formatting",
        "Missing user warning when file upload exceeded 5MB threshold",
      ],
      toolsUsed: ["Burp Suite (Basic)", "Postman", "File Boundary Test Suite", "Chrome DevTools"],
      status: "Verified & Production",
    },
  },
];
