interface CertificationBadgesProps {
  certifications: string[];
}

export function CertificationBadges({ certifications }: CertificationBadgesProps) {
  if (certifications.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {certifications.map((cert) => (
        <span
          key={cert}
          className="px-4 py-2 border border-secondary text-label-caps font-label-caps text-secondary rounded-full uppercase"
        >
          {cert}
        </span>
      ))}
    </div>
  );
}
