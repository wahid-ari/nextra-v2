import cn from 'clsx'
import Link from 'next/link'

import styles from './style.module.css'

export function Card({
  children,
  title,
  icon,
  image,
  arrow,
  demo,
  href,
  ...props
}) {
  const animatedArrow = arrow ? (
    <span
      className={cn(
        'transition-transform duration-200',
        'group-hover:translate-x-[6px]'
      )}
    >
      →
    </span>
  ) : null

  if (image) {
    return (
      <Link
        href={href}
        className={cn(
          styles.card,
          "group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800", 
          "bg-neutral-100 dark:bg-neutral-900 text-current no-underline transition-all duration-200",
          "hover:shadow-lg dark:hover:shadow-neutral-800"
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            styles.title,
            'gap-2 p-4 text-neutral-600 dark:text-neutral-300 transition-all duration-200',
            'group-hover:text-neutral-900 dark:group-hover:text-neutral-100'
          )}
        >
          {icon}
          <span className="flex gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        styles.card,
        'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none',
        'hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none'
      )}
      {...props}
    >
      <span
        className={cn(
          styles.title,
          'gap-2 p-4 text-gray-700 dark:text-neutral-200',
          'hover:text-gray-900 dark:hover:text-neutral-50'
        )}
      >
        {icon}
        {title}
        {animatedArrow}
      </span>
    </Link>
  )
}

export function Cards({ children, num, ...props }) {
  return (
    <div
      className={cn(styles.cards, 'mt-4 gap-4')}
      {...props}
      style={
        {
          '--rows': num || 3,
          ...props.style
        }
      }
    >
      {children}
    </div>
  )
}