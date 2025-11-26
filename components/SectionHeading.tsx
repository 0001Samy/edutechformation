interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-12'}>
      <h2 className='text-4xl font-bold mb-4'>{title}</h2>
      {subtitle && <p className='text-xl text-gray-600'>{subtitle}</p>}
    </div>
  );
}
