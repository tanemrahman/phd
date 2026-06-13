type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({title, subtitle}: Props) {
  return (
    <section className="relative overflow-hidden bg-phd-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-phd-primary-dark via-phd-primary to-phd-primary-light" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
