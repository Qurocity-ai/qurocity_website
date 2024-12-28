import React, { useState } from "react";
import styles from "./LanguageComponent.module.css";

const languages = [
  {
    name: "English",
    flag: "/Language/England.png",
    description: "English is essential for business!",
  },
  {
    name: "French",
    flag: "/Language/French.png",
    description: "French is for art, cuisine, and culture!",
  },
  {
    name: "German",
    flag: "/Language/German.png",
    description: "German is for science and engineering!",
  },
  {
    name: "Spanish",
    flag: "/Language/Spain.png",
    description: "Spanish is for fun, music, and parties!",
  },
  {
    name: "Korean",
    flag: "/Language/Korea.png",
    description: "Korean is for K-pop and entertainment!",
  },
  {
    name: "Japanese",
    flag: "/Language/Japan.png",
    description: "Japanese is for anime and innovation!",
  },
  {
    name: "Mandarin",
    flag: "/Language/China.png",
    description: "Mandarin is for global communication!",
  },
];

const LanguageComponent = () => {
  const [hoveredLanguage, setHoveredLanguage] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        WHICH{" "}
        <span
          style={{
            color: "red",
          }}
        >
          LANGUAGE
        </span>{" "}
        WOULD YOU LIKE TO LEARN?
      </h1>

      <div className={styles.contentContainer}>

        {/* left section */}
        <div className={styles.leftSection}>
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={styles.languageCard}
              onMouseEnter={() => setHoveredLanguage(lang.description)}
              onMouseLeave={() => setHoveredLanguage("")}
            >
              {hoveredLanguage === lang.description && (
                <div className={styles.hoverText}>{hoveredLanguage}</div>
              )}

              <div className={styles.flag}>
                <img src={lang.flag} alt="" />
              </div>
              <div className={styles.languageName}>{lang.name}</div>
            </div>
          ))}

          <div className={styles.hoverHelp}>
            Need help to pick one? Hover on the language to sneak a little
          </div>
        </div>

          {/* right section */}
        <div className={styles.rightSection}>
          <img
            src="/Language/right.png"
            alt="Learning"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageComponent;
