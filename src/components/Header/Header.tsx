import { Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "О компании", href: "#about" },
  { label: "Объекты", href: "#projects" },
  { label: "Архив", href: "#archive" },
  { label: "Контакты", href: "#contacts" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top" onClick={closeMenu} aria-label="СУ-8 Белгородстрой, на начало страницы">
          <span className={styles.logoMark}>СУ-8</span>
          <span className={styles.logoText}>Белгородстрой</span>
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`} aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className={`button buttonPrimary ${styles.navCta}`} href="#contacts" onClick={closeMenu}>
            Связаться
          </a>
        </nav>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>
    </header>
  );
}
