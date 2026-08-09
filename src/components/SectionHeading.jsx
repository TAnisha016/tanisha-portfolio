

export default function SectionHeading({
  eyebrow,
  title,
  description,
  size = "default",
}) {
  const headingSize =
    size === "large"
      ? "text-4xl sm:text-5xl"
      : "text-2xl sm:text-2xl";

  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-accent mb-3 tracking-wide">
        {eyebrow}
      </p>

      <h2
        className={`${headingSize} font-bold text-ink-primary tracking-tight mb-3`}
      >
        {title}
      </h2>

      {description && (
        <p className="text-ink-secondary text-sm sm:text-base font-semibold max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}