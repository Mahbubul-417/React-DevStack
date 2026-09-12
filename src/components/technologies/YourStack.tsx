import type { Technology } from "./technologyTypes";

type Props = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: Props) => {
  return (
    <aside className="h-fit w-full rounded-xl border border-slate-200 bg-white p-4 lg:w-64">

      <h2 className="text-sm font-bold text-slate-800">
        Your Stack
      </h2>

      <p className="mt-1 text-[9px] text-slate-400">
        {stack.length} Technology
        {stack.length !== 1 ? "s" : ""} Selected
      </p>

      {stack.length === 0 ? (

        <div className="py-10 text-center">

          <p className="text-xs font-medium text-slate-500">
            Your stack is empty
          </p>

          <p className="mt-2 text-[9px] leading-relaxed text-slate-400">
            Add technologies from the list to build your stack.
          </p>

        </div>

      ) : (

        <div className="mt-4 flex flex-col gap-2">

          {stack.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center rounded-md border border-slate-200 p-2"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="h-6 w-6 object-contain"
              />

              <div className="ml-2 flex-1">

                <p className="text-[10px] font-semibold text-slate-700">
                  {technology.name}
                </p>

                <p className="text-[8px] text-slate-400">
                  {technology.category}
                </p>

              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-lg text-slate-400 hover:text-red-500"
              >
                ×
              </button>

            </div>

          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 rounded-md border border-red-200 py-2 text-[9px] text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>

        </div>

      )}

    </aside>
  );
};

export default YourStack;