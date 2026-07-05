import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./ScrollToTop.module.css";

const visibilityThreshold = 520;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY > visibilityThreshold;
      setIsVisible((current) => (current === shouldShow ? current : shouldShow));
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  return (
    <button
      aria-label="Вернуться наверх"
      className={styles.button}
      data-visible={isVisible}
      onClick={handleClick}
      title="Наверх"
      type="button"
    >
      <ArrowUp size={22} strokeWidth={2.4} aria-hidden />
    </button>
  );
}
