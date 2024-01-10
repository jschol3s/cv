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
    "As a Full Stack Developer, I have worked on all aspects of multiple applications, from setting up the CI/CD pipeline to creating UI component libraries. I have gained extensive experience by working at smaller companies, where I've had the opportunity to wear many hats. I am passionate about the craft of development and continually strive to improve.",
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
      degree: "AS in Computer Science",
      start: "2018",
      end: "2020",
    },
    {
      school: "Utah Valley University",
      degree:
        "BS in Computer Science with a Full Stack Web Development Emphasis",
      start: "2018",
      end: "Current",
    },
  ],
  work: [
    {
      company: "CoFi",
      link: "https://www.cofilending.com/",
      badges: [],
      title: "Senior Full Stack Developer",
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
            Worked with React to build multiple web applications. Led the
            development of a custom component library for use across
            applications as a private npm package. Was the team lead for
            numerous front-end features.
          </p>
          <br />
          <p>
            Took charge of organizing and guiding developers for successful
            feature delivery. Advocated for adopting the latest development
            tools, leading initiatives such as migrating from create-react-app
            to Vite, transitioning from JavaScript to TypeScript, and using more
            accessible UI libraries such as radix-ui.
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
            Worked with a team to create and manage multiple applications for
            the sales department including a mobile application in React Native
            and a website in NextJS.
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
    "ORMs",
    "React Query",
    "Tailwind CSS",
    "React Router",
    "Vite",
    "Radix UI",
  ],
} as const;
