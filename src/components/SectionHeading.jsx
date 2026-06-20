export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-accent mb-3 tracking-wide">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-ink-secondary text-sm sm:text-base max-w-xl">{description}</p>
      )}
    </div>
  );
}
