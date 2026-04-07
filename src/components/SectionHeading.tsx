import { type ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface Props {
  label?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true }: Props) => (
  <AnimatedSection className={`mb-12 md:mb-16 ${centered ? "text-center max-w-2xl mx-auto" : ""}`}>
    {label && (
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
