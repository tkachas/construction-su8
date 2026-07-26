import { ArrowRight, Building2, Info } from "lucide-react";
import { company } from "../../data/company";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Строительная компания с 1971 года</span>
          <h1>История СУ-8 Белгородстрой через реализованные объекты</h1>
          <p>
            Корпоративное портфолио о масштабе, сроках и результатах: ключевые объекты в таймлайне и
            полный реестр реализованных проектов.
          </p>
          <div className={styles.actions}>
            <a className="button buttonPrimary" href="#projects">
              Витрина
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="button" href="#archive">
              Все объекты
            </a>
          </div>
        </div>

        <div className={styles.panel} aria-label="Инженерный визуальный блок">
          <div className={styles.panelHeader}>
            <Building2 size={22} aria-hidden />
            <span>Портфолио объектов</span>
          </div>
          <div className={styles.blueprint}>
            <span>Фото объектов будут добавлены после передачи материалов</span>
          </div>
          <dl className={styles.metrics}>
            {company.metrics.map((metric, index) => {
              const tooltipId = `company-metric-note-${index}`;

              return (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>
                    <span>{metric.label}</span>
                    {metric.note && (
                      <span className={styles.metricNote}>
                        <button
                          type="button"
                          className={styles.noteTrigger}
                          aria-label={`Примечание: ${metric.note}`}
                          aria-describedby={tooltipId}
                        >
                          <Info size={13} strokeWidth={2.2} aria-hidden />
                        </button>
                        <span className={styles.noteTooltip} id={tooltipId} role="tooltip">
                          {metric.note}
                        </span>
                      </span>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
