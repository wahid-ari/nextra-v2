import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Authors({ date, children }) {
  return (
    <div className="mt-4 mb-10 text-gray-400 text-sm flex flex-wrap items-center gap-x-1 gap-y-2">
      <CalendarDaysIcon className="h-5 w-5" /> {date} by {children}
    </div>
  );
}

export function Author({ name, link }) {
  return (
    <span className="after:content-[','] last:after:content-['']">
      <a
        key={name}
        href={link}
        target="_blank"
        className="mx-1 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-200"
      >
        {name}
      </a>
    </span>
  );
}