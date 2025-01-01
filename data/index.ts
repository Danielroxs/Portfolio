import { link } from "fs";

export const navItems = [
  { name: "Acerca", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimoniales", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo el trabajo en equipo, asegurando siempre una comunicación abierta y clara.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Me adapto fácilmente a distintas tecnologias y herramientas.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi tech stack",
    description: "Constantemente trato de mejorar.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Apasionado por la tecnología y el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Explorando nuevas herramientas de Desarrollo Front End",
    description: "Constante aprendizaje",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Quieres empezar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Apple 15 Pro 3D",
    des: "Descubre el elegante diseño y las animaciones dinámicas de nuestro clon del Apple 15, animado con Three.js.",
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/gsap.svg"],
    link: "https://apple15page-git-main-danroxsllgmailcoms-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Brainwave - Generative AI",
    des: "Brainwave - Sitio web moderno de UI/UX, desarrollado con React.js y Tailwind CSS, experiencia premium",
    img: "/p2.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://brainwave-git-main-danroxsllgmailcoms-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Awwwards Site",
    des: "Sitio web de premios Awwwards, con un diseño moderno y elegante, desarrollado con React.js y Tailwind CSS.",
    img: "/p7.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://awwwards-site-seven.vercel.app/",
  },
  {
    id: 5,
    title: "Delivery SPA",
    desc: "Creación y optimización de una plataforma SPA de entrega a domicilio, enfocada en mejorar la experiencia del usuario mediante herramientas de frontend de última generación.", 
    img: "/p5.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://deliveryfrm.vercel.app/",
  },
  {
    id: 4,
    title: "Consultorio Nutrición",
    desc: "Atención personalizada y planes nutricionales diseñados para mejorar la salud y el bienestar, utilizando estrategias basadas en evidencia y enfocadas en las necesidades individuales de cada paciente.",
    img: "/p6.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://nv10.vercel.app/",
  },
  {
    id: 6,
    title: "Nike TW",
    des: "Recreacion de Página Nike para Tennis, con un diseño excepcional utilizando Tailwind CSS, mostrando cada producto con una presentación profesional.",
    img: "/p3.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://nike-tailwind-git-main-danroxsllgmailcoms-projects.vercel.app/",
  },
  {
    id: 7,
    title: "Anime Site",
    des: "Desarrollé una página web que consulta una API de anime y renderiza una galería interactiva de animes con detalles enriquecidos.",
    img: "/p4.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://anime-vault-git-main-danroxsllgmailcoms-projects.vercel.app/",
  },
  
];

export const testimonials = [
  {
    quote:
      "Trabajar con Daniel para renovar nuestra web de gimnasio fue una experiencia excelente. Capturó a la perfección la esencia de nuestro espacio y mejoró la funcionalidad del sitio, facilitando a nuestros miembros encontrar toda la información que necesitan. Su enfoque profesional y su atención a los detalles realmente hicieron la diferencia. ¡Recomiendo a Daniel sin dudarlo!",
    name: "Javier Mendez García",
    title: "Gimnasio Muscle Machine",
  },
  {
    quote:
      "Daniel hizo un trabajo fantástico con nuestro sitio web de clínica de salud. Su habilidad para traducir nuestras necesidades en un diseño intuitivo y profesional ha sido invaluable. El sitio no solo se ve increíble, sino que también ha mejorado la experiencia de nuestros pacientes al hacer la información y los servicios más accesibles. Estamos encantados con el resultado.",
    name: "Patricia Sandoval Ríos",
    title: "Clínica de Salud Vital",
  },
  {
    quote:
      "El rediseño del sitio web para nuestra carpintería por parte de Daniel ha sido sobresaliente. La galería de trabajos que creó resalta nuestras piezas de manera impresionante, y la navegación del sitio es mucho más fluida. Daniel entendió nuestra visión y la plasmó en un sitio web que realmente refleja la calidad de nuestro trabajo. ¡Estamos muy satisfechos con el resultado!",
    name: "Marco López Fernández",
    title: "Carpintería y Madereria LP",
  },
  {
    quote:
      "La colaboración con Daniel para el sitio web de nuestro consultorio de nutrición ha sido increíble. Su capacidad para crear un diseño claro y funcional ha facilitado a nuestros clientes encontrar información relevante y programar citas. Su profesionalismo y compromiso con el proyecto fueron evidentes en cada etapa. Lo recomendaría sin dudarlo.",
    name: "Esteban Ruiz Morales",
    title: "Consultorio Nutrición",
  },
  {
    quote:
      "Trabajar con Daniel en la web para nuestra escuela de inglés fue una experiencia excelente. Su habilidad para capturar la esencia de nuestro enfoque educativo y reflejarla en el diseño del sitio ha sido invaluable. La facilidad de uso y la claridad del sitio han mejorado significativamente la experiencia para nuestros estudiantes. Estamos muy contentos con el resultado.",
    name: "Gabriel Torres Martínez",
    title: "Academia Inglés Griffin English",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollo React.js",
    desc: "Asistencia en el desarrollo de plataformas web utilizando React.js, mejorando la interactividad.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    "id": 2,
    "title": "Proyecto Freelance de Desarrollo Web",
    "desc": "Diseño y desarrollo SLP para Consultorio de Nutrición, destacando sus servicios y mejorando su presencia en el mercado.",
    "className": "md:col-span-2", // change to md:col-span-2
    "thumbnail": "/exp2.svg"
  },
  {
    "id": 3,
    "title": "Mobile first",
    "desc": "Diseño y desarrollo de aplicaciones móviles con un enfoque en diseño responsivo, asegurando una experiencia de usuario óptima en todos los dispositivos.",
    "className": "md:col-span-2", // change to md:col-span-2
    "thumbnail": "/exp3.svg"
  },
  {
    "id": 4,
    "title": "Desarrollador Frontend Líder",
    "desc": "Desarrollo, mantenimiento e implementación de nuevas características orientadas al usuario utilizando tecnologías modernas de frontend.",
    "className": "md:col-span-2",
    "thumbnail": "/exp4.svg"
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Danielroxs"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://es.wikipedia.org/wiki/Plaza_de_la_Constituci%C3%B3n_(Ciudad_de_M%C3%A9xico)"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://acortar.link/OIjn43"
  },
];