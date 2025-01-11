import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";

const EnglishCurriculum = () => {
  const [activeTab, setActiveTab] = useState("A1");


  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const modules = {
    A1: [
      {
        title: "Module 1:: Introduction to Basic English",
        description: [
          "Alphabet & Pronunciation: Learn the English alphabet and practice basic pronunciation.",
          "Basic Vocabulary: Greetings, numbers, days of the week, simple nouns (e.g., family, food).",
          "Grammar: Present simple tense (affirmative, negative, questions), basic sentence structures.",
        ],
      },
      {
        title: "Module 2:: Everyday Communication",
        description: [
          "Common Phrases: Polite expressions, introductions, asking for directions, ordering food.",
          "Nouns & Adjectives: Introduction to common nouns and basic adjectives.",
          "Present Continuous Tense: Basic usage of present continuous tense (affirmative, negative, questions).",
        ],
      },
      {
        title: "Module 3:: Practical Applications",
        description: [
          "Daily Life Scenarios: Shopping, transportation, making appointments.",
          "Cultural Insights: Introduction to English-speaking cultures, customs, and etiquette.",
          "Listening & Speaking Practice: Basic dialogues and role-playing exercises.",
        ],
      },
    ],
    A2: [
      {
        title: "Module 1:: Expanded Vocabulary & Grammar",
        description: [
          "Extended Vocabulary: Topics including weather, hobbies, occupations.",
          "Past Simple Tense: Introduction to past simple tense (regular and irregular verbs).",
          "Prepositions: Basic usage of prepositions of time, place, and movement.",
        ],
      },
      {
        title: "Module 2:: Enhanced Communication Skills",
        description: [
          "Future Tense: Introduction to future tense (will + base verb) and expressing intentions.",
          "Comparatives & Superlatives: Comparative structures (more, less, -er) and superlatives (most, least).",
          "Question Forms: Introduction to question words (what, where, when, who, how).",
        ],
      },
      {
        title: "Module 3:: Practical Scenarios",
        description: [
          "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
          "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
          "Cultural Practices: Deeper dive into English-speaking holidays, festivals, and traditions.",
        ],
      },
    ],
    B1: [
      {
        title: "Module 1:: Intermediate Grammar & Vocabulary",
        description: [
          "Complex Sentences: Building complex sentences using conjunctions (and, but, because).",
          "Present Perfect Tense: Introduction to present perfect tense (have/has + past participle).",
          "Modal Verbs: Basic usage of modal verbs (can, could, may, might, must).",
        ],
      },
      {
        title: "Module 2:: Conversational Fluency",
        description: [
          "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
          "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
          "Indirect Speech: Reporting what others have said (say, tell, ask).",
        ],
      },
      {
        title: "Module 3:: Applied Contexts",
        description: [
          "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
          "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
          "Cultural Exploration: Exploring modern English literature, movies, and pop culture.",
        ],
      },
    ],
    B2: [
      {
        title: "Module 1:: Advanced Grammar & Vocabulary",
        description: [
          "Advanced Sentence Structures: Mastery of complex sentence patterns and subordination.",
          "Conditionals: Using conditional sentences (zero, first, second, third conditionals).",
          "Passive Voice: Introduction to passive voice (be + past participle) and its usage.",
        ],
      },
      {
        title: "Module 2:: Advanced Communication Skills",
        description: [
          "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
          "Formal & Polite Speech: Polite speech (formal tone, indirect requests) and diplomatic language.",
          "Written Expression: Writing formal emails, reports, and essays.",
        ],
      },
      {
        title: "Module 3:: Cultural Proficiency",
        description: [
          "Literary Analysis: Analyzing English literature (both classic and contemporary) and understanding themes.",
          "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
          "Social Issues & Global Perspectives: Discussing contemporary issues in English-speaking countries and globally.",
        ],
      },
    ],
    C1: [
      {
        title: "Module 1:: Proficient Grammar & Vocabulary",
        description: [
          "Idiomatic Expressions & Colloquialisms: Mastering idiomatic expressions, phrasal verbs, and colloquial language.",
          "Advanced Syntax & Rhetoric: Understanding advanced sentence structures, rhetorical devices.",
          "Technical & Specialized Vocabulary: Expanding vocabulary in specialized fields (science, economics, law).",
        ],
      },
      {
        title: "Module 2:: Advanced Communication Skills",
        description: [
          "Fluency in Complex Conversations: Engaging in nuanced discussions on abstract topics.",
          "Critical Analysis & Evaluation: Analyzing and critiquing complex texts, speeches, and media.",
          "Presentation & Persuasion: Delivering persuasive presentations and speeches with confidence.",
        ],
      },
      {
        title: "Module 3:: Cultural Mastery",
        description: [
          "Cultural Integration: Deepening understanding of cultural nuances, traditions, and societal norms in English-speaking contexts.",
          "Literary Proficiency: Analyzing and appreciating masterpieces of English literature and their impact.",
          "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy in English.",
        ],
      },
    ],
    C2: [
      {
        title: "Module 1:: Mastery of Language",
        description: [
          "Native-like Fluency: Achieving near-native proficiency in all language skills (speaking, listening, reading, writing).",
          "Precision in Writing: Writing with accuracy and sophistication across various genres and styles.",
          "Advanced Grammar Proficiency: Perfecting the use of all grammatical structures and registers.",
        ],
      },
      {
        title: "Module 2:: Expert Communication",
        description: [
          "Complex Debates & Discussions: Participating in complex debates, discussions, and academic forums.",
          "Cultural Exploration: Leading discussions on cultural, societal, and global issues within English-speaking communities.",
          "Professional Excellence: Applying language skills effectively in professional and academic environments.",
        ],
      },
      {
        title: "Module 3:: Cultural Immersion",
        description: [
          "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy in English-speaking contexts.",
          "Literary & Artistic Endeavors: Exploring and contributing to English-language literature, arts, and media.",
          "Community Engagement: Contributing actively to English-speaking communities, fostering cultural exchange and understanding.",
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
          href="https://drive.google.com/file/d/1ndboc29hqaYU0OyHd6b6zOQngAWJlS7a/view?usp=sharing"
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
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of English language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>A1, A2, B1, B2, C1, and C2</span>, with A1 being the beginner level and C2 the most advanced.
          </p>
          <p>
            Our English course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
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

export default EnglishCurriculum;
