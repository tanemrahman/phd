type Props = {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
};

export default function SectionHeading({title, subtitle, align = 'center', light}: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span
        className={`mb-2 inline-block h-1 w-12 rounded-full ${
          light ? 'bg-phd-gold' : 'bg-phd-accent'
        } ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden
      />
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-phd-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed ${light ? 'text-white/80' : 'text-phd-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
