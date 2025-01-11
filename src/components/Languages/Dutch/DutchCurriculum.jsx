import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";

const DutchCurriculum = () => {
  const [activeTab, setActiveTab] = useState("A1");


  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const modules = {
    A1: [
      {
        title: "Module 1:: Basics of Dutch Language",
        description: [
          "Alphabet & Pronunciation: Learn the Dutch alphabet, pronunciation rules, and basic phonetics.",
          "Basic Vocabulary: Common greetings, numbers, days of the week, and basic nouns.",
          "Simple Grammar: Introduction to basic sentence structure, present tense verbs, and simple questions."
        ]
      },
      {
        title: "Module 2:: Everyday Communication",
        description: [
          "Common Phrases: Polite expressions, basic conversational phrases, and common Q&A.",
          "Nouns & Adjectives: Gender of nouns, plural forms, and basic adjectives.",
          "Verb Conjugation: Present tense conjugation of regular verbs and introduction to irregular verbs."
        ]
      },
      {
        title: "Module 3:: Practical Applications",
        description: [
          "Shopping & Dining: Vocabulary for shopping, ordering food, and basic interactions.",
          "Directions & Transportation: Asking for and giving directions, understanding public transportation vocabulary.",
          "Cultural Insights: Introduction to Dutch culture, traditions, and etiquette."
        ]
      }
    ],
    A2: [
      {
        title: "Module 1:: Expanding Vocabulary & Grammar",
        description: [
          "Extended Vocabulary: Household items, clothing, parts of the body, and more descriptive adjectives.",
          "Past Tense: Introduction to past tense verbs and usage in simple sentences.",
          "Prepositions & Articles: Basic prepositions and definite/indefinite articles in context."
        ]
      },
      {
        title: "Module 2:: Enhanced Communication",
        description: [
          "Daily Routines: Vocabulary and phrases related to daily activities and routines.",
          "Future Tense: Introduction to future tense verbs and forming simple future sentences.",
          "Reflexive Verbs: Understanding and using reflexive verbs in everyday conversations."
        ]
      },
      {
        title: "Module 3:: Practical Scenarios",
        description: [
          "Health & Emergencies: Vocabulary for medical conditions, emergencies, and visiting a doctor.",
          "Social Interactions: Making plans, talking about hobbies, and discussing likes/dislikes.",
          "Cultural Practices: More in-depth exploration of Dutch holidays, cuisine, and customs."
        ]
      }
    ],
    B1: [
      {
        title: "Module 1: Intermediate Grammar & Vocabulary",
        description: [
          "Complex Sentences: Using conjunctions to form compound and complex sentences.",
          "Imperative Mood: Understanding and using commands and requests.",
          "Adjective Agreement & Comparative Forms: Mastery of adjective agreement and forming comparatives/superlatives."
        ]
      },
      {
        title: "Module 2:: Conversational Skills",
        description: [
          "Narrative Skills: Telling stories, describing past events, and sharing experiences.",
          "Opinions & Preferences: Expressing opinions, agreeing/disagreeing, and talking about preferences.",
          "Indirect Speech: Introduction to reported speech and indirect questions."
        ]
      },
      {
        title: "Module 3:: Applied Contexts",
        description: [
          "Travel & Tourism: Vocabulary for travel, booking accommodations, and sightseeing.",
          "Work & Study: Discussing professions, education, and workplace interactions.",
          "Cultural Exploration: Deeper dive into Dutch literature, music, and films."
        ]
      }
    ],
    B2: [
      {
        title: "Module 1:: Advanced Grammar & Vocabulary",
        description: [
          "Subordinate Clauses: Mastery of subordinate clauses and their correct usage.",
          "Modal Verbs: Understanding and using modal verbs in various contexts.",
          "Advanced Adjectives & Adverbs: Expanding descriptive language for more precise expression."
        ]
      },
      {
        title: "Module 2:: Complex Communication",
        description: [
          "Debating & Persuasion: Developing skills for debates, persuasive speech, and formal discussions.",
          "Hypothetical Scenarios: Using the conditional mood and subjunctive forms to discuss hypothetical situations.",
          "Formal Writing: Writing formal letters, essays, and reports with correct structure and style."
        ]
      },
      {
        title: "Module 3:: Immersive Experiences",
        description: [
          "Media & News: Reading and understanding Dutch newspapers, magazines, and online news.",
          "Cultural Events: Discussing cultural events, theater, and art exhibitions.",
          "Professional Interaction: Advanced vocabulary for professional settings, including business meetings and presentations."
        ]
      }
    ],
    C1: [
      {
        title: "Module 1:: Proficient Grammar & Vocabulary",
        description: [
          "Subtle Nuances: Understanding idiomatic expressions, proverbs, and subtle language nuances.",
          "Advanced Syntax: Mastering complex sentence structures and advanced grammatical forms.",
          "Specialized Vocabulary: Expanding vocabulary related to specific fields of interest or work."
        ]
      },
      {
        title: "Module 2:: Advanced Communication",
        description: [
          "Fluency in Conversation: Engaging in fluent, spontaneous conversations on diverse topics.",
          "Academic Writing: Writing detailed essays, research papers, and theses in Dutch.",
          "Presentation Skills: Developing skills for giving detailed presentations and public speaking."
        ]
      },
      {
        title: "Module 3:: Cultural Proficiency",
        description: [
          "Literary Analysis: Reading and analyzing classic and contemporary Dutch literature.",
          "Historical Contexts: Understanding historical texts and discussing historical events in detail.",
          "Cultural Debates: Engaging in in-depth discussions about cultural, social, and political issues."
        ]
      }
    ],
    C2: [
      {
        title: "Module 1:: Mastery of Language",
        description: [
          "Complete Fluency: Achieving near-native fluency, with the ability to understand and use idiomatic expressions effortlessly.",
          "Precision in Writing: Writing with accuracy and sophistication across various formats and styles.",
          "Advanced Grammar Mastery: Perfecting the use of all grammatical structures."
        ]
      },
      {
        title: "Module 2:: Expert Communication",
        description: [
          "Complex Debates: Participating in complex debates and discussions with ease.",
          "Critical Analysis: Critically analyzing texts, films, and other media.",
          "Professional Proficiency: Using Dutch proficiently in a professional environment, including in specialized fields."
        ]
      },
      {
        title: "Module 3:: Cultural Immersion",
        description: [
          "Cultural Integration: Deep immersion into Dutch culture, customs, and social norms.",
          "Advanced Literary Studies: In-depth study and discussion of Dutch literary works.",
          "Cultural Contributions: Contributing to discussions on Dutch culture and making presentations on cultural topics."
        ]
      }
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
          href="https://drive.google.com/file/d/1ciN5htNC2yo2K1oRMBZq71KFHcho6E78/view?usp=sharing"
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
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of Dutch language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
          </p>
          <p>
            Our Dutch course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
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

export default DutchCurriculum;
