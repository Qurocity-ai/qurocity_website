import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";
import Design from "./KoreanCurriculum.module.css"

const KoreanCurriculum = () => {
  const [activeTab, setActiveTab] = useState("TOPIK1");


  const levels = ["TOPIK1", "TOPIK2", "TOPIK3", "TOPIK4", "TOPIK5", "TOPIK6"];

  const modules = {
    TOPIK1: [
      {
        title: "Module 1: Introduction to Basic Korean",
        description: [
          "Hangul: Learn the Korean alphabet (Hangul) and practice reading and writing.",
          "Basic Vocabulary: Greetings, numbers, days of the week, simple nouns (e.g., family, food).",
          "Grammar: Basic sentence structure (subject + object + verb), present tense verbs (이에요/예요), and basic particles (은/는, 이/가)."
        ]
      },
      {
        title: "Module 2: Everyday Communication",
        description: [
          "Common Phrases: Polite expressions, introductions, asking for directions, ordering food.",
          "Nouns & Adjectives: Introduction to common nouns and basic adjectives.",
          "Present Tense Verbs: Basic verbs in present tense (하다, 있다, 없다)."
        ]
      },
      {
        title: "Module 3: Practical Applications",
        description: [
          "Daily Life Scenarios: Shopping, transportation, making appointments.",
          "Cultural Insights: Introduction to Korean culture, customs, and etiquette.",
          "Listening & Speaking Practice: Basic dialogues and role-playing exercises."
        ]
      }
    ],
    TOPIK2: [
      {
        title: "Module 1: Expanded Vocabulary & Grammar",
        description: [
          "Extended Vocabulary: Expanded topics including weather, hobbies, occupations.",
          "Past Tense: Introduction to past tense (었/았어요) and its usage.",
          "Quantifiers & Counters: Introduction to quantifiers and counters (개, 장)."
        ]
      },
      {
        title: "Module 2: Enhanced Communication Skills",
        description: [
          "Future Tense: Introduction to future tense (을/를 거에요) and expressing intentions.",
          "Comparisons: Comparative structures (보다, 더) and describing differences.",
          "Question Words: Introduction to question words (무엇, 어디, 누구)."
        ]
      },
      {
        title: "Module 3: Practical Scenarios",
        description: [
          "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
          "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
          "Cultural Practices: Deeper dive into Korean holidays, festivals, and traditional arts."
        ]
      }
    ],
    TOPIK3: [
      {
        title: "Module 1: Intermediate Grammar & Vocabulary",
        description: [
          "Complex Sentences: Building complex sentences using conjunctions (그러나, 그리고).",
          "Subjunctive Mood: Introduction to the subjunctive mood (면) and its usage.",
          "Adverbs & Adverbials: Using adverbs to modify verbs, adverbials of time and place."
        ]
      },
      {
        title: "Module 2: Conversational Fluency",
        description: [
          "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
          "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
          "Indirect Speech: Reporting what others have said (라고, 다고)."
        ]
      },
      {
        title: "Module 3: Applied Contexts",
        description: [
          "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
          "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
          "Cultural Exploration: Exploring modern Korean literature, movies, and pop culture."
        ]
      }
    ],
    TOPIK4: [
      {
        title: "Module 1: Advanced Grammar & Vocabulary",
        description: [
          "Advanced Sentence Structures: Mastery of complex sentence patterns (에 따라, 때문에).",
          "Expressing Conditions & Consequences: Using advanced conditional structures (만 하면, -게 되다).",
          "Emphasis & Contrast: Expressing contrast and emphasis with -지만, -아/어도."
        ]
      },
      {
        title: "Module 2: Advanced Communication Skills",
        description: [
          "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
          "Formal & Polite Speech: Polite speech (입니다/습니까 form) and honorific language (시, 주십시오).",
          "Written Expression: Writing formal emails, reports, and essays."
        ]
      },
      {
        title: "Module 3: Cultural Proficiency",
        description: [
          "Literary Analysis: Analyzing Korean literature (both classical and modern) and understanding themes.",
          "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
          "Social Issues & Global Perspectives: Discussing contemporary issues in Korea and globally."
        ]
      }
    ],
    TOPIK5: [
      {
        title: "Module 1: Proficient Grammar & Vocabulary",
        description: [
          "Idiomatic Expressions & Proverbs: Mastering idiomatic expressions, proverbs, and colloquialisms.",
          "Advanced Syntax & Rhetoric: Understanding advanced sentence structures, rhetorical devices.",
          "Technical & Specialized Vocabulary: Expanding vocabulary in specialized fields (science, economics, law)."
        ]
      },
      {
        title: "Module 2: Advanced Communication Skills",
        description: [
          "Fluency in Complex Conversations: Engaging in nuanced discussions on abstract topics.",
          "Critical Analysis & Evaluation: Analyzing and critiquing complex texts, speeches, and media.",
          "Presentation & Persuasion: Delivering persuasive presentations and speeches with confidence."
        ]
      },
      {
        title: "Module 3: Cultural Mastery",
        description: [
          "Cultural Integration: Deepening understanding of cultural nuances, traditions, and societal norms.",
          "Literary Proficiency: Analyzing and appreciating masterpieces of Korean literature and their impact.",
          "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy."
        ]
      }
    ],
    TOPIK6: [
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
          "Cultural Exploration: Leading discussions on cultural, societal, and global issues within Korean-speaking communities.",
          "Professional Excellence: Applying language skills effectively in professional and academic environments."
        ]
      },
      {
        title: "Module 3: Cultural Immersion",
        description: [
          "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy.",
          "Literary & Artistic Endeavors: Exploring and contributing to Korean-language literature, arts, and media.",
          "Community Engagement: Contributing actively to Korean-speaking communities, fostering cultural exchange and understanding."
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
          href="https://drive.google.com/file/d/15_lu6ghM_w7aIcrwv1x5GizOoAF75hvp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Download<br/> Curriculum
        </a>
        </div>
        <div className={styles.curriculumBox}>
          <p>
            <span className={styles.highlight}>TOPIK:</span> The Test of Proficiency in Korean
          </p>
          <p>
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of Korean language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>TOPIK 1, TOPIK 2, TOPIK 3, TOPIK 4, TOPIK 5, TOPIK 6,</span>, with TOPIK 1 being the beginner level and TOPIK 6 the most advanced.
          </p>
          <p>
            Our Korean course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
            <span className={styles.skills}>Speaking, Reading, Writing, and Listening</span>.
          </p>
        </div>
        
     
    </div>
 
      {/* Navigation Bar */}
      <div className={Design.navBar}>
        {levels.map((level) => (
          <div
            key={level}
            className={`${Design.navItem} ${
              activeTab === level ? Design.activeItem : ""
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

export default KoreanCurriculum;
