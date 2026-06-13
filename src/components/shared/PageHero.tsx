import Image from 'next/image';

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHero({title, subtitle, image}: Props) {
  return (
    <section className="relative overflow-hidden bg-phd-primary text-white">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-phd-primary-dark/95 via-phd-primary/90 to-phd-primary-light/80" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <span className="mb-3 inline-block h-1 w-12 rounded-full bg-phd-gold" aria-hidden />
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
