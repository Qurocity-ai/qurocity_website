import React, { useState } from "react";
import styles from "../LanguagesCurriculum.module.css";

const JapaneseCurriculum = () => {
  const [activeTab, setActiveTab] = useState("N5");


  const levels = ["N5", "N4", "N3", "N2", "N1"];

  const modules = {
    N5: [
      {
        title: "Module 1:: Introduction to Basic Japanese",
        description: [
          "Hiragana & Katakana: Learn and practice both syllabaries (writing systems) of Japanese.",
          "Basic Vocabulary: Greetings, numbers, days of the week, basic nouns (e.g., family members, food items).",
          "Grammar: Basic sentence structure (subject + object + verb), present tense verbs (masu form), and simple particles (は, が, を)."
        ]
      },
      {
        title: "Module 2:: Everyday Communication",
        description: [
          "Common Phrases: Polite expressions, introductions, asking for directions, and making simple requests.",
          "Nouns & Adjectives: Introduction to adjectives (い-adjectives and な-adjectives) and their basic usage.",
          "Verb Conjugation: Present tense (ます form), past tense (た form), and negative forms (ない form)."
        ]
      },
      {
        title: "Module 3:: Practical Applications",
        description: [
          "Shopping & Dining: Vocabulary for shopping, ordering food, and interacting in restaurants.",
          "Daily Life Scenarios: Talking about hobbies, preferences, describing daily routines.",
          "Cultural Insights: Introduction to Japanese culture, customs, and etiquette (e.g., bowing, gift-giving)."
        ]
      }
    ],
    N4: [
      {
        title: "Module 1:: Expanded Vocabulary & Grammar",
        description: [
          "Extended Vocabulary: Expanded topics including weather, transportation, occupations, and more detailed descriptions.",
          "Past Tense: Further exploration of past tense verbs (た form) and their usage.",
          "Particles & Counters: Introduction to more particles (に、で、と) and counters for different objects."
        ]
      },
      {
        title: "Module 2:: Enhanced Communication Skills",
        description: [
          "Future Tense: Introduction to future tense (will form) and expressing intentions.",
          "Te-form & Conjunctive Particles: Learning te-form of verbs and its various uses, conjunctions (から、けど).",
          "Casual Speech: Basics of informal speech patterns used among friends and family."
        ]
      },
      {
        title: "Module 3:: Practical Scenarios",
        description: [
          "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
          "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
          "Cultural Practices: Deeper dive into Japanese holidays, festivals, and traditional arts (e.g., tea ceremony)."
        ]
      }
    ],
    N3: [
      {
        title: "Module 1:: Intermediate Grammar & Vocabulary",
        description: [
          "Complex Sentences: Building complex sentences using conjunctions (が、けれども) and relative clauses.",
          "Noun Modifiers: Introduction to using nouns as modifiers (の particle).",
          "Conditional Forms: Introduction to conditional forms (たら、なら) and hypothetical situations."
        ]
      },
      {
        title: "Module 2:: Conversational Fluency",
        description: [
          "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
          "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
          "Indirect Speech: Reporting what others have said (と言う、と思う)."
        ]
      },
      {
        title: "Module 3:: Applied Contexts",
        description: [
          "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
          "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
          "Cultural Exploration: Exploring modern Japanese literature, movies, and pop culture."
        ]
      }
    ],
    N2: [
      {
        title: "Module 1:: Advanced Grammar & Vocabulary",
        description: [
          "Advanced Sentence Structures: Mastery of complex sentence patterns (passive voice, causative form).",
          "Expressing Conditions & Consequences: Using advanced conditional forms (たら、ば) and cause-effect relationships.",
          "Emphasis & Contrast: Expressing contrast and emphasis with も、しか、はず、さえ."
        ]
      },
      {
        title: "Module 2:: Advanced Communication Skills",
        description: [
          "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
          "Formal & Polite Speech: Polite speech (です・ます form) and honorific language (尊敬語、謙譲語).",
          "Written Expression: Writing formal emails, reports, and essays."
        ]
      },
      {
        title: "Module 3:: Cultural Proficiency",
        description: [
          "Literary Analysis: Analyzing Japanese literature (both classical and modern) and understanding themes.",
          "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
          "Social Issues & Global Perspectives: Discussing contemporary issues in Japan and globally."
        ]
      }
    ],
    N1: [
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
          "Literary Proficiency: Analyzing and appreciating masterpieces of Japanese literature and their impact.",
          "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy."
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
          href="https://drive.google.com/file/d/1dCe8Xok6T5vrHzx1Af-ZrNwlps5-9atQ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Download<br/> Curriculum
        </a>
        </div>
        <div className={styles.curriculumBox}>
          <p>
            <span className={styles.highlight}>JLPT:</span> The Japanese-Language Proficiency Test
          </p>
          <p>
            <span className={styles.highlight}>Purpose:</span> Standardizes the description of Japanese language proficiency
          </p>
          <p>
            A total of <span className={styles.bold}>six levels</span> being{" "}
            <span className={styles.levels}>N5, N4, N3, N2, N1</span>, with N5 being the beginner level and N1 the most advanced.
          </p>
          <p>
            Our Japanese course focuses on developing all <span className={styles.bold}>four key skills:</span>{" "}
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

export default JapaneseCurriculum;
