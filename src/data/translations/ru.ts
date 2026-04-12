import { en } from './en';

export const ru: typeof en = {
    notFound: {
        title: "Страница не найдена",
        desc: "Такой страницы не существует",
        button: "Вернуться на главную"
    },
    hero: {
        name: ["Дамир", "Гумеров"],
        subtitle: "Системный подход к фронтенд-разработке",
        roles: ["Фронтенд Разработчик", "Разработчик Интерфейсов", "Креативный Кодер"],
    },
    decor: {
        location: "КАЗАНЬ, РФ",
        status: "ИЩУ РАБОТУ (FULL-TIME)",
        dev: "ФРОНТЕНД РАЗРАБОТЧИК",
        name: "Д.ГУМЕРОВ"
    },
    footer: {
        getInTouch: "Связаться со мной",
        designedBy: "Дизайн и разработка: Дамир Гумеров.",
        builtWith: "Сделано на Next.js, SCSS Modules и Framer Motion.",
        copyright: "© Дамир Гумеров."
    },
    nav: {
        home: "Главная",
        about: "Обо мне",
        projects: "Работы",
        play: "Личные проекты",
    },
    about: {
        tag: "// Обо мне",
        title: {
            first: "Создаю ",
            accent: "эффективные",
            last: " и чистые веб-приложения"
        },
        bio: "Frontend-разработчик с упором на качество кода и производительность интерфейсов. Я не просто «рисую кнопки», а превращаю логику приложения в удобный и быстрый инструмент для пользователя.\n\nМой стек — React / Next.js / TypeScript. Стараюсь писать код по принципам KISS и SOLID, чтобы проект было легко поддерживать и масштабировать.",
        sections: {
            stack: "Технический арсенал",
            experience: "Опыт работы",
            education: "Образование",
            contact: "[ Контакты ]"
        },
        skills: [
            { label: 'Языки', items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5 / CSS3'] },
            { label: 'Фреймворки', items: ['React', 'Next.js', 'Vue.js'] },
            { label: 'Данные', items: ['Redux Toolkit', 'RTK Query', 'Pinia', 'REST API', 'Convex'] },
            { label: 'Инструменты', items: ['Git', 'Vite', 'Webpack', 'SASS / SCSS', 'Ant Design', 'Figma', 'Swagger'] },
            { label: 'Качество', items: ['Jest', 'React Testing Library', 'ESLint / Prettier', 'Agile / Scrum'] },
        ],
        experience: [
            {
                role: 'Стажёр Frontend-разработчик',
                company: '@ 500na700',
                date: 'Март 2026 — Апрель 2026',
            },
            { role: 'Frontend разработчик', company: '@ Фриланс / Частная практика', date: 'Август 2025 — Январь 2026' },
            { role: 'Стажер Frontend разработчик', company: '@ Технологии АРМ', date: 'Июнь 2024 — Август 2024' },
            { role: 'Стажер Frontend разработчик', company: '@ ICL Techno', date: 'Июнь 2023 — Август 2023' },
            { role: 'Верстальщик', company: '@ Удаленно', date: 'Июнь 2021 — Февраль 2023' }
        ],
        education: [
            {
                degree: 'Бакалавр информационных систем',
                university: 'КНИТУ (Казанский национальный исследовательский технологический университет)',
                faculty: 'Институт управления, автоматизации и ИТ',
                date: '2021 — 2025'
            }
        ],
        contacts: [
            { label: 'Telegram', value: '@damik_max', href: 'https://t.me/damik_max', iconKey: 'send' },
            { label: 'Email', value: 'damirgumerovwork@gmail.com', href: 'mailto:damirgumerovwork@gmail.com', iconKey: 'mail' },
            { label: 'GitHub', value: 'github.com/damikmaxxx', href: 'https://github.com/damikmaxxx', iconKey: 'github' },
            { label: 'Телефон', value: '+7 (927) 403-15-80', href: 'tel:+79274031580', iconKey: 'phone' },
        ],
        personalData: [
            { label: "Полное имя", value: "Дамир Гумеров" },
            { label: "Локация", value: "Казань, РФ" },
            { label: "Дата рождения", value: "18.04.2003" },
            { label: "Возраст", value: "22 год" },
            { label: "Доступность", value: "Сразу" }
        ],
    },
    projects: {
        tag: "// Работы",
        title: {
            first: "Избранные ",
            accent: "Работы"
        },
        list: [
            {
                id: '01',
                title: '500na700',
                category: 'Next.js / WordPress Production',
                description: 'Разработка интерфейсов для коммерческих многостраничных сайтов в продакшн-среде. Основной фокус — создание адаптивных страниц на Next.js и React, перенос контента и структуры сайтов, интеграция с REST API, а также доработка WordPress-тем и кастомных блоков. Участвовал в улучшении качества релизов: оптимизировал производительность, работал над SEO-параметрами и взаимодействовал с дизайнером и backend-разработчиком.',
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
                description: 'Проектирование и разработка интерфейсных модулей для систем автоматизации. Основной фокус на создании отказоустойчивых компонентов, типизации бизнес-логики и бесшовной интеграции с бэкенд-сервисами. Работа в кросс-функциональной команде по методологии Scrum.',
                tech: ['Vue.js', 'TypeScript', 'Pinia', 'Axios', 'REST API', 'Git', 'Agile / Scrum'],
                image: '/projects/ICL.jpg',
                autoScan: true,
            },
            {
                id: '03',
                title: 'Технологии АРМ',
                category: 'Разработка и Тестирование',
                description: 'Разработка UI-компонентов и автоматизация контроля качества. Внедрение модульного тестирования для критических узлов приложения и работа над производительностью сборки. Оптимизация взаимодействия пользователя с интерфейсом через Element Plus.',
                tech: ['Vue.js', 'Jest', 'Cypress', 'Element Plus', 'Vite', 'Git', 'ESLint / Prettier'],
                image: '/projects/ARM_TEXNO.png',
            },
            {
                id: '04',
                title: 'Фриланс практика',
                category: 'Full Cycle Frontend',
                description: 'Реализация современных SPA и лендингов от этапа анализа макета до деплоя. Перевод проектов на современный стек (React/Next.js), внедрение сложных анимаций и обеспечение высокого уровня доступности и SEO-оптимизации.',
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
        tag: "// Личные проекты",
        footer: "Скоро здесь будет больше проектов",
        items: [
            {
                id: 1,
                size: 'large',
                title: 'Круговая временная шкала',
                category: 'UI и Математика',
                tags: ['GSAP', 'React', 'SVG Math'],
                desc: 'Разработка интерактивной хронологии с орбитальной навигацией. Основная задача — расчет координат точек на окружности и синхронизация смены контента с углом поворота.',
                img: '/play/test_work_animation.png',
                link: 'https://github.com/damikmaxxx/test-task-historical-dates'
            },
            {
                id: 2,
                size: 'large',
                title: 'Система учебных сессий',
                category: 'Enterprise UI',
                tags: ['Vue', 'Data Grid'],
                desc: 'Интерфейс мониторинга учебных сессий. Реализована сложная фильтрация, сортировка и пагинация данных. Архитектура проекта подготовлена к горизонтальному масштабированию и работе с большими объемами информации.',
                img: '/play/test_EIDOS.png',
                link: 'https://github.com/damikmaxxx/eidos-test-task'
            },
            {
                id: 3,
                size: 'large',
                title: 'Full-stack Blog Platform',
                category: 'Full-stack',
                tags: ['Next.js', 'Convex', 'Better-Auth'],
                desc: 'Современное приложение с real-time базой данных. Реализована система аутентификации, создание и просмотр постов. Особое внимание уделено UX: внедрены Skeleton-загрузки и оптимизирована передача данных.',
                img: '/play/NEXT_COVEX_BLOG.png',
                link: 'https://github.com/damikmaxxx/reactive-nextjs-convex-app'
            },
            {
                id: 4,
                size: 'large',
                title: 'Платформа обучения (Диплом)',
                category: 'Collaboration',
                tags: ['React', 'Redux', 'Django REST'],
                desc: 'Комплексная система для обучения программированию. Работа велась в команде с бэкенд-разработчиком. Моя роль: проектирование глобального стейта приложения и интеграция сложной бизнес-логики через REST API.',
                img: '/play/REACT_VKR.png',
                link: 'https://github.com/damikmaxxx/programmingTrainingClient'
            }

        ]
    }
};
