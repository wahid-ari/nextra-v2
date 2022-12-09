import cn from "clsx";

export function OptionTable({ options }) {
  return (
    <div className="mt-6 mb-4 overflow-x-auto overscroll-x-contain pb-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-neutral-700">
            <th className="py-2 font-semibold">Option</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="py-2 px-6 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([option, type, description]) => (
            <tr
              key={option}
              className="border-b border-gray-100 dark:border-neutral-700/50"
            >
              <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-green-600 dark:text-green-500">
                {option}
              </td>
              <td className="whitespace-pre py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {type}
              </td>
              <td className="py-2 pl-6">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MethodTable({ options }) {
  return (
    <div className="mt-6 mb-4 overflow-x-auto overscroll-x-contain pb-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-neutral-700">
            <th className="py-2 font-semibold">Method</th>
            <th className="py-2 px-6 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([method, description]) => (
            <tr
              key={method}
              className="border-b border-gray-100 dark:border-neutral-700/50"
            >
              <td className={cn("whitespace-pre py-2 font-mono font-semibold leading-6 align-middle",
                `${method.toUpperCase() == "GET" && "text-green-600 dark:text-green-500"}`,
                `${method.toUpperCase() == "POST" && "text-sky-600 dark:text-sky-500"}`,
                `${method.toUpperCase() == "PUT" && "text-orange-600 dark:text-orange-500"}`,
                `${method.toUpperCase() == "PATCH" && "text-yellow-600 dark:text-yellow-500"}`,
                `${method.toUpperCase() == "DELETE" && "text-red-600 dark:text-red-500"}`,
              )}>
                {method}
              </td>
              <td className="py-2 px-6">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}