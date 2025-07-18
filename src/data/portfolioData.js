export const portfolioData = {
  name: 'Samuel Velasco',
  title: {
    es: 'QA Automatizador & DevOps',
    en: 'QA Automation Engineer & DevOps'
  },
  location: 'Santiago, Chile',
  email: 'svelasco.inc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/svelascoinc/',
  about: {
    title: { es: 'Sobre Mí', en: 'About Me' },
    p1: {
      es: 'Soy una persona autodidacta, con una gran capacidad de autogestión y un compromiso constante con las mejores prácticas en metodologías ágiles y de cascada. Me especializo en el aseguramiento de la calidad (QA) y la automatización, transformando desafíos complejos en soluciones eficientes.',
      en: 'I am a self-taught person, with a great capacity for self-management and a constant commitment to best practices in agile and waterfall methodologies. I specialize in quality assurance (QA) and automation, transforming complex challenges into efficient solutions.'
    },
    p2: {
      es: 'Esta base me impulsó naturalmente hacia la cultura DevOps, donde he pasado los últimos años fusionando el desarrollo, la calidad y las operaciones. Creo firmemente que la mejor manera de construir un buen ciclo del software es a través de la automatización inteligente, la colaboración y un deseo incansable de aprender y mejorar cada día.',
      en: 'This foundation naturally propelled me towards the DevOps culture, where I have spent the last few years merging development, quality, and operations. I firmly believe that the best way to build a good software cycle is through intelligent automation, collaboration, and a tireless desire to learn and improve every day.'
    }
  },
  resume: {
    title: { es: 'Resumen Profesional', en: 'Professional Summary' },
    experienceTitle: { es: 'Experiencia', en: 'Experience' },
    skillsTitle: { es: 'Habilidades', en: 'Skills' },
    certificationsTitle: { es: 'Certificaciones', en: 'Certifications' },
    educationTitle: { es: 'Educación', en: 'Education' },
  },
  experience: [
    {
      role: 'DevOps & QA Engineer',
      company: 'IXComercio',
      period: { es: '2022 - Presente', en: '2022 - Present' },
      description: {
        es: [
          'Administración de Ambientes en Cloud, repositorios, procesos de CI/CD y prácticas de seguridad.',
          'Despliegues en AKS para microservicios con HPA y en entornos Serverless (Azure Functions, Container Apps).',
          'Implementación de Chaos Engineering con Azure Chaos Studio y Chaos Mesh.',
          'Integración de herramientas de seguridad como Trivy y SAST/Semgrep en el pipeline de CI/CD.',
          'Automatización de pruebas de regresión (Postman/Newman), de mutación (Stryker) y de rendimiento (K6).',
          'Automatización de pruebas GUI con Cypress.'
        ],
        en: [
          'Administration of Cloud Environments, repositories, CI/CD processes, and security practices.',
          'Deployments in AKS for microservices with HPA and in Serverless environments (Azure Functions, Container Apps).',
          'Implementation of Chaos Engineering with Azure Chaos Studio and Chaos Mesh.',
          'Integration of security tools like Trivy and SAST/Semgrep into the CI/CD pipeline.',
          'Automation of regression (Postman/Newman), mutation (Stryker), and performance (K6) tests.',
          'GUI test automation with Cypress.'
        ]
      }
    },
    {
      role: 'QA Engineer',
      company: 'Falabella Retail S.A',
      period: '2021 - 2022',
      description: {
        es: [
          'Análisis, Planificación, Ejecución y Automatización de Pruebas Funcionales y no Funcionales.',
          'Aseguramiento de calidad en entornos de cloud (GCP-Kubernetes) con microservicios.',
          'Tests Manuales Servicios: Postman, Automatización Apis: K6 (Javascript, Smoke Testing), GUI: Nightwatch, Test de Rendimiento: K6 (Load, Stress, Spike Tests) Jmeter (Colas JMS).'
        ],
        en: [
          'Analysis, Planning, Execution, and Automation of Functional and Non-Functional Tests.',
          'Quality assurance in cloud environments (GCP-Kubernetes) with microservices.',
          'Manual Service Tests: Postman, API Automation: K6 (Javascript, Smoke Testing), GUI: Nightwatch, Performance Testing: K6 (Load, Stress, Spike Tests) Jmeter (JMS Queues).'
        ]
      }
    },
    {
      role: 'Software Developer Engineer in Test (SDET)',
      company: 'CleverIT Group',
      period: '2019 - 2021',
      description: {
        es: [
          'Análisis, Planificación, Ejecución y Automatización de Pruebas Funcionales (Katalon) y no Funcionales (Jmeter), proyectos en clientes (Forus, Falabella).',
          'Plataforma Planificación y Ejecución: Azure Boards-Test Plan (Forus), Jira-Zephyr (Falabella).'
        ],
        en: [
          'Analysis, Planning, Execution, and Automation of Functional (Katalon) and Non-Functional (Jmeter) Tests, projects for clients (Forus, Falabella).',
          'Planning and Execution Platform: Azure Boards-Test Plan (Forus), Jira-Zephyr (Falabella).'
        ]
      }
    },
    {
      role: 'Junior Consultant Lvl 2',
      company: 'Intellego - Axity',
      period: '2017 - 2019',
      description: {
        es: [
          'Establecer Área de QA junto con sus procesos.',
          'Análisis, Planificación y ejecución de Pruebas Funcionales: Oracle Forms.'
        ],
        en: [
          'Establish QA Area along with its processes.',
          'Analysis, Planning, and execution of Functional Tests: Oracle Forms.'
        ]
      }
    },
    {
      role: 'Especialista de Control de Calidad',
      company: 'Mediconecta',
      period: '2015 - 2017',
      description: {
        es: [
          'Planificación por sprints (Trello), ejecución de pruebas funcionales (Front, Mobile Android-iOS).', 
          'Automatización de pruebas funcionales (Selenium Webdriver-Python).',
          'Simplificación de procesos automatizados de pruebas en Jenkins.'
        ],
        en: [
          'Sprint planning (Trello), execution of functional tests (Front, Mobile Android-iOS).',
          'Automation of functional tests (Selenium Webdriver-Python).',
          'Simplification of automated testing processes in Jenkins.'
        ]
      }
    },
    {
      role: 'Quality Assurance Analyst',
      company: 'Business Hunters',
      period: '2013 - 2015',
      description: {
        es: [
          'Planificación y gestión de actividades, creación, mantenimiento y ejecución de matrices de pruebas funcionales (HP ALM).', 
          'Instalación y gestión de ambientes Weblogic, certificaciones presenciales con Product Owner en Cliente (Movistar Venezuela).'
        ],
        en: [
          'Activity planning and management, creation, maintenance, and execution of functional test matrices (HP ALM).',
          'Installation and management of Weblogic environments, in-person certifications with Product Owner at Client (Movistar Venezuela).'
        ]
      }
    }
  ],
  skills: [
    { 
      category: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' }, 
      items: ['Azure', 'GCP', 'Docker', 'Kubernetes (AKS & GKE)', 'Gitlab CI/CD', 'Jenkins', 'Terraform', 'Chaos Engineering'] 
    },
    { 
      category: { es: 'QA & Automatización', en: 'QA & Automation' }, 
      items: ['Cypress', 'Katalon', 'Selenium Webdriver', 'Nightwatch', 'Jmeter', 'K6', 'Postman', 'Stryker Mutation', 'Sonarqube', 'Jira'] 
    },
    { 
      category: { es: 'Lenguajes & Bases de Datos', en: 'Languages & Databases' }, 
      items: ['JavaScript', 'Python', 'C#', 'Bash', 'SQL','Redis','MongoDB'] 
    },
    { 
      category: { es: 'Seguridad', en: 'Security' }, 
      items: ['Trivy', 'Semgrep (SAST)', 'OWASP ZAP'] 
    },
  ],
  certifications: [
    { name: 'Microsoft Certified: DevOps Engineer Expert', from: 'Mar. 2025' },
    { name: 'Microsoft Certified: Azure Administrator Associate', from: 'Sep. 2024' },
    { name: 'Microsoft Certified: Azure Fundamentals', from: 'Dic. 2023' },
    { name: 'Google Cloud Platform Fundamentals: Core Infrastructure en Español', from: '2021' },
    { name: 'A4Q Selenium Tester Foundation', from: 'jun. 2020' },
    { name: 'ISTQB Certified Tester Foundation Level I', from: 'jun. 2020' },
  ],
  education: {
    institution: 'Instituto Universitario Tecnologico Americo Vespucio',
    degree: { es: 'Tecnico Superior en Informatica', en: 'Higher Technician in Computer Science' },
    year: '2015'
  },
  projects: {
    title: { es: 'Proyectos Destacados', en: 'Featured Projects' },
    items: [
      {
        title: { es: 'Pipeline CI/CD con Pruebas de Mutación', en: 'CI/CD Pipeline with Mutation Testing' },
        category: 'DevOps / QA',
        description: {
          es: 'Diseñé e implementé un pipeline en Gitlab que integra pruebas de mutación con Stryker para proyectos JavaScript, mejorando la calidad del código y la cobertura de las pruebas unitarias.',
          en: 'Designed and implemented a pipeline in Gitlab that integrates mutation testing with Stryker for JavaScript projects, improving code quality and unit test coverage.'
        }
      },
      {
        title: { es: 'Framework de Pruebas de Rendimiento con K6', en: 'Performance Testing Framework with K6' },
        category: 'QA',
        description: {
          es: 'Creé un framework reutilizable para pruebas de carga, estrés y picos con K6, permitiendo al equipo de desarrollo identificar cuellos de botella antes de los despliegues a producción.',
          en: 'Created a reusable framework for load, stress, and spike testing with K6, allowing the development team to identify bottlenecks before production deployments.'
        }
      },
      {
        title: { es: 'Automatización de Escaneo de Vulnerabilidades', en: 'Vulnerability Scanning Automation' },
        category: 'DevSecOps',
        description: {
          es: 'Integré Trivy en el proceso de CI/CD para automatizar el escaneo de vulnerabilidades en imágenes Docker, bloqueando despliegues con criticidades altas y mejorando la seguridad del software.',
          en: 'Integrated Trivy into the CI/CD process to automate vulnerability scanning in Docker images, blocking deployments with high criticalities and improving software security.'
        }
      },
      {
        title: { es: 'Implementación de Chaos Engineering', en: 'Chaos Engineering Implementation' },
        category: 'DevOps / SRE',
        description: {
          es: 'Configuré y ejecuté experimentos de Chaos Engineering en ambientes de pre-producción utilizando Azure Chaos Studio para probar la resiliencia de los microservicios ante fallos inesperados y luego migre directamente a Chaos Mesh para tener mas control sobre la personalización de cada caso a probar.',
          en: 'Configured and executed Chaos Engineering experiments in pre-production environments using Azure Chaos Studio to test the resilience of microservices against unexpected failures, then migrated directly to Chaos Mesh for more control over the customization of each test case.'
        }
      },
      {
        title: { es: 'Implementación de Sitespeed para medir el rendimiento de Proyectos Frontend', en: 'Sitespeed Implementation for Frontend Performance Measurement' },
        category: 'DevOps / QA',
        description: {
          es: 'Diseñé e implementé un pipeline en Gitlab que integra la herramienta de Sitespeed para medir y monitorizar el rendimiento de una pagina web.',
          en: 'Designed and implemented a pipeline in Gitlab that integrates the Sitespeed tool to measure and monitor the performance of a web page.'
        }
      },
      {
        title: { es: 'Configuración POC de Keploy como agente de IA', en: 'Keploy AI Agent POC Configuration' },
        category: 'DevOps / SRE',
        description: {
          es: 'Configuré desde Azure AI Foundry, un LLM de OpenAI para que desde un archivo BASH en proyectos de Node, tomando como referencia la propiedad collectCoverageFrom de un jest.config.js se conectará al LLM y generara Tests Unitarios con la cobertura deseada.',
          en: 'Configured from Azure AI Foundry, an OpenAI LLM so that from a BASH file in Node projects, referencing the collectCoverageFrom property of a jest.config.js, it will connect to the LLM and generate Unit Tests with the desired coverage.'
        }
      }
    ]
  },
  contact: {
    title: { es: 'Hablemos', en: "Let's Talk" },
    description: { 
      es: 'Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea en la que crees que puedo aportar, no dudes en contactarme.',
      en: "I'm available for new projects and collaborations. If you have an idea where you think I can contribute, don't hesitate to contact me."
    },
    buttonText: { es: 'Enviar un correo', en: 'Send an Email' }
  }
};
