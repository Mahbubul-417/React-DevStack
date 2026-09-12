import type { Technology } from "./technologyTypes";

type Props = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: Props) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="flex items-center justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="h-7 w-7 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-medium text-blue-500">
          {technology.badge}
        </span>

      </div>

      <h2 className="mt-3 text-sm font-bold text-slate-800">
        {technology.name}
      </h2>

      <p className="mt-2 min-height: 45px text-[10px] leading-relaxed text-slate-400">
        {technology.description}
      </p>

      <div className="mt-4 mb-3 flex items-center gap-2 text-[9px] text-slate-500">

        <span className="rounded bg-slate-100 px-2 py-1">
          {technology.category}
        </span>

        <span className="flex-1">
          {technology.difficulty}
        </span>

        <span>
          <span className="text-yellow-400">★</span>{" "}
          {technology.rating}
        </span>

      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full rounded-md py-2 text-[10px] font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;