const dataBase = [
    {
        "title": "VISIÓN",
        "questions": [
            "El liderazgo de la iglesia se reúne cada año para evaluar y planificar.",
            "Nuestra iglesia tiene una visión clara y definida.",
            "El liderazgo de nuestra iglesia sabe dónde estaremos dentro de dos años.",
            "El pastor y su liderazgo comunican claramente la visión de nuestra iglesia.",
            "Me siento inspirado en la visión de nuestra iglesia.",
            "Conozco y sé la visión y los planes de la iglesia.",
            "Me siento motivado por el futuro de nuestra iglesia."
        ]
    },
    {
        "title": "LIDERAZGO",
        "questions": [
            "El liderazgo crea oportunidades para el desarrollo de nuevos líderes.",
            "Existen hermanos siendo entrenados y preparados para liderar en el futuro.",
            "Siento que el liderazgo de la iglesia busca crecer y multiplicarse.",
            "Puedo identificar al menos dos nuevos líderes que fueron entrenados durante el último año.",
            "El liderazgo ayuda y guía a aquellos hermanos que desean participar activamente en la iglesia.",
            "La calidad y compromiso de nuestro liderazgo es muy bueno.",
            "El liderazgo es decisivo para la dirección que la iglesia desea tomar en el futuro."
        ]
    },
    {
        "title": "CUERPO MINISTRANTE",
        "questions": [
            "La iglesia ayuda a sus miembros a descubrir sus dones para el ministerio.",
            "El liderazgo de la iglesia entrena a la membresía según sus dones para el servicio.",
            "La iglesia provee información clara a quienes desean servir según sus áreas de interés y talentos.",
            "Siento que la iglesia hace lo posible para que use mis dones apropiadamente.",
            "He sido entrenado para servir o liderar en la congregación y en la comunidad.",
            "Existen amplias oportunidades de servicio y ministerios para aquellos que desean servir.",
            "Nuestra estructura ministerial es adecuada para movilizar a las personas hacia el servicio."
        ]
    },
    {
        "title": "RECURSOS",
        "questions": [
            "Nuestras instalaciones son apropiadas para desarrollar nuestras actividades de vocación y ministerio.",
            "Nuestra iglesia practica una buena mayordomía manejando bien su presupuesto y recursos.",
            "Los hermanos dan voluntariamente de su tiempo para servir a la Iglesia y en sus ministerios.",
            "En nuestra iglesia se enseña regularmente sobre la mayordomía y los diezmos.",
            "Me siento motivado a contribuir con recursos para el ministerio de nuestra iglesia.",
            "El liderazgo informa sobre el uso de las finanzas a la membresía de la iglesia.",
            "La congregación cuida del Pastor y sus líderes."
        ]
    },
    {
        "title": "NEXO DE TEXTO Y CONTEXTO",
        "questions": [
            "La iglesia vive y practica los valores del Reino en la vida diaria.",
            "La Palabra de Dios es la única guía para nuestra iglesia.",
            "La Palabra de Dios es usada en las reuniones de la iglesia y en sus servicios.",
            "La Biblia nos guía para tratar de resolver los problemas de nuestra comunidad.",
            "Nuestra iglesia es consciente de las necesidades de nuestra comunidad.",
            "Nuestra Iglesia se esfuerza por establecer relaciones con la comunidad.",
            "La gente de nuestra comunidad ve la iglesia como un agente positivo de cambio."
        ]
    },
    {
        "title": "PROCLAMACIÓN",
        "questions": [
            "Nuestra iglesia tiene un plan claro para llegar a la comunidad con las Buenas Nuevas del Reino.",
            "Nuestra iglesia tiene como prioridad el hacer relaciones con los no creyentes de nuestra comunidad.",
            "Nuestra iglesia entrena y equipa a sus miembros para dar testimonio en la comunidad.",
            "He sido entrenado para evangelizar.",
            "Me siento involucrado en la tarea de evangelismo de nuestra iglesia.",
            "Puedo identificar personas que llegaron a la iglesia el último año debido a mi invitación y evangelismo.",
            "Nuestra iglesia participa y colabora en las misiones mundiales."
        ]
    },
    {
        "title": "ENSEÑANZA",
        "questions": [
            "La iglesia usa programas de educación y discipulado apropiados para todas las edades.",
            "Nuestros maestros son efectivos en la enseñanza y discipulado de nuestros miembros.",
            "Cuando alguna persona acepta a Cristo es inmediatamente discipulada por alguien.",
            "Conforme pasa el tiempo es más evidente que los miembros viven bajo la guía del Espíritu Santo.",
            "La iglesia me ayuda a crecer espiritualmente.",
            "Soy miembro de un grupo pequeño de estudio bíblico y me ha ayudado a crecer espiritualmente.",
            "Nuestra iglesia promueve una vida de oración."
        ]
    },
    {
        "title": "SERVICIO",
        "questions": [
            "Nuestra iglesia cubre las necesidades físicas de quienes lo necesitan.",
            "Nuestra iglesia ayuda a encontrar trabajo, donar ropa y comida a quienes lo necesitan.",
            "Nuestra iglesia ofrece entrenamiento a su membresía para servir a la comunidad con sus necesidades.",
            "Nuestra iglesia tiene acuerdos con otras organizaciones o iglesias para servir a los más necesitados.",
            "Nuestra iglesia provee consejería a quienes lo necesitan.",
            "La comunidad sabe que demostramos el amor de Cristo de una manera práctica, con acción y servicio.",
            "La iglesia trabaja con líderes de la comunidad para mejorar su realidad y cubrir sus necesidades."
        ]
    },
    {
        "title": "COMUNIÓN",
        "questions": [
            "Los ministerios de la iglesia permiten a sus miembros crecer en amistad y relacionarse con otros.",
            "Visitantes y nuevos miembros reciben una calurosa e intencional bienvenida a la iglesia.",
            "Cuando alguien visita nuestra iglesia recibe seguimiento esa misma semana.",
            "Nuestra iglesia ofrece consejería y cuidado pastoral a sus miembros.",
            "En nuestra iglesia existe un compañerismo positivo.",
            "Los miembros de nuestra iglesia se visitan o reúnen para compartir una comida con regularidad.",
            "Los conflictos en nuestra iglesia son resueltos bíblicamente."
        ]
    },
    {
        "title": "ADORACIÓN",
        "questions": [
            "La adoración en nuestra iglesia nos nutre y fortalece nuestra vida cristiana.",
            "El estilo de música usado en nuestros servicios permite vivir la presencia de Dios.",
            "La predicación y los mensajes son apreciados por la congregación.",
            "Nuestros servicios de adoración atraen a la juventud.",
            "Me siento cómodo invitando a alguien (amigo o familiar) a la iglesia.",
            "Me siento satisfecho, motivado y ministrado con la adoración en nuestra iglesia.",
            "En nuestros servicios se reconoce la presencia del trino Dios: Padre, Hijo y Espíritu Santo."
        ]
    }
];

let data = {
    "step": 0,
    "timestamp": "",
    "answers": [],
}

const envs = {
    api: "https://tpi-backend",
    churchName: "Comunidad Cristiana Timoteo",
};

export { dataBase, data, envs };