import { SkillGroup } from "@/types/portfolio.types";

export const skillsData: SkillGroup[] = [
  {
    category: "testing",
    title: "Testing & QA",
    skills: [
      { name: "Manual Testing", iconId: "checklist" },
      { name: "Software Testing", iconId: "flask" },
      { name: "Automation Testing", iconId: "gear" },
      { name: "Selenium WebDriver", iconId: "bug" },
      { name: "Playwright", iconId: "play" },
      { name: "API Testing", iconId: "plug" },
    ],
  },
  {
    category: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "IntelliJ IDEA", iconId: "ide" },
      { name: "VS Code", iconId: "editor" },
      { name: "Git & GitHub", iconId: "branch" },
      { name: "Postman", iconId: "send" },
      { name: "Excel / Test Plans", iconId: "grid" },
    ],
  },
  {
    category: "languages",
    title: "Languages & Web",
    skills: [
      { name: "Core Java", iconId: "cup" },
      { name: "JavaScript", iconId: "js" },
      { name: "HTML5", iconId: "html" },
      { name: "CSS3", iconId: "css" },
      { name: "C (Basic)", iconId: "braces" },
    ],
  },
  {
    category: "database",
    title: "Database",
    skills: [
      { name: "MySQL", iconId: "db" },
      { name: "MongoDB", iconId: "mongodb" },
    ],
  },
];
