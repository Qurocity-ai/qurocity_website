import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";


const GermanCurriculum = () => {
  const [activeTab, setActiveTab] = useState("A1");


  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const modules = {
    A1: [
        {
          title: "Module 1:: Basic Introductions and Daily Life",
          description: [
            "Guten Tag und Abschied (Hello and Goodbye).",
            "Meine Familie und Ich (My Family and I).",
            "Zu Hause (At Home).",
            "Der Tagesablauf (Daily Routine).",
          ],
        },
        {
          title: "Module 2:: Basic Needs and Common Activities",
          description: [
            "In der Stadt (In the City).",
            "Einkaufen (Shopping).",
            "Essen und Trinken (Eating and Drinking).",
            "Freizeit (Free Time).",
          ],
        },
        {
          title: "Module 3:: Interacting with Others",
          description: [
            "In der Schule (At School).",
            "Arbeit (Work).",
            "Urlaub (Holidays).",
            "Gesundheit (Health).",
          ],
        },
      ],
    
     
    A2: [
      {
        title: "Module 1:: Expanding Vocabulary and Communication",
        description: [
          "Beschreibungen und Eigenschaften (Descriptions and Characteristics).",
          "Freunde und Beziehungen (Friends and Relationships).",
          "Im Restaurant (At the Restaurant).",
          "Einkaufen gehen (Going Shopping).",
        ],
      },
      {
        title: "Module 2:: Everyday Situations and Travel",
        description: [
          "Verkehrsmittel (Transportation).",
          "Pläne machen (Making Plans).",
          "Wetter und Jahreszeiten (Weather and Seasons).",
          "Bei der Bank und der Post (At the Bank and Post Office).",
        ],
      },
      {
        title: "Module 3:: Cultural Context and Advanced Interactions",
        description: [
          "Feste und Traditionen (Festivals and Traditions).",
          "Der Körper und die Gesundheit (Body and Health).",
          "Probleme und Lösungen (Problems and Solutions).",
          "Bei der Arbeit (At Work).",
        ],
      },
    ],
    B1: [
      {
        title: "Module 1:: Intermediate Communication and Daily Life",
        description: [
          "Vorstellungsrunde und Beziehungen (Introductions and Relationships).",
          "Alltag (Daily Life).",
          "Beschreibungen und Erzählungen (Descriptions and Narratives).",
          "Reisen und Tourismus (Travel and Tourism).",
        ],
      },
      {
        title: "Module 2:: Practical Situations and Expressing Opinions",
        description: [
          "Einkaufen und Konsum (Shopping and Consumption).",
          "Gesundheit und Wohlbefinden (Health and Well-being).",
          "Beruf und Karriere (Work and Career).",
          "Bildung und Lernen (Education and Learning).",
        ],
      },
      {
        title: "Module 3:: Cultural Awareness and Advanced Interactions",
        description: [
          "Medien und Kommunikation (Media and Communication).",
          "Probleme und Lösungsansätze (Problems and Solutions).",
          "Feste und Traditionen (Festivals and Traditions).",
          "Meinungen und Argumentationen (Opinions and Arguments).",
        ],
      },
    ],
    B2: [
      {
        title: "Module 1:: Advanced Communication and Social Issues",
        description: [
          "Persönliche und soziale Beziehungen (Personal and Social Relationships).",
          "Stadt- und Landleben (Urban and Rural Life).",
          "Kultur und Freizeit (Culture and Leisure).",
          "Technologie und Gesellschaft (Technology and Society).",
        ],
      },
      {
        title: "Module 2:: Complex Situations and Professional Settings",
        description: [
          "Bildung und Ausbildung (Education and Training).",
          "Berufswelt (The World of Work).",
          "Wirtschaft und Geschäft (Economy and Business).",
          "Politik und Gesellschaft (Politics and Society).",
        ],
      },
      {
        title: "Module 3:: Global Issues and Cultural Depth",
        description: [
          "Umwelt und Nachhaltigkeit (Environment and Sustainability).",
          "Gesundheit und Lebensstil (Health and Lifestyle).",
          "Literatur und Kino (Literature and Cinema).",
          "Geschichte und Geografie (History and Geography).",
        ],
      },
    ],
    C1: [
      {
        title: "Module 1:: Advanced Communication and Professional Contexts",
        description: [
          "Fortgeschrittene Kommunikation (Advanced Communication).",
          "Arbeitsbeziehungen (Work Relationships).",
          "Schreiben und Präsentationen (Writing and Presentations).",
          "Debatten und Diskussionen (Debates and Discussions).",
        ],
      },
      {
        title: "Module 2:: Cultural Proficiency and Critical Thinking",
        description: [
          "Literatur und Analyse (Literature and Analysis).",
          "Geschichte und Gesellschaft (History and Society).",
          "Kunst und Kultur (Art and Culture).",
          "Kritik und Meinung (Critique and Opinion).",
        ],
      },
      {
        title: "Module 3:: Specialized Topics and Media",
        description: [
          "Wissenschaft und Technologie (Science and Technology).",
          "Wirtschaft und Finanzen (Economy and Finance).",
          "Politik und aktuelle Ereignisse (Politics and Current Affairs).",
          "Umwelt und Nachhaltigkeit (Environment and Sustainability).",
        ],
      },
    ],
    C2: [
      {
        title: "Module 1:: Mastery of Language and Nuanced Expression",
        description: [
          "Mündliche und schriftliche Ausdrucksfähigkeit (Oral and Written Expression).",
          "Sprachliche Nuancen und Register (Nuances and Language Registers).",
          "Literarische Stile und Genres (Literary Styles and Genres).",
          "Rhetorik und Überzeugung (Rhetoric and Persuasion).",
        ],
      },
      {
        title: "Module 2:: In-Depth Analysis and Interpretation",
        description: [
          "Literarische und kritische Analyse (Literary and Critical Analysis).",
          "Kultur- und Sozialwissenschaften (Cultural and Social Studies).",
          "Forschung und Dokumentation (Research and Documentation).",
          "Übersetzung und Dolmetschen (Translation and Interpretation).",
        ],
      },
      {
        title: "Module 3:: Professional and Academic Proficiency",
        description: [
          "Professionelle und akademische Kommunikation (Professional and Academic Communication).",
          "Konferenzen und Veröffentlichungen (Conferences and Publications).",
          "Innovation und Entwicklung (Innovation and Development).",
          "Projekte und Präsentationen (Projects and Presentations).",
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
           href="https://drive.google.com/file/d/1w2Yn5r_dZJ9zpSzhnBLgScMtL6drvGK5/view?usp=sharing"
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
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of German language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
          </p>
          <p>
            Our German course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
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

export default GermanCurriculum;
