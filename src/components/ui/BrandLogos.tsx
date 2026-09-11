import React from "react";

interface LogoProps {
  className?: string;
}

// 1. Official Selenium WebDriver Logo
export function SeleniumLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#00B400" />
      <path
        d="M24 64C24 41.9086 41.9086 24 64 24C86.0914 24 104 41.9086 104 64C104 86.0914 86.0914 104 64 104"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <text
        x="64"
        y="78"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="44"
      >
        Se
      </text>
    </svg>
  );
}

// 2. Official Playwright Logo (Dual masks / brackets)
export function PlaywrightLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#2EAD33" />
      <path
        d="M48 38C38 38 30 46 30 56C30 76 56 94 64 98C72 94 98 76 98 56C98 46 90 38 80 38C72 38 67 44 64 48C61 44 56 38 48 38Z"
        fill="#C94444"
      />
      <circle cx="50" cy="58" r="5" fill="white" />
      <circle cx="78" cy="58" r="5" fill="white" />
      <path d="M54 74C58 78 70 78 74 74" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// 3. Official Postman Logo
export function PostmanLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#FF6C37" />
      <path
        d="M96 36L32 64L60 76L72 104L96 36Z"
        fill="white"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M60 76L96 36" stroke="#FF6C37" strokeWidth="4" />
      <circle cx="48" cy="46" r="8" fill="white" />
    </svg>
  );
}

// 4. Official Core Java Logo (Steaming Coffee Cup)
export function JavaLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#EA2D2E" fillOpacity="0.12" />
      {/* Steam */}
      <path
        d="M60 22C64 30 54 36 62 44"
        stroke="#EA2D2E"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M74 24C78 32 68 38 76 46"
        stroke="#5382A1"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Cup */}
      <path
        d="M40 54H88V80C88 92 78 100 64 100C50 100 40 92 40 80V54Z"
        fill="#5382A1"
      />
      <path
        d="M88 62H96C102 62 106 66 106 72C106 78 102 82 96 82H88"
        stroke="#5382A1"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Saucer */}
      <path
        d="M32 106H96"
        stroke="#EA2D2E"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 5. Official Git & GitHub Logo
export function GitLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#F05032" />
      <g transform="translate(24, 24) scale(0.625)">
        <path
          d="M64 8L120 64L64 120L8 64L64 8Z"
          fill="none"
          stroke="white"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <circle cx="64" cy="50" r="10" fill="white" />
        <circle cx="64" cy="85" r="10" fill="white" />
        <circle cx="85" cy="65" r="10" fill="white" />
        <path d="M64 50V85" stroke="white" strokeWidth="8" />
        <path d="M64 65L85 65" stroke="white" strokeWidth="8" />
      </g>
    </svg>
  );
}

// 6. Official MySQL Logo (Dolphin)
export function MySQLLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#00758F" />
      <path
        d="M32 78C38 60 52 46 72 40C88 36 98 44 94 58C90 70 78 78 64 82C52 86 42 84 32 78Z"
        fill="#F29111"
      />
      <path
        d="M80 44C86 36 96 34 102 36C100 44 94 48 88 50"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="78" cy="52" r="4" fill="white" />
      <path d="M38 78L26 86L32 94L44 86" fill="white" />
    </svg>
  );
}

// 7. Official IntelliJ IDEA Logo
export function IntelliJLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#087CFA" />
      <path d="M24 24H80L104 64L72 104H24V24Z" fill="#FE2857" opacity="0.8" />
      <rect x="36" y="36" width="56" height="56" rx="12" fill="#000000" />
      <text
        x="64"
        y="74"
        textAnchor="middle"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="32"
      >
        IJ
      </text>
    </svg>
  );
}

// 8. Official Visual Studio Code Logo
export function VSCodeLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#007ACC" />
      <path
        d="M92 24L74 42L44 26L28 34L54 64L28 94L44 102L74 86L92 104C96 108 102 106 102 100V28C102 22 96 20 92 24Z"
        fill="white"
      />
      <path d="M74 42L92 28V100L74 86V42Z" fill="#29B6F6" opacity="0.9" />
    </svg>
  );
}

// 9. Official HTML5 Logo
export function HTML5Logo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#E34F26" />
      <path d="M30 30L37 100L64 108L91 100L98 30H30Z" fill="white" fillOpacity="0.25" />
      <path d="M64 36V101L85 95L91 42H64Z" fill="white" />
      <path d="M64 52H48L49 66H64V78H49L50 90L64 94V102" stroke="white" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// 10. Official CSS3 Logo
export function CSS3Logo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#1572B6" />
      <path d="M30 30L37 100L64 108L91 100L98 30H30Z" fill="white" fillOpacity="0.25" />
      <path d="M64 36V101L85 95L91 42H64Z" fill="white" />
      <path d="M64 52H80L78 74H64" stroke="white" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// 11. Official C Programming Logo
export function CLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#A8B9CC" fillOpacity="0.2" />
      <path
        d="M64 18L104 41V87L64 110L24 87V41L64 18Z"
        fill="#00599C"
      />
      <path
        d="M78 52C74 46 64 46 58 52C50 60 50 68 58 76C64 82 74 82 78 76"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 12. Official Microsoft Excel / Test Plans Logo
export function ExcelLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#107C41" />
      <rect x="42" y="32" width="56" height="64" rx="8" fill="white" fillOpacity="0.3" />
      <rect x="28" y="42" width="44" height="44" rx="10" fill="#185C37" />
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="30"
      >
        X
      </text>
    </svg>
  );
}

// 13. QA Manual Testing Specialist Badge
export function ManualTestingLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#48A293" />
      {/* Clipboard */}
      <rect x="36" y="32" width="56" height="74" rx="10" fill="white" />
      <rect x="48" y="24" width="32" height="14" rx="5" fill="#183D36" />
      {/* Checkmarks */}
      <path d="M46 54L52 60L64 48" stroke="#48A293" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 54H82" stroke="#A0B5B0" strokeWidth="4" strokeLinecap="round" />
      <path d="M46 72L52 78L64 66" stroke="#48A293" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 72H82" stroke="#A0B5B0" strokeWidth="4" strokeLinecap="round" />
      <path d="M46 90L52 96L64 84" stroke="#48A293" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 90H82" stroke="#A0B5B0" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// 14. QA Software Testing (Bug Hunter Shield)
export function SoftwareTestingLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#183D36" />
      {/* Shield */}
      <path
        d="M64 26L94 38V66C94 86 64 102 64 102C64 102 34 86 34 66V38L64 26Z"
        fill="#76E0CB"
      />
      {/* Bug / Check inside */}
      <path
        d="M50 64L60 74L80 52"
        stroke="#183D36"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 15. QA Automation Testing (Gear Engine)
export function AutomationTestingLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#E89838" />
      {/* Gears */}
      <circle cx="56" cy="56" r="24" stroke="white" strokeWidth="8" strokeDasharray="10 5" />
      <circle cx="56" cy="56" r="10" fill="white" />
      <circle cx="82" cy="80" r="16" stroke="white" strokeWidth="6" strokeDasharray="8 4" />
      <circle cx="82" cy="80" r="6" fill="white" />
    </svg>
  );
}

// 16. API Testing (Webhook / REST payload interchange)
export function APITestingLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#3B82F6" />
      {/* API text & Webhook nodes */}
      <circle cx="44" cy="46" r="12" fill="white" />
      <circle cx="84" cy="46" r="12" fill="white" />
      <circle cx="64" cy="86" r="12" fill="white" />
      <path d="M44 46L64 86L84 46" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <text
        x="64"
        y="62"
        textAnchor="middle"
        fill="#3B82F6"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="16"
      >
        API
      </text>
    </svg>
  );
}

// 17. Official MongoDB Logo (Green Leaf with dark base)
export function MongoDBLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#001E2B" />
      {/* Outer Leaf shape */}
      <path
        d="M64 18C64 18 41 46 41 73C41 90 53 102 64 110C75 102 87 90 87 73C87 46 64 18 64 18Z"
        fill="#13AA52"
      />
      {/* Left bright leaf facet */}
      <path
        d="M64 18C64 18 61 42 61 73C61 89 55 99 64 110C75 102 87 90 87 73C87 46 64 18 64 18Z"
        fill="#00ED64"
        opacity="0.92"
      />
      {/* Center vein */}
      <path
        d="M64 22V108"
        stroke="#001E2B"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 18. Official JavaScript Logo (Classic JS Badge)
export function JavaScriptLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#F7DF1E" />
      <text
        x="64"
        y="84"
        textAnchor="middle"
        fill="#000000"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="800"
        fontSize="52"
        letterSpacing="-1.5px"
      >
        JS
      </text>
    </svg>
  );
}

// 19. Official TypeScript Logo (Classic TS Badge)
export function TypeScriptLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#3178C6" />
      <text
        x="64"
        y="84"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="800"
        fontSize="52"
        letterSpacing="-1.5px"
      >
        TS
      </text>
    </svg>
  );
}

export function BrandLogo({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name) {
    case "Selenium WebDriver":
      return <SeleniumLogo className={className} />;
    case "Playwright":
    case "Playwright (TS/JS)":
      return <PlaywrightLogo className={className} />;
    case "Postman":
      return <PostmanLogo className={className} />;
    case "Core Java":
      return <JavaLogo className={className} />;
    case "JavaScript":
    case "JS":
      return <JavaScriptLogo className={className} />;
    case "TypeScript":
    case "TS":
      return <TypeScriptLogo className={className} />;
    case "Git & GitHub":
      return <GitLogo className={className} />;
    case "MySQL":
      return <MySQLLogo className={className} />;
    case "MongoDB":
      return <MongoDBLogo className={className} />;
    case "IntelliJ IDEA":
      return <IntelliJLogo className={className} />;
    case "VS Code":
      return <VSCodeLogo className={className} />;
    case "HTML5":
      return <HTML5Logo className={className} />;
    case "CSS3":
      return <CSS3Logo className={className} />;
    case "C (Basic)":
      return <CLogo className={className} />;
    case "Excel / Test Plans":
      return <ExcelLogo className={className} />;
    case "Manual Testing":
      return <ManualTestingLogo className={className} />;
    case "Software Testing":
      return <SoftwareTestingLogo className={className} />;
    case "Automation Testing":
      return <AutomationTestingLogo className={className} />;
    case "API Testing":
      return <APITestingLogo className={className} />;
    default:
      return <ManualTestingLogo className={className} />;
  }
}
