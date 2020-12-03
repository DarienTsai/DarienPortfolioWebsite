import aftermath from './media/aftermath.png';
import devdir from './media/devdir.png';
import fuo from './media/fuo.png';
import goalie from './media/goalie.png';
import koi from './media/koi.png';
import polar from './media/polar.png';
import todunnit from './media/todunnit.png';
import wildcat from './media/wildcat.png';
import wip from './media/wip.png';

let data = {
  header: {
    title: "This is me,",
    items: [
      "Using a new library.",
      "Building a project with friends!",
      "Reading an article.",
      "Reading the documentation.",
      "Building projects.",
      "Sleeping with my eyes open...",
      "Debugging...",
      "Staying up to date with tech."

    ]
  },

  skills: {
    title1: "- I usually work with -",
    icons1: [
      {
        link:"https://simpleicons.org/icons/node-dot-js.svg",
        name: 'Node'
      },
      {
        link:"https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
        name: 'Express'
      },
      {
        link:"https://simpleicons.org/icons/react.svg",
        name: 'React'
      },
      {
        link:"https://simpleicons.org/icons/redux.svg",
        name: 'Redux'
      },
      {
        link:"https://simpleicons.org/icons/visualstudiocode.svg",
        name: 'VS Code'
      },
      {
        link:"https://simpleicons.org/icons/git.svg",
        name: 'Git'
      },
      {
        link:"https://simpleicons.org/icons/sass.svg",
        name: 'Sass'
      },
      {
        link:"https://simpleicons.org/icons/html5.svg",
        name: 'HTML'
      },
      {
        link:"https://simpleicons.org/icons/css3.svg",
        name: 'CSS'
      }
    ],
    title2: "- I've also done things with -",
    icons2: [
      {
        link: "https://simpleicons.org/icons/mysql.svg",
        name: 'MySQL'
      },
      {
        link: "https://simpleicons.org/icons/mongodb.svg",
        name: 'MongoDB'
      },
      {
        link: "https://simpleicons.org/icons/python.svg",
        name: 'Python'
      },
      {
        link: "https://simpleicons.org/icons/socket-dot-io.svg",
        name: 'Socket.io'
      },
      {
        link: "https://simpleicons.org/icons/postcss.svg",
        name: 'PostCSS'
      },
      {
        link: "https://simpleicons.org/icons/bootstrap.svg",
        name: 'Bootstrap'
      },
      {
        link: "https://simpleicons.org/icons/postman.svg",
        name: 'Postman'
      },
      {
        link: "https://simpleicons.org/icons/cplusplus.svg",
        name: 'C++'
      },
      {
        link: "https://simpleicons.org/icons/java.svg",
        name: 'Java'
      },
      {
        link: "https://simpleicons.org/icons/heroku.svg",
        name: 'Heroku'
      },
      {
        link: "https://simpleicons.org/icons/figma.svg",
        name: 'Figma'
      },
      {
        link: "https://simpleicons.org/icons/adobephotoshop.svg",
        name: 'Photoshop'
      },
      {
        link: "https://simpleicons.org/icons/adobeillustrator.svg",
        name: 'Illustrator'
      },
      {
        link: "https://simpleicons.org/icons/adobeaftereffects.svg",
        name: 'After Effects'
      }
    ]
  },

  projects: {
    title: "- My Projects -",
    items: [
      {
        name:'Anonymous Chatroom',
        img:wip,
        desc:'A web app that that gives all visitors a real time socket.io chatroom. All visitors choose an alias before chat is opened to them.',
        link:'wip',
      },
      {
        name:'DevDir',
        img:devdir,
        desc:'An online platform for connecting active developers through a multi-tag skill search - IvyHacks 2020, team of 4.',
        link:'https://devpost.com/software/devdir-yzxp5b',
      },
      {
        name:'F.U.O.',
        img:fuo,
        desc:'Food Underutilization Optimization; A search index that tackles food insecurity by helping businesses make revenue through discounts - CSE110 class project, team of 10.',
        link:'https://corona-food.herokuapp.com/landing.html',
      },
      {
        name:'Koi',
        img:koi,
        desc:'Web based color palette builder, with focus on ease, sharability, and organization. Workspaces can be shared by link or exported to a print ready format.',
        link:'https://darientsai.github.io/Koi-color-palette-builder/index.html',
      },
      {
        name:'Goalie',
        img:goalie,
        desc:'A quirky Java desktop application for goal setting and goal getting. Locally manage long/short term goals with categories, notes, and playful emojis - Dark mode UI included!',
        link:'https://darientsai.github.io/Goalie-desktop/site/index.html',
      },
      {
        name:'ToDunnit',
        img:todunnit,
        desc:'A lightweight, command-line styled todo list implemented in python.',
        link:'https://github.com/DarienTsai/ToDunnit',
      },
      {
        name:'Aftermath',
        img:aftermath,
        desc:'An online study platform that tackles math anxiety by leveraging peer-to-peer collaboration sessions - 1st Place CA-39 Congressional App Challenge, team of 4.',
        link:'https://github.com/kalvinchang/aftermath',
      },
      {
        name:'Polar',
        img:polar,
        desc:'A proof-of-concept implementation of a GUI; the interface is made using mainly circles rather than boxes.',
        link:'https://polar-ui-ideas.firebaseapp.com/',
      },
      {
        name:'The Wildcat',
        img:wildcat,
        desc:'The proposed campus news/directory app for my high school - team of 16.',
        link:'https://gaw-wildcat-app.firebaseapp.com/',
      }
    ]
  },

  about: {
    bio: 'I\'m a full stack developer who\'s all about clean code, dynamic pages, and building exceptional applications.',
    title: "Let's connect!",
    items: [
    'https://github.com/DarienTsai',
    'https://www.linkedin.com/in/darientsai/',
    'mailto:darientsai@gmail.com'
    ]
  },

  reads: {
    title: 'Places I go to read...',
    items:[
      {
        name: 'The Mega Full-Stack Web Development Resource Guide',
        link: 'https://hawkticehurst.com/mega-full-stack-resource-guide/',
        desc: 'A collection of resources for growing web developers. This post covers an exhaustive collection of modern industry topics from many sources. Persoanlly, this is my go-to for finding out new topics.' 
      },
      {
        name: 'Mozilla Developer Network',
        link: 'https://developer.mozilla.org/en-US/',
        desc: 'A 3rd party documentation on various web technologies, including languages, frameworks, API\'s, and more. The site also includes tutorials for people who are starting out. Usually, I come here to clarify syntax for projects I work on.'
        },
      { 
        name: 'Smashing Magazine',
        link: 'https://www.smashingmagazine.com/',
        desc: 'An online resource/community that publishes news and tips for (usually) front end development. Developers can also publish their own articles here. Typically, I go here when I want to read about something my visual/artistic.'
      },
      {
        name: 'Webdesigner News',
        link: 'https://www.webdesignernews.com/',
        desc: 'An online resource/community that publishes news for (usually) front end design. Topics are often either technical or design oriented. I visit this site to stay up to date with web design.'
      },
      {
        name: "Hacker Noon",
        link: 'https://hackernoon.com/',
        desc: 'An online information platform for people in technology. This site contains the latest information related to tech, technical/tutorial writings, and lets users publish their own articles. I use this as a source of general tech information.'
      },
      { 
        name: 'w3schools',
        link: 'https://www.w3schools.com/',
        desc: 'A 3rd party, web technology documentation that is beginner friendly and straight to the point. Tutorials give readers a strong foundation on core web technologies, which include langauges, API\'s, and frameworks. This is my preferred source of core web documentation.'
      },
      { 
        name: 'Github.com',
        link: 'https://github.com/',
        desc: 'An online client/social media for developers that hosts remote repositories and projects for users. Although repositories are intended for projects, they may also be used for publication and distribution. I use Github to store my own projects and view others.'
      },
      { 
        name: 'Google.com',
        link: 'https://www.google.com/',
        desc: 'One of the most popular search engines/productivity suites in the current age. Google is often a first or last resort to curiosities and troubleshooting. I use Google for everything.'
      }
    ]
  }

}

export default data;