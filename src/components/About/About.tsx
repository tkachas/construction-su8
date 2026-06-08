import { company } from "../../data/company";
import styles from "./About.module.css";

const facts = [
  "Жилищное строительство",
  "Объекты соцкультбыта",
  "Производственные объекты",
  "Инженерные сети",
  "Благоустройство",
  "Капитальный ремонт"
];

export function About() {
  return (
    <section className="section" id="about">
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">О компании</span>
          <h2 className="section-title">{company.shortName}</h2>
        </div>
        <div className={styles.content}>
          {company.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.factGrid} aria-label="Профиль работ компании">
            {facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
