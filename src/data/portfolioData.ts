import { ProfileInfo, SkillCategory, Project, EducationItem, CertificationItem } from '../types/portfolio';
import attendanceBannerImg from '../assets/images/face_attendance_banner_1791780551925.jpg';

export const initialProfile: ProfileInfo = {
  name: "Siva Subramanian K",
  headline: "Final-Year Engineering Student | Aspiring IT Professional",
  college: "PSR Engineering College",
  collegeLocation: "Sivakasi, Tamil Nadu, India",
  degree: "Bachelor of Technology (B.Tech)",
  department: "Artificial Intelligence & Data Science",
  currentYear: "Final-Year (4th Year)",
  graduationYear: "2027",
  cgpa: "8.42 / 10.0 (Placeholder)",
  bio: "Final-year engineering student at PSR Engineering College with a strong passion for software engineering, web application development, and problem-solving. Actively seeking entry-level IT roles, graduate engineer trainee (GET) positions, and internships.",
  detailedAbout: [
    "I am currently completing my final year of engineering at PSR Engineering College, Sivakasi. My academic journey has provided me with a rigorous foundation in core computer science disciplines, including data structures, object-oriented programming, database management systems, and software engineering methodologies.",
    "Driven by an analytical mindset and curiosity about practical technological solutions, I enjoy bridging computational concepts with user-friendly web interfaces and computer vision tools. I developed an automated Face Recognition-Based Attendance Management System to address real-world classroom administrative inefficiencies.",
    "I am eager to contribute my technical aptitude, discipline, and fast-learning capability to dynamic software engineering teams. My objective is to secure an entry-level IT role where I can contribute to mission-critical products while growing into a well-rounded software engineer."
  ],
  careerGoal: "Seeking Entry-Level IT Roles, Graduate Software Engineer Positions & Technical Internships",
  email: "23ad015@psr.edu.in",
  secondaryEmail: "sivasubramanian.k.eng@gmail.com",
  phone: "+91 98765 43210 (Editable)",
  location: "Sivakasi / Virudhunagar, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/siva-subramanian-k",
};

export const initialSkillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core algorithmic foundations and object-oriented languages.",
    skills: [
      { name: "Python", level: "Intermediate", context: "Scripting, OpenCV, Data Processing" },
      { name: "Java", level: "Intermediate", context: "Core Java, OOP Concepts, Collections" },
      { name: "C / C++", level: "Intermediate", context: "Data Structures & Memory Basics" },
      { name: "JavaScript (ES6+)", level: "Intermediate", context: "Async/Await, DOM, Modern Syntax" },
      { name: "SQL", level: "Intermediate", context: "DDL, DML, Joins, Indexing" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Frontend responsive user interfaces and backend API integration.",
    skills: [
      { name: "React.js", level: "Intermediate", context: "Functional Components, Hooks, State" },
      { name: "HTML5 & CSS3", level: "Proficient", context: "Semantic Markup, Modern Flexbox/Grid" },
      { name: "Tailwind CSS", level: "Proficient", context: "Responsive Utility-First Styling" },
      { name: "Node.js & Express", level: "Familiar", context: "RESTful API Architecture Basics" },
      { name: "REST APIs", level: "Intermediate", context: "JSON Payloads, Client Integration" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Relational data modeling, schema normalization, and data persistence.",
    skills: [
      { name: "MySQL", level: "Intermediate", context: "Relational Schemas, Constraints, Joins" },
      { name: "PostgreSQL", level: "Familiar", context: "Relational Queries & CRUD Operations" },
      { name: "SQLite", level: "Intermediate", context: "Embedded App Storage & Prototyping" },
      { name: "Database Normalization", level: "Intermediate", context: "1NF, 2NF, 3NF Integrity" },
    ],
  },
  {
    id: "tools-testing",
    title: "Software Testing & Tools",
    description: "Version control, developer toolchains, and quality verification.",
    skills: [
      { name: "Git & GitHub", level: "Intermediate", context: "Commits, Branches, PRs, Workflow" },
      { name: "Postman", level: "Intermediate", context: "API Endpoint Testing & Validation" },
      { name: "VS Code", level: "Proficient", context: "Extensions, Debugging, Environment" },
      { name: "Manual & Unit Testing", level: "Familiar", context: "Test Cases, Edge Cases, Verification" },
      { name: "Vite", level: "Intermediate", context: "Modern Fast Bundling & Dev Server" },
    ],
  },
  {
    id: "core-cs",
    title: "Core Engineering & Technical Skills",
    description: "Fundamental computer science theory and engineering principles.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Intermediate", context: "Arrays, Lists, Trees, Sorting, Searching" },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", context: "Inheritance, Polymorphism, Abstraction" },
      { name: "Computer Networks Basics", level: "Familiar", context: "OSI Model, TCP/IP, HTTP/HTTPS" },
      { name: "Operating Systems Fundamentals", level: "Familiar", context: "Processes, Threads, Memory Management" },
      { name: "Computer Vision Basics", level: "Intermediate", context: "OpenCV, Haar Cascades, Face Encodings" },
      { name: "SDLC & Agile Awareness", level: "Familiar", context: "Iterative Development, Documentation" },
    ],
  },
];

export const initialProjects: Project[] = [
  {
    id: "face-attendance",
    title: "Face Recognition-Based Attendance Management System",
    category: "Computer Vision & Python",
    status: "Completed Academic Project",
    isFlagship: true,
    image: attendanceBannerImg,
    problemStatement:
      "Traditional manual attendance marking in academic classrooms and laboratory sessions is time-consuming, disruptively manual, and susceptible to proxy check-ins.",
    description:
      "An automated attendance management desktop and backend solution using computer vision techniques. The system detects faces in a live video stream, encodes facial landmarks, compares them against a pre-registered student database, and logs verified attendance timestamps directly into an organized database.",
    technologies: ["Python", "OpenCV", "Face Recognition (dlib)", "SQLite / MySQL", "Tkinter / Flask", "Pandas"],
    keyFeatures: [
      "Real-time video feed capture and automatic face detection bounding boxes",
      "Student facial enrollment pipeline with multi-angle image registration",
      "Duplicate attendance prevention ensuring each student is marked only once per lecture",
      "Automated attendance report generation with one-click export to CSV / Excel",
      "Administrative interface to view student rosters, daily summaries, and absent records",
    ],
    githubUrl: "https://github.com/sivasubramanian-k/face-recognition-attendance",
    demoUrl: "#face-attendance-preview",
  },
  {
    id: "campus-placement-portal",
    title: "Campus Placement & Drive Management Portal",
    category: "Full-Stack Web Development",
    status: "Final-Year Academic Project",
    isFlagship: false,
    problemStatement:
      "College placement departments frequently manage recruitment drives through fragmented messaging apps and spreadsheet notices, resulting in missed deadlines and eligibility confusion.",
    description:
      "A centralized web portal designed for engineering colleges to coordinate placement drive notices, track student registrations, and automatically verify company-specific CGPA and back-log eligibility criteria.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "MySQL", "REST APIs"],
    keyFeatures: [
      "Student dashboard for managing profile details, resumes, and academic track record",
      "Recruiter and placement coordinator bulletin board for posting upcoming on-campus drives",
      "Automated eligibility filtering based on minimum CGPA, department, and standing arrears",
      "Real-time application status tracking (Applied, Shortlisted, Interview, Offer)",
      "Clean responsive design optimized for mobile and desktop screens",
    ],
    githubUrl: "https://github.com/sivasubramanian-k/campus-placement-portal",
    demoUrl: "#placement-portal-preview",
  },
  {
    id: "cgpa-performance-planner",
    title: "Student Academic CGPA & Credit Performance Planner",
    category: "Frontend Web Application",
    status: "Completed Academic Project",
    isFlagship: false,
    problemStatement:
      "Students calculate grade point averages manually using calculators, making it hard to forecast what grades they need in upcoming semesters to meet placement cutoffs.",
    description:
      "A lightweight, intuitive academic calculator configured to match Anna University and autonomous engineering credit regulation grade scales. Allows students to simulate semester grades and determine target marks needed for goal CGPAs.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Local Storage API"],
    keyFeatures: [
      "Regulation-compliant grade-to-credit point mapping (O, A+, A, B+, B, C, U)",
      "Interactive semester credit calculator with immediate SGPA and cumulative CGPA updates",
      "Target goal simulator predicting minimum GPA needed in remaining semesters",
      "100% offline-ready with zero server latency; saves grades locally in the browser",
    ],
    githubUrl: "https://github.com/sivasubramanian-k/cgpa-performance-planner",
    demoUrl: "#cgpa-planner-preview",
  },
];

export const initialEducation: EducationItem[] = [
  {
    id: "psr-eng",
    institution: "PSR Engineering College",
    location: "Sivakasi, Tamil Nadu, India",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Data Science",
    duration: "2023 – 2027 (Final Year)",
    score: "CGPA: 8.42 / 10.0 (Placeholder - Editable)",
    isCurrent: true,
    notes: [
      "Autonomous institution accredited by NAAC with 'A+' Grade and NBA.",
      "Key Coursework: Data Structures & Algorithms, Database Systems, Object-Oriented Programming with Java & Python, Computer Networks, Software Engineering.",
      "Active participant in technical club initiatives, department symposiums, and coding events.",
    ],
  },
  {
    id: "hsc",
    institution: "Higher Secondary Certificate (HSC - Class XII)",
    location: "Tamil Nadu State Board",
    degree: "Higher Secondary Certificate (Class XII)",
    field: "Computer Science, Mathematics, Physics, Chemistry",
    duration: "2021 – 2023",
    score: "Percentage: 88.5% (Placeholder - Editable)",
    isCurrent: false,
    notes: [
      "Focused on advanced mathematics and introductory computer science fundamentals.",
      "Strong foundation in algorithmic thinking and procedural programming in C++.",
    ],
  },
  {
    id: "sslc",
    institution: "Secondary School Leaving Certificate (SSLC - Class X)",
    location: "Tamil Nadu State Board",
    degree: "Secondary School Certificate (Class X)",
    field: "General Science, Mathematics, English, Social Sciences",
    duration: "2020 – 2021",
    score: "Percentage: 91.2% (Placeholder - Editable)",
    isCurrent: false,
    notes: [
      "Completed secondary education with distinction in Mathematics and Science.",
    ],
  },
];

export const initialCertifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Python Programming Foundations",
    issuer: "Infosys Springboard / NPTEL (Verified Placeholder)",
    year: "2024",
    category: "Certification",
    credentialId: "INF-PY-2024-0891",
    description: "Comprehensive training covering procedural programming, object-oriented concepts, file operations, and standard libraries.",
  },
  {
    id: "cert-2",
    title: "Database Management & SQL Essentials",
    issuer: "Oracle Academy / HackerRank (Verified Placeholder)",
    year: "2024",
    category: "Certification",
    credentialId: "ORA-SQL-98231",
    description: "Hands-on mastery of relational databases, schema normalization, aggregate queries, and table relationships.",
  },
  {
    id: "cert-3",
    title: "Responsive Web Development with Modern HTML5/CSS3/JavaScript",
    issuer: "freeCodeCamp / Coursera (Verified Placeholder)",
    year: "2025",
    category: "Certification",
    credentialId: "FCC-WD-4410",
    description: "In-depth course on modern responsive web layouts, accessibility, DOM manipulation, and component thinking.",
  },
  {
    id: "work-1",
    title: "Hands-on Workshop on Computer Vision & Image Processing",
    issuer: "PSR Engineering College, Department of AI&DS",
    year: "2024",
    category: "Workshop",
    description: "2-day hands-on practical session on OpenCV, edge detection, facial feature extraction, and real-time camera processing.",
  },
  {
    id: "work-2",
    title: "Full-Stack Web Development Boot Camp",
    issuer: "Department Technical Association",
    year: "2024",
    category: "Workshop",
    description: "Practical workshop on building single-page applications with React.js, Tailwind CSS, and REST API integration.",
  },
  {
    id: "ach-1",
    title: "Department Coding Challenge Finalist",
    issuer: "PSR Engineering College Intra-College Contest",
    year: "2024",
    category: "Achievement",
    description: "Ranked among top performers in solving time-constrained algorithmic problems in Python and Java.",
  },
  {
    id: "ach-2",
    title: "Technical Paper Presentation on AI in Smart Attendance Systems",
    issuer: "National Level Technical Symposium",
    year: "2025",
    category: "Achievement",
    description: "Presented research and architecture methodology for low-latency facial recognition in educational environments.",
  },
  {
    id: "extra-1",
    title: "Student Technical Association Event Coordinator",
    issuer: "PSR Engineering College",
    year: "2024 – Present",
    category: "Extracurricular",
    description: "Assisted faculty coordinators in organizing coding competitions, technical quizzes, and guest lectures for peer students.",
  },
];
