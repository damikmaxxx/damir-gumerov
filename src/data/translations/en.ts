export const en = {
    notFound: {
        title: "Page not found",
        desc: "The page you are looking for does not exist",
        button: "Return to Home"
    },
    hero: {
        name: ["Damir", "Gumerov"],
        subtitle: "Systemic approach to frontend development",
        roles: ["Frontend Developer", "Interface Developer", "Creative Coder"],
    },
    decor: {
        location: "KAZAN, RU",
        status: "SEEKING FULL-TIME ROLE",
        dev: "FRONTEND DEV",
        name: "D.GUMEROV"
    },
    footer: {
        getInTouch: "Get in touch",
        designedBy: "Designed and engineered by Damir Gumerov.",
        builtWith: "Built with Next.js, SCSS Modules, and Framer Motion.",
        copyright: "© Damir Gumerov."
    },
    nav: {
        home: "Home",
        about: "About",
        projects: "Works",
        play: "Pet projects",
    },
    about: {
        tag: "// About me",
        title: {
            first: "Building ",
            accent: "performant",
            last: " and clean web apps"
        },
        bio: "Frontend developer with a focus on code quality and interface performance. I don't just 'draw buttons'—I turn application logic into a convenient and fast tool for the user.\n\nMy stack is React / Next.js / TypeScript. I strive to write code following KISS and SOLID principles so that the project is easy to maintain and scale.",
        sections: {
            stack: "Technical Arsenal",
            experience: "Work History",
            education: "Education",
            contact: "[ Contact ]"
        },
        skills: [
            { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5 / CSS3'] },
            { label: 'Frameworks', items: ['React', 'Next.js', 'Vue.js'] },
            { label: 'Data & Backend', items: ['Redux Toolkit', 'RTK Query', 'Pinia', 'REST API', 'Convex'] },
            { label: 'Tools', items: ['Git', 'Vite', 'Webpack', 'SASS / SCSS', 'Ant Design', 'Figma', 'Swagger'] },
            { label: 'Quality & Process', items: ['Jest', 'React Testing Library', 'ESLint / Prettier', 'Agile / Scrum'] },
        ],
        experience: [
            {
                role: 'Frontend Developer Intern',
                company: '@ 500na700',
                date: 'March 2026 — April 2026',
            },
            { role: 'Frontend Developer', company: '@ Freelance / Private Practice', date: 'August 2025 — January 2026' },
            { role: 'Frontend Developer Intern', company: '@ Techno ARM', date: 'June 2024 — August 2024' },
            { role: 'Frontend Developer Intern', company: '@ ICL Techno', date: 'June 2023 — August 2023' },
            { role: 'Layout Designer', company: '@ Remote', date: 'June 2021 — February 2023' }
        ],
        education: [
            {
                degree: 'Bachelor of Information Systems',
                university: 'Kazan National Research Technological University',
                faculty: 'Institute of Management, Automation and IT',
                date: '2021 — 2025'
            }
        ],
        contacts: [
            { label: 'Telegram', value: '@damik_max', href: 'https://t.me/damik_max', iconKey: 'send' },
            { label: 'Email', value: 'damirgumerovwork@gmail.com', href: 'mailto:damirgumerovwork@gmail.com', iconKey: 'mail' },
            { label: 'GitHub', value: 'github.com/damikmaxxx', href: 'https://github.com/damikmaxxx', iconKey: 'github' },
            { label: 'Phone', value: '+7 (927) 403-15-80', href: 'tel:+79274031580', iconKey: 'phone' },
        ],
        personalData: [
            { label: "Full Name", value: "Damir Gumerov" },
            { label: "Origin", value: "Kazan, RU" },
            { label: "Birth Date", value: "18.04.2003" },
            { label: "Current Age", value: "22 y.o." },
            { label: "Availability", value: "Immediate" }
        ],
    },
    projects: {
        tag: "// Case Studies",
        title: {
            first: "Selected ",
            accent: "Works"
        },
        list: [
            {
                id: '01',
                title: '500na700',
                category: 'Next.js / WordPress Production',
                description: 'Developed frontend interfaces for commercial multi-page websites in a production environment. Main focus was on building responsive pages using Next.js and React, migrating and structuring website content, integrating REST APIs, and customizing WordPress themes and blocks. Contributed to improving release quality by optimizing performance, enhancing SEO aspects, and closely collaborating with designers and backend developers.',
                tech: ['Next.js', 'React', 'TypeScript', 'REST API', 'WordPress', 'Figma', 'Git'],
                image: '/projects/KAZAN_KREMLIN_D.png',
                images: [
                    '/projects/KAZAN_KREMLIN_D.png',
                    '/projects/KAZAN_KREMLIN_M.png',
                    '/projects/BUGULMA_D.png',
                    '/projects/BUGULMA_M.png',
                ],
            },
            {
                id: '02',
                title: 'ICL Techno',
                category: 'Enterprise Frontend',
                description: 'Design and development of interface modules for automation systems. Main focus on creating resilient components, business logic typing, and seamless integration with backend services. Worked in a cross-functional team using Scrum methodology.',
                tech: ['Vue.js', 'TypeScript', 'Pinia', 'Axios', 'REST API', 'Git', 'Agile / Scrum'],
                image: '/projects/ICL.jpg',
                autoScan: true,
            },
            {
                id: '03',
                title: 'ARM Technologies',
                category: 'Interface Engineering & QA',
                description: 'Development of UI components and quality control automation. Implementation of unit testing for critical application nodes and working on build performance. Optimization of user interaction with the interface via Element Plus.',
                tech: ['Vue.js', 'Jest', 'Cypress', 'Element Plus', 'Vite', 'Git', 'ESLint / Prettier'],
                image: '/projects/ARM_TEXNO.png',
            },
            {
                id: '04',
                title: 'Freelance Practice',
                category: 'Full Cycle Frontend',
                description: 'Implementation of modern SPAs and landing pages from the layout analysis stage to deployment. Migration of projects to a modern stack (React/Next.js), implementation of complex animations, and ensuring high levels of accessibility and SEO optimization.',
                tech: ['React', 'Redux Toolkit', 'Framer Motion', 'Sass / SCSS', 'Figma', 'BEM'],
                images: [
                    '/projects/freelance_img1.png',
                    '/projects/freelance_img2.png',
                    '/projects/freelance_img3.png',
                    '/projects/freelance_img4.png',
                    '/projects/freelance_img5.png',
                ],
            }
        ]
    },
    play: {
        tag: "// Pet Projects",
        footer: "More projects coming soon",
        items: [
            {
                id: 1,
                size: 'large',
                title: 'Circular Timeline',
                category: 'UI & Mathematics',
                tags: ['GSAP', 'React', 'SVG Math'],
                desc: 'Development of an interactive timeline with orbital navigation. Core logic involves calculating coordinates on a circle and synchronizing content transitions with the rotation angle.',
                img: '/play/test_work_animation.png',
                link: 'https://github.com/damikmaxxx/test-task-historical-dates'
            },
            {
                id: 2,
                size: 'large',
                title: 'Educational Sessions System',
                category: 'Enterprise UI',
                tags: ['Vue', 'Data Grid'],
                desc: 'Learning session monitoring interface. Features advanced filtering, sorting, and data pagination. The architecture is built for horizontal scalability and high-load data management.',
                img: '/play/test_EIDOS.png',
                link: 'https://github.com/damikmaxxx/eidos-test-task'
            },
            {
                id: 3,
                size: 'large',
                title: 'Full-stack Blog Platform',
                category: 'Full-stack',
                tags: ['Next.js', 'Convex', 'Better-Auth'],
                desc: 'A modern app with a real-time database. Includes auth system, post creation, and viewing. Focused on UX: implemented Skeleton loaders and high-performance data fetching.',
                img: '/play/NEXT_COVEX_BLOG.png',
                link: 'https://github.com/damikmaxxx/reactive-nextjs-convex-app'
            },
            {
                id: 4,
                size: 'large',
                title: 'Training Platform (Diploma)',
                category: 'Collaboration',
                tags: ['React', 'Redux', 'Django REST'],
                desc: 'Comprehensive system for programming education. Developed in collaboration with a backend engineer. My role: global state architecture and complex business logic integration via REST API.',
                img: '/play/REACT_VKR.png',
                link: 'https://github.com/damikmaxxx/programmingTrainingClient'
            }
        ]
    }
};
