import styles from "./BackgroundSwitcher.module.css";

export const backgroundVariants = ["clean", "material", "sections"] as const;

export type BackgroundVariant = (typeof backgroundVariants)[number];

const labels: Record<BackgroundVariant, string> = {
  clean: "Чистый",
  material: "Фактура",
  sections: "Секции"
};

type BackgroundSwitcherProps = {
  value: BackgroundVariant;
  onChange: (value: BackgroundVariant) => void;
};

export function isBackgroundVariant(value: string | null): value is BackgroundVariant {
  return backgroundVariants.includes(value as BackgroundVariant);
}

export function BackgroundSwitcher({ value, onChange }: BackgroundSwitcherProps) {
  return (
    <div className={styles.switcher} aria-label="Вариант фона" role="group">
      {backgroundVariants.map((variant) => (
        <button
          aria-pressed={value === variant}
          className={value === variant ? styles.active : ""}
          key={variant}
          type="button"
          onClick={() => onChange(variant)}
        >
          {labels[variant]}
        </button>
      ))}
    </div>
  );
}
