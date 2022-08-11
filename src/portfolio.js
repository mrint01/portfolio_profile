/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sfar Hatem",
  title: "Hi all, I'm Hatem",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications also softwares with Java / Python / JavaScript / Reactjs / Angular / Nodejs / React Native / springBoot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "http://hatemsfar.ga/resume/SFAR_HATEM_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrint01",
  linkedin: "https://www.linkedin.com/in/sfar-hatem-60b009199/",
  gmail: "sfarhatem7@yahoo.com",
  gitlab: "https://gitlab.com/mrint01",
  facebook: "https://facebook.com/hatem.sfar2",
  stackoverflow: "https://stackoverflow.com/users/11435199/mr-int",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / Back end for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
   
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ionic",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tek-up University",
      logo: require("./assets/images/tekup_logo.png"),
      subHeader: "Engineering Degree in Computer Science",
      duration: "September 2019 - May 2022",
      desc: "",
      descBullets: [
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "Apart from this, I have done courses on Deep Learning, Cloud Computing and Full Stack Development.",
        "I developed many academic projects that helps me to grow my skills."      ]
    },
    {
      schoolName: "Ismaik University",
      logo: require("./assets/images/ismaik_logo.jpg"),
      subHeader: "Bachelor's degree in Computer Networking",
      duration: "September 2016 - May 2019",
      desc: "",
      descBullets: ["I have studied basic of network like DNS, IP, IPV4,IPV6,Routage,etc...",
                    "I have done courses on how to secure a network , how to build a network secured"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "StartNow",
      companylogo: require("./assets/images/startnow.jpg"),
      date: "February 2022 – July 2022",
      desc: "Design and implementation of an international IT recruitment platform",
      descBullets: [
        "Build a platform as SaaS",
        "Created a platform full of cvs",
        "Use AI to ensure the recruiter to get the best candidate for his job offer",
        "Use GraphAPI to ensure the job offer are published to Facebook",
        "Recruiter can make the interview directly inside the platform (Call Video)",
        "Admin can manage all the users, cv's, job offers, interviews, request candidate, ..."
      ]
    },
    {
      role: "Software Engineer Inter",
      company: "Wimobi",
      companylogo: require("./assets/images/wimobi_logo.png"),
      date: "June 2021 – August 2021",
      desc: "Design and implementation of an Auction mobile app « ZID.TN »",
      descBullets: ["The customer can auction a product",
            "The customer can pay to get more tickets"]
    },
    {
      role: "Developer Front-end",
      company: "Agence Tanuki",
      companylogo: require("./assets/images/tanuki.png"),
      date: "January 2021 – August 2021",
      desc: "",
      descBullets: ["Website redesign",
                    "Creation of new custom modules"]
    },
    {
      role: "Software Engineer Inter",
      company: "Tek-up",
      companylogo: require("./assets/images/tekup_logo.png"),
      date: "July 2020 – August 2020",
      desc: "Find a solution for some advanced problems",
      descBullets: ["Find an algorithmic solution with Java language",
                    "Working with Codeforces Platform"]
    },
    {
      role: "Java Developer Intern",
      company: "Digital-Communication",
      companylogo: require("./assets/images/digital_logo.png"),
      date: "January 2019 – August 2019",
      desc: "Design and Implementation of a voice recognition software << Vocal Search >>",
      descBullets: ["Built a microservice application to manage different services.",
                    "Using sphinx as library in java",
                    "Use the Symfony framework",
                    "Use the cron server."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
   
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [ ""  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 50 427 046",
  email_address: "sfarhatem7@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
