import ericCv from "./assets/cvs/ERIC TACHIE YEBOAH CV1- 2020.pdf";
import naaCV from "./assets/cvs/Naa Dede CV.pdf";
import comodoreCV from "./assets/cvs/Comodore Sam Allotey CV.pdf";
import SamuelCV from "./assets/cvs/Dr Samuel Amponsah CV.pdf";
import lomoteyCV from "./assets/cvs/Dr Vandyke Lomotey.pdf";

const data = {
  trainers: [
    {
      id: 1,
      name: "Eric Tachie Yeboah",
      excerpt: "Learning, talent, and leadership development professional",
      position: "",
      image: "tachie.jpeg",
      file: ericCv,
    },
    {
      id: 2,
      name: "Naa Dedei Adjei",
      excerpt: "Strategic Human Resources Management and Development",
      position: "Group HR & Corporate Services Director",
      content: `<p>
      Naa Dedei has a considerable experience and knowledge in Strategic Human Resources Management and Development, gained in multi-national, unionised and non-unionised organizations.  
        <br/>
        <br/>
        Her initial regular job experience was from Ghana Highway Authority where she worked as Human Resources Assistant for almost 15 years.  She then proceeded to work with Overseas Processing Entity, a USA State Government sponsored organization, which was multinational from 2003 to 2008, first at the Operations Department, then to the Administration Department as the Assistant Human Resources Manager.  Between 2008 and 2010, she was the Executive Director of Women’s Health and Advocacy International, a Non-profit Making Organization.  
        <br/>
        <br/>
        She then joined Energy Bank Ghana Limited as the Head of Human Resources and Administration during their start-up stage, and played an additional role of Corporate Affairs Manager for the first two years.  She remained a member of the bank’s Key Management Team till she resigned in March 2015, and joined Western Automobile Company Ltd briefly as their Corporate Affairs Manager.  Between October 2015 and May, 2017, she run her own HR and Strategic Management consultancy services and was engaged by Dalex Finance in June, 2017, to be part of Senior Management in charge of Human Resources Management and Development.  She played this role till her exit in February, 2018.
        <br/>
        <br/>
        Naa Dedei has a BSc Administration (Human Resources Management) obtained from Central University College. She pursued an MBA in Human Resources Management at the Ghana Institute of Management and Public Administration (GIMPA), and a professional HR Program (SPHR). 
        She also holds an Executive Certificate in NGO Management from African Centre for Leadership and Human Resources Development, and an Executive Certificate in Managerial Leadership from the Pan-African Institute for Leadership and Governance Studies.

        <br/>
        <br/>
        Naa Dedei has also attended several workshops, seminars and training programs here in Ghana, Togo, Ivory Coast, Kenya, Denmark, South Africa and Dubai. 
      </p>`,
      image: "naa-dedei.jpeg",
      file: naaCV,
    },
    {
      id: 3,
      name: "Comodore Sam Allotey",
      excerpt: "Learning, talent, and leadership development professional",
      position: "",
      content: "",
      image: "lomotey.jpeg",
      file: comodoreCV,
    },
    {
      id: 4,
      name: "Dr Samuel Amponsah",
      excerpt: "Learning, talent, and leadership development professional",
      position: "Associate Professor at the University of Ghana",
      content: `<p>
      Samuel Amponsah is an Associate Professor at the University of Ghana where he heads the Distance Education Department. Prior to his appointment at the University, Samuel lectured and headed the Farming Management Department of Esayidi TVET College in South Africa. He was a fellow of the Global Challenges Research Fund/Liverpool John Moores University digital fellowship programme. He recently completed a postdoctoral fellowship with the American University in Cairo under the sponsorship of the BECH-Africa and Andrew W. Mellon Foundation. He was appointed an Adjunct Associate Professor by the University of South Africa (Unisa) in 2021.
       <br/>
       <br/>
       Samuel has a deep passion for teaching, researching, mentoring and community work. He has consulted for Ghanaian and international organisations on leadership and management issues. Samuel has presented at several international conferences and has published widely in his areas of research interest. Aside the academy, Samuel is a passionate preacher of the Gospel and has authored two Christian books. 
      </p>`,
      image: "samuel.jpeg",
      file: SamuelCV,
    },
    {
      id: 5,
      name: "Dr Vandyke Lomotey",
      excerpt: "Learning, talent, and leadership development professional",
      position: "Organisational Development, Leadership Development",
      content: `<p>
                Dr. Vandyck Lomotey is a learning, talent, and leadership development professional, with an extensive experience in consulting, talent development, programmes management, leadership development, and training for organizations across diverse industries in big Tech, manufacturing, hospitality, finance, logistics, trading, non-governmental  and non-profit organisations. His area of speciality covers Organisational Development, Leadership Development, Team Dynamics, Emotional Intelligence, Cultural Intelligence, Educational Leadership, Personal Development, Customer Service, and Talent and Youth Development.
                <br />
                <br/>
                He  holds a Doctor of Intercultural Studies from Fuller School of Intercultural Studies, California. He is certified as a Talent Development professional, NLP (Associate) Practitioner, Personality Profiling and Assessment Coach with Clarity 4D (UK) and a Project Management Professional with PMI (USA).
                <br/>
                <br/>
                He is a visiting faculty of the China Europe International Business School (CEIBS), Ghana and currently the Director for Early Career Success for the African Leadership Academy/ Mastercard Foundation Scholars Programme. Prior to that he worked with Twitter (sub-Saharan Africa) as a lead for technical training.
                </p>`,
      image: "lomotey.jpeg",
      file: lomoteyCV,
    },
  ],
  training: {
    courses: [
      {
        id: 1,
        title: "Senior-Level Public Leadership Program(SLPLP)",
        image: "slplp.png",
        modules: [
          {
            id: 1,
            name: "SLPLP Module 1",
            aim: "To draw attention to essential leadership skills required of directors of MDAs in evolving a professional public sector organisation that delivers excellence to its stakeholders;",
            duration: "3 days",
            objectives: [
              {
                id: 1,
                message:
                  "Explain the dynamics that create the context for MDAs",
              },
              {
                id: 2,
                message: "Explain the Public Sector Challenge",
              },
              {
                id: 3,
                message:
                  "Outline steps to instill and deepen Public Service Values in MDAs",
              },
              {
                id: 4,
                message:
                  "Outline the mindset change that can guarantee future success for MDAs",
              },
              {
                id: 5,
                message: "Distinguish between Managing, Leading & Directing",
              },
              {
                id: 6,
                message: "Explain what leadership means to you",
              },
              {
                id: 7,
                message:
                  "Examine the effectiveness of chosen leadership styles under given circumstances",
              },
              {
                id: 8,
                message:
                  "Outline specifc change initiatives you would pursue in your capacity as a director, and critically examine how you can make these effective",
              },
              {
                id: 9,
                message:
                  "Explain the impact of your personal leadership style on the performance of your staff",
              },
              {
                id: 10,
                message:
                  "Assemble your Personal/Departmental Action Plan for implementing the insights gathered from this training",
              },
            ],
          },
          {
            id: 2,
            name: "SLPLP Module 2",
            aim: "To emphasise the core skills and mindset required for succeeding as professionals and technocrats in an environment heavily dominated and influenced by politicians",
            objectives: [
              {
                id: 1,
                message: " Explore the implications of the context of MDAs",
              },
              {
                id: 2,
                message:
                  "Examine the responsibilities of them entering Senior Management",
              },
              {
                id: 3,
                message:
                  "Explain the challenges of working with politicians to execute public policy",
              },
              {
                id: 4,
                message:
                  " Discuss how to overcome the challenges of directing in the public sector",
              },
              {
                id: 5,
                message: "Explain the use of appropriate leadership styles",
              },
              {
                id: 6,
                message: "Explain how to motivate excellent performance",
              },
              {
                id: 7,
                message:
                  " Outline the process of initiating and managing successful change projects",
              },
              {
                id: 8,
                message: "Explain the key areas of focus of corporate leaders",
              },
            ],
          },
          {
            id: 3,
            name: "SLPLP Module 3",
            aim: "To introduce the basic tenets of new public management (NPM) to directors of MDAs as a way of driving efficiency and cost containment in the public sector",
            objectives: [
              {
                id: 1,
                message:
                  " Explain how bureaucratic inefficiencies impact on the delivery of public services",
              },
              {
                id: 2,
                message:
                  "Outline steps to take to strengthen bureaucracy for better results",
              },
              {
                id: 3,
                message:
                  "Explain the key components of new public management (NPM) as a public management strategy;",
              },
              {
                id: 4,
                message: "Outline and examine the building blocks of NPM",
              },
              {
                id: 5,
                message:
                  "Examine the main private sector practices adopted to public sector organisations under NPM",
              },
              {
                id: 6,
                message:
                  "Assess the effectiveness of adopting private sector practices to the public sector",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "The Succes Prone Manager(SPM)",
        image: "smp.png",
        modules: [
          {
            id: 1,
            name: "Level 1 : Entry Level Mastery",
            aim: "This is an introductory module designed specifically for those for whom management (theory and/or practice) is a new area or those who have just been promoted to managerial roles for the first time.",
            objectives: [
              {
                id: 1,
                message:
                  "Introduce participants to the basic concepts, principles and practices of management",
              },
              {
                id: 2,
                message:
                  "The nature of managerial work, the process of managing and the basic skills required to be effective as a manager.",
              },
              {
                id: 3,
                message:
                  "Understand precisely what managerial work involves; how to work with subordinates and the expectations on managers",
              },
            ],
          },
          {
            id: 2,
            name: "Level 2: Mid-Executive Level Mastery",
            aim: "Having gone through Level 1, participants at this level are assisted to establish the key areas where managers need to focus their attention. They would have grasped the basic concepts and practices of management. They would have been promoted as Supervisors.",
            objectives: [
              {
                id: 1,
                message:
                  "The course helps managers to develop their capacity to work with subordinates, other lateral managers, as well as their bosses.",
              },
              {
                id: 2,
                message:
                  "Expand their horizon and develop a system perspective to appreciate the interrelationships and interdependencies that exist at the workplace in general, and in a managerial role, in particular, and how they can both rely on and contribute effectively to the success of these networks and constituencies.",
              },
            ],
          },
          {
            id: 3,
            name: "Level 3: Senior Executive Level Mastery",
            aim: "At Level 3, participants are Managers overseeing the work of other supervisors. They may be managers of functional Units. The manager will be working hard to provide effective leadership, guidance and motivation for others to achieve excellent results. They would also be working both with their subordinates, other colleague managers, and bosses to achieve organisational goals. They would need to develop their capacity to work with these different constituencies at the workplace. Work at this level requires a lot of decision making, not just by the manager but also by their direct reports. The manager’s success at this level will depend on their ability to make crucial decisions and also to know which of such decisions they need to delegate to others.",
            objectives: [
              {
                id: 1,
                message:
                  "The objective of the training at this level would be to help the participant to create the system and develop capacity for others to grow.",
              },
              {
                id: 2,
                message:
                  "The manager’s task here is to create the system that allows others to function effectively, and to perform at their optimum level",
              },
            ],
          },
          {
            id: 4,
            name: "Level 4: Director Level Mastery",
            aim: `Participants may have been promoted to the Grade of Director, Assistant Director or Senior Manager, depending on the type of structure in operation. They will normally be heading functional
                            departments, such as Human Resource, Finance, Operations,
                            Sales, etc. They will have a number of managers reporting to
                            them. Their role will require them to effectively combine strategic
                            focus and operational efficiency, and they will do well to discipline themselves to stay put to that by developing and 
                            empowering their direct reports to be responsible for the day to day
                            routine tasks, whilst they focus on key strategic issues.`,
            objectives: [
              {
                id: 1,
                message:
                  "help the Director/Assistant Director/Senior Manager to develop an understanding of the broader organisational issues, and to understand their role as those who must both initiate and implement new strategies.",
              },
              {
                id: 2,
                message:
                  "They will be assisted to both innovate and support innovative ideas. They will be assisted to solve problems and make things happen instead of playing the blame game.",
              },
              {
                id: 3,
                message:
                  "The aim is to help them to develop capacity for others and to address issues likely to affect the effectiveness of their direct reports",
              },
            ],
          },
          {
            id: 5,
            name: "Level 5: CEO/MD Level Mastery",
            aim: `The MD/CEO/Executive Director’s job is to ensure the
                            organisation attains its strategic goals through the judicious and
                            prudent allocation and utilization of the organisation’s resources
                            (human, materials, financial, technological). His role is to initiate
                            and execute strategies that will consistently move the
                            organisation forward.`,
            objectives: [
              {
                id: 1,
                message:
                  "The objective of training at this level is to develop the mindset of a business owner and steward, concerned about the success and safety of the business; its people, its resources, as well as its numerous stakeholders – internal and external.",
              },
              {
                id: 2,
                message: `It requires
                                    discretion and discernment, accurate decision making and
                                    reasonable and calculated risk taking. At the same time, it entails
                                    and requires the institution and implementation of systems that
                                    ensure safe risk taking. It calls for a concern for both
                                    results/productivity and people.`,
              },
            ],
          },
          {
            id: 6,
            name: "Level 6: Board Level Mastery",
            aim: `Businesses now live and operate in an increasingly complex,
                            dynamic, and intricately interconnected world. Board Chairs,
                            Secretaries and members are those who steer the direction of the
                            organisation and set the agenda for its growth and progress. Boards
                            and Board Chairs face new management challenges demanding
                            new ways of thinking and new levels of innovation underpinned by
                            results based strategies, and a robust risk management framework.
                            In response to this fast pace changing landscape, we have designed
                            the Success-prone Manager Board Level Programme to help Board
                            Chairs and members who are poised to make a difference.`,
            objectives: [
              {
                id: 1,
                message: `Training at this level aims to support board members to develop
                                    good corporate governance practices and strategic focus that
                                    underpins excellent performance of the organisation even in
                                    turbulent environments.`,
              },
              {
                id: 2,
                message: `It aims to develop Board Chairperson’s
                                    capacity to inspire, gain commitment from and harness the 
                                    potentials of board members and Top Management, and to inspire a
                                    performance culture through a competitive rewards management
                                    strategy.`,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Turbulence Proof Leader",
        image: "tmp.png",
        modules: [
          {
            id: 1,
            name: "The Turbulence-Proof Leader Level 1 (Entry Level Mastery)",
            aim: `Anybody can lead, although not everybody will develop the discipline for
                            leadership. Being placed in a position to lead others, and actually leading
                            them are two separate things. For persons placed in a position to lead
                            others, the discipline for leading others has to be developed intentionally.
                            The objective of this module is to expose participants to the concepts and
                            meanings of leadership; help them to explore the several arenas and levels
                            where leadership may be exercised, and to examine how leadership is
                            intertwined with, and at the same time, distinguished from, management.
                            The module introduces important leadership concepts, such as leading self,
                            peers, superiors, and subordinates; developing leadership mindset, as well
                            as action-centered leadership, where leadership is seen as an activity that
                            occurs in a group setting. The overall aim is to establish the functional
                            importance of leaders – leadership status is earned from the functions one
                            performs in teams, not merely their position.`,
            objectives: [],
          },
          {
            id: 2,
            name: "The Turbulence-Proof Leader Level 2 (Mid-Executive Level Mastery)",
            aim: `Leadership is an essential part of management, and to be effective, managers
                            require some good dose of leadership skills. Similarities and distinctions
                            between managers and leaders are clearly laid out at this stage, where
                            managers likely have a number of managers working under them. They
                            need to be able to provide leadership for their subordinates to become
                            better leaders, while at the same time, focusing on their own jobs. They
                            need to show concern for people but at the same time, keep their eyes on
                            the bottom line, employing both their rewards and coercive power to elicit
                            desirable subordinate behaviour. Leaders at this level need to understand
                            how to grow their influence and increase their power to get things done.
                            They need to develop the capacity of their direct reports and delegate
                            authority to them to make a number of relevant decisions. Overall, they will
                            be developing the next generation of leaders, and will be laying the foundation for their own replacement in the long term.`,
            objectives: [],
          },
          {
            id: 3,
            name: "The Turbulence-Proof Leader Level 3 (Senior Executive Level mastery)",
            aim: `This module targets Senior Managers (private sector) and Chief Managers
                            (public sector). These are managers who are responsible for other middle
                            managers. They will have been providing support to Directors who are
                            Heads of Department. They are required to know how to engage with both
                            their supervisors as well as their direct reports. They need to identify the
                            talents in their teams and help develop them into effective managers that
                            would constitute the organisation’s leadership pipeline.
                            They need to understand the process of leading, and develop skills for
                            leading successful change projects.`,
            objectives: [],
          },
          {
            id: 4,
            name: "The Turbulence-Proof Leader Level 4 (Director Level Mastery)",
            aim: `Operating at the top (Director) level, participants at this level will already
                            have understood the distinctions and similarities between management
                            and leadership; they will have developed their muscles for effective
                            functional leadership. They are to become effective corporate leaders by
                            focusing their employees on the vision and direction of the organisation
                            and departments they lead. The strategic focus of training at this stage is to
                            develop leaders who will take control of the corporate development of their
                            organisation, focusing on the key areas, and metrics by which the
                            organisation measures its bottom line. They will combine visionary
                            leadership with motivational leadership that will translate to strategic
                            leadership, helping the organisation to focus both on long term strategic
                            issues and on short term controls that ensure the organisation’s continued
                            operational viability. They will be championing change projects that will
                            navigate the organisation towards its strategic goals. They are required to
                            make effective use of their human capital (talents), and lay down structures
                            and systems that allow the succession of key and critical roles, as a way of
                            ensuring that the organisation can continue to build on the success of its
                            predecessors at any given time.`,
            objectives: [],
          },
          {
            id: 5,
            name: "The Turbulence-Proof Leader Level 5 (CEO/MD Level Mastery)",
            aim: `This module has been designed to meet the specific leadership needs of
                            CEOs, MDs, Executive Directors, and Chief Directors (Government
                            Ministries). Organisations are true reflections of their leaders; there can be
                            no assertion more basic than that. Leaders at this stage are the most
                            powerful persons whose actions or inactions have far reaching impact on
                            their organisations. These top executives will have been providing
                            leadership for heads of their departments or functional divisions. Training at
                            this stage is aimed to equip the top executive with the skills to navigate the
                            organisation towards its strategic goals. It would equip them to clearly
                            articulate vision, align organisational members behind the vision, and
                            provide the necessary motivation and inspiration for them to marshal every
                            force towards realizing strategic goals. The capacity to judiciously allocate
                            the organisation’s resources, and to hold oneself accountable for results are
                            key competencies expected at this stage.`,
            objectives: [],
          },
          {
            id: 6,
            name: "The Turbulence-Proof Leader Level 6 (Board Level Mastery)",
            aim: `The Board Level Mastery module equips and empowers Board Members,
                            Board Chairs and Secretaries to enable them to perform their basic 
                            functions of enterprise, oversight and accountability in respect of the 
                            organisation they govern. The required competencies at this level include effective
                            board governance, corporate governance, strategic thinking and strategic
                            orientation, risk management and effective accountability. The ability to
                            digest and make sense of massive company information, including technical
                            business proposals and policies, and financial statements, and make
                            informed decisions on these, are key success factors.`,
            objectives: [],
          },
        ],
      },
      {
        id: 4,
        title: "Building High Performing Teams",
        image: "bhpt.png",
        introduction: `Much workplace inefficient performance is not due to lack of capacity;
                    It is due to people not being prepared to work cooperatively - people sacrficing team goals for individual goals.
                    Several people hold back productive ability if they lack appreciation for working as a team. Team builing, if done carefully
                    and properly, can rally people around the common goal. Teamworking is thus gaining popularity as a method of organising work. In recent times,
                    teamworking has attracted a lot of interest from organisational leaders and employees alike.`,
        objectives: [
          {
            id: 1,
            name: "Explain the meaning, context and importance of teambuilding;",
          },
          {
            id: 2,
            name: "Identify and explain the key success factors in working in teams;",
          },
          {
            id: 3,
            name: "Discuss how personality differences affect the assignment of roles in teams;",
          },
          {
            id: 4,
            name: "Outline and discuss the process of building teams;",
          },
          {
            id: 5,
            name: "Explain the steps to determining appropriate leadership style in a team setting;",
          },
          {
            id: 6,
            name: "Identify behaviours to avoid and behaviour to encourage in teams;",
          },
          {
            id: 7,
            name: "Critically examine steps they will take to build effective work teams at their level",
          },
        ],

        modules: [
          {
            id: 1,
            name: "Module 1: Creating Context",
          },
          {
            id: 2,
            name: "Module 2: The Foundational Concepts for Teamworking",
          },
          {
            id: 3,
            name: "Module 3: Teambuilding - The Process",
          },
          {
            id: 4,
            name: "Module 4: Leadership in Teams",
          },
          {
            id: 5,
            name: "Module 5: Teamworking - Key success Factors",
          },
        ],
      },
      {
        id: 5,
        title: "Managing Change",
        image: "mc.png",
        modules: [],
      },
      {
        id: 6,
        title: "Mastering supervision",
        image: "ms.png",
        introduction: `Supervisors (who are actually managers, in a technical sense) occupy a crucial
                    position in an organisation's agenda and capacity to get its Management's hand on the nittygritties of everday work.
                    As the employee's first direct contact with the organisation's Management, the supervisor models and shapes the employee's concept
                    of the ideal manageer. It is their responsibility to bring management close to the employee, and to ensure that they develop the right behaviors,
                    disciplines, skills and attitude required to succeed in the performance of the jobs they are recruited and paid to perform. Strong, efficient and effective supervisors
                    thus produce strong, efficient and effective employees`,
        modules: [
          {
            id: 1,
            name: "Day 1 (The Foundations)",
          },
          {
            id: 2,
            name: "Day 2 (The Building Blocks)",
          },
          {
            id: 3,
            name: "Day 3 (Coaching And Appraisals For Performance: The Roof)",
          },
        ],
      },
      {
        id: 7,
        title: "Project Mangement Training Programme",
        image: "pm.png",
        modules: [
          {
            id: 1,
            name: "Basic Level",
            aim: "",
            objectives: [],
          },
          {
            id: 2,
            name: "Intermediate Level",
            aim: "",
            objectives: [],
          },
          {
            id: 3,
            name: "Advanced Level",
            aim: "",
            objectives: [],
          },
        ],
      },
      {
        id: 8,
        title: "Atttudes For Business Success",
        image: "attitude.png",
        modules: [],
        scope: {
          content: `In order to address the generally low level of productivity and unacceptable level of public service quality found in most public sector institutions, this training package 
                                    has been carefully designed to capture what the employee’s attitudes have to be
                                    towards each of the important constituencies they interact with at work on a daily
                                    basis. The training will outline and examine, for each constituency, negative attitudes
                                    that must be discarded, as well as positive ones that must be nurtured. We address the
                                    issue of employees’ attitudes as they relate to seven different constituencies, as
                                    follows;`,
          constituent: [
            "Self",
            "Peers",
            "Superiors",
            "Surbordinates",
            "Customers",
            "Job",
            "Organization",
          ],
        },
      },
    ],
  },
  consultancy: {
    public: [
      {
        id: 1,
        title: "Exclusively Public Sector Chief Executives (EPSCE)",
        aim: `The CEO's job is to ensure their organisation attains its strategic goals through the judicious and prudent allocation and utilization of the organisation's resources
                    (human, materials, financial, technological).`,
        image: "epsce.jpeg",
        objectives: [
          {
            subtitle: ` The EPSCE initiative was birthed to address peculiar issues that CEOs face:`,
            shorts: null,
            list: [
              {
                id: 1,
                value: `Isolation and loneliness at the top – few people to turn to for advice`,
              },
              {
                id: 2,
                value: `Extremely busy schedules`,
              },
              {
                id: 3,
                value: `The contents of mass training programmes don’t benefit them much`,
              },
              {
                id: 4,
                value: `Find it uncomfortable and time-wasting attending seminars with other employees who can’t
                                    speak their language`,
              },
              {
                id: 5,
                value: `Have questions which take only colleague CEOs to answer effectively`,
              },
              {
                id: 6,
                value: `Confronted by sector/industry-specific issues that require unique solutions`,
              },
            ],
          },
          {
            subtitle: `The EPSCE is:`,
            shorts: null,
            list: [
              {
                id: 1,
                value: `A platform for CEs, CEOs, MDs, Chief Executive Directors to meet, share ideas, and
                                    discuss peculiar sector/industry-specific problems, operational issues`,
              },
              {
                id: 2,
                value: `A place to turn to for advice and coaching when faced with real business challenges to which
                                    no direct/immediate solutions exist`,
              },
            ],
          },
          {
            subtitle: `Business Networking`,
            shorts: `EPSCE offers high-performance Business Networking opportunities, allowing members to share
                            problems, discuss solutions and do business among each other. With membership drawn from a
                            diverse mix of professionals, opportunities are created for business leaders to benefit from the
                            collective expertise of members.`,
          },
          {
            subtitle: `Operational Strategy`,
            shorts: null,
            list: [
              {
                id: 1,
                value: `Three-hour meetings each month`,
              },
              {
                id: 2,
                value: `Half day seminars arranged at the request of members`,
              },
              {
                id: 3,
                value: `Access to GSR Consulting learning resources`,
              },
              {
                id: 4,
                value: `An overnight residential training and recreation session once every quarter that allows the
                                    spouses and families of CEOs to join`,
              },
              {
                id: 5,
                value: `Monthly Knowledge Update Pro gramme: a thirty-minute presentation by the Lead Consultant
                                    of GSR Consulting and other seasoned consultants and business coaches`,
              },
              {
                id: 6,
                value: `Corporate Coaching and Mentoring`,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Public Sector Support International (PSSI)",
        aim: `Your Government’s Aspirations...
                    Your manifesto clearly shows that your government has good intentions to deliver public services at a level and
                    quality expected by the electorate, and your recent campaign message reiterates same. However, in the context of
                    limited resources amidst unending social needs, and competing pressures on the public purse, realising such
                      objective could remain a mirage unless an overarching cost-saving strategy is carefully adopted and rigorously
                    executed`,
        image: "pssi.jpeg",
        objectives: [
          {
            subtitle: `Our Service Promise...`,
            shorts: `Governments that faithfully execute our strategies are guaranteed to save a substantial amount of money. With the
                            extra money, they can provide more attractive pay and benefits package for public sector workers, reduce
                           corruption, introduce performance-driven work culture, and significantly improve the quality of service delivery as a
                            way of increasing their appeal to the electorate whose mandate they need to continue in office.
                           Our Products and Service`,
            list: [
              {
                id: 1,
                value: `Re-organisation and re-bundling of functional units`,
              },
              {
                id: 2,
                value: `Corporatisaton of large bureaucracies into semi-autonomous units designed around the business of seamless service delivery`,
              },
              {
                id: 3,
                value: `Creation of internal markets and increasing competition in public sector and service delivery`,
              },
              {
                id: 4,
                value: `Enforcing performance contracts in governments and MDAs`,
              },
              {
                id: 5,
                value: `Operating flexible labour employment practices that optimize the capacity of employees`,
              },
              {
                id: 6,
                value: `Creating an Integrated Smart People System (ISPS) that allows employees to be moved round any of the
                                    MDAs in case of temporary staff shortages – sickness, maternity, bereavement, attendance on courses, retirement, etc. applicable to units with standardised jobs roles, procedures and processes`,
              },
              {
                id: 7,
                value: `Collapsing existing organisation-wide functional units into Specialised Centers for Service Delivery
                                    (SPECSED) to support a number of MDAs`,
              },
            ],
          },
        ],
      },

      {
        id: 3,
        title: "The Public Service Exellence Programme",
        aim: `Individuals and organisations possess incredible potentials; sadly, only few people are able to
                    develop such potentials.
                    This is due to the fact that there are several factors that set the limit to the extent to which a
                    potential can be converted to achievement.`,
        image: `pspe.jpg`,
        objectives: [
          {
            subtitle: null,
            shorts: `Leaders and senior managers are taken through a number of processes that make them:`,
            list: [
              {
                id: 1,
                value: `Realise their potential`,
              },
              {
                id: 2,
                value: `Improve their self-esteem`,
              },
              {
                id: 3,
                value: `Escalate their self-efficacy`,
              },
              {
                id: 4,
                value: `Improve their knowledge and increase their capacity`,
              },
              {
                id: 5,
                value: `Increase their expectation`,
              },
              {
                id: 6,
                value: `Set very ambitious goal`,
              },
              {
                id: 7,
                value: `Increase their awareness of possibilities`,
              },
              {
                id: 8,
                value: `Explore ways of generating resources to meet targets`,
              },
            ],
          },
          {
            subtitle: null,
            shorts: `Specifically such sessions address several issues, including:`,
            list: [
              {
                id: 1,
                value: `The need to recognise and recognise the potential of individuals and organisations`,
              },
              {
                id: 2,
                value: `Improving Self-Efficacy, Self Esteem, Capability and Competence, which ultimately
                                    develops the leadership capacity of participants;`,
              },
              {
                id: 3,
                value: `Increasing Awareness of Societal/local Problems`,
              },
              {
                id: 4,
                value: `Identifying potential`,
              },
              {
                id: 5,
                value: `Setting targets and growing into them`,
              },
              {
                id: 6,
                value: `Developing Positive Beliefs`,
              },
              {
                id: 7,
                value: `Developing the right culture for optimum productivity`,
              },
              {
                id: 8,
                value: `Understanding how the mind works in either enhancing or inhibiting progress`,
              },
              {
                id: 9,
                value: `Improving self-efficacy as a way of increasing productivity`,
              },
              {
                id: 10,
                value: `Improving self-image and self-esteem`,
              },
              {
                id: 11,
                value: `Developing an attitude of excellence`,
              },
              {
                id: 12,
                value: `Developing visualisations and strong creating vision for the future`,
              },
            ],
          },
        ],
      },
    ],
    private: [
      {
        id: 1,
        title: "HR Transformations",
        image: "transformation.webp",
        aim: `HR transformation seeks to change the HR function itself that will in turn, transform the organisation in its approach to conducting business. 
                    The first part of our HR transformation consultancy focuses on the changes that HR as a functional unit can undergo in order to increase its value to the business.`,
        objectives: [
          {
            subtitle: null,
            shorts: `This will require defining HR’s role from four perspectives, as:`,
            list: [
              {
                id: 1,
                value: `Strategic partner – increasing HR’s understanding of the organisation’s business and its business
                                    strategy, and aligning HR strategy and activities accordingly;`,
              },
              {
                id: 2,
                value: `Change agent – identifying, initiating and leading change projects (hard and soft) that will accelerate
                                    the organisation’s pace of realising its strategic goals;`,
              },
              {
                id: 3,
                value: `Administrative expert – transactional and cost-effective HR administration that ensures compliance
                                    with relevant laws and optimization of value of the workforce;`,
              },
              {
                id: 4,
                value: `Employee champion – motivating employees, promoting their rights, and ensuring fairness, thereby
                                    increasing workforce engagement, commitment, and productivity.`,
              },
            ],
          },
          {
            subtitle: null,
            shorts: `The second requires a rigorous process of ambitious organisational development and cost-effective staff
                            rationalization that:`,
            list: [
              {
                id: 1,
                value: `focuses the organisation on its vision, mission, objectives and value system;`,
              },
              {
                id: 2,
                value: `helps to influence the organisation’s culture by infusing it with the right and desired value system.`,
              },
              {
                id: 3,
                value: `builds capacity for the employees to work towards living out the organisation’s vision, mission and`,
              },
              {
                id: 4,
                value: `dentifies, classifies and evaluates all roles and jobs, and matches these to the available workforce to
                                    determine their suitability (quantitatively and qualitatively) for the roles, and redeploying the workforce
                                    accordingly.`,
              },
            ],
          },
          {
            subtitle: null,
            shorts: `Specific areas to focus on include:`,
            list: [
              {
                id: 1,
                value: `Rationalization of Redundant Staff`,
              },
              {
                id: 2,
                value: `Transforming the HR Function into a Business Partner`,
              },
              {
                id: 3,
                value: `Transforming Reward Systems`,
              },
              {
                id: 4,
                value: `Transforming Performance Management Systems`,
              },
              {
                id: 5,
                value: `Transforming Recruitment and Onboarding`,
              },
              {
                id: 6,
                value: `Transforming Talent Management`,
              },
              {
                id: 7,
                value: `Transforming Succession Planning`,
              },
              {
                id: 8,
                value: `Transforming Employment Practices`,
              },
              {
                id: 9,
                value: `Transforming Working Time Regulations`,
              },
              {
                id: 10,
                value: `Transforming Organisational Culture`,
              },
            ],
          },
          {
            subtitle: null,
            shorts: `We have a demonstrated capacity in supporting organisations with each of the above HR transformation
                            interventions. For further enquiries or to discuss your organisation’s HR transformation needs, please contact us.`,
            list: [],
          },
        ],
      },
      {
        id: 2,
        title: "HR Outsourcing Modules",
        aim: `Details of our outsourced services are displayed below`,
        image: "outsource.jpeg",
        tables: [
          {
            id: 1,
            model: `Entire Function`,
            description: `Outsource the entire HR function – GSR staff planted
                            in your site permanently for a specified period`,
            client: `Full support for several HR functions`,
            cost: ``,
          },
          {
            id: 2,
            model: `Entire Function, Transfer Knowledge`,
            description: `Outsource the entire HR function – GSR staff planted in your site permanently for a specified period - continuous knowledge transfer by means of mentoring
                            and coaching for staff to take up HR role after contract period`,
            client: `Full support for several HR transfer`,
            cost: ``,
          },
          {
            id: 3,
            model: `Set of Functions`,
            description: `Outsource a function/set of functions of HR – eg.
                            recruitment, training, policy design`,
            client: `Support for a set of functions`,
            cost: ``,
          },
          {
            id: 4,
            model: `Set for HR staff`,
            description: `Receive support for your HR staff from our HR
                            professionals – a professional visits your site once or
                            twice a week to provide guidance and support`,
            client: `Support for HR function once or twice weekly`,
            cost: ``,
          },
          {
            id: 5,
            model: `Set for HR non-HR staff`,
            description: `Receive support for your non-HR staff who are guided
                            to deliver HR function`,
            client: `Support for non-HR function once or twice weekly`,
            cost: ``,
          },
          {
            id: 6,
            model: `Support for non-HR staff Transfer Knowledge`,
            description: `Receive support for your non-HR staff who are guided to deliver HR function - and trained to take over entire HR function after contract period`,
            client: `Support for non-HR function
                            once or twice weekly Knowledge transfer`,
            cost: ``,
          },
          {
            id: 7,
            model: `One-off HR service`,
            description: `GSR professionals deliver one-off HR services such as
                            training, policy design`,
            client: `Consultancy service for
                            named function`,
            cost: ``,
          },
          {
            id: 8,
            model: `Remote support for HR staff`,
            description: `Receive remote support for your HR staff GSR
                            professionals provide telephone and online support to
                            your in-house HR staff`,
            client: `Telephone and online support
                            for your HR staff from a
                            remote location`,
            cost: ``,
          },
        ],
      },
    ],
  },
  bestCourses: [
    {
      id: 1,
      title: "Senior-Level Public Leadership Program(SLPLP)",
      image: "slplp.png",
      modules: [
        {
          id: 1,
          name: "SLPLP Module 1",
          aim: "To draw attention to essential leadership skills required of directors of MDAs in evolving a professional public sector organisation that delivers excellence to its stakeholders;",
          duration: "3 days",
          objectives: [
            {
              id: 1,
              message: "Explain the dynamics that create the context for MDAs",
            },
            {
              id: 2,
              message: "Explain the Public Sector Challenge",
            },
            {
              id: 3,
              message:
                "Outline steps to instill and deepen Public Service Values in MDAs",
            },
            {
              id: 4,
              message:
                "Outline the mindset change that can guarantee future success for MDAs",
            },
            {
              id: 5,
              message: "Distinguish between Managing, Leading & Directing",
            },
            {
              id: 6,
              message: "Explain what leadership means to you",
            },
            {
              id: 7,
              message:
                "Examine the effectiveness of chosen leadership styles under given circumstances",
            },
            {
              id: 8,
              message:
                "Outline specifc change initiatives you would pursue in your capacity as a director, and critically examine how you can make these effective",
            },
            {
              id: 9,
              message:
                "Explain the impact of your personal leadership style on the performance of your staff",
            },
            {
              id: 10,
              message:
                "Assemble your Personal/Departmental Action Plan for implementing the insights gathered from this training",
            },
          ],
        },
        {
          id: 2,
          name: "SLPLP Module 2",
          aim: "To emphasise the core skills and mindset required for succeeding as professionals and technocrats in an environment heavily dominated and influenced by politicians",
          objectives: [
            {
              id: 1,
              message: " Explore the implications of the context of MDAs",
            },
            {
              id: 2,
              message:
                "Examine the responsibilities of them entering Senior Management",
            },
            {
              id: 3,
              message:
                "Explain the challenges of working with politicians to execute public policy",
            },
            {
              id: 4,
              message:
                " Discuss how to overcome the challenges of directing in the public sector",
            },
            {
              id: 5,
              message: "Explain the use of appropriate leadership styles",
            },
            {
              id: 6,
              message: "Explain how to motivate excellent performance",
            },
            {
              id: 7,
              message:
                " Outline the process of initiating and managing successful change projects",
            },
            {
              id: 8,
              message: "Explain the key areas of focus of corporate leaders",
            },
          ],
        },
        {
          id: 3,
          name: "SLPLP Module 3",
          aim: "To introduce the basic tenets of new public management (NPM) to directors of MDAs as a way of driving efficiency and cost containment in the public sector",
          objectives: [
            {
              id: 1,
              message:
                " Explain how bureaucratic inefficiencies impact on the delivery of public services",
            },
            {
              id: 2,
              message:
                "Outline steps to take to strengthen bureaucracy for better results",
            },
            {
              id: 3,
              message:
                "Explain the key components of new public management (NPM) as a public management strategy;",
            },
            {
              id: 4,
              message: "Outline and examine the building blocks of NPM",
            },
            {
              id: 5,
              message:
                "Examine the main private sector practices adopted to public sector organisations under NPM",
            },
            {
              id: 6,
              message:
                "Assess the effectiveness of adopting private sector practices to the public sector",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "The Succes Prone Manager(SPM)",
      image: "smp.png",
      modules: [
        {
          id: 1,
          name: "Level 1 : Entry Level Mastery",
          aim: "This is an introductory module designed specifically for those for whom management (theory and/or practice) is a new area or those who have just been promoted to managerial roles for the first time.",
          objectives: [
            {
              id: 1,
              message:
                "Introduce participants to the basic concepts, principles and practices of management",
            },
            {
              id: 2,
              message:
                "The nature of managerial work, the process of managing and the basic skills required to be effective as a manager.",
            },
            {
              id: 3,
              message:
                "Understand precisely what managerial work involves; how to work with subordinates and the expectations on managers",
            },
          ],
        },
        {
          id: 2,
          name: "Level 2: Mid-Executive Level Mastery",
          aim: "Having gone through Level 1, participants at this level are assisted to establish the key areas where managers need to focus their attention. They would have grasped the basic concepts and practices of management. They would have been promoted as Supervisors.",
          objectives: [
            {
              id: 1,
              message:
                "The course helps managers to develop their capacity to work with subordinates, other lateral managers, as well as their bosses.",
            },
            {
              id: 2,
              message:
                "Expand their horizon and develop a system perspective to appreciate the interrelationships and interdependencies that exist at the workplace in general, and in a managerial role, in particular, and how they can both rely on and contribute effectively to the success of these networks and constituencies.",
            },
          ],
        },
        {
          id: 3,
          name: "Level 3: Senior Executive Level Mastery",
          aim: "At Level 3, participants are Managers overseeing the work of other supervisors. They may be managers of functional Units. The manager will be working hard to provide effective leadership, guidance and motivation for others to achieve excellent results. They would also be working both with their subordinates, other colleague managers, and bosses to achieve organisational goals. They would need to develop their capacity to work with these different constituencies at the workplace. Work at this level requires a lot of decision making, not just by the manager but also by their direct reports. The manager’s success at this level will depend on their ability to make crucial decisions and also to know which of such decisions they need to delegate to others.",
          objectives: [
            {
              id: 1,
              message:
                "The objective of the training at this level would be to help the participant to create the system and develop capacity for others to grow.",
            },
            {
              id: 2,
              message:
                "The manager’s task here is to create the system that allows others to function effectively, and to perform at their optimum level",
            },
          ],
        },
        {
          id: 4,
          name: "Level 4: Director Level Mastery",
          aim: `Participants may have been promoted to the Grade of Director, Assistant Director or Senior Manager, depending on the type of structure in operation. They will normally be heading functional
                        departments, such as Human Resource, Finance, Operations,
                        Sales, etc. They will have a number of managers reporting to
                        them. Their role will require them to effectively combine strategic
                        focus and operational efficiency, and they will do well to discipline themselves to stay put to that by developing and empowering their direct reports to be responsible for the day to day
                        routine tasks, whilst they focus on key strategic issues.`,
          objectives: [
            {
              id: 1,
              message:
                "help the Director/Assistant Director/Senior Manager to develop an understanding of the broader organisational issues, and to understand their role as those who must both initiate and implement new strategies.",
            },
            {
              id: 2,
              message:
                "They will be assisted to both innovate and support innovative ideas. They will be assisted to solve problems and make things happen instead of playing the blame game.",
            },
            {
              id: 3,
              message:
                "The aim is to help them to develop capacity for others and to address issues likely to affect the effectiveness of their direct reports",
            },
          ],
        },
        {
          id: 5,
          name: "Level 5: CEO/MD Level Mastery",
          aim: `The MD/CEO/Executive Director’s job is to ensure the
                        organisation attains its strategic goals through the judicious and
                        prudent allocation and utilization of the organisation’s resources
                        (human, materials, financial, technological). His role is to initiate
                        and execute strategies that will consistently move the
                        organisation forward.`,
          objectives: [
            {
              id: 1,
              message:
                "The objective of training at this level is to develop the mindset of a business owner and steward, concerned about the success and safety of the business; its people, its resources, as well as its numerous stakeholders – internal and external.",
            },
            {
              id: 2,
              message: `It requires
                                discretion and discernment, accurate decision making and
                                reasonable and calculated risk taking. At the same time, it entails
                                and requires the institution and implementation of systems that
                                ensure safe risk taking. It calls for a concern for both
                                results/productivity and people.`,
            },
          ],
        },
        {
          id: 6,
          name: "Level 6: Board Level Mastery",
          aim: `Businesses now live and operate in an increasingly complex,
                        dynamic, and intricately interconnected world. Board Chairs,
                        Secretaries and members are those who steer the direction of the
                        organisation and set the agenda for its growth and progress. Boards
                        and Board Chairs face new management challenges demanding
                        new ways of thinking and new levels of innovation underpinned by
                        results based strategies, and a robust risk management framework.
                        In response to this fast pace changing landscape, we have designed
                        the Success-prone Manager Board Level Programme to help Board
                        Chairs and members who are poised to make a difference.`,
          objectives: [
            {
              id: 1,
              message: `Training at this level aims to support board members to develop
                                good corporate governance practices and strategic focus that
                                underpins excellent performance of the organisation even in
                                turbulent environments.`,
            },
            {
              id: 2,
              message: `It aims to develop Board Chairperson’s
                                capacity to inspire, gain commitment from and harness the potentials of board members and Top Management, and to inspire a
                                performance culture through a competitive rewards management
                                strategy.`,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Turbulence Proof Leader",
      image: "tmp.png",
      modules: [
        {
          id: 1,
          name: "The Turbulence-Proof Leader Level 1 (Entry Level Mastery)",
          aim: `Anybody can lead, although not everybody will develop the discipline for
                        leadership. Being placed in a position to lead others, and actually leading
                        them are two separate things. For persons placed in a position to lead
                        others, the discipline for leading others has to be developed intentionally.
                        The objective of this module is to expose participants to the concepts and
                        meanings of leadership; help them to explore the several arenas and levels
                        where leadership may be exercised, and to examine how leadership is
                        intertwined with, and at the same time, distinguished from, management.
                        The module introduces important leadership concepts, such as leading self,
                        peers, superiors, and subordinates; developing leadership mindset, as well
                        as action centered leadership, where leadership is seen as an activity that
                        occurs in a group setting. The overall aim is to establish the functional
                        importance of leaders – leadership status is earned from the functions one
                        performs in teams, not merely their position.`,
          objectives: [],
        },
        {
          id: 2,
          name: "The Turbulence-Proof Leader Level 2 (Mid-Executive Level Mastery)",
          aim: `Leadership is an essential part of management, and to be effective, managers require some good dose of leadership skills. Similarities and distinctions
                        between managers and leaders are clearly laid out at this stage, where
                        managers likely have a number of managers working under them. They
                        need to be able to provide leadership for their subordinates to become
                        better leaders, while at the same time, focusing on their own jobs. They
                        need to show concern for people but at the same time, keep their eyes on
                        the bottom line, employing both their rewards and coercive power to elicit
                        desirable subordinate behaviour. Leaders at this level need to understand
                        how to grow their influence and increase their power to get things done.
                        They need to develop the capacity of their direct reports and delegate
                        authority to them to make a number of relevant decisions. Overall, they will
                        be developing the next generation of leaders, and will be laying the foundation for their own replacement in the long term.`,
          objectives: [],
        },
        {
          id: 3,
          name: "The Turbulence-Proof Leader Level 3 (Senior Executive Level mastery)",
          aim: `This module targets Senior Managers (private sector) and Chief Managers
                        (public sector). These are managers who are responsible for other middle
                        managers. They will have been providing support to Directors who are
                        Heads of Department. They are required to know how to engage with both
                        their supervisors as well as their direct reports. They need to identify the
                        talents in their teams and help develop them into effective managers that
                        would constitute the organisation’s leadership pipeline.
                        They need to understand the process of leading, and develop skills for
                        leading successful change projects.`,
          objectives: [],
        },
        {
          id: 4,
          name: "The Turbulence-Proof Leader Level 4 (Director Level Mastery)",
          aim: `Operating at the top (Director) level, participants at this level will already
                        have understood the distinctions and similarities between management
                        and leadership; they will have developed their muscles for effective
                        functional leadership. They are to become effective corporate leaders by
                        focusing their employees on the vision and direction of the organisation
                        and departments they lead. The strategic focus of training at this stage is to
                        develop leaders who will take control of the corporate development of their
                        organisation, focusing on the key areas, and metrics by which the
                        organisation measures its bottom line. They will combine visionary
                        leadership with motivational leadership that will translate to strategic
                        leadership, helping the organisation to focus both on long term strategic
                        issues and on short term controls that ensure the organisation’s continued
                        operational viability. They will be championing change projects that will
                        navigate the organisation towards its strategic goals. They are required to
                        make effective use of their human capital (talents), and lay down structures
                        and systems that allow the succession of key and critical roles, as a way of
                        ensuring that the organisation can continue to build on the success of its
                        predecessors at any given time.`,
          objectives: [],
        },
        {
          id: 5,
          name: "The Turbulence-Proof Leader Level 5 (CEO/MD Level Mastery)",
          aim: `This module has been designed to meet the specific leadership needs of
                        CEOs, MDs, Executive Directors, and Chief Directors (Government
                        Ministries). Organisations are true reflections of their leaders; there can be
                        no assertion more basic than that. Leaders at this stage are the most
                        powerful persons whose actions or inactions have far reaching impact on
                        their organisations. These top executives will have been providing
                        leadership for heads of their departments or functional divisions. Training at
                        this stage is aimed to equip the top executive with the skills to navigate the
                        organisation towards its strategic goals. It would equip them to clearly
                        articulate vision, align organisational members behind the vision, and
                        provide the necessary motivation and inspiration for them to marshal every
                        force towards realizing strategic goals. The capacity to judiciously allocate
                        the organisation’s resources, and to hold oneself accountable for results are
                        key competencies expected at this stage.`,
          objectives: [],
        },
        {
          id: 6,
          name: "The Turbulence-Proof Leader Level 6 (Board Level Mastery)",
          aim: `The Board Level Mastery module equips and empowers Board Members,
                        Board Chairs and Secretaries to enable them to perform their basic functions of enterprise, oversight and accountability in respect of the organisation they govern. The required competencies at this level include effective
                        board governance, corporate governance, strategic thinking and strategic
                        orientation, risk management and effective accountability. The ability to
                        digest and make sense of massive company information, including technical business proposals and policies, and financial statements, and make
                        informed decisions on these, are key success factors.`,
          objectives: [],
        },
      ],
    },
  ],
};

export default data;

/*
taking control of our thoughts

our minds is the controlled tower of our life
all our decisions come from our mind
and what ever we are today today is the result of all we've been thinking those years

the Bible says as a man thinks in his heart so is he.

what determines what you think,
is it word of God, or is something i read or something you watch.

example the way people open their minds to a television program, either news, preaching, shows or something

not realizing they are being programmed in their minds to think a certain way.

So we need to engange our selves and watch shows or stuff that are going to program our minds
to think in the way God thinks. it includes watching sermons etc.

Col 3:1-8

So when some one is born again or baptised its as if youve died to your old way of life
and youve rose to walk in a newness of life. So its says we should keep seeking thinks from above.
Spiritual things. Set your mind on the things above not on the things on earth.

Things that are holy righteaous, good and help full. 

2. Challenge in controlling our thought
2nd corin 4:4, 11:3.
so if satan is going to fight you. it will be in your mind.

bacasue who your are or who youre going to be starts from your mind.
the way your thiink. what you think about yourself, what you think about others.

So sometimes satan will make you recall thinks that have happedn long ago
things that were bad and we dwell opon it and start feeling bad. so if our minds isnt field with
the word of GOd, with good things, we suffer the consequences of what we thought about.

So we should keep feeding our minds with the word of God. becasue what ever we put in our minds
is going to stay
forever unless we are delivered from it.

So our lifes is the expression of our thinking. so if we dont like the way things are going we should
changes our thinking.

so if you're angry try and lay it down, if youre feeling jealous try and lay it down.

So christains who have the Holy Spirit living in us.

and he is a helper to us, he enables us to think the right way he brings God to our minds.
so we should learn to always be in communiion with the holy spirit

because He is the one going to remind us to always think right.

we sow thought and reap and action,
we sow and action and reap a habit
we sow a habit and reap a character
we sow character and reap a destiny
*/
