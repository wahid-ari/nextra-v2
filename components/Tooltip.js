import { isValidElement } from "react";
import cn from "clsx";

export default function Tooltip({ tip, children }) {
  if (!children) {
    return null;
  }

  const isText = isValidElement(children)

  return (
    <span className="group z-10 inline relative">
      {underlineWhenTextOnly(children)}
      <span className={cn("hidden group-hover:flex w-fit md:whitespace-nowrap",
        `${isText ? "mb-1.5" : "mb-0.5"} absolute bottom-full left-1/2 pb-1 -translate-x-1/2 bg-neutral-900`,
        "text-center text-slate-50 text-xs px-1.5 py-1 rounded-lg border border-slate-400")
      }>
        {tip}
      </span>
    </span>
  );
}

function underlineWhenTextOnly(children) {
  if (isValidElement(children)) {
    return children;
  }

  return (
    <span className="underline decoration-dotted decoration-2 underline-offset-4 decoration-slate-400 dark:decoration-slate-500">
      {children}
    </span>
  );
}