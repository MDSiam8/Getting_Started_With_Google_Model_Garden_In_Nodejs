/**
 * TODO(developer): Uncomment these variables before running the sample.\
 * (Not necessary if passing values as arguments)
 */
const project = "hophacks23-399208";
const location = "us-central1";
const aiplatform = require("@google-cloud/aiplatform");

// Imports the Google Cloud Prediction service client
const { PredictionServiceClient } = aiplatform.v1;

// Import the helper module for converting arbitrary protobuf.Value objects.
const { helpers } = aiplatform;

// Specifies the location of the api endpoint
const clientOptions = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
};
const publisher = "google";
const model = "chat-bison@001";

// Instantiates a client
const predictionServiceClient = new PredictionServiceClient(clientOptions);
// Configure the parent resource

var msgArray = [
  {
    author: "user",
    content: "Hello!",
  },
];

// call this function when ready to get response. when accepting user input, make an object and add the fields
// author and content to it. author for any user input object should simply be "author", whereas the content field
// is the text itself. After making the object, push it to the msgArray befoe calling predict again
async function callPredict() {
  const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;
  var chatPrompt = {
    context:
      "Pretend that you are a chat assistant here to help student find courses based on their interest. Tell me how many great offerings Johns Hopkins University has amongst their 1000+ courses and ask me to list my interests. Make it quirky and subtly list examples of fun ideas if they need inspiration like 'Gamestop and Toilet Paper' or 'the history of poisons'. When you list the course, list the FULL NAME and rephrase the course description to be long and make it sound fun. Do not lie; if you are unsure if a course exists (or it wasn't in the provided examples), say that you're unsure and apologize. And don't mention UNRELATED courses",
    examples: [
      {
        input: {
          author: "user",
          content:
            "Freshmen only or Perm. Req'd.  This is a course of lectures, laboratories, and special projects. Its objective is to introduce students not only to different fields of engineering but also to the analytic tools and techniques that the profession uses. Assignments include hands-on and virtual experiments, oral presentations of product design, and design/construction/testing of structures",
        },
        output: { author: "bot", content: "EN.500.101: What Is Engineering?" },
      },
      {
        input: {
          author: "user",
          content:
            "This course provides students with an overview of the undergraduate programs in the Whiting School of Engineering. Faculty from various departments will introduce students to their discipline including aspects of their personal research. Freshmen only.",
        },
        output: {
          author: "bot",
          content: "EN.500.103: Hopkins Engineering Sampler Seminar",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Our subject area is the use of organic and inorganic semiconductors merged together (hybrid materials) to harvest energy without the use of any moving parts.We will begin with discussing the types of materials and their general behaviors  followed by emphasis on the electrical properties of materials. We will then introduce electronic behavior in hybrid materials and at junctions between dissimilar materials, followed by an overview of their application in solid-state electronics with focus on energy-harvesting devices based on the photovoltaic, piezoelectric, and thermoelectric effects. Then we will focus on the thermoelectric effect as a form of energy transfer/transformation (heat to electricity), that will include the conventional understanding of the underlying physics and descriptions of inorganic systems. Following this introduction we delve into current research in the field of polymer-based materials for thermoelectric applications and how such devices are fabricated.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Hybrid Materials for Solid-State Energy Harvesting",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Do you know that your smartphone has more than 30 elements from the periodic table (some claim it might be closer to 60)? Ever wonder why an ordinary sedan goes more than 300 miles on a full tank, while it makes news when an electric car goes just 100 miles on a full charge? We love our gadgets – but how much do we know about the building blocks that make our gadgets tick? In this course we will explore the fascinating properties of materials, the promises they have for the future, and how we go about making sense of them. We will hear stories of how computers are used to understand material properties, or even design new ones! What makes certain materials so valuable that they become the center of so many issues? We will explore how materials science fits into the idea of a sustainable world of the future, powered by renewable energy. I will share my experience of what the researchers, myself included, are working on today to bring us closer to the idea above. Knowing materials that are in the guts of our lovely gadgets and complicated issues may hold the key to our progress.  In this expository course you will work individually, as well as in groups of like-minded students. You will practice the habit of reading critically - articles from academic journals and other popular sources, and hone your communication skill by participating in discussions, writing mini reports and giving short presentations.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Stuff of Dreams/ How Advances in Materials Science Shape the World",
        },
      },
      {
        input: {
          author: "user",
          content:
            "We aim to broaden students understanding of cutting-edge techniques in the field of drug discovery.  This class will cover several overarching methods that research scientists at Johns Hopkins and other leading universities use to discover new medicines including Rational Design of drugs, In Silico (Computational) design, as well as High Throughput approaches. At the end of this class students will be able to read and critique current scientific literature.  The students in this class will be able to compare different approaches to drug discovery with an understanding of core engineering principals (Design, Test, Modify, Iterate).  In the last class students will give a short, formal presentation on a current research topic, they will defend (or criticize) how the scientific community is approaching the problem, and they will offer a few suggestions on ways to improve the standard approach.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Finding the Cure/ Methods in Drug Discovery",
        },
      },
      {
        input: {
          author: "user",
          content:
            "The development of the first optical microscopes in the 1600s enabled people to see objects at previously unimagined scales, opening up a whole new world of possibilities. Biological samples were among the first things examined, and today, microscopy continues to be an exciting way to study biology. Bioengineers are using microscopes to examine biological systems with unprecedented resolution in space and time, producing a wealth of new information about biomolecules. For example, where are different molecules located in a cell? What kinds of shapes do they take? Which molecules interact with each other? Which molecules regulate different cell behaviors and how do they do so? How do these things depend on things like cell type, disease, or environment? What happens when cells go through different processes or experience relevant stimuli? Exciting new approaches to microscopy allow us to answer these - and many other - questions for the first time. The information we obtain fills a gap in our understanding of how biological systems are constructed, how they function, and how things change in the context of various diseases, providing many useful insights. Ultimately, the knowledge we gain informs new approaches to treating disease, which may lead to big improvements in human health. In this seminar, we will discuss the use of microscopy in the context of current bioengineering research. We will begin with an introduction to how a microscope works. Then, we will discuss various techniques and tools currently being used to image biological systems at the molecular level. We will consider how these methods enable us to probe biological systems in unique ways and uncover new information about biomolecules. We will discuss how this information might be applied to advance human health. Finally, we will consider the directions that microscopy may take in the future and how that might impact our understanding of biological systems.",
        },
        output: {
          author: "bot",
          content: "EN.500.111: HEART: Visualizing Biomolecules",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Current improvement in speech recognition has made this field one of the highest achievement of human kind in the field of artificial intelligence. The huge progress in acoustic speech recognition (ASR) made it possible for every one to use this technology. These days, you can find speech recognition in your cell phone, in search engines, and most recently wearable technology such as watches. But how does this whole system work?",
        },
        output: {
          author: "bot",
          content: "EN.500.111: HEART: State of the Art Speech Recognition",
        },
      },
      {
        input: {
          author: "user",
          content:
            "The promise of fabricating complex parts from a desktop printer has 3D printing being touted as a game-changer. While artists and toy makers were the early adaptors (personalized action figure anyone?), the role of 3D printing in the engineering domain is growing rapidly, from prototyping to actual end-use parts. This course will discuss the rise of 3D printing, provide an overview of 3D printing technologies for plastics and metals, and discuss the potential role of 3D printing in engineering domains. Topology optimization is introduced as a computational design tool for leveraging the unique capabilities of 3D printing, producing operational parts with optimized performance. Ultimately pairing these newfound tools, students will proceed through the engineering cycle from design using topology optimization, to fabrication via 3D printing, to experimental testing for verifying part performance.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Three-D Printing and Topology Optimization",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In the 19th century, Gregor Mendel became interested in how traits are passed from generation to generation of pea plants. These simple observations were the starting point for a new field of biology known as genetics, which focuses on heredity in biology. Modern researchers use genetics to help identify and characterize diseases as well as discover treatments. This seminar will cover the fundamentals of genetics, genetic basis of several diseases, and the modern techniques used to investigate these diseases. We will focus on learning general genetic principles and their use in model organisms to discover the mechanisms of disease and identification of treatment targets. In addition, students will learn how to critically read scientific literature, from high-level articles in the lay press to primary scientific research articles, and learn the impact of genetic research on society.",
        },
        output: {
          author: "bot",
          content: "EN.500.111: HEART: Genetic Basis of Disease",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course starts with an introduction to cardiac anatomy and physiology, a description of cardiac diseases and their prevalence in the US; next I introduce the fundamentals of image formation used in cardiac imaging such as computerized tomography (CT), magnetic resonance imaging (MRI), echocardiography, angiography and single positron emission computerized tomography (SPECT). The second part of the course covers recent advances in cardiac imaging in each modality with special focus on assessment of cardiac function using CT and MRI.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Looking into the Heart - An Introduction to Cardiac Imaging",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In this course, we will explore technological developments which have allowed us to measure and manipulate brain activity. In the first part of the course, we will study brain computer interfaces that record signals from the brain and use those signals to perform a task. We will cover the basic principles of such devices and review the cutting-edge research that is being conducted at Hopkins as well as around the world. In the second part of the course, we will study neuromodulation technologies. These technologies will include transcranial magnetic stimulation, deep brain stimulation, and optogenetics. We will explore how neuromodulation has been used as both a tool to study the brain and a treatment for brain disorders.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Melding Mind & Machine - Exploring Neurotechnologies that Can Read Our Minds and Alter Our Brains",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Automated surgical workflow analysis is an important problem that is applicable to building context-aware operating rooms, providing automated feedback to surgeons in training, and detecting surgical events that hinder patient outcomes. In this course, we will discuss the major challenges behind automating surgical workflow analysis, why machine-learning methods are equipped to deal with some of these challenges, and how machine-learning techniques can be applied successfully to a particular set of surgical workflow analysis tasks.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Machine Learning for Surgical Workflow Analysis",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Climate change is expected to have dramatic impacts on many engineering sectors, and there is increasing concern that failure to plan for these impacts today could lead to dramatic consequences in the future. However, a number of technical, economic, and political challenges have limited the degree to which climate change adaptation has been implemented thus far. In this seminar, students will learn about how these challenges affect different engineered systems and current research efforts aimed at improving our ability to effectively prepare for climate change.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Responding to Climate Change: Impacts, Uncertainty and Adaptation Strategies",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This highly interactive course seeks to introduce students to some of the computational tools and techniques employed by engineers and scientists through the hands-on development of a computational tool for simulation of physics of the student's choice, which may include astrophysics, fluid dynamics, solid mechanics, fracture mechanics, or molecular dynamics. The development effort will serve as a guide through a broad overview of the following topics: computer architecture; operating system basics; coding languages, logical operators, and data structures; scientific program design and implementation; code debugging techniques and tools; repositories; high performance computing through parallelization; and data processing and visualization.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: The Computer Laboratory: Constructing virtual experiments for science and engineering",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Manipulating life has moved from the realm of science fantasy to pervading everyday life:from the consumption of genetically modified crops to the production of biofuels and pharmaceuticals. Biomolecular engineering applies the principles and methods of engineering to regulating dynamicmolecular processes in living systems. In this tutorial, students will be introduced to fundamental concepts in regulation of biological systems and the techniques used to manipulate these systems. We will survey various fields of biomolecular engineering with an emphasis on genetic/cellular engineering and historical, contemporary, and emerging uses of biological engineering. This seminar course will include assigned readings, lectures, active discussions, student presentations, and guest lectures.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Manipulating Life: Biomolecular Engineering",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In this course we will explore the field of reactive materials including their fabrication, characterization, and ultimately their utilization in commercial applications. The course will explore the differences between reactive material systems, such as intermetallic formation reactions, thermite reactions (oxidation-reduction), and energetic material systems, such as organic explosives. We will also discuss real world applications of systems such as their use for joining (welding), bio-agent defeat, and propellants.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Beyond Explosions: An Introduction to the World of Reactive Materials",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Schematic maps have historically been used to represent transit networks and computer algorithms now exist to automate their creation. We will study the history and applications of schematic maps, as well as survey various automation methods. Particular attention will be paid to a biobjective integer programming model and students will be introduced to relevant computational and visualization tools.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Reality distortion: the impact and automation of schematic maps",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Bioengineers are using microscopes to examine biological systems with unprecedented resolution in space and time, producing a wealth of new information about biomolecules. In this seminar, we will explore the use of microscopy in current bioengineering research. Specifically, we will discuss various microscope techniques and tools, and examine experiments in which each method was used to produce useful, novel information about a biological system.",
        },
        output: {
          author: "bot",
          content: "EN.500.111: HEART: Visualizing Biomolecules",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course provides a general overview of fire structural engineering, focusing on the response of building materials and structures subjected to fire. Class material is directly applied to the analysis of case studies, including the fire-induced structural failure of the World Trade Center Building 7, in 2001. Students will be exposed to state-of-the-art research on the fire-performance of wall assemblies, and regularly involved in class discussions and short presentations.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Fire Performance of Civil Engineering Structures",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In this course we will discuss various topics in mechanics on the cellular level. The discussion will start with mechanics in general and its application in biology, i.e., biomechanics. Then we will focus on cell mechanics and its application.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: The Nuts and Bolts of Cells: An Introduction to Cellular Mechanics",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In this course we’ll explore the role of mathematical prediction in the direction of experimental design for problems in biology. No matter how complicated or mysterious the problem, a little time spent with your notebook will spare you months at the microscope. We’ll begin by introducing the concept of formal proof; work throughout the semester on seemingly intractable problems reducing them to simpler, analytically soluble statements; and culminate in a discussion of the modern model for cell cycle regulation",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Prove it to me: why biology needs math (and math needs biology)",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In this course we’ll explore the role of mathematical prediction in the direction of experimental design for problems in biology. No matter how complicated or mysterious the problem, a little time spent with your notebook will spare you months at the microscope. We’ll begin by introducing the concept of formal proof; work throughout the semester on seemingly intractable problems reducing them to simpler, analytically soluble statements; and culminate in a discussion of the modern model for cell cycle regulation",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Prove it to me: why biology needs math (and math needs biology)",
        },
      },
      {
        input: {
          author: "user",
          content:
            "The course will start with examples and applications of brittle materials subjected to dynamic loading in a number of applications. The inherent microscopic defect population and their role in the failure process will be discussed. The last part of the course will focus on defect driven mechanisms and a brief introduction to relevant modeling and experimental techniques.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: What Causes Materials to Fail: An Introduction to Dynamic Brittle Failure",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Introduces students to principles, theory, and practice of using genetic and molecular engineering. Seminar course with background reading, active discussion, assigned readings, student presentations, and guest lectures centered on historical, contemporary, and emerging uses of biological engineering.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Manipulating Life at the Molecular Level: Tools and Applications of Biomolecular Engineering",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Introduces students to principles, theory, and practice of using genetic and molecular engineering. Seminar course with background reading, active discussion, assigned readings, student presentations, and guest lectures centered on historical, contemporary, and emerging uses of biological engineering.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Manipulating Life at the Molecular Level: Tools and Applications of Biomolecular Engineering",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course focuses on the use of organic and inorganic semiconductors merged together (composite materials) to harvest energy without the use of any moving parts. This technology can help to  build sustainable and clean environment. We begin with learning the fundamental properties of electronic materials and how they can be used to harvest energy. From there we go on to understanding how to convert heat to electricity and how to fashion devices based on these principles. We will delve into the latest research in polymer-based materials, device manufacturing, and advanced measurement techniques as well as practical applications in the real world.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Harvesting Energy: Extracting Power From Semiconductors",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Metastasis, the spread of cancer cells from the primary organ and colonization at distal sites through the bloodstream and the lymphatic system, is the least understood process involved in tumorigenesis. This course aims to develop students’ knowledge and understanding of cancer cell migration, an essential process in metastasis, by examining current research on the biochemical and biophysical underpinnings of cancer cell migration.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: The spread of cancer: Understanding cancer cell migration",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Explore different water wave phenomena and wave-related natural disasters. Learn how engineers study them through various modeling approaches.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Introduction to water waves modeling: a journey from ripples motion to tsunami flooding",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Explore different water wave phenomena and wave-related natural disasters. Learn how engineers study them through various modeling approaches.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Introduction to water waves modeling: a journey from ripples motion to tsunami flooding",
        },
      },
      {
        input: {
          author: "user",
          content:
            "The clinical and training environment for surgeons is inundated with data from several sources. These data vary in their type, formats, and magnitude. Other data sources have also yet to be discovered. Bridging the gap between data and knowledge that surgeons can use to improve patient care, training, and performance evaluation requires a comprehensive data science approach.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: How do we use data to augment surgical care and teaching: An introduction to Surgical Data Science",
        },
      },
      {
        input: {
          author: "user",
          content:
            "How do “parts” of cells come together to form complex machines? How do cells process signals in a noisy and unpredictable environment? This course will explore how systems theory, network science, and mathematical models can help us understand how cells are built.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: 37 Trillion Tiny Computers: A Systems Approach to How Cells Work",
        },
      },
      {
        input: {
          author: "user",
          content:
            "The dominant physics and chemistry at bigger length and time scales are vastly different from that in the nanoscale. Computation is an essential tool to model properties at different length scales -- to help us understand behavior of existing materials, as well as for making new materials. In this course we will explore the challenges to such computational methods, and the advances in this field.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Molecules to Bridges, Batteries, and Bones: Understanding Materials Properties through Computation",
        },
      },
      {
        input: {
          author: "user",
          content:
            "With the rise of faster and more powerful computers, the importance of computational methods can only be expected to increase. However, as computer science is often taught as a stand-alone concept, one might have initial difficulties in using computers in a research environment. Through the use of short lectures combined with in class hands-on practice with computer usage in materials simulation, students can familiarize themselves with basic computational utilities that are used in a research environment. As this course will focus on materials simulation, basic physics used in materials science simulations will also be introduced. This way the students can experience connecting the dots between concepts taught in class and how they are applied in computational research.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Using GIGANTIC Calculators to do Materials Engineering – Introduction to Computational Materials Science",
        },
      },
      {
        input: {
          author: "user",
          content:
            "As 3D printing technologies are advancing it is becoming possible to design and manufacture more complex parts with fewer components. This course will look at currently available 3D printing technologies and how they are currently used in industry. Topology optimization will be introduced as a freeform design tool that can leverage the unique possibilities of 3D printing.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: 3D printing and Topology Optimization: Revolutionizing design and manufacture in engineering",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This seminar class is intended to provide students with a basic knowledge and understanding about control theory, specifically feedback control, along with its applications and connections to games. The goal is for the students to leave with a better understanding and appreciation for control theory.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: The Game of Control for Systems that Jump & Flow: An Introduction to Feedback Control, Hybrid Systems, and Games",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course will provide an overview of the cutting-edge biomedical microdevices, focusing on their engineering renovation. Examples of biomedical microdevices in clinical application and relevant engineering technologies behind them will be covered, for offering students with an interface between engineering and medicine. Students will learn how to apply fundamental engineering knowledge to solve challenges in healthcare applications.",
        },
        output: {
          author: "bot",
          content:
            "EN.500.111: HEART: Biomedical microdevices: from mechanical/electrical engineering to medicine",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course introduces fundamental programming concepts and techniques, and is intended for all who plan to develop computational artifacts or intelligently deploy computational tools in their studies and careers. Topics covered include the design and implementation of algorithms using variables, control structures, arrays, functions, files, testing, debugging, and structured program design. Elements of object-oriented programming. algorithmic efficiency and data visualization are also introduced. Students deploy programming to develop working solutions that address problems in engineering, science and other areas of contemporary interest that vary from section to section. Course homework involves significant programming. Attendance and participation in class sessions are expected.",
        },
        output: {
          author: "bot",
          content: "EN.500.112: Gateway Computing: JAVA",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course introduces fundamental programming concepts and techniques, and is intended for all who plan to develop computational artifacts or intelligently deploy computational tools in their studies and careers. Topics covered include the design and implementation of algorithms using variables, control structures, arrays, functions, files, testing, debugging, and structured program design. Elements of object-oriented programming. algorithmic efficiency and data visualization are also introduced. Students deploy programming to develop working solutions that address problems in engineering, science and other areas of contemporary interest that vary from section to section. Course homework involves significant programming. Attendance and participation in class sessions are expected.",
        },
        output: {
          author: "bot",
          content: "EN.500.113: Gateway Computing: Python",
        },
      },
      {
        input: {
          author: "user",
          content:
            "What is “the common good”? How do individuals consider this idea, this question, and how are societies led, or misled, by its pursuit? Together, we will explore sources from a range of perspectives: What does Aristotle’s theory of the common good teach us? Or the Federalist Papers, the design of Baltimore’s public transportation system, meritocracy in higher education, the perniciousness of pandemics, proliferation of nuclear weapons, restorative justice, or intimate love? Drawing from film, journal articles, literature, and other sources—authors/creators include Rachel Carson, James Baldwin, Bong Joon-ho, Jhumpa Lahiri, Michael Sandel, and more—this First-Year Seminar is as much about how we ask and interrogate challenging, timeless questions as it is about the answers themselves. Engaging our material and each other, we will work together to hone the habits of scholarly inquiry essential to this practice: reading, writing, talking. The seminar will culminate in a final, collaborative research project that seeks to map, and manifest, versions of the common good.",
        },
        output: {
          author: "bot",
          content: "AS.001.100 - FYS: What is the Common Good?",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Why is gas so expensive? How did Reddit influence the price of GameStop shares? And where did all of the toilet paper go? This course seeks to provide students with a foundation for understanding modern business and the skills necessary to generate innovative solutions to problems-worth-solving. Course can be counted for the Foundations of American Enterprise requirement for CLE minors.",
        },
        output: {
          author: "bot",
          content: "EN.501.114 - FYS: Gamestop, Gas Prices, and Toilet Paper",
        },
      },
      {
        input: {
          author: "user",
          content:
            'In this First-Year Seminar, we will seek to answer questions including: could you forge Beskar? What would it take to make a light saber? Is "Image, enhance" really possible? What is possible today? What might be possible in the future? And, what may never be possible, as it violates the laws of nature as we know them? We will take an empiricist approach, gathering data on the needed properties via screenings and related research, and then applying physical principles to reveal feasibility.',
        },
        output: {
          author: "bot",
          content: "AS.001.105: FYS: The Science Behind the Fiction",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This First-Year Seminar will explore the neuroscience of choice. In addition to exploring the neurobiology of choice, we will dabble with philosophical ideas of free will and determinism. We will also touch on questions related to culpability. For example, are people who break the law but suffer from brain damage responsible for their actions? Sound interesting? Well, why stop there? Let’s sit back, eat some popcorn and take a look at how popular culture depicts the neuroscience of choice in the movies. Yes, with your help, we can do it all – but will you choose to???",
        },
        output: {
          author: "bot",
          content: "AS.001.109: FYS: Why'd Your Brain Sign You Up For This?",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This course is suitable for all, but would be especially useful for a student who does not expect to take many (or any) additional psychology or cognitive science courses.  We will explore what modern psychology has uncovered about how our intuitions concerning human nature deceive us. Freshmen Only.\nNote: This course does not count towards the Psychology major.",
        },
        output: {
          author: "bot",
          content:
            "AS.001.115: FYS: Illusions, Delusions, and Other Confusions",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This First-Year Seminar combines current state of the art issues in Cosmology, Astrophysics and Biology around the Scientific American level. Discusses the history of thought on these issues ranging from Aristotle, Lucretius, Galileo, Newton, Einstein…to the Hubble and  JWST era. For the last part of the seminar, we will consider existential issues for humanity in our Universe. Excellent books to read to start thinking about this are by Toby Ord: Precipice and Martin Rees: (1) The Future of Humanity and (2) If Science is to Save us.  Our discussions and investigations will likely lead us toward many interesting and innovative paths.",
        },
        output: {
          author: "bot",
          content:
            "AS.001.201: FYS: The Four Great Cosmic Questions: Dark Matter, Dark Energy, Black Holes and the Origin of Life",
        },
      },
      {
        input: {
          author: "user",
          content:
            "If Shakespeare were alive today, he would be writing for TV. So would Jane Austen. With the advent of cable networks, DVDs, the internet, and live streaming, TV—once considered a “vast wasteland”—has become the most dynamic and creative medium for storytelling, attracting a host of talented writers, directors, and actors. This First-Year Seminar explores the innovative narrative strategies, structures, and character studies that transformed that wasteland into extraordinarily fertile terrain and ushered in a new Golden Age of TV.",
        },
        output: {
          author: "bot",
          content:
            "AS.001.173: FYS: Taking TV Seriously -  Analysis and Interpretation",
        },
      },
      {
        input: {
          author: "user",
          content:
            "This First-year Seminar will study the direction of time, pointing from past to future. It will primarily be based on the physics of entropy and the Second Law of Thermodynamics, covering aspects of statistical mechanics, probability, and cosmology. But it will also touch on how time's arrow manifests itself in the macroscopic world, including questions of memory, prediction, aging, and causality.",
        },
        output: {
          author: "bot",
          content: "AS.001.194: FYS: The Arrow of Time",
        },
      },
      {
        input: {
          author: "user",
          content:
            "Love is mad, love is obsessive, love can be painful or tragic, or an experience to be treasured forever. That's what books have taught us, by giving poetic souls a chance to imagine and develop romantic ideas – on paper. These books have in turn inspired films, or in earlier days, great operas. As a historian of ideas and a specialist of narrative with a keen interest in bodies, illness, and gender, I will explore with you in this First-Year Seminar a few favorite love stories. Each is chosen because it helps us uncover a universe of romantic feelings, often in conflict with social conventions (as in Romeo and Juliet for example). We meet once a week for two and half hours with a break in the middle. This format enables in-depth explorations of our texts, which will often be done in teamwork. We start with reading medium-length books, so be prepared to spend time engrossed in a novel. Later units of the course will involve film and opera. Among the readings for this class: The Legend of Tristan and Isolde, Goethe's The Sorrows of Young Werther; Thomas Mann’s Death in Venice; Jeanette Winterson's, Written on the Body.",
        },
        output: {
          author: "bot",
          content: "AS.001.196: FYS: Love and its Maladies: A Short History",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In this course, we will examine the concealment of scientific knowledge from the Scientific Revolution to present day. Although science is regularly described as a public good, it has often been a private affair. Why have various scientists, institutions, governments, and media outlets chosen to restrict the flow of scientific knowledge? How have their efforts fared in practice, and what factors explain their successes or failures? More generally, how does our picture of modern science change if we highlight work done behind closed doors? This First-Year Seminar will explore these questions through case studies on alchemy, trade secrecy, nuclear physics, and climate change denial. Students will work with formerly classified sources during several weeks of the term.",
        },
        output: {
          author: "bot",
          content: "AS.001.198: FYS: Secret Science",
        },
      },
      {
        input: {
          author: "user",
          content:
            "In times of pandemic, trade war, and restrictions on the export of strategic technologies, it has become common to predict the ‘death of globalization.’ Such predictions are hardly new, however, and neither are the protectionist technology policies that are currently in vogue. In this First-Year Seminar, we will examine how technology historically has both helped connect people in different parts of the world and contributed to division and inequality at national and global levels. Focusing on the period from the mid-nineteenth century to the present, we will pay special attention to the impact of transportation and ICT technologies ranging from the telegraph and container ship to the airplane and the internet. But we will also consider the consequences of globalization and technological change in areas such as mining and agriculture, taking into account the perspectives of a variety of actors including multinational enterprises, governments, standard-setting scientists and engineers, and the anti-globalization movement. The local effects of globalization will be discussed on a class trip to the Baltimore Museum of Industry, and students will have the opportunity to develop a research project on a topic of special interest to them in consultation with the instructor. Course readings will be made available on Canvas; they include both original historical sources and studies by historians and social scientists.",
        },
        output: {
          author: "bot",
          content: "AS.001.199: FYS: Technology and Globalization",
        },
      },
    ],
    messages: msgArray,
  };
  // Predict request
  const instanceValue = helpers.toValue(chatPrompt);
  const instances = [instanceValue];

  const parameter = {
    temperature: 0.2,
    maxOutputTokens: 500,
    topP: 0.95,
    topK: 40,
  };
  const parameters = helpers.toValue(parameter);

  const request = {
    endpoint,
    instances,
    parameters,
  };
  const [response] = await predictionServiceClient.predict(request);
//   console.log("Get chat prompt response");
  const predictions = response.predictions;
//   console.log("\tPredictions :");
  let text = "";
  for (const prediction of predictions) {
    // console.log(`\t\tPrediction : ${JSON.stringify(prediction)}`);
    text =
      prediction.structValue.fields.candidates.listValue.values[0].structValue
        .fields.content.stringValue;
    // arr[0].structValue.fields.candidates.listValue.values[0].structValue.fields.content.stringValue;
    // console.log("\n*******" + text + "\n");
  }
  require("fs").writeFileSync(
    "google-output.json",
    JSON.stringify(predictions)
  );
  let obj = new Object();
  obj.author = "bot";
  obj.content = text;
  msgArray.push(obj);
  return obj;
}

async function doStuff() {
  let output = await new Promise((resolve, reject) => {
    let output = callPredict();
    while (output == null) {
      // nothing
    }
    resolve(output);
  });

  var userObj = new Object();
  var str =
    "I would like to take a course on the values of the common good and one about gamestop stock too and another about black holes";
  userObj.author = "user";
  userObj.content = str;
  msgArray.push(userObj);
  let output2 = await new Promise((resolve, reject) => {
    let output = callPredict();
    while (output == null) {
      // nothing
    }
    resolve(output);
  });
  // callPredict();
  console.log(msgArray);
}

doStuff();
