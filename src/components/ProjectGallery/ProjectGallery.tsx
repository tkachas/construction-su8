import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "../../types/project";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: images.length > 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.gallery} aria-label={`Фотографии объекта: ${projectTitle}`}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {images.map((image, index) => (
            <figure className={styles.slide} key={`${image.alt}-${index}`}>
              {image.src ? (
                <div className={styles.imageFrame}>
                  <img className={styles.imageBackdrop} src={image.src} alt="" aria-hidden loading="lazy" decoding="async" />
                  <img
                    className={styles.image}
                    src={image.src}
                    srcSet={image.srcSet}
                    sizes={image.sizes ?? "(max-width: 760px) 100vw, 52vw"}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              ) : (
                <div className={styles.placeholder} role="img" aria-label={image.alt}>
                  <span>{index === 0 ? "Основное фото будет добавлено" : "Фото будет добавлено"}</span>
                </div>
              )}
              {/* <figcaption>
                <span>{image.caption ?? `Фото ${index + 1}`}</span>
                <span>{index + 1} / {images.length}</span>
              </figcaption> */}
            </figure>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            type="button"
            onClick={scrollPrev}
            aria-label="Предыдущее фото"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            type="button"
            onClick={scrollNext}
            aria-label="Следующее фото"
          >
            <ChevronRight size={20} aria-hidden />
          </button>

          <div className={styles.indicators} aria-label="Навигация по фотографиям">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === selectedIndex ? styles.indicatorActive : ""}`}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Показать фото ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
