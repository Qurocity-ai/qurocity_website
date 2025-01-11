import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";
import style from "./MandarinCurriculum.module.css"

const MandarinCurriculum = () => {
  const [activeTab, setActiveTab] = useState("HSK1");


  const levels = ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5", "HSK6"];

  const modules = {
    HSK1: [
      {
        title: "Module 1:: Introduction to Basic Mandarin",
        description: [
          "Pinyin & Tones: Learn Mandarin Chinese pronunciation using Pinyin and practice tones.",
          "Basic Vocabulary: Greetings, numbers, days of the week, simple nouns (e.g., family, food).",
          "Grammar: Basic sentence structure (subject + verb + object), basic question formation."
        ]
      },
      {
        title: "Module 2:: Everyday Communication",
        description: [
          "Common Phrases: Polite expressions, introductions, asking for directions, ordering food.",
          "Nouns & Adjectives: Introduction to common nouns and basic adjectives.",
          "Present Tense Verbs: Common verbs in present tense (e.g., 是、有、喜欢)."
        ]
      },
      {
        title: "Module 3:: Practical Applications",
        description: [
          "Daily Life Scenarios: Shopping, transportation, making appointments.",
          "Cultural Insights: Introduction to Chinese culture, customs, and etiquette.",
          "Listening & Speaking Practice: Basic dialogues and role-playing exercises."
        ]
      }
    ],
    HSK2: [
      {
        title: "Module 1:: Expanded Vocabulary & Grammar",
        description: [
          "Extended Vocabulary: Expanded topics including weather, hobbies, occupations.",
          "Past Tense: Introduction to past tense (了) and its usage.",
          "Quantifiers & Measure Words: Introduction to measure words and quantifiers."
        ]
      },
      {
        title: "Module 2:: Enhanced Communication Skills",
        description: [
          "Future Tense: Introduction to future tense (会) and expressing intentions.",
          "Comparisons: Comparative structures (比) and describing differences.",
          "Question Words: Introduction to question words (什么、谁、哪里)."
        ]
      },
      {
        title: "Module 3:: Practical Scenarios",
        description: [
          "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
          "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
          "Cultural Practices: Deeper dive into Chinese holidays, festivals, and traditional arts."
        ]
      }
    ],
    HSK3: [
      {
        title: "Module 1:: Intermediate Grammar & Vocabulary",
        description: [
          "Complex Sentences: Building complex sentences using conjunctions (但是、因为).",
          "Subjunctive Mood: Introduction to the subjunctive mood (如果、要是).",
          "Adverbs & Adverbials: Using adverbs to modify verbs, adverbials of time and place."
        ]
      },
      {
        title: "Module 2:: Conversational Fluency",
        description: [
          "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
          "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
          "Indirect Speech: Reporting what others have said (说、告诉)."
        ]
      },
      {
        title: "Module 3:: Applied Contexts",
        description: [
          "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
          "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
          "Cultural Exploration: Exploring modern Chinese literature, movies, and pop culture."
        ]
      }
    ],
    HSK4: [
      {
        title: "Module 1:: Advanced Grammar & Vocabulary",
        description: [
          "Advanced Sentence Structures: Mastery of complex sentence patterns (把、被).",
          "Expressing Conditions & Consequences: Using advanced conditional structures (如果...就...).",
          "Emphasis & Contrast: Expressing contrast and emphasis with 虽然...但是."
        ]
      },
      {
        title: "Module 2:: Advanced Communication Skills",
        description: [
          "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
          "Formal & Polite Speech: Polite speech (的、了、地) and honorific language (尊敬语).",
          "Written Expression: Writing formal emails, reports, and essays."
        ]
      },
      {
        title: "Module 3:: Cultural Proficiency",
        description: [
          "Literary Analysis: Analyzing Chinese literature (both classical and modern) and understanding themes.",
          "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
          "Social Issues & Global Perspectives: Discussing contemporary issues in China and globally."
        ]
      }
    ],
    HSK5: [
      {
        title: "Module 1:: Proficient Grammar & Vocabulary",
        description: [
          "Idiomatic Expressions & Proverbs: Mastering idiomatic expressions, proverbs, and colloquialisms.",
          "Advanced Syntax & Rhetoric: Understanding advanced sentence structures, rhetorical devices.",
          "Technical & Specialized Vocabulary: Expanding vocabulary in specialized fields (science, economics, law)."
        ]
      },
      {
        title: "Module 2:: Advanced Communication Skills",
        description: [
          "Fluency in Complex Conversations: Engaging in nuanced discussions on abstract topics.",
          "Critical Analysis & Evaluation: Analyzing and critiquing complex texts, speeches, and media.",
          "Presentation & Persuasion: Delivering persuasive presentations and speeches with confidence."
        ]
      },
      {
        title: "Module 3:: Cultural Mastery",
        description: [
          "Cultural Integration: Deepening understanding of cultural nuances, traditions, and societal norms.",
          "Literary Proficiency: Analyzing and appreciating masterpieces of Chinese literature and their impact.",
          "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy."
        ]
      }
    ],
    HSK6: [
      {
        title: "Module 1:: Mastery of Language",
        description: [
          "Native-like Fluency: Achieving near-native proficiency in all language skills (speaking, listening, reading, writing).",
          "Precision in Writing: Writing with accuracy and sophistication across various genres and styles.",
          "Advanced Grammar Proficiency: Perfecting the use of all grammatical structures and registers."
        ]
      },
      {
        title: "Module 2:: Expert Communication",
        description: [
          "Complex Debates & Discussions: Participating in complex debates, discussions, and academic forums.",
          "Cultural Exploration: Leading discussions on cultural, societal, and global issues within Chinese-speaking communities.",
          "Professional Excellence: Applying language skills effectively in professional and academic environments."
        ]
      },
      {
        title: "Module 3:: Cultural Immersion",
        description: [
          "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy.",
          "Literary & Artistic Endeavors: Exploring and contributing to Chinese-language literature, arts, and media.",
          "Community Engagement: Contributing actively to Chinese-speaking communities, fostering cultural exchange and understanding."
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
          href="https://drive.google.com/file/d/1zfmvNjx0U6zqfdmugaTUYt294YckdRLx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Download<br/> Curriculum
        </a>
        </div>
        <div className={styles.curriculumBox}>
          <p>
            <span className={styles.highlight}>HSK:</span> The Hanyu Shuiping Kaoshi, translated as the Chinese Proficiency Test
          </p>
          <p>
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of Mandarin language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>HSK1, HSK2, HSK3, HSK4, HSK5 and HSK6</span>, with HSK1 being the beginner level and HSK6 the most advanced.
          </p>
          <p>
            Our Mandarin course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
            <span className={styles.skills}>Speaking, Reading, Writing, and Listening</span>.
          </p>
        </div>
        
     
    </div>
 
      {/* Navigation Bar */}
      <div className={style.navBar}>
        {levels.map((level) => (
          <div
            key={level}
            className={`${style.navItem} ${
              activeTab === level ? style.activeItem : ""
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

export default MandarinCurriculum;
