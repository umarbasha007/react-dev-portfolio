import self from "../img/self.png";
import fun_portfolio2 from "../img/fun_portfolio2.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sheik Mohammed",
  lastName: "Umar Basha",
  initials: "</Umar Basha>", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer | AI Engineer | Cloud Engineer (Azure)",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🤓",
      text: "Exploring AI, Web 3, NextJS & HTF",
    },
    {
      emoji: "📚",
      text: "Fueled by reading Manga, Tech & Salah",
    },
    {
      emoji: "🌎",
      text: "Based in India",
    },
    {
      emoji: "💼",
      text: "Senior Software Engineer at Ztek",
    },
    {
      emoji: "📧",
      text: "umarbasha007@gmail.com",
    },
  ],
  socials: [
    // {
    //     link: "https://facebook.com",
    //     icon: 'fa fa-facebook',
    //     label: 'facebook'
    // },

    {
      link: "https://github.com/umarbasha007",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/umarbasha007",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://www.instagram.com/umarbasha_techmonk",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    // {
    //     link: "https://twitter.com",
    //     icon: "fa fa-twitter",
    //     label: 'twitter'
    // }
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Umar Basha. I'm a Senior Software Engineer at Ztek. I studied Computer Science at JNTUH CEJ (Govt. University), I enjoy long walks morning walks and I believe learning attitude and humbleness are key in building up best team. We should get connected at umarbasha007@gmail.com or linkedIn or catch up for a coffee!",
  contents: [
    {
      label: "about.txt",
      emoji: "📋",
      refer: "sectionAboutRef",
    },
    {
      label: "skills",
      emoji: "🧰",
      refer: "sectionSkillRef",
    },
    {
      label: "hobbies",
      emoji: "☘️",
      refer: "sectionHobbyRef",
    },
  ],
  skills: {
    proficientWith: [
      "ReactJS 16 & 18",
      "ASP.NET Core 8 - C#",
      "FastAPI - Python 3",
      "NodeJS & Express",
      "Databases",
      "Azure AI",
      "Azure Developer",
    ],
    exposedTo: [
      "Machine Learning",
      "Progressive Web App - PWA",
      "IoT",
      "WebVR",
      "3D website",
    ],
    ciCd: [
      "Azure DevOps",
      "Git / GitHub",
      "Docker",
      "Kubernetes - AKS",
      "Helm Chart",
      "JFrog",
    ],
    frontEnd: [
      "ReactJS 16 & 18",
      "Angular 10",
      "Backstage.io",
      "Ionic Framework",
      "Material UI",
      "Ant Design",
      "Fluent UI",
      "Redux/Toolkit",
      "Redux-Saga",
      "Bootstrap 5",
      "Three.js",
      "Chart.js",
      "TypeScript",
      "JavaScript (ES6)",
      "HTML5",
      "SCSS",
      "CSS3",
    ],
    backEnd: [
      "C# based: .NET Core 8, ASP.NET 8, SignalR",
      "Python based: FastAPI, Flask",
      "JavaScript based: NodeJS, Express",
      "Backstage.io",
    ],
    database: [
      "SQL: MS SQL Server (& Store Procedures), SQLite, MySQL",
      "NoSQL: Redis, MongoDB, Azure Storage, Firebase",
    ],
    patterns: ["MVC + CQRS", "MVVM", "SOLID", "KISS", "DRY", "POM"],
    automation: ["PowerShell", "Selenium (Python)", "Puppet (NodeJS)"],
    machineLearning_ai: [
      "Supervised Learning",
      "Azure QnA Maker",
      "Chatbot",
      "Cognitive Search, Azure AI",
      "GenAI - LLM, RAG, HuggingFace, LongChain",
    ],
    azure: [
      "Azure AI",
      "App Services",
      "Static Web Apps",
      "Azure Storage",
      "Azure DevOps",
      "Function App",
      "Logic App",
      "Azure AD",
      "Service Bus",
      "Key-Vault",
      "App Configurations",
      "API Management",
    ],
    tools: [
      "Canva",
      "Abode XD",
      "Power BI",
      "Jupyter Notebook",
      "Visual Studio Code",
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "👨‍🍳",
    },
    {
      label: "community",
      emoji: "🫶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed

    {
      title: "My First Portfolio",
      live: "https://umarbasha007.github.io/",
      source: "https://github.com/umarbasha007/umarbasha007.github.io",
      image: fun_portfolio2,
    },
  ],
  education: [
    {
      direction: "right",
      title: "JNTUH CEJ",
      time: "2014 - 2018",
      description: "B.Tech - Computer Science Engineering",
      detail: "",
    },
    {
      direction: "left",
      title: "Shivam Junior College",
      time: "2011 - 2012",
      description: "Major : Mathematics, Physics and Chemistry",
      detail: "",
    },
    {
      direction: "right",
      title: "Nalanda - High School",
      time: "2009 - 2011",
      description: "Languages : English, Hindi, Telugu",
      detail: "",
    },
  ],
  experiance: [
    {
      direction: "right",
      title: "Ztek",
      time: "2024 - Present",
      description: "Senior Software Engineer",
      detail: "Full Stack Cloud Engineer",
    },
    {
      direction: "left",
      title: "UST",
      time: "2022 - 2024",
      description: "Developer 3",
      detail: "Full Stack - Cloud Engineer & Platform Engineer",
    },
    {
      direction: "right",
      title: "TCS",
      time: "2018 - 2022",
      description: "System Engineer",
      detail: "Full Stack & AI/ML Engineer",
    },
  ],
};
