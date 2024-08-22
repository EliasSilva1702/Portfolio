import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "+2 years of experience",
    },
    {
        id: 2,
        name: "Clients",
        icon: <UsersRound />,
        description: "Many satisfied customers",
    },
    {
        id: 3,
        name: "Projects",
        icon: <Wrench />,
        description: "+20 completed",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/foto_portfolio.jpg",
    },
    {
        id: 2,
        url: "/foto_portfolioCode.jpg",
    },
    {
        id: 3,
        url: "/foto_portfolioThree.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "View your personal information (For Bassai)",
        image: "/Proyecto1.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    // {
    //     id: 2,
    //     title: "Desarrollo Web Ágil",
    //     image: "/.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 3,
    //     title: "Estrategias Web",
    //     image: "/.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experienced",
                value: 90,
            },
            {
                name: "CSS",
                subtitle: "Experienced",
                value: 85,
            },
            {
                name: "JavaScript",
                subtitle: "Experienced",
                value: 70,
            },
            {
                name: "TypeScript",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experienced",
                value: 85,
            },
            {
                name: "React",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Experienced",
                value: 85,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermediate",
                value: 60,
            },
            {
                name: "MySQL",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "PHP",
                subtitle: "Experienced",
                value: 70,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Web Development",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Custom Website Development",
            },
            {
                name: "Responsive design and development",
            },
            {
                name: "SEO Optimization",
            },
            {
                name: "Web application development",
            },
            {
                name: "Content management",
            },
            {
                name: "E-commerce",
            },
            {
                name: "Ongoing maintenance and support",
            },
        ],
    },

    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Intuitive design for a seamless user experience",
            },
            {
                name: "Interactive prototyping to visualize the interface",
            },
            {
                name: "User research to understand needs and expectations.",
            },
            {
                name: "Usability optimization to improve accessibility",
            },
            {
                name: "Usability tests to evaluate the experience",
            },
            {
                name: "Responsive design to adapt to different devices",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+598 99 405 940",
        link: "tel: +59899405940",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/EliaSilva1702",
        link: "https://github.com/EliasSilva1702",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "eliassilva170206@email.com",
        link: "mailto:eliassilva170206@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Bassai",
        description: "¡Me ha creeado una increíble plataforma para poder ver datos a tiempo real! Ademas me ha ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/Client3.jpg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de diseños que ha realizado para poder concluir el trabajo. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/Clien2.png",
    },
    {
        id: 3,
        name: "Oscar María",
        description:
            "Excelente profecional, me ha ayudado a obtener opiniones auténticas sobre diferentes productos y servicios. Tambien me ha logrado ayudar mucho en mis compras en línea y poder resaltar más en el mundo de la web.",
        imageUrl: "/Client1.png",
    },
];