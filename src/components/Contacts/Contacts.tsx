import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company";
import styles from "./Contacts.module.css";

export function Contacts() {
  return (
    <section className={`section ${styles.contacts}`} id="contacts">
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Контакты</span>
          <h2 className="section-title">Обсудить строительный проект</h2>
        </div>

        <div className={styles.contactCard}>
          <a href={`tel:${company.phone.replace(/\D/g, "")}`}>
            <Phone size={20} aria-hidden />
            <span>
              <small>Телефон / факс</small>
              {company.phone}
            </span>
          </a>
          <a href={`mailto:${company.email}`}>
            <Mail size={20} aria-hidden />
            <span>
              <small>Email</small>
              {company.email}
            </span>
          </a>
          <span>
            <MapPin size={20} aria-hidden />
            <span>
              <small>Адрес</small>
              {company.address}
            </span>
          </span>
          <div className={styles.requisites}>
            <small>Реквизиты</small>
            <strong>ИНН {company.inn}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
