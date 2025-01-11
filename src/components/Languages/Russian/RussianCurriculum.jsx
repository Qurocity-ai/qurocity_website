import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";

const RussianCurriculum = () => {
  const [activeTab, setActiveTab] = useState("A1");


  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const modules = {
    A1: [
      {
        title: "Module 1:: Basics of Russian Language",
        description: [
          "Learn the Cyrillic alphabet, pronunciation of letters, and basic phonetics.",
          "Common greetings, numbers, days of the week, and basic nouns (e.g., family, food, everyday objects).",
          "Introduction to basic sentence structure, present tense verbs, and simple questions.",
        ],
      },
      {
        title: "Module 2:: Everyday Communication",
        description: [
          "Polite expressions, basic conversational phrases, and common questions/answers.",
          "Gender of nouns, plural forms, and basic adjectives to describe people, places, and things.",
          "Present tense conjugation of regular verbs and introduction to irregular verbs.",
        ],
      },
      {
        title: "Module 3:: Practical Applications",
        description: [
          "Vocabulary for shopping, ordering food, and basic interactions in stores and restaurants.",
          "Asking for and giving directions, understanding public transportation vocabulary.",
          "Introduction to Russian culture, traditions, and etiquette.",
        ],
      },
    ],
    A2: [
      {
        title: "Module 1:: Expanding Vocabulary & Grammar",
        description: [
          "Household items, clothing, parts of the body, and more descriptive adjectives.",
          "Introduction to past tense verbs and usage in simple sentences.",
          "Basic prepositions and introduction to the nominative and accusative cases.",
        ],
      },
      {
        title: "Module 2:: Enhanced Communication",
        description: [
          "Vocabulary and phrases related to daily activities and routines.",
          "Introduction to future tense verbs and forming simple future sentences.",
          "Understanding and using reflexive verbs in everyday conversations.",
        ],
      },
      {
        title: "Module 3:: Practical Scenarios",
        description: [
          "Vocabulary for medical conditions, emergencies, and visiting a doctor.",
          "Making plans, talking about hobbies, and discussing likes/dislikes.",
          "More in-depth exploration of Russian holidays, cuisine, and customs.",
        ],
      },
    ],
    B1: [
      {
        title: "Module 1:: Intermediate Grammar & Vocabulary",
        description: [
          "Using conjunctions to form compound and complex sentences.",
          "Understanding and using commands and requests.",
          "Introduction and usage of the genitive and dative cases in context.",
        ],
      },
      {
        title: "Module 2:: Conversational Skills",
        description: [
          "Telling stories, describing past events, and sharing experiences.",
          "Expressing opinions, agreeing/disagreeing, and talking about preferences.",
          "Introduction to reported speech and indirect questions.",
        ],
      },
      {
        title: "Module 3:: Applied Contexts",
        description: [
          "Vocabulary for travel, booking accommodations, and sightseeing.",
          "Discussing professions, education, and workplace interactions.",
          "Deeper dive into Russian literature, music, and films.",
        ],
      },
    ],
    B2: [
      {
        title: "Module 1:: Advanced Grammar & Vocabulary",
        description: [
          "Understanding the nuances of verb aspects and their correct usage.",
          "Mastery of the instrumental and prepositional cases in various contexts.",
          "Expanding descriptive language for more precise expression.",
        ],
      },
      {
        title: "Module 2:: Complex Communication",
        description: [
          "Developing skills for debates, persuasive speech, and formal discussions.",
          "Using the conditional mood and subjunctive forms to discuss hypothetical situations.",
          "Writing formal letters, essays, and reports with correct structure and style.",
        ],
      },
      {
        title: "Module 3:: Immersive Experiences",
        description: [
          "Reading and understanding Russian newspapers, magazines, and online news.",
          "Discussing cultural events, theater, and art exhibitions.",
          "Advanced vocabulary for professional settings, including business meetings and presentations.",
        ],
      },
    ],
    C1: [
      {
        title: "Module 1:: Proficient Grammar & Vocabulary",
        description: [
          "Understanding idiomatic expressions, proverbs, and subtle language nuances.",
          "Mastering complex sentence structures and advanced grammatical forms.",
          "Expanding vocabulary related to specific fields of interest or work.",
        ],
      },
      {
        title: "Module 2:: Advanced Communication",
        description: [
          "Engaging in fluent, spontaneous conversations on diverse topics.",
          "Writing detailed essays, research papers, and theses in Russian.",
          "Developing skills for giving detailed presentations and public speaking.",
        ],
      },
      {
        title: "Module 3:: Cultural Proficiency",
        description: [
          "Reading and analyzing classic and contemporary Russian literature.",
          "Understanding historical texts and discussing historical events in detail.",
          "Engaging in in-depth discussions about cultural, social, and political issues.",
        ],
      },
    ],
    C2: [
      {
        title: "Module 1:: Mastery of Language",
        description: [
          "Achieving near-native fluency, with the ability to understand and use idiomatic expressions effortlessly.",
          "Writing with accuracy and sophistication across various formats and styles.",
          "Perfecting the use of all grammatical structures.",
        ],
      },
      {
        title: "Module 2:: Expert Communication",
        description: [
          "Participating in complex debates and discussions with ease.",
          "Critically analyzing texts, films, and other media.",
          "Using Russian proficiently in a professional environment, including in specialized fields.",
        ],
      },
      {
        title: "Module 3:: Cultural Immersion",
        description: [
          "Deep immersion into Russian culture, customs, and social norms.",
          "In-depth study and discussion of Russian literary works.",
          "Contributing to discussions on Russian culture and making presentations on cultural topics.",
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
          href="https://drive.google.com/file/d/1Ehw06UWigP4Og285GV33N7_uu4oBqv0s/view?usp=sharing"
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
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of Russian language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
          </p>
          <p>
            Our Russian course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
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

export default RussianCurriculum;
