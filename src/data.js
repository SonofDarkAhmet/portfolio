export const vitaeContext = `I am a dedicated mechatronics engineer with a deep commitment to the
        core pillars of mechatronics: mechanical design, control systems and
        software development. My expertise includes the design of complex
        mechanical systems, the development of advanced algorithms and the
        implementation of sophisticated control strategies. I enjoy my ability
        to adapt quickly and continually expand my knowledge to integrate the
        latest software design principles and deliver innovative, high impact
        solutions.`;

export const projects = [
  {
    id: 1,
    title: "GCDC",
    description: "Grand Cooperative Driving Challange",
    imgs: [
      "https://www.gcdc.net/wp-content/uploads/2024/10/logo_gcdc2.png",
      "https://www.okan.edu.tr/uploads/pages/mekar-grand-cooperative-driving-challenge-projesi/2.gif",
      "https://www.okan.edu.tr/uploads/pages/mekar-grand-cooperative-driving-challenge-projesi/4.gif",
      "https://www.okan.edu.tr/uploads/pages/mekar-grand-cooperative-driving-challenge-projesi/5.gif",
    ],
    headline: `The project involved designing and developing a semi-autonomous vehicle for the GCDC 2011 competition. The focus was on creating mechanical parts, developing a simulation model, and implementing a control algorithm for platooning.`,
    content: `The task involved designing and manufacturing mechanical parts, such as a brake system actuator and fixtures for mounting devices in the vehicle. Mechanical system parts were designed using SolidWorks. Since interference with the car was not permitted, support points were identified to mount the braking system, fixtures for sensors, hardware, and PCs on the vehicle.

Subsequently, the task included developing a simulation model for the car and a longitudinal control algorithm for platooning. A bicycle model along with longitudinal dynamics was developed. LuT-based engine and brake models were added. An LQR-based control algorithm was developed to control the longitudinal motion of the vehicle.`,
  },
  {
    id: 2,
    title: "UCOK",
    description: "Remote controlled weapon station",
    imgs: [
      "https://defense.otokar.com.tr/OtokarSavunma/media/Otokar-Savunma/urunler/kule-sistemleri/ucok/ucok-uzaktan-komutali-stabilize-makineli-tufek-platformu.JPG?ext=.jpg",
      "https://armyrecognition.com/images/stories/independent/azerbaijan/exhibition/adex_2016/news/ADEX%202016%20Otokar%20presents%20new%20UCOK%20stabilized%20remote%20control%20weapon%20station_ADEX_2016_002.jpg",
      "https://ic.pics.livejournal.com/bmpd/38024980/2089179/2089179_original.jpg",
    ],
    headline:
      "The project focused on developing a lightweight RCWS. Key design innovations included a new lightweight sight system, optimized balance, and improved overall functionality, resulting in a highly efficient and adaptable RCWS.",
    content:
      "The expertise was mainly in heavy gun systems above 12.7mm caliber, and the challenge was to create a new lightweight system with specific requirements such as an independent sight \
    system at the front edge, increased elevation range, doubled ammunition capacity, recoil \
    system on the elevation axis, and compatibility with three different purpose weapons on the \
    same mount. The heavy sight system box and their drive units were the only available \
    components.\n\nThe first task involved conducting a comprehensive benchmarking survey of \
    competing systems. This survey helped to identify key design criteria and their impact on the \
    systems. It became clear that precise design harmony was essential for success. However, the \
    heavy sighting system resulted in a cascading design disaster. Although the proposal to optimize\
    the heavy sighting system was initially rejected by management, an opportunity to innovate was \
    found.\n\nA new, lightweight, compact, and easy-to-calibrate sight system was developed to overcome \
    several challenges. This design significantly reduced unbalance, system size, and weight while increasing \
    the range of the elevation axis. It was ensured that this new sight system was interchangeable with \
    the heavy gun systems, a critical decision that solved several interrelated problems. By making the \
    system narrower, the heavy ammunition box was strategically positioned closer to the azimuth axis, \
    reducing centrifugal force. In addition, the reduced size of the sight system allowed the elevation \
    assembly to be realigned, reducing the center of gravity misalignment with the elevation axis. \
    Embedding the motor control units in the forks of the system provided a secure and invisible location \
    for mission-critical parts.\n\nThese critical design decisions led to a breakthrough that solved several of the project's challenges. \
    The new sight system not only met the demanding requirements of the lightweight RCWS but also provided \
    interchangeability with the existing heavy gun systems. This solution optimized balance, reduced system \
    size, and significantly improved overall functionality. The result was a highly efficient and adaptable \
    lightweight RCWS that met the objectives.",
  },
  {
    id: 3,
    title: "ICE Model",
    description: "Internal combustion engine model",
    imgs: ["/images/ice-1.jpg", "/images/ice-2.jpg"],
    headline:
      "The project aimed to upgrade Tümosan's mechanical engines with electronically controlled modern fuel injection systems. The project included developing a cranks angle-based diesel engine model.",
    content: `Responsibility was taken for the zero-dimensional modeling of the internal combustion engine. In this process, a crank angle-based diesel engine model was developed. The model's parameters were identified and validated with the industry-standard GT-SUITE model to assess performance.

The work in developing and validating the crank angle-based diesel engine model ensured precise system development for diesel electronic control units.`,
  },
  {
    id: 4,
    title: "Automated Tractor",
    description: "Automated steering system",
    imgs: ["/images/automated-tractor-1.jpg"],
    headline:
      "The project aimed to develop an automatic steering system for agricultural vehicles. Key tasks included analyzing system requirements, developing algorithms for position and steering control.",
    content: `To meet the system requirements, a comprehensive analysis was carried out to identify the necessary sensors, actuators, and software components. The task began with the development of an algorithm to convert latitude-longitude position information into east-north position information. This algorithm generates the position of the vehicle on a Cartesian plane. Geometric relationships were then used to calculate the vehicle position error and heading error. These two errors were used in a subsequent control model to generate the desired steering angle of the vehicle at the front tires. Finally, at the lowest level of the control algorithm, a low-level controller was developed to control the hydraulic proportional valves used to steer the vehicle's tires.`,
  },
  {
    id: 5,
    title: "GEM Model",
    description: "The Greenhouse Gas Emissions Model",
    imgs: [
      "/images/gem-2.png",
      "/images/gem-1.png",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seal_of_the_United_States_Environmental_Protection_Agency.svg",
    ],
    headline:
      "The project involved integrating the GEM vehicle simulation model, developed by the EPA for estimating greenhouse gas emissions and fuel efficiency, with Puma/IGEM 2 software for real-time testing on a power pack test bench. Key tasks included adapting the model parameterization process, refactoring the GEM vehicle models, and simplifying the model structure for real-time application.",
    content: `The GEM model is a vehicle simulation model used for estimating greenhouse gas emissions and fuel efficiency performance of specific aspects of heavy-duty vehicles. The GEM model, developed by the EPA in the USA, was to be integrated with Puma/IGEM 2 software to run on a power pack test bench in real time. GEM was intended to represent the real vehicle in the test environment. Initially, GEM was developed for offline simulation only, with no real-time application of the model.

The first task involved adapting the model parameterization process to the PUMA/IGEM2 workflow. This was followed by the adaptation and refactoring of the GEM vehicle models to fit the workflow. It was determined that a pure offline simulation was needed to estimate the cycle performances for the respective test runs, which are sorted according to the energy consumed by the vehicles.

The parameterization process and the structure of the model were investigated. After analysis, it was decided to wrap the parameterization process with the codes that run the offline simulations. In this way, the parameters would be used both by the offline simulations for sorting the cycles and by the real-time models when the final real tests were run.

The GEM model structure contained unnecessary components for the real-time test, as the power-pack elements are real units. Therefore, the model structure was simplified. Model inputs and outputs were added for information exchange with real components and test bench management. Additionally, functions were developed for seamless operation, such as bumpless transfer to allow the model to update its parameters during the transition from one cycle to another, manual operation modes, and safe simulation mode switching algorithms.

The GEM project was completed and delivered successfully. New methods for integrating the compiled offline models along with Matlab scripts were introduced, enabling colleagues to use the same methods to integrate their legacy codes into simulation models. The methods used contributed to the competence of the team. Additionally, the bumpless transfer method, which allows parameters to be updated on the fly, was implemented as the first example of such an algorithm.
`,
  },
  {
    id: 6,
    title: "AVL ISAC",
    description: "Real time vehicle simulations on testbed",
    imgs: ["/images/isac-logo-1.png"],
    headline:
      "The project focused on modernizing the ISAC vehicle simulation library by developing advanced vehicle subsystem models tailored for contemporary architectures. This included the creation of sophisticated powertrain elements, comprehensive vehicle kinematics and dynamics models, and detailed tire-road interaction models.",
    content:
      "The project aimed at modernising the ISAC vehicle simulation library by developing advanced vehicle subsystem models suited for modern architectures. This initiative involved the creation of intricate powertrain components, thorough vehicle kinematics and dynamics models, and detailed tire-road interaction models. The goal was to ensure the simulation library could accurately represent contemporary vehicle systems and provide robust tools for future vehicle development and testing.",
  },
  {
    id: 7,
    title: "AVL Route Studio",
    description: "Road digitalization on virtual testing",
    imgs: [
      "https://experience.avl.com/en-US/sfsites/c/cms/delivery/media/MCVPESGOY3FZDX7DC4RELSSC65Z4?version=2.1&channelId=0ap6M0000008OJ8",
    ],
    headline:
      "The project aimed to enhance AVL Route Studio, a software solution for virtual vehicle testing, by developing advanced vehicle subsystem models, battery model identification solution and RDE route generation algorithms.",
    content: `Route Studio is a software solution designed to transfer test activities from real-world environments to virtual test environments, reducing costs and saving development time. Within the Route Studio (RS) software tool, the lack of modern vehicle models was hindering wider use of the tools and integration of new features, especially for future features such as range estimation algorithms for battery electric vehicles.

First of all, former RS vehicle model components were converted into Simulink models, providing a comprehensive view of the existing architecture. Missing elements of modern vehicle architectures, including electric motors, basic/advanced battery models, and regeneration strategies, were then integrated. After successfully creating a working model in Matlab/Simulink, these models were migrated back to Python.

Advanced vehicle system models were successfully introduced to the project. The decision to use Matlab/Simulink provided a structured approach that helped in understanding the structure of the Python code and the highly interconnected system architectures. Throughout the integration process, challenges arose as new components were added, but the gradual transitions between Python and Simulink eased the problems to be solved. Analyzing the system in Simulink also helped solve persistent legacy problems associated with conventional parts, such as correcting erroneous brake force calculations.
`,
  },
];

export const skillList = [
  {
    id: 1,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
    title: "Matlab",
    content:
      "MATLAB and Simulink have been utilized since 2009 for the simulation and control of automotive systems, with a focus on the development and testing of advanced technologies.",
  },
  {
    id: 2,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    title: "C",
    content:
      "C has been proficiently employed to develop advanced simulation models, which have been seamlessly integrated with MATLAB and Simulink for real-time applications. Additionally, C has been leveraged for real-time control applications within automotive systems.",
  },
  {
    id: 3,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    content:
      "In-depth knowledge of C++ was acquired through a comprehensive course, after which a FlexLM license solution was successfully implemented, effectively applying C++ skills.",
  },
  {
    id: 4,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python",
    content:
      "Python has been utilized to develop a comprehensive vehicle dynamics library, automate HIL project creation, and contribute to various AI and statistical algorithm projects. Furthermore, design patterns and SOLID principles have been professionally applied, demonstrating expertise in Python.",
  },
  {
    id: 5,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    content:
      "JavaScript has been used to develop AVL Route Studio projects, with a focus on the user interface components related to the algorithms for which responsibility was held.",
  },
  {
    id: 6,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    title: "HTML",
    content:
      "HTML is currently being learned to enhance skills in creating more sophisticated and visually appealing UI projects.",
  },
  {
    id: 7,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    title: "CSS",
    content:
      "CSS is currently being learned to enhance skills in creating more sophisticated and visually appealing UI projects.",
  },
  {
    id: 8,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
    content:
      "The React framework and React Router have been learned to implement web-based UI developments, enhancing the ability to create dynamic and responsive user interfaces.",
  },
  {
    id: 9,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    title: "Material UI",
    content:
      "The Material UI component library has been learned to enhance UI development skills, creating more visually appealing and sophisticated interfaces.",
  },
  {
    id: 10,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/60/DS-CATIA-Logo.png",
    title: "Catia",
    content:
      "CATIA has been used to develop mechanical system designs, particularly for remote-controlled weapon systems such as OTOKAR - UCOK.",
  },
  {
    id: 11,
    img: null,
    title: "Enterprise Architect",
    content:
      "Enterprise Architect has been used to implement system engineering for the development of construction machinery, ensuring robust and efficient design processes.",
  },
];
