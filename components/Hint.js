import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Hint({ className, children }) {
  return (
    <div className={`border-l-4 p-3 border-l-sky-500 rounded bg-sky-100/50 dark:bg-sky-900/20 flex gap-3 items-center ${className}`}>
      <InformationCircleIcon className="h-7 w-7 text-sky-500" />
      <div>
        {children}
      </div>
    </div>
  )
}

Hint.success = ({ className, children }) => {
  return (
    <div className={`border-l-4 p-3 border-l-emerald-500 rounded bg-emerald-100/50 dark:bg-emerald-900/20 flex gap-3 items-center ${className}`}>
      <CheckCircleIcon className="h-7 w-7 text-emerald-500" />
      <div>
        {children}
      </div>
    </div>
  )
}

Hint.warning = ({ className, children }) => {
  return (
    <div className={`border-l-4 p-3 border-l-yellow-500 rounded bg-yellow-100/50 dark:bg-yellow-900/20 flex gap-3 items-center ${className}`}>
      <ExclamationCircleIcon className="h-7 w-7 text-yellow-500" />
      <div>
        {children}
      </div>
    </div>
  )
}

Hint.danger = ({ className, children }) => {
  return (
    <div className={`border-l-4 p-3 border-l-red-500 rounded bg-red-100/50 dark:bg-red-900/20 flex gap-3 items-center ${className}`}>
      <XCircleIcon className="h-7 w-7 text-red-500" />
      <div>
        {children}
      </div>
    </div>
  )
}