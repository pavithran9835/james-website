interface NutritionTableProps {
  facts: { label: string; value: string }[];
}

export function NutritionTable({ facts }: NutritionTableProps) {
  if (facts.length === 0) return null;

  return (
    <div className="border border-outline-variant">
      <div className="bg-surface-container-low px-6 py-3 border-b border-outline-variant">
        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
          Nutrition Facts
        </span>
      </div>
      <dl>
        {facts.map((fact, index) => (
          <div
            key={fact.label}
            className={
              index < facts.length - 1
                ? "flex flex-wrap justify-between gap-4 px-6 py-3 border-b border-outline-variant/60"
                : "flex flex-wrap justify-between gap-4 px-6 py-3"
            }
          >
            <dt className="text-on-surface-variant text-sm">{fact.label}</dt>
            <dd className="text-primary font-bold text-sm text-right">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
