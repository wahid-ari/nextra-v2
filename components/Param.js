import cn from "clsx";

export default function Param({ name, type, defaultValue, required = false, optional = false, hidden = false, nameClasses, children }) {
  if (hidden) {
    return null;
  }

  return (
    <div className="py-3 my-2 border-b dark:border-neutral-800">
      <div className="flex font-mono text-sm">
        {name && (
          <div className="py-px flex-1 space-x-2 truncate">
            <span
              className={cn(
                "px-1 py-px rounded-md font-semibold bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
                nameClasses,
                (nameClasses && !nameClasses.includes("text-")) || !nameClasses
                  ? "dark:text-neutral-200"
                  : undefined
              )}
            >
              {name}
            </span>
            {required && (
              <span className="text-neutral-500 dark:text-neutral-300">
                Required
              </span>
            )}
            {optional && (
              <span className="text-neutral-500 dark:text-neutral-300">
                Optional
              </span>
            )}
            {defaultValue && (
              <span className="text-neutral-500 dark:text-neutral-300">
                Default: {defaultValue}
              </span>
            )}
          </div>
        )}
        {type && (
          <div className="text-neutral-600 dark:text-neutral-300">{type}</div>
        )}
      </div>
      <div className="mt-2 prose-sm prose-neutral dark:prose-dark">
        {children}
      </div>
    </div>
  );
}