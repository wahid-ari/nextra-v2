import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function BlogIndex({ more = "Read more" }) {
  const length = getPagesUnderRoute("/blog").length
  return getPagesUnderRoute("/blog").map((page, index) => {
    return (
      <div key={index + 1} className="my-8">
        <h3 className="text-2xl text-neutral-800 font-medium">
          <Link href={page.route} className="text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all no-underline">
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h3>
        <p className="opacity-80 !mt-0 pt-3">
          {page.frontMatter?.description}{" "}
          <Link href={page.route} className="text-blue-500 hover:text-blue-600 hover:underline transition-all duration-300">
            {more + " ➔"}
          </Link>
        </p>
        {page.frontMatter?.date ? (
          <p className="text-gray-600 dark:text-neutral-400 text-sm !mt-0 pt-2.5 flex items-center gap-1">
            <CalendarDaysIcon className="h-5 w-5" />
            {page.frontMatter.date}
          </p>
        ) : null}
        {index + 1 < length && <hr className="border-t dark:border-neutral-800 mt-10" />}
      </div>
    );
  });
}

{/* <Link href={page.route} passHref key={index + 1}>
  <div className="mt-8 mb-10 group">
    <h3 className="text-2xl text-neutral-800 font-medium dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-500 transition-all duration-300">
      {page.meta?.title || page.frontMatter?.title || page.name}
    </h3>
    <p className="opacity-80 !mt-0 pt-3">
      {page.frontMatter?.description}{" "}
      <Link href={page.route} className="text-blue-500 hover:text-blue-600 transition-all">
        {more + " ➔"}
      </Link>
    </p>
    {page.frontMatter?.date ? (
      <p className="text-gray-600 dark:text-neutral-400 text-sm !mt-0 pt-3 flex items-center gap-1">
        <CalendarDaysIcon className="h-5 w-5" />
        {page.frontMatter.date}
      </p>
    ) : null}
  </div>
  {index + 1 < length && <hr className="border-t dark:border-neutral-800 mt-10" />}
</Link> */}