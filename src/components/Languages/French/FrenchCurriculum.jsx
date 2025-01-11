import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";

const FrenchCurriculum = () => {
  const [activeTab, setActiveTab] = useState("A1");


  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const modules = {
    A1: [
      {
        title: "Module 1:: Parler de soi-même",
        description: [
          "Les Salutations",
          "Se Présenter",
          "S'exprimer",
        ],
      },
      {
        title: "Module 2:: Faire la communication",
        description: [
         "Demander à quelqu'un",
          "L'invitation",
          "Faire du shopping",
        ],
      },
      {
        title: "Module 3:: Se situer dans l'espace",
        description: [
          "Parler de l'itinéraire",
          "Comprendre les instructions",
          "Décrire un lieu",
        ],
      },
    ],
    A2: [
      {
        title: "Module 1:: Parler du temps",
        description: [
          "La journée",
          "Décrire une personne",
          "À l’avenir",
        ],
      },
      {
        title: "Module 2:: Les événements dans le temps",
        description: [
          "Parler des souvenirs",
          "Les émotions",
          "Les projets de l’avenir",
        ],
      },
      {
        title: "Module 3:: L’argumentation",
        description: [
          "Les dialogues du quotidien",
          "Consommer bien",
          "Notre choix",
        ],
      },
    ],
    B1: [
      {
        title: "Module 1:: S’épanouir",
        description: [
          "Gagner le temps",
          "L’education : La nouvelle forme",
          "La technologie dans la vie quotidienne",
        ],
      },
      {
        title: "Module 2:: Le changement",
        description: [
          "Comprendre de l’art",
          "Les étapes de la revolution",
          "Le travail ou la passion",
        ],
      },
      {
        title: "Module 3:: L’histoire",
        description: [
          "La Francophonie",
          "Le patrimoine",
          "Comment Réagir",
        ],
      },
    ],
    B2: [
      {
        title: "Module 1:: Les sentiments",
        description: [
          "Le bonheure",
          "Le monde change",
          "L’image : nécessaire ou pas ?",
        ],
      },
      {
        title: "Module 2:: La société",
        description: [
          "L’égalité",
          "La culture",
          "Le lux et le goût",
        ],
      },
      {
        title: "Module 3:: La science",
        description: [
          "Nos appartenances",
          "Les recherches",
          "La santé et le génétique",
        ],
      },
    ],
    C1: [
      {
        title: "Module 1:: Les sentiments",
        description: [
          "L’education",
          "La famille",
          "La technologie",
        ],
      },
      {
        title: "Module 2:: La société",
        description: [
          "La structure social",
          "La santé",
          "Les droits humains",
        ],
      },
      {
        title: "Module 3:: La science",
        description: [
          "La communication",
          "L’environnement",
          "Le travail",
        ],
      },
    ],
    C2: [
      {
        title: "Module 1:: Les sentiments",
        description: [
          "L’environnement et le developpement",
          "Le travail",
          "L’education et la nouvelle génération",
        ],
      },
      {
        title: "Module 2:: La société",
        description: [
          "La famille et la société",
          "La technologie",
          "La structure social",
        ],
      },
      {
        title: "Module 3:: La science",
        description: [
          "La santé et les nourritures",
          "Les droits humains",
          "La communication",
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
          href="https://drive.google.com/file/d/1L6s4jP5igc_etdTb0xVe1PpqDCT62GZ6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Download<br/> Curriculum
        </a>
        </div>
        <div className={styles.curriculumBox}>
          <p>
            <span className={styles.highlight}>CEFRL:</span> Common European Framework of Reference for Languages
          </p>
          <p>
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of French language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
          </p>
          <p>
            Our French course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
            <span className={styles.skills}>Speaking, Reading, Writing, and Listening</span>.
          </p>
        </div>
        
     
    </div>
 
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        {levels.map((level) => (
          <div
            key={level}
            className={`${styles.navItem} ${
              activeTab === level ? styles.activeItem : ""
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

export default FrenchCurriculum;
