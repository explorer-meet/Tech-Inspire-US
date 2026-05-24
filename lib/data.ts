import {
  Cpu,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  LineChart,
  Bot,
  Server,
  Users,
  Layers,
  Rocket,
  Database,
  Globe,
  Briefcase,
  HeartPulse,
} from 'lucide-react';

export const SITE = {
  name: 'TEKinspire',
  tagline: 'Inspired by Technology',
  description:
    'Tier 1 Technology Staffing, Consulting and Solutions firm delivering services and solutions that are relevant, innovative, timely and affordable.',
  email: 'info@tekinspireus.com',
  phones: ['201-905-3550', '732-640-7972'],
  address: '1581 RT 27, Suite 101, Edison, NJ 08817',
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    instagram: '#',
  },
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact Us' },
];

export const STATS = [
  { value: '150+', label: 'Happy Clients' },
  { value: '300+', label: 'Projects Delivered' },
  { value: '80+', label: 'Expert Consultants' },
  { value: '12+', label: 'Years of Experience' },
];

export const SERVICES = [
  {
    slug: 'it-strategy',
    title: 'IT Strategy & Advisory',
    icon: Briefcase,
    image: '/images/service-strategy.jpg',
    short:
      'Align technology with business goals through enterprise architecture and digital transformation roadmaps.',
    description:
      'Our advisors partner with your leadership to define a future-ready IT vision — covering enterprise architecture, vendor strategy, digital transformation roadmaps, and modernization priorities that compound revenue and efficiency.',
    points: [
      'Enterprise architecture & TOGAF alignment',
      'Digital transformation roadmap',
      'Vendor and platform strategy',
      'Technology cost optimization',
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development & Engineering',
    icon: Cpu,
    image: '/images/service-software.jpg',
    short:
      'Custom web, mobile and enterprise software built with .NET, Java, Node.js, React and modern stacks.',
    description:
      'Full-cycle product engineering — from discovery and UX through architecture, build, QA and DevOps. We build resilient, scalable applications using .NET, Java, Node.js, Python, React and React Native.',
    points: [
      'Web & mobile application development',
      'Enterprise portals and SaaS platforms',
      'API design and microservices',
      'DevOps and CI/CD automation',
    ],
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    icon: Cloud,
    image: '/images/service-cloud.jpg',
    short:
      'AWS, Azure and GCP migrations, modernization and managed cloud operations engineered for scale.',
    description:
      'We accelerate cloud adoption with migration assessments, landing-zone design, containerization, and FinOps. Run reliably on AWS, Azure, or GCP with hardened security and 24/7 managed operations.',
    points: [
      'Cloud migration & modernization',
      'Kubernetes, containers, serverless',
      'FinOps & cost governance',
      '24/7 managed cloud operations',
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Consulting',
    icon: ShieldCheck,
    image: '/images/service-security.jpg',
    short:
      'Threat assessments, zero-trust architecture, SOC operations and compliance for regulated industries.',
    description:
      'Protect what matters with risk assessments, zero-trust architecture, identity governance, vulnerability management, and SOC operations aligned to NIST, HIPAA, SOC 2 and PCI-DSS.',
    points: [
      'Zero-trust architecture & IAM',
      'Vulnerability & penetration testing',
      'SOC, SIEM and incident response',
      'Compliance: NIST, HIPAA, SOC 2, PCI-DSS',
    ],
  },
  {
    slug: 'ai-ml',
    title: 'AI / ML & Data Science',
    icon: BrainCircuit,
    image: '/images/service-ai.jpg',
    short:
      'Generative AI, predictive models, NLP and computer vision built on MLOps foundations.',
    description:
      'We build AI products that move the business — generative AI assistants, predictive models, NLP, computer vision, and recommendation engines, productionized on a rigorous MLOps foundation.',
    points: [
      'Generative AI & LLM solutions',
      'Predictive modeling & forecasting',
      'NLP, vision and recommendation engines',
      'MLOps, monitoring and governance',
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & BI',
    icon: LineChart,
    image: '/images/service-data.jpg',
    short:
      'Modern data platforms, lakehouses, Power BI and Tableau dashboards that surface real insight.',
    description:
      'From data strategy and modern warehouses to embedded analytics — we deliver lakehouses on Snowflake, Databricks and Synapse with Power BI, Tableau and Looker storytelling on top.',
    points: [
      'Data warehouse & lakehouse design',
      'ETL/ELT pipelines and quality',
      'Self-serve BI: Power BI, Tableau, Looker',
      'KPI frameworks and executive dashboards',
    ],
  },
  {
    slug: 'rpa',
    title: 'Robotic Process Automation',
    icon: Bot,
    image: '/images/service-rpa.jpg',
    short:
      'UiPath, Automation Anywhere and Power Automate bots that cut cost and accelerate operations.',
    description:
      'We identify high-ROI automation opportunities and ship resilient bots using UiPath, Automation Anywhere and Microsoft Power Automate — wrapped in a Center of Excellence model.',
    points: [
      'Process discovery and ROI analysis',
      'UiPath, Automation Anywhere, Power Automate',
      'Attended & unattended automation',
      'Automation CoE & governance',
    ],
  },
  {
    slug: 'managed-it',
    title: 'Managed IT Services',
    icon: Server,
    image: '/images/service-managed.jpg',
    short:
      '24/7 infrastructure, application and database support with measurable SLAs and proactive monitoring.',
    description:
      'Predictable, SLA-backed managed services covering infrastructure, applications and databases. Proactive monitoring, patching, and continuous improvement — so your teams focus on growth.',
    points: [
      'L1–L3 application & infra support',
      'Database administration (SQL/Oracle)',
      'Monitoring, patching and SLAs',
      'ITIL-aligned service operations',
    ],
  },
  {
    slug: 'staffing',
    title: 'IT Staffing & Augmentation',
    icon: Users,
    image: '/images/service-staffing.jpg',
    short:
      'Vetted contract, contract-to-hire and direct-hire talent across cloud, data, AI and enterprise stacks.',
    description:
      'Our W2 bench of vetted consultants and a deep recruiter network deliver the right talent in days, not months — contract, contract-to-hire and full-time across every modern stack.',
    points: [
      'Contract & contract-to-hire',
      'Direct-hire & executive search',
      'Managed talent pods',
      'Onshore, nearshore and offshore models',
    ],
  },
  {
    slug: 'startup-mvp',
    title: 'Startup & MVP Launch',
    icon: Rocket,
    image: '/images/service-startup.jpg',
    short:
      'Zero-to-one product squads that ship investor-ready MVPs in 8–12 weeks.',
    description:
      'A blended pod of designers, engineers and PMs that takes founders from idea to investor-ready MVP in 8–12 weeks — with a clean architecture you can scale on.',
    points: [
      'Product discovery and UX',
      'MVP architecture & engineering',
      'Cloud-native foundations',
      'Investor demo & launch support',
    ],
  },
  {
    slug: 'data-warehousing',
    title: 'Data Warehousing & DBA',
    icon: Database,
    image: '/images/service-warehouse.jpg',
    short:
      'Snowflake, Redshift, Synapse and on-prem warehouse design plus expert database administration.',
    description:
      'Modernize your warehouse and keep databases humming. Our DBAs and data engineers cover Snowflake, Redshift, Synapse, SQL Server, Oracle and PostgreSQL — on-prem or cloud.',
    points: [
      'Snowflake, Redshift, Synapse',
      'SQL Server, Oracle, PostgreSQL DBA',
      'High availability & DR design',
      'Performance tuning & cost control',
    ],
  },
  {
    slug: 'enterprise-portals',
    title: 'Web Apps & Enterprise Portals',
    icon: Globe,
    image: '/images/service-portals.jpg',
    short:
      'SharePoint, Liferay and custom enterprise portals that connect people, content and process.',
    description:
      'Modern intranets and customer portals on SharePoint, Liferay, and headless stacks — designed for collaboration, single sign-on, and integration with the systems that run your business.',
    points: [
      'SharePoint Online & Liferay',
      'Headless CMS portals',
      'SSO & enterprise integration',
      'Knowledge management & workflows',
    ],
  },
  {
    slug: 'business-analysis',
    title: 'Functional Business Analysis',
    icon: Layers,
    image: '/images/service-analysis.jpg',
    short:
      'BAs and product managers who translate business needs into delivery-ready requirements.',
    description:
      'Senior business analysts and product managers who bridge business and engineering — discovery workshops, process maps, user stories and crisp acceptance criteria your delivery teams can run on.',
    points: [
      'Discovery & requirements engineering',
      'Process modeling (BPMN)',
      'User stories & acceptance criteria',
      'UAT and release readiness',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Services',
    icon: HeartPulse,
    image: '/images/service-healthcare.jpg',
    short:
      'HIPAA-ready engineering, Epic/Cerner integration, HL7/FHIR interop and clinical analytics.',
    description:
      'Purpose-built engineering for payers and providers — HIPAA-ready cloud, HL7/FHIR interoperability, Epic and Cerner integration, and clinical analytics that improve outcomes.',
    points: [
      'HIPAA-ready cloud and apps',
      'HL7 & FHIR interoperability',
      'Epic / Cerner integration',
      'Clinical and population health analytics',
    ],
  },
];

export const INDUSTRIES = [
  {
    name: 'Healthcare & Life Sciences',
    desc: 'HIPAA-ready engineering, clinical data integration and analytics for payers and providers.',
    icon: HeartPulse,
  },
  {
    name: 'Banking & Fintech',
    desc: 'Secure, regulated platforms for lending, payments, wealth and digital banking.',
    icon: Briefcase,
  },
  {
    name: 'Insurance',
    desc: 'Policy administration, claims modernization and AI-powered underwriting.',
    icon: ShieldCheck,
  },
  {
    name: 'Retail & E-commerce',
    desc: 'Headless commerce, personalization and unified customer data platforms.',
    icon: Globe,
  },
  {
    name: 'Manufacturing',
    desc: 'Industry 4.0, IoT, ERP modernization and predictive maintenance.',
    icon: Cpu,
  },
  {
    name: 'Public Sector',
    desc: 'Citizen-centric digital services with FedRAMP-aware architecture.',
    icon: Layers,
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We immerse in your business, map outcomes, and align on what success looks like.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Architecture, UX and delivery plans that balance speed, scale and total cost of ownership.',
  },
  {
    step: '03',
    title: 'Deliver',
    desc: 'Agile pods ship in tight increments with continuous quality and stakeholder visibility.',
  },
  {
    step: '04',
    title: 'Sustain',
    desc: 'Managed operations, observability and continuous improvement that compound value.',
  },
];

export const VALUES = [
  {
    title: 'Teamwork',
    desc: 'One team, one fight. We work as a unified extension of your organization.',
  },
  {
    title: 'Respect',
    desc: 'We embrace diversity of culture, background, experience, thoughts and ideas.',
  },
  {
    title: 'Trust',
    desc: 'We follow through on our commitments with open and honest communication.',
  },
  {
    title: 'Excellence',
    desc: 'Relevant, innovative, timely and affordable — consistently exceeding expectations.',
  },
];

export const JOBS = [
  {
    id: 'net-developer-ii',
    title: '.NET Developer II',
    location: 'Edison, NJ / Remote',
    type: 'Full-time',
    experience: '4–7 years',
    posted: '2 days ago',
    tags: ['.NET 8', 'C#', 'Azure', 'SQL Server', 'React'],
    summary:
      'Build and modernize enterprise applications on .NET 8 and Azure for Fortune 500 clients.',
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    location: 'Edison, NJ',
    type: 'Full-time',
    experience: '2–4 years',
    posted: '4 days ago',
    tags: ['Node.js', 'TypeScript', 'React', 'AWS'],
    summary:
      'Ship full-stack features across modern web stacks with a fast-moving product squad.',
  },
  {
    id: 'java-developer-liferay-ii',
    title: 'Java Developer (Liferay) – II',
    location: 'Remote (US)',
    type: 'Contract',
    experience: '5–8 years',
    posted: '1 week ago',
    tags: ['Java 17', 'Liferay DXP', 'Spring', 'PostgreSQL'],
    summary:
      'Lead Liferay DXP portal builds, OSGi modules and integrations for enterprise clients.',
  },
  {
    id: 'sharepoint-developer',
    title: 'SharePoint Developer',
    location: 'Edison, NJ / Hybrid',
    type: 'Contract-to-Hire',
    experience: '3–6 years',
    posted: '1 week ago',
    tags: ['SharePoint Online', 'SPFx', 'Power Automate', 'TypeScript'],
    summary:
      'Engineer modern SharePoint solutions, SPFx web parts and Power Platform workflows.',
  },
  {
    id: 'java-lead-oracle',
    title: 'Java Lead with Oracle',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '8+ years',
    posted: '2 weeks ago',
    tags: ['Java', 'Spring Boot', 'Oracle', 'Microservices', 'AWS'],
    summary:
      'Technical lead for high-throughput Java microservices on Oracle and AWS.',
  },
  {
    id: 'data-engineer',
    title: 'Senior Data Engineer',
    location: 'Remote (US)',
    type: 'Full-time',
    experience: '5+ years',
    posted: '3 weeks ago',
    tags: ['Snowflake', 'dbt', 'Airflow', 'Python', 'AWS'],
    summary:
      'Design and run modern data platforms on Snowflake, dbt and Airflow.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'TEKinspire spun up a senior engineering pod in two weeks and shipped our analytics platform a quarter ahead of plan. They feel like part of our team.',
    name: 'VP, Data & Analytics',
    company: 'Fortune 500 Healthcare Payer',
  },
  {
    quote:
      'Their cloud and DevOps engineers re-architected our platform on AWS with zero downtime. Performance is up 3x and our run-rate cost dropped 28%.',
    name: 'CTO',
    company: 'Mid-market Fintech',
  },
  {
    quote:
      'From the first call we trusted the team. The discovery work alone reshaped our roadmap and saved us months of rework.',
    name: 'Director, Digital',
    company: 'Global Insurance Carrier',
  },
];

export const CLIENT_LOGOS = [
  'Cygnus Health',
  'NovaBank',
  'Orbital Insurance',
  'Helix Retail',
  'Vertex Manufacturing',
  'Lumen Public',
  'Atlas Pharma',
  'Quanta Logistics',
  'Pioneer Energy',
  'Stratos Media',
];
