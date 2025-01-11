import React, { useState } from "react";
// import styles from "./SpanishCurriculum.module.css";
import styles from "../LanguagesCurriculum.module.css";

const SpanishCurriculum = () => {
    const [activeTab, setActiveTab] = useState("A1");


    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

    const modules = {
        A1: [
            {
                title: "Module 1:: Basic Introductions and Daily Life",
                description: [
                    "Hola y Adiós (Hello and Goodbye).",
                    "Mi Familia y Yo (My Family and I).",
                    "En Casa (At Home).",
                    "La Rutina Diaria (Daily Routine).",
                ],
            },
            {
                title: "Module 2:: Basic Needs and Common Activities",
                description: [
                    "En la Ciudad (In the City).",
                    "Las Compras (Shopping).",
                    "Comer y Beber (Eating and Drinking).",
                    "Tiempo Libre (Free Time).",
                ],
            },
            {
                title: "Module 3:: Interacting with Others",
                description: [
                    "En la Escuela (At School).",
                    "El Trabajo (Work).",
                    "Las Vacaciones (Holidays).",
                    "La Salud (Health).",
                ],
            },
        ],
        A2: [
            {
                title: "Module 1:: Expanding Vocabulary and Communication",
                description: [
                    "Descripciones y Características (Descriptions and Characteristics).",
                    "Los Amigos y Las Relaciones (Friends and Relationships).",
                    "En el Restaurante (At the Restaurant).",
                    "De Compras (Shopping).",
                ],
            },
            {
                title: "Module 2:: Everyday Situations and Travel",
                description: [
                    "En el Transporte (Transportation).",
                    "Hacer Planes (Making Plans).",
                    "El Clima y Las Estaciones (Weather and Seasons).",
                    "En el Banco y la Oficina de Correos (At the Bank and Post Office).",
                ],
            },
            {
                title: "Module 3:: Cultural Context and Advanced Interactions",
                description: [
                    "Fiestas y Tradiciones (Festivals and Traditions).",
                    "El Cuerpo y la Salud (Body and Health).",
                    "Problemas y Soluciones (Problems and Solutions).",
                    "En el Trabajo (At Work).",
                ],
            },
        ],
        B1: [
            {
                title: "Module 1:: Intermediate Communication and Daily Life",
                description: [
                    "Presentaciones y Relaciones Personales (Introductions and Personal Relationships).",
                    "Vida Cotidiana (Daily Life).",
                    "Descripciones y Narrativas (Descriptions and Narratives).",
                    "Viajes y Turismo (Travel and Tourism).",
                ],
            },
            {
                title: "Module 2:: Practical Situations and Expressing Opinions",
                description: [
                    "Compras y Consumo (Shopping and Consumption).",
                    "La Salud y el Bienestar (Health and Well-being).",
                    "Trabajo y Profesiones (Work and Professions).",
                    "La Educación y el Aprendizaje (Education and Learning).",
                ],
            },
            {
                title: "Module 3:: Cultural Awareness and Advanced Interactions",
                description: [
                    "Medios de Comunicación (Media and Communication).",
                    "Problemas y Soluciones (Problems and Solutions).",
                    "Fiestas y Tradiciones (Festivals and Traditions).",
                    "Opiniones y Argumentación (Opinions and Arguments).",
                ],
            },
        ],
        B2: [
            {
                title: "Module 1:: Advanced Communication and Social Issues",
                description: [
                    "Relaciones Personales y Sociales (Personal and Social Relationships).",
                    "Vida Urbana y Rural (Urban and Rural Life).",
                    "Cultura y Ocio (Culture and Leisure).",
                    "Tecnología y Sociedad (Technology and Society).",
                ],
            },
            {
                title: "Module 2:: Complex Situations and Professional Settings",
                description: [
                    "Educación y Formación (Education and Training).",
                    "El Mundo Laboral (The World of Work).",
                    "Economía y Negocios (Economy and Business).",
                    "Política y Sociedad (Politics and Society).",
                ],
            },
            {
                title: "Module 3:: Global Issues and Cultural Depth",
                description: [
                    "Medio Ambiente y Sostenibilidad (Environment and Sustainability).",
                    "Salud y Estilo de Vida (Health and Lifestyle).",
                    "Literatura y Cine (Literature and Cinema).",
                    "Historia y Geografía (History and Geography).",
                ],
            },
        ],
        C1: [
            {
                title: "Module 1:: Advanced Communication and Professional Contexts",
                description: [
                    "Comunicación Avanzada (Advanced Communication).",
                    "Relaciones Laborales (Work Relationships).",
                    "Redacción y Presentaciones (Writing and Presentations).",
                    "Debates y Discusiones (Debates and Discussions).",
                ],
            },
            {
                title: "Module 2:: Cultural Proficiency and Critical Thinking",
                description: [
                    "Literatura y Análisis (Literature and Analysis).",
                    "Historia y Sociedad (History and Society).",
                    "El Arte y la Cultura (Art and Culture).",
                    "Crítica y Opinión (Critique and Opinion).",
                ],
            },
            {
                title: "Module 3:: Specialized Topics and Media",
                description: [
                    "Ciencia y Tecnología (Science and Technology).",
                    "Economía y Finanzas (Economy and Finance).",
                    "Política y Actualidad (Politics and Current Affairs).",
                    "Medio Ambiente y Sustentabilidad (Environment and Sustainability).",
                ],
            },
        ],
        C2: [
            {
                title: "Module 1:: Mastery of Language and Nuanced Expression",
                description: [
                    "Expresión Oral y Escrita (Oral and Written Expression).",
                    "Matices y Registros del Lenguaje (Nuances and Language Registers).",
                    "Estilos y Géneros Literarios (Literary Styles and Genres).",
                    "Retórica y Persuasión (Rhetoric and Persuasion).",
                ],
            },
            {
                title: "Module 2:: In-Depth Analysis and Interpretation",
                description: [
                    "Análisis Literario y Crítico (Literary and Critical Analysis).",
                    "Estudios Culturales y Sociales (Cultural and Social Studies).",
                    "Investigación y Documentación (Research and Documentation).",
                    "Traducción y Interpretación (Translation and Interpretation).",
                ],
            },
            {
                title: "Module 3:: Professional and Academic Proficiency",
                description: [
                    "Comunicación Profesional y Académica (Professional and Academic Communication).",
                    "Conferencias y Publicaciones (Conferences and Publications).",
                    "Innovación y Desarrollo (Innovation and Development).",
                    "Proyectos y Presentaciones (Projects and Presentations).",
                ],
            },
        ],

    };

    const handleTabClick = (level) => {
        setActiveTab(level);
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerOne}>
                <div className={styles.curriculumSection}>
                    <h2 className={styles.title}>Curriculum</h2>
                    <a
                        href="https://drive.google.com/file/d/1DetO_TYIoXarDw0poNOsihskaTbddKWE/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        Download<br /> Curriculum
                    </a>
                </div>
                <div className={styles.curriculumBox}>
                    <p>
                        <span className={styles.highlight}>CEFRL:</span> Common European Framework of Reference for Languages
                    </p>
                    <p>
                        <span className={styles.highlight}>Purpose:</span> Standardizes the description of Spanish language proficiency
                    </p>
                    <p>
                        A total of <span className={styles.bold}>six levels</span> being{" "}
                        <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
                    </p>
                    <p>
                        Our Spanish course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
                        <span className={styles.skills}>Speaking, Reading, Writing, and Listening</span>.
                    </p>
                </div>


            </div>

            {/* Navigation Bar */}
            <div className={styles.navBar}>
                {levels.map((level) => (
                    <div
                        key={level}
                        className={`${styles.navItem} ${activeTab === level ? styles.activeItem : ""
                            }`}
                        onClick={() => handleTabClick(level)}
                    >
                        {level}
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div className={styles.content}>
                <div className={styles.background}>
                    <div className={styles.modulesRow}>
                        {modules[activeTab].map((module, index) => {
                            const [mainTitle, subtitle] = module.title.split(": ");
                            return (
                                <div key={index} className={styles.moduleBox}>
                                    <h3 className={styles.moduleTitle}>
                                        <p className={styles.mainTitle}>{mainTitle}</p>
                                        <p className={styles.subtitle}>{subtitle}</p>
                                    </h3>
                                    <hr className={styles.divider} />
                                    {module.description.map((paragraph, i) => (
                                        <p key={i} className={styles.moduleDescription}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpanishCurriculum;