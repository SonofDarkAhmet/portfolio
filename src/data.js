export const profilePic = ["/images/profile-pic.jpeg"];

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
    images: [
      "https://www.gcdc.net/wp-content/uploads/2024/10/logo_gcdc2.png",
      "https://www.okan.edu.tr/uploads/pages/mekar-grand-cooperative-driving-challenge-projesi/2.gif",
      "/images/gcdc-2.png",
      "/images/gcdc-3.png",
    ],
    headline: `The project involved designing and developing a semi-autonomous vehicle for the GCDC 2011 competition. The focus was on creating mechanical parts, developing a simulation model, and implementing a control algorithm for platooning.`,
    content: `The Grand Cooperative Driving Challenge (GCDC) is a prestigious European competition that showcases the capabilities of autonomous vehicles in cooperative driving scenarios. The challenge aims to demonstrate the feasibility of multiple autonomous vehicles working together via wireless communication on public roads. This competition not only highlights advancements in autonomous driving technology but also emphasizes the importance of vehicle-to-vehicle communication for enhancing road safety and traffic efficiency.

    In the competition, the teams used a self-developed Co-operative Adaptive Cruise Control (CACC) with vehicle-to-vehicle communication. The vehicles in the competition followed each other autonomously in a convoy, using information received from the vehicles ahead and the lead vehicle via inter-vehicle communication modems. During the autonomous chase, the vehicles automatically accelerated and braked without driver intervention. We stopped automatically at red lights and started automatically at green lights by communicating with roadside modems providing traffic light and speed limit information. We automatically obeyed the various speed limits on the road. During the competition, a total of 20 race laps were completed on the 6km track on the A270 motorway, with a speed limit of 100km/h.
    
    The task involved designing and manufacturing mechanical parts, such as a brake system actuator and fixtures for mounting devices in the vehicle. The vehicle was tested in OTAM laboratories to obtain engine and brake maps for controller design. A vehicle dynamics model and longitudinal controller for regulating throttle and brake efforts were established. An LQR-based control algorithm was developed to control the longitudinal motion of the vehicle, with the main goal of maintaining the safest possible distance between preceding vehicles.
    
    Team Mekar finished 7th overall out of 11 teams. The control algorithm we used was very successful in following the previously unknown and very challenging speed profile of the lead car and was highly praised. We finished 5th out of 11 teams in following the speed profile of the lead car. 
`,
  },
  {
    id: 2,
    title: "UCOK",
    description: "Remote controlled weapon station",
    images: [
      "https://defense.otokar.com.tr/OtokarSavunma/media/Otokar-Savunma/urunler/kule-sistemleri/ucok/ucok-uzaktan-komutali-stabilize-makineli-tufek-platformu.JPG?ext=.jpg",
      "https://armyrecognition.com/images/stories/independent/azerbaijan/exhibition/adex_2016/news/ADEX%202016%20Otokar%20presents%20new%20UCOK%20stabilized%20remote%20control%20weapon%20station_ADEX_2016_002.jpg",
      "https://ic.pics.livejournal.com/bmpd/38024980/2089179/2089179_original.jpg",
    ],
    headline:
      "The project focused on developing a lightweight RCWS. Key design innovations included a new lightweight sight system, optimized balance, and improved overall functionality, resulting in a highly efficient and adaptable RCWS.",
    content: `The expertise was primarily in heavy gun systems above 12.7mm caliber. The challenge was to create a new lightweight system with specific requirements, including an independent sight system at the front edge, increased elevation range, doubled ammunition capacity, a recoil system on the elevation axis, and compatibility with three different purpose weapons on the same mount. The heavy sight system box and their drive units were the only available components.

The first task involved conducting a comprehensive benchmarking survey of competing systems. This survey helped identify key design criteria and their impact on the systems. It became clear that precise design harmony was essential for success. However, the heavy sighting system resulted in a cascading design disaster. Although the proposal to optimize the heavy sighting system was initially rejected by management, an opportunity to innovate was found.

A new, lightweight, compact, and easy-to-calibrate sight system was developed to overcome several challenges. This design significantly reduced unbalance, system size, and weight while increasing the range of the elevation axis. It was ensured that this new sight system was interchangeable with the heavy gun systems, a critical decision that solved several interrelated problems. By making the system narrower, the heavy ammunition box was strategically positioned closer to the azimuth axis, reducing centrifugal force. Additionally, the reduced size of the sight system allowed the elevation assembly to be realigned, reducing the center of gravity misalignment with the elevation axis. Embedding the motor control units in the forks of the system provided a secure and invisible location for mission-critical parts.

These critical design decisions led to a breakthrough that solved several of the project's challenges. The new sight system not only met the demanding requirements of the lightweight RCWS but also provided interchangeability with the existing heavy gun systems. This solution optimized balance, reduced system size, and significantly improved overall functionality. The result was a highly efficient and adaptable lightweight RCWS that met the objectives.`,
  },
  {
    id: 3,
    title: "ICE Model",
    description: "Internal combustion engine model",
    images: ["/images/ice-1.jpg", "/images/ice-2.jpg"],
    headline:
      "The project aimed to upgrade mechanical engines with electronically controlled modern fuel injection systems. The project included developing a cranks angle-based diesel engine model.",
    content: `The internal combustion engine model was created to develop control algorithms. This simulation model needs to be both accurate and fast to meet performance and real-time calculation limits on HIL systems. Therefore, a zero-dimensional modeling technique was chosen to ensure a representative and quick simulation model. In this model, engine operational states can be determined at each sample time or crank angle used as the sampling rate.

The model includes various equations: kinematics to calculate positions of slider crank mechanisms, fluid dynamics for air flows related to the cylinder, turbocharger, and intercooler components, and thermodynamics for in-cylinder calculations, especially for pressure and temperature states due to combustion. Building such a diverse model requires a solid foundation in mechanical engineering principles like fluid dynamics, thermodynamics, mechanism design, and even chemistry. Basic and detailed combustion models were developed, such as the Wiebe and Constien combustion models. The Constien model was highly accurate for mimicking the diesel combustion process, especially for multiple injection strategies. Critical states like in-cylinder pressure and temperature were captured with high precision while still providing real-time capabilities. The parameter identification process was done using different algorithms, such as genetic algorithms, simulated annealing, or simple gradient-based algorithms for linear-like systems.

The engine is fast and accurately represented by the model built and tuned. This model showcases the detailed engineering work involved in its creation. It combines various mechanical engineering principles and advanced algorithms to create a robust and versatile tool. As a result, this engine model helps in developing advanced control algorithms, improving engine performance and efficiency. The process of building and refining this model highlights the importance of interdisciplinary collaboration and the pursuit of excellence in engineering.`,
  },
  {
    id: 4,
    title: "Automated Tractor",
    description: "Automated steering system",
    images: ["/images/automated-tractor-1.png"],
    headline:
      "The project aimed to develop an automatic steering system for agricultural vehicles. Key tasks included analyzing system requirements, developing algorithms for position and steering control run on embedded controller fed by a GPS sensor.",
    content: `Automated tractors can significantly boost efficiency through continuous operation, enable precision farming to minimize crop waste, reduce operational costs, and ensure safe and convenient farming practices.

To develop this system, comprehensive system analysis was first conducted to determine the requirements. Subsequently, GPS localization, trajectory construction, and path-following algorithms were developed. The GPS localization algorithm converts latitude-longitude data into easting and northing positions, considering the current position's datum. Trajectories are provided as waypoints and processed by the trajectory construction algorithm to create the route and headings for the vehicle to follow. The path-following algorithm then regulates the vehicle's position and heading, ensuring it adheres to the reference positions and headings by manipulating the steering valves.

The prototype system was tested on an asphalt road, yielding accurate results. The successful implementation of these algorithms demonstrates the potential for automated tractors to revolutionize modern farming. By integrating advanced technologies, farmers can achieve greater precision in their operations, leading to higher crop yields and more sustainable farming practices. Additionally, the ability to remotely monitor and control these tractors enhances operational flexibility and reduces the physical strain on farmers.`,
  },
  {
    id: 5,
    title: "GEM Model",
    description: "The Greenhouse Gas Emissions Model",
    images: [
      "/images/gem-2.png",
      "/images/gem-1.png",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seal_of_the_United_States_Environmental_Protection_Agency.svg",
    ],
    headline:
      "The project involved integrating the GEM vehicle simulation model, developed by the EPA for estimating greenhouse gas emissions and fuel efficiency, with Puma/IGEM2 software for real-time testing on a power pack test bench. Key tasks included adapting the model parameterization process, refactoring the GEM vehicle models, and simplifying the model structure for real-time application.",
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
    images: ["/images/isac-logo-1.png"],
    headline:
      "The project focused on modernizing the ISAC vehicle simulation library by developing advanced vehicle subsystem models tailored for contemporary architectures. This included the creation of sophisticated powertrain elements, comprehensive vehicle kinematics and dynamics models, and detailed tire-road interaction models.",
    content:
      "The project aimed at modernising the ISAC vehicle simulation library by developing advanced vehicle subsystem models suited for modern architectures. This initiative involved the creation of intricate powertrain components, thorough vehicle kinematics and dynamics models, and detailed tire-road interaction models. The goal was to ensure the simulation library could accurately represent contemporary vehicle systems and provide robust tools for future vehicle development and testing.",
  },
  {
    id: 7,
    title: "AVL Route Studio",
    description: "Road digitalization on virtual testing",
    images: ["/images/rs-1.png"],
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
    img: "/images/ea-logo.png",
    title: "Enterprise Architect",
    content:
      "Enterprise Architect has been used to implement system engineering for the development of construction machinery, ensuring robust and efficient design processes.",
  },
];
