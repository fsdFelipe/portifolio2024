import { FaEnvelope, FaGraduationCap, FaSuitcase, FaUser } from "react-icons/fa6";

const menu = [
    {
        id: 1,
        title: "Sobre",
        icon: FaUser,
        link: '/#sobre'
    },
    {
        id: 2,
        title: "Educação",
        icon: FaGraduationCap,
        link: '/#edu'
    },
    {
        id: 3,
        title: "Projetos",
        icon: FaSuitcase,
        link: '/projetos'
    },
    {
        id: 4,
        title: "Contato",
        icon: FaEnvelope,
        link: '/contato'
    }
]

export default menu