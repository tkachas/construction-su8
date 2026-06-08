import { company } from "../../data/company";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>{company.name}</span>
        <span>ИНН {company.inn}</span>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>
    </footer>
  );
}
