import CoFiLogo from "../images/logos/CoFiLogo.png";
import FluentLogo from "../images/logos/fluent.png";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Jadon Scholes",
  initials: "JS",
  location: "Lehi, Utah",
  locationLink: "https://www.google.com/maps/place/Lehi",
  about: "Full Stack Developer",
  summary:
    "As a Full Stack Developer I have worked on all aspects of multiple applications from setting up the CI/CD pipeline to creating the UI/UX. I have worked at smaller companies so far where I've worn many hats and gained a lot of experience. I enjoy the craft of software development and am always looking to improve.",
  avatarUrl: "https://avatars.githubusercontent.com/u/56044962?v=4",
  personalWebsiteUrl: "https://jadonscholes.com",
  contact: {
    email: "jadonscholes@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jschol3s",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jadon-scholes-a97110172/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/JadonScholes",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Utah Valley University",
      degree:
        "BS in Computer Science with a Full Stack Web Development Emphasis",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "CoFi",
      link: "https://www.cofilending.com/",
      badges: [],
      title: "Full Stack Developer",
      start: "2022",
      end: "Current",
      description: (
        <span>
          <p>
            Developed backend services using C# .NET framework and contributed
            to database design with Entity Framework and a Postgres database.
            Played a key role in breaking down a monolithic service into
            multiple services using Kubernetes for improved scalability.
          </p>
          <br />
          <p>
            Worked with React to build various web applications. Led the
            development of a custom component library for use across
            applications as a private npm package.
          </p>
          <br />
          <p>
            Took charge of organizing and guiding developers for successful
            feature delivery. Advocated for the adoption of the latest
            development tools, leading initiatives such as the migration from
            create-react-app to Vite, transitioning from JavaScript to
            TypeScript, and moving from MS SQL Server to Postgres.
          </p>
        </span>
      ),
    },
    {
      company: "Fluent Solar",
      link: "https://www.fluentsolar.com/",
      // badges: ["Remote"],
      title: "Software Developer",
      start: "2020",
      end: "2022",
      description: (
        <span>
          <p>
            Collaborated with a team to develop and oversee applications for the
            sales department, including a React Native mobile app and a NextJS
            website.
          </p>
          <br />
          <p>
            Authored and sustained API webhooks for seamless interaction between
            third-party applications and our CRM software.
          </p>
          <br />
          <p>
            Headed a team responsible for crafting interfaces and integrations
            within the CRM software, streamlining workflows, and enhancing
            overall project management.
          </p>
        </span>
      ),
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Remix",
    "C#",
    "Kubernetes",
    "Docker",
    "Postgres",
    "SwiftUI",
    "React Native",
    "CSS",
    "HTML",
    "Git",
    "Storybook",
    "Architectural Design",
    "UI/UX Design",
    "Team Leadership",
  ],
} as const;
