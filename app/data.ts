export const profilePic: string[] = ["/images/profile-pic.jpeg"];

export const vitaeContext: string =
  "I am a dedicated software and control engineer with a deep commitment to " +
  "the core pillars of mechatronics: mechanical design, control systems and " +
  "software development. I enjoy adapting quickly and expanding my " +
  "knowledge to deliver innovative, high-impact solutions.";
  
export const heroName: string = "Raif Karaahmetoğlu";
export const jobTitle: string = "SOFTWARE & CONTROL ENGINEER";

export const resumeFileName: string = "Raif_Karaahmetoglu_Resume.pdf";
export const resumeHref: string = "/Raif_Karaahmetoglu_Resume.pdf";

export const heroCtaLabel: string = "Get in touch";
export const resumeCtaLabel: string = "Résumé";

export const socialLinks = {
  linkedin: "https://linkedin.com/in/raif-karaahmetoglu",
  github: "https://github.com/SonofDarkAhmet",
};

export const footerCopyright: string = "© 2026 All rights reserved.";
export const footerTagline: string =
  "Thanks for visiting! Feel free to connect with me.";

export const sectionTitles = {
  experience: "Experience",
  projects: "Selected projects",
  skills: "Skills",
  contact: "Contact",
};

export const readCaseStudyLabel: string = "Read case study →";

export const contactSuccessMessage: string =
  "Thanks — your message has been sent. I'll get back to you soon.";

export type Stat = {
  value: string;
  label: string;
  sub: string;
};

export const stats: Stat[] = [
  { value: "€5M+", label: "Annual revenue safeguarded", sub: "Modernized AVL's ISAC library to protect its real-time simulation market position" },
  { value: "€1.5M", label: "R&D budget secured", sub: "TEYDEB-funded diesel control program" },
  { value: "66%", label: "Test benches restored", sub: "Full department turnaround in one year" },
  { value: "3", label: "Published papers", sub: "IEEE Transactions & OTEKON congress" },
];

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  detail: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "e1",
    role: "Software Development Engineer",
    company: "AVL MTC Motortestcenter AB",
    location: "Stockholm, Sweden",
    period: "09/2024 — Present",
    summary: "Python mapping application generating drivable areas from LiDAR/GPS for autonomous mining vehicles.",
    detail: "Automated the build/install process via CI pipelines, redesigned the threaded data-download procedure, and introduced a UI architecture separating interface from logic. Ensured auxiliary C++ projects meet MISRA C++ 23 at Scania, and ran systems-engineering work on hauler wiper control and IMU self-calibration at Volvo Construction Equipment.",
  },
  {
    id: "e2",
    role: "Application Development Engineer",
    company: "AVL List GmbH",
    location: "Istanbul, Türkiye",
    period: "07/2018 — 09/2024",
    summary: "Modernized the ISAC vehicle-simulation library and integrated the EPA GEM model onto a real power-pack test rig.",
    detail: "Increased ISAC's position in the real-time simulation market, safeguarding to roughly €5M in annual revenue. Built Route Studio vehicle subsystem models, a battery-parameter Model Factory, an RDE cycle generator, FMI/Model.Connect modules, and an automated dSPACE HIL project-creation tool.",
  },
  {
    id: "e3",
    role: "Electronic Design Supervisor",
    company: "Hema Endüstri A.Ş.",
    location: "Tekirdağ, Türkiye",
    period: "08/2016 — 02/2018",
    summary: "Led the Test Systems department, recommissioning 66% of inoperable test benches within a year.",
    detail: "Coordinated electro-hydraulic steering control unit development, set guidelines curbing wiring and interference issues, mentored test engineers, and led a Bluetooth-controlled electro-hydraulic lift project shown at exhibitions.",
  },
  {
    id: "e4",
    role: "R&D Engineer",
    company: "Tümosan A.Ş.",
    location: "Istanbul, Türkiye",
    period: "10/2013 — 01/2015",
    summary: "Secured a €1.5M TEYDEB-funded program to build the company's control & electronics lab.",
    detail: "Developed mean-value and zero-dimensional diesel engine simulation models and led a small controls engineering team.",
  },
  {
    id: "e5",
    role: "Electromechanics Design Engineer",
    company: "Otokar A.Ş.",
    location: "Sakarya, Türkiye",
    period: "03/2012 — 08/2013",
    summary: "Designed the mechanical infrastructure for UCOK, a compact remote-controlled weapon station.",
    detail: "Delivered the turret and RCWS mechanical design from concept through integration into the company's ground-defence vehicle product line.",
  },
  {
    id: "e6",
    role: "Volunteer Researcher",
    company: "Mekar Laboratory",
    location: "Istanbul, Türkiye",
    period: "06/2010 — 08/2011",
    summary: "Built the semi-autonomous vehicle and CACC control algorithm for the Grand Cooperative Driving Challenge.",
    detail: "Team Mekar finished 7th of 11 overall entries at GCDC 2011 in the Netherlands; the work was later published in IEEE Transactions on Intelligent Transportation Systems.",
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  headline: string;
  content: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "GCDC",
    description: "Grand Cooperative Driving Challange",
    images: [
      "https://www.gcdc.net/wp-content/uploads/2024/10/logo_gcdc2.png",
      "https://www.okan.edu.tr/uploads/pages/mekar-grand-cooperative-driving-challenge-projesi/2.gif",
      "/images/gcdc-2.png",
      "/images/gcdc-3.png",
    ],
    headline:
      "Built a semi-autonomous vehicle for the GCDC 2011 platooning competition — mechanical design, a dynamics model, and an LQR-based cooperative cruise controller.",
    content: `The Grand Cooperative Driving Challenge (GCDC) is a European competition that tests cooperative driving between autonomous vehicles communicating over public roads. Teams demonstrate vehicle-to-vehicle platooning to advance road safety and traffic efficiency.

Our team's vehicle ran a self-developed Cooperative Adaptive Cruise Control (CACC), following the vehicle ahead in an autonomous convoy using inter-vehicle communication modems. It accelerated and braked without driver input, stopped and started at traffic lights via roadside modems, and obeyed posted speed limits automatically. The competition covered 20 race laps on a 6km closed section of the A270 motorway, speed limit 100km/h.

My work covered designing and manufacturing mechanical parts, including a brake system actuator and device mounting fixtures, then testing the vehicle at OTAM laboratories to derive engine and brake maps for controller design. I built a vehicle dynamics model and longitudinal controller for throttle and brake, and developed an LQR-based control algorithm to hold the safest possible following distance.

Team Mekar finished 7th overall out of 11 teams. Our control algorithm handled the lead car's unknown and demanding speed profile well enough to place 5th of 11 on that metric specifically, and the approach was highly praised by competition judges.`,
  },
  {
    id: 2,
    title: "UCOK",
    description: "Remote controlled weapon station",
    images: [
      "/images/ucok-1.png",
      "https://armyrecognition.com/images/stories/independent/azerbaijan/exhibition/adex_2016/news/ADEX%202016%20Otokar%20presents%20new%20UCOK%20stabilized%20remote%20control%20weapon%20station_ADEX_2016_002.jpg",
      "https://ic.pics.livejournal.com/bmpd/38024980/2089179/2089179_original.jpg",
    ],
    headline:
      "Designed a new lightweight sight system for a remote-controlled weapon station, cutting weight and size while staying interchangeable with the existing heavy gun line.",
    content: `Our prior expertise was in heavy gun systems above 12.7mm caliber. The brief called for a new lightweight RCWS with an independent front-mounted sight, greater elevation range, double the ammunition capacity, a recoil system on the elevation axis, and compatibility with three different weapons on the same mount — while reusing the existing heavy sight box and drive units.

A benchmarking survey of competing systems set the design criteria, and it quickly became clear that the heavy sighting system was the bottleneck: its size and weight cascaded into every other constraint on the mount. Management initially rejected optimizing it, but the opportunity to redesign it directly was the key to unlocking the rest of the project.

I developed a new lightweight, compact, easy-to-calibrate sight system that cut unbalance, size, and weight while extending elevation range — and kept it interchangeable with the existing heavy gun systems, which solved several interrelated problems at once. Narrowing the sight let the ammunition box sit closer to the azimuth axis, reducing centrifugal force, and its smaller footprint let the elevation assembly be realigned closer to the center of gravity. Embedding the motor control units in the system's forks gave mission-critical parts a secure, concealed location.

The result was a lightweight RCWS that met every requirement while staying interchangeable with the heavy gun line — better balanced, smaller, and more capable than the systems it was benchmarked against.`,
  },
  {
    id: 3,
    title: "ICE Model",
    description: "Internal combustion engine model",
    images: ["/images/ice-1.jpg", "/images/ice-2.jpg"],
    headline:
      "Built a crank-angle-based diesel engine model, accurate and fast enough to run in real time on HIL systems for control algorithm development.",
    content: `I built this internal combustion engine model to support control algorithm development, which meant it had to be both representative and fast enough to meet the real-time calculation limits of HIL systems. A zero-dimensional modeling technique met both requirements, resolving engine operational states at each crank-angle sample.

The model combines kinematics (slider-crank mechanism positions), fluid dynamics (air flow through the cylinder, turbocharger, and intercooler), and thermodynamics (in-cylinder pressure and temperature from combustion) — spanning mechanical engineering, thermodynamics, and chemistry. I implemented both basic and detailed combustion models, including Wiebe and Constien; the Constien model proved especially accurate for diesel combustion under multiple injection strategies, capturing in-cylinder pressure and temperature with high precision while still running in real time. Parameter identification used genetic algorithms, simulated annealing, and gradient-based methods depending on how linear the subsystem was.

The tuned model represents the engine fast and accurately, combining mechanical engineering principles with optimization algorithms into a tool that's now used to develop and improve engine control strategies.`,
  },
  {
    id: 4,
    title: "Automated Tractor",
    description: "Automated steering system",
    images: ["/images/automated-tractor-1.png"],
    headline:
      "Developed a GPS-fed automatic steering system for agricultural tractors, from localization through path-following control on an embedded controller.",
    content: `Automated tractors raise farming efficiency through continuous operation, enable precision farming that cuts crop waste, and reduce both operational costs and physical strain on the operator.

After a system analysis to pin down the requirements, I developed the GPS localization, trajectory construction, and path-following algorithms end to end. Localization converts latitude-longitude readings into easting/northing positions relative to the current datum. Trajectory construction turns a set of waypoints into a route and heading profile for the vehicle to follow. The path-following algorithm then closes the loop, regulating position and heading against that reference by driving the steering valves directly.

The prototype was tested on an asphalt road and tracked its reference path accurately, demonstrating that the same approach could scale to real fields — giving farmers greater precision, higher yields, and the ability to monitor and control tractors remotely rather than staying in the cab.`,
  },
  {
    id: 5,
    title: "GEM Model",
    description: "The Greenhouse Gas Emissions Model",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seal_of_the_United_States_Environmental_Protection_Agency.svg",
      "/images/gem-2.png",
    ],
    headline:
      "Ported the EPA's GEM emissions model from offline-only simulation to real-time operation on a power-pack test bench, integrated with Puma/IGEM2.",
    content: `GEM is the EPA's vehicle simulation model for estimating greenhouse gas emissions and fuel efficiency in heavy-duty vehicles. It was designed purely for offline simulation, but our test bench needed it to represent the real vehicle in real time, integrated with Puma/IGEM2 on a power-pack rig.

I started by adapting GEM's model parameterization process to the PUMA/IGEM2 workflow, then refactored the GEM vehicle models to fit it. An offline simulation stage was still needed to estimate cycle performance and sort test runs by energy consumption, so I wrapped the parameterization process around the offline-simulation code — letting the same parameters drive both the offline sorting and the real-time models used in the actual test runs.

Since the power-pack elements are real physical units, GEM's structure carried components the real-time test didn't need, so I stripped it down and added the inputs/outputs required to exchange data with real hardware and test bench management. I also built bumpless transfer — letting the model update its parameters mid-run as it transitions between cycles — plus manual operation modes and safe simulation-mode switching.

The integration shipped successfully, and the offline-model-plus-Matlab-scripts integration approach became a reusable pattern for the team to bring other legacy code into simulation models. The bumpless transfer method was the team's first implementation of on-the-fly parameter updates during a live test.`,
  },
  {
    id: 6,
    title: "AVL ISAC",
    description: "Real time vehicle simulations on testbed",
    images: ["/images/isac-1.png"],
    headline:
      "Modernized AVL's ISAC vehicle simulation library with new powertrain, kinematics/dynamics, and tire-road interaction models for contemporary vehicle architectures.",
    content: `ISAC is AVL's real-time vehicle simulation library, used across the industry to represent vehicles on HIL test benches. Its subsystem models predated the powertrain architectures — electrified drivetrains, modern driveline layouts — that customers increasingly needed to test, so the library needed a structural update rather than a patch.

I developed new powertrain components covering contemporary drivetrain configurations, rebuilt the vehicle kinematics and dynamics models for better accuracy across operating conditions, and added detailed tire-road interaction models to capture handling behavior that the older models simplified away.

The modernized library let ISAC accurately represent current vehicle architectures on real-time test benches, and became a foundation other teams built on for vehicle development and testing. This work contributed directly to ISAC's roughly €5M in annual revenue and its position in the real-time simulation market.`,
  },
  {
    id: 7,
    title: "AVL Route Studio",
    description: "Road digitalization on virtual testing",
    images: ["/images/route-studio-1.png"],
    headline:
      "Modernized AVL Route Studio's vehicle models for EV support and built its battery parameter identification and RDE route generation tools.",
    content: `Route Studio moves vehicle test activities from the real world into a virtual environment, cutting cost and development time. But its vehicle models had fallen behind, which limited both its adoption and its ability to support newer requirements — range estimation for battery electric vehicles chief among them.

I started by converting Route Studio's existing vehicle model components into Simulink, which made the legacy architecture visible for the first time. From there I added the pieces modern architectures needed — electric motors, basic and advanced battery models, and regeneration strategies — validated the models in Matlab/Simulink, then migrated them back into Python for integration into the Route Studio codebase.

I also refactored and extended the real driving emission (RDE) cycle generator, which automatically produces random, regulation-compliant test cycles, applying solid design patterns to leave it properly structured for the Python library. The same approach went into the Model Factory algorithm, which identifies parameters for 3RC-equivalent battery models.

Separately, I built an automated HIL project creation module on top of dSPACE's ConfigurationDesk/ControlDesk API. Given customer-defined inputs, it creates project folders, imports CAN and simulation model files, wires up models and IO including CAN signals, sets real-time requirements like sampling periods and per-thread core assignment, then builds and deploys the project to run headless on ControlDesk.

Working through Simulink first made the Python architecture and its interconnections far easier to reason about, and surfaced legacy bugs along the way — including an incorrect brake force calculation I was able to trace and fix. Between the new vehicle models, the RDE generator and Model Factory improvements, and the automated HIL tooling, Route Studio's accuracy and functionality moved forward on several fronts at once.`,
  },
];

export type SkillGroup = {
  name: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Control & Simulation",
    items: [
      "MATLAB/Simulink",
      "CarMaker",
      "GT-SUITE",
      "AVL Puma",
      "AVL Concerto",
      "AVL Model.CONNECT",
      "AVL fmi.lab",
      "AVL Testbed.Connect",
    ],
  },
  {
    name: "Software Engineering",
    items: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "React & Router",
      "HTML/CSS",
      "MUI",
      "OOP",
      "SOLID",
      "Unit Testing",
    ],
  },
  {
    name: "Engineering Design",
    items: ["CATIA", "Enterprise Architect"],
  },
  {
    name: "DevOps & Delivery",
    items: [
      "AWS",
      "Docker",
      "Git",
      "GitHub CI/CD",
      "TeamCity",
      "Microsoft TFS",
      "Jira/Confluence",
      "Scrum/Agile",
    ],
  },
];
