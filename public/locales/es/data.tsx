import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const datosSobreMi = [
    {
        id: 1,
        nombre: "Experiencia",
        icono: <Briefcase />,
        descripcion: "+2 años de experiencia",
    },
    {
        id: 2,
        nombre: "Clientes",
        icono: <UsersRound />,
        descripcion: "Muchos clientes satisfechos",
    },
    {
        id: 3,
        nombre: "Proyectos",
        icono: <Wrench />,
        descripcion: "+20 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        titulo: "Inicio",
        icono: <Home size={20} />,
        enlace: "#home",
    },
    {
        id: 2,
        titulo: "Usuario",
        icono: <UserRound size={20} />,
        enlace: "#sobre-mi",
    },
    {
        id: 3,
        titulo: "Libro",
        icono: <BookText size={20} />,
        enlace: "#servicios",
    },
    {
        id: 4,
        titulo: "Objetivo",
        icono: <CodeSquare size={20} />,
        enlace: "#portafolio",
    },
    {
        id: 5,
        titulo: "Contacto",
        icono: <Mail size={20} />,
        enlace: "#contacto",
    },
];

export const datosSlider = [
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

export const datosPortafolio = [
    {
        id: 1,
        titulo: "Ver tu información personal (Para Bassai)",
        imagen: "/Proyecto1.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    // {
    //     id: 2,
    //     titulo: "Desarrollo Web Ágil",
    //     imagen: "/.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 3,
    //     titulo: "Estrategias Web",
    //     imagen: "/.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
];

export const datosExperiencia = [
    {
        id: 1,
        titulo: "Desarrollo Frontend  💄",
        experiencia: [
            {
                nombre: "HTML",
                subtitulo: "Experimentado",
                valor: 90,
            },
            {
                nombre: "CSS",
                subtitulo: "Experimentado",
                valor: 85,
            },
            {
                nombre: "JavaScript",
                subtitulo: "Experimentado",
                valor: 70,
            },
            {
                nombre: "TypeScript",
                subtitulo: "Básico",
                valor: 50,
            },
            {
                nombre: "Tailwind CSS",
                subtitulo: "Experimentado",
                valor: 85,
            },
            {
                nombre: "React",
                subtitulo: "Básico",
                valor: 60,
            },
            {
                nombre: "Bootstrap",
                subtitulo: "Experimentado",
                valor: 85,
            },
        ],
    },
    {
        id: 2,
        titulo: "Desarrollo Backend  🥷",
        experiencia: [
            {
                nombre: "Node JS",
                subtitulo: "Básico",
                valor: 50,
            },
            {
                nombre: "Mongo DB",
                subtitulo: "Intermedio",
                valor: 60,
            },
            {
                nombre: "MySQL",
                subtitulo: "Experimentado",
                valor: 80,
            },
            {
                nombre: "PHP",
                subtitulo: "Intermedio",
                valor: 60,
            },
        ],
    },
];

export const datosServicios = [
    {
        id: 1,
        titulo: "Desarrollo Web",
        icono: <PanelsTopLeft />,
        caracteristicas: [
            {
                nombre: "Desarrollo personalizado de sitios web",
            },
            {
                nombre: "Diseño y desarrollo responsive",
            },
            {
                nombre: "Optimización SEO",
            },
            {
                nombre: "Desarrollo de aplicaciones web",
            },
            {
                nombre: "Gestión de contenidos",
            },
            {
                nombre: "E-commerce",
            },
            {
                nombre: "Mantenimiento y soporte continuo",
            },
        ],
    },

    {
        id: 3,
        titulo: "Diseño UI/UX",
        icono: <Brush />,
        caracteristicas: [
            {
                nombre: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                nombre: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                nombre: "Investigación del usuario para comprender necesidades y expectativas.",
            },
            {
                nombre: "Optimización de usabilidad para mejorar la accesibilidad",
            },
            {
                nombre: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                nombre: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];

export const datosContacto = [
    {
        id: 1,
        titulo: "Teléfono",
        subtitulo: "+598 99 405 940",
        enlace: "tel: +59899405940",
        icono: <Phone />,
    },
    {
        id: 2,
        titulo: "Github",
        subtitulo: "github.com/EliaSilva1702",
        enlace: "https://github.com/EliasSilva1702",
        icono: <Code2 />,
    },
    {
        id: 3,
        titulo: "Correo electrónico",
        subtitulo: "eliassilva170206@email.com",
        enlace: "mailto:eliassilva170206@gmail.com",
        icono: <Inbox />,
    },
];

export const datosTestimonios = [
    {
        id: 1,
        nombre: "Bassai",
        descripcion: "¡Me ha creado una increíble plataforma para poder ver datos en tiempo real! Además, me ha ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        urlImagen: "/Client3.jpg",
    },
    {
        id: 2,
        nombre: "Juan Pérez",
        descripcion: "Me encanta la variedad de diseños que ha realizado para concluir el trabajo. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        urlImagen: "/Clien2.png",
    },
    {
        id: 3,
        nombre: "Oscar María",
        descripcion: "Excelente profesional, me ha ayudado a obtener opiniones auténticas sobre diferentes productos y servicios. También me ha ayudado mucho en mis ventas en línea y a destacar más en el mundo de la web.",
        urlImagen: "/Client1.png",
    },
];

export const upDateSoon = [
    {
        id: 1,
        titulo: "Actualización próxima",
        subtitulo: "Añadir idiomas y más información, como proyectos, etc.",
    }
]
