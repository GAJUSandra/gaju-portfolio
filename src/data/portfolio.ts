export const profile = {
  name: "GAJU Sandra",
  title: "Software Developer · Software Engineering Student",
  location: "Kicukiro, Kigali, Rwanda",
  email: "gajusandra872@gmail.com",
  phone: "+250 785 973 658",
  linkedin: "https://www.linkedin.com/in/gaju-sandra-32838a26a",
  github: "https://github.com/gaju-sandra",
  whatsapp: "250785973658",
  intro:
    "I'm an Information Technology student at AUCA, specializing in Software Engineering. Most of what I know I picked up by building things — web apps, small systems, and projects I kept breaking and fixing until they worked. I'm just as comfortable in front of a room as I am in front of an editor, which is something I've built up through club work, facilitating coding sessions, and MC-ing events.",
};

export const about = [
  "I'm studying Information Technology at Adventist University of Central Africa (AUCA), on the Software Engineering track. My interest started with wanting to understand how the apps I use every day actually work, and it turned into a habit of building small versions of them myself.",
  "Frontend is where I spend most of my time right now — JavaScript, React, and getting interfaces to feel clean and predictable. I also work on the backend side with Java and Spring Boot, and I've done a fair amount of software testing and requirements engineering coursework, which changed how I think about writing code: less guessing, more checking.",
  "The other half of me is the people side. I've coordinated university programs and meetings, facilitated coding sessions for the 1 Million Rwandan Coders program, and led a debating club. I like explaining things, I like organizing them, and I don't mind being the person who has to speak when the room goes quiet.",
  "I'm still early in my career and I say that honestly. I'm not the developer who knows everything — I'm the one who will sit with a problem, look it up, try three approaches, and come back with something that works and an explanation of why.",
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "Python", "C++", "C#", "SQL"],
  },
  {
    category: "Web & Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "REST API Integration"],
  },
  {
    category: "Backend & Software Development",
    items: ["Spring Boot", "Java", "REST APIs", "Debugging", ".NET / C#"],
  },
  { category: "Databases", items: ["MySQL", "SQL", "Database Management"] },
  {
    category: "Tools",
    items: ["Git / GitHub", "Docker", "Postman", "Flutter"],
  },
  {
    category: "Software Engineering Practice",
    items: [
      "Requirements Engineering",
      "Software Testing",
      "Test Case Design",
      "Debugging",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  role: string;
  tech: string[];
  features: string[];
  learned: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "CarePrompt",
    tagline:
      "A mobile health-support concept built around working offline and speaking the user's language.",
    problem:
      "Health guidance apps usually assume a stable internet connection and English-speaking users. In a lot of Rwandan settings neither is true, so the tool becomes useless exactly where it's needed most.",
    role:
      "I worked on the app's modules and interface flow, and on the bilingual English/Kinyarwanda content handling so the same guidance reads naturally in both languages.",
    tech: ["Flutter", "Mobile", "FHIR-based data structure", "Offline-first AI concept"],
    features: [
      "Designed to work offline, without depending on connectivity",
      "Bilingual English / Kinyarwanda support",
      "Health data modelled on the FHIR standard",
      "Mobile-first, built for phones people actually own",
    ],
    learned:
      "That constraints shape architecture. Deciding 'this has to work offline' changed almost every other decision that came after it, and translating an interface properly is a design problem, not just a text swap.",
  },
  {
    name: "Nexa Event Management System",
    tagline: "A system for planning events and keeping track of who's doing what.",
    problem:
      "Event organizing tends to live in WhatsApp groups and notebooks, which means details get lost between the people planning and the people running the event.",
    role:
      "I worked on the application logic and the interface for creating and managing events, plus the database side for storing events and participants.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    features: [
      "Create and manage events with their details",
      "Participant and registration tracking",
      "Database-backed records instead of scattered notes",
    ],
    learned:
      "How to structure a backend around real entities and relationships, and how much easier the frontend becomes when the data model is thought through first.",
  },
  {
    name: "AUCA Library Management System",
    tagline: "Borrowing, returning, and tracking books without the paper trail.",
    problem:
      "Manual library records make it hard to know what's available, what's overdue, and who has what.",
    role:
      "I worked on the core management features — adding books, handling borrow and return operations — and on the database queries behind them.",
    tech: ["Java", "MySQL", "SQL"],
    features: [
      "Book catalogue with add, update, and search",
      "Borrow and return tracking",
      "Reports on availability and borrowed items",
    ],
    learned:
      "Writing queries that stay correct under real use, and the value of validating input before it reaches the database.",
  },
  {
    name: "Student Management System",
    tagline: "A CRUD system for student records, built to learn the fundamentals properly.",
    problem:
      "Keeping student information consistent across registration, courses, and results is tedious when it's done by hand.",
    role:
      "I built the record management features and the database schema, and handled the forms and validation on the interface side.",
    tech: ["Java", "MySQL", "SQL"],
    features: [
      "Add, edit, search, and delete student records",
      "Course and result information linked to students",
      "Input validation on entry forms",
    ],
    learned:
      "This was where CRUD stopped being a word from a lecture and became something I could build end to end.",
  },
  {
    name: "Film Fan — Movie Website",
    tagline: "A movie browsing site that taught me how to work with an external API.",
    problem:
      "I wanted to practise pulling live data into a frontend instead of hard-coding everything.",
    role:
      "I built the whole frontend — layout, components, the search and filtering, and the API calls that fetch and display movie data.",
    tech: ["JavaScript", "React.js", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Search movies and browse results",
      "Detail view for each film",
      "Responsive layout for phone and desktop",
    ],
    learned:
      "Handling loading and error states properly. My first version looked broken whenever the request was slow, and fixing that taught me more than the happy path did.",
  },
  {
    name: "Flosun Flower Shop",
    tagline: "An online storefront for a flower shop.",
    problem:
      "A small shop needs a way to show what it sells and take orders without relying only on social media posts.",
    role:
      "I worked on the frontend — product listing, layout, and the ordering flow — and on connecting it to the stored product data.",
    tech: ["JavaScript", "React.js", "HTML5", "CSS3", "MySQL"],
    features: [
      "Product catalogue with images and prices",
      "Cart and order flow",
      "Clean, mobile-friendly layout",
    ],
    learned:
      "That layout and clarity are part of the functionality. If someone can't tell what's for sale, nothing else about the code matters.",
  },
  {
    name: "Eat Up",
    tagline: "A food ordering app, and my first proper build in Flutter.",
    problem:
      "I wanted to move beyond web and understand how a mobile app is structured and navigated.",
    role:
      "I built the app screens and navigation, and the menu and ordering flow.",
    tech: ["Flutter", "Dart", "Mobile"],
    features: [
      "Browse a menu by category",
      "Add items to an order",
      "Multi-screen navigation",
    ],
    learned:
      "Mobile layout thinking is different from web. Screen space is tight and every extra tap counts.",
  },
  {
    name: "Quiz App",
    tagline: "A small quiz application, and a good lesson in state.",
    problem:
      "I wanted something simple enough to finish but tricky enough to force me to manage state properly.",
    role: "I built it end to end — questions, scoring, and the result screen.",
    tech: ["JavaScript", "React.js", "HTML5", "CSS3"],
    features: [
      "Question flow with multiple choice answers",
      "Score tracking and final results",
      "Restart without reloading the page",
    ],
    learned:
      "How component state actually behaves, and why keeping one source of truth saves you from strange bugs later.",
  },
];

export const experience = [
  {
    role: "Front-End Development Intern",
    org: "Bank of Kigali",
    period: "2026",
    body: [
      "I worked on front-end development tasks inside the bank's IT function. It was my first time writing code in an environment where other people depended on it, and that changed how careful I was — with naming, with structure, with asking before assuming.",
      "The biggest thing I took from it wasn't a framework. It was seeing how work moves through a real team: how requirements arrive, how feedback is given, and how much of software development is communication.",
    ],
    tech: ["JavaScript", "React.js", "HTML5", "CSS3", "Git / GitHub"],
  },
];

export const leadership = [
  {
    role: "Facilitator — 1 Million Rwandan Coders Program",
    org: "AUCA Innovation Club",
    period: "2025",
    body: "I facilitated coding sessions for a national digital-skills initiative. Explaining a concept to someone who's seeing it for the first time is the fastest way to find out how well you actually understand it yourself.",
  },
  {
    role: "Coordinator — Programs & Meetings",
    org: "AUCA",
    period: "2024 – 2025",
    body: "I coordinated university programs and meetings: planning schedules, keeping people informed, and making sure things ran on the day they were supposed to.",
  },
  {
    role: "Volunteer",
    org: "iDebate Rwanda",
    period: "2023 – 2024",
    body: "I supported debate training and events — helping with sessions, logistics, and keeping participants organized.",
  },
  {
    role: "Prefect in Charge of Entertainment",
    org: "Lycée de Zaza",
    period: "2019 – 2022",
    body: "A student leadership role where I organized entertainment activities for the school, from planning through to running them.",
  },
  {
    role: "Leader — Debating Club",
    org: "Lycée de Zaza",
    period: "2019 – 2022",
    body: "I led club activities and mentored other members. Debate is where I learned to build an argument, listen properly, and stay steady under pressure.",
  },
];

export const mc = {
  intro:
    "I've spent a lot of time on a microphone — as an entertainment prefect organizing and hosting school activities, running debate sessions with iDebate Rwanda, and coordinating and hosting university programs and meetings at AUCA.",
  outro:
    "I don't see this as a separate career. It's the reason I'm comfortable presenting a project, explaining a technical decision to someone non-technical, or running a session when the plan changes halfway through.",
  skills: [
    { label: "Public speaking", note: "Speaking clearly to a room without losing them." },
    { label: "Confidence", note: "Being okay with attention on me." },
    { label: "Audience engagement", note: "Reading a room and adjusting the energy." },
    { label: "Event coordination", note: "Keeping a programme moving on time." },
    { label: "Adaptability", note: "Handling the part of the plan that falls apart." },
    { label: "Thinking on my feet", note: "Filling a gap without it showing." },
    { label: "Working with people", note: "Speakers, organizers, and guests, all at once." },
    { label: "Professional presence", note: "Steady tone, prepared, on time." },
  ],
};

export const learning = [
  {
    title: "JavaScript, deeper",
    body: "Going past syntax into async behaviour, closures, and why code runs in the order it does.",
  },
  {
    title: "React",
    body: "Component structure, state management, and building interfaces that stay maintainable as they grow.",
  },
  {
    title: "Frontend development",
    body: "Responsive layout, accessibility basics, and making things feel good to use, not just look right.",
  },
  {
    title: "Software development practices",
    body: "Clean structure, readable code, testing my own work before someone else has to.",
  },
  {
    title: "Git & GitHub",
    body: "Branching, meaningful commits, and collaborating without stepping on other people's work.",
  },
  {
    title: "Finishing complete projects",
    body: "Taking a project all the way to deployed and documented, not just 'it runs on my machine'.",
  },
];

export const philosophy = [
  "I learn best when I can build the thing. I'll read or watch enough to understand the concept, then immediately try it on something small, because that's where I find out what I actually missed.",
  "Then it breaks. I read the error, look at what I assumed, and fix it — and usually that debugging session is where the concept finally sticks.",
  "After it works I go back and improve it: rename things, remove what I copied without understanding, restructure the parts I now know were wrong. The second pass is where the project becomes mine.",
];
