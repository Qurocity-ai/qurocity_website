import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";

const DanishCurriculum = () => {
  const [activeTab, setActiveTab] = useState("A1");


  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const modules = {
    A1: [
      {
        title: "Module 1: Introduction to Danish",
        description: [
          "Alphabet & Pronunciation: Learn the Danish alphabet, pronunciation rules, and basic phonetics.",
          "Greetings & Basic Expressions: Common greetings, introductions, and basic conversational phrases.",
          "Simple Grammar: Basic sentence structure, present tense verbs (regular and some irregular), and simple questions."
        ]
      },
      {
        title: "Module 2: Everyday Communication",
        description: [
          "Basic Vocabulary: Numbers, days of the week, months, colors, and common nouns (e.g., family, food, everyday objects).",
          "Noun Gender & Plural Forms: Introduction to gendered nouns (common/neuter) and pluralization rules.",
          "Daily Life Scenarios: Vocabulary and phrases for shopping, dining, directions, and transportation."
        ]
      },
      {
        title: "Module 3: Practical Applications",
        description: [
          "Social Interactions: Polite expressions, making plans, discussing hobbies, and preferences.",
          "Descriptive Language: Basic adjectives, comparisons (comparatives and superlatives), and describing people and places.",
          "Cultural Insights: Introduction to Danish culture, traditions, and societal norms."
        ]
      }
    ],
    A2: [
      {
        title: "Module 1: Expanded Vocabulary & Grammar",
        description: [
          "Extended Vocabulary: Household items, clothing, parts of the body, and more descriptive adjectives.",
          "Past Tense: Introduction to past tense verbs (regular and irregular) and usage in simple sentences.",
          "Prepositions & Articles: Basic prepositions and definite/indefinite articles in context."
        ]
      },
      {
        title: "Module 2: Enhanced Communication Skills",
        description: [
          "Daily Routines: Vocabulary and phrases related to daily activities, routines, and hobbies.",
          "Future Tense: Introduction to future tense verbs and forming simple future sentences.",
          "Reflexive Verbs: Understanding and using reflexive verbs in everyday conversations."
        ]
      },
      {
        title: "Module 3: Practical Scenarios",
        description: [
          "Health & Emergencies: Vocabulary for medical conditions, emergencies, and visiting a doctor.",
          "Work & Study: Discussing professions, education, and workplace interactions.",
          "Cultural Exploration: Deeper dive into Danish literature, music, and films."
        ]
      }
    ],
    B1: [
      {
        title: "Module 1: Intermediate Grammar & Vocabulary",
        description: [
          "Complex Sentences: Using conjunctions to form compound and complex sentences.",
          "Subjunctive Mood: Introduction to the subjunctive mood and its various uses.",
          "Adjective Agreement & Comparative Forms: Mastery of adjective agreement and forming comparatives/superlatives."
        ]
      },
      {
        title: "Module 2: Conversational Fluency",
        description: [
          "Narrative Skills: Telling stories, describing past events, and sharing experiences.",
          "Opinions & Debate: Expressing opinions, agreeing/disagreeing, and engaging in debates.",
          "Indirect Speech: Introduction to reported speech and indirect questions."
        ]
      },
      {
        title: "Module 3: Applied Contexts",
        description: [
          "Travel & Tourism: Vocabulary for travel, booking accommodations, and sightseeing.",
          "Professional Skills: Advanced vocabulary for business settings, meetings, and negotiations.",
          "Media & Current Affairs: Reading and discussing Danish news, articles, and contemporary issues."
        ]
      }
    ],
    B2: [
      {
        title: "Module 1: Advanced Grammar & Vocabulary",
        description: [
          "Complex Structures: Mastery of complex sentence structures, including conditional sentences.",
          "Modal Verbs & Phrasal Verbs: Understanding and using modal verbs and phrasal verbs in context.",
          "Advanced Adjectives & Adverbs: Expanding descriptive language for more nuanced expression."
        ]
      },
      {
        title: "Module 2: Advanced Communication",
        description: [
          "Debating & Persuasion: Developing skills for formal debates, persuasive arguments, and discussions.",
          "Writing Skills: Academic writing, formal letters, and business correspondence.",
          "Cultural Literacy: Analysis of Danish literature, films, and artistic movements."
        ]
      },
      {
        title: "Module 3: Cultural Proficiency",
        description: [
          "Literary Analysis: In-depth study and discussion of major Danish literary works and authors.",
          "Historical Insights: Understanding historical events, figures, and their impact on Danish society.",
          "Cultural Debates: Engaging in discussions about cultural, social, and political issues within Danish society."
        ]
      }
    ],
    C1: [
      {
        title: "Module 1: Proficient Grammar & Vocabulary",
        description: [
          "Idiomatic Expressions & Proverbs: Understanding and using idiomatic expressions and proverbs in context.",
          "Advanced Syntax: Mastery of advanced grammatical structures and sentence patterns.",
          "Technical Vocabulary: Expanding vocabulary related to specific fields of interest or professional domains."
        ]
      },
      {
        title: "Module 2: Advanced Communication Skills",
        description: [
          "Fluency in Complex Conversations: Engaging in fluent, spontaneous conversations on diverse topics.",
          "Critical Analysis: Analyzing texts, speeches, and media critically and expressing nuanced opinions.",
          "Presentation Skills: Delivering detailed presentations and participating in formal discussions."
        ]
      },
      {
        title: "Module 3: Cultural Mastery",
        description: [
          "Cultural Integration: Deepening understanding of cultural nuances, traditions, and contemporary issues.",
          "Literary Proficiency: Analysis and interpretation of contemporary and classic Danish literature.",
          "Professional Competence: Applying language skills effectively in professional and academic environments."
        ]
      }
    ],
    C2: [
      {
        title: "Module 1: Mastery of Language",
        description: [
          "Native-like Fluency: Achieving near-native proficiency in all language skills (speaking, listening, reading, writing).",
          "Precision in Writing: Writing with accuracy and sophistication across various genres and styles.",
          "Advanced Grammar Proficiency: Perfecting the use of all grammatical structures and registers."
        ]
      },
      {
        title: "Module 2: Expert Communication",
        description: [
          "Complex Debates & Discussions: Participating in complex debates, discussions, and academic forums.",
          "Cultural Exploration: Leading discussions on cultural, societal, and global issues within Danish-speaking communities.",
          "Professional Excellence: Applying language skills effectively in professional and academic environments."
        ]
      },
      {
        title: "Module 3: Cultural Immersion",
        description: [
          "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy.",
          "Literary & Artistic Endeavors: Exploring and contributing to Danish-language literature, arts, and media.",
          "Community Engagement: Contributing actively to Danish-speaking communities, fostering cultural exchange and understanding."
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
          href="https://drive.google.com/file/d/1eaG4iXvjXqqFrg0CtWydNryNbdFHkEVu/view?usp=sharing"
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
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of Danish language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
          </p>
          <p>
            Our Danish course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
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

export default DanishCurriculum;
