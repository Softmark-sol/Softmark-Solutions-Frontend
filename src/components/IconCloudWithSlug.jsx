import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  // "dart",
  // "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  // "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  // "nginx",
  "vercel",
  // "testinglibrary",
  // "jest",
  // "cypress",
  "docker",
  "git",
  // "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  // "sonarqube",
  "figma",
];

export function IconCloudSlug() {
  return (
    <div className="relative flex h-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8" style={{width: "60%"}}>
      <IconCloud iconSlugs={slugs}/>
    </div>
  );
}
