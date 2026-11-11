export const levels = [
  { id: "profile", number: "01", label: "PLAYER PROFILE", title: "MEET THE PLAYER" },
  { id: "skills", number: "02", label: "ALIEN TECH", title: "THE POWER CORE" },
  { id: "experience", number: "03", label: "CAREER MISSIONS", title: "THE FLIGHT PATH" },
  { id: "projects", number: "04", label: "BUILD REVIEWS", title: "WHAT I HAVE BUILT" },
  { id: "contact", number: "05", label: "CONTACT CHANNEL", title: "LET'S CONNECT" },
] as const;

export const skills = [
  { name: "JavaScript", category: "LANGUAGE", level: "ADVANCED", note: "Modern JavaScript, async programming, closures, promises and event-driven application logic." },
  { name: "HTML5", category: "FRONTEND", level: "WORKING", note: "Semantic page structure, accessible markup and practical web layouts." },
  { name: "CSS3", category: "FRONTEND", level: "WORKING", note: "Responsive styling, layouts, transitions and custom visual effects." },
  { name: "C# / .NET", category: "LANGUAGE", level: "PROJECT EXPOSURE", note: "Used during an internship project involving a shared-meals application, database and API tasks." },
  { name: "Socket APIs", category: "BACKEND", level: "WORKING", note: "Real-time communication concepts and event-driven API workflows." },
  { name: "TypeScript", category: "LANGUAGE", level: "ADVANCED", note: "Typed application logic, interfaces, reusable types and maintainable API contracts." },
  { name: "Node.js", category: "BACKEND", level: "ADVANCED", note: "Backend services, REST APIs, authentication flows, integrations and business workflows." },
  { name: "Express.js", category: "BACKEND", level: "ADVANCED", note: "REST API architecture, routing, middleware, validation and controller/service patterns." },
  { name: "React.js", category: "FRONTEND", level: "ADVANCED", note: "Reusable components, hooks, state-driven interfaces and responsive application screens." },
  { name: "Next.js", category: "FRONTEND", level: "WORKING", note: "App Router, server/client components and full-stack React development." },
  { name: "Tailwind CSS", category: "FRONTEND", level: "ADVANCED", note: "Responsive interfaces, utility-first styling and consistent UI implementation." },
  { name: "Prisma ORM", category: "DATABASE", level: "ADVANCED", note: "Schema design, relations, transactions, query optimization and dynamic tenant clients." },
  { name: "MySQL", category: "DATABASE", level: "ADVANCED", note: "Relational data modelling, joins, indexes and data integrity for business applications." },
  { name: "MongoDB", category: "DATABASE", level: "WORKING", note: "Document-oriented data modelling and application persistence." },
  { name: "Redis", category: "SYSTEMS", level: "WORKING", note: "Caching, queue infrastructure and shared application state." },
  { name: "BullMQ", category: "SYSTEMS", level: "WORKING", note: "Background workers, delayed jobs, retries and scheduled processing." },
  { name: "Docker", category: "TOOLS", level: "WORKING", note: "Container-based development and deployment environments." },
  { name: "Git & GitHub", category: "TOOLS", level: "WORKING", note: "Version control, feature branches and collaborative source management." },
  { name: "REST APIs", category: "BACKEND", level: "ADVANCED", note: "Resource design, pagination, filtering, sorting, validation and consistent responses." },
  { name: "Practical AI Tools", category: "TOOLS", level: "WORKING", note: "Using Claude, GitHub Copilot, VS Code agents and Antigravity to accelerate exploration, coding and debugging." },
];

export const projects = [
  {
    id: "01",
    title: "HRMS SaaS Platform",
    type: "MULTI-TENANT BUSINESS SYSTEM",
    description: "An HRMS SaaS product that brings employee records and everyday workforce operations into one platform — from attendance and leave to shifts and work-week rules.",
    challenge: "Each organization needs its own data boundary, while shared backend code must still support different employee and HR workflows safely.",
    approach: "Developed and maintained Express APIs in TypeScript, connected tenant databases through Prisma, and worked across attendance, leave, shift scheduling, Redis/BullMQ jobs and email workflows.",
    outcome: "A modular backend foundation for tenant-aware HR operations, with asynchronous jobs supporting time-based workflows.",
    stack: ["Node.js", "TypeScript", "Express", "Prisma", "MySQL", "Redis", "BullMQ"],
    accent: "violet",
  },
  {
    id: "02",
    title: "Dutify",
    type: "FULL-STACK APPLICATION",
    description: "A full-stack application built around a TypeScript codebase and Prisma data access.",
    challenge: "Keep application features organized while making relational data access predictable and maintainable.",
    approach: "Used Prisma models and queries to connect application workflows with relational data.",
    outcome: "A hands-on project that strengthened experience with typed application logic and ORM-based data workflows.",
    stack: ["TypeScript", "Prisma", "Node.js"],
    accent: "pink",
  },
  {
    id: "03",
    title: "Sandhai",
    type: "MARKETPLACE PROJECT",
    description: "A marketplace application focused on connecting the core browsing and transaction experience into a single product flow.",
    challenge: "Bring marketplace features together in a clear experience for users moving through the product.",
    approach: "Worked across frontend screens and backend API workflows to connect the product experience with application data.",
    outcome: "A product-focused build demonstrating end-to-end application development.",
    stack: ["React", "Node.js", "REST APIs"],
    accent: "blue",
  },
  {
    id: "04",
    title: "TVK Backend",
    type: "HIERARCHICAL DATA PLATFORM",
    description: "A TypeScript and MongoDB backend for organizing voter and field-worker records through a multi-level geographic hierarchy.",
    challenge: "Model the hierarchy from state and district down to constituency, panchayat, village, ward and booth without losing the parent-child relationships.",
    approach: "Designed MongoDB-backed data structures for state, district, constituency, panchayat, village, ward and booth, including field-worker hierarchy.",
    outcome: "A backend foundation for navigating geographic records and associating field operations with the correct level.",
    stack: ["Node.js", "TypeScript", "MongoDB"],
    accent: "violet",
  },
  {
    id: "05",
    title: "Movie Review",
    type: "CONTENT APPLICATION",
    description: "A movie-review application that explores how movie information and user-facing review content can be organized in one place.",
    challenge: "Make it straightforward for users to discover movie information and move through review content.",
    approach: "Worked on the application interface and supporting data flow for the review experience.",
    outcome: "A content-driven application build focused on organizing information for end users.",
    stack: ["React", "Node.js", "REST APIs"],
    accent: "pink",
  },
  {
    id: "06",
    title: "Bible Fasting Tracker",
    type: "COMMUNITY APP CONCEPT",
    description: "A Bible-focused fasting tracker with a multilingual direction, designed around making fasting guidance easier to access across languages.",
    challenge: "Present fasting guidance and tracking in a way that can serve people across different language preferences.",
    approach: "Explored the tracking experience and the content/localization direction, with a stated goal of supporting 108 languages.",
    outcome: "A concept focused on accessible, multilingual Bible-based fasting guidance.",
    stack: ["Product Thinking", "Application Development", "Localization"],
    accent: "blue",
  },
];

export const experience = {
  intro: "A timeline of real work: from first team experience to building and supporting production software.",
  missions: [
    {
      number: "MISSION 01",
      period: "JAN 2024 — MAR 2024",
      role: "WordPress Intern",
      company: "GAOGAO",
      location: "INTERNSHIP",
      story: "First professional mission: learning how a live website is maintained, how content moves through a team workflow, and why small delivery details matter.",
      achievements: [
        "Worked with WordPress content-management workflows.",
        "Uploaded and organized website content.",
        "Built early experience collaborating with a team and completing delivery tasks."
      ],
      guide: "FIELD NOTE: Strong products are built from the details people depend on every day."
    },
    {
      number: "MISSION 02",
      period: "JUL 2024 — AUG 2024",
      role: "Software Development Intern",
      company: "NAFNAF",
      location: "INTERNSHIP",
      story: "The next mission moved closer to application engineering. I contributed to a shared-meals application and explored how backend logic, APIs and stored data connect.",
      achievements: [
        "Worked on a shared-meals application using C# and .NET.",
        "Contributed to database and API-related tasks.",
        "Learned how backend logic connects application features with stored data."
      ],
      guide: "FIELD NOTE: An interface is only the surface. The system underneath makes it work."
    },
    {
      number: "MISSION 03",
      period: "DEC 2024 — PRESENT",
      role: "Full Stack Developer",
      company: "Skyraan Technologies",
      location: "COIMBATORE · FULL-TIME",
      story: "Current mission: developing business software across APIs, data models, user interfaces and background workflows. My work spans day-to-day feature delivery as well as understanding how services behave together in a SaaS environment.",
      achievements: [
        "Developing backend services and REST APIs with Node.js, Express and TypeScript.",
        "Building frontend features with React, Next.js and Tailwind CSS.",
        "Working with Prisma, MySQL and MongoDB for application data workflows.",
        "Contributing to multi-tenant SaaS architecture and tenant-aware database access.",
        "Working on attendance, leave, shift and work-week modules in an HRMS platform.",
        "Using Redis and BullMQ for background jobs and scheduled processing.",
        "Working with Git, deployment environments and production debugging."
      ],
      guide: "FIELD NOTE: The real milestone is not shipping a screen. It is building a system people can rely on."
    }
  ]
};
